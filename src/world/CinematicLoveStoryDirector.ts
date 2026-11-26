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
  sampleIslandOrWorldTerrainY,
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
  return clamp01(t * t * t * (t * (t * 6 - 15) + 10));
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

  // Camera tracking state (starts close & brisk in Act I!)
  const smoothedCamPos = new THREE.Vector3(9.4, -3.6, 108.0);
  const smoothedCamTarget = new THREE.Vector3(7.2, 2.2, 126.0);
  let smoothedCamFov = 40;
  let camInitialized = false;
  let prevShotId = -1;

  // Distant Cross-Ocean Courtship & Stargazing Island: Western Waterfall Double-Island Upper Meadow!
  // (~78m across the open North Sea fjord strait from Hero Sanctuary Cliff, y ~ +13.2m, 100% boulder-free!)
  const DISTANT_ISLAND_CENTER_X = -68.0;
  const DISTANT_ISLAND_CENTER_Z = -37.8;

  const focusPoint = new THREE.Vector3(0, 1.2, SANCTUARY_CENTER_Z);
  const finalExploreCamPos = new THREE.Vector3(0.0, 2.32, 6.65);
  const finalExploreCamTarget = new THREE.Vector3(0.0, 1.48, SANCTUARY_CENTER_Z - 1.0);
  const tmpCamPos = new THREE.Vector3();
  const tmpCamTarget = new THREE.Vector3();
  const tmpEuler = new THREE.Euler(0, 0, 0, 'YXZ');

  // ==========================================================================
  // 1. ACT I SPLINES: Brisk Close-Framed Arrival -> Dynamic Ocean Wave-Skim -> Cliff Brink Landing
  //    (Starts close at z ~ 127m with full initial cruising speed so dragons look large & brisk right at t=0!)
  // ==========================================================================
  const nfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(12.2, 4.4, 127.0),
      new THREE.Vector3(14.8, -3.4, 92.0),
      new THREE.Vector3(15.6, -6.2, 58.0),
      new THREE.Vector3(11.4, -4.4, 30.0),
      new THREE.Vector3(6.6, 4.2, 11.2),
      new THREE.Vector3(4.45, 2.40, 1.75),
      new THREE.Vector3(3.85, 0.02, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  const lfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(2.4, 5.8, 131.5),
      new THREE.Vector3(4.6, -2.6, 95.5),
      new THREE.Vector3(5.2, -5.8, 60.5),
      new THREE.Vector3(1.2, -3.8, 31.5),
      new THREE.Vector3(-5.2, 4.4, 11.4),
      new THREE.Vector3(-4.45, 2.45, 1.65),
      new THREE.Vector3(-3.85, 0.02, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  // ==========================================================================
  // 2. ACT II-C SPLINES: True 78m Cross-Ocean Double-Helix Journey -> Distant Waterfall Island Overlook!
  //    Launches from Hero Sanctuary Cliff Lip (z=+0.15), braids high across the open North Sea strait,
  //    and glides onto the lush grassy upper bench of the Western Waterfall Double-Island (-68.0, -37.8)!
  // ==========================================================================
  const nfWaltzSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-3.95, 0.12, 0.15),
      new THREE.Vector3(-11.5, 6.4, 7.5),
      new THREE.Vector3(-24.0, 14.8, 3.0),
      new THREE.Vector3(-38.5, 22.4, -14.5),
      new THREE.Vector3(-53.0, 23.6, -26.0),
      new THREE.Vector3(-61.5, 18.2, -36.5),
      new THREE.Vector3(-63.8, 15.1, -39.9),
      new THREE.Vector3(-65.40, 13.28, -38.85),
    ],
    false,
    'catmullrom',
    0.48
  );

  const lfWaltzSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(3.95, 0.12, 0.15),
      new THREE.Vector3(-2.0, 7.6, 11.8),
      new THREE.Vector3(-20.0, 17.6, -5.8),
      new THREE.Vector3(-43.5, 19.6, -7.2),
      new THREE.Vector3(-58.5, 25.2, -31.8),
      new THREE.Vector3(-68.8, 18.4, -38.8),
      new THREE.Vector3(-70.6, 15.0, -40.9),
      new THREE.Vector3(-69.95, 13.15, -39.85),
    ],
    false,
    'catmullrom',
    0.48
  );

  // Nearly straight, natural forward-stepping quadruped path for Light Fury from (-69.95, -39.85, yaw=+0.49)
  // forward to (-68.84, -37.76, yaw=+0.29) — 2.37m forward walk, only 11° gentle curve, ZERO lateral slip & >16cm gap!
  const lfStepApproachSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-69.95, 0, -39.85),
      new THREE.Vector3(-69.56, 0, -39.10),
      new THREE.Vector3(-69.18, 0, -38.38),
      new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 0.84, 0, DISTANT_ISLAND_CENTER_Z + 0.04),
    ],
    false,
    'catmullrom',
    0.45
  );

  const nfStepSettleSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-65.40, 0, -38.85),
      new THREE.Vector3(-66.15, 0, -38.42),
      new THREE.Vector3(-66.82, 0, -38.05),
      new THREE.Vector3(DISTANT_ISLAND_CENTER_X + 0.84, 0, DISTANT_ISLAND_CENTER_Z - 0.06),
    ],
    false,
    'catmullrom',
    0.45
  );

  // Twilight downhill return glide from the high Western Overlook (y ~ 13.2m) back across the moonlit
  // strait into the Blooming Fairy-Ring Sanctuary Glade (y ~ -0.05m) for Act IV!
  const nfReturnSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(DISTANT_ISLAND_CENTER_X + 0.84, 13.26, DISTANT_ISLAND_CENTER_Z - 0.06),
      new THREE.Vector3(-56.0, 15.8, -27.0),
      new THREE.Vector3(-32.0, 12.8, -11.0),
      new THREE.Vector3(-6.0, 6.8, 3.5),
      new THREE.Vector3(5.2, 2.4, -1.65),
      new THREE.Vector3(2.68, -0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.46
  );

  const lfReturnSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 0.84, 13.17, DISTANT_ISLAND_CENTER_Z + 0.04),
      new THREE.Vector3(-60.5, 16.0, -34.0),
      new THREE.Vector3(-38.0, 12.6, -22.0),
      new THREE.Vector3(-15.5, 6.4, -7.5),
      new THREE.Vector3(-5.2, 2.4, -2.05),
      new THREE.Vector3(-2.62, -0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.46
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

    // Wave 2 (102.6s -> 107.6s): Outer framing willows for the "9"  "2"  "7" Sky Triptych!
    {
      id: 'fw_927_left_frame',
      timeSec: 102.95,
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
      timeSec: 103.00,
      origin: new THREE.Vector3(26, -5, -36),
      target: new THREE.Vector3(23.5, 12.2, -33),
      kind: 'willow',
      colA: 0xff2268,
      colB: 0xffe49c,
      scale: 1.05,
      dur: 1.15,
    },

    // Wave 2B (107.8s -> 112.5s): Outer framing crowns for the "I" <heart> "U" Sky Triptych!
    {
      id: 'fw_ilu_left_frame',
      timeSec: 108.15,
      origin: new THREE.Vector3(-27, -5, -36),
      target: new THREE.Vector3(-24.2, 13.0, -33),
      kind: 'crossette',
      colA: 0xff2084,
      colB: 0xffe49c,
      scale: 1.04,
      dur: 1.15,
    },
    {
      id: 'fw_ilu_right_frame',
      timeSec: 108.20,
      origin: new THREE.Vector3(27, -5, -36),
      target: new THREE.Vector3(24.2, 13.0, -33),
      kind: 'crossette',
      colA: 0xff2084,
      colB: 0x92ecff,
      scale: 1.04,
      dur: 1.15,
    },

    // Wave 3 (112.4s -> 118.4s): Grand Shocking Red/Pink & Gold Symphonic Finale!
    {
      id: 'fw_10',
      timeSec: 112.45,
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
      timeSec: 112.75,
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
      timeSec: 113.45,
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
    nfMacro.armReachL = 0;
    nfMacro.armReachR = 0;
    nfMacro.cradleEmbrace = 0;
    nfMacro.nestleIntoChest = 0;
    nfMacro.deepCourtshipBow = 0;
    nfMacro.affectionateNuzzle = 0;
    nfMacro.protectiveWingMantle = 0;
    nfMacro.tuckInnerWingNeat = 0;
    nfMacro.compactFoldedWings = 0;
    nfMacro.lookAtMateWeight = 0;

    lfMacro.rearUpJoy = 0;
    lfMacro.playPawL = 0;
    lfMacro.playPawR = 0;
    lfMacro.armReachL = 0;
    lfMacro.armReachR = 0;
    lfMacro.cradleEmbrace = 0;
    lfMacro.nestleIntoChest = 0;
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

    const minGroundY = Math.max(-10.1, sampleIslandOrWorldTerrainY(tmpCamPos.x, tmpCamPos.z) + 0.88);
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
    landingYaw = 0.0,
    yawBlendOverride?: number
  ): { bankRoll: number; climbPitch: number } {
    const asset = who === 'nf' ? toothless : lightFury;
    const scale = who === 'nf' ? 1.0 : 0.92;
    const clampedU = clamp01(u);

    const p = curve.getPointAt(clampedU);
    const tan = curve.getTangentAt(clampedU).normalize();
    const tanAhead = curve.getTangentAt(clamp01(clampedU + 0.025)).normalize();

    const minSafeY = Math.max(-10.85, sampleIslandOrWorldTerrainY(p.x, p.z) + 0.08);
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

    // When a dedicated (monotonic, branch-free) yaw blend is supplied, use a raw lerp so the
    // approach rotates smoothly in ONE direction toward the landing heading (teardrop!).
    const finalYaw =
      yawBlendOverride !== undefined
        ? lerp(flightYaw, landingYaw, clamp01(yawBlendOverride))
        : lerpAngle(flightYaw, landingYaw, flareBlend);
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
    nfMacro.mateRootWorldPos.copy(lightFury.rootGroup.position);
    nfMacro.mateRootY = lightFury.rootGroup.position.y;
    nfMacro.mateForwardWorldDir.set(0, 0, 1).transformDirection(lightFury.rootGroup.matrixWorld);

    lfMacro.mateWorldPos.copy(toothless.rootGroup.position);
    lfMacro.mateWorldPos.y += 1.32;
    lfMacro.mateRootWorldPos.copy(toothless.rootGroup.position);
    lfMacro.mateRootY = toothless.rootGroup.position.y;
    lfMacro.mateForwardWorldDir.set(0, 0, 1).transformDirection(toothless.rootGroup.matrixWorld);
  }

  // ==========================================================================
  // 5. MAIN 120-SECOND STORY TIMELINE (0.0s -> 120.0s)
  // ==========================================================================
  function evaluateMainStoryTimeline(t: number, dt: number, isPostComplete: boolean): void {
    resetNeutralGroundedBase();
    const nf = toothlessController.state;
    const lf = lightFuryController.state;

    // ------------------------------------------------------------------------
    // ACT I (0.0s -> 22.0s): Brisk Close-Framed Arrival -> Dynamic Ocean Flight -> Cliff Landing
    // ------------------------------------------------------------------------
    if (t < 22.0) {
      const envU = smoothstep(0.0, 22.0, t);
      applyAtmosphereBlend('clear-day', 'golden-hour', envU * 0.42, 0.36, 0);
      ocean.setOceanParams({ waveAmplitude: 0.95, waveSpeed: 1.0, seaChoppiness: 0.52 });

      // Full brisk cruising velocity right from t=0.0s (ZERO smootherstep dead-start stall!),
      // decelerating smoothly only during the final cliff flare (17.5 -> 21.3s)!
      const rawArrU = clamp01(t / 21.3);
      const flightU = 1.0 - Math.pow(1.0 - rawArrU, 1.58);
      const flare = smoothstep(17.8, 21.3, t);
      const settled = smoothstep(20.6, 21.8, t);
      const air = 1.0 - settled;

      const nfAero = placeDragonOnFlightSpline('nf', nfArrivalSpline, flightU, flare, -Math.PI * 0.5);
      const lfAero = placeDragonOnFlightSpline(
        'lf',
        lfArrivalSpline,
        clamp01(flightU * 1.008 - 0.008),
        flare,
        Math.PI * 0.5
      );

      // Independent aerodynamic wave-draft drift between Toothless & Light Fury during ocean flight
      // so neither dragon is rigidly locked in screen space or welded to the other!
      const freeAirDrift = air * (1.0 - smoothstep(15.2, 18.5, t));
      if (freeAirDrift > 0.001) {
        toothless.rootGroup.position.x += Math.sin(t * 1.18 + 0.3) * 1.15 * freeAirDrift;
        toothless.rootGroup.position.y += Math.sin(t * 1.62) * 0.68 * freeAirDrift;
        lightFury.rootGroup.position.x += Math.cos(t * 1.06 + 0.9) * 1.12 * freeAirDrift;
        lightFury.rootGroup.position.y += Math.cos(t * 1.48 + 0.5) * 0.64 * freeAirDrift;
      }

      const flapHz = lerp(1.68, 1.05, flare);
      nfFlapPhase += dt * flapHz * Math.PI * 2;
      lfFlapPhase += dt * (flapHz * 1.05) * Math.PI * 2;

      nf.airborneFactor = air;
      nf.legFlightTuck = (1.0 - flare) * 0.90;
      nf.wingUnfurl = lerp(0.96, 0.08, settled);
      nf.wingFlap = (Math.sin(nfFlapPhase) * (1.0 - flare * 0.65) + flare * 0.35) * 0.80 * air;
      nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.56 * (1.0 - flare * 0.6) * air;
      nf.wingSweep = -0.10 * (1.0 - flare);
      nf.spineTwist = nfAero.bankRoll * 0.36;
      nf.neckArch = lerp(0.18, 0.24, settled);
      nf.headPitch = -nfAero.climbPitch * 0.32;
      nf.forelegStance = lerp(0.25, 0.05, flare);
      nf.hindlegStance = lerp(0.25, 0.06, flare);
      nf.pelvicFinFlare = 0.85 * air + 0.18 * settled;
      nf.rightTailFinFlare = 0.88 - 0.35 * settled;
      nf.tailWaveAmp = 0.44 * air;
      nf.tailWavePhase = nfFlapPhase;

      lf.airborneFactor = air;
      lf.legFlightTuck = (1.0 - flare) * 0.90;
      lf.wingUnfurl = lerp(0.95, 0.08, settled);
      lf.wingFlap = (Math.sin(lfFlapPhase) * (1.0 - flare * 0.65) + flare * 0.35) * 0.78 * air;
      lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.56 * (1.0 - flare * 0.6) * air;
      lf.wingSweep = -0.08 * (1.0 - flare);
      lf.spineTwist = lfAero.bankRoll * 0.36;
      lf.neckArch = lerp(0.20, 0.28, settled);
      lf.headPitch = -lfAero.climbPitch * 0.32;
      lf.forelegStance = lerp(0.25, 0.08, flare);
      lf.hindlegStance = lerp(0.25, 0.08, flare);
      lf.pelvicFinFlare = 0.85 * air + 0.18 * settled;
      lf.rightHeartFinFlare = 0.88 - 0.30 * settled;
      lf.leftHeartFinFlare = 0.88 - 0.30 * settled;
      lf.tailWaveAmp = 0.44 * air;
      lf.tailWavePhase = lfFlapPhase;
      lf.iridescentShimmer = 0.78;

      nfMacro.lookAtMateWeight = 0.25 + 0.65 * settled;
      lfMacro.lookAtMateWeight = 0.25 + 0.65 * settled;

      const mid = tmpCamTarget
        .copy(toothless.rootGroup.position)
        .add(lightFury.rootGroup.position)
        .multiplyScalar(0.5);

      if (t < 7.2) {
        // Shot 1 (0.0 -> 7.2s): Close, Brisk Hero Fly-By Right Past the Sunlit Ocean Lens!
        // Camera starts only ~20m ahead of the dragons so they appear large, detailed & fast immediately!
        const s1 = t / 7.2;
        const cPos = new THREE.Vector3(
          lerp(9.4, 18.2, s1),
          lerp(-3.6, -4.8, s1),
          lerp(108.0, 62.0, s1)
        );
        mid.y += 0.35;
        applySafeCamera(1, cPos, mid, 40, dt, t, 0.055);
      } else if (t < 15.6) {
        // Shot 2 (7.2 -> 15.6s): Dynamic Un-Locked Ocean Pursuit!
        // Camera flies its OWN smooth sea-skimming arc while BOTH dragons enter inside the right-center
        // viewport and surge organically across screen-space toward the sunlit headland ahead!
        const s2 = (t - 7.2) / (15.6 - 7.2);
        const cPos = new THREE.Vector3(
          lerp(24.5, 11.2, smoothstep(0.0, 1.0, s2)),
          lerp(-4.2, 2.8, smoothstep(0.0, 1.0, s2)),
          lerp(68.0, 18.5, Math.pow(s2, 0.92))
        );
        // Lead/lag look target drifts smoothly so BOTH dragons stay cleanly in-frame while traversing across the lens!
        const screenSweepX = lerp(-2.4, 1.35, s2) + Math.sin(t * 0.95) * 0.75;
        const screenSweepY = lerp(0.15, 0.65, s2) + Math.cos(t * 1.15) * 0.35;
        const screenSweepZ = lerp(-3.6, 2.4, s2);
        tmpCamTarget.set(mid.x + screenSweepX, mid.y + screenSweepY, mid.z + screenSweepZ);
        applySafeCamera(2, cPos, tmpCamTarget, 44, dt, t, 0.050);
      } else {
        // Shot 3 (15.6 -> 22.0s): Low Ground-Level Hero Cliff Touchdown showcasing True 4-Paw Ground Contact!
        const s = smootherstep(15.6, 21.8, t);
        const cPos = new THREE.Vector3(
          lerp(6.4, 0.0, s),
          lerp(3.4, 1.48, s),
          lerp(11.2, 6.85, s)
        );
        mid.lerp(new THREE.Vector3(0.0, 0.88, SANCTUARY_CENTER_Z), s);
        applySafeCamera(3, cPos, mid, 38, dt, t, 0.028);
      }
      return;
    }

    // ------------------------------------------------------------------------
    // ACT II (22.0s -> 54.0s): Expressive Forelimb Greeting, Natural Circle #1 & Sky Waltz to Upper Meadow!
    // ------------------------------------------------------------------------
    if (t < 54.0) {
      const envU = smoothstep(22.0, 52.0, t);
      applyAtmosphereBlend('clear-day', 'golden-hour', 0.42 + envU * 0.58, 0.30, 0);
      ocean.setOceanParams({ waveAmplitude: 0.72, waveSpeed: 0.92, seaChoppiness: 0.42 });

      if (t < 30.5) {
        // Scene II-A (22.0 -> 30.5s): Playful Rear-Up + Independent Feline Forelimb ("Arm") Greeting!
        const stepIn = smootherstep(22.0, 30.2, t);
        placeDragonOnCliff('nf', lerp(3.85, 3.35, stepIn), SANCTUARY_CENTER_Z, -Math.PI * 0.5);
        placeDragonOnCliff('lf', lerp(-3.85, -3.35, stepIn), SANCTUARY_CENTER_Z, Math.PI * 0.5);

        nfMacro.lookAtMateWeight = 0.88;
        lfMacro.lookAtMateWeight = 0.90;

        const rearWindow = smoothstep(23.2, 24.4, t) * (1.0 - smoothstep(26.2, 27.3, t));
        nfMacro.rearUpJoy = rearWindow * 0.78;

        // Independent expressive forelimb ("arm") greeting exchange on 3 grounded paws!
        const nfArmGreet = smoothstep(27.3, 28.1, t) * (1.0 - smoothstep(29.4, 30.2, t));
        nfMacro.armReachR = nfArmGreet * 0.92;

        const lfArmGreet = smoothstep(26.2, 27.1, t) * (1.0 - smoothstep(28.8, 29.8, t));
        lfMacro.armReachL = lfArmGreet * 0.88;

        const hopBob = Math.max(0, Math.sin((t - 23.0) * 5.2)) * (t > 23.0 && t < 27.0 ? 1 : 0);

        nf.forelegStance = -0.08 + rearWindow * 0.20;
        nf.hindlegStance = 0.12 + rearWindow * 0.18;
        nf.neckArch = 0.30;
        nf.headRoll = Math.sin(t * 2.1) * 0.14 - nfArmGreet * 0.12;
        nf.jawOpen = 0.18 * hopBob + 0.06 * nfArmGreet;
        nf.tongueExtend = 0.22 * hopBob;
        nf.pupilDilation = 0.95;
        nf.earPerk = 0.92;
        nf.wingUnfurl = 0.08 + 0.54 * rearWindow;
        nf.wingFlap = Math.sin(t * 6.8) * 0.22 * rearWindow;
        nf.alphaGlow = 0.14 + 0.24 * rearWindow;

        const coyWindow = smoothstep(22.8, 24.4, t) * (1.0 - smoothstep(28.0, 29.8, t));
        lf.forelegStance = 0.08;
        lf.neckArch = 0.30;
        lf.headRoll = 0.18 + lfArmGreet * 0.10;
        lf.wingUnfurl = 0.08 + coyWindow * 0.26;
        lf.wingSweep = 0.16 * coyWindow;
        lf.earPerk = 0.90;
        lf.pupilDilation = 0.88;
        lf.squint = 0.20 * (1.0 - coyWindow);
        lf.iridescentShimmer = 0.82;

        // Shot 4: Low Ground-Level Two-Shot clearly showing all paws planted flush on contoured cliff turf!
        const u = (t - 22.0) / (30.5 - 22.0);
        const cPos = new THREE.Vector3(lerp(-1.15, 1.15, u), lerp(1.42, 1.32, u), lerp(6.75, 6.15, u));
        tmpCamTarget.set(0.0, 0.95, SANCTUARY_CENTER_Z);
        applySafeCamera(4, cPos, tmpCamTarget, 37, dt, t, 0.024);
      } else if (t < 40.5) {
        // Scene II-B (30.5 -> 40.5s): Biomechanically Natural Curved Circle #1 (Seaward Cliff Brink)!
        // Uses organic feline cadence (smooth stride -> curious mid-circle pause & forelimb gesture -> smooth stride)
        // with body aligned to path tangent (ZERO sideways crab-sliding!) + curved spine & world-locked paw steps!
        const baseU = smootherstep(30.5, 40.5, t);
        const circleU = clamp01(baseU + 0.072 * Math.sin(baseU * Math.PI * 2.0));
        const theta = circleU * Math.PI;
        const rx = lerp(3.35, 3.95, circleU);
        const rz = 1.82;

        const nfAngle = theta;
        const lfAngle = theta + Math.PI;

        const nfX = Math.cos(nfAngle) * rx;
        const nfZ = SANCTUARY_CENTER_Z - Math.sin(nfAngle) * rz;
        const lfX = Math.cos(lfAngle) * rx;
        const lfZ = SANCTUARY_CENTER_Z - Math.sin(lfAngle) * rz;

        const nfTanYaw = Math.atan2(-Math.sin(nfAngle) * rx, -Math.cos(nfAngle) * rz);
        const lfTanYaw = Math.atan2(-Math.sin(lfAngle) * rx, -Math.cos(lfAngle) * rz);

        const startBlend = smoothstep(30.5, 32.0, t);
        const endBlend = smootherstep(38.6, 40.5, t);

        // Keep body strictly aligned to curved velocity tangent (zero crab-sliding!);
        // DragonBiomechanicalAnimator curves spine + neck/head naturally inward toward mate!
        const nfHeading = lerpAngle(lerpAngle(-Math.PI * 0.5, nfTanYaw, startBlend), 0.0, endBlend);
        const lfBaseTan = lfTanYaw < 0 ? lfTanYaw + Math.PI * 2 : lfTanYaw;
        const lfHeading = lerp(lerp(Math.PI * 0.5, lfBaseTan, startBlend), 0.0, endBlend);

        placeDragonOnCliff('nf', nfX, nfZ, nfHeading);
        placeDragonOnCliff('lf', lfX, lfZ, lfHeading);

        // Curious mid-circle slow-down beat (~34.8..36.2s): expressive forelimb gesture & head-tilt!
        const curiousBeat = smoothstep(34.5, 35.1, t) * (1.0 - smoothstep(35.8, 36.4, t));
        nfMacro.armReachL = curiousBeat * 0.55;

        nfMacro.lookAtMateWeight = 0.94;
        lfMacro.lookAtMateWeight = 0.94;
        nfMacro.compactFoldedWings = 0.68;
        lfMacro.compactFoldedWings = 0.68;

        sanctuary.setWildflowerBloom(0.26 + 0.18 * circleU);

        nf.wingUnfurl = 0.08;
        nf.neckArch = 0.30;
        nf.headRoll = curiousBeat * 0.16;
        nf.earPerk = 0.92;
        nf.pupilDilation = 0.92;

        lf.wingUnfurl = 0.08;
        lf.neckArch = 0.32;
        lf.headRoll = 0.14 + curiousBeat * 0.12;
        lf.earPerk = 0.92;
        lf.pupilDilation = 0.90;
        lf.squint = 0.24;
        lf.iridescentShimmer = 0.88;

        // Shot 5: Low Sweeping Tracking Shot showcasing Natural Curved Quadruped Stepping & Ground Contact!
        const camAngle = circleU * 1.28 - 0.52;
        const cPos = new THREE.Vector3(
          Math.sin(camAngle) * 7.55,
          1.72 + Math.sin(circleU * Math.PI) * 0.65,
          SANCTUARY_CENTER_Z + Math.cos(camAngle) * 7.55
        );
        tmpCamTarget.set(0.0, 0.96, SANCTUARY_CENTER_Z - 0.35);
        applySafeCamera(5, cPos, tmpCamTarget, 38, dt, t, 0.028);
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

        const cPos = new THREE.Vector3(0.0, 2.35, 8.6);
        tmpCamTarget.set(0.0, 1.25, -0.8);
        applySafeCamera(6, cPos, tmpCamTarget, 44, dt, t, 0.035);
      } else {
        // Scene II-C2 (42.4 -> 54.0s): TRUE 78-METER CROSS-OCEAN DOUBLE-HELIX SKY JOURNEY
        // soaring across the open North Sea fjord to the Distant Western Waterfall Island Overlook (-68.0, -37.8)!
        const waltzU = smootherstep(42.4, 53.5, t);
        const liftoff = smoothstep(42.4, 43.4, t);
        const landFlare = smoothstep(50.8, 53.5, t);
        const settled = smoothstep(53.1, 53.9, t);
        const air = liftoff * (1.0 - settled);

        // Land facing the exact forward walk tangents on the Distant Island Overlook (-1.05 for NF, +0.98 for LF)!
        const nfAero = placeDragonOnFlightSpline(
          'nf',
          nfWaltzSpline,
          waltzU,
          Math.max(1.0 - liftoff, landFlare),
          t < 45.0 ? -0.16 : -1.05
        );
        // Teardrop approach: begin the held left-hand turn to the landing heading at ~47.5s and
        // rotate MONOTONICALLY all the way to touchdown (no mid-flare reversal!). Uses landingYaw
        // = 0.49 - 2*PI (identical orientation) with a raw lerp so the sweep never flips branch.
        const lfLandingYaw = 0.49 - Math.PI * 2;
        const lfYawBlend = smoothstep(47.5, 53.4, t);
        const lfAero = placeDragonOnFlightSpline(
          'lf',
          lfWaltzSpline,
          waltzU,
          Math.max(1.0 - liftoff, landFlare),
          lfLandingYaw,
          lfYawBlend
        );

        const cloakPulse = smoothstep(45.8, 46.5, t) * (1.0 - smoothstep(49.4, 50.1, t));
        if (t >= 46.3) {
          once('cloak_out', () => sanctuary.spawnShimmerBurst(lightFury.rootGroup.position, false, 65));
        }
        if (t >= 49.6) {
          once('cloak_in', () => sanctuary.spawnShimmerBurst(lightFury.rootGroup.position, false, 65));
        }

        nfFlapPhase += dt * 1.52 * Math.PI * 2;
        lfFlapPhase += dt * 1.55 * Math.PI * 2;

        nf.airborneFactor = air;
        nf.legFlightTuck = liftoff * (1.0 - landFlare * 0.85) * 0.94;
        nf.wingUnfurl = lerp(0.96, 0.10, settled);
        nf.wingFlap = (Math.sin(nfFlapPhase) * (1.0 - landFlare * 0.65) + landFlare * 0.35) * 0.80 * (1.0 - settled);
        nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.56 * (1.0 - landFlare * 0.6) * air;
        nf.spineTwist = nfAero.bankRoll * 0.40;
        nf.headYaw = cloakPulse * Math.sin(t * 5.2) * 0.38;
        nf.forelegStance = lerp(0.22, 0.06, landFlare) * liftoff;
        nf.hindlegStance = lerp(0.22, 0.06, landFlare) * liftoff;
        nf.pelvicFinFlare = 0.85 * air + 0.18 * (1.0 - air);
        nf.tailWaveAmp = 0.42 * air;
        nf.tailWavePhase = nfFlapPhase;

        lf.airborneFactor = air;
        lf.legFlightTuck = liftoff * (1.0 - landFlare * 0.85) * 0.94;
        lf.wingUnfurl = lerp(0.95, 0.10, settled);
        lf.wingFlap = (Math.sin(lfFlapPhase) * (1.0 - landFlare * 0.65) + landFlare * 0.35) * 0.80 * (1.0 - settled);
        lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.56 * (1.0 - landFlare * 0.6) * air;
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
        // Sweeping cross-ocean aerial tracking shot showing the Hero Island receding behind & Waterfall Island ahead!
        const cPos = new THREE.Vector3(
          mid.x + lerp(8.5, 5.5, waltzU),
          Math.max(3.2, mid.y + lerp(-1.2, 2.2, waltzU)),
          mid.z + lerp(16.8, 12.5, waltzU)
        );
        if (landFlare > 0.01) {
          cPos.lerp(
            new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 0.4, 15.85, DISTANT_ISLAND_CENTER_Z + 7.6),
            landFlare
          );
          mid.lerp(
            new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 0.3, 14.35, DISTANT_ISLAND_CENTER_Z - 0.5),
            landFlare
          );
        }
        applySafeCamera(6, cPos, mid, 44, dt, t, 0.040);
      }
      return;
    }

    // ------------------------------------------------------------------------
    // ACT III (54.0s -> 78.2s): DISTANT WESTERN WATERFALL ISLAND OVERLOOK (-68.0, -37.8, y ~ +13.2m)!
    // Toothless's Overlook Invitation, Light Fury's Natural Step-by-Step Quadruped Approach,
    // Affectionate Head-on-Head & Forelimb-on-Forelimb Embrace (0% Clipping!), and Twilight Return Glide!
    // ------------------------------------------------------------------------
    if (t < 78.2) {
      const actU = (t - 54.0) / 24.2;
      const sunAzimTurn = actU * 155;
      sanctuary.setWildflowerBloom(0.44 + 0.24 * actU);
      const overlookGroundY = sampleIslandOrWorldTerrainY(DISTANT_ISLAND_CENTER_X, DISTANT_ISLAND_CENTER_Z);

      if (t < 58.6) {
        // Scene III-A (54.0 -> 58.6s): Toothless Walks Forward onto the High Grassy Overlook Crest &
        // Opens His Wing Warmly to Invite Light Fury Closer!
        const sub = smootherstep(54.0, 58.6, t);
        applyAtmosphereBlend('golden-hour', 'dawn-dusk', sub, 0.34, 0, undefined, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.58, waveSpeed: 0.88, seaChoppiness: 0.38 });

        const nfWalkU = smootherstep(54.1, 57.2, t);
        const nfPivotU = smootherstep(56.8, 58.4, t);
        const nfPosPt = nfStepSettleSpline.getPointAt(nfWalkU);
        const nfTanPt = nfStepSettleSpline.getTangentAt(clamp01(Math.min(0.98, nfWalkU))).normalize();
        const nfPathYaw = Math.atan2(nfTanPt.x, nfTanPt.z);
        const nfFinalYaw = lerpAngle(nfPathYaw, -0.29, nfPivotU);
        placeDragonOnCliff('nf', nfPosPt.x, nfPosPt.z, nfFinalYaw);

        // Light Fury stands poised ~3.4m away on the meadow watching curiously & testing the soft grass with her paw!
        placeDragonOnCliff('lf', -69.95, -39.85, 0.49);

        const inviteU = smoothstep(57.0, 58.5, t);
        const curiousTap = smoothstep(55.6, 56.4, t) * (1.0 - smoothstep(57.4, 58.2, t));
        const welcomeArm = smoothstep(57.1, 57.7, t) * (1.0 - smoothstep(58.1, 58.6, t));
        nfMacro.protectiveWingMantle = 0.0;
        nfMacro.compactFoldedWings = 0.92;
        nfMacro.armReachR = welcomeArm * 0.55;
        lfMacro.compactFoldedWings = 0.90;
        lfMacro.armReachL = curiousTap * 0.55;
        nfMacro.lookAtMateWeight = 0.88;
        lfMacro.lookAtMateWeight = 0.90;

        nf.wingUnfurl = 0.06 * (1.0 - inviteU);
        nf.neckArch = 0.24;
        nf.earPerk = 0.92;
        nf.tailCurl = -0.45 * inviteU;
        nf.tailYaw = -0.35 * inviteU;

        lf.wingUnfurl = 0.06;
        lf.neckArch = 0.28;
        lf.headRoll = 0.14;
        lf.earPerk = 0.94;

        const cPos = new THREE.Vector3(
          DISTANT_ISLAND_CENTER_X - 0.5,
          overlookGroundY + 2.38,
          DISTANT_ISLAND_CENTER_Z + 6.9
        );
        tmpCamTarget.set(DISTANT_ISLAND_CENTER_X - 0.5, overlookGroundY + 1.20, DISTANT_ISLAND_CENTER_Z - 0.6);
        applySafeCamera(7, cPos, tmpCamTarget, 39, dt, t, 0.026);
      } else if (t < 65.0) {
        // Scene III-B (58.6 -> 65.0s): REALISTIC STEP-BY-STEP FELINE QUADRUPED APPROACH!
        // Toothless waits calmly at (-67.16, -37.86, yaw=-0.29); Light Fury walks 2.37m straight forward
        // along her body axis in 3 distinct step-pause-step feline bouts (0% lateral crab-sliding, >16cm mesh gap!)
        const envP = smoothstep(58.6, 63.6, t);
        applyAtmosphereBlend('dawn-dusk', 'starlit-night', envP, 0.28, 0, envP * 0.92, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.45, waveSpeed: 0.80, seaChoppiness: 0.32 });

        placeDragonOnCliff('nf', DISTANT_ISLAND_CENTER_X + 0.84, DISTANT_ISLAND_CENTER_Z - 0.06, -0.29);

        // 3 natural feline step-pause-step bouts along lfStepApproachSpline, THEN a gentle in-place turn at the end!
        const lfBout1 = smootherstep(58.70, 60.35, t) * 0.38;
        const lfBout2 = smootherstep(60.75, 62.35, t) * 0.38;
        const lfBout3 = smootherstep(62.70, 64.10, t) * 0.24;
        const lfStepU = clamp01(lfBout1 + lfBout2 + lfBout3);
        const lfPivotU = smootherstep(64.12, 64.94, t);

        const lfPosPt = lfStepApproachSpline.getPointAt(lfStepU);
        const lfTanPt = lfStepApproachSpline.getTangentAt(clamp01(Math.min(0.96, lfStepU))).normalize();
        const lfPathYaw = Math.atan2(lfTanPt.x, lfTanPt.z);
        const lfFinalYaw = lerpAngle(lfPathYaw, 0.29, lfPivotU);
        placeDragonOnCliff('lf', lfPosPt.x, lfPosPt.z, lfFinalYaw);

        const nfSettled = 1.0;
        const lfSettled = smoothstep(64.2, 65.0, t);
        const pauseGlance =
          smoothstep(60.25, 60.45, t) * (1.0 - smoothstep(60.68, 60.88, t)) +
          smoothstep(62.25, 62.45, t) * (1.0 - smoothstep(62.62, 62.82, t));

        // Keep both dragons' wings sleekly tucked during approach so Light Fury has wide-open >16cm air clearance,
        // then raise Toothless's protective wing canopy smoothly in Scene III-C as Light Fury crouches down!
        const proximityFade = 1.0 - smoothstep(61.4, 63.2, t);
        nfMacro.protectiveWingMantle = 0.0;
        nfMacro.compactFoldedWings = 1.0;
        nfMacro.tuckInnerWingNeat = 1.0;
        lfMacro.compactFoldedWings = 1.0;
        lfMacro.tuckInnerWingNeat = lfSettled;
        nfMacro.lookAtMateWeight = 0.72 * proximityFade;
        lfMacro.lookAtMateWeight = lerp(0.42, 0.76, pauseGlance) * proximityFade;

        if (t >= 61.6) {
          once('star_1', () =>
            fireworks.spawnShootingStar(
              new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 28, overlookGroundY + 34, DISTANT_ISLAND_CENTER_Z - 42),
              new THREE.Vector3(34, -12, 6)
            )
          );
        }
        if (t >= 63.2) {
          once('star_2', () =>
            fireworks.spawnShootingStar(
              new THREE.Vector3(DISTANT_ISLAND_CENTER_X + 26, overlookGroundY + 38, DISTANT_ISLAND_CENTER_Z - 46),
              new THREE.Vector3(-36, -14, 8)
            )
          );
        }
        if (t >= 64.5) {
          once('star_3', () =>
            fireworks.spawnShootingStar(
              new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 12, overlookGroundY + 40, DISTANT_ISLAND_CENTER_Z - 44),
              new THREE.Vector3(30, -10, 4)
            )
          );
        }

        nf.forelegStance = 0.06;
        nf.neckArch = lerp(0.24, 0.18, nfSettled);
        nf.wingUnfurl = 0.0;
        nf.tailCurl = -0.48 * nfSettled;
        nf.tailYaw = -0.38 * nfSettled;
        nf.earPerk = 0.88;
        nf.pupilDilation = 0.94;
        nf.alphaGlow = 0.28;

        lf.forelegStance = 0.05;
        lf.neckArch = lerp(0.26, 0.18, lfSettled);
        lf.headRoll = 0.12 * pauseGlance;
        lf.wingUnfurl = 0.0;
        lf.tailCurl = 0.48 * lfSettled;
        lf.tailYaw = 0.38 * lfSettled;
        lf.earPerk = lerp(0.92, 0.82, lfSettled);
        lf.pupilDilation = 0.94;
        lf.iridescentShimmer = 0.72;

        const settleCam = smootherstep(60.2, 64.8, t);
        const cPos = new THREE.Vector3(
          lerp(DISTANT_ISLAND_CENTER_X - 2.2, DISTANT_ISLAND_CENTER_X + 0.05, settleCam),
          lerp(overlookGroundY + 2.45, overlookGroundY + 1.82, settleCam),
          lerp(DISTANT_ISLAND_CENTER_Z + 7.2, DISTANT_ISLAND_CENTER_Z + 4.85, settleCam)
        );
        tmpCamTarget.set(
          DISTANT_ISLAND_CENTER_X - 0.05,
          lerp(overlookGroundY + 1.25, overlookGroundY + 1.08, settleCam),
          DISTANT_ISLAND_CENTER_Z + 0.45
        );
        applySafeCamera(7, cPos, tmpCamTarget, lerp(39, 34, settleCam), dt, t, 0.022);
      } else if (t < 72.4) {
        // Scene III-C (65.0 -> 72.4s): AFFECTIONATE HEAD-ON-HEAD & FORELIMB-ON-FORELIMB POSE (0.00% CLIPPING)!
        // Light Fury settles into a soft sphinx crouch with ear-plates relaxed back & inner forepaw extended;
        // Toothless gently rests his chin/head upon Light Fury's crown AND arcs his inner forepaw up-and-over
        // to lay tenderly upon her forepaw — LOD0 SkinnedMesh verified (+2.8cm head gap, +2.3cm paw gap, 0% clipping)!
        const stormP = (t - 65.0) / 7.4;
        const stormBell = Math.sin(stormP * Math.PI);
        applyAtmosphereBlend(
          'starlit-night',
          'stormy-squall',
          stormBell * 0.42,
          lerp(0.26, 0.56, stormBell),
          stormBell * 0.28,
          lerp(0.94, 0.65, stormBell),
          0,
          sunAzimTurn
        );
        ocean.setOceanParams({
          waveAmplitude: lerp(0.45, 0.92, stormBell),
          waveSpeed: lerp(0.82, 1.12, stormBell),
          seaChoppiness: lerp(0.32, 0.54, stormBell),
        });

        const embraceIn = smootherstep(65.0, 67.2, t);
        const embraceOut = 1.0 - smootherstep(70.9, 72.3, t);
        const embrace = embraceIn * embraceOut;

        placeDragonOnCliff('nf', DISTANT_ISLAND_CENTER_X + 0.84, DISTANT_ISLAND_CENTER_Z - 0.06, -0.29);
        placeDragonOnCliff('lf', DISTANT_ISLAND_CENTER_X - 0.84, DISTANT_ISLAND_CENTER_Z + 0.04, 0.29);

        nfMacro.cradleEmbrace = embrace;
        nfMacro.protectiveWingMantle = embrace;
        nfMacro.compactFoldedWings = 1.0 - embrace;
        nfMacro.tuckInnerWingNeat = 1.0 - embrace;
        nfMacro.lookAtMateWeight = 0.0;

        lfMacro.nestleIntoChest = embrace;
        lfMacro.compactFoldedWings = 1.0;
        lfMacro.tuckInnerWingNeat = 1.0;
        lfMacro.lookAtMateWeight = 0.0;

        if (t >= 67.8) {
          once('thunder_1', () =>
            fireworks.spawnShootingStar(
              new THREE.Vector3(DISTANT_ISLAND_CENTER_X - 18, overlookGroundY + 36, DISTANT_ISLAND_CENTER_Z - 36),
              new THREE.Vector3(24, -14, 4)
            )
          );
        }
        if (t >= 70.2) {
          once('thunder_2', () =>
            fireworks.spawnShootingStar(
              new THREE.Vector3(DISTANT_ISLAND_CENTER_X + 20, overlookGroundY + 38, DISTANT_ISLAND_CENTER_Z - 38),
              new THREE.Vector3(-24, -15, 4)
            )
          );
        }

        // Blend base rig state cleanly to exact neutral spine/neck during embrace so world-space calibrated
        // head-on-head & forelimb-on-forelimb contact has 0.0mm drift!
        nf.forelegStance = lerp(0.05, 0.0, embrace);
        nf.hindlegStance = lerp(0.05, 0.0, embrace);
        nf.spineArch = lerp(0.05, 0.0, embrace);
        nf.neckArch = lerp(0.18, 0.0, embrace);
        nf.headPitch = 0.0;
        nf.wingUnfurl = 0.0;
        nf.tailCurl = -0.50;
        nf.tailYaw = -0.40;
        nf.earPerk = lerp(0.82, 0.65, embrace);
        nf.squint = 0.48 * embrace;
        nf.pupilDilation = 0.96;
        nf.alphaGlow = 0.40 * embrace + 0.16;

        lf.forelegStance = lerp(0.05, 0.0, embrace);
        lf.hindlegStance = lerp(0.05, 0.0, embrace);
        lf.spineArch = lerp(0.12, 0.0, embrace);
        lf.neckArch = lerp(0.18, 0.0, embrace);
        lf.headPitch = 0.0;
        lf.wingUnfurl = 0.0;
        lf.tailCurl = 0.50;
        lf.tailYaw = 0.40;
        // Relax Light Fury's ear-plates softly backward like a content cat so Toothless's chin rests cleanly on her crown!
        lf.earPerk = lerp(0.82, -0.68, embrace);
        lf.squint = 0.72 * embrace;
        lf.blink = 0.38 * embrace;
        lf.pupilDilation = 0.94;
        lf.iridescentShimmer = 0.84;

        // Shot 11: Intimate Close-Up framing BOTH Toothless's head resting upon Light Fury's head
        // AND Toothless's forelimb resting gently upon Light Fury's forelimb!
        const pushRomantic = Math.sin(clamp01((t - 65.0) / 7.4) * Math.PI);
        const cPos = new THREE.Vector3(
          lerp(DISTANT_ISLAND_CENTER_X + 0.05, DISTANT_ISLAND_CENTER_X + 0.12, pushRomantic),
          lerp(overlookGroundY + 1.80, overlookGroundY + 1.48, pushRomantic),
          lerp(DISTANT_ISLAND_CENTER_Z + 4.80, DISTANT_ISLAND_CENTER_Z + 3.92, pushRomantic)
        );
        tmpCamTarget.set(
          DISTANT_ISLAND_CENTER_X - 0.04,
          lerp(overlookGroundY + 1.06, overlookGroundY + 0.90, pushRomantic),
          DISTANT_ISLAND_CENTER_Z + 0.85
        );
        applySafeCamera(11, cPos, tmpCamTarget, lerp(34, 30, pushRomantic), dt, t, 0.014);
      } else {
        // Scene III-D (72.4 -> 78.2s): Effortless Twilight Return Glide Across the Moonlit Fjord
        // from the high Western Overlook (y ~ 13.2m) back into the Blooming Fairy-Ring Sanctuary Glade!
        // Staggered twilight liftoff: Toothless launches first (72.4s) and Light Fury follows 0.55s later
        // so their unfurling wings never sweep across each other's heads while still side-by-side!
        const retU = smootherstep(72.4, 77.8, t);
        const retULF = smootherstep(72.95, 77.8, t);
        const liftoff = smoothstep(72.4, 73.1, t);
        const liftoffLF = smoothstep(72.95, 73.65, t);
        const landFlare = smoothstep(76.2, 77.9, t);
        const settled = smoothstep(77.5, 78.15, t);
        const air = liftoff * (1.0 - settled);
        const airLF = liftoffLF * (1.0 - settled);

        applyAtmosphereBlend('starlit-night', 'dawn-dusk', retU * 0.48, lerp(0.36, 0.20, retU), 0, 0.78, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.42, waveSpeed: 0.78, seaChoppiness: 0.30 });

        const nfAero = placeDragonOnFlightSpline(
          'nf',
          nfReturnSpline,
          retU,
          Math.max(1.0 - liftoff, landFlare),
          t < 74.0 ? -0.29 : -Math.PI * 0.5
        );
        const lfAero = placeDragonOnFlightSpline(
          'lf',
          lfReturnSpline,
          retULF,
          Math.max(1.0 - liftoffLF, landFlare),
          t < 74.6 ? 0.29 : Math.PI * 0.5
        );

        nfFlapPhase += dt * 1.25 * Math.PI * 2;
        lfFlapPhase += dt * 1.28 * Math.PI * 2;

        nf.airborneFactor = air;
        nf.legFlightTuck = liftoff * (1.0 - landFlare * 0.88) * 0.94;
        nf.wingUnfurl = 0.94 * liftoff * (1.0 - settled) + 0.08 * settled;
        nf.wingFlap = (Math.sin(nfFlapPhase) * 0.55 + 0.18) * (1.0 - settled);
        nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.42 * air;
        nf.spineTwist = nfAero.bankRoll * 0.38;
        nf.forelegStance = lerp(0.20, 0.05, landFlare) * liftoff;
        nf.hindlegStance = lerp(0.20, 0.05, landFlare) * liftoff;
        nf.pelvicFinFlare = 0.82 * air + 0.18 * (1.0 - air);
        nf.tailWaveAmp = 0.34 * air;
        nf.tailWavePhase = nfFlapPhase;

        lf.airborneFactor = airLF;
        lf.legFlightTuck = liftoffLF * (1.0 - landFlare * 0.88) * 0.94;
        lf.wingUnfurl = 0.94 * liftoffLF * (1.0 - settled) + 0.08 * settled;
        lf.wingFlap = (Math.sin(lfFlapPhase) * 0.55 + 0.18) * (1.0 - settled);
        lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.42 * airLF;
        lf.spineTwist = lfAero.bankRoll * 0.38;
        lf.forelegStance = lerp(0.20, 0.08, landFlare) * liftoffLF;
        lf.hindlegStance = lerp(0.20, 0.08, landFlare) * liftoffLF;
        lf.pelvicFinFlare = 0.82 * airLF + 0.18 * (1.0 - airLF);
        lf.iridescentShimmer = 0.78;
        lf.tailWaveAmp = 0.34 * airLF;
        lf.tailWavePhase = lfFlapPhase;

        const mid = tmpCamTarget
          .copy(toothless.rootGroup.position)
          .add(lightFury.rootGroup.position)
          .multiplyScalar(0.5);
        const cPos = new THREE.Vector3(
          mid.x + lerp(4.5, 0.0, retU),
          Math.max(2.4, mid.y + 2.4),
          mid.z + lerp(11.5, 8.2, retU)
        );
        if (landFlare > 0.01) {
          cPos.lerp(new THREE.Vector3(0.0, 3.85, SANCTUARY_CENTER_Z + 6.45), landFlare);
          mid.lerp(new THREE.Vector3(0.0, 0.72, SANCTUARY_CENTER_Z), landFlare);
        }
        applySafeCamera(7, cPos, mid, lerp(42, 38, landFlare), dt, t, 0.026);
      }
      return;
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART A (78.2s -> 88.0s) & CONFESSION PAUSE:
    // Circular Fairy-Ring Sanctuary, Expressive Forelimb Heart-Etching & NOBLE COURTSHIP BOW!
    // ------------------------------------------------------------------------
    if (t <= CONFESSION_PAUSE_SEC && mode !== 'accepted-playing' && !isPostComplete) {
      const duskToStar = smoothstep(78.2, 86.5, t);
      applyAtmosphereBlend('dawn-dusk', 'starlit-night', 0.55 + duskToStar * 0.35, 0.20, 0, 0.80);
      ocean.setOceanParams({ waveAmplitude: 0.38, waveSpeed: 0.76, seaChoppiness: 0.28 });

      const etchU = smoothstep(78.5, 83.8, t);
      sanctuary.setEtchProgress(etchU);
      sanctuary.setWildflowerBloom(0.68 + 0.14 * etchU);

      const bowU = smootherstep(84.0, 87.8, t);
      const isTracing = smoothstep(78.4, 79.1, t) * (1.0 - smoothstep(83.3, 84.1, t));
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

      // Expressive forelimb ("arm") sand-heart artistry while etching, then noble courtship bow!
      nfMacro.armReachR = isTracing * (0.48 + 0.24 * Math.sin(etchU * Math.PI * 4.0));
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
      const camSettle = smootherstep(78.2, 87.5, t);
      const cPos = new THREE.Vector3(
        0.0,
        lerp(4.05, 2.18, camSettle),
        lerp(SANCTUARY_CENTER_Z + 6.40, SANCTUARY_CENTER_Z + 6.90, camSettle)
      );
      tmpCamTarget.set(0.0, lerp(0.62, 1.48, camSettle), SANCTUARY_CENTER_Z);
      applySafeCamera(8, cPos, tmpCamTarget, 36, dt, worldClock, isPaused ? 0.016 : 0.028);
      return;
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART B & ACT V (88.0s -> 120.0s):
    // Calibrated Non-Penetrating Snout Kiss, 58m Aurora Dome, EXPANDED 12.4m Wildflower Meadow,
    // "9"  "2"  "7" AND "I" <heart> "U" Sky Triptychs, & Starlit Embrace!
    // ------------------------------------------------------------------------
    if (!isPostComplete) {
      applyAtmosphereBlend('dawn-dusk', 'starlit-night', 0.94, 0.20, 0, 0.96);
      ocean.setOceanParams({ waveAmplitude: 0.38, waveSpeed: 0.78, seaChoppiness: 0.28 });
    }

    if (t < 96.2) {
      // Shot 9 (88.0 -> 96.2s): Graceful Walk Across the Expanding Wildflower Meadow & Gentle Muzzle Touch!
      const acceptU = smootherstep(88.0, 92.4, t);
      const nuzzleHold = smoothstep(91.6, 92.8, t) * (1.0 - smoothstep(94.0, 95.0, t));
      const joyCelebrate = smoothstep(93.8, 94.6, t) * (1.0 - smoothstep(95.4, 96.1, t));

      sanctuary.setEtchProgress(1.0);
      sanctuary.setAcceptanceGlow(acceptU);
      sanctuary.setWildflowerBloom(0.82 + 0.18 * acceptU);
      sanctuary.setCelebrationFlowerWave(smoothstep(88.8, 95.8, t));

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

      // Shot 9: Intimate Push-In then slight lift showcasing the Huge Blooming Wildflower Meadow!
      const pushU = smootherstep(88.0, 95.4, t);
      const cPos = new THREE.Vector3(
        0.0,
        lerp(2.18, 1.62, pushU),
        lerp(SANCTUARY_CENTER_Z + 6.90, SANCTUARY_CENTER_Z + 4.85, pushU)
      );
      tmpCamTarget.set(0.0, lerp(1.48, 1.12, pushU), SANCTUARY_CENTER_Z);
      applySafeCamera(9, cPos, tmpCamTarget, lerp(36, 33, pushU), dt, t, 0.022);
      return;
    }

    // ------------------------------------------------------------------------
    // Shot 10 (96.2s -> 120.0s): Outward Tail-Safe Turn Toward -Z Sky, Twin Plasma Launch,
    // "9" "2" "7" Sky Triptych, "I" <heart> "U" Sky Triptych, Expanded Flowerbed & Embrace!
    // ------------------------------------------------------------------------
    sanctuary.setEtchProgress(1.0);
    sanctuary.setWildflowerBloom(1.0);
    sanctuary.setAcceptanceGlow(1.0);
    sanctuary.setCelebrationFlowerWave(1.0);

    const alignU = smootherstep(96.2, 98.0, t);
    const cozyIn = smootherstep(99.8, 103.5, t);
    const launchWindow = smoothstep(97.5, 98.1, t) * (1.0 - smoothstep(99.1, 99.8, t));
    const endU = smootherstep(113.5, 119.4, Math.min(TOTAL_MOVIE_SEC, t));

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

    // 1) Launch the synchronized "9"  "2"  "7" Sky Triptych (left to right) at t = 102.60s!
    if (t >= 102.60) {
      once('sky_triptych_927', () => {
        fireworks.launch927SkyTriptych(new THREE.Vector3(0.0, 15.8, -29.0));
      });
    }

    // 2) Launch the synchronized "I"  <heart>  "U" Sky Triptych (left to right) at t = 107.85s!
    if (t >= 107.85) {
      once('sky_triptych_i_heart_u', () => {
        fireworks.launchIHeartUSkyTriptych(new THREE.Vector3(0.0, 16.0, -29.0));
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

    // Wide IMAX Pullback (96.2 -> 113.5s) framing BOTH Dragons + Expanded Wildflower Meadow + "9 2 7" + "I <3 U",
    // then gliding gently closer (113.5 -> 120.0s) onto their starlit embrace!
    const pullU = smootherstep(96.2, 99.4, t);
    const baseCamZ = lerp(SANCTUARY_CENTER_Z + 4.85, 12.15, pullU);
    const baseCamY = lerp(1.62, 2.48, pullU);
    const baseTargY = lerp(1.12, 8.35, pullU);
    const baseTargZ = lerp(SANCTUARY_CENTER_Z, -18.0, pullU);
    const baseFov = lerp(33, 53, pullU);

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
      // Only enforce grounded step-speed cap when genuinely on turf (never throttle cross-ocean sky flight!)
      const nfTurfAlt =
        toothless.rootGroup.position.y -
        sampleIslandOrWorldTerrainY(toothless.rootGroup.position.x, toothless.rootGroup.position.z);
      const lfTurfAlt =
        lightFury.rootGroup.position.y -
        sampleIslandOrWorldTerrainY(lightFury.rootGroup.position.x, lightFury.rootGroup.position.z);

      nfTransformFilter.apply(
        toothless.rootGroup,
        safeDt,
        0.14,
        0.16,
        toothlessController.state.airborneFactor < 0.05 && nfTurfAlt < 0.20
      );
      lfTransformFilter.apply(
        lightFury.rootGroup,
        safeDt,
        0.14,
        0.16,
        lightFuryController.state.airborneFactor < 0.05 && lfTurfAlt < 0.20
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

      // 1) Solve Light Fury FIRST so her exact live world forepaw_L & head positions are known on sloped turf!
      lfBio.applyPostPass(
        safeDt,
        lightFuryController.state.airborneFactor,
        lightFuryController.state.wingFlap,
        lightFuryController.state.forelegStance,
        lightFuryController.state.hindlegStance,
        lfMacro,
        isPausedStandstill
      );

      // 2) Feed Light Fury's exact current-frame inner forepaw world position into Toothless's solver!
      lightFury.rootGroup.updateMatrixWorld(true);
      const lfForepawL = lightFury.rig.boneMap.get('forepaw_L');
      const lfForepawR = lightFury.rig.boneMap.get('forepaw_R');
      // Pick whichever of Light Fury's forepaws is closer to Toothless in XZ (inner forepaw!)
      if (lfForepawL && lfForepawR) {
        const pL = new THREE.Vector3().setFromMatrixPosition(lfForepawL.matrixWorld);
        const pR = new THREE.Vector3().setFromMatrixPosition(lfForepawR.matrixWorld);
        const dL = Math.hypot(
          pL.x - toothless.rootGroup.position.x,
          pL.z - toothless.rootGroup.position.z
        );
        const dR = Math.hypot(
          pR.x - toothless.rootGroup.position.x,
          pR.z - toothless.rootGroup.position.z
        );
        nfMacro.mateForepawWorldPos.copy(dL <= dR ? pL : pR);
      }

      // 3) Solve Toothless SECOND so his forepaw_R lays cleanly atop Light Fury's live forepaw_L!
      nfBio.applyPostPass(
        safeDt,
        toothlessController.state.airborneFactor,
        toothlessController.state.wingFlap,
        toothlessController.state.forelegStance,
        toothlessController.state.hindlegStance,
        nfMacro,
        isPausedStandstill
      );

      // 4) Hard 28x28 oblate-ellipsoid dragon-dragon separation guard + multi-island ground re-verification!
      const embraceBlend = Math.max(nfMacro.cradleEmbrace, lfMacro.nestleIntoChest);
      const pushed = enforceStrictPairwiseDragonSeparation(
        toothless,
        lightFury,
        toothlessController.state.airborneFactor < 0.3,
        lightFuryController.state.airborneFactor < 0.3,
        embraceBlend
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
