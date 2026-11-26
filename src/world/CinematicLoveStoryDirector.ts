import * as THREE from 'three';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import { ToothlessRigController, ToothlessRigState } from '../character/ToothlessRigController';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import {
  LightFuryRigController,
  LightFuryRigState,
} from '../character/lightfury/LightFuryRigController';
import { NordicAtmosphereController, WeatherPresetId } from './NordicAtmosphere';
import { sampleWorldTerrainHeight } from './NordicCliffWorld';
import { NorthSeaOceanController } from './NorthSeaOcean';
import { CourtshipSanctuaryController, SANCTUARY_CENTER_Z } from './CourtshipSanctuaryProps';
import { CelestialFireworksController, FireworkShellKind } from './CelestialFireworksSystem';
import {
  computeSafeCliffGroundPlacement,
  ContinuousPoseFilter,
  ContinuousTransformFilter,
  createDefaultMacroDirective,
  DragonBiomechanicalAnimator,
  DragonMacroDirective,
  enforceStrictPairwiseDragonSeparation,
} from './DragonBiomechanics';

export type StoryPlaybackMode =
  | 'playing'
  | 'awaiting-confession-choice'
  | 'accepted-playing'
  | 'declined-playing'
  | 'declined-finished'
  | 'completed-awaiting-explore'
  | 'free-explore';

export interface CinematicLoveStoryCallbacks {
  onReachConfessionPrompt: () => void;
  onDeclineProgress: (fade01: number) => void;
  onDeclineComplete: () => void;
  onReachMovieComplete: () => void;
  onEnterFreeExplore: (finalCamPos: THREE.Vector3, finalCamTarget: THREE.Vector3) => void;
}

export interface StoryFrameStep {
  worldTimeSec: number;
  focusPoint: THREE.Vector3;
}

export interface CinematicLoveStoryController {
  update: (dt: number) => StoryFrameStep;
  applyBiomechanicalPostPass: (dt: number) => void;
  isCameraLocked: () => boolean;
  getMode: () => StoryPlaybackMode;
  getStoryTimeSec: () => number;
  setConfessionHoverBias: (bias: number) => void;
  chooseYes: () => void;
  chooseNo: () => void;
  enterFreeExplore: () => void;
  replayStory: () => void;
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp01((x - e0) / Math.max(1e-5, e1 - e0));
  return t * t * (3 - 2 * t);
}

function smootherstep(e0: number, e1: number, x: number): number {
  const t = clamp01((x - e0) / Math.max(1e-5, e1 - e0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number): number {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export const CONFESSION_PAUSE_SEC = 88.0;
export const TOTAL_MOVIE_SEC = 120.0;

export function createCinematicLoveStoryDirector(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  atmosphere: NordicAtmosphereController,
  ocean: NorthSeaOceanController,
  toothless: ToothlessCharacterAsset,
  toothlessController: ToothlessRigController,
  lightFury: LightFuryCharacterAsset,
  lightFuryController: LightFuryRigController,
  sanctuary: CourtshipSanctuaryController,
  fireworks: CelestialFireworksController,
  callbacks: CinematicLoveStoryCallbacks
): CinematicLoveStoryController {
  let mode: StoryPlaybackMode = 'playing';
  let storyTime = 0.0;
  let declineElapsed = 0.0;
  let postEndingElapsed = 0.0;
  let worldClock = 0.0;
  let hoverBias = 0.0;
  let smoothedHoverBias = 0.0;

  let nfFlapPhase = 0.0;
  let lfFlapPhase = 0.75;

  const nfBio = new DragonBiomechanicalAnimator(toothless, false);
  const lfBio = new DragonBiomechanicalAnimator(lightFury, true);

  const nfMacro: DragonMacroDirective = createDefaultMacroDirective();
  const lfMacro: DragonMacroDirective = createDefaultMacroDirective();

  // Continuous C1 Pose & Transform filters — guarantee 0.0 instantaneous posture or position jumps!
  const nfStateFilter = new ContinuousPoseFilter<ToothlessRigState>();
  const lfStateFilter = new ContinuousPoseFilter<LightFuryRigState>();
  const nfMacroFilter = new ContinuousPoseFilter<DragonMacroDirective>();
  const lfMacroFilter = new ContinuousPoseFilter<DragonMacroDirective>();
  const nfTransformFilter = new ContinuousTransformFilter();
  const lfTransformFilter = new ContinuousTransformFilter();

  const firedEvents = new Set<string>();
  function once(key: string, fn: () => void): void {
    if (firedEvents.has(key)) return;
    firedEvents.add(key);
    fn();
  }

  // Camera tracking state
  const smoothedCamPos = new THREE.Vector3(11.2, -7.2, 58.0);
  const smoothedCamTarget = new THREE.Vector3(6.5, -2.5, 92.0);
  let smoothedCamFov = 46;
  let camInitialized = false;
  let prevShotId = -1;

  const focusPoint = new THREE.Vector3(0, 1.2, SANCTUARY_CENTER_Z);
  const finalExploreCamPos = new THREE.Vector3(0.0, 2.32, 6.65);
  const finalExploreCamTarget = new THREE.Vector3(0.0, 1.48, SANCTUARY_CENTER_Z - 1.0);
  const tmpCamPos = new THREE.Vector3();
  const tmpCamTarget = new THREE.Vector3();
  const tmpEuler = new THREE.Euler(0, 0, 0, 'YXZ');

  // ==========================================================================
  // 1. ACT I SPLINES: Restored Sunlit Clear-Sky Ocean Wave-Skim -> Sanctuary Landing
  //    (Dragons stay > 8.2m apart in flight and land at (+3.85, -1.85) & (-3.85, -1.85))
  // ==========================================================================
  const nfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(9.5, 22.0, 178.0),
      new THREE.Vector3(14.5, 6.5, 118.0),
      new THREE.Vector3(16.2, -6.2, 68.0),
      new THREE.Vector3(11.8, -4.5, 34.0),
      new THREE.Vector3(6.8, 4.4, 12.0),
      new THREE.Vector3(4.45, 2.55, 1.85),
      new THREE.Vector3(3.85, 0.06, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  const lfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-2.5, 24.5, 184.0),
      new THREE.Vector3(3.2, 8.2, 122.0),
      new THREE.Vector3(5.4, -5.8, 70.0),
      new THREE.Vector3(1.2, -3.8, 35.5),
      new THREE.Vector3(-5.2, 4.6, 12.2),
      new THREE.Vector3(-4.45, 2.60, 1.75),
      new THREE.Vector3(-3.85, 0.06, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  // ==========================================================================
  // 2. ACT II-C SPLINES: Double-Helix Sky Waltz & Mirror-Cloak Peekaboo
  //    Starts seamlessly at (-3.15, -0.35) & (+3.15, -0.35), stays > 9.0m apart
  //    on opposite 180-deg phase sides, lands at (+3.20, -1.85) & (-3.20, -1.85)
  // ==========================================================================
  const nfWaltzSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-3.95, 0.16, 0.15),
      new THREE.Vector3(-7.4, 4.8, 8.8),
      new THREE.Vector3(-2.0, 11.2, 18.0),
      new THREE.Vector3(6.8, 15.6, 15.0),
      new THREE.Vector3(8.4, 16.8, 6.5),
      new THREE.Vector3(6.8, 11.2, 2.5),
      new THREE.Vector3(4.8, 4.6, 1.8),
      new THREE.Vector3(3.20, 0.08, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.48
  );

  const lfWaltzSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(3.95, 0.16, 0.15),
      new THREE.Vector3(7.4, 5.2, 8.8),
      new THREE.Vector3(2.0, 11.6, 4.2),
      new THREE.Vector3(-6.8, 16.0, 7.0),
      new THREE.Vector3(-8.4, 17.2, 15.5),
      new THREE.Vector3(-6.8, 11.6, 10.5),
      new THREE.Vector3(-4.8, 4.8, 2.2),
      new THREE.Vector3(-3.20, 0.08, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.48
  );

  // ==========================================================================
  // 3. SHOCKING CRIMSON / HOT-PINK + "9" "2" "7" FIREWORK CUES
  // ==========================================================================
  interface FireworkCue {
    id: string;
    timeSec: number;
    origin: THREE.Vector3;
    target: THREE.Vector3;
    kind: FireworkShellKind;
    colA: number;
    colB: number;
    scale: number;
    dur: number;
  }

  const fireworkCues: FireworkCue[] = [
    // Wave 1 (99.4s -> 103.5s): Shocking Crimson, Hot-Pink, Dahlia, Spiral & Crossette Opening!
    {
      id: 'fw_1',
      timeSec: 99.45,
      origin: new THREE.Vector3(-14, -4, -30),
      target: new THREE.Vector3(-12.5, 14.5, -28),
      kind: 'dahlia',
      colA: 0xff0e3c,
      colB: 0xff78c4,
      scale: 1.25,
      dur: 1.15,
    },
    {
      id: 'fw_2',
      timeSec: 99.85,
      origin: new THREE.Vector3(14, -4, -30),
      target: new THREE.Vector3(12.5, 15.0, -28),
      kind: 'spiral',
      colA: 0xff1488,
      colB: 0x48e5ff,
      scale: 1.25,
      dur: 1.15,
    },
    {
      id: 'fw_3',
      timeSec: 100.55,
      origin: new THREE.Vector3(0, -4, -34),
      target: new THREE.Vector3(0.0, 18.8, -32),
      kind: 'heart',
      colA: 0xff0c46,
      colB: 0xffe298,
      scale: 1.52,
      dur: 1.22,
    },
    {
      id: 'fw_4',
      timeSec: 101.40,
      origin: new THREE.Vector3(-20, -4, -35),
      target: new THREE.Vector3(-17.5, 16.5, -33),
      kind: 'crossette',
      colA: 0xff2090,
      colB: 0xffd884,
      scale: 1.22,
      dur: 1.20,
    },
    {
      id: 'fw_5',
      timeSec: 101.95,
      origin: new THREE.Vector3(20, -4, -35),
      target: new THREE.Vector3(17.5, 16.8, -33),
      kind: 'saturn',
      colA: 0x3ad8ff,
      colB: 0xff1868,
      scale: 1.28,
      dur: 1.20,
    },
    {
      id: 'fw_6',
      timeSec: 102.75,
      origin: new THREE.Vector3(-8, -4, -36),
      target: new THREE.Vector3(-7.0, 20.2, -34),
      kind: 'willow',
      colA: 0xffd97d,
      colB: 0xff2277,
      scale: 1.32,
      dur: 1.25,
    },
    {
      id: 'fw_7',
      timeSec: 103.10,
      origin: new THREE.Vector3(8, -4, -36),
      target: new THREE.Vector3(7.0, 20.4, -34),
      kind: 'peony',
      colA: 0xff1040,
      colB: 0xff88cc,
      scale: 1.28,
      dur: 1.25,
    },

    // Wave 2 (104.75s -> 109.8s): Outer framing willows for the "9"  "2"  "7" Sky Triptych!
    {
      id: 'fw_927_left_frame',
      timeSec: 105.05,
      origin: new THREE.Vector3(-26, -5, -36),
      target: new THREE.Vector3(-23.5, 12.2, -33),
      kind: 'willow',
      colA: 0xff2268,
      colB: 0xffe49c,
      scale: 1.05,
      dur: 1.15,
    },
    {
      id: 'fw_927_right_frame',
      timeSec: 105.10,
      origin: new THREE.Vector3(26, -5, -36),
      target: new THREE.Vector3(23.5, 12.2, -33),
      kind: 'willow',
      colA: 0xff2268,
      colB: 0xffe49c,
      scale: 1.05,
      dur: 1.15,
    },

    // Wave 3 (109.9s -> 118.2s): Grand Shocking Red/Pink & Gold Symphonic Finale!
    {
      id: 'fw_10',
      timeSec: 109.95,
      origin: new THREE.Vector3(-15, -4, -34),
      target: new THREE.Vector3(-13.5, 16.5, -31),
      kind: 'dahlia',
      colA: 0xff0a3c,
      colB: 0xff70bf,
      scale: 1.38,
      dur: 1.18,
    },
    {
      id: 'fw_11',
      timeSec: 110.25,
      origin: new THREE.Vector3(15, -4, -34),
      target: new THREE.Vector3(13.5, 16.8, -31),
      kind: 'dahlia',
      colA: 0xff1688,
      colB: 0xffe498,
      scale: 1.38,
      dur: 1.18,
    },
    {
      id: 'fw_12',
      timeSec: 111.15,
      origin: new THREE.Vector3(0, -4, -33),
      target: new THREE.Vector3(0.0, 20.5, -30),
      kind: 'heart',
      colA: 0xff0d44,
      colB: 0xff8ad4,
      scale: 1.72,
      dur: 1.25,
    },
    {
      id: 'fw_13',
      timeSec: 112.10,
      origin: new THREE.Vector3(-19, -5, -38),
      target: new THREE.Vector3(-17.0, 19.0, -35),
      kind: 'spiral',
      colA: 0xff1a75,
      colB: 0x52e5ff,
      scale: 1.35,
      dur: 1.25,
    },
    {
      id: 'fw_14',
      timeSec: 112.45,
      origin: new THREE.Vector3(19, -5, -38),
      target: new THREE.Vector3(17.0, 19.2, -35),
      kind: 'crossette',
      colA: 0xff124c,
      colB: 0xffe29a,
      scale: 1.35,
      dur: 1.25,
    },
    {
      id: 'fw_15',
      timeSec: 113.85,
      origin: new THREE.Vector3(-9.5, -4, -35),
      target: new THREE.Vector3(-8.5, 17.5, -32),
      kind: 'heart',
      colA: 0xff1882,
      colB: 0xffb8e2,
      scale: 1.35,
      dur: 1.20,
    },
    {
      id: 'fw_16',
      timeSec: 114.05,
      origin: new THREE.Vector3(9.5, -4, -35),
      target: new THREE.Vector3(8.5, 17.5, -32),
      kind: 'heart',
      colA: 0xff0e3e,
      colB: 0xffd88e,
      scale: 1.35,
      dur: 1.20,
    },
    {
      id: 'fw_17',
      timeSec: 115.40,
      origin: new THREE.Vector3(0, -5, -38),
      target: new THREE.Vector3(0.0, 22.0, -35),
      kind: 'willow',
      colA: 0xffe08c,
      colB: 0xff1e72,
      scale: 1.65,
      dur: 1.32,
    },
    {
      id: 'fw_18',
      timeSec: 116.50,
      origin: new THREE.Vector3(0, -4, -31),
      target: new THREE.Vector3(0.0, 16.5, -28),
      kind: 'heart',
      colA: 0xff0e48,
      colB: 0xff77c8,
      scale: 1.62,
      dur: 1.18,
    },
  ];

  // ==========================================================================
  // 4. ATMOSPHERE, CAMERA & RIG BASE HELPERS
  // ==========================================================================
  function applyAtmosphereBlend(
    fromId: WeatherPresetId,
    toId: WeatherPresetId,
    alpha: number,
    wind: number,
    rain: number,
    auroraOverride?: number,
    sunElevOffset = 0,
    sunAzimOffset = 0
  ): void {
    atmosphere.blendPresets(
      fromId,
      toId,
      clamp01(alpha),
      renderer,
      scene,
      sunElevOffset,
      sunAzimOffset
    );
    atmosphere.setWindStrength(wind);
    atmosphere.setRainIntensity(rain);
    if (auroraOverride !== undefined) {
      atmosphere.sharedUniforms.uAuroraIntensity.value = auroraOverride;
    }
  }

  function resetNeutralGroundedBase(): void {
    const nf = toothlessController.state;
    const lf = lightFuryController.state;

    nf.airborneFactor = 0;
    nf.legFlightTuck = 0;
    nf.limbStride = 0;
    nf.forelegStance = 0.05;
    nf.hindlegStance = 0.05;
    nf.spineArch = 0.05;
    nf.spineTwist = 0;
    nf.neckArch = 0.16;
    nf.neckYaw = 0;
    nf.headPitch = 0;
    nf.headYaw = 0;
    nf.headRoll = 0;
    nf.jawOpen = 0.02;
    nf.tongueExtend = 0.06;
    nf.tongueCurl = 0.06;
    nf.earPerk = 0.72;
    nf.earAsymmetry = 0;
    nf.cheekNubFlare = 0.45;
    nf.blink = 0;
    nf.squint = 0.08;
    nf.eyeYaw = 0;
    nf.eyePitch = 0;
    nf.pupilDilation = 0.76;
    nf.wingUnfurl = 0.08;
    nf.wingFlap = 0;
    nf.wingSweep = 0;
    nf.wingCamber = 0.24;
    nf.wingWristFold = 0.44;
    nf.wingTipLag = 0;
    nf.pelvicFinFlare = 0.18;
    nf.dorsalSpineSplit = 0.16;
    nf.alphaGlow = 0.04;
    nf.tailPitch = 0.14;
    nf.tailYaw = 0;
    nf.tailCurl = 0.0;
    nf.tailWaveAmp = 0;
    nf.rightTailFinFlare = 0.45;
    nf.autoSyncProstheticTail = true;
    nf.subtleBreathing = true;

    lf.airborneFactor = 0;
    lf.legFlightTuck = 0;
    lf.limbStride = 0;
    lf.forelegStance = 0.08;
    lf.hindlegStance = 0.08;
    lf.spineArch = 0.12;
    lf.spineTwist = 0;
    lf.neckArch = 0.22;
    lf.neckYaw = 0;
    lf.headPitch = 0;
    lf.headYaw = 0;
    lf.headRoll = 0;
    lf.jawOpen = 0.01;
    lf.tongueExtend = 0.04;
    lf.tongueCurl = 0.04;
    lf.earPerk = 0.76;
    lf.earAsymmetry = 0;
    lf.cheekNubFlare = 0.44;
    lf.blink = 0;
    lf.squint = 0.12;
    lf.eyeYaw = 0;
    lf.eyePitch = 0;
    lf.pupilDilation = 0.72;
    lf.wingUnfurl = 0.08;
    lf.wingFlap = 0;
    lf.wingSweep = 0;
    lf.wingCamber = 0.24;
    lf.wingWristFold = 0.48;
    lf.wingTipLag = 0;
    lf.pelvicFinFlare = 0.18;
    lf.iridescentShimmer = 0.28;
    lf.thermalCloak = 0.0;
    lf.plasmaGlow = 0.0;
    lf.tailPitch = 0.18;
    lf.tailYaw = 0;
    lf.tailCurl = 0.0;
    lf.tailWaveAmp = 0;
    lf.rightHeartFinFlare = 0.56;
    lf.leftHeartFinFlare = 0.56;
    lf.subtleBreathing = true;

    nfMacro.rearUpJoy = 0;
    nfMacro.playPawL = 0;
    nfMacro.playPawR = 0;
    nfMacro.deepCourtshipBow = 0;
    nfMacro.affectionateNuzzle = 0;
    nfMacro.protectiveWingMantle = 0;
    nfMacro.tuckInnerWingNeat = 0;
    nfMacro.compactFoldedWings = 0;
    nfMacro.lookAtMateWeight = 0;

    lfMacro.rearUpJoy = 0;
    lfMacro.playPawL = 0;
    lfMacro.playPawR = 0;
    lfMacro.deepCourtshipBow = 0;
    lfMacro.affectionateNuzzle = 0;
    lfMacro.protectiveWingMantle = 0;
    lfMacro.tuckInnerWingNeat = 0;
    lfMacro.compactFoldedWings = 0;
    lfMacro.lookAtMateWeight = 0;
  }

  function applySafeCamera(
    shotId: number,
    rawPos: THREE.Vector3,
    target: THREE.Vector3,
    fov: number,
    dt: number,
    breathTime: number,
    breathAmp = 0.026
  ): void {
    if (mode === 'free-explore') return;

    tmpCamPos.copy(rawPos);
    tmpCamPos.x += Math.sin(breathTime * 0.58) * breathAmp;
    tmpCamPos.y += Math.cos(breathTime * 0.44) * breathAmp * 0.65;

    const minGroundY = Math.max(-10.1, sampleWorldTerrainHeight(tmpCamPos.x, tmpCamPos.z) + 0.88);
    if (tmpCamPos.y < minGroundY) {
      tmpCamPos.y = minGroundY;
    }

    if (!camInitialized || shotId !== prevShotId) {
      smoothedCamPos.copy(tmpCamPos);
      smoothedCamTarget.copy(target);
      smoothedCamFov = fov;
      prevShotId = shotId;
      camInitialized = true;
    } else {
      const k = 1.0 - Math.exp(-clamp(dt, 0.001, 0.05) / 0.14);
      smoothedCamPos.lerp(tmpCamPos, k);
      smoothedCamTarget.lerp(target, k);
      smoothedCamFov = lerp(smoothedCamFov, fov, k);
    }

    if (Math.abs(camera.fov - smoothedCamFov) > 0.04) {
      camera.fov = smoothedCamFov;
      camera.updateProjectionMatrix();
    }
    camera.position.copy(smoothedCamPos);
    camera.lookAt(smoothedCamTarget);
  }

  function placeDragonOnCliff(who: 'nf' | 'lf', rawX: number, rawZ: number, yaw: number): void {
    const asset = who === 'nf' ? toothless : lightFury;
    const scale = who === 'nf' ? 1.0 : 0.92;
    const g = computeSafeCliffGroundPlacement(rawX, rawZ, yaw, scale);
    asset.rootGroup.position.set(g.x, g.y, g.z);
    tmpEuler.set(g.terrainPitch * 0.45, yaw, g.terrainRoll * 0.42, 'YXZ');
    asset.rootGroup.quaternion.setFromEuler(tmpEuler);
  }

  function placeDragonOnFlightSpline(
    who: 'nf' | 'lf',
    curve: THREE.CatmullRomCurve3,
    u: number,
    flareBlend = 0.0,
    landingYaw = 0.0
  ): { bankRoll: number; climbPitch: number } {
    const asset = who === 'nf' ? toothless : lightFury;
    const scale = who === 'nf' ? 1.0 : 0.92;
    const clampedU = clamp01(u);

    const p = curve.getPointAt(clampedU);
    const tan = curve.getTangentAt(clampedU).normalize();
    const tanAhead = curve.getTangentAt(clamp01(clampedU + 0.025)).normalize();

    const minSafeY = Math.max(-10.85, sampleWorldTerrainHeight(p.x, p.z) + 0.08);
    if (p.y < minSafeY) p.y = minSafeY;

    if (flareBlend > 0.001) {
      const g = computeSafeCliffGroundPlacement(p.x, p.z, landingYaw, scale);
      p.y = lerp(p.y, g.y, flareBlend);
      p.x = lerp(p.x, g.x, flareBlend);
      p.z = lerp(p.z, g.z, flareBlend);
    }

    const flightYaw = Math.atan2(tan.x, tan.z);
    const flightPitch = -Math.asin(clamp(tan.y, -0.82, 0.82));

    let dYaw = Math.atan2(tanAhead.x, tanAhead.z) - flightYaw;
    while (dYaw > Math.PI) dYaw -= Math.PI * 2;
    while (dYaw < -Math.PI) dYaw += Math.PI * 2;
    const bankRoll = clamp(-dYaw * 3.1, -0.68, 0.68) * (1.0 - flareBlend);

    const finalYaw = lerpAngle(flightYaw, landingYaw, flareBlend);
    const finalPitch = lerp(flightPitch * 0.72, 0.0, flareBlend);

    asset.rootGroup.position.copy(p);
    tmpEuler.set(finalPitch, finalYaw, bankRoll, 'YXZ');
    asset.rootGroup.quaternion.setFromEuler(tmpEuler);

    return { bankRoll, climbPitch: flightPitch };
  }

  function updateMateWorldTargets(timeSec: number): void {
    nfMacro.timeSec = timeSec;
    lfMacro.timeSec = timeSec;

    toothless.rootGroup.updateMatrixWorld(false);
    lightFury.rootGroup.updateMatrixWorld(false);

    nfMacro.mateWorldPos.copy(lightFury.rootGroup.position);
    nfMacro.mateWorldPos.y += 1.25;
    lfMacro.mateWorldPos.copy(toothless.rootGroup.position);
    lfMacro.mateWorldPos.y += 1.32;
  }

  // ==========================================================================
  // 5. MAIN 120-SECOND STORY TIMELINE (0.0s -> 120.0s)
  // ==========================================================================
  function evaluateMainStoryTimeline(t: number, dt: number, isPostComplete: boolean): void {
    resetNeutralGroundedBase();
    const nf = toothlessController.state;
    const lf = lightFuryController.state;

    // ------------------------------------------------------------------------
    // ACT I (0.0s -> 22.0s): Restored Sunlit Clear-Sky Ocean-Skim & Sanctuary Landing
    // ------------------------------------------------------------------------
    if (t < 22.0) {
      const envU = smoothstep(0.0, 22.0, t);
      applyAtmosphereBlend('clear-day', 'golden-hour', envU * 0.42, 0.36, 0);
      ocean.setOceanParams({ waveAmplitude: 0.95, waveSpeed: 1.0, seaChoppiness: 0.52 });

      const flightU = smootherstep(0.0, 21.3, t);
      const flare = smoothstep(18.0, 21.3, t);
      const settled = smoothstep(20.6, 21.8, t);
      const air = 1.0 - settled;

      const nfAero = placeDragonOnFlightSpline('nf', nfArrivalSpline, flightU, flare, -Math.PI * 0.5);
      const lfAero = placeDragonOnFlightSpline(
        'lf',
        lfArrivalSpline,
        clamp01(flightU * 1.006 - 0.006),
        flare,
        Math.PI * 0.5
      );

      const flapHz = lerp(1.55, 1.05, flare);
      nfFlapPhase += dt * flapHz * Math.PI * 2;
      lfFlapPhase += dt * (flapHz * 1.04) * Math.PI * 2;

      nf.airborneFactor = air;
      nf.legFlightTuck = (1.0 - flare) * 0.90;
      nf.wingUnfurl = lerp(0.96, 0.08, settled);
      nf.wingFlap = (Math.sin(nfFlapPhase) * (1.0 - flare * 0.65) + flare * 0.35) * 0.78 * air;
      nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.55 * (1.0 - flare * 0.6) * air;
      nf.wingSweep = -0.10 * (1.0 - flare);
      nf.spineTwist = nfAero.bankRoll * 0.35;
      nf.neckArch = lerp(0.18, 0.24, settled);
      nf.headPitch = -nfAero.climbPitch * 0.32;
      nf.forelegStance = lerp(0.25, 0.05, flare);
      nf.hindlegStance = lerp(0.25, 0.06, flare);
      nf.pelvicFinFlare = 0.85 * air + 0.18 * settled;
      nf.rightTailFinFlare = 0.88 - 0.35 * settled;
      nf.tailWaveAmp = 0.42 * air;
      nf.tailWavePhase = nfFlapPhase;

      lf.airborneFactor = air;
      lf.legFlightTuck = (1.0 - flare) * 0.90;
      lf.wingUnfurl = lerp(0.95, 0.08, settled);
      lf.wingFlap = (Math.sin(lfFlapPhase) * (1.0 - flare * 0.65) + flare * 0.35) * 0.76 * air;
      lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.55 * (1.0 - flare * 0.6) * air;
      lf.wingSweep = -0.08 * (1.0 - flare);
      lf.spineTwist = lfAero.bankRoll * 0.35;
      lf.neckArch = lerp(0.20, 0.28, settled);
      lf.headPitch = -lfAero.climbPitch * 0.32;
      lf.forelegStance = lerp(0.25, 0.08, flare);
      lf.hindlegStance = lerp(0.25, 0.08, flare);
      lf.pelvicFinFlare = 0.85 * air + 0.18 * settled;
      lf.rightHeartFinFlare = 0.88 - 0.30 * settled;
      lf.leftHeartFinFlare = 0.88 - 0.30 * settled;
      lf.tailWaveAmp = 0.42 * air;
      lf.tailWavePhase = lfFlapPhase;
      lf.iridescentShimmer = 0.78;

      nfMacro.lookAtMateWeight = 0.25 + 0.65 * settled;
      lfMacro.lookAtMateWeight = 0.25 + 0.65 * settled;

      const mid = tmpCamTarget
        .copy(toothless.rootGroup.position)
        .add(lightFury.rootGroup.position)
        .multiplyScalar(0.5);

      if (t < 8.8) {
        // Shot 1: Iconic Sunlit Clear-Sky Low Ocean-Skim Establishing Shot!
        const cPos = new THREE.Vector3(11.2, -7.2, 58.0).lerp(
          new THREE.Vector3(18.5, -5.0, 42.0),
          t / 8.8
        );
        mid.y += 0.6;
        applySafeCamera(1, cPos, mid, 46, dt, t, 0.055);
      } else if (t < 15.6) {
        // Shot 2: Sweeping Aerial Tracking Pan up toward the Sunlit Emerald Headland!
        const s = (t - 8.8) / (15.6 - 8.8);
        const cPos = new THREE.Vector3(
          mid.x + lerp(13.5, 9.5, s),
          mid.y + lerp(2.2, 3.6, s),
          mid.z + lerp(15.5, 11.8, s)
        );
        mid.y += 0.5;
        applySafeCamera(2, cPos, mid, 43, dt, t, 0.045);
      } else {
        // Shot 3: Hero Cliff Flare & Four-Paw Touchdown Two-Shot!
        const s = smootherstep(15.6, 21.8, t);
        const cPos = new THREE.Vector3(
          lerp(6.8, 0.0, s),
          lerp(3.8, 2.35, s),
          lerp(11.5, 8.20, s)
        );
        mid.lerp(new THREE.Vector3(0.0, 1.30, SANCTUARY_CENTER_Z), s);
        applySafeCamera(3, cPos, mid, 39, dt, t, 0.032);
      }
      return;
    }

    // ------------------------------------------------------------------------
    // ACT II (22.0s -> 54.0s): Coy Greeting, Face-to-Face Circle & Sky Helix Waltz
    // ------------------------------------------------------------------------
    if (t < 54.0) {
      const envU = smoothstep(22.0, 52.0, t);
      applyAtmosphereBlend('clear-day', 'golden-hour', 0.42 + envU * 0.58, 0.30, 0);
      ocean.setOceanParams({ waveAmplitude: 0.72, waveSpeed: 0.92, seaChoppiness: 0.42 });

      if (t < 30.5) {
        // Scene II-A (22.0 -> 30.5s): Playful Rear-Up & Wing Display + Coy Peek!
        // Seamless from (+3.85, -1.85) & (-3.85, -1.85) -> (+3.35, -1.85) & (-3.35, -1.85) (6.70m apart!)
        const stepIn = smootherstep(22.0, 30.2, t);
        placeDragonOnCliff('nf', lerp(3.85, 3.35, stepIn), SANCTUARY_CENTER_Z, -Math.PI * 0.5);
        placeDragonOnCliff('lf', lerp(-3.85, -3.35, stepIn), SANCTUARY_CENTER_Z, Math.PI * 0.5);

        nfMacro.lookAtMateWeight = 0.85;
        lfMacro.lookAtMateWeight = 0.88;

        const rearWindow = smoothstep(23.8, 25.0, t) * (1.0 - smoothstep(28.0, 29.5, t));
        nfMacro.rearUpJoy = rearWindow * 0.80;

        const coyPawWindow = smoothstep(26.6, 27.5, t) * (1.0 - smoothstep(29.2, 30.2, t));
        lfMacro.playPawR = coyPawWindow * 0.85;

        const hopBob = Math.max(0, Math.sin((t - 23.0) * 5.2)) * (t > 23.0 && t < 29.4 ? 1 : 0);

        nf.forelegStance = -0.12 + rearWindow * 0.22;
        nf.hindlegStance = 0.14 + rearWindow * 0.20;
        nf.neckArch = 0.30;
        nf.headRoll = Math.sin(t * 2.2) * 0.14;
        nf.jawOpen = 0.20 * hopBob;
        nf.tongueExtend = 0.24 * hopBob;
        nf.pupilDilation = 0.95;
        nf.earPerk = 0.90;
        nf.wingUnfurl = 0.08 + 0.56 * rearWindow;
        nf.wingFlap = Math.sin(t * 6.8) * 0.22 * rearWindow;
        nf.alphaGlow = 0.14 + 0.24 * rearWindow;

        const coyWindow = smoothstep(22.8, 24.4, t) * (1.0 - smoothstep(28.0, 29.8, t));
        lf.forelegStance = 0.10;
        lf.neckArch = 0.30;
        lf.headRoll = 0.20;
        lf.wingUnfurl = 0.08 + coyWindow * 0.28;
        lf.wingSweep = 0.18 * coyWindow;
        lf.earPerk = 0.88;
        lf.pupilDilation = 0.88;
        lf.squint = 0.22 * (1.0 - coyWindow);
        lf.iridescentShimmer = 0.82;

        // Shot 4: Intimate Low Over-the-Shoulder Greeting Two-Shot
        const u = (t - 22.0) / (30.5 - 22.0);
        const cPos = new THREE.Vector3(lerp(-1.2, 1.2, u), lerp(2.15, 1.85, u), lerp(7.80, 6.95, u));
        tmpCamTarget.set(0.0, 1.32, SANCTUARY_CENTER_Z);
        applySafeCamera(4, cPos, tmpCamTarget, 37, dt, t, 0.028);
      } else if (t < 40.5) {
        // Scene II-B (30.5 -> 40.5s): True 4-Beat Face-to-Face Courtship Circle!
        // theta: 0 -> PI => nf(+3.35, -1.85) -> (-3.95, -1.85), lf(-3.35, -1.85) -> (+3.95, -1.85)
        const circleU = smootherstep(30.5, 40.5, t);
        const theta = circleU * Math.PI;
        const rx = lerp(3.35, 3.95, circleU);
        const rz = 1.80;

        const nfAngle = theta;
        const lfAngle = theta + Math.PI;

        const nfX = Math.cos(nfAngle) * rx;
        const nfZ = SANCTUARY_CENTER_Z - Math.sin(nfAngle) * rz;
        const lfX = Math.cos(lfAngle) * rx;
        const lfZ = SANCTUARY_CENTER_Z - Math.sin(lfAngle) * rz;

        const nfTanYaw = Math.atan2(-Math.sin(nfAngle) * rx, -Math.cos(nfAngle) * rz);
        const lfTanYaw = Math.atan2(-Math.sin(lfAngle) * rx, -Math.cos(lfAngle) * rz);

        const nfToLfYaw = Math.atan2(lfX - nfX, lfZ - nfZ);
        const lfToNfYaw = Math.atan2(nfX - lfX, nfZ - lfZ);

        const startBlend = smoothstep(30.5, 32.2, t);
        const endBlend = smootherstep(38.4, 40.5, t);
        const walkInward = 0.36 * startBlend * (1.0 - endBlend);

        // Unwrapped continuous headings (avoids +-PI branch cut when turning toward +Z at t~39.9s!)
        const nfHeading = lerpAngle(lerpAngle(-Math.PI * 0.5, nfTanYaw, startBlend), 0.0, endBlend);
        const lfBaseTan = lfTanYaw < 0 ? lfTanYaw + Math.PI * 2 : lfTanYaw;
        const lfHeading = lerp(lerp(Math.PI * 0.5, lfBaseTan, startBlend), 0.0, endBlend);

        placeDragonOnCliff('nf', nfX, nfZ, lerpAngle(nfHeading, nfToLfYaw, walkInward));
        placeDragonOnCliff('lf', lfX, lfZ, lerpAngle(lfHeading, lfToNfYaw, walkInward));

        nfMacro.lookAtMateWeight = 0.92;
        lfMacro.lookAtMateWeight = 0.92;
        nfMacro.compactFoldedWings = 0.65;
        lfMacro.compactFoldedWings = 0.65;

        sanctuary.setWildflowerBloom(0.26 + 0.18 * circleU);

        nf.wingUnfurl = 0.08;
        nf.neckArch = 0.30;
        nf.earPerk = 0.90;
        nf.pupilDilation = 0.92;

        lf.wingUnfurl = 0.08;
        lf.neckArch = 0.32;
        lf.headRoll = 0.14;
        lf.earPerk = 0.92;
        lf.pupilDilation = 0.90;
        lf.squint = 0.24;
        lf.iridescentShimmer = 0.88;

        // Shot 5: Sweeping Golden-Hour Orbiting Crane around their Courtship Circle
        const camAngle = circleU * 1.35 - 0.55;
        const cPos = new THREE.Vector3(
          Math.sin(camAngle) * 8.4,
          2.65 + Math.sin(circleU * Math.PI) * 1.0,
          SANCTUARY_CENTER_Z + Math.cos(camAngle) * 8.4
        );
        tmpCamTarget.set(0.0, 1.25, SANCTUARY_CENTER_Z);
        applySafeCamera(5, cPos, tmpCamTarget, 39, dt, t, 0.032);
      } else if (t < 42.4) {
        // Scene II-C1 (40.5 -> 42.4s): Running Takeoff & Coiled Launch Crouch at Cliff Lip!
        const runU = smootherstep(40.5, 42.4, t);
        const crouchCoil = smoothstep(41.1, 42.1, t) * (1.0 - smoothstep(42.1, 42.4, t) * 0.5);
        const wingRaise = smoothstep(41.2, 42.4, t);

        placeDragonOnCliff('nf', -3.95, lerp(SANCTUARY_CENTER_Z, 0.15, runU), -0.16 * runU);
        placeDragonOnCliff('lf', 3.95, lerp(SANCTUARY_CENTER_Z, 0.15, runU), 0.16 * runU);

        nf.forelegStance = -0.45 * crouchCoil;
        nf.hindlegStance = -0.40 * crouchCoil;
        nf.wingUnfurl = lerp(0.10, 0.92, runU);
        nf.wingFlap = 0.68 * wingRaise;
        nf.neckArch = 0.26;
        nf.earPerk = 0.88;

        lf.forelegStance = -0.42 * crouchCoil;
        lf.hindlegStance = -0.38 * crouchCoil;
        lf.wingUnfurl = lerp(0.10, 0.92, runU);
        lf.wingFlap = 0.68 * wingRaise;
        lf.neckArch = 0.28;
        lf.earPerk = 0.88;

        nfFlapPhase = Math.PI * 0.5;
        lfFlapPhase = Math.PI * 0.5;

        const cPos = new THREE.Vector3(0.0, 2.55, 8.8);
        tmpCamTarget.set(0.0, 1.35, -0.8);
        applySafeCamera(6, cPos, tmpCamTarget, 44, dt, t, 0.035);
      } else {
        // Scene II-C2 (42.4 -> 54.0s): Spiraling Sky Helix & Mirror-Cloak Peekaboo!
        const waltzU = smootherstep(42.4, 53.5, t);
        const liftoff = smoothstep(42.4, 43.8, t);
        const landFlare = smoothstep(50.8, 53.5, t);
        const settled = smoothstep(53.0, 53.9, t);
        const air = liftoff * (1.0 - settled);

        const nfAero = placeDragonOnFlightSpline(
          'nf',
          nfWaltzSpline,
          waltzU,
          Math.max(1.0 - liftoff, landFlare),
          t < 45.0 ? -0.16 : -Math.PI * 0.5
        );
        const lfAero = placeDragonOnFlightSpline(
          'lf',
          lfWaltzSpline,
          waltzU,
          Math.max(1.0 - liftoff, landFlare),
          t < 45.0 ? 0.16 : Math.PI * 0.5
        );

        const cloakPulse = smoothstep(45.8, 46.5, t) * (1.0 - smoothstep(49.4, 50.1, t));
        if (t >= 46.3) {
          once('cloak_out', () => sanctuary.spawnShimmerBurst(lightFury.rootGroup.position, false, 65));
        }
        if (t >= 49.6) {
          once('cloak_in', () => sanctuary.spawnShimmerBurst(lightFury.rootGroup.position, false, 65));
        }

        nfFlapPhase += dt * 1.45 * Math.PI * 2;
        lfFlapPhase += dt * 1.48 * Math.PI * 2;

        nf.airborneFactor = air;
        nf.legFlightTuck = liftoff * (1.0 - landFlare) * 0.90;
        nf.wingUnfurl = lerp(0.96, 0.10, settled);
        nf.wingFlap = (Math.sin(nfFlapPhase) * (1.0 - landFlare * 0.65) + landFlare * 0.35) * 0.78 * (1.0 - settled);
        nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.55 * (1.0 - landFlare * 0.6) * air;
        nf.spineTwist = nfAero.bankRoll * 0.40;
        nf.headYaw = cloakPulse * Math.sin(t * 5.2) * 0.42;
        nf.forelegStance = lerp(0.22, 0.06, landFlare) * liftoff;
        nf.hindlegStance = lerp(0.22, 0.06, landFlare) * liftoff;
        nf.pelvicFinFlare = 0.85 * air + 0.18 * (1.0 - air);
        nf.tailWaveAmp = 0.42 * air;
        nf.tailWavePhase = nfFlapPhase;

        lf.airborneFactor = air;
        lf.legFlightTuck = liftoff * (1.0 - landFlare) * 0.90;
        lf.wingUnfurl = lerp(0.95, 0.10, settled);
        lf.wingFlap = (Math.sin(lfFlapPhase) * (1.0 - landFlare * 0.65) + landFlare * 0.35) * 0.78 * (1.0 - settled);
        lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.55 * (1.0 - landFlare * 0.6) * air;
        lf.spineTwist = lfAero.bankRoll * 0.40;
        lf.forelegStance = lerp(0.22, 0.08, landFlare) * liftoff;
        lf.hindlegStance = lerp(0.22, 0.08, landFlare) * liftoff;
        lf.thermalCloak = cloakPulse * 0.92;
        lf.plasmaGlow = smoothstep(45.4, 46.3, t) * (1.0 - smoothstep(46.5, 47.2, t)) * 0.88;
        lf.iridescentShimmer = 0.96;
        lf.tailWaveAmp = 0.42 * air;
        lf.tailWavePhase = lfFlapPhase;

        const mid = tmpCamTarget
          .copy(toothless.rootGroup.position)
          .add(lightFury.rootGroup.position)
          .multiplyScalar(0.5);
        const cPos = new THREE.Vector3(
          Math.sin(waltzU * 2.2) * 15.5,
          Math.max(2.6, mid.y - 1.8),
          mid.z + 18.5
        );
        if (landFlare > 0.01) {
          cPos.lerp(new THREE.Vector3(0.0, 2.55, SANCTUARY_CENTER_Z + 9.2), landFlare);
          mid.lerp(new THREE.Vector3(0.0, 1.25, SANCTUARY_CENTER_Z), landFlare);
        }
        applySafeCamera(6, cPos, mid, 45, dt, t, 0.042);
      }
      return;
    }

    // ------------------------------------------------------------------------
    // ACT III (54.0s -> 78.0s): Accelerated Seasons Montage & 360-Deg Orbital Crane
    // ------------------------------------------------------------------------
    if (t < 78.0) {
      const actU = (t - 54.0) / 24.0;
      const sunAzimTurn = actU * 155;
      sanctuary.setWildflowerBloom(0.44 + 0.24 * actU);

      if (t < 60.0) {
        // Scene III-A (54.0 -> 60.0s): Golden-Hour -> Amber Dusk + 360-Deg Circle
        // theta: 0 -> 2*PI => starts at (+3.20, -1.85) & (-3.20, -1.85), ends at (+2.85, -1.85) & (-2.85, -1.85)
        const sub = smootherstep(54.0, 60.0, t);
        applyAtmosphereBlend('golden-hour', 'dawn-dusk', sub, 0.34, 0, undefined, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.58, waveSpeed: 0.88, seaChoppiness: 0.38 });

        const theta = sub * Math.PI * 2.0;
        const rx = lerp(3.20, 2.85, sub);
        const rz = 1.72;

        const nfX = Math.cos(theta) * rx;
        const nfZ = SANCTUARY_CENTER_Z - Math.sin(theta) * rz;
        const lfX = Math.cos(theta + Math.PI) * rx;
        const lfZ = SANCTUARY_CENTER_Z - Math.sin(theta + Math.PI) * rz;

        const nfTanYaw = Math.atan2(-Math.sin(theta) * rx, -Math.cos(theta) * rz);
        const lfTanYaw = Math.atan2(-Math.sin(theta + Math.PI) * rx, -Math.cos(theta + Math.PI) * rz);

        placeDragonOnCliff('nf', nfX, nfZ, nfTanYaw);
        placeDragonOnCliff('lf', lfX, lfZ, lfTanYaw);

        nfMacro.lookAtMateWeight = 0.65;
        lfMacro.lookAtMateWeight = 0.65;

        const playHop = Math.max(0, Math.sin(t * 4.4)) * (1.0 - smoothstep(58.5, 59.8, t));
        nf.wingUnfurl = 0.12 + 0.24 * playHop;
        nf.wingFlap = 0.18 * playHop;
        nf.jawOpen = 0.16 * playHop;
        nf.earPerk = 0.92;

        lf.wingUnfurl = 0.10 + 0.22 * playHop;
        lf.wingFlap = 0.18 * playHop;
        lf.earPerk = 0.92;
      } else if (t < 66.5) {
        // Scene III-B (60.0 -> 66.5s): First Starlit Night, Shooting Stars & Non-Intersecting Cozy Perch
        const envP = smoothstep(60.0, 63.2, t);
        applyAtmosphereBlend('dawn-dusk', 'starlit-night', envP, 0.28, 0, envP * 0.92, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.45, waveSpeed: 0.80, seaChoppiness: 0.32 });

        const settle = smootherstep(60.0, 62.6, t);
        placeDragonOnCliff(
          'nf',
          lerp(2.85, 1.08, settle),
          lerp(SANCTUARY_CENTER_Z, -2.02, settle),
          lerpAngle(-Math.PI * 0.5, -0.14, settle)
        );
        placeDragonOnCliff(
          'lf',
          lerp(-2.85, -1.02, settle),
          lerp(SANCTUARY_CENTER_Z, -1.68, settle),
          lerpAngle(Math.PI * 0.5, 0.14, settle)
        );

        nfMacro.protectiveWingMantle = settle * 0.85;
        lfMacro.tuckInnerWingNeat = settle * 1.0;
        nfMacro.affectionateNuzzle = settle * 0.35;
        lfMacro.affectionateNuzzle = settle * 0.35;

        if (t >= 61.8) {
          once('star_1', () =>
            fireworks.spawnShootingStar(new THREE.Vector3(-28, 36, -42), new THREE.Vector3(34, -12, 6))
          );
        }
        if (t >= 63.4) {
          once('star_2', () =>
            fireworks.spawnShootingStar(new THREE.Vector3(26, 40, -48), new THREE.Vector3(-36, -14, 8))
          );
        }
        if (t >= 65.0) {
          once('star_3', () =>
            fireworks.spawnShootingStar(new THREE.Vector3(-12, 42, -45), new THREE.Vector3(30, -10, 4))
          );
        }

        const starTrackYaw = Math.sin((t - 61.5) * 1.2) * 0.24 * settle;
        nf.forelegStance = 0.14;
        nf.neckArch = 0.38;
        nf.headPitch = 0.32 * settle;
        nf.headYaw = starTrackYaw;
        nf.wingUnfurl = 0.0;
        nf.tailCurl = -0.45 * settle;
        nf.tailYaw = -0.35 * settle;
        nf.earPerk = 0.94;
        nf.pupilDilation = 0.96;
        nf.alphaGlow = 0.32;

        lf.forelegStance = 0.14;
        lf.neckArch = 0.40;
        lf.headPitch = 0.34 * settle;
        lf.headYaw = starTrackYaw;
        lf.wingUnfurl = 0.0;
        lf.tailCurl = 0.45 * settle;
        lf.tailYaw = 0.35 * settle;
        lf.earPerk = 0.95;
        lf.pupilDilation = 0.94;
        lf.iridescentShimmer = 0.65;
      } else if (t < 73.2) {
        // Scene III-C (66.5 -> 73.2s): Storm Squall & High-Clearance Protective Wing Canopy (>53cm 3D clearance!)
        const stormP = (t - 66.5) / 6.7;
        const stormBell = Math.sin(stormP * Math.PI);
        applyAtmosphereBlend(
          'starlit-night',
          'stormy-squall',
          stormBell * 0.88,
          lerp(0.32, 0.92, stormBell),
          stormBell * 0.65,
          lerp(0.88, 0.30, stormBell),
          0,
          sunAzimTurn
        );
        ocean.setOceanParams({
          waveAmplitude: lerp(0.45, 1.38, stormBell),
          waveSpeed: lerp(0.82, 1.35, stormBell),
          seaChoppiness: lerp(0.32, 0.78, stormBell),
        });

        const shield = smootherstep(66.5, 68.4, t);
        placeDragonOnCliff('nf', 1.04, -2.02, -0.14);
        placeDragonOnCliff('lf', -0.98, -1.68, 0.14);

        nfMacro.protectiveWingMantle = lerp(0.85, 1.0, shield);
        lfMacro.tuckInnerWingNeat = 1.0;
        nfMacro.lookAtMateWeight = 0.45;
        lfMacro.lookAtMateWeight = 0.55;

        if (t >= 69.15) {
          once('thunder_1', () =>
            fireworks.spawnShootingStar(new THREE.Vector3(-18, 38, -36), new THREE.Vector3(6, -34, 4))
          );
        }
        if (t >= 71.05) {
          once('thunder_2', () =>
            fireworks.spawnShootingStar(new THREE.Vector3(20, 40, -38), new THREE.Vector3(-8, -36, 4))
          );
        }

        nf.forelegStance = -0.06 * shield;
        nf.hindlegStance = 0.08;
        nf.neckArch = 0.24;
        nf.headPitch = -0.06;
        nf.wingUnfurl = 0.0;
        nf.tailCurl = -0.48;
        nf.tailYaw = -0.38;
        nf.earPerk = 0.38;
        nf.squint = 0.42 * shield;
        nf.alphaGlow = 0.45 * shield;

        lf.forelegStance = -0.18 * shield;
        lf.hindlegStance = -0.12 * shield;
        lf.neckArch = 0.18;
        lf.headRoll = 0.20 * shield;
        lf.wingUnfurl = 0.0;
        lf.tailCurl = 0.48;
        lf.tailYaw = 0.38;
        lf.earPerk = 0.42;
        lf.squint = 0.38 * shield;
      } else {
        // Scene III-D (73.2 -> 78.0s): Storm Clearing -> Outward Tail-Safe Turn to Sanctuary Positions!
        const part = smootherstep(73.2, 77.8, t);
        applyAtmosphereBlend('starlit-night', 'dawn-dusk', part * 0.45, lerp(0.55, 0.24, part), 0, 0.72, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.44, waveSpeed: 0.80, seaChoppiness: 0.30 });

        placeDragonOnCliff(
          'nf',
          lerp(1.04, 2.68, part),
          lerp(-2.02, SANCTUARY_CENTER_Z, part),
          lerpAngle(-0.14, -Math.PI * 0.5, part)
        );
        placeDragonOnCliff(
          'lf',
          lerp(-0.98, -2.62, part),
          lerp(-1.68, SANCTUARY_CENTER_Z, part),
          lerpAngle(0.14, Math.PI * 0.5, part)
        );

        nfMacro.protectiveWingMantle = (1.0 - smoothstep(73.2, 75.0, t)) * 1.0;
        lfMacro.tuckInnerWingNeat = (1.0 - smoothstep(73.2, 75.2, t)) * 1.0;
        nfMacro.compactFoldedWings = smoothstep(74.2, 76.5, t) * 0.75;
        lfMacro.compactFoldedWings = smoothstep(74.2, 76.5, t) * 0.75;
        nfMacro.lookAtMateWeight = 0.85 * part;
        lfMacro.lookAtMateWeight = 0.85 * part;

        nf.wingUnfurl = 0.08 * part;
        nf.tailCurl = lerp(-0.48, 0.0, part);
        nf.tailYaw = lerp(-0.38, 0.0, part);
        nf.earPerk = 0.88;
        nf.pupilDilation = 0.90;
        nf.alphaGlow = 0.28;

        lf.forelegStance = lerp(-0.18, 0.12, part);
        lf.wingUnfurl = 0.08 * part;
        lf.tailCurl = lerp(0.48, 0.0, part);
        lf.tailYaw = lerp(0.38, 0.0, part);
        lf.headRoll = 0.16;
        lf.earPerk = 0.88;
        lf.pupilDilation = 0.90;
      }

      // Shot 7: Continuous Hypnotic 360-Deg Orbital Crane around the Circular Sanctuary!
      const orbitAngle = smootherstep(0, 1, actU) * Math.PI * 2.0;
      const orbitRad = lerp(9.2, 7.6, smoothstep(0.65, 1.0, actU));
      const cPos = new THREE.Vector3(
        Math.sin(orbitAngle) * orbitRad,
        2.55 + Math.sin(actU * Math.PI) * 1.55,
        SANCTUARY_CENTER_Z + Math.cos(orbitAngle) * orbitRad
      );
      tmpCamTarget.set(0.0, 1.22, SANCTUARY_CENTER_Z);
      applySafeCamera(7, cPos, tmpCamTarget, 41, dt, t, 0.035);
      return;
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART A (78.0s -> 88.0s) & CONFESSION PAUSE:
    // Circular Fairy-Ring Sanctuary, Glowing Sand-Heart & NATURAL NOBLE COURTSHIP BOW!
    // ------------------------------------------------------------------------
    if (t <= CONFESSION_PAUSE_SEC && mode !== 'accepted-playing' && !isPostComplete) {
      const duskToStar = smoothstep(78.0, 86.5, t);
      applyAtmosphereBlend('dawn-dusk', 'starlit-night', 0.55 + duskToStar * 0.35, 0.20, 0, 0.80);
      ocean.setOceanParams({ waveAmplitude: 0.38, waveSpeed: 0.76, seaChoppiness: 0.28 });

      const etchU = smoothstep(78.4, 83.8, t);
      sanctuary.setEtchProgress(etchU);
      sanctuary.setWildflowerBloom(0.68 + 0.14 * etchU);

      const bowU = smootherstep(84.0, 87.8, t);
      const isTracing = smoothstep(78.3, 79.0, t) * (1.0 - smoothstep(83.3, 84.1, t));
      const traceSway = Math.sin(etchU * Math.PI * 2.0) * isTracing;

      const nfX = lerp(2.68, 2.52, bowU) - isTracing * 0.12;
      const nfZ = SANCTUARY_CENTER_Z + traceSway * 0.22;
      const nfYaw = -Math.PI * 0.5 + traceSway * 0.14;

      placeDragonOnCliff('nf', nfX, nfZ, nfYaw);
      placeDragonOnCliff('lf', -2.62, SANCTUARY_CENTER_Z, Math.PI * 0.5);

      const isPaused = mode === 'awaiting-confession-choice';
      const heartPulse = 0.5 + 0.5 * Math.sin(worldClock * 3.2);
      const posBias = Math.max(0, smoothedHoverBias);
      const negBias = Math.max(0, -smoothedHoverBias);

      // NATURAL, NOBLE, GRACEFUL COURTSHIP BOW (respectful shoulder dip, head at ~1.35m, NEVER crushed!)
      nfMacro.deepCourtshipBow = bowU * 0.16;
      nfMacro.lookAtMateWeight = 0.35 * (1.0 - bowU) + 0.25 * posBias;
      lfMacro.lookAtMateWeight = 0.88;
      nfMacro.compactFoldedWings = 0.45 * (1.0 - bowU);
      lfMacro.compactFoldedWings = 0.65;

      nf.forelegStance = lerp(0.04, -0.52, bowU);
      nf.hindlegStance = lerp(0.06, 0.14, bowU);
      nf.neckArch = lerp(0.18, -0.10, bowU) - isTracing * 0.20;
      nf.headPitch = lerp(-0.24 * isTracing, 0.14, bowU) + posBias * 0.10 - negBias * 0.18;
      nf.headRoll = -0.06 * bowU - posBias * 0.06;
      nf.eyePitch = 0.20 * bowU;
      nf.pupilDilation = clamp01(0.96 + posBias * 0.04 - negBias * 0.22);
      nf.earPerk = clamp01(0.86 + posBias * 0.14 - negBias * 0.48);
      nf.earAsymmetry = isPaused ? Math.sin(worldClock * 1.6) * 0.08 : 0.04;
      nf.jawOpen = 0.03 * posBias;
      nf.wingUnfurl = lerp(0.10, 0.34, bowU);
      nf.wingSweep = -0.12 * bowU;
      nf.tailPitch = 0.20 + posBias * 0.16 - negBias * 0.16;
      nf.tailYaw = isPaused ? Math.sin(worldClock * 2.0) * (0.12 + posBias * 0.20) : 0.12;
      nf.alphaGlow = clamp01(0.32 + 0.44 * bowU * (0.76 + 0.24 * heartPulse) + posBias * 0.22);

      lf.forelegStance = 0.12 - posBias * 0.10;
      lf.neckArch = 0.28 + posBias * 0.08;
      lf.headPitch = -0.06 - 0.06 * bowU;
      lf.headRoll = 0.18 + posBias * 0.14 - negBias * 0.14;
      lf.pupilDilation = clamp01(0.92 + posBias * 0.08 - negBias * 0.18);
      lf.squint = clamp01(0.16 + posBias * 0.44);
      lf.earPerk = clamp01(0.90 + posBias * 0.10 - negBias * 0.38);
      lf.wingUnfurl = 0.12 + negBias * 0.18;
      lf.iridescentShimmer = clamp01(0.45 + posBias * 0.38);

      // Shot 8: High Circular Fairy-Ring & Sand-Heart Reveal settling into Confession Profile Two-Shot!
      const camSettle = smootherstep(78.0, 87.5, t);
      const cPos = new THREE.Vector3(
        0.0,
        lerp(4.15, 2.22, camSettle),
        lerp(SANCTUARY_CENTER_Z + 6.35, SANCTUARY_CENTER_Z + 6.95, camSettle)
      );
      tmpCamTarget.set(0.0, lerp(0.58, 1.52, camSettle), SANCTUARY_CENTER_Z);
      applySafeCamera(8, cPos, tmpCamTarget, 36, dt, worldClock, isPaused ? 0.016 : 0.028);
      return;
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART B & ACT V (88.0s -> 120.0s):
    // Calibrated Non-Penetrating Snout Kiss, 58m Aurora Dome, Circular Flower Wave,
    // "9"  "2"  "7" Sky Triptych, Shocking Red/Pink Fireworks & Non-Intersecting Embrace!
    // ------------------------------------------------------------------------
    if (!isPostComplete) {
      applyAtmosphereBlend('dawn-dusk', 'starlit-night', 0.94, 0.20, 0, 0.96);
      ocean.setOceanParams({ waveAmplitude: 0.38, waveSpeed: 0.78, seaChoppiness: 0.28 });
    }

    if (t < 96.2) {
      // Shot 9 (88.0 -> 96.2s): Graceful Walk Across the Circular Flower Ring & Gentle Muzzle Touch!
      const acceptU = smootherstep(88.0, 92.4, t);
      const nuzzleHold = smoothstep(91.6, 92.8, t) * (1.0 - smoothstep(94.0, 95.0, t));
      const joyCelebrate = smoothstep(93.8, 94.6, t) * (1.0 - smoothstep(95.4, 96.1, t));

      sanctuary.setEtchProgress(1.0);
      sanctuary.setAcceptanceGlow(acceptU);
      sanctuary.setWildflowerBloom(0.82 + 0.18 * acceptU);
      sanctuary.setCelebrationFlowerWave(smoothstep(89.2, 95.6, t));

      // Calibrated non-penetrating snout touch: NF(+2.24) & LF(-2.14) -> dx = 4.38m (> 4.22m combined snout reach!)
      const nfX = lerp(2.52, 2.24, acceptU) + joyCelebrate * 0.28;
      const lfX = lerp(-2.62, -2.14, acceptU) - joyCelebrate * 0.26;

      placeDragonOnCliff('nf', nfX, SANCTUARY_CENTER_Z, -Math.PI * 0.5);
      placeDragonOnCliff('lf', lfX, SANCTUARY_CENTER_Z, Math.PI * 0.5);

      nfMacro.deepCourtshipBow = (1.0 - acceptU) * 0.16;
      nfMacro.rearUpJoy = joyCelebrate * 0.52;
      nfMacro.compactFoldedWings = 0.70 * (1.0 - joyCelebrate);
      lfMacro.compactFoldedWings = 0.70 * (1.0 - joyCelebrate);

      if (t >= 92.3) {
        once('acceptance_resonance_wave', () => {
          const touchPt = new THREE.Vector3(0, 0.10, SANCTUARY_CENTER_Z);
          sanctuary.triggerResonanceWave(touchPt);
          sanctuary.spawnShimmerBurst(new THREE.Vector3(0, 1.15, SANCTUARY_CENTER_Z), true, 95);
        });
      }

      const nuzzleSway = Math.sin((t - 92.0) * 2.2) * 0.07 * nuzzleHold;

      nf.forelegStance = lerp(-0.52, -0.06, acceptU);
      nf.hindlegStance = 0.12;
      nf.neckArch = lerp(-0.10, 0.22, acceptU);
      nf.headPitch = lerp(0.14, -0.08, acceptU);
      nf.headRoll = nuzzleSway;
      nf.blink = 0.92 * nuzzleHold;
      nf.squint = 0.72 * nuzzleHold;
      nf.pupilDilation = 0.98;
      nf.earPerk = 0.94;
      nf.wingUnfurl = 0.12 + 0.42 * joyCelebrate;
      nf.wingFlap = 0.20 * joyCelebrate;
      nf.dorsalSpineSplit = 0.85;
      nf.alphaGlow = 0.92;

      lf.forelegStance = lerp(0.12, -0.06, acceptU);
      lf.neckArch = lerp(0.28, 0.22, acceptU);
      lf.headPitch = -0.08;
      lf.headRoll = -nuzzleSway + 0.08;
      lf.blink = 0.94 * nuzzleHold;
      lf.squint = 0.80 * nuzzleHold;
      lf.pupilDilation = 0.96;
      lf.earPerk = 0.94;
      lf.wingUnfurl = 0.12 + 0.36 * joyCelebrate;
      lf.iridescentShimmer = 0.96;

      // Shot 9: Intimate Telephoto Push-In onto their Meeting Foreheads & Circular Blooming Wreath!
      const pushU = smootherstep(88.0, 95.4, t);
      const cPos = new THREE.Vector3(
        0.0,
        lerp(2.22, 1.52, pushU),
        lerp(SANCTUARY_CENTER_Z + 6.95, SANCTUARY_CENTER_Z + 4.35, pushU)
      );
      tmpCamTarget.set(0.0, lerp(1.52, 1.18, pushU), SANCTUARY_CENTER_Z);
      applySafeCamera(9, cPos, tmpCamTarget, lerp(36, 30, pushU), dt, t, 0.022);
      return;
    }

    // ------------------------------------------------------------------------
    // Shot 10 (96.2s -> 120.0s): Outward Tail-Safe Turn Toward -Z Sky, Twin Plasma Launch,
    // "9"  "2"  "7" Sky Triptych, Shocking Red/Pink Fireworks & Non-Intersecting Embrace!
    // ------------------------------------------------------------------------
    sanctuary.setEtchProgress(1.0);
    sanctuary.setWildflowerBloom(1.0);
    sanctuary.setAcceptanceGlow(1.0);
    sanctuary.setCelebrationFlowerWave(1.0);

    const alignU = smootherstep(96.2, 98.0, t);
    const cozyIn = smootherstep(99.8, 103.5, t);
    const launchWindow = smoothstep(97.5, 98.1, t) * (1.0 - smoothstep(99.1, 99.8, t));
    const endU = smootherstep(111.5, 119.2, Math.min(TOTAL_MOVIE_SEC, t));

    const nfX = lerp(lerp(2.24, 2.15, alignU), 1.10, cozyIn);
    const lfX = lerp(lerp(-2.14, -2.08, alignU), -1.04, cozyIn);
    const nfZ = lerp(SANCTUARY_CENTER_Z, -2.02, cozyIn);
    const lfZ = lerp(SANCTUARY_CENTER_Z, -1.68, cozyIn);

    placeDragonOnCliff('nf', nfX, nfZ, lerpAngle(-Math.PI * 0.5, -2.98, alignU));
    placeDragonOnCliff('lf', lfX, lfZ, lerpAngle(Math.PI * 0.5, 2.98, alignU));

    nfMacro.compactFoldedWings = (1.0 - cozyIn) * (1.0 - launchWindow * 0.7) * 0.85;
    lfMacro.compactFoldedWings = (1.0 - cozyIn) * (1.0 - launchWindow * 0.7) * 0.85;
    nfMacro.protectiveWingMantle = cozyIn * 0.98;
    lfMacro.tuckInnerWingNeat = cozyIn * 1.0;
    nfMacro.affectionateNuzzle = 0.42 * endU;
    lfMacro.affectionateNuzzle = 0.42 * endU;

    if (t >= 98.0) {
      once('twin_plasma_comets', () => {
        toothless.rootGroup.updateMatrixWorld(true);
        lightFury.rootGroup.updateMatrixWorld(true);
        const nfJaw = toothless.rig.boneMap.get('jaw')!;
        const lfJaw = lightFury.rig.boneMap.get('jaw')!;
        const pNF = new THREE.Vector3().setFromMatrixPosition(nfJaw.matrixWorld);
        const pLF = new THREE.Vector3().setFromMatrixPosition(lfJaw.matrixWorld);
        fireworks.launchTwinDragonComets(pNF, pLF, new THREE.Vector3(0.0, 18.2, -28.0));
      });
    }

    // Launch the special "9"  "2"  "7" Sky Triptych from left to right at t = 104.75s!
    if (t >= 104.75) {
      once('sky_triptych_927', () => {
        fireworks.launch927SkyTriptych(new THREE.Vector3(0.0, 15.8, -29.0));
      });
    }

    for (const cue of fireworkCues) {
      if (t >= cue.timeSec) {
        once(cue.id, () => {
          fireworks.launchShell(
            cue.origin,
            cue.target,
            cue.kind,
            cue.colA,
            cue.colB,
            cue.scale,
            cue.dur
          );
        });
      }
    }

    const skyGazeYaw = Math.sin((t - 99.5) * 1.05) * 0.16 * smoothstep(99.5, 100.8, t) * (1.0 - endU);
    const affectionateSway = Math.sin(worldClock * 1.05) * 0.035 * endU;

    nf.forelegStance = lerp(0.22, 0.18, endU);
    nf.hindlegStance = 0.12;
    nf.neckArch = 0.36 + 0.36 * launchWindow;
    nf.headPitch = lerp(0.32, 0.08, endU) + 0.30 * launchWindow;
    nf.headYaw = skyGazeYaw;
    nf.headRoll = 0.14 * endU + affectionateSway;
    nf.jawOpen = 0.70 * launchWindow;
    nf.wingUnfurl = 0.24 * launchWindow * (1.0 - cozyIn);
    nf.wingFlap = 0.18 * launchWindow;
    nf.tailCurl = 0.42 * cozyIn;
    nf.tailYaw = 0.32 * cozyIn;
    nf.earPerk = 0.94;
    nf.pupilDilation = 0.96;
    nf.squint = 0.36 * endU;
    nf.alphaGlow = lerp(0.92, 0.64, endU);

    lf.forelegStance = lerp(0.22, 0.18, endU);
    lf.hindlegStance = 0.12;
    lf.neckArch = 0.38 + 0.36 * launchWindow;
    lf.headPitch = lerp(0.34, 0.08, endU) + 0.30 * launchWindow;
    lf.headYaw = skyGazeYaw;
    lf.headRoll = -0.14 * endU - affectionateSway;
    lf.jawOpen = 0.66 * launchWindow;
    lf.wingUnfurl = 0.22 * launchWindow * (1.0 - cozyIn);
    lf.wingFlap = 0.18 * launchWindow;
    lf.tailCurl = -0.42 * cozyIn;
    lf.tailYaw = -0.32 * cozyIn;
    lf.earPerk = 0.94;
    lf.pupilDilation = 0.95;
    lf.squint = 0.44 * endU;
    lf.plasmaGlow = 0.92 * launchWindow;
    lf.iridescentShimmer = 0.96;

    // Wide IMAX Pullback (96.2 -> 111.5s) framing BOTH Dragons + Full Sky Fireworks & "9  2  7",
    // then gliding gently closer (111.5 -> 120.0s) onto their starlit embrace!
    const pullU = smootherstep(96.2, 99.4, t);
    const baseCamZ = lerp(SANCTUARY_CENTER_Z + 4.35, 11.85, pullU);
    const baseCamY = lerp(1.52, 2.38, pullU);
    const baseTargY = lerp(1.18, 8.35, pullU);
    const baseTargZ = lerp(SANCTUARY_CENTER_Z, -18.0, pullU);
    const baseFov = lerp(30, 52, pullU);

    finalExploreCamPos.set(0.0, lerp(baseCamY, 2.32, endU), lerp(baseCamZ, 6.65, endU));
    finalExploreCamTarget.set(
      0.0,
      lerp(baseTargY, 1.52, endU),
      lerp(baseTargZ, SANCTUARY_CENTER_Z - 1.0, endU)
    );
    applySafeCamera(10, finalExploreCamPos, finalExploreCamTarget, lerp(baseFov, 40, endU), dt, worldClock, 0.024);
  }

  // ==========================================================================
  // 6. HEARTBREAK "NO" TIMELINE (12.0s FAREWELL -> PERMANENT SEAL)
  // ==========================================================================
  function evaluateDeclinedTimeline(el: number, dt: number): void {
    resetNeutralGroundedBase();
    const nf = toothlessController.state;
    const lf = lightFuryController.state;
    const u = clamp01(el / 12.0);

    applyAtmosphereBlend(
      'starlit-night',
      'misty-overcast',
      smoothstep(0.0, 0.85, u),
      lerp(0.20, 0.65, u),
      u * 0.25,
      lerp(0.78, 0.0, smoothstep(0.0, 0.45, u)),
      -14 * u
    );
    ocean.setOceanParams({ waveAmplitude: lerp(0.38, 0.85, u), waveSpeed: 0.95, seaChoppiness: 0.55 });

    sanctuary.setAcceptanceGlow(0);
    sanctuary.setCelebrationFlowerWave(0);
    sanctuary.setEtchProgress(1.0 - smoothstep(0.08, 0.68, u));
    sanctuary.setWildflowerBloom(lerp(0.82, 0.04, smoothstep(0.05, 0.75, u)));
    sanctuary.setFadeOut(1.0 - smoothstep(0.35, 0.92, u));

    // Toothless rises quietly from his bow and watches her depart (> 5.1m away — zero intersection!)
    placeDragonOnCliff(
      'nf',
      2.52,
      SANCTUARY_CENTER_Z,
      lerpAngle(-Math.PI * 0.5, -Math.PI * 0.85, smoothstep(0.28, 0.75, u))
    );
    nf.forelegStance = lerp(-0.52, -0.18, smoothstep(0.0, 0.35, u));
    nf.headPitch = lerp(0.14, -0.32, smoothstep(0.15, 0.65, u));
    nf.earPerk = lerp(0.86, 0.06, smoothstep(0.0, 0.38, u));
    nf.alphaGlow = lerp(0.32, 0.0, smoothstep(0.0, 0.25, u));
    nf.squint = 0.38;

    if (el < 3.6) {
      const turnP = smoothstep(0.4, 3.2, el);
      placeDragonOnCliff(
        'lf',
        lerp(-2.62, -3.15, turnP),
        lerp(SANCTUARY_CENTER_Z, -2.85, turnP),
        lerpAngle(Math.PI * 0.5, -Math.PI * 0.82, turnP)
      );
      const crouch = smoothstep(2.5, 3.5, el);
      lf.forelegStance = -0.62 * crouch;
      lf.hindlegStance = -0.68 * crouch;
      lf.wingUnfurl = smoothstep(2.0, 3.5, el) * 0.95;
      lf.wingFlap = 0.72 * crouch;
      lf.earPerk = 0.22;
      lfFlapPhase = Math.PI * 0.5;
    } else {
      const flyU = clamp01((el - 3.6) / 8.4);
      lfFlapPhase += dt * 2.1 * Math.PI * 2;
      const air = smoothstep(0.0, 0.14, flyU);

      const depX = lerp(-3.15, -36.0, Math.pow(flyU, 1.25));
      const depY = lerp(0.10, 19.5, Math.pow(flyU, 1.15));
      const depZ = lerp(-2.85, -56.0, Math.pow(flyU, 1.25));
      const depYaw = Math.atan2(-36.0 - -3.15, -56.0 - -2.85);

      lightFury.rootGroup.position.set(depX, depY, depZ);
      tmpEuler.set(-0.32 * air, depYaw, 0.24 * air, 'YXZ');
      lightFury.rootGroup.quaternion.setFromEuler(tmpEuler);

      lf.airborneFactor = air;
      lf.legFlightTuck = smoothstep(0.08, 0.28, flyU) * 0.92;
      lf.wingUnfurl = 0.98;
      lf.wingFlap = Math.sin(lfFlapPhase) * 0.86;
      lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.62;
      lf.pelvicFinFlare = 0.88;
      lf.iridescentShimmer = lerp(0.35, 0.98, smoothstep(0.25, 0.85, flyU));
    }

    const cPos = new THREE.Vector3(
      lerp(0.0, 3.2, u),
      lerp(2.22, 3.4, u),
      lerp(SANCTUARY_CENTER_Z + 6.95, 11.8, u)
    );
    tmpCamTarget.set(lerp(0.0, 0.6, u), 1.22, SANCTUARY_CENTER_Z);
    applySafeCamera(8, cPos, tmpCamTarget, lerp(36, 44, u), dt, worldClock, 0.02);

    callbacks.onDeclineProgress(smoothstep(5.5, 11.6, el));
  }

  // ==========================================================================
  // 7. PUBLIC CONTROLLER IMPLEMENTATION
  // ==========================================================================
  return {
    update: (dt: number): StoryFrameStep => {
      const safeDt = clamp(dt, 0.001, 0.05);
      smoothedHoverBias += (hoverBias - smoothedHoverBias) * (1.0 - Math.exp(-7.5 * safeDt));

      let worldRate = 1.0;
      if (mode === 'playing' && storyTime >= 54.0 && storyTime <= 78.0) {
        const bell = Math.sin(((storyTime - 54.0) / 24.0) * Math.PI);
        worldRate = 1.0 + bell * bell * 16.0;
      } else if (mode === 'awaiting-confession-choice') {
        worldRate = 0.28;
      }
      worldClock += safeDt * worldRate;

      if (mode === 'playing') {
        storyTime += safeDt;
        if (storyTime >= CONFESSION_PAUSE_SEC) {
          storyTime = CONFESSION_PAUSE_SEC;
          mode = 'awaiting-confession-choice';
          callbacks.onReachConfessionPrompt();
        }
        evaluateMainStoryTimeline(storyTime, safeDt, false);
      } else if (mode === 'awaiting-confession-choice') {
        evaluateMainStoryTimeline(CONFESSION_PAUSE_SEC, safeDt, false);
      } else if (mode === 'accepted-playing') {
        storyTime += safeDt;
        if (storyTime >= TOTAL_MOVIE_SEC) {
          storyTime = TOTAL_MOVIE_SEC;
          mode = 'completed-awaiting-explore';
          callbacks.onReachMovieComplete();
        }
        evaluateMainStoryTimeline(storyTime, safeDt, false);
      } else if (mode === 'completed-awaiting-explore' || mode === 'free-explore') {
        postEndingElapsed += safeDt;
        evaluateMainStoryTimeline(TOTAL_MOVIE_SEC, safeDt, true);

        const dayCycle = (Math.sin(postEndingElapsed * 0.032 - Math.PI * 0.5) + 1) * 0.5;
        if (dayCycle < 0.5) {
          applyAtmosphereBlend('starlit-night', 'dawn-dusk', dayCycle * 2.0, 0.22, 0);
        } else {
          applyAtmosphereBlend('dawn-dusk', 'golden-hour', (dayCycle - 0.5) * 2.0, 0.28, 0, 0);
        }

        if (
          dayCycle < 0.42 &&
          Math.floor(postEndingElapsed / 3.4) !== Math.floor((postEndingElapsed - safeDt) / 3.4)
        ) {
          const kinds: FireworkShellKind[] = ['heart', 'dahlia', 'spiral', 'crossette', 'willow', 'saturn'];
          const k = kinds[Math.floor(Math.random() * kinds.length)];
          const tx = (Math.random() - 0.5) * 24.0;
          const ty = 17.5 + Math.random() * 6.5;
          const tz = -26.0 - Math.random() * 8.0;
          const shockColors = [0xff0e44, 0xff1688, 0xff2268, 0x48e5ff];
          const cA = shockColors[Math.floor(Math.random() * shockColors.length)];
          fireworks.launchShell(
            new THREE.Vector3(tx * 0.4, -2.0, tz - 5.0),
            new THREE.Vector3(tx, ty, tz),
            k,
            cA,
            0xffe28a,
            1.42,
            1.15
          );
        }
      } else if (mode === 'declined-playing') {
        declineElapsed += safeDt;
        evaluateDeclinedTimeline(declineElapsed, safeDt);
        if (declineElapsed >= 12.0) {
          mode = 'declined-finished';
          callbacks.onDeclineComplete();
        }
      } else if (mode === 'declined-finished') {
        evaluateDeclinedTimeline(12.0, safeDt);
      }

      // Smoothly filter world transforms & every rig/macro channel so 0.0 instantaneous jumps ever occur!
      nfTransformFilter.apply(
        toothless.rootGroup,
        safeDt,
        0.14,
        0.16,
        toothlessController.state.airborneFactor < 0.25
      );
      lfTransformFilter.apply(
        lightFury.rootGroup,
        safeDt,
        0.14,
        0.16,
        lightFuryController.state.airborneFactor < 0.25
      );
      updateMateWorldTargets(worldClock);
      nfStateFilter.filterInPlace(toothlessController.state, safeDt, 0.18);
      lfStateFilter.filterInPlace(lightFuryController.state, safeDt, 0.18);
      nfMacroFilter.filterInPlace(nfMacro, safeDt, 0.18);
      lfMacroFilter.filterInPlace(lfMacro, safeDt, 0.18);

      const windNow = atmosphere.sharedUniforms.uWindStrength.value;
      sanctuary.update(safeDt, worldClock, windNow);
      fireworks.update(safeDt, camera.position, atmosphere.isAudioMuted());

      focusPoint
        .copy(toothless.rootGroup.position)
        .add(lightFury.rootGroup.position)
        .multiplyScalar(0.5);
      focusPoint.y += 1.1;

      return { worldTimeSec: worldClock, focusPoint };
    },

    applyBiomechanicalPostPass: (dt: number) => {
      const safeDt = clamp(dt, 0.001, 0.05);
      const isPausedStandstill =
        mode === 'awaiting-confession-choice' ||
        mode === 'completed-awaiting-explore' ||
        mode === 'free-explore' ||
        mode === 'declined-finished';

      nfBio.applyPostPass(
        safeDt,
        toothlessController.state.airborneFactor,
        toothlessController.state.wingFlap,
        toothlessController.state.forelegStance,
        toothlessController.state.hindlegStance,
        nfMacro,
        isPausedStandstill
      );
      lfBio.applyPostPass(
        safeDt,
        lightFuryController.state.airborneFactor,
        lightFuryController.state.wingFlap,
        lightFuryController.state.forelegStance,
        lightFuryController.state.hindlegStance,
        lfMacro,
        isPausedStandstill
      );

      // Hard 24x24 anatomical-sphere dragon-dragon separation guard + ground re-verification!
      const pushed = enforceStrictPairwiseDragonSeparation(
        toothless,
        lightFury,
        toothlessController.state.airborneFactor < 0.3,
        lightFuryController.state.airborneFactor < 0.3
      );
      if (pushed > 0.0005) {
        nfTransformFilter.syncAfterCollisionPush(toothless.rootGroup);
        lfTransformFilter.syncAfterCollisionPush(lightFury.rootGroup);
        nfBio.enforceStrictGroundClearance(1.0 - toothlessController.state.airborneFactor);
        lfBio.enforceStrictGroundClearance(1.0 - lightFuryController.state.airborneFactor);
      }
    },

    isCameraLocked: () => mode !== 'free-explore',
    getMode: () => mode,
    getStoryTimeSec: () => storyTime,

    setConfessionHoverBias: (bias: number) => {
      hoverBias = clamp(bias, -1, 1);
    },

    chooseYes: () => {
      if (mode !== 'awaiting-confession-choice') return;
      hoverBias = 0;
      smoothedHoverBias = 0;
      mode = 'accepted-playing';
    },

    chooseNo: () => {
      if (mode !== 'awaiting-confession-choice') return;
      hoverBias = 0;
      smoothedHoverBias = 0;
      declineElapsed = 0;
      mode = 'declined-playing';
    },

    enterFreeExplore: () => {
      mode = 'free-explore';
      callbacks.onEnterFreeExplore(finalExploreCamPos.clone(), finalExploreCamTarget.clone());
    },

    replayStory: () => {
      firedEvents.clear();
      storyTime = 0;
      declineElapsed = 0;
      postEndingElapsed = 0;
      hoverBias = 0;
      smoothedHoverBias = 0;
      camInitialized = false;
      prevShotId = -1;
      nfBio.resetMotionTracking();
      lfBio.resetMotionTracking();
      nfStateFilter.reset();
      lfStateFilter.reset();
      nfMacroFilter.reset();
      lfMacroFilter.reset();
      nfTransformFilter.reset();
      lfTransformFilter.reset();
      sanctuary.setEtchProgress(0);
      sanctuary.setAcceptanceGlow(0);
      sanctuary.setCelebrationFlowerWave(0);
      sanctuary.setWildflowerBloom(0.26);
      sanctuary.setFadeOut(1);
      callbacks.onDeclineProgress(0);
      mode = 'playing';
    },
  };
}
