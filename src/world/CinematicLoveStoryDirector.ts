import * as THREE from 'three';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import { ToothlessRigController } from '../character/ToothlessRigController';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import { LightFuryRigController } from '../character/lightfury/LightFuryRigController';
import { NordicAtmosphereController, WeatherPresetId } from './NordicAtmosphere';
import { NorthSeaOceanController } from './NorthSeaOcean';
import { CourtshipSanctuaryController, SANCTUARY_CENTER_Z } from './CourtshipSanctuaryProps';
import { CelestialFireworksController } from './CelestialFireworksSystem';
import {
  computeSafeCliffGroundPlacement,
  createDefaultMacroDirective,
  DragonBiomechanicalAnimator,
  DragonMacroDirective,
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

function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp((x - e0) / Math.max(1e-5, e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
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
  let storyTime = 0;
  let declineElapsed = 0;
  let postEndingElapsed = 0;
  let worldClock = 0;
  let hoverBias = 0; // -1 = No hover, +1 = Yes hover

  // True 4-beat biomechanical gait & full-joint macro animators
  const nfBio = new DragonBiomechanicalAnimator(toothless, false);
  const lfBio = new DragonBiomechanicalAnimator(lightFury, true);
  const nfMacro: DragonMacroDirective = createDefaultMacroDirective();
  const lfMacro: DragonMacroDirective = createDefaultMacroDirective();

  let nfFlapPhase = 0;
  let lfFlapPhase = 0.8;

  const firedEvents = new Set<string>();
  function once(key: string, fn: () => void): void {
    if (firedEvents.has(key)) return;
    firedEvents.add(key);
    fn();
  }

  // Smooth unified camera state
  const camPos = new THREE.Vector3(0, 5.8, 18.5);
  const camTarget = new THREE.Vector3(0, 2.2, -12.0);
  let camFov = 40;
  let camInitialized = false;

  const desiredCamPos = new THREE.Vector3();
  const desiredCamTarget = new THREE.Vector3();
  let desiredFov = 40;

  const focusPoint = new THREE.Vector3(0, 1.15, SANCTUARY_CENTER_Z);
  const tmpVecA = new THREE.Vector3();
  const tmpVecB = new THREE.Vector3();
  const tmpVecC = new THREE.Vector3();
  const tmpEuler = new THREE.Euler();

  // ============================================================================
  // SMOOTH 3D FLIGHT SPLINES (GUARANTEED FORWARD VELOCITY TANGENT ALIGNMENT!)
  // ============================================================================
  const nfArrivalCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(24.0, 14.5, -62.0),
      new THREE.Vector3(14.0, 10.2, -38.0),
      new THREE.Vector3(6.5, 6.2, -19.0),
      new THREE.Vector3(3.4, 2.8, -8.8),
      new THREE.Vector3(2.25, 0.65, -3.8),
      new THREE.Vector3(1.85, 0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  const lfArrivalCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-24.0, 15.2, -64.0),
      new THREE.Vector3(-13.5, 10.6, -39.0),
      new THREE.Vector3(-6.2, 6.4, -19.5),
      new THREE.Vector3(-3.2, 2.9, -9.0),
      new THREE.Vector3(-2.15, 0.70, -3.9),
      new THREE.Vector3(-1.75, 0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.45
  );

  const nfSkyWaltzCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(1.35, 0.10, -0.45),
      new THREE.Vector3(4.2, 3.6, 2.2),
      new THREE.Vector3(9.8, 9.8, -2.5),
      new THREE.Vector3(6.5, 15.2, -13.5),
      new THREE.Vector3(-4.8, 16.4, -16.0),
      new THREE.Vector3(-9.5, 11.2, -7.5),
      new THREE.Vector3(-5.2, 4.8, -4.2),
      new THREE.Vector3(1.55, 0.95, -3.1),
      new THREE.Vector3(1.45, 0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.5
  );

  const lfSkyWaltzCurve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-1.25, 0.10, -0.45),
      new THREE.Vector3(1.4, 3.9, 2.5),
      new THREE.Vector3(7.2, 10.4, -1.8),
      new THREE.Vector3(4.2, 15.8, -12.0),
      new THREE.Vector3(-6.8, 16.0, -14.8),
      new THREE.Vector3(-11.2, 10.6, -6.8),
      new THREE.Vector3(-6.4, 4.5, -3.8),
      new THREE.Vector3(-1.55, 0.90, -3.0),
      new THREE.Vector3(-1.45, 0.05, SANCTUARY_CENTER_Z),
    ],
    false,
    'catmullrom',
    0.5
  );

  function evaluateSplineFlightPose(
    curve: THREE.CatmullRomCurve3,
    u: number
  ): { pos: THREE.Vector3; yaw: number; pitch: number; bankRoll: number } {
    const cu = clamp(u, 0, 1);
    const eps = 0.006;
    const u0 = clamp(cu - eps, 0, 1);
    const u1 = clamp(cu + eps, 0, 1);
    const u2 = clamp(cu + eps * 2.2, 0, 1);

    const pos = curve.getPointAt(cu);
    const pPrev = curve.getPointAt(u0);
    const pNext = curve.getPointAt(u1);
    const pAhead = curve.getPointAt(u2);

    const vx = pNext.x - pPrev.x;
    const vy = pNext.y - pPrev.y;
    const vz = pNext.z - pPrev.z;
    const horiz = Math.max(1e-4, Math.hypot(vx, vz));

    const yaw = Math.atan2(vx, vz);
    const pitch = clamp(-Math.atan2(vy, horiz), -0.58, 0.58);

    const yawAhead = Math.atan2(pAhead.x - pNext.x, pAhead.z - pNext.z);
    let dYaw = yawAhead - yaw;
    while (dYaw > Math.PI) dYaw -= Math.PI * 2;
    while (dYaw < -Math.PI) dYaw += Math.PI * 2;
    const bankRoll = clamp(-dYaw * 9.5, -0.72, 0.72);

    return { pos, yaw, pitch, bankRoll };
  }

  function applyAtmosphereBlend(
    fromId: WeatherPresetId,
    toId: WeatherPresetId,
    alpha: number,
    wind: number,
    rain = 0,
    auroraOverride?: number,
    sunElevOffset = 0,
    sunAzimOffset = 0
  ): void {
    atmosphere.blendPresets(
      fromId,
      toId,
      clamp(alpha, 0, 1),
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
    nf.neckArch = 0.14;
    nf.neckYaw = 0;
    nf.headPitch = 0;
    nf.headYaw = 0;
    nf.headRoll = 0;
    nf.jawOpen = 0.02;
    nf.tongueExtend = 0.08;
    nf.tongueCurl = 0.08;
    nf.earPerk = 0.70;
    nf.earAsymmetry = 0;
    nf.cheekNubFlare = 0.45;
    nf.blink = 0;
    nf.squint = 0.08;
    nf.eyeYaw = 0;
    nf.eyePitch = 0;
    nf.pupilDilation = 0.74;
    nf.wingUnfurl = 0.12;
    nf.wingFlap = 0;
    nf.wingSweep = 0;
    nf.wingCamber = 0.24;
    nf.wingWristFold = 0.42;
    nf.wingTipLag = 0;
    nf.pelvicFinFlare = 0.18;
    nf.dorsalSpineSplit = 0.14;
    nf.alphaGlow = 0.02;
    nf.tailPitch = 0.14;
    nf.tailYaw = 0;
    nf.tailCurl = 0.16;
    nf.tailWaveAmp = 0;
    nf.rightTailFinFlare = 0.42;
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
    lf.tongueExtend = 0.05;
    lf.tongueCurl = 0.05;
    lf.earPerk = 0.74;
    lf.earAsymmetry = 0;
    lf.cheekNubFlare = 0.44;
    lf.blink = 0;
    lf.squint = 0.12;
    lf.eyeYaw = 0;
    lf.eyePitch = 0;
    lf.pupilDilation = 0.68;
    lf.wingUnfurl = 0.10;
    lf.wingFlap = 0;
    lf.wingSweep = 0;
    lf.wingCamber = 0.24;
    lf.wingWristFold = 0.46;
    lf.wingTipLag = 0;
    lf.pelvicFinFlare = 0.18;
    lf.iridescentShimmer = 0.18;
    lf.tailPitch = 0.18;
    lf.tailYaw = 0;
    lf.tailCurl = 0.22;
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
    nfMacro.lookAtMateWeight = 0;

    lfMacro.rearUpJoy = 0;
    lfMacro.playPawL = 0;
    lfMacro.playPawR = 0;
    lfMacro.deepCourtshipBow = 0;
    lfMacro.affectionateNuzzle = 0;
    lfMacro.protectiveWingMantle = 0;
    lfMacro.tuckInnerWingNeat = 0;
    lfMacro.lookAtMateWeight = 0;
  }

  function placeGroundedDragon(
    rootGroup: THREE.Group,
    rawX: number,
    rawZ: number,
    yaw: number,
    extraLiftY = 0,
    bodyScale = 1.0
  ): void {
    const g = computeSafeCliffGroundPlacement(rawX, rawZ, yaw, bodyScale);
    rootGroup.position.set(g.x, g.y + extraLiftY, g.z);
    tmpEuler.set(g.terrainPitch, yaw, g.terrainRoll, 'YXZ');
    rootGroup.quaternion.setFromEuler(tmpEuler);
  }

  function commitSmoothCamera(dt: number, damping = 3.0): void {
    if (mode === 'free-explore') return;

    const aspect = camera.aspect || 16 / 9;
    let finalFov = desiredFov;
    const pullbackPos = desiredCamPos.clone();

    if (aspect < 1.35) {
      const portraitFactor = clamp((1.35 - aspect) / 0.80, 0, 1);
      const dir = tmpVecA.subVectors(desiredCamPos, desiredCamTarget);
      pullbackPos.copy(desiredCamTarget).addScaledVector(dir, 1.0 + portraitFactor * 0.48);
      finalFov = clamp(desiredFov + portraitFactor * 8.0, 28, 62);
    }

    if (!camInitialized) {
      camPos.copy(pullbackPos);
      camTarget.copy(desiredCamTarget);
      camFov = finalFov;
      camInitialized = true;
    } else {
      const k = 1 - Math.exp(-damping * Math.min(dt, 0.05));
      camPos.lerp(pullbackPos, k);
      camTarget.lerp(desiredCamTarget, k);
      camFov = lerp(camFov, finalFov, k);
    }

    camera.position.copy(camPos);
    if (Math.abs(camera.fov - camFov) > 0.02) {
      camera.fov = camFov;
      camera.updateProjectionMatrix();
    }
    camera.lookAt(camTarget);
  }

  function updateMateWorldTargets(clockSec: number): void {
    nfMacro.timeSec = clockSec;
    lfMacro.timeSec = clockSec;
    toothless.rootGroup.updateMatrixWorld(false);
    lightFury.rootGroup.updateMatrixWorld(false);

    const nfHeadApprox = tmpVecB.set(0, 0.92, 0.58).applyMatrix4(toothless.rootGroup.matrixWorld);
    const lfHeadApprox = tmpVecC.set(0, 0.88, 0.54).applyMatrix4(lightFury.rootGroup.matrixWorld);

    nfMacro.mateWorldPos.copy(lfHeadApprox);
    lfMacro.mateWorldPos.copy(nfHeadApprox);
  }

  // ============================================================================
  // 5-ACT CHOREOGRAPHY WITH 5 UNIFIED MASTER CAMERA SHOTS
  // ============================================================================
  function evaluateMainStoryTimeline(t: number, dt: number, isFrozenPause: boolean): void {
    resetNeutralGroundedBase();
    const nf = toothlessController.state;
    const lf = lightFuryController.state;

    // --------------------------------------------------------------------------
    // ACT I (0:00 - 0:24): FATEFUL ARRIVAL IN ONE CONTINUOUS SWEEPING MASTER SHOT
    // --------------------------------------------------------------------------
    if (t < 24.0) {
      applyAtmosphereBlend('golden-hour', 'dawn-dusk', (t / 24.0) * 0.45, 0.34, 0);
      ocean.setOceanParams({ waveAmplitude: 0.52, waveSpeed: 0.90, seaChoppiness: 0.38 });
      sanctuary.setWildflowerBloom(0.28);
      sanctuary.setCelebrationFlowerWave(0.0);
      sanctuary.setEtchProgress(0);
      sanctuary.setAcceptanceGlow(0);
      sanctuary.setFadeOut(1);

      if (t < 15.8) {
        const u = clamp(t / 15.8, 0, 1);
        const easedU = u < 0.75 ? u * 1.04 : 0.78 + (1 - Math.pow(1 - (u - 0.75) / 0.25, 1.45)) * 0.22;
        const nfPose = evaluateSplineFlightPose(nfArrivalCurve, clamp(easedU, 0, 1));
        const lfPose = evaluateSplineFlightPose(lfArrivalCurve, clamp(easedU, 0, 1));

        const landBlend = smoothstep(13.2, 15.8, t);
        const air = 1.0 - landBlend;

        const nfGround = computeSafeCliffGroundPlacement(nfPose.pos.x, nfPose.pos.z, nfPose.yaw);
        const lfGround = computeSafeCliffGroundPlacement(lfPose.pos.x, lfPose.pos.z, lfPose.yaw, 0.94);

        const nfY = lerp(nfPose.pos.y, nfGround.y, landBlend);
        const lfY = lerp(lfPose.pos.y, lfGround.y, landBlend);

        const flarePitch = Math.sin(landBlend * Math.PI) * -0.26;
        toothless.rootGroup.position.set(lerp(nfPose.pos.x, nfGround.x, landBlend), nfY, lerp(nfPose.pos.z, nfGround.z, landBlend));
        tmpEuler.set(lerp(nfPose.pitch + flarePitch, nfGround.terrainPitch, landBlend), nfPose.yaw, nfPose.bankRoll * air, 'YXZ');
        toothless.rootGroup.quaternion.setFromEuler(tmpEuler);

        lightFury.rootGroup.position.set(lerp(lfPose.pos.x, lfGround.x, landBlend), lfY, lerp(lfPose.pos.z, lfGround.z, landBlend));
        tmpEuler.set(lerp(lfPose.pitch + flarePitch, lfGround.terrainPitch, landBlend), lfPose.yaw, lfPose.bankRoll * air, 'YXZ');
        lightFury.rootGroup.quaternion.setFromEuler(tmpEuler);

        const flapFreq = lerp(1.55, 2.85, smoothstep(11.5, 14.8, t));
        if (!isFrozenPause) {
          nfFlapPhase += dt * flapFreq * Math.PI * 2;
          lfFlapPhase += dt * (flapFreq * 1.05) * Math.PI * 2;
        }
        const flapAmp = lerp(0.58, 0.92, smoothstep(12.0, 14.8, t)) * air;

        nf.airborneFactor = air;
        nf.legFlightTuck = lerp(0.92, -0.45, smoothstep(12.2, 15.0, t)) * air;
        nf.wingUnfurl = lerp(0.96, 0.24, smoothstep(14.8, 15.8, t));
        nf.wingFlap = Math.sin(nfFlapPhase) * flapAmp;
        nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.65 * air;
        nf.wingWristFold = Math.max(0, Math.cos(nfFlapPhase)) * 0.36 * air + (1 - air) * 0.35;
        nf.wingCamber = lerp(0.55, 0.85, smoothstep(12.5, 14.8, t)) * air + 0.22;
        nf.pelvicFinFlare = 0.88 * air + 0.18;
        nf.rightTailFinFlare = 0.88;
        nf.tailWaveAmp = 0.38 * air;
        nf.tailWavePhase = nfFlapPhase;

        lf.airborneFactor = air;
        lf.legFlightTuck = lerp(0.92, -0.45, smoothstep(12.2, 15.0, t)) * air;
        lf.wingUnfurl = lerp(0.96, 0.20, smoothstep(14.8, 15.8, t));
        lf.wingFlap = Math.sin(lfFlapPhase) * flapAmp;
        lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.65 * air;
        lf.wingWristFold = Math.max(0, Math.cos(lfFlapPhase)) * 0.36 * air + (1 - air) * 0.38;
        lf.wingCamber = lerp(0.55, 0.85, smoothstep(12.5, 14.8, t)) * air + 0.22;
        lf.pelvicFinFlare = 0.88 * air + 0.18;
        lf.rightHeartFinFlare = 0.90;
        lf.leftHeartFinFlare = 0.90;
        lf.tailWaveAmp = 0.38 * air;
        lf.tailWavePhase = lfFlapPhase;

        nfMacro.lookAtMateWeight = smoothstep(5.0, 15.8, t) * 0.65;
        lfMacro.lookAtMateWeight = smoothstep(5.0, 15.8, t) * 0.65;
      } else {
        const u = (t - 15.8) / 8.2;
        const ease = smoothstep(0.05, 0.92, u);
        const nfYaw = lerpAngle(0.0, -Math.PI * 0.5, smoothstep(0.0, 0.45, u));
        const lfYaw = lerpAngle(0.0, Math.PI * 0.5, smoothstep(0.0, 0.45, u));

        placeGroundedDragon(toothless.rootGroup, lerp(1.85, 1.48, ease), SANCTUARY_CENTER_Z, nfYaw);
        placeGroundedDragon(lightFury.rootGroup, lerp(-1.75, -1.42, ease), SANCTUARY_CENTER_Z, lfYaw, 0, 0.94);

        const settleCrouch = Math.sin(clamp((t - 15.8) / 1.4, 0, 1) * Math.PI) * -0.36;
        nf.forelegStance = settleCrouch;
        nf.hindlegStance = settleCrouch * 0.85;
        lf.forelegStance = settleCrouch * 0.85;
        lf.hindlegStance = settleCrouch * 0.75;

        nf.headRoll = Math.sin((t - 16.0) * 1.15) * 0.28;
        nf.earPerk = 0.88;
        nf.pupilDilation = 0.92;
        lf.headRoll = -Math.sin((t - 16.4) * 1.05) * 0.26;
        lf.earPerk = 0.84;
        lf.iridescentShimmer = 0.32;

        nfMacro.lookAtMateWeight = 0.92;
        lfMacro.lookAtMateWeight = 0.92;
      }

      const craneSettle = smoothstep(0.0, 14.5, t);
      desiredCamPos.set(0.0, lerp(5.8, 2.58, craneSettle), lerp(18.5, 8.85, craneSettle));
      const midPoint = tmpVecA.addVectors(toothless.rootGroup.position, lightFury.rootGroup.position).multiplyScalar(0.5);
      desiredCamTarget.set(
        lerp(midPoint.x, 0.0, craneSettle),
        lerp(midPoint.y + 0.8, 1.15, craneSettle),
        lerp(midPoint.z, SANCTUARY_CENTER_Z, craneSettle)
      );
      focusPoint.copy(desiredCamTarget);
      desiredFov = 40;
      commitSmoothCamera(dt, 2.6);
      return;
    }

    // --------------------------------------------------------------------------
    // ACT II (0:24 - 0:54): PLAYFUL COURTSHIP, FACE-TO-FACE WALK & RUNNING SKY-WALTZ
    // --------------------------------------------------------------------------
    if (t < 54.0) {
      const actU = (t - 24.0) / 30.0;
      applyAtmosphereBlend('golden-hour', 'dawn-dusk', lerp(0.45, 0.96, actU), 0.36, 0);
      ocean.setOceanParams({ waveAmplitude: 0.56, waveSpeed: 0.92, seaChoppiness: 0.40 });
      sanctuary.setWildflowerBloom(lerp(0.28, 0.56, actU));

      if (t < 31.0) {
        placeGroundedDragon(toothless.rootGroup, 1.48, SANCTUARY_CENTER_Z, -Math.PI * 0.5);
        placeGroundedDragon(lightFury.rootGroup, -1.42, SANCTUARY_CENTER_Z, Math.PI * 0.5, 0, 0.94);

        const rearWindow = clamp((t - 24.4) / 2.8, 0, 1);
        const rearCurve = rearWindow > 0 && rearWindow < 1 ? Math.sin(rearWindow * Math.PI) : 0;
        const rearSmooth = smoothstep(0.0, 0.35, rearCurve);

        const preCrouch = t >= 24.0 && t < 24.6 ? Math.sin(((t - 24.0) / 0.6) * Math.PI) * -0.45 : 0;
        const postCushion = t >= 27.1 && t < 27.9 ? Math.sin(((t - 27.1) / 0.8) * Math.PI) * -0.42 : 0;

        nfMacro.rearUpJoy = rearSmooth * 0.92;
        nf.forelegStance = preCrouch + postCushion;
        nf.hindlegStance = preCrouch * 1.1 + postCushion * 0.7 - rearSmooth * 0.35;
        nf.wingUnfurl = lerp(0.18, 0.88, rearSmooth);
        nf.wingFlap = Math.sin((t - 24.4) * 3.8) * 0.36 * rearSmooth;
        nf.jawOpen = 0.24 * rearSmooth;
        nf.earPerk = 0.95;
        nf.pupilDilation = 0.95;
        nf.tailYaw = Math.sin(t * 3.4) * 0.42;

        const batT = clamp((t - 27.8) / 3.0, 0, 1);
        const lfBatEnv = Math.sin(clamp(batT / 0.65, 0, 1) * Math.PI);
        const nfBowEnv = Math.sin(clamp((batT - 0.25) / 0.72, 0, 1) * Math.PI);

        lfMacro.playPawR = lfBatEnv * 0.88;
        lf.neckArch = 0.30 + lfBatEnv * 0.16;
        lf.squint = 0.42 * lfBatEnv;
        lf.tailYaw = Math.sin(t * 2.8) * 0.45;
        lf.iridescentShimmer = 0.25 + 0.35 * lfBatEnv;

        nf.forelegStance += -0.64 * nfBowEnv;
        nf.hindlegStance += 0.18 * nfBowEnv;
        nfMacro.playPawL = Math.sin(clamp((batT - 0.45) / 0.50, 0, 1) * Math.PI) * 0.72;

        nfMacro.lookAtMateWeight = 0.95;
        lfMacro.lookAtMateWeight = 0.95;
      } else if (t < 38.2) {
        // Face-to-face circular courtship walk on safe continuous meadow plateau!
        const u = (t - 31.0) / 7.2;
        const easeU = smoothstep(0.0, 1.0, u);
        const angle = easeU * Math.PI * 1.35;
        const rx = lerp(1.50, 1.95, Math.sin(u * Math.PI));
        const rz = lerp(0.15, 1.55, Math.sin(u * Math.PI));

        const nfX = Math.cos(angle) * rx;
        const nfZ = SANCTUARY_CENTER_Z + Math.sin(angle) * rz;
        const lfX = Math.cos(angle + Math.PI) * rx;
        const lfZ = SANCTUARY_CENTER_Z + Math.sin(angle + Math.PI) * rz;

        const nfTanYaw = Math.atan2(-Math.sin(angle) * rx, Math.cos(angle) * rz);
        const lfTanYaw = Math.atan2(-Math.sin(angle + Math.PI) * rx, Math.cos(angle + Math.PI) * rz);
        const nfToPartnerYaw = Math.atan2(lfX - nfX, lfZ - nfZ);
        const lfToPartnerYaw = Math.atan2(nfX - lfX, nfZ - lfZ);

        const nfYaw = lerpAngle(nfTanYaw, nfToPartnerYaw, 0.46);
        const lfYaw = lerpAngle(lfTanYaw, lfToPartnerYaw, 0.46);

        placeGroundedDragon(toothless.rootGroup, nfX, nfZ, nfYaw);
        placeGroundedDragon(lightFury.rootGroup, lfX, lfZ, lfYaw, 0, 0.94);

        nf.wingUnfurl = 0.22;
        lf.wingUnfurl = 0.20;
        nf.tailCurl = 0.42;
        lf.tailCurl = 0.48;
        nf.earPerk = 0.88;
        lf.earPerk = 0.86;
        nf.squint = 0.22;
        lf.squint = 0.28;

        nfMacro.lookAtMateWeight = 1.0;
        lfMacro.lookAtMateWeight = 1.0;
      } else if (t < 40.8) {
        // Forward ground takeoff run + deep coiled launch crouch + raised overhead wings!
        const prepU = (t - 38.2) / 2.6;
        const prevAngle = Math.PI * 1.35;
        const startNfX = Math.cos(prevAngle) * 1.50;
        const startNfZ = SANCTUARY_CENTER_Z + Math.sin(prevAngle) * 0.15;
        const startLfX = Math.cos(prevAngle + Math.PI) * 1.50;
        const startLfZ = SANCTUARY_CENTER_Z + Math.sin(prevAngle + Math.PI) * 0.15;

        const runEase = smoothstep(0.0, 0.78, prepU);
        const nfX = lerp(startNfX, 1.35, runEase);
        const nfZ = lerp(startNfZ, -0.45, runEase);
        const lfX = lerp(startLfX, -1.25, runEase);
        const lfZ = lerp(startLfZ, -0.45, runEase);

        const nfLaunchPose = evaluateSplineFlightPose(nfSkyWaltzCurve, 0.01);
        const lfLaunchPose = evaluateSplineFlightPose(lfSkyWaltzCurve, 0.01);

        const nfRunYaw = lerpAngle(Math.atan2(1.35 - startNfX, -0.45 - startNfZ), nfLaunchPose.yaw, smoothstep(0.25, 0.95, prepU));
        const lfRunYaw = lerpAngle(Math.atan2(-1.25 - startLfX, -0.45 - startLfZ), lfLaunchPose.yaw, smoothstep(0.25, 0.95, prepU));

        placeGroundedDragon(toothless.rootGroup, nfX, nfZ, nfRunYaw);
        placeGroundedDragon(lightFury.rootGroup, lfX, lfZ, lfRunYaw, 0, 0.94);

        const crouchCoil = smoothstep(0.58, 0.96, prepU);
        nf.forelegStance = -0.82 * crouchCoil;
        nf.hindlegStance = -0.88 * crouchCoil;
        lf.forelegStance = -0.78 * crouchCoil;
        lf.hindlegStance = -0.85 * crouchCoil;

        nf.wingUnfurl = smoothstep(0.15, 0.88, prepU);
        lf.wingUnfurl = smoothstep(0.15, 0.88, prepU);
        nf.wingFlap = lerp(0.0, 0.95, crouchCoil);
        lf.wingFlap = lerp(0.0, 0.95, crouchCoil);
        nf.wingSweep = -0.24 * crouchCoil;
        lf.wingSweep = -0.24 * crouchCoil;
        nfFlapPhase = Math.PI * 0.5;
        lfFlapPhase = Math.PI * 0.5;
      } else {
        // Explosive hindleg launch push + tangent-locked sky-waltz + cushioned landing!
        const airDur = 12.2;
        const rawU = clamp((t - 40.8) / airDur, 0, 1);

        const nfPose = evaluateSplineFlightPose(nfSkyWaltzCurve, rawU);
        const lfPose = evaluateSplineFlightPose(lfSkyWaltzCurve, rawU);

        const launchBlend = smoothstep(40.8, 41.55, t);
        const landBlend = smoothstep(51.8, 53.1, t);
        const air = launchBlend * (1.0 - landBlend);

        const nfGround = computeSafeCliffGroundPlacement(nfPose.pos.x, nfPose.pos.z, nfPose.yaw);
        const lfGround = computeSafeCliffGroundPlacement(lfPose.pos.x, lfPose.pos.z, lfPose.yaw, 0.94);

        const climbEffort = 1.0 - smoothstep(43.5, 46.5, t) + smoothstep(50.8, 52.6, t) * 0.65;
        const flapHz = lerp(1.35, 2.75, clamp(climbEffort, 0, 1));
        if (!isFrozenPause) {
          nfFlapPhase += dt * flapHz * Math.PI * 2;
          lfFlapPhase += dt * (flapHz * 1.04) * Math.PI * 2;
        }

        toothless.rootGroup.position.set(
          lerp(nfGround.x, nfPose.pos.x, air),
          lerp(nfGround.y, nfPose.pos.y, air),
          lerp(nfGround.z, nfPose.pos.z, air)
        );
        const nfFlare = Math.sin(landBlend * Math.PI) * -0.24;
        tmpEuler.set(
          lerp(nfGround.terrainPitch, nfPose.pitch + nfFlare, air),
          nfPose.yaw,
          nfPose.bankRoll * air,
          'YXZ'
        );
        toothless.rootGroup.quaternion.setFromEuler(tmpEuler);

        lightFury.rootGroup.position.set(
          lerp(lfGround.x, lfPose.pos.x, air),
          lerp(lfGround.y, lfPose.pos.y, air),
          lerp(lfGround.z, lfPose.pos.z, air)
        );
        tmpEuler.set(
          lerp(lfGround.terrainPitch, lfPose.pitch + nfFlare, air),
          lfPose.yaw,
          lfPose.bankRoll * air,
          'YXZ'
        );
        lightFury.rootGroup.quaternion.setFromEuler(tmpEuler);

        const pushExtend = t < 41.35 ? Math.sin(((t - 40.8) / 0.55) * Math.PI) * 0.65 : 0;
        const flightTuck = smoothstep(41.25, 42.2, t) * (1.0 - smoothstep(51.4, 52.8, t)) * 0.94;
        const touchdownReach = smoothstep(51.4, 52.6, t) * (1.0 - landBlend) * -0.45;
        const postLandCushion = t > 52.8 ? Math.sin(clamp((t - 52.8) / 1.1, 0, 1) * Math.PI) * -0.35 : 0;

        nf.forelegStance = postLandCushion;
        nf.hindlegStance = pushExtend + postLandCushion;
        lf.forelegStance = postLandCushion;
        lf.hindlegStance = pushExtend + postLandCushion;

        nf.airborneFactor = air;
        nf.legFlightTuck = flightTuck + touchdownReach;
        nf.wingUnfurl = lerp(0.18, 0.98, clamp(air + (1 - landBlend) * 0.25, 0, 1));
        nf.wingFlap = Math.sin(nfFlapPhase) * lerp(0.55, 0.96, clamp(climbEffort, 0, 1)) * air;
        nf.wingSweep = (Math.sin(nfFlapPhase) < 0 ? 0.34 : -0.16) * climbEffort * air;
        nf.wingCamber = lerp(0.48, 0.88, clamp(climbEffort, 0, 1)) * air + 0.22;
        nf.wingWristFold = Math.max(0, -Math.cos(nfFlapPhase)) * 0.38 * air + (1 - air) * 0.38;
        nf.wingTipLag = -Math.cos(nfFlapPhase) * 0.72 * air;
        nf.pelvicFinFlare = 0.88 * air + 0.18;
        nf.rightTailFinFlare = clamp(0.85 + nfPose.bankRoll * 0.2, 0.4, 1.0);
        nf.tailWaveAmp = 0.42 * air;
        nf.tailWavePhase = nfFlapPhase;

        lf.airborneFactor = air;
        lf.legFlightTuck = flightTuck + touchdownReach;
        lf.wingUnfurl = lerp(0.16, 0.98, clamp(air + (1 - landBlend) * 0.25, 0, 1));
        lf.wingFlap = Math.sin(lfFlapPhase) * lerp(0.55, 0.96, clamp(climbEffort, 0, 1)) * air;
        lf.wingSweep = (Math.sin(lfFlapPhase) < 0 ? 0.34 : -0.16) * climbEffort * air;
        lf.wingCamber = lerp(0.48, 0.88, clamp(climbEffort, 0, 1)) * air + 0.22;
        lf.wingWristFold = Math.max(0, -Math.cos(lfFlapPhase)) * 0.38 * air + (1 - air) * 0.40;
        lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.72 * air;
        lf.pelvicFinFlare = 0.88 * air + 0.18;
        lf.rightHeartFinFlare = 0.92;
        lf.leftHeartFinFlare = 0.92;
        lf.iridescentShimmer = 0.45 * air + 0.18;
        lf.tailWaveAmp = 0.42 * air;
        lf.tailWavePhase = lfFlapPhase;

        if (!isFrozenPause && air > 0.65 && Math.random() < 0.55) {
          sanctuary.emitWingWake(toothless.rootGroup.position, lightFury.rootGroup.position);
        }

        nfMacro.lookAtMateWeight = 0.48;
        lfMacro.lookAtMateWeight = 0.48;
      }

      const skyArc = smoothstep(40.4, 45.2, t) * (1.0 - smoothstep(49.5, 53.5, t));
      const coupleMid = tmpVecA
        .addVectors(toothless.rootGroup.position, lightFury.rootGroup.position)
        .multiplyScalar(0.5);

      desiredCamPos.set(0.0, lerp(2.58, 12.2, skyArc), lerp(8.85, 20.5, skyArc));
      desiredCamTarget.set(
        lerp(0.0, coupleMid.x * 0.65, skyArc),
        lerp(1.15, coupleMid.y, skyArc),
        lerp(SANCTUARY_CENTER_Z, coupleMid.z, skyArc)
      );
      focusPoint.copy(desiredCamTarget);
      desiredFov = lerp(40, 45, skyArc);
      commitSmoothCamera(dt, 2.8);
      return;
    }

    // --------------------------------------------------------------------------
    // ACT III (0:54 - 1:18): SEASONS OF DEVOTION IN ONE UNBROKEN 360° DOLLY ORBIT
    // --------------------------------------------------------------------------
    if (t < 78.0) {
      const u = (t - 54.0) / 24.0;
      const sunAzimTurn = u * 160;

      if (t < 62.0) {
        const p = (t - 54.0) / 8.0;
        applyAtmosphereBlend('dawn-dusk', 'starlit-night', p, 0.32, 0, smoothstep(0.35, 1.0, p) * 0.88, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.48, waveSpeed: 0.85, seaChoppiness: 0.35 });
      } else if (t < 68.5) {
        applyAtmosphereBlend('starlit-night', 'starlit-night', 1.0, 0.28, 0, 0.94, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.42, waveSpeed: 0.80, seaChoppiness: 0.30 });
        if (!isFrozenPause && Math.floor((t - 62.0) * 1.6) !== Math.floor((t - dt - 62.0) * 1.6)) {
          once(`star_${Math.floor((t - 62.0) * 1.6)}`, () => {
            fireworks.spawnShootingStar(
              new THREE.Vector3(-28 + Math.random() * 24, 28 + Math.random() * 10, -48),
              new THREE.Vector3(24 + Math.random() * 10, -8.5, 4)
            );
          });
        }
      } else if (t < 75.0) {
        const p = (t - 68.5) / 6.5;
        const stormBell = Math.sin(p * Math.PI);
        applyAtmosphereBlend('starlit-night', 'stormy-squall', stormBell * 0.85, lerp(0.30, 0.92, stormBell), stormBell * 0.55, lerp(0.92, 0.32, stormBell), 0, sunAzimTurn);
        ocean.setOceanParams({
          waveAmplitude: lerp(0.45, 1.35, stormBell),
          waveSpeed: lerp(0.85, 1.35, stormBell),
          seaChoppiness: lerp(0.32, 0.78, stormBell),
        });
      } else {
        const p = (t - 75.0) / 3.0;
        applyAtmosphereBlend('starlit-night', 'dawn-dusk', p * 0.25, lerp(0.45, 0.22, p), 0, 0.78, 0, sunAzimTurn);
        ocean.setOceanParams({ waveAmplitude: 0.42, waveSpeed: 0.80, seaChoppiness: 0.30 });
      }

      sanctuary.setWildflowerBloom(0.62);

      const cozyBlend = smoothstep(54.0, 58.5, t);
      placeGroundedDragon(
        toothless.rootGroup,
        lerp(1.45, 0.98, cozyBlend),
        lerp(SANCTUARY_CENTER_Z, -2.42, cozyBlend),
        lerpAngle(-Math.PI * 0.5, -0.14, cozyBlend)
      );
      placeGroundedDragon(
        lightFury.rootGroup,
        lerp(-1.45, -0.64, cozyBlend),
        lerp(SANCTUARY_CENTER_Z, -1.96, cozyBlend),
        lerpAngle(Math.PI * 0.5, 0.14, cozyBlend),
        0,
        0.94
      );

      nf.forelegStance = -0.18 * cozyBlend;
      nf.hindlegStance = -0.52 * cozyBlend;
      lf.forelegStance = -0.22 * cozyBlend;
      lf.hindlegStance = -0.56 * cozyBlend;

      const starGaze = smoothstep(61.0, 63.5, t) * (1.0 - smoothstep(67.5, 69.2, t));
      const stormShelter = smoothstep(68.2, 70.2, t) * (1.0 - smoothstep(74.5, 76.8, t));

      nf.headPitch = lerp(0.06, 0.44, starGaze) - stormShelter * 0.12;
      lf.headPitch = lerp(0.08, 0.46, starGaze) - stormShelter * 0.10;
      nf.squint = 0.25 + stormShelter * 0.25;
      lf.squint = 0.35 + stormShelter * 0.32;

      lf.wingUnfurl = 0.08;
      lfMacro.tuckInnerWingNeat = cozyBlend;

      nf.wingUnfurl = lerp(0.16, 0.72, stormShelter);
      nfMacro.protectiveWingMantle = lerp(0.35, 1.0, stormShelter) * cozyBlend;
      nfMacro.affectionateNuzzle = stormShelter * 0.55;
      lfMacro.affectionateNuzzle = cozyBlend * 0.35 + stormShelter * 0.65;
      nfMacro.lookAtMateWeight = (1.0 - starGaze) * 0.65;
      lfMacro.lookAtMateWeight = (1.0 - starGaze) * 0.65;

      nf.tailCurl = 0.52 * cozyBlend;
      lf.tailCurl = -0.52 * cozyBlend;

      const orbitAngle = smoothstep(0.0, 1.0, u) * Math.PI * 2;
      const orbitR = 8.85;
      desiredCamPos.set(
        Math.sin(orbitAngle) * orbitR,
        2.45 + Math.sin(orbitAngle * 0.5) * 0.45,
        SANCTUARY_CENTER_Z + Math.cos(orbitAngle) * orbitR
      );
      desiredCamTarget.set(0.12, 1.18, -2.20);
      focusPoint.copy(desiredCamTarget);
      desiredFov = 40;
      commitSmoothCamera(dt, 3.2);
      return;
    }

    // --------------------------------------------------------------------------
    // ACT IV (1:18 - 1:28 + PAUSE): SAND-HEART CONFESSION & DEEP COURTSHIP BOW
    // --------------------------------------------------------------------------
    if (
      t <= CONFESSION_PAUSE_SEC + 0.0001 &&
      mode !== 'accepted-playing' &&
      mode !== 'completed-awaiting-explore' &&
      mode !== 'free-explore'
    ) {
      applyAtmosphereBlend('starlit-night', 'dawn-dusk', 0.24, 0.16, 0, 0.82);
      ocean.setOceanParams({ waveAmplitude: 0.32, waveSpeed: 0.72, seaChoppiness: 0.24 });
      sanctuary.setWildflowerBloom(0.68);
      sanctuary.setCelebrationFlowerWave(0.0);

      const lfStep = smoothstep(78.0, 80.5, t);
      placeGroundedDragon(
        lightFury.rootGroup,
        lerp(-0.64, -2.08, lfStep),
        lerp(-1.96, SANCTUARY_CENTER_Z, lfStep),
        lerpAngle(0.14, Math.PI * 0.5, lfStep),
        0,
        0.94
      );
      lf.neckArch = 0.28;
      lf.earPerk = 0.88;
      lf.pupilDilation = 0.88;
      lfMacro.lookAtMateWeight = 0.92;

      if (t < 84.2) {
        const etchU = clamp((t - 78.5) / 5.4, 0, 1);
        sanctuary.setEtchProgress(etchU);

        const a = etchU * Math.PI * 2 - Math.PI * 0.5;
        const sa = Math.sin(a);
        const hx = 16 * sa * sa * sa * 0.056;
        const hz = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - 1 * Math.cos(4 * a)) * 0.054;
        const targetX = clamp(hx + 1.08, 0.25, 2.35);
        const targetZ = clamp(SANCTUARY_CENTER_Z + hz, -3.55, -1.05);

        const walkIn = smoothstep(78.0, 79.0, t);
        placeGroundedDragon(
          toothless.rootGroup,
          lerp(0.98, targetX, walkIn),
          lerp(-2.42, targetZ, walkIn),
          Math.atan2(hx - targetX, (SANCTUARY_CENTER_Z + hz) - targetZ)
        );
        nf.forelegStance = -0.34;
        nf.headPitch = -0.44;
        nf.alphaGlow = 0.24 * Math.sin(etchU * Math.PI);
      } else {
        sanctuary.setEtchProgress(1.0);
        const bowApproach = smoothstep(84.2, 85.8, t);
        const deepBow = smoothstep(85.4, 87.6, t);

        placeGroundedDragon(
          toothless.rootGroup,
          lerp(1.45, 2.08, bowApproach),
          SANCTUARY_CENTER_Z,
          -Math.PI * 0.5
        );

        nf.forelegStance = -1.0 * deepBow;
        nf.hindlegStance = 0.22 * deepBow;
        nfMacro.deepCourtshipBow = deepBow;
        nf.wingUnfurl = 0.62 * deepBow;
        nf.wingFlap = -0.18 * deepBow;
        nf.earPerk = 0.88 - Math.max(0, -hoverBias) * 0.48;
        nf.pupilDilation = 0.98;
        nf.alphaGlow = 0.36 + Math.max(0, hoverBias) * 0.30;
        nf.tailYaw = Math.max(0, hoverBias) * 0.25 * Math.sin(worldClock * 2.2);

        const yesHover = Math.max(0, hoverBias);
        const noHover = Math.max(0, -hoverBias);
        lf.forelegStance = 0.08 - yesHover * 0.12;
        lf.headRoll = yesHover * 0.18 - noHover * 0.14;
        lf.earPerk = 0.86 + yesHover * 0.12 - noHover * 0.44;
        lf.squint = 0.22 + yesHover * 0.28;
        lf.iridescentShimmer = 0.25 + yesHover * 0.38;

        nfMacro.lookAtMateWeight = 0.88;
        lfMacro.lookAtMateWeight = 0.94;
      }

      desiredCamPos.set(0.0, 2.08, 6.45);
      desiredCamTarget.set(0.0, 1.08, SANCTUARY_CENTER_Z);
      focusPoint.copy(desiredCamTarget);
      desiredFov = 36;
      commitSmoothCamera(dt, 2.8);
      return;
    }

    // --------------------------------------------------------------------------
    // ACT V (1:28 - 2:00): HER ACCEPTANCE, SHOCKING HALO, BLOOMING FLOWERS,
    // JOYFUL DRAGON CELEBRATION, COLOSSAL FIREWORKS & PROTECTIVE WING TABLEAU!
    // --------------------------------------------------------------------------
    const vU = clamp((t - CONFESSION_PAUSE_SEC) / (TOTAL_MOVIE_SEC - CONFESSION_PAUSE_SEC), 0, 1);

    applyAtmosphereBlend('starlit-night', 'dawn-dusk', lerp(0.24, 0.10, vU), 0.18, 0, lerp(0.84, 1.0, vU));
    ocean.setOceanParams({ waveAmplitude: 0.36, waveSpeed: 0.78, seaChoppiness: 0.28 });

    sanctuary.setEtchProgress(1.0);
    sanctuary.setAcceptanceGlow(smoothstep(88.2, 91.5, t));
    sanctuary.setWildflowerBloom(lerp(0.68, 1.0, smoothstep(89.0, 95.0, t)));
    sanctuary.setCelebrationFlowerWave(smoothstep(89.6, 95.8, t));

    if (t < 96.4) {
      const stepAcross = smoothstep(88.1, 90.4, t);
      const nuzzleHold = smoothstep(89.8, 90.8, t) * (1.0 - smoothstep(92.2, 93.0, t));
      const joyDance = smoothstep(92.3, 93.1, t) * (1.0 - smoothstep(95.2, 96.2, t));

      placeGroundedDragon(
        toothless.rootGroup,
        lerp(2.08, 0.72, smoothstep(88.4, 90.6, t)),
        SANCTUARY_CENTER_Z,
        -Math.PI * 0.5
      );
      placeGroundedDragon(
        lightFury.rootGroup,
        lerp(-2.08, -0.68, stepAcross),
        SANCTUARY_CENTER_Z,
        Math.PI * 0.5,
        0,
        0.94
      );

      if (t >= 90.2) {
        once('acceptance_shockwave_halo', () => {
          const touchPt = new THREE.Vector3(0.0, 1.15, SANCTUARY_CENTER_Z);
          sanctuary.triggerResonanceWave(touchPt);
          sanctuary.spawnShimmerBurst(touchPt, true, 95);
        });
      }

      const remainBow = 1.0 - smoothstep(88.2, 90.2, t);
      nf.forelegStance = -1.0 * remainBow;
      nfMacro.deepCourtshipBow = remainBow;

      nfMacro.affectionateNuzzle = nuzzleHold;
      lfMacro.affectionateNuzzle = nuzzleHold;

      const nfRearBell = Math.sin(clamp((t - 92.4) / 2.8, 0, 1) * Math.PI);
      nfMacro.rearUpJoy = nfRearBell * 0.85;
      nf.wingUnfurl = lerp(0.24, 0.92, Math.max(nuzzleHold * 0.35, nfRearBell));
      nf.wingFlap = Math.sin((t - 92.4) * 3.6) * 0.34 * nfRearBell;
      nf.alphaGlow = lerp(0.55, 1.0, Math.max(nuzzleHold, joyDance));
      nf.dorsalSpineSplit = 0.88;
      nf.jawOpen = 0.22 * nfRearBell;
      nf.squint = 0.55 * nuzzleHold + 0.25 * joyDance;
      nf.blink = nuzzleHold * 0.75;
      nf.tailYaw = Math.sin(t * 2.8) * 0.38 * joyDance;

      const lfPranceBell = Math.sin(clamp((t - 92.8) / 2.6, 0, 1) * Math.PI);
      lfMacro.playPawL = lfPranceBell * 0.82;
      lf.wingUnfurl = lerp(0.18, 0.78, lfPranceBell);
      lf.wingFlap = Math.sin((t - 92.8) * 3.8) * 0.28 * lfPranceBell;
      lf.iridescentShimmer = lerp(0.45, 0.95, Math.max(nuzzleHold, joyDance));
      lf.squint = 0.58 * nuzzleHold + 0.35 * joyDance;
      lf.blink = nuzzleHold * 0.75;
      lf.tailYaw = -Math.sin(t * 2.8) * 0.42 * joyDance;

      nfMacro.lookAtMateWeight = 0.95;
      lfMacro.lookAtMateWeight = 0.95;

      const pullStart = smoothstep(94.2, 96.4, t);
      desiredCamPos.set(0.0, lerp(2.08, 2.45, pullStart), lerp(6.45, 8.8, pullStart));
      desiredCamTarget.set(0.0, lerp(1.08, 1.85, pullStart), lerp(SANCTUARY_CENTER_Z, -3.2, pullStart));
      focusPoint.copy(desiredCamTarget);
      desiredFov = lerp(36, 42, pullStart);
      commitSmoothCamera(dt, 2.6);
      return;
    }

    const turnSea = smoothstep(96.4, 98.4, t);
    placeGroundedDragon(
      toothless.rootGroup,
      lerp(0.72, 0.96, turnSea),
      lerp(SANCTUARY_CENTER_Z, -2.42, turnSea),
      lerpAngle(-Math.PI * 0.5, -Math.PI + 0.18, turnSea)
    );
    placeGroundedDragon(
      lightFury.rootGroup,
      lerp(-0.68, -0.62, turnSea),
      lerp(SANCTUARY_CENTER_Z, -1.98, turnSea),
      lerpAngle(Math.PI * 0.5, Math.PI - 0.18, turnSea),
      0,
      0.94
    );

    const breathBuild = smoothstep(97.8, 98.8, t) * (1.0 - smoothstep(99.4, 100.4, t));
    if (t >= 98.9) {
      once('twin_dragon_comets', () => {
        const nfMouth = new THREE.Vector3(0.92, 1.65, -3.15);
        const lfMouth = new THREE.Vector3(-0.58, 1.58, -2.72);
        const apex = new THREE.Vector3(0.0, 20.5, -26.0);
        fireworks.launchTwinDragonComets(nfMouth, lfMouth, apex);
      });
    }

    const fwCues: Array<[number, 'heart' | 'willow' | 'peony' | 'saturn', number, number, number, number, number, number]> = [
      [100.6, 'peony', -14.0, 17.5, -28.0, 0x38d8ff, 0xffd875, 1.45],
      [101.2, 'peony', 14.0, 18.2, -28.0, 0xff72c6, 0xfff0a8, 1.45],
      [102.4, 'heart', -7.5, 20.5, -26.0, 0xff62b8, 0xffe28a, 1.55],
      [103.2, 'saturn', 8.5, 21.0, -27.5, 0x56e2ff, 0xff8ad8, 1.50],
      [104.5, 'willow', 0.0, 23.5, -30.0, 0xffd97d, 0xff85c8, 1.75],
      [105.8, 'heart', 11.5, 19.5, -25.5, 0xff7ac8, 0x72eeff, 1.55],
      [107.0, 'willow', -11.5, 21.5, -29.0, 0xffdf85, 0x8ae8ff, 1.65],
      [108.4, 'saturn', -4.5, 22.5, -28.0, 0xc98eff, 0xffe494, 1.55],
      [109.6, 'peony', 6.5, 20.0, -26.5, 0x4de8ff, 0xff7ec4, 1.50],
      [111.0, 'willow', -15.5, 22.0, -30.0, 0xffe082, 0xff78c4, 1.75],
      [111.3, 'willow', 15.5, 22.0, -30.0, 0xffe082, 0x5ce8ff, 1.75],
      [112.2, 'heart', -5.5, 23.0, -27.0, 0xff5eb5, 0xffea96, 1.65],
      [112.5, 'heart', 5.5, 23.0, -27.0, 0x48e5ff, 0xff85d0, 1.65],
      [113.8, 'heart', 0.0, 24.5, -28.0, 0xff6ec4, 0xffe898, 2.05],
      [114.6, 'willow', 0.0, 26.0, -32.0, 0xffdf88, 0xffffff, 1.95],
    ];

    for (let i = 0; i < fwCues.length; i++) {
      const [cueSec, kind, tx, ty, tz, c1, c2, sc] = fwCues[i];
      if (t >= cueSec) {
        once(`fw_${i}`, () => {
          fireworks.launchShell(
            new THREE.Vector3(tx * 0.45, -1.5, tz - 5.0),
            new THREE.Vector3(tx, ty, tz),
            kind,
            c1,
            c2,
            sc,
            1.05
          );
        });
      }
    }

    const cozySit = smoothstep(100.2, 103.5, t);
    nf.forelegStance = -0.16 * cozySit;
    nf.hindlegStance = -0.54 * cozySit;
    lf.forelegStance = -0.20 * cozySit;
    lf.hindlegStance = -0.58 * cozySit;

    const finaleNuzzle = smoothstep(113.5, 117.5, t);
    nf.headPitch = lerp(0.38, 0.24, finaleNuzzle) + breathBuild * 0.36;
    lf.headPitch = lerp(0.40, 0.26, finaleNuzzle) + breathBuild * 0.36;
    nf.jawOpen = 0.06 + breathBuild * 0.58;
    lf.jawOpen = 0.04 + breathBuild * 0.54;
    nf.alphaGlow = lerp(0.85, 0.42, smoothstep(102.0, 116.0, t)) + breathBuild * 0.3;
    lf.iridescentShimmer = lerp(0.75, 0.42, smoothstep(102.0, 116.0, t)) + breathBuild * 0.3;
    nf.squint = 0.30 + finaleNuzzle * 0.22;
    lf.squint = 0.34 + finaleNuzzle * 0.24;

    lf.wingUnfurl = 0.08;
    lfMacro.tuckInnerWingNeat = cozySit;
    nf.wingUnfurl = lerp(0.22, 0.68, cozySit);
    nfMacro.protectiveWingMantle = cozySit;
    nfMacro.affectionateNuzzle = finaleNuzzle * 0.85;
    lfMacro.affectionateNuzzle = cozySit * 0.45 + finaleNuzzle * 0.55;

    nf.tailCurl = 0.58 * cozySit;
    lf.tailCurl = -0.58 * cozySit;

    const grandWide = smoothstep(96.4, 102.5, t);
    desiredCamPos.set(0.10, lerp(2.45, 2.35, grandWide), lerp(8.8, 9.65, grandWide));
    desiredCamTarget.set(0.10, lerp(1.85, 4.85, grandWide), lerp(-3.2, -12.5, grandWide));
    focusPoint.set(0.10, 1.25, SANCTUARY_CENTER_Z);
    desiredFov = lerp(42, 48, grandWide);
    commitSmoothCamera(dt, 2.2);
  }

  function evaluateDeclinedTimeline(el: number, dt: number): void {
    resetNeutralGroundedBase();
    const nf = toothlessController.state;
    const lf = lightFuryController.state;
    const u = clamp(el / 12.0, 0, 1);

    applyAtmosphereBlend('starlit-night', 'misty-overcast', smoothstep(0.0, 0.85, u), lerp(0.18, 0.65, u), u * 0.25, lerp(0.78, 0.0, smoothstep(0.0, 0.45, u)), -14 * u);
    ocean.setOceanParams({ waveAmplitude: lerp(0.32, 0.85, u), waveSpeed: 0.95, seaChoppiness: 0.55 });

    sanctuary.setAcceptanceGlow(0);
    sanctuary.setCelebrationFlowerWave(0);
    sanctuary.setEtchProgress(1.0 - smoothstep(0.08, 0.68, u));
    sanctuary.setWildflowerBloom(lerp(0.68, 0.04, smoothstep(0.05, 0.75, u)));
    sanctuary.setFadeOut(1.0 - smoothstep(0.35, 0.92, u));

    placeGroundedDragon(toothless.rootGroup, 2.08, SANCTUARY_CENTER_Z, lerpAngle(-Math.PI * 0.5, -Math.PI * 0.85, smoothstep(0.28, 0.75, u)));
    nf.forelegStance = lerp(-1.0, -0.35, smoothstep(0.0, 0.35, u));
    nf.headPitch = lerp(0.12, -0.34, smoothstep(0.15, 0.65, u));
    nf.earPerk = lerp(0.65, 0.04, smoothstep(0.0, 0.38, u));
    nf.alphaGlow = lerp(0.32, 0.0, smoothstep(0.0, 0.25, u));
    nf.squint = 0.38;

    if (el < 3.6) {
      const turnP = smoothstep(0.4, 3.2, el);
      placeGroundedDragon(
        lightFury.rootGroup,
        lerp(-2.08, -2.65, turnP),
        lerp(SANCTUARY_CENTER_Z, -2.85, turnP),
        lerpAngle(Math.PI * 0.5, -Math.PI * 0.82, turnP),
        0,
        0.94
      );
      const crouch = smoothstep(2.5, 3.5, el);
      lf.forelegStance = -0.75 * crouch;
      lf.hindlegStance = -0.82 * crouch;
      lf.wingUnfurl = smoothstep(2.0, 3.5, el);
      lf.wingFlap = 0.88 * crouch;
      lf.earPerk = 0.22;
      lfFlapPhase = Math.PI * 0.5;
    } else {
      const flyU = clamp((el - 3.6) / 8.4, 0, 1);
      lfFlapPhase += dt * 2.2 * Math.PI * 2;
      const air = smoothstep(0.0, 0.14, flyU);

      const depX = lerp(-2.65, -36.0, Math.pow(flyU, 1.25));
      const depY = lerp(0.0, 19.5, Math.pow(flyU, 1.15));
      const depZ = lerp(-2.85, -56.0, Math.pow(flyU, 1.25));
      const depYaw = Math.atan2(-36.0 - -2.65, -56.0 - -2.85);

      lightFury.rootGroup.position.set(depX, depY, depZ);
      tmpEuler.set(-0.32 * air, depYaw, 0.24 * air, 'YXZ');
      lightFury.rootGroup.quaternion.setFromEuler(tmpEuler);

      lf.airborneFactor = air;
      lf.legFlightTuck = smoothstep(0.08, 0.28, flyU) * 0.92;
      lf.wingUnfurl = 0.98;
      lf.wingFlap = Math.sin(lfFlapPhase) * 0.88;
      lf.wingTipLag = -Math.cos(lfFlapPhase) * 0.65;
      lf.pelvicFinFlare = 0.88;
      lf.iridescentShimmer = lerp(0.35, 0.98, smoothstep(0.25, 0.85, flyU));
    }

    desiredCamPos.set(lerp(0.0, 3.2, u), lerp(2.08, 3.4, u), lerp(6.45, 11.8, u));
    desiredCamTarget.set(lerp(0.0, 0.6, u), 1.15, SANCTUARY_CENTER_Z);
    focusPoint.copy(desiredCamTarget);
    desiredFov = lerp(36, 44, u);
    commitSmoothCamera(dt, 1.8);

    callbacks.onDeclineProgress(smoothstep(5.5, 11.6, el));
  }

  return {
    update: (dt: number): StoryFrameStep => {
      const safeDt = Math.min(dt, 0.05);
      worldClock += safeDt;

      if (mode === 'playing') {
        storyTime += safeDt;
        if (storyTime >= CONFESSION_PAUSE_SEC) {
          storyTime = CONFESSION_PAUSE_SEC;
          mode = 'awaiting-confession-choice';
          callbacks.onReachConfessionPrompt();
        }
        evaluateMainStoryTimeline(storyTime, safeDt, mode === 'awaiting-confession-choice');
      } else if (mode === 'awaiting-confession-choice') {
        evaluateMainStoryTimeline(CONFESSION_PAUSE_SEC, safeDt, true);
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

        if (dayCycle < 0.42 && Math.floor(postEndingElapsed / 3.5) !== Math.floor((postEndingElapsed - safeDt) / 3.5)) {
          const kinds: Array<'heart' | 'willow' | 'peony' | 'saturn'> = ['heart', 'willow', 'saturn', 'peony'];
          const k = kinds[Math.floor(Math.random() * kinds.length)];
          const tx = (Math.random() - 0.5) * 24.0;
          const ty = 18.0 + Math.random() * 7.0;
          const tz = -25.0 - Math.random() * 8.0;
          fireworks.launchShell(
            new THREE.Vector3(tx * 0.4, -2.0, tz - 5.0),
            new THREE.Vector3(tx, ty, tz),
            k,
            k === 'heart' ? 0xff6ec4 : 0x52e5ff,
            0xffe28a,
            1.45,
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

      updateMateWorldTargets(worldClock);
      const windNow = atmosphere.sharedUniforms.uWindStrength.value;
      sanctuary.update(safeDt, worldClock, windNow);
      fireworks.update(safeDt, camera.position, atmosphere.isAudioMuted());

      return { worldTimeSec: worldClock, focusPoint };
    },

    applyBiomechanicalPostPass: (dt: number) => {
      const safeDt = Math.min(dt, 0.05);
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
      mode = 'accepted-playing';
    },

    chooseNo: () => {
      if (mode !== 'awaiting-confession-choice') return;
      hoverBias = 0;
      declineElapsed = 0;
      mode = 'declined-playing';
    },

    enterFreeExplore: () => {
      mode = 'free-explore';
      const homePos = new THREE.Vector3(0.10, 2.55, 8.95);
      const homeTarget = new THREE.Vector3(0.10, 1.20, SANCTUARY_CENTER_Z);
      callbacks.onEnterFreeExplore(homePos, homeTarget);
    },

    replayStory: () => {
      firedEvents.clear();
      storyTime = 0;
      declineElapsed = 0;
      postEndingElapsed = 0;
      hoverBias = 0;
      camInitialized = false;
      nfBio.resetMotionTracking();
      lfBio.resetMotionTracking();
      sanctuary.setEtchProgress(0);
      sanctuary.setAcceptanceGlow(0);
      sanctuary.setCelebrationFlowerWave(0);
      sanctuary.setWildflowerBloom(0.28);
      sanctuary.setFadeOut(1);
      callbacks.onDeclineProgress(0);
      mode = 'playing';
    },
  };
}
