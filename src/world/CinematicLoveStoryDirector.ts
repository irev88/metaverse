import * as THREE from 'three';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import {
  DEFAULT_HERO_RIG_STATE,
  ToothlessRigController,
  ToothlessRigState,
} from '../character/ToothlessRigController';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import {
  DEFAULT_LIGHT_FURY_STATE,
  LightFuryRigController,
  LightFuryRigState,
} from '../character/lightfury/LightFuryRigController';
import { NordicAtmosphereController } from './NordicAtmosphere';
import { sampleHeroCliffHeight, sampleWorldTerrainHeight } from './NordicCliffWorld';
import { DEFAULT_OCEAN_PARAMS, NorthSeaOceanController } from './NorthSeaOcean';
import { CourtshipSanctuaryController } from './CourtshipSanctuaryProps';
import { CelestialFireworksController, FireworkShellKind } from './CelestialFireworksSystem';

export type StoryModeState =
  | 'playing-pre-confession'
  | 'awaiting-confession-choice'
  | 'declined-fading'
  | 'playing-acceptance-finale'
  | 'completed-awaiting-explore'
  | 'free-explore';

export interface CinematicStoryCallbacks {
  onReachConfessionPrompt: () => void;
  onDeclineProgress: (fade01: number) => void;
  onDeclineComplete: () => void;
  onReachMovieComplete: () => void;
  onEnterFreeExplore: (finalCamPos: THREE.Vector3, finalCamTarget: THREE.Vector3) => void;
}

export interface CinematicLoveStoryController {
  getState: () => StoryModeState;
  getTimelineSec: () => number;
  isCameraLocked: () => boolean;
  setConfessionHoverBias: (bias: number) => void; // +1 = Yes hover, -1 = No hover, 0 = neutral
  chooseYes: () => void;
  chooseNo: () => void;
  enterFreeExplore: () => void;
  replayStory: () => void;
  update: (dt: number) => { worldTimeSec: number; focusPoint: THREE.Vector3 };
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp01((x - e0) / Math.max(1e-5, e1 - e0));
  return t * t * (3 - 2 * t);
}

function smootherstep(e0: number, e1: number, x: number): number {
  const t = clamp01((x - e0) / Math.max(1e-5, e1 - e0));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function wrapAngle(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function lerpAngle(a: number, b: number, t: number): number {
  return a + wrapAngle(b - a) * t;
}

interface FireworkCue {
  timeSec: number;
  fired: boolean;
  origin: THREE.Vector3;
  target: THREE.Vector3;
  kind: FireworkShellKind;
  colA: number;
  colB: number;
  scale: number;
  dur: number;
}

export function createCinematicLoveStoryDirector(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  atmosphere: NordicAtmosphereController,
  ocean: NorthSeaOceanController,
  toothlessAsset: ToothlessCharacterAsset,
  toothlessController: ToothlessRigController,
  lightFuryAsset: LightFuryCharacterAsset,
  lightFuryController: LightFuryRigController,
  sanctuary: CourtshipSanctuaryController,
  fireworks: CelestialFireworksController,
  callbacks: CinematicStoryCallbacks
): CinematicLoveStoryController {
  const CONFESSION_PAUSE_SEC = 88.0; // 1:28
  const TOTAL_MOVIE_SEC = 120.0;     // 2:00

  let mode: StoryModeState = 'playing-pre-confession';
  let storySec = 0.0;
  let worldSimSec = 0.0;
  let suspendClock = 0.0;
  let declineElapsed = 0.0;
  let hoverBias = 0.0;
  let smoothedHoverBias = 0.0;

  // Walk-cycle integrated arc-length trackers (eliminates foot-sliding 100%)
  const prevNFGround = new THREE.Vector2(3.95, -0.55);
  const prevLFGround = new THREE.Vector2(-3.95, -0.55);
  let nfWalkPhase = 0;
  let lfWalkPhase = 0;

  // ==========================================================================
  // ACT I ARRIVAL SPLINES (Distant Horizon Sea-Skim -> Cliff Cobra Flare -> Perch)
  // ==========================================================================
  const nfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(9.5, 22.0, 178.0),    // Far sunlit sea-mist horizon
      new THREE.Vector3(14.5, 6.5, 118.0),    // Descending fast over open water
      new THREE.Vector3(16.2, -7.6, 68.0),    // Wave-skim ~3.9m above SEA_LEVEL_Y (-11.5m)
      new THREE.Vector3(11.8, -5.8, 34.0),    // Banking inward past sea-stacks
      new THREE.Vector3(6.4, 3.6, 11.5),      // Rising dramatically over cliff brink
      new THREE.Vector3(4.35, 2.35, 2.20),    // Cobra air-brake hover flare
      new THREE.Vector3(3.95, 0.0, -0.55),    // Starboard sanctuary clearing touchdown
    ],
    false,
    'centripetal',
    0.5
  );

  const lfArrivalSpline = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-2.5, 24.5, 184.0),
      new THREE.Vector3(3.2, 8.2, 122.0),
      new THREE.Vector3(5.4, -7.2, 70.0),     // Companion wave-skim beside Toothless
      new THREE.Vector3(1.2, -5.0, 35.5),
      new THREE.Vector3(-4.8, 4.1, 11.8),
      new THREE.Vector3(-4.35, 2.40, 2.10),
      new THREE.Vector3(-3.95, 0.0, -0.55),   // Port sanctuary clearing touchdown
    ],
    false,
    'centripetal',
    0.5
  );

  // Event Triggers (resettable on Replay)
  let firedCloakVanish = false;
  let firedCloakReveal = false;
  let firedStormLightning1 = false;
  let firedStormLightning2 = false;
  let firedShootingStar1 = false;
  let firedShootingStar2 = false;
  let firedShootingStar3 = false;
  let firedResonanceWave = false;
  let firedTwinComets = false;

  const buildFireworkShow = (): FireworkCue[] => [
    {
      timeSec: 99.6,
      fired: false,
      origin: new THREE.Vector3(-12, -10, -28),
      target: new THREE.Vector3(-11.5, 15.8, -28),
      kind: 'willow',
      colA: 0xffdf9e,
      colB: 0xff9ec6,
      scale: 1.15,
      dur: 1.05,
    },
    {
      timeSec: 100.0,
      fired: false,
      origin: new THREE.Vector3(12, -10, -28),
      target: new THREE.Vector3(11.5, 16.2, -28),
      kind: 'willow',
      colA: 0xffdf9e,
      colB: 0x7fd8ff,
      scale: 1.15,
      dur: 1.05,
    },
    {
      timeSec: 100.8,
      fired: false,
      origin: new THREE.Vector3(-6, -10, -32),
      target: new THREE.Vector3(-6.5, 19.5, -31),
      kind: 'peony',
      colA: 0xff8ec8,
      colB: 0xd4a8ff,
      scale: 1.1,
      dur: 1.1,
    },
    {
      timeSec: 101.3,
      fired: false,
      origin: new THREE.Vector3(7, -10, -32),
      target: new THREE.Vector3(6.8, 19.8, -31),
      kind: 'saturn',
      colA: 0x5fd0ff,
      colB: 0xffe2a8,
      scale: 1.12,
      dur: 1.1,
    },
    {
      timeSec: 102.1,
      fired: false,
      origin: new THREE.Vector3(0, -10, -30),
      target: new THREE.Vector3(0.0, 18.2, -29),
      kind: 'heart',
      colA: 0xff7eb9,
      colB: 0xffd89b,
      scale: 1.25,
      dur: 1.15,
    },
    {
      timeSec: 102.9,
      fired: false,
      origin: new THREE.Vector3(-15, -10, -34),
      target: new THREE.Vector3(-14.0, 17.5, -33),
      kind: 'peony',
      colA: 0x74dcff,
      colB: 0xffb3d9,
      scale: 1.08,
      dur: 1.1,
    },
    {
      timeSec: 103.3,
      fired: false,
      origin: new THREE.Vector3(15, -10, -34),
      target: new THREE.Vector3(14.0, 17.8, -33),
      kind: 'peony',
      colA: 0xff9ad0,
      colB: 0xffe6b3,
      scale: 1.08,
      dur: 1.1,
    },
    {
      timeSec: 104.1,
      fired: false,
      origin: new THREE.Vector3(-8, -10, -29),
      target: new THREE.Vector3(-7.2, 20.5, -30),
      kind: 'heart',
      colA: 0xff8ec6,
      colB: 0x5cd6ff,
      scale: 1.05,
      dur: 1.12,
    },
    {
      timeSec: 104.3,
      fired: false,
      origin: new THREE.Vector3(8, -10, -29),
      target: new THREE.Vector3(7.2, 20.5, -30),
      kind: 'heart',
      colA: 0x5cd6ff,
      colB: 0xff8ec6,
      scale: 1.05,
      dur: 1.12,
    },
    {
      timeSec: 105.0,
      fired: false,
      origin: new THREE.Vector3(0, -10, -34),
      target: new THREE.Vector3(0.0, 22.0, -32),
      kind: 'willow',
      colA: 0xffe4ad,
      colB: 0xffa8d2,
      scale: 1.42,
      dur: 1.18,
    },
    {
      timeSec: 106.2,
      fired: false,
      origin: new THREE.Vector3(0, -10, -28),
      target: new THREE.Vector3(0.0, 17.4, -26),
      kind: 'heart',
      colA: 0xff88c2,
      colB: 0x56d4ff,
      scale: 1.48,
      dur: 1.2,
    },
  ];

  let fireworkCues = buildFireworkShow();

  const resetTriggers = () => {
    firedCloakVanish = false;
    firedCloakReveal = false;
    firedStormLightning1 = false;
    firedStormLightning2 = false;
    firedShootingStar1 = false;
    firedShootingStar2 = false;
    firedShootingStar3 = false;
    firedResonanceWave = false;
    firedTwinComets = false;
    fireworkCues = buildFireworkShow();
    sanctuary.setEtchProgress(0);
    sanctuary.setAcceptanceGlow(0);
    sanctuary.setWildflowerBloom(0.08);
    sanctuary.setFadeOut(1);
  };

  // Scratch vectors to avoid per-frame allocations
  const tmpCamPos = new THREE.Vector3();
  const tmpCamTarget = new THREE.Vector3();
  const tmpViewOffset = new THREE.Vector3();
  const tmpNFPos = new THREE.Vector3();
  const tmpLFPos = new THREE.Vector3();
  const tmpNFAhead = new THREE.Vector3();
  const tmpLFAhead = new THREE.Vector3();
  const finalExploreCamPos = new THREE.Vector3(0.05, 2.75, 11.40);
  const finalExploreCamTarget = new THREE.Vector3(0.0, 1.18, -0.45);

  /**
   * Aspect-Ratio-Safe Camera Solver:
   * Ensures narrow/portrait viewports automatically pull back slightly and widen vertical FOV
   * so full two-shots, wingspans, sand-heart, and sky fireworks are NEVER cropped!
   */
  const applySafeCamera = (
    basePos: THREE.Vector3,
    lookTarget: THREE.Vector3,
    baseFovDeg: number,
    requiredWidthMeters: number,
    breathTime: number,
    breathAmp = 0.045
  ) => {
    const aspect = Math.max(0.45, window.innerWidth / Math.max(1, window.innerHeight));
    let fov = baseFovDeg;
    if (aspect < 1.55) {
      fov = Math.min(64, baseFovDeg + (1.55 - aspect) * 11.5);
    }

    tmpViewOffset.copy(basePos).sub(lookTarget);
    const baseDist = Math.max(0.5, tmpViewOffset.length());
    const vHalfRad = THREE.MathUtils.degToRad(fov * 0.5);
    const hHalfTan = Math.tan(vHalfRad) * aspect;
    const minForWidth = (requiredWidthMeters * 0.5) / Math.max(0.18, hHalfTan);
    const finalDist = Math.max(baseDist, minForWidth);

    tmpViewOffset.normalize().multiplyScalar(finalDist);
    tmpCamPos.copy(lookTarget).add(tmpViewOffset);

    // Subtle organic cinema-crane breathing
    tmpCamPos.x += Math.sin(breathTime * 0.65) * breathAmp;
    tmpCamPos.y += Math.cos(breathTime * 0.52) * breathAmp * 0.75;

    // Guaranteed terrain & ocean floor clearance at every angle!
    const terrainY = sampleWorldTerrainHeight(tmpCamPos.x, tmpCamPos.z);
    const safeMinY = Math.max(-9.4, terrainY + 1.15);
    if (tmpCamPos.y < safeMinY) {
      tmpCamPos.y = safeMinY;
    }

    camera.position.copy(tmpCamPos);
    if (Math.abs(camera.fov - fov) > 0.02) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
    camera.up.set(0, 1, 0);
    camera.lookAt(lookTarget);
  };

  const placeDragonOnCliff = (
    which: 'nf' | 'lf',
    x: number,
    z: number,
    yaw: number,
    dt: number,
    strideScale = 1.0
  ): number => {
    const prev = which === 'nf' ? prevNFGround : prevLFGround;
    const dist = Math.hypot(x - prev.x, z - prev.y);
    prev.set(x, z);

    let strideVal = 0;
    if (dist > 0.0004 && dt > 0.0001) {
      const phaseStep = (dist / 0.88) * Math.PI * 2 * strideScale;
      if (which === 'nf') {
        nfWalkPhase += phaseStep;
        strideVal = Math.sin(nfWalkPhase);
      } else {
        lfWalkPhase += phaseStep;
        strideVal = Math.sin(lfWalkPhase);
      }
    } else {
      if (which === 'nf') strideVal = Math.sin(nfWalkPhase) * Math.exp(-8 * dt);
      else strideVal = Math.sin(lfWalkPhase) * Math.exp(-8 * dt);
    }

    const gy = sampleHeroCliffHeight(x, z);
    const asset = which === 'nf' ? toothlessAsset : lightFuryAsset;
    asset.rootGroup.position.set(x, gy, z);
    asset.rootGroup.rotation.set(0, yaw, 0);
    asset.rootGroup.updateMatrixWorld(true);
    return THREE.MathUtils.clamp(strideVal, -1, 1);
  };

  // ==========================================================================
  // ATMOSPHERE, SKY & OCEAN EMOTIONAL ARC SEQUENCER
  // ==========================================================================
  const updateEnvironmentForTime = (t: number) => {
    if (t < 22.0) {
      // Act I: Crisp Morning Sunlit Horizon -> Warm Day
      const u = smoothstep(0, 22, t);
      atmosphere.blendPresets('clear-day', 'golden-hour', u * 0.42, renderer, scene, -18 * (1 - u), 0);
      ocean.setOceanParams({ waveAmplitude: 0.44, waveSpeed: 0.92, seaChoppiness: 0.36 });
      sanctuary.setWildflowerBloom(0.08);
    } else if (t < 54.0) {
      // Act II: Warm Honeyed Golden Hour Courtship
      const u = smoothstep(22, 54, t);
      atmosphere.blendPresets('clear-day', 'golden-hour', 0.42 + u * 0.58, renderer, scene, 0, u * 16);
      ocean.setOceanParams({ waveAmplitude: 0.38, waveSpeed: 0.82, seaChoppiness: 0.28 });
      sanctuary.setWildflowerBloom(0.12 + u * 0.14);
    } else if (t < 60.0) {
      // Act III-A: Accelerated Crimson Sunset
      const u = smoothstep(54, 60, t);
      atmosphere.blendPresets('golden-hour', 'dawn-dusk', u, renderer, scene, -u * 6.5, 16 + u * 42);
      ocean.setOceanParams({ waveAmplitude: 0.46, waveSpeed: 1.1, seaChoppiness: 0.34 });
      sanctuary.setWildflowerBloom(0.26 + u * 0.34);
    } else if (t < 66.5) {
      // Act III-B: Starlit Aurora Wheel & Shooting Stars
      const u = smoothstep(60, 66.5, t);
      atmosphere.blendPresets('dawn-dusk', 'starlit-night', smoothstep(0, 0.45, u), renderer, scene, 0, 58 + u * 48);
      ocean.setOceanParams({ waveAmplitude: 0.24, waveSpeed: 0.68, seaChoppiness: 0.16 });
      sanctuary.setWildflowerBloom(0.75);

      if (t >= 61.4 && !firedShootingStar1) {
        firedShootingStar1 = true;
        fireworks.spawnShootingStar(new THREE.Vector3(-28, 34, -46), new THREE.Vector3(38, -11, -4));
      }
      if (t >= 63.2 && !firedShootingStar2) {
        firedShootingStar2 = true;
        fireworks.spawnShootingStar(new THREE.Vector3(24, 38, -50), new THREE.Vector3(-34, -12, 2));
      }
      if (t >= 64.9 && !firedShootingStar3) {
        firedShootingStar3 = true;
        fireworks.spawnShootingStar(new THREE.Vector3(-8, 41, -54), new THREE.Vector3(32, -10, -2));
      }
    } else if (t < 73.2) {
      // Act III-C: The Storm Trial (Driving Squall, Rough Swells & Lightning)
      const enter = smoothstep(66.5, 68.2, t);
      atmosphere.blendPresets('starlit-night', 'stormy-squall', enter, renderer, scene, 0, 106 + (t - 66.5) * 8);
      ocean.setOceanParams({
        waveAmplitude: THREE.MathUtils.lerp(0.24, 1.38, enter),
        waveSpeed: THREE.MathUtils.lerp(0.68, 1.55, enter),
        seaChoppiness: THREE.MathUtils.lerp(0.16, 0.86, enter),
      });
      sanctuary.setWildflowerBloom(0.42);
      if (t >= 68.8 && !firedStormLightning1) {
        firedStormLightning1 = true;
        atmosphere.triggerLightningStrike(camera.position);
      }
      if (t >= 71.4 && !firedStormLightning2) {
        firedStormLightning2 = true;
        atmosphere.triggerLightningStrike(camera.position);
      }
    } else if (t < 78.0) {
      // Act III-D: Clouds Parting into Velvet Rose-Twilight & Calm Sea
      const clear = smoothstep(73.2, 78.0, t);
      atmosphere.blendPresets('stormy-squall', 'dawn-dusk', clear, renderer, scene, -2.5 * clear, 0);
      atmosphere.setRainIntensity((1.0 - smoothstep(73.2, 75.2, t)) * 0.65);
      atmosphere.setLightningFrequency(0);
      ocean.setOceanParams({
        waveAmplitude: THREE.MathUtils.lerp(1.38, 0.28, clear),
        waveSpeed: THREE.MathUtils.lerp(1.55, 0.68, clear),
        seaChoppiness: THREE.MathUtils.lerp(0.86, 0.18, clear),
      });
      sanctuary.setWildflowerBloom(0.42 + clear * 0.28);
    } else if (t <= 96.0) {
      // Act IV-A & Confession Pause: Intimate Velvet Twilight -> Starlit Night
      const nightBlend = smoothstep(78.0, 95.0, t);
      atmosphere.blendPresets('dawn-dusk', 'starlit-night', 0.52 + nightBlend * 0.42, renderer, scene, 0, 0);
      atmosphere.setRainIntensity(0);
      ocean.setOceanParams({ waveAmplitude: 0.22, waveSpeed: 0.60, seaChoppiness: 0.14 });
    } else {
      // Act IV-B Fireworks & Act V Happy Ending: Full Luminous Aurora & Starlight Sanctuary!
      atmosphere.blendPresets('dawn-dusk', 'starlit-night', 0.96, renderer, scene, 0, (t - 96) * 0.5);
      atmosphere.setRainIntensity(0);
      ocean.setOceanParams({ waveAmplitude: 0.20, waveSpeed: 0.56, seaChoppiness: 0.12 });
    }
  };

  // ==========================================================================
  // FRAME-ACCURATE DRAGON & CAMERA CHOREOGRAPHY ACROSS ALL 5 ACTS
  // ==========================================================================
  const evaluateActChoreography = (t: number, dt: number) => {
    const nf: ToothlessRigState = { ...DEFAULT_HERO_RIG_STATE };
    const lf: LightFuryRigState = { ...DEFAULT_LIGHT_FURY_STATE };

    // ------------------------------------------------------------------------
    // ACT I (0.0s -> 22.0s): Distant Arrival, Wave-Skim & Cobra Touchdown
    // ------------------------------------------------------------------------
    if (t < 22.0) {
      const flightEnd = 20.0;
      if (t < flightEnd) {
        const u = clamp01(t / flightEnd);
        const easedU = 1.0 - Math.pow(1.0 - u, 1.32);
        nfArrivalSpline.getPointAt(easedU, tmpNFPos);
        lfArrivalSpline.getPointAt(easedU, tmpLFPos);
        nfArrivalSpline.getPointAt(Math.min(1, easedU + 0.015), tmpNFAhead);
        lfArrivalSpline.getPointAt(Math.min(1, easedU + 0.015), tmpLFAhead);

        const flare = smoothstep(16.2, 19.8, t);
        const air = 1.0 - smoothstep(19.1, 20.0, t);

        //Orient along flight velocity, transitioning smoothly to inward sanctuary facing on flare!
        const nfDir = tmpNFAhead.clone().sub(tmpNFPos);
        const lfDir = tmpLFAhead.clone().sub(tmpLFPos);
        const nfFlightYaw = Math.atan2(nfDir.x, nfDir.z);
        const lfFlightYaw = Math.atan2(lfDir.x, lfDir.z);
        const nfYaw = lerpAngle(nfFlightYaw, -1.42, flare);
        const lfYaw = lerpAngle(lfFlightYaw, 1.42, flare);

        const nfPitch = THREE.MathUtils.lerp(
          THREE.MathUtils.clamp(-Math.atan2(nfDir.y, Math.hypot(nfDir.x, nfDir.z)), -0.45, 0.45),
          -0.28,
          flare
        ) * air;
        const lfPitch = THREE.MathUtils.lerp(
          THREE.MathUtils.clamp(-Math.atan2(lfDir.y, Math.hypot(lfDir.x, lfDir.z)), -0.45, 0.45),
          -0.28,
          flare
        ) * air;
        const bank = Math.sin(u * Math.PI * 2.2) * 0.34 * (1 - flare);

        const nfGroundY = sampleHeroCliffHeight(tmpNFPos.x, tmpNFPos.z);
        const lfGroundY = sampleHeroCliffHeight(tmpLFPos.x, tmpLFPos.z);
        toothlessAsset.rootGroup.position.set(
          tmpNFPos.x,
          THREE.MathUtils.lerp(nfGroundY, tmpNFPos.y, air),
          tmpNFPos.z
        );
        toothlessAsset.rootGroup.rotation.set(nfPitch, nfYaw, bank, 'YXZ');
        toothlessAsset.rootGroup.updateMatrixWorld(true);

        lightFuryAsset.rootGroup.position.set(
          tmpLFPos.x,
          THREE.MathUtils.lerp(lfGroundY, tmpLFPos.y, air),
          tmpLFPos.z
        );
        lightFuryAsset.rootGroup.rotation.set(lfPitch, lfYaw, -bank * 0.85, 'YXZ');
        lightFuryAsset.rootGroup.updateMatrixWorld(true);

        prevNFGround.set(tmpNFPos.x, tmpNFPos.z);
        prevLFGround.set(tmpLFPos.x, tmpLFPos.z);

        const flapOmega = THREE.MathUtils.lerp(5.1, 5.8, flare);
        const nfFlap = Math.sin(t * flapOmega);
        const lfFlap = Math.sin(t * flapOmega + 0.85);

        Object.assign(nf, {
          airborneFactor: air,
          wingUnfurl: THREE.MathUtils.lerp(0.98, 0.72, smoothstep(19.3, 20.0, t)),
          wingFlap: nfFlap,
          wingSweep: THREE.MathUtils.lerp(-0.18, 0.78, flare),
          wingCamber: THREE.MathUtils.lerp(0.35, 0.88, flare),
          wingTipLag: -Math.cos(t * flapOmega) * 0.65,
          legFlightTuck: THREE.MathUtils.lerp(0.92, -0.92, flare),
          dorsalSpineSplit: 0.75,
          tailWaveAmp: 0.48 * air,
          tailWavePhase: t * 6.0,
          earPerk: 0.65 + 0.25 * flare,
        });

        Object.assign(lf, {
          airborneFactor: air,
          wingUnfurl: THREE.MathUtils.lerp(0.98, 0.68, smoothstep(19.3, 20.0, t)),
          wingFlap: lfFlap,
          wingSweep: THREE.MathUtils.lerp(-0.16, 0.75, flare),
          wingCamber: THREE.MathUtils.lerp(0.35, 0.85, flare),
          wingTipLag: -Math.cos(t * flapOmega + 0.85) * 0.65,
          legFlightTuck: THREE.MathUtils.lerp(0.92, -0.92, flare),
          tailWaveAmp: 0.46 * air,
          tailWavePhase: t * 6.0 + 0.85,
          headYaw: -0.22 * (1 - flare),
          headRoll: 0.16,
        });

        // Ocean-spray mist wake when skimming low over the sea (t = 5.5s -> 13.5s)
        if (t > 5.5 && t < 13.5) {
          sanctuary.emitWingWake(tmpNFPos, tmpLFPos, 0xd8eeff);
        }
      } else {
        // Post-touchdown settle (20.0s -> 22.0s)
        const settle = smoothstep(20.0, 22.0, t);
        placeDragonOnCliff('nf', 3.95, -0.55, lerpAngle(-1.42, -1.48, settle), dt);
        placeDragonOnCliff('lf', -3.95, -0.55, lerpAngle(1.42, 1.48, settle), dt);
        const cushion = Math.sin(clamp01((t - 20.0) / 0.8) * Math.PI) * -0.38;
        Object.assign(nf, {
          airborneFactor: 0,
          wingUnfurl: THREE.MathUtils.lerp(0.68, 0.36, settle),
          forelegStance: 0.10 + cushion,
          earPerk: 0.88,
          pupilDilation: 0.84,
        });
        Object.assign(lf, {
          airborneFactor: 0,
          wingUnfurl: THREE.MathUtils.lerp(0.64, 0.32, settle),
          forelegStance: 0.14 + cushion,
          coyWingVeil: settle * 0.45,
          headRoll: 0.18,
          pupilDilation: 0.86,
        });
      }

      // Act I Camera Shots:
      const pairMid = tmpNFPos
        .copy(toothlessAsset.rootGroup.position)
        .add(lightFuryAsset.rootGroup.position)
        .multiplyScalar(0.5);
      pairMid.y += 1.1;

      if (t < 8.8) {
        // Shot 1: Low Ocean-Skim Establishing Shot watching them emerge from horizon mist
        const s = smoothstep(0, 8.8, t);
        const cPos = new THREE.Vector3(
          THREE.MathUtils.lerp(9.5, 11.5, s),
          THREE.MathUtils.lerp(-5.2, -2.6, s),
          THREE.MathUtils.lerp(52.0, 34.0, s)
        );
        applySafeCamera(cPos, pairMid, 46, 14.0, t, 0.06);
      } else if (t < 15.6) {
        // Shot 2: Sweeping Aerial Tracking Pan up toward the Sanctuary Cliff
        const s = smoothstep(8.8, 15.6, t);
        const cPos = new THREE.Vector3(
          THREE.MathUtils.lerp(13.5, 2.2, s),
          THREE.MathUtils.lerp(3.8, 2.5, s),
          THREE.MathUtils.lerp(20.0, 11.8, s)
        );
        applySafeCamera(cPos, pairMid, 44, 13.5, t, 0.05);
      } else {
        // Shot 3: Hero Cliff Cobra Flare & Four-Paw Touchdown Two-Shot
        const s = smoothstep(15.6, 22.0, t);
        const cPos = new THREE.Vector3(0.0, THREE.MathUtils.lerp(1.85, 2.25, s), THREE.MathUtils.lerp(11.6, 10.2, s));
        tmpCamTarget.set(0.0, THREE.MathUtils.lerp(2.1, 1.25, s), -0.55);
        applySafeCamera(cPos, tmpCamTarget, 42, 12.2, t, 0.04);
      }
    }

    // ------------------------------------------------------------------------
    // ACT II (22.0s -> 54.0s): Coy Mimicry, Walking Courtship Circle & Sky Helix
    // ------------------------------------------------------------------------
    else if (t < 54.0) {
      if (t < 30.5) {
        // Scene II-A: Shy Coy Wing-Peek & Toothless's Playful Courtship Wing-Hops!
        const localT = t - 22.0;
        const hopEnv = smoothstep(3.2, 4.0, localT) * (1.0 - smoothstep(6.8, 7.8, localT));
        const hopWave = Math.abs(Math.sin(localT * 5.2)) * hopEnv;

        const nfX = 3.95 - smoothstep(2.5, 7.5, localT) * 0.55;
        const nfStride = placeDragonOnCliff('nf', nfX, -0.55, -Math.PI * 0.48, dt);
        placeDragonOnCliff('lf', -3.75, -0.55, Math.PI * 0.48, dt);

        toothlessAsset.rootGroup.position.y += hopWave * 0.24;

        Object.assign(nf, {
          limbStride: nfStride,
          earPerk: 0.98,
          earAsymmetry: Math.sin(localT * 2.2) * 0.28,
          headRoll: -0.28 * smoothstep(0.5, 2.2, localT),
          pupilDilation: 0.95,
          wingUnfurl: 0.36 + hopEnv * 0.54,
          wingFlap: Math.sin(localT * 10.4) * 0.42 * hopEnv,
          forelegStance: 0.12 + (hopWave - 0.35) * 0.55 * hopEnv,
          jawOpen: 0.22 * hopEnv,
          teethExtension: 0.0, // Cute gummy "Toothless" grin!
          tongueExtend: 0.28 * hopEnv,
          tailYaw: Math.sin(localT * 4.2) * 0.45,
          tailPitch: 0.38,
        });

        const amused = smoothstep(4.8, 7.2, localT);
        Object.assign(lf, {
          coyWingVeil: THREE.MathUtils.lerp(0.84, 0.22, amused),
          headRoll: THREE.MathUtils.lerp(0.32, -0.20, amused),
          headPitch: -0.05 + 0.08 * amused,
          pupilDilation: 0.90,
          squint: 0.12 + 0.56 * amused, // Affectionate feline amused squint!
          earPerk: 0.88,
          tailCurl: 0.45 * Math.sin(localT * 2.1),
        });

        const s = smoothstep(22.0, 30.5, t);
        const cPos = new THREE.Vector3(
          THREE.MathUtils.lerp(0.85, -0.65, s),
          1.72,
          THREE.MathUtils.lerp(6.85, 6.25, s)
        );
        tmpCamTarget.set(0.0, 1.24, -0.55);
        applySafeCamera(cPos, tmpCamTarget, 36, 9.6, t, 0.035);
      } else if (t < 42.0) {
        // Scene II-B: Graceful Clockwise Walking Courtship Circle Together!
        const u = (t - 30.5) / (42.0 - 30.5);
        const eased = smootherstep(0, 1, u);
        const theta = eased * Math.PI * 1.65; // Smooth clockwise arc around clearing center
        const radius = THREE.MathUtils.lerp(3.55, 2.35, eased);

        const nfAngle = theta;
        const lfAngle = theta + Math.PI;

        const nfX = Math.cos(nfAngle) * radius;
        const nfZ = -0.55 + Math.sin(nfAngle) * radius * 0.76;
        const lfX = Math.cos(lfAngle) * radius;
        const lfZ = -0.55 + Math.sin(lfAngle) * radius * 0.76;

        // Tangent heading along clockwise ellipse
        const nfTanX = -Math.sin(nfAngle) * radius;
        const nfTanZ = Math.cos(nfAngle) * radius * 0.76;
        const lfTanX = -Math.sin(lfAngle) * radius;
        const lfTanZ = Math.cos(lfAngle) * radius * 0.76;

        const nfStride = placeDragonOnCliff('nf', nfX, nfZ, Math.atan2(nfTanX, nfTanZ), dt);
        const lfStride = placeDragonOnCliff('lf', lfX, lfZ, Math.atan2(lfTanX, lfTanZ), dt);

        Object.assign(nf, {
          limbStride: nfStride,
          neckArch: 0.30,
          spineArch: 0.14,
          spineTwist: 0.24, // Curves body gracefully inward toward circle center
          headYaw: 0.38,    // Keeps emerald eyes locked on Light Fury across the circle!
          eyeYaw: 0.22,
          headRoll: -0.14,
          earPerk: 0.92,
          pupilDilation: 0.90,
          wingUnfurl: 0.28,
          tailYaw: 0.52,
          tailCurl: 0.38,
        });

        Object.assign(lf, {
          limbStride: lfStride,
          coyWingVeil: 0.0,
          neckArch: 0.34,
          spineArch: 0.16,
          spineTwist: 0.26,
          headYaw: 0.38,
          eyeYaw: 0.22,
          headRoll: 0.18,
          earPerk: 0.90,
          pupilDilation: 0.90,
          squint: 0.24,
          wingUnfurl: 0.26,
          tailYaw: 0.54,
          tailCurl: 0.44,
          iridescentShimmer: 0.82,
        });

        // Elevated Crane gliding down into an intimate eye-level circle shot
        const cPos = new THREE.Vector3(
          Math.sin(u * 1.4) * 2.6,
          THREE.MathUtils.lerp(4.65, 2.45, eased),
          THREE.MathUtils.lerp(8.9, 7.6, eased)
        );
        tmpCamTarget.set(0.0, 1.05, -0.55);
        applySafeCamera(cPos, tmpCamTarget, 39, 9.4, t, 0.04);
      } else {
        // Scene II-C (42.0s -> 54.0s): Spiraling Double-Helix Sky Waltz & Mirror-Cloak Peekaboo!
        const u = (t - 42.0) / 12.0;
        const air = smoothstep(0.03, 0.12, u) * (1.0 - smoothstep(0.88, 0.98, u));
        const helixAngle = u * Math.PI * 3.2;
        const climbArch = Math.sin(u * Math.PI);
        const hRad = THREE.MathUtils.lerp(2.6, 5.2, climbArch);
        const centerZ = THREE.MathUtils.lerp(-0.55, 12.5, climbArch);
        const altY = climbArch * 18.5;

        const nfX = THREE.MathUtils.lerp(3.2, Math.cos(helixAngle) * hRad, air);
        const nfZ = THREE.MathUtils.lerp(-0.55, centerZ + Math.sin(helixAngle) * hRad, air);
        const lfX = THREE.MathUtils.lerp(-3.2, Math.cos(helixAngle + Math.PI) * hRad, air);
        const lfZ = THREE.MathUtils.lerp(-0.55, centerZ + Math.sin(helixAngle + Math.PI) * hRad, air);

        const nfY = THREE.MathUtils.lerp(sampleHeroCliffHeight(nfX, nfZ), altY, air);
        const lfY = THREE.MathUtils.lerp(sampleHeroCliffHeight(lfX, lfZ), altY + 0.5, air);

        const endSettle = smoothstep(0.86, 1.0, u);
        const nfYaw = lerpAngle(helixAngle + Math.PI * 0.5, -1.45, endSettle);
        const lfYaw = lerpAngle(helixAngle + Math.PI * 1.5, 1.45, endSettle);

        toothlessAsset.rootGroup.position.set(nfX, nfY, nfZ);
        toothlessAsset.rootGroup.rotation.set(-0.22 * Math.cos(u * Math.PI) * air, nfYaw, 0.32 * air, 'YXZ');
        toothlessAsset.rootGroup.updateMatrixWorld(true);

        lightFuryAsset.rootGroup.position.set(lfX, lfY, lfZ);
        lightFuryAsset.rootGroup.rotation.set(-0.22 * Math.cos(u * Math.PI) * air, lfYaw, 0.32 * air, 'YXZ');
        lightFuryAsset.rootGroup.updateMatrixWorld(true);

        prevNFGround.set(nfX, nfZ);
        prevLFGround.set(lfX, lfZ);

        // Playful Light Fury Mirror-Cloak Vanish & Shimmer Reveal (t = 46.2s -> 50.0s)!
        const cloakWindow = smoothstep(46.0, 46.8, t) * (1.0 - smoothstep(49.4, 50.3, t));
        if (t >= 46.3 && !firedCloakVanish) {
          firedCloakVanish = true;
          sanctuary.spawnShimmerBurst(lightFuryAsset.rootGroup.position, true, 75);
        }
        if (t >= 49.7 && !firedCloakReveal) {
          firedCloakReveal = true;
          sanctuary.spawnShimmerBurst(lightFuryAsset.rootGroup.position, false, 75);
        }

        const flap = Math.sin(t * 5.6);
        Object.assign(nf, {
          airborneFactor: air,
          wingUnfurl: THREE.MathUtils.lerp(0.36, 0.98, air),
          wingFlap: flap,
          wingTipLag: -Math.cos(t * 5.6) * 0.6,
          legFlightTuck: THREE.MathUtils.lerp(0, 0.85, air),
          headYaw: cloakWindow > 0.2 ? Math.sin(t * 6.5) * 0.48 : 0.25, // Looking around in cute surprise!
          earAsymmetry: cloakWindow * 0.35 * Math.cos(t * 5.0),
          tailWaveAmp: 0.42 * air,
          tailWavePhase: t * 6.2,
        });

        Object.assign(lf, {
          airborneFactor: air,
          wingUnfurl: THREE.MathUtils.lerp(0.34, 0.98, air),
          wingFlap: Math.sin(t * 5.6 + 0.6),
          wingTipLag: -Math.cos(t * 5.6 + 0.6) * 0.6,
          legFlightTuck: THREE.MathUtils.lerp(0, 0.85, air),
          thermalCloak: cloakWindow * 0.94,
          plasmaGlow: Math.sin(clamp01((t - 45.6) / 1.4) * Math.PI) * 0.78,
          iridescentShimmer: 0.95,
          tailWaveAmp: 0.42 * air,
          tailWavePhase: t * 6.2 + 0.6,
        });

        if (air > 0.5 && cloakWindow < 0.3) {
          sanctuary.emitWingWake(
            toothlessAsset.rootGroup.position,
            lightFuryAsset.rootGroup.position,
            0xf7d4e8
          );
        }

        const cPos = new THREE.Vector3(
          Math.sin(u * 2.0) * 5.5,
          THREE.MathUtils.lerp(3.2, 16.5, climbArch),
          THREE.MathUtils.lerp(10.8, 28.5, climbArch)
        );
        tmpCamTarget.set(0.0, altY * 0.82 + 1.2, centerZ * 0.75);
        applySafeCamera(cPos, tmpCamTarget, 46, 14.5, t, 0.06);
      }
    }

    // ------------------------------------------------------------------------
    // ACT III (54.0s -> 78.0s): Accelerated Life Montage (360° Orbit + Seasons)
    // ------------------------------------------------------------------------
    else if (t < 78.0) {
      const actU = (t - 54.0) / 24.0;

      if (t < 60.0) {
        // Fast-Forward Playful Sunset Bounds & Chases!
        const fastPhase = (t - 54.0) * 2.35;
        const r = 2.65;
        const nfX = Math.cos(fastPhase) * r;
        const nfZ = -0.55 + Math.sin(fastPhase) * r * 0.72;
        const lfX = Math.cos(fastPhase + 2.5) * r;
        const lfZ = -0.55 + Math.sin(fastPhase + 2.5) * r * 0.72;

        const nfStride = placeDragonOnCliff('nf', nfX, nfZ, Math.atan2(-Math.sin(fastPhase), Math.cos(fastPhase) * 0.72), dt, 1.35);
        const lfStride = placeDragonOnCliff('lf', lfX, lfZ, Math.atan2(-Math.sin(fastPhase + 2.5), Math.cos(fastPhase + 2.5) * 0.72), dt, 1.35);

        const playHop = Math.max(0, Math.sin(fastPhase * 2.0)) * 0.14;
        toothlessAsset.rootGroup.position.y += playHop;
        lightFuryAsset.rootGroup.position.y += Math.max(0, Math.cos(fastPhase * 2.0)) * 0.14;

        Object.assign(nf, {
          limbStride: nfStride,
          wingUnfurl: 0.48 + 0.18 * Math.sin(fastPhase * 2.0),
          forelegStance: -0.25 * Math.cos(fastPhase * 2.0),
          tailPitch: 0.45,
          earPerk: 0.95,
          jawOpen: 0.16,
        });
        Object.assign(lf, {
          limbStride: lfStride,
          wingUnfurl: 0.44 + 0.18 * Math.cos(fastPhase * 2.0),
          forelegStance: -0.22 * Math.sin(fastPhase * 2.0),
          tailPitch: 0.48,
          squint: 0.42,
          biolumGlow: 0.35,
        });
      } else if (t < 66.5) {
        // Starlit Aurora Stargazing Side-by-Side
        const s = smoothstep(60.0, 61.6, t);
        const nfStride = placeDragonOnCliff('nf', THREE.MathUtils.lerp(1.8, 0.88, s), -0.45, lerpAngle(-0.6, -0.12, s), dt);
        const lfStride = placeDragonOnCliff('lf', THREE.MathUtils.lerp(-1.8, -0.88, s), -0.45, lerpAngle(0.6, 0.12, s), dt);

        const starTrackYaw = Math.sin((t - 60.0) * 1.2) * 0.28;
        Object.assign(nf, {
          limbStride: nfStride,
          neckArch: 0.36 * s,
          headPitch: 0.38 * s,
          headYaw: starTrackYaw,
          earPerk: 0.92,
          pupilDilation: 0.92,
          biolumGlow: 0.86 * s,
          alphaGlow: 0.32 * s,
          wingUnfurl: 0.26,
        });
        Object.assign(lf, {
          limbStride: lfStride,
          neckArch: 0.38 * s,
          headPitch: 0.40 * s,
          headYaw: starTrackYaw,
          headRoll: -0.18 * s,
          pupilDilation: 0.92,
          biolumGlow: 0.92 * s,
          radiantGlow: 0.68 * s,
          wingUnfurl: 0.24,
        });
      } else if (t < 73.2) {
        // The Storm Trial: Toothless Unfurls His Wing Over Light Fury as a Protective Canopy!
        const shelter = smoothstep(66.5, 68.0, t);
        placeDragonOnCliff('nf', THREE.MathUtils.lerp(0.88, 0.82, shelter), -0.45, -0.24, dt);
        placeDragonOnCliff('lf', THREE.MathUtils.lerp(-0.88, -0.58, shelter), -0.42, 0.22, dt);

        Object.assign(nf, {
          neckArch: 0.22,
          headYaw: 0.42 * shelter, // Looking protectively over her
          headPitch: -0.14 * shelter,
          wingUnfurl: THREE.MathUtils.lerp(0.26, 0.86, shelter),
          wingFlap: 0.34 * shelter,
          wingSweep: 0.32 * shelter,
          wingCamber: 0.78 * shelter,
          spineTwist: -0.20 * shelter,
          forelegStance: 0.22 * shelter, // Proud protective chest stance
          earPerk: 0.58,
          biolumGlow: 0.48,
          alphaGlow: 0.45,
        });
        Object.assign(lf, {
          forelegStance: -0.36 * shelter, // Nestling safely beneath his wing
          hindlegStance: -0.28 * shelter,
          neckArch: 0.14,
          headYaw: -0.35 * shelter,
          headRoll: -0.32 * shelter, // Leaning cheek toward Toothless's shoulder
          blink: 0.25 + 0.55 * shelter * (0.5 + 0.5 * Math.sin(t * 1.8)),
          squint: 0.65 * shelter,
          earPerk: 0.42,
          wingUnfurl: 0.14,
          biolumGlow: 0.52,
        });
      } else {
        // Dawn/Twilight Break: Stepping Out Into Calm Clearing Ready for Act IV
        const part = smoothstep(73.2, 78.0, t);
        const nfStride = placeDragonOnCliff(
          'nf',
          THREE.MathUtils.lerp(0.82, 2.55, part),
          THREE.MathUtils.lerp(-0.45, -0.55, part),
          lerpAngle(-0.24, -Math.PI * 0.5, part),
          dt
        );
        const lfStride = placeDragonOnCliff(
          'lf',
          THREE.MathUtils.lerp(-0.58, -2.42, part),
          THREE.MathUtils.lerp(-0.42, -0.55, part),
          lerpAngle(0.22, Math.PI * 0.5, part),
          dt
        );

        Object.assign(nf, {
          limbStride: nfStride,
          wingUnfurl: THREE.MathUtils.lerp(0.86, 0.34, part),
          wingFlap: THREE.MathUtils.lerp(0.34, 0.04, part),
          earPerk: 0.88,
          pupilDilation: 0.90,
          biolumGlow: 0.35,
          alphaGlow: 0.28,
        });
        Object.assign(lf, {
          limbStride: lfStride,
          forelegStance: THREE.MathUtils.lerp(-0.36, 0.12, part),
          wingUnfurl: 0.28,
          headRoll: 0.16,
          earPerk: 0.88,
          pupilDilation: 0.90,
          biolumGlow: 0.42,
        });
      }

      // Continuous Hypnotic 360° Orbital Crane around the Sanctuary (starts & ends cleanly on +Z ocean side!)
      const orbitAngle = smootherstep(0, 1, actU) * Math.PI * 2.0;
      const orbitRad = THREE.MathUtils.lerp(9.2, 7.2, smoothstep(0.65, 1.0, actU));
      const cPos = new THREE.Vector3(
        Math.sin(orbitAngle) * orbitRad,
        2.55 + Math.sin(actU * Math.PI) * 1.65,
        -0.55 + Math.cos(orbitAngle) * orbitRad
      );
      tmpCamTarget.set(0.0, 1.18, -0.55);
      applySafeCamera(cPos, tmpCamTarget, 41, 8.8, t, 0.04);
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART A (78.0s -> 88.0s) & SUSPENDED CONFESSION PAUSE (t = 88.0s)
    // ------------------------------------------------------------------------
    else if (t <= CONFESSION_PAUSE_SEC && mode !== 'playing-acceptance-finale') {
      const etchU = smoothstep(78.4, 83.8, t);
      sanctuary.setEtchProgress(etchU);
      sanctuary.setWildflowerBloom(0.62 + 0.16 * etchU);

      // Toothless traces the glowing heart (78.4s -> 83.8s), then lowers into his humble Confession Bow (84.0s -> 88.0s)
      const bowU = smootherstep(84.0, 87.8, t);
      const traceSway = Math.sin(etchU * Math.PI * 2.0) * (1.0 - bowU) * (t > 78.3 && t < 84.0 ? 1 : 0);

      const nfX = THREE.MathUtils.lerp(2.55, 2.38, bowU);
      const nfStride = placeDragonOnCliff('nf', nfX, -0.55 + traceSway * 0.16, -Math.PI * 0.5 + traceSway * 0.14, dt);
      placeDragonOnCliff('lf', -2.38, -0.55, Math.PI * 0.5, dt);

      // Live micro-reactions while paused at 88.0s awaiting user's Yes / No!
      const isPaused = mode === 'awaiting-confession-choice' || mode === 'declined-fading';
      const declineDrop = mode === 'declined-fading' ? smoothstep(0, 1.8, declineElapsed) : 0;
      const heartPulse = 0.5 + 0.5 * Math.sin((isPaused ? suspendClock : t) * 3.4);

      const posBias = Math.max(0, smoothedHoverBias);   // Hovering near "Yes"
      const negBias = Math.max(0, -smoothedHoverBias);  // Hovering near "No"

      Object.assign(nf, {
        limbStride: nfStride,
        forelegStance: THREE.MathUtils.lerp(0.05, -0.92, bowU), // Deep vulnerable courtship bow!
        hindlegStance: THREE.MathUtils.lerp(0.06, 0.18, bowU),
        neckArch: THREE.MathUtils.lerp(0.12, -0.22, bowU) - declineDrop * 0.25,
        headPitch:
          THREE.MathUtils.lerp(-0.32 * (1 - bowU), 0.26, bowU) +
          posBias * 0.10 -
          negBias * 0.22 -
          declineDrop * 0.45,
        headRoll: -0.10 * bowU + posBias * -0.08,
        eyePitch: 0.22 * bowU - declineDrop * 0.3,
        pupilDilation: clamp01(0.96 + posBias * 0.04 - negBias * 0.22),
        blink: declineDrop * 0.95,
        earPerk: clamp01(0.84 + posBias * 0.16 - negBias * 0.52 - declineDrop * 0.65),
        earAsymmetry: isPaused ? Math.sin(suspendClock * 1.7) * 0.10 * (1 - declineDrop) : 0.06,
        teethExtension: 0.0,
        jawOpen: 0.04 * posBias,
        wingUnfurl: THREE.MathUtils.lerp(0.32, 0.54, bowU) * (1 - declineDrop * 0.5),
        wingSweep: -0.15 * bowU,
        tailPitch: 0.22 + posBias * 0.18 - negBias * 0.18,
        tailYaw: isPaused ? Math.sin(suspendClock * 2.1) * (0.14 + posBias * 0.22) : 0.16,
        alphaGlow: clamp01((0.35 + 0.42 * bowU * (0.75 + 0.25 * heartPulse) + posBias * 0.22) * (1 - declineDrop)),
        biolumGlow: clamp01((0.38 + 0.30 * bowU + posBias * 0.22) * (1 - declineDrop)),
      });

      Object.assign(lf, {
        forelegStance: 0.14 - posBias * 0.12,
        neckArch: 0.26 + posBias * 0.08,
        headPitch: -0.08 - 0.08 * bowU,
        headRoll: 0.18 + posBias * 0.14 - negBias * 0.14,
        pupilDilation: clamp01(0.92 + posBias * 0.08 - negBias * 0.18),
        squint: clamp01(0.14 + posBias * 0.46), // Warm affectionate smile as user hovers "Yes"!
        blink: declineDrop * 0.90,
        earPerk: clamp01(0.90 + posBias * 0.10 - negBias * 0.38),
        coyWingVeil: clamp01(0.18 * (1 - bowU) + negBias * 0.38),
        wingUnfurl: 0.30,
        biolumGlow: clamp01((0.46 + 0.24 * bowU + posBias * 0.26) * (1 - declineDrop)),
        radiantGlow: clamp01((0.38 + posBias * 0.35) * (1 - declineDrop)),
      });

      // Camera: High sand-heart crane (78->84s) settling into symmetrical Confession Profile Two-Shot (84->88s)
      // Leaves upper-center twilight sky spacious for the frameless Heart-Whisper Confession!
      const camSettle = smootherstep(78.0, 87.5, t);
      const cPos = new THREE.Vector3(
        0.0,
        THREE.MathUtils.lerp(3.55, 2.08, camSettle),
        THREE.MathUtils.lerp(5.20, 6.15, camSettle)
      );
      tmpCamTarget.set(
        0.0,
        THREE.MathUtils.lerp(0.68, 1.48, camSettle),
        -0.55
      );
      applySafeCamera(cPos, tmpCamTarget, 35, 7.6, isPaused ? suspendClock : t, isPaused ? 0.022 : 0.035);
    }

    // ------------------------------------------------------------------------
    // ACT IV — PART B (88.0s -> 106.0s): Her Acceptance, Resonance & Fireworks!
    // ------------------------------------------------------------------------
    else if (t < 106.0) {
      if (t < 96.2) {
        // Shot 10 (88.0s -> 96.2s): Her Acceptance — Three Feline Steps & Tender Forehead Nuzzle!
        const acceptU = smootherstep(88.0, 92.6, t);
        const nuzzleHold = smoothstep(91.8, 93.2, t);

        sanctuary.setEtchProgress(1.0);
        sanctuary.setAcceptanceGlow(acceptU);
        sanctuary.setWildflowerBloom(0.78 + 0.22 * acceptU);

        // Exact calibrated snout-contact coordinates (accounting for -0.18 crouch): NF(+2.205) & LF(-2.185) -> 6mm muzzle touch!
        const nfX = THREE.MathUtils.lerp(2.38, 2.205, acceptU);
        const lfX = THREE.MathUtils.lerp(-2.38, -2.185, acceptU);

        const nfStride = placeDragonOnCliff('nf', nfX, -0.55, -Math.PI * 0.5, dt);
        const lfStride = placeDragonOnCliff('lf', lfX, -0.55, Math.PI * 0.5, dt);

        if (t >= 92.5 && !firedResonanceWave) {
          firedResonanceWave = true;
          sanctuary.triggerResonanceWave(new THREE.Vector3(0, 0.08, -0.55));
        }

        const nuzzleSway = Math.sin((t - 92.0) * 2.2) * 0.08 * nuzzleHold;

        Object.assign(nf, {
          limbStride: nfStride,
          forelegStance: THREE.MathUtils.lerp(-0.92, -0.18, acceptU),
          hindlegStance: 0.12,
          neckArch: THREE.MathUtils.lerp(-0.22, 0.18, acceptU),
          headPitch: THREE.MathUtils.lerp(0.26, -0.14, acceptU),
          headRoll: nuzzleSway,
          blink: 0.94 * nuzzleHold,
          squint: 0.72 * nuzzleHold,
          pupilDilation: 0.98,
          earPerk: 0.92,
          wingUnfurl: 0.42,
          tailYaw: 0.65 * nuzzleHold, // Sweeping tail around gently
          tailCurl: 0.55 * nuzzleHold,
          alphaGlow: 0.88,
          biolumGlow: 0.94,
        });

        Object.assign(lf, {
          limbStride: lfStride,
          forelegStance: THREE.MathUtils.lerp(0.14, -0.14, acceptU),
          neckArch: THREE.MathUtils.lerp(0.26, 0.18, acceptU),
          headPitch: THREE.MathUtils.lerp(-0.12, -0.14, acceptU),
          headRoll: -nuzzleSway + 0.08,
          blink: 0.95 * nuzzleHold,
          squint: 0.82 * nuzzleHold,
          pupilDilation: 0.96,
          earPerk: 0.92,
          coyWingVeil: 0.0,
          wingUnfurl: 0.38,
          tailYaw: -0.65 * nuzzleHold,
          tailCurl: -0.55 * nuzzleHold,
          biolumGlow: 0.96,
          radiantGlow: 0.88,
          iridescentShimmer: 0.96,
        });

        // Intimate telephoto push-in onto their meeting foreheads & glowing sand-heart
        const pushU = smootherstep(88.0, 95.5, t);
        const cPos = new THREE.Vector3(
          0.0,
          THREE.MathUtils.lerp(2.08, 1.38, pushU),
          THREE.MathUtils.lerp(6.15, 3.35, pushU)
        );
        tmpCamTarget.set(0.0, THREE.MathUtils.lerp(1.48, 1.08, pushU), -0.55);
        applySafeCamera(cPos, tmpCamTarget, THREE.MathUtils.lerp(35, 28, pushU), 5.2, t, 0.025);
      } else {
        // Shot 11 & 12 (96.2s -> 106.0s): Stepping Side-by-Side, Twin Plasma Launch & Grand 3D Fireworks!
        const alignU = smootherstep(96.2, 97.8, t);
        const launchWindow = smoothstep(97.4, 98.0, t) * (1.0 - smoothstep(99.0, 99.8, t));

        sanctuary.setWildflowerBloom(1.0);
        sanctuary.setAcceptanceGlow(1.0);

        const nfStride = placeDragonOnCliff(
          'nf',
          THREE.MathUtils.lerp(2.205, 0.82, alignU),
          THREE.MathUtils.lerp(-0.55, -0.45, alignU),
          lerpAngle(-Math.PI * 0.5, -0.18, alignU),
          dt
        );
        const lfStride = placeDragonOnCliff(
          'lf',
          THREE.MathUtils.lerp(-2.185, -0.82, alignU),
          THREE.MathUtils.lerp(-0.55, -0.45, alignU),
          lerpAngle(Math.PI * 0.5, 0.18, alignU),
          dt
        );

        if (t >= 97.9 && !firedTwinComets) {
          firedTwinComets = true;
          const nfJaw = toothlessAsset.rig.boneMap.get('jaw')!;
          const lfJaw = lightFuryAsset.rig.boneMap.get('jaw')!;
          const pNF = new THREE.Vector3().setFromMatrixPosition(nfJaw.matrixWorld);
          const pLF = new THREE.Vector3().setFromMatrixPosition(lfJaw.matrixWorld);
          fireworks.launchTwinDragonComets(pNF, pLF, new THREE.Vector3(0.0, 17.5, -26.0));
        }

        // Fire choreographed 3D Archipelago Fireworks Symphony!
        for (const cue of fireworkCues) {
          if (!cue.fired && t >= cue.timeSec) {
            cue.fired = true;
            fireworks.launchShell(
              cue.origin,
              cue.target,
              cue.kind,
              cue.colA,
              cue.colB,
              cue.scale,
              cue.dur
            );
          }
        }

        const skyGazeYaw = Math.sin((t - 99.5) * 1.15) * 0.22 * smoothstep(99.5, 100.5, t);

        Object.assign(nf, {
          limbStride: nfStride,
          forelegStance: 0.24,
          neckArch: 0.38 + 0.42 * launchWindow,
          headPitch: 0.34 + 0.32 * launchWindow,
          headYaw: skyGazeYaw,
          jawOpen: 0.72 * launchWindow,
          wingUnfurl: 0.58 + 0.22 * launchWindow,
          wingFlap: 0.22 * launchWindow,
          earPerk: 0.96,
          pupilDilation: 0.95,
          alphaGlow: 0.95,
          biolumGlow: 0.95,
        });

        Object.assign(lf, {
          limbStride: lfStride,
          forelegStance: 0.24,
          neckArch: 0.40 + 0.42 * launchWindow,
          headPitch: 0.36 + 0.32 * launchWindow,
          headYaw: skyGazeYaw,
          jawOpen: 0.68 * launchWindow,
          wingUnfurl: 0.54 + 0.22 * launchWindow,
          wingFlap: 0.22 * launchWindow,
          earPerk: 0.96,
          pupilDilation: 0.95,
          plasmaGlow: 0.92 * launchWindow,
          biolumGlow: 0.96,
          radiantGlow: 0.90,
        });

        // Wide IMAX Pullback framing BOTH dragons on the cliff lower-third AND full 3D Fireworks above!
        const pullU = smootherstep(96.2, 99.2, t);
        const cPos = new THREE.Vector3(
          0.0,
          THREE.MathUtils.lerp(1.38, 2.22, pullU),
          THREE.MathUtils.lerp(3.35, 12.40, pullU)
        );
        tmpCamTarget.set(
          0.0,
          THREE.MathUtils.lerp(1.08, 7.65, pullU),
          THREE.MathUtils.lerp(-0.55, -16.5, pullU)
        );
        applySafeCamera(cPos, tmpCamTarget, THREE.MathUtils.lerp(28, 52, pullU), 15.5, t, 0.045);
      }
    }

    // ------------------------------------------------------------------------
    // ACT V (106.0s -> 120.0s) & COMPLETED TABLEAU: Heart-Silhouette Happy Ending
    // ------------------------------------------------------------------------
    else {
      // Catch any remaining late firework cue
      for (const cue of fireworkCues) {
        if (!cue.fired && t >= cue.timeSec) {
          cue.fired = true;
          fireworks.launchShell(
            cue.origin,
            cue.target,
            cue.kind,
            cue.colA,
            cue.colB,
            cue.scale,
            cue.dur
          );
        }
      }

      const endU = smootherstep(106.0, 118.5, Math.min(TOTAL_MOVIE_SEC, t));
      const gentleBreathTime = mode === 'completed-awaiting-explore' || mode === 'free-explore'
        ? suspendClock
        : t;

      // Bonded side-by-side sanctuary pose: shoulders close, inward-curved necks forming a heart silhouette!
      const nfStride = placeDragonOnCliff('nf', 0.78, -0.45, -0.24, dt);
      const lfStride = placeDragonOnCliff('lf', -0.78, -0.45, 0.24, dt);

      const affectionateSway = Math.sin(gentleBreathTime * 1.1) * 0.04;

      Object.assign(nf, {
        limbStride: nfStride,
        forelegStance: 0.16,
        hindlegStance: 0.10,
        neckArch: 0.36,
        neckYaw: 0.24,     // Arches neck gently inward toward Light Fury
        headYaw: 0.28,
        headPitch: -0.06,
        headRoll: -0.22 + affectionateSway,
        earPerk: 0.90,
        pupilDilation: 0.96,
        squint: 0.38,
        wingUnfurl: 0.48,  // Soft protective wing cape
        wingSweep: 0.16,
        tailYaw: -0.48,    // Tails curled together behind them
        tailCurl: -0.42,
        alphaGlow: 0.62,
        biolumGlow: 0.88,
      });

      Object.assign(lf, {
        limbStride: lfStride,
        forelegStance: 0.16,
        hindlegStance: 0.10,
        neckArch: 0.38,
        neckYaw: -0.24,    // Arches swan-neck inward to complete the heart silhouette!
        headYaw: -0.28,
        headPitch: -0.06,
        headRoll: 0.24 - affectionateSway,
        earPerk: 0.92,
        pupilDilation: 0.96,
        squint: 0.48,
        coyWingVeil: 0.0,
        wingUnfurl: 0.34,
        tailYaw: 0.48,
        tailCurl: 0.44,
        biolumGlow: 0.92,
        radiantGlow: 0.76,
        iridescentShimmer: 0.90,
      });

      if (mode !== 'free-explore') {
        const cPos = new THREE.Vector3(
          THREE.MathUtils.lerp(0.0, finalExploreCamPos.x, endU),
          THREE.MathUtils.lerp(2.22, finalExploreCamPos.y, endU),
          THREE.MathUtils.lerp(12.40, finalExploreCamPos.z, endU)
        );
        tmpCamTarget.set(
          0.0,
          THREE.MathUtils.lerp(7.65, finalExploreCamTarget.y, endU),
          THREE.MathUtils.lerp(-16.5, finalExploreCamTarget.z, endU)
        );
        applySafeCamera(cPos, tmpCamTarget, THREE.MathUtils.lerp(52, 42, endU), 10.6, gentleBreathTime, 0.025);
      }
    }

    toothlessController.setState(nf);
    lightFuryController.setState(lf);
  };

  const focusOut = new THREE.Vector3(0, 1.15, -0.45);

  return {
    getState: () => mode,
    getTimelineSec: () => storySec,
    isCameraLocked: () => mode !== 'free-explore',

    setConfessionHoverBias(bias: number) {
      hoverBias = THREE.MathUtils.clamp(bias, -1, 1);
    },

    chooseYes() {
      if (mode !== 'awaiting-confession-choice') return;
      hoverBias = 0;
      smoothedHoverBias = 0;
      mode = 'playing-acceptance-finale';
    },

    chooseNo() {
      if (mode !== 'awaiting-confession-choice') return;
      hoverBias = -1;
      declineElapsed = 0;
      mode = 'declined-fading';
    },

    enterFreeExplore() {
      if (mode !== 'completed-awaiting-explore') return;
      const savedCamPos = camera.position.clone();
      const savedTarget = finalExploreCamTarget.clone();
      mode = 'free-explore';
      callbacks.onEnterFreeExplore(savedCamPos, savedTarget);
    },

    replayStory() {
      if (mode === 'declined-fading') return;
      resetTriggers();
      storySec = 0.0;
      worldSimSec = 0.0;
      suspendClock = 0.0;
      hoverBias = 0;
      smoothedHoverBias = 0;
      mode = 'playing-pre-confession';
    },

    update(dt: number) {
      smoothedHoverBias += (hoverBias - smoothedHoverBias) * (1.0 - Math.exp(-7.5 * dt));
      suspendClock += dt;

      // Compute accelerated world-simulation delta during Act III (54s -> 78s)
      let worldRate = 1.0;

      if (mode === 'playing-pre-confession') {
        storySec += dt;
        if (storySec >= 54.0 && storySec <= 78.0) {
          const bell = Math.sin(((storySec - 54.0) / 24.0) * Math.PI);
          worldRate = 1.0 + bell * bell * 18.0; // Smooth 1x -> 19x -> 1x acceleration!
        }
        if (storySec >= CONFESSION_PAUSE_SEC) {
          storySec = CONFESSION_PAUSE_SEC;
          mode = 'awaiting-confession-choice';
          callbacks.onReachConfessionPrompt();
        }
      } else if (mode === 'awaiting-confession-choice') {
        worldRate = 0.22; // Dreamlike Suspended-Breath slow motion while waiting for answer
      } else if (mode === 'declined-fading') {
        worldRate = 0.08;
        declineElapsed += dt;
        const fade01 = clamp01(declineElapsed / 2.6);
        sanctuary.setFadeOut(1.0 - fade01);
        callbacks.onDeclineProgress(fade01);
        if (declineElapsed >= 2.65) {
          callbacks.onDeclineComplete();
          return { worldTimeSec: worldSimSec, focusPoint: focusOut };
        }
      } else if (mode === 'playing-acceptance-finale') {
        storySec += dt;
        if (storySec >= TOTAL_MOVIE_SEC) {
          storySec = TOTAL_MOVIE_SEC;
          mode = 'completed-awaiting-explore';
          callbacks.onReachMovieComplete();
        }
      } else {
        // 'completed-awaiting-explore' or 'free-explore'
        worldRate = 1.0;
      }

      worldSimSec += dt * worldRate;

      if (mode !== 'free-explore') {
        updateEnvironmentForTime(storySec);
      } else {
        // Gentle continuous sanctuary sky cycle while user explores freely after the happy ending
        const cycleU = ((suspendClock * 0.012) % 1.0);
        if (cycleU < 0.35) {
          atmosphere.blendPresets('starlit-night', 'dawn-dusk', smoothstep(0.15, 0.35, cycleU), renderer, scene, 0, suspendClock * 0.4);
        } else if (cycleU < 0.70) {
          atmosphere.blendPresets('dawn-dusk', 'golden-hour', smoothstep(0.35, 0.55, cycleU), renderer, scene, 0, suspendClock * 0.4);
        } else {
          atmosphere.blendPresets('golden-hour', 'starlit-night', smoothstep(0.70, 0.92, cycleU), renderer, scene, 0, suspendClock * 0.4);
        }
        atmosphere.setRainIntensity(0);
      }
      evaluateActChoreography(storySec, dt);

      sanctuary.update(dt, worldSimSec, atmosphere.sharedUniforms.uWindStrength.value);
      fireworks.update(dt, camera.position, atmosphere.isAudioMuted());

      focusOut
        .copy(toothlessAsset.rootGroup.position)
        .add(lightFuryAsset.rootGroup.position)
        .multiplyScalar(0.5);
      focusOut.y += 1.1;

      return { worldTimeSec: worldSimSec, focusPoint: focusOut };
    },
  };
}
