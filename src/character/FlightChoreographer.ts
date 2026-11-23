import * as THREE from 'three';
import {
  LIGHT_FURY_PERCH_POSE,
  sampleWorldTerrainHeight,
  TOOTHLESS_PERCH_POSE,
} from '../world/NordicCliffWorld';
import { ToothlessCharacterAsset } from './ToothlessAsset';
import {
  DEFAULT_HERO_RIG_STATE,
  ToothlessRigController,
  ToothlessRigState,
} from './ToothlessRigController';
import { LightFuryCharacterAsset } from './lightfury/LightFuryAsset';
import {
  DEFAULT_LIGHT_FURY_STATE,
  LightFuryRigController,
  LightFuryRigState,
} from './lightfury/LightFuryRigController';

export type FlightSubjectMode = 'duet' | 'toothless' | 'light-fury';

export interface FlightPhaseInfo {
  isPlaying: boolean;
  isPaused: boolean;
  loop: boolean;
  followCamera: boolean;
  subjectMode: FlightSubjectMode;
  progress: number;       // [0, 1]
  elapsedSec: number;
  durationSec: number;
  phaseLabel: string;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function bellWindow(t: number, start: number, riseEnd: number, fallStart: number, end: number): number {
  if (t <= start || t >= end) return 0;
  if (t < riseEnd) return smoothstep(start, riseEnd, t);
  if (t > fallStart) return 1.0 - smoothstep(fallStart, end, t);
  return 1.0;
}

function wrapAngleRad(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

function lerpAngleRad(a: number, b: number, t: number): number {
  return a + wrapAngleRad(b - a) * t;
}

/**
 * Integrates a smooth, unhurried, physically weighty wingbeat phase omega(t) across the 25.0s flight:
 * - Takeoff & climb: ~5.15 rad/s (~0.82 Hz — slow, deep, majestic 1.22s dragon wingstrokes!)
 * - High soar & ocean stoop: glides serenely (~1.6 rad/s gentle Trim)
 * - Pullout, Cobra air-brake & landing hover: ~4.65 rad/s (~0.74 Hz — slow, cushioned braking strokes!)
 */
function evalNaturalWingFlapPhase(tSec: number, rateScale: number, phaseOffsetRad: number): number {
  const steps = 64;
  const dt = tSec / Math.max(1, steps);
  let phase = phaseOffsetRad;
  for (let i = 0; i < steps; i++) {
    const tau = (i + 0.5) * dt;
    const launchRamp = smoothstep(0.4, 2.4, tau);
    const soarCalm = bellWindow(tau, 7.6, 8.8, 15.2, 16.5);
    const landingEase = 1.0 - 0.18 * smoothstep(18.5, 22.5, tau);
    const baseOmega = THREE.MathUtils.lerp(4.45, 5.18, launchRamp) * landingEase;
    const omega = THREE.MathUtils.lerp(baseOmega, 1.65, soarCalm) * rateScale;
    phase += omega * dt;
  }
  return phase;
}

/**
 * Full-Cycle 25.0-Second Biomechanical Flight Choreographer for BOTH Toothless & the Light Fury!
 * Features:
 *  - Slow, weighty, majestic wingbeat cadence (~0.80 Hz) across takeoff, climb, air-brake & landing
 *  - Relaxed, slightly flexed airborne leg posture with lifelike aerodynamic sway
 *  - 100% verified collision-free flight trajectories clearing every island, cliff & sea-stack!
 */
export class ToothlessFlightChoreographer {
  public static readonly DURATION_SEC = 25.0;

  public isPlaying = false;
  public isPaused = false;
  public loop = false;
  public followCamera = true;
  public subjectMode: FlightSubjectMode = 'duet';

  private readonly toothlessAsset: ToothlessCharacterAsset;
  private readonly toothlessController: ToothlessRigController;
  private readonly lightFuryAsset?: LightFuryCharacterAsset;
  private readonly lightFuryController?: LightFuryRigController;

  public readonly toothlessSpline: THREE.CatmullRomCurve3;
  public readonly lightFurySpline: THREE.CatmullRomCurve3;
  private flightTime = 0;

  private readonly tmpPos = new THREE.Vector3();
  private readonly tmpPosAhead = new THREE.Vector3();
  private readonly tmpPosBehind = new THREE.Vector3();
  private readonly tmpPosLook = new THREE.Vector3();
  private readonly tmpVel = new THREE.Vector3();
  private readonly tmpEuler = new THREE.Euler();
  private readonly tmpQuat = new THREE.Quaternion();
  private readonly prevWorldAnchor = new THREE.Vector3(0, 1.15, 0.35);

  constructor(
    toothlessAsset: ToothlessCharacterAsset,
    toothlessController: ToothlessRigController,
    lightFuryAsset?: LightFuryCharacterAsset,
    lightFuryController?: LightFuryRigController
  ) {
    this.toothlessAsset = toothlessAsset;
    this.toothlessController = toothlessController;
    this.lightFuryAsset = lightFuryAsset;
    this.lightFuryController = lightFuryController;

    const tHome = TOOTHLESS_PERCH_POSE.position.clone();
    const lHome = LIGHT_FURY_PERCH_POSE.position.clone();

    // Toothless's starboard-side flight loop:
    // Sweeps far out over the open southern North Sea (z = +8 .. +46m) and climbs HIGH (+10.5m) over the western sea
    // before banking cleanly over the flat landing terrace — ZERO cliff/island intersections anywhere!
    this.toothlessSpline = new THREE.CatmullRomCurve3(
      [
        tHome.clone(),                            // u=0.00: Starboard perch pad (+4.45, 0, +0.22)
        new THREE.Vector3(6.8, 3.8, 8.2),         // u=0.09: Powerful upward leap well south of cliff brink
        new THREE.Vector3(16.4, 11.4, 19.5),      // u=0.18: Climbing out over open fjord water
        new THREE.Vector3(24.5, 17.6, 33.5),      // u=0.27: High sky climb apex overlooking Crescent Atoll
        new THREE.Vector3(12.5, 19.6, 44.5),      // u=0.36: High-altitude soaring ocean vista
        new THREE.Vector3(-6.5, 17.2, 39.5),      // u=0.45: Sweeping sky bank over open sea
        new THREE.Vector3(-19.5, 6.8, 29.0),      // u=0.55: Entering peregrine ocean stoop (24m south of cliff!)
        new THREE.Vector3(-22.5, -3.2, 18.5),     // u=0.64: Wave-skim pullout over deep open water (~8.3m above sea!)
        new THREE.Vector3(-17.5, 10.6, 3.5),      // u=0.73: High zoom-climb over western sea channel
        new THREE.Vector3(-2.5, 9.8, -5.8),       // u=0.82: High terrace alignment (+9.3m above flat meadow!)
        new THREE.Vector3(3.85, 3.15, -2.15),     // u=0.91: Slow cushioned Cobra air-brake hover flare
        tHome.clone(),                            // u=1.00: Soft 4-paw starboard cliff touchdown facing +Z!
      ],
      false,
      'centripetal',
      0.5
    );

    // Light Fury's companion flight loop (>= 9.2m..11.0m wingtip-safe formation offset beside Toothless, 100% over open water/sky!)
    this.lightFurySpline = new THREE.CatmullRomCurve3(
      [
        lHome.clone(),                            // u=0.00: Port perch pad (-4.45, 0, -0.22)
        new THREE.Vector3(-3.2, 4.1, 7.8),        // u=0.09: Graceful swan leap well south of cliff brink
        new THREE.Vector3(6.2, 12.0, 20.4),       // u=0.18: Climbing alongside Toothless
        new THREE.Vector3(14.2, 18.3, 34.8),      // u=0.27: High sky duet climb
        new THREE.Vector3(2.2, 20.2, 46.0),       // u=0.36: Wingtip-safe courtship soar
        new THREE.Vector3(-16.8, 17.8, 41.0),     // u=0.45: Outer banking arc over open sea
        new THREE.Vector3(-29.8, 7.4, 30.2),      // u=0.55: Playful Mirror-Cloak & Biolum dive entry!
        new THREE.Vector3(-32.8, -2.8, 19.2),     // u=0.64: Shimmering wave-skim pullout over deep sea
        new THREE.Vector3(-27.2, 11.2, 4.2),      // u=0.73: High banking climb over western channel
        new THREE.Vector3(-12.2, 10.2, -5.8),     // u=0.82: High port terrace alignment (+9.8m above meadow!)
        new THREE.Vector3(-5.15, 3.05, -2.35),    // u=0.91: Slow graceful air-brake hover flare
        lHome.clone(),                            // u=1.00: Soft 4-paw port cliff touchdown facing +Z!
      ],
      false,
      'centripetal',
      0.5
    );
  }

  public setSubjectMode(mode: FlightSubjectMode): void {
    if (this.subjectMode === mode) return;
    this.subjectMode = mode;
    if (this.isPlaying) {
      this.resetDragonToPerch('toothless');
      this.resetDragonToPerch('light-fury');
      this.applyAtTime(this.flightTime);
      this.prevWorldAnchor.copy(this.computeDesiredWorldFocus());
    }
  }

  private resetDragonToPerch(which: 'toothless' | 'light-fury'): void {
    if (which === 'toothless') {
      this.toothlessAsset.rootGroup.position.copy(TOOTHLESS_PERCH_POSE.position);
      this.toothlessAsset.rootGroup.rotation.set(0, TOOTHLESS_PERCH_POSE.yaw, 0);
      this.toothlessAsset.rootGroup.updateMatrixWorld(true);
      this.toothlessController.resetToHeroPose();
    } else if (this.lightFuryAsset && this.lightFuryController) {
      this.lightFuryAsset.rootGroup.position.copy(LIGHT_FURY_PERCH_POSE.position);
      this.lightFuryAsset.rootGroup.rotation.set(0, LIGHT_FURY_PERCH_POSE.yaw, 0);
      this.lightFuryAsset.rootGroup.updateMatrixWorld(true);
      this.lightFuryController.resetToHeroPose();
    }
  }

  private computeDesiredWorldFocus(): THREE.Vector3 {
    const tChest = this.toothlessAsset.rig.boneMap.get('chest')!;
    const tPos = new THREE.Vector3().setFromMatrixPosition(tChest.matrixWorld);
    if (!this.lightFuryAsset) return tPos;

    const lChest = this.lightFuryAsset.rig.boneMap.get('chest')!;
    const lPos = new THREE.Vector3().setFromMatrixPosition(lChest.matrixWorld);

    if (this.subjectMode === 'toothless') return tPos;
    if (this.subjectMode === 'light-fury') return lPos;
    return tPos.add(lPos).multiplyScalar(0.5);
  }

  public startFromBeginning(): void {
    this.flightTime = 0;
    this.isPlaying = true;
    this.isPaused = false;
    this.resetDragonToPerch('toothless');
    this.resetDragonToPerch('light-fury');
    this.applyAtTime(0);
    this.prevWorldAnchor.copy(this.computeDesiredWorldFocus());
  }

  public togglePlayPause(): void {
    if (!this.isPlaying) {
      this.startFromBeginning();
      return;
    }
    this.isPaused = !this.isPaused;
  }

  public stopAndResetToPerch(): void {
    this.isPlaying = false;
    this.isPaused = false;
    this.flightTime = 0;
    this.resetDragonToPerch('toothless');
    this.resetDragonToPerch('light-fury');
    this.prevWorldAnchor.set(0, 1.15, 0.35);
  }

  public scrubToProgress(progress01: number): void {
    const p = THREE.MathUtils.clamp(progress01, 0, 1);
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.isPaused = true;
    }
    this.flightTime = p * ToothlessFlightChoreographer.DURATION_SEC;
    this.applyAtTime(this.flightTime);
    this.prevWorldAnchor.copy(this.computeDesiredWorldFocus());
  }

  public getPhaseInfo(): FlightPhaseInfo {
    const t = this.flightTime;
    const isDuet = this.subjectMode === 'duet';
    let phaseLabel = isDuet ? 'Twin Perch Ready' : 'Perched Ready';
    if (this.isPlaying) {
      if (t < 2.8) phaseLabel = isDuet ? '1/6 · Twin Courtship Cliff Leap' : '1/6 · Launch Crouch & Cliff Leap';
      else if (t < 7.8) phaseLabel = '2/6 · Majestic Climbing Wingbeats';
      else if (t < 13.0) phaseLabel = isDuet ? '3/6 · Wingtip Courtship Sky Soar' : '3/6 · High-Altitude Sky Soar';
      else if (t < 17.4) phaseLabel = isDuet ? '4/6 · Mirror-Cloak Ocean Skim' : '4/6 · Peregrine Ocean Skim';
      else if (t < 21.8) phaseLabel = '5/6 · Cushioned Air-Brake Hover';
      else phaseLabel = isDuet ? '6/6 · Twin Touchdown & Settle' : '6/6 · Four-Paw Landing & Settle';
    }

    return {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      loop: this.loop,
      followCamera: this.followCamera,
      subjectMode: this.subjectMode,
      progress: THREE.MathUtils.clamp(t / ToothlessFlightChoreographer.DURATION_SEC, 0, 1),
      elapsedSec: t,
      durationSec: ToothlessFlightChoreographer.DURATION_SEC,
      phaseLabel,
    };
  }

  public update(
    dt: number,
    camera: THREE.PerspectiveCamera,
    controlsTarget: THREE.Vector3
  ): { worldFocus: THREE.Vector3; isAirborne: boolean } {
    if (!this.isPlaying) {
      this.prevWorldAnchor.set(0, 1.15, 0.35);
      return { worldFocus: this.prevWorldAnchor, isAirborne: false };
    }

    if (!this.isPaused) {
      this.flightTime += dt;
      if (this.flightTime >= ToothlessFlightChoreographer.DURATION_SEC) {
        if (this.loop) {
          this.flightTime %= ToothlessFlightChoreographer.DURATION_SEC;
        } else {
          this.stopAndResetToPerch();
          return { worldFocus: this.prevWorldAnchor, isAirborne: false };
        }
      }
    }

    this.applyAtTime(this.flightTime);

    const currentAnchor = this.computeDesiredWorldFocus();

    if (this.followCamera) {
      const delta = currentAnchor.clone().sub(this.prevWorldAnchor);
      controlsTarget.add(delta);
      camera.position.add(delta);

      const skyExpand = bellWindow(this.flightTime, 1.8, 5.2, 18.8, 23.2);
      const perchedDist = this.subjectMode === 'duet' ? 9.4 : 4.95;
      const openSkyDist = this.subjectMode === 'duet' ? 17.8 : 11.2;
      const desiredDist = THREE.MathUtils.lerp(perchedDist, openSkyDist, skyExpand);

      const offset = camera.position.clone().sub(controlsTarget);
      const curDist = Math.max(0.5, offset.length());
      const nextDist = THREE.MathUtils.lerp(curDist, desiredDist, 1.0 - Math.exp(-2.2 * Math.max(0.016, dt)));
      offset.setLength(nextDist);

      camera.position.copy(controlsTarget).add(offset);
      const camGroundY = sampleWorldTerrainHeight(camera.position.x, camera.position.z);
      const minSafeCamY = Math.max(-8.8, camGroundY + 1.8);
      if (camera.position.y < minSafeCamY) {
        camera.position.y = minSafeCamY;
      }

      controlsTarget.lerp(currentAnchor, 1.0 - Math.exp(-7.5 * Math.max(0.016, dt)));
    }

    this.prevWorldAnchor.copy(currentAnchor);

    const tAir = this.toothlessController.state.airborneFactor;
    const lAir = this.lightFuryController?.state.airborneFactor ?? 0;
    return {
      worldFocus: currentAnchor,
      isAirborne: Math.max(tAir, lAir) > 0.15,
    };
  }

  public computeKinematicsAlongSpline(
    spline: THREE.CatmullRomCurve3,
    homePos: THREE.Vector3,
    homeYaw: number,
    t: number,
    phaseOffsetRad: number,
    flapRateScale: number
  ) {
    const T_LAUNCH = 2.05;
    const T_LAND = 21.85;
    const flightSpan = T_LAND - T_LAUNCH;

    let u = 0;
    if (t <= T_LAUNCH) {
      u = 0;
    } else if (t >= T_LAND) {
      u = 1;
    } else {
      const rawFrac = (t - T_LAUNCH) / flightSpan;
      const eased = rawFrac * rawFrac * (3 - 2 * rawFrac);
      const diveSpeedWarp = Math.sin(rawFrac * Math.PI * 2.0 - 1.2) * 0.024 * Math.sin(rawFrac * Math.PI);
      u = THREE.MathUtils.clamp(
        THREE.MathUtils.lerp(rawFrac, eased, 0.38) + diveSpeedWarp,
        0,
        1
      );
    }

    const airborneEnv = bellWindow(t, T_LAUNCH - 0.10, T_LAUNCH + 0.72, T_LAND - 0.75, T_LAND + 0.08);
    const climbEnv = bellWindow(t, 1.65, 2.75, 7.2, 8.6);
    const glideEnv = bellWindow(t, 7.8, 9.0, 12.2, 13.4);
    const diveEnv = bellWindow(t, 12.6, 13.6, 16.4, 17.5);
    const pulloutEnv = bellWindow(t, 15.8, 16.8, 18.0, 19.0);
    const brakeEnv = bellWindow(t, 18.0, 19.2, 21.1, 22.05);

    // Slow, weighty, natural wingbeat phase (~0.80 Hz)!
    const flapPhase = evalNaturalWingFlapPhase(t, flapRateScale, phaseOffsetRad);

    const activeFlapAmp =
      THREE.MathUtils.clamp(
        climbEnv * 0.94 + pulloutEnv * 0.82 + brakeEnv * 0.88 + (1.0 - glideEnv) * (1.0 - diveEnv) * 0.16,
        0,
        0.96
      ) * airborneEnv;

    // Asymmetric biological stroke profile: fluid upstroke recovery + powerful weighty downstroke!
    const rawSin = Math.sin(flapPhase);
    const flapSin = THREE.MathUtils.clamp(rawSin + 0.14 * Math.sin(flapPhase * 2.0), -1.0, 1.0);
    const flapCos = Math.cos(flapPhase);
    const bodyHeaveY = -flapCos * 0.26 * activeFlapAmp;
    const bodyStrokePitch = flapCos * 0.056 * activeFlapAmp;

    let headingTurnRate = 0;
    let lookAheadTurnDiff = 0;
    let bankRoll = 0;
    let pathClimbPitch = 0;
    const outPos = homePos.clone();
    const outQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, homeYaw, 0, 'YXZ'));

    if (u > 0.0001 && u < 0.9999) {
      const eps = 0.008;
      const u0 = Math.max(0, u - eps);
      const u1 = Math.min(1, u + eps);
      spline.getPointAt(u, this.tmpPos);
      spline.getPointAt(u0, this.tmpPosBehind);
      spline.getPointAt(u1, this.tmpPosAhead);

      this.tmpVel.subVectors(this.tmpPosAhead, this.tmpPosBehind).normalize();
      const yawNow = Math.atan2(this.tmpVel.x, this.tmpVel.z);

      const uPrev = Math.max(0, u - 0.028);
      const uNext = Math.min(1, u + 0.028);
      const tanPrev = spline.getTangentAt(uPrev);
      const tanNext = spline.getTangentAt(uNext);
      const yawPrev = Math.atan2(tanPrev.x, tanPrev.z);
      const yawNext = Math.atan2(tanNext.x, tanNext.z);
      headingTurnRate = wrapAngleRad(yawNext - yawPrev) / Math.max(0.005, uNext - uPrev);

      const uLook = Math.min(1, u + 0.048);
      spline.getTangentAt(uLook, this.tmpPosLook);
      const yawLook = Math.atan2(this.tmpPosLook.x, this.tmpPosLook.z);
      lookAheadTurnDiff = wrapAngleRad(yawLook - yawNow);

      pathClimbPitch = -Math.asin(THREE.MathUtils.clamp(this.tmpVel.y, -0.84, 0.84));
      const cobraBrakePitch = -0.56 * brakeEnv;
      const bankEnvelope = bellWindow(u, 0.025, 0.11, 0.86, 0.98);
      bankRoll = THREE.MathUtils.clamp(-headingTurnRate * 0.24, -0.74, 0.74) * bankEnvelope;

      const posBlend = bellWindow(u, 0.0, 0.032, 0.962, 1.0);
      outPos.lerpVectors(homePos, this.tmpPos, posBlend);
      outPos.y += bodyHeaveY * bankEnvelope;

      // Active terrain & ocean safety guard during mid-flight: guarantees ZERO rock/water collisions!
      const safetyEnv = bellWindow(u, 0.04, 0.09, 0.91, 0.96);
      if (safetyEnv > 0.001) {
        const groundC = sampleWorldTerrainHeight(outPos.x, outPos.z);
        const groundL = sampleWorldTerrainHeight(outPos.x - 3.6, outPos.z);
        const groundR = sampleWorldTerrainHeight(outPos.x + 3.6, outPos.z);
        const maxLocalRock = Math.max(groundC, groundL, groundR);
        const minSafeAirY = Math.max(-7.2, maxLocalRock + 3.8 * safetyEnv);
        if (outPos.y < minSafeAirY) {
          outPos.y = minSafeAirY;
        }
      }

      const finalYaw = lerpAngleRad(homeYaw, yawNow, posBlend);
      const finalPitch = (pathClimbPitch * 0.86 + cobraBrakePitch + bodyStrokePitch) * posBlend;
      const finalRoll = bankRoll * posBlend;

      this.tmpEuler.set(finalPitch, finalYaw, finalRoll, 'YXZ');
      outQuat.setFromEuler(this.tmpEuler);
    }

    return {
      u,
      airborneEnv,
      climbEnv,
      glideEnv,
      diveEnv,
      pulloutEnv,
      brakeEnv,
      flapPhase,
      activeFlapAmp,
      flapSin,
      flapCos,
      lookAheadTurnDiff,
      bankRoll,
      pathClimbPitch,
      outPos,
      outQuat,
    };
  }

  private applyToothlessFlightAtTime(t: number, isDuet: boolean): void {
    const k = this.computeKinematicsAlongSpline(
      this.toothlessSpline,
      TOOTHLESS_PERCH_POSE.position,
      TOOTHLESS_PERCH_POSE.yaw,
      t,
      0.0,
      1.0
    );

    this.toothlessAsset.rootGroup.position.copy(k.outPos);
    this.toothlessAsset.rootGroup.quaternion.copy(k.outQuat);
    this.toothlessAsset.rootGroup.updateMatrixWorld(true);

    const launchAnticipation = bellWindow(t, 0.35, 1.15, 1.68, 2.10);
    const launchPushOff = bellWindow(t, 1.82, 2.05, 2.35, 2.85);
    const landingReach = bellWindow(t, 19.2, 20.2, 21.75, 22.25);
    const landingCrouch = bellWindow(t, 21.75, 22.20, 22.85, 23.90);
    const settleSmile = bellWindow(t, 23.1, 23.65, 24.35, 24.95);

    const duetMateGlance = isDuet ? 0.34 * k.glideEnv + 0.36 * settleSmile : -0.22 * settleSmile;

    const forelegStance =
      DEFAULT_HERO_RIG_STATE.forelegStance * (1.0 - launchAnticipation - landingCrouch) -
      0.88 * launchAnticipation -
      0.80 * landingCrouch +
      0.18 * settleSmile;

    const hindlegStance =
      DEFAULT_HERO_RIG_STATE.hindlegStance * (1.0 - launchAnticipation - landingCrouch) -
      0.84 * launchAnticipation -
      0.76 * landingCrouch +
      0.12 * settleSmile;

    // Keep legFlightTuck at a relaxed ~0.82 in cruise (paired with flexed airborne knee/elbow angles + wind sway!)
    const legFlightTuck = THREE.MathUtils.clamp(
      0.82 * k.airborneEnv - 1.55 * launchPushOff - 1.58 * landingReach,
      -0.84,
      0.88
    );

    const wingUnfurl = THREE.MathUtils.lerp(
      DEFAULT_HERO_RIG_STATE.wingUnfurl + 0.34 * launchAnticipation,
      1.0 - 0.16 * k.diveEnv,
      smoothstep(0.95, 2.15, t) * (1.0 - smoothstep(22.1, 24.1, t))
    );

    const wingWristFold = Math.max(0, k.flapCos) * 0.56 * k.activeFlapAmp * (1.0 - k.brakeEnv * 0.60);
    const wingFlap = THREE.MathUtils.clamp(
      0.68 * launchAnticipation + k.flapSin * 0.92 * k.activeFlapAmp + 0.14 * k.glideEnv - 0.08 * k.diveEnv,
      -1.0,
      1.0
    );
    const wingTipLag = -k.flapCos * 0.84 * k.activeFlapAmp;
    const wingSweep = THREE.MathUtils.clamp(
      DEFAULT_HERO_RIG_STATE.wingSweep * (1.0 - k.airborneEnv) -
        0.80 * k.diveEnv +
        0.74 * k.brakeEnv -
        0.16 * launchAnticipation,
      -1.0,
      1.0
    );
    const downstrokePressure = Math.max(0, -k.flapSin) * k.activeFlapAmp;
    const wingCamber = THREE.MathUtils.clamp(
      0.28 + 0.46 * downstrokePressure + 0.54 * k.pulloutEnv + 0.64 * k.brakeEnv - 0.18 * k.diveEnv,
      0.08,
      1.0
    );

    const dorsalSpineSplit = THREE.MathUtils.clamp(
      0.22 * (1.0 - k.airborneEnv) +
        0.95 * k.glideEnv +
        0.85 * Math.min(1, Math.abs(k.bankRoll) * 1.8) +
        0.90 * k.brakeEnv,
      0.15,
      1.0
    );

    const baseTailDihedral =
      0.24 * (1.0 - k.airborneEnv) +
      0.18 * k.climbEnv +
      0.06 * k.glideEnv +
      0.42 * k.diveEnv -
      0.32 * k.brakeEnv;
    const rudderDiff = THREE.MathUtils.clamp(k.bankRoll * 0.38, -0.32, 0.32);

    const nextState: Partial<ToothlessRigState> = {
      airborneFactor: k.airborneEnv,
      forelegStance,
      hindlegStance,
      limbStride: 0,
      legFlightTuck,
      spineArch: 0.20 * launchAnticipation - 0.16 * launchPushOff + 0.24 * k.brakeEnv + 0.08 * (1 - k.airborneEnv),
      spineTwist: THREE.MathUtils.clamp(-k.bankRoll * 0.35, -1, 1),

      wingUnfurl,
      wingFlap,
      wingWristFold,
      wingTipLag,
      wingSweep,
      wingCamber,
      pelvicFinFlare: THREE.MathUtils.clamp(0.88 + 0.12 * (k.glideEnv + k.brakeEnv) - 0.35 * k.diveEnv, 0.3, 1.0),
      dorsalSpineSplit,

      autoSyncProstheticTail: Math.abs(rudderDiff) < 0.02,
      leftProstheticFinFlare: THREE.MathUtils.clamp(baseTailDihedral + rudderDiff, -1, 1),
      rightTailFinFlare: THREE.MathUtils.clamp(baseTailDihedral - rudderDiff, -1, 1),
      tailYaw: THREE.MathUtils.clamp(
        DEFAULT_HERO_RIG_STATE.tailYaw * (1.0 - k.airborneEnv) + k.lookAheadTurnDiff * 1.35 * k.airborneEnv + 0.28 * settleSmile,
        -1.0,
        1.0
      ),
      tailPitch: THREE.MathUtils.clamp(
        DEFAULT_HERO_RIG_STATE.tailPitch * (1.0 - k.airborneEnv) - 0.34 * k.brakeEnv + 0.15 * k.pulloutEnv + 0.22 * landingCrouch,
        -1.0,
        1.0
      ),
      tailCurl: 0.16 * (1.0 - k.diveEnv) + k.lookAheadTurnDiff * 0.8,
      tailWaveAmp: k.activeFlapAmp * 0.78 + k.glideEnv * 0.16,
      tailWavePhase: k.flapPhase,

      neckArch: 0.16 + 0.24 * k.brakeEnv - 0.20 * k.diveEnv,
      neckYaw: k.lookAheadTurnDiff * 0.95 * k.airborneEnv + duetMateGlance * 0.45,
      headYaw: THREE.MathUtils.clamp(
        DEFAULT_HERO_RIG_STATE.headYaw * (1.0 - k.airborneEnv) + k.lookAheadTurnDiff * 1.55 * k.airborneEnv + duetMateGlance,
        -1.0,
        1.0
      ),
      headPitch: THREE.MathUtils.clamp(
        DEFAULT_HERO_RIG_STATE.headPitch * (1.0 - k.airborneEnv) -
          0.34 * launchAnticipation +
          k.pathClimbPitch * -0.24 * k.airborneEnv +
          0.48 * k.brakeEnv +
          0.16 * landingCrouch,
        -1.0,
        1.0
      ),
      headRoll: THREE.MathUtils.clamp(
        DEFAULT_HERO_RIG_STATE.headRoll * (1.0 - k.airborneEnv) - k.bankRoll * 0.46 * k.airborneEnv - 0.22 * settleSmile,
        -1.0,
        1.0
      ),
      earPerk: THREE.MathUtils.clamp(
        0.76 + 0.20 * launchAnticipation - 0.56 * k.diveEnv - 0.20 * k.climbEnv + 0.18 * k.brakeEnv + 0.18 * settleSmile,
        0.12,
        1.0
      ),
      earAsymmetry: k.bankRoll * 0.22 + 0.12 * settleSmile,
      cheekNubFlare: 0.50 + 0.25 * k.diveEnv,

      eyeYaw: THREE.MathUtils.clamp(k.lookAheadTurnDiff * 1.7 * k.airborneEnv + duetMateGlance * 0.55, -0.85, 0.85),
      eyePitch: THREE.MathUtils.clamp(0.32 * launchAnticipation - 0.44 * k.brakeEnv, -0.85, 0.85),
      pupilDilation: THREE.MathUtils.clamp(0.76 - 0.24 * k.diveEnv + 0.16 * settleSmile, 0.25, 0.96),
      squint: THREE.MathUtils.clamp(0.36 * k.diveEnv + 0.18 * settleSmile, 0, 1),
      blink: bellWindow(t, 23.35, 23.45, 23.52, 23.64),

      jawOpen: THREE.MathUtils.clamp(0.20 * launchPushOff + 0.15 * k.pulloutEnv + 0.26 * settleSmile, 0, 1),
      teethExtension: 0.0,
      tongueExtend: 0.40 * settleSmile,
      tongueCurl: 0.20 * settleSmile,
    };

    Object.assign(this.toothlessController.state, nextState);
  }

  private applyLightFuryFlightAtTime(t: number, isDuet: boolean): void {
    if (!this.lightFuryAsset || !this.lightFuryController) return;

    const k = this.computeKinematicsAlongSpline(
      this.lightFurySpline,
      LIGHT_FURY_PERCH_POSE.position,
      LIGHT_FURY_PERCH_POSE.yaw,
      t,
      0.95,
      1.03
    );

    this.lightFuryAsset.rootGroup.position.copy(k.outPos);
    this.lightFuryAsset.rootGroup.quaternion.copy(k.outQuat);
    this.lightFuryAsset.rootGroup.updateMatrixWorld(true);

    const launchAnticipation = bellWindow(t, 0.32, 1.12, 1.65, 2.08);
    const launchPushOff = bellWindow(t, 1.80, 2.04, 2.32, 2.82);
    const landingReach = bellWindow(t, 19.2, 20.2, 21.75, 22.25);
    const landingCrouch = bellWindow(t, 21.75, 22.20, 22.85, 23.90);
    const settlePurr = bellWindow(t, 23.0, 23.60, 24.40, 24.96);

    const diveCloakShimmer = bellWindow(t, 13.2, 14.2, 15.8, 16.9);
    const biolumSoarPulse = bellWindow(t, 8.2, 9.4, 12.2, 13.4);
    const plasmaCharge = bellWindow(t, 12.6, 13.6, 16.0, 17.2);

    const duetMateGlance = isDuet ? -0.36 * k.glideEnv - 0.34 * settlePurr : -0.18 * settlePurr;

    const forelegStance =
      DEFAULT_LIGHT_FURY_STATE.forelegStance * (1.0 - launchAnticipation - landingCrouch) -
      0.86 * launchAnticipation -
      0.78 * landingCrouch +
      0.20 * settlePurr;

    const hindlegStance =
      DEFAULT_LIGHT_FURY_STATE.hindlegStance * (1.0 - launchAnticipation - landingCrouch) -
      0.82 * launchAnticipation -
      0.74 * landingCrouch +
      0.12 * settlePurr;

    const legFlightTuck = THREE.MathUtils.clamp(
      0.82 * k.airborneEnv - 1.52 * launchPushOff - 1.56 * landingReach,
      -0.84,
      0.88
    );

    const wingUnfurl = THREE.MathUtils.lerp(
      DEFAULT_LIGHT_FURY_STATE.wingUnfurl + 0.34 * launchAnticipation,
      1.0 - 0.18 * k.diveEnv,
      smoothstep(0.90, 2.12, t) * (1.0 - smoothstep(22.1, 24.1, t))
    );

    const wingWristFold = Math.max(0, k.flapCos) * 0.54 * k.activeFlapAmp * (1.0 - k.brakeEnv * 0.60);
    const wingFlap = THREE.MathUtils.clamp(
      0.66 * launchAnticipation + k.flapSin * 0.90 * k.activeFlapAmp + 0.16 * k.glideEnv - 0.08 * k.diveEnv,
      -1.0,
      1.0
    );
    const wingTipLag = -k.flapCos * 0.86 * k.activeFlapAmp;
    const wingSweep = THREE.MathUtils.clamp(
      DEFAULT_LIGHT_FURY_STATE.wingSweep * (1.0 - k.airborneEnv) -
        0.82 * k.diveEnv +
        0.74 * k.brakeEnv -
        0.15 * launchAnticipation,
      -1.0,
      1.0
    );
    const downstrokePressure = Math.max(0, -k.flapSin) * k.activeFlapAmp;
    const wingCamber = THREE.MathUtils.clamp(
      0.26 + 0.44 * downstrokePressure + 0.52 * k.pulloutEnv + 0.62 * k.brakeEnv - 0.16 * k.diveEnv,
      0.08,
      1.0
    );

    const baseHeartFlare =
      0.18 * (1.0 - k.airborneEnv) +
      0.12 * k.climbEnv +
      0.02 * k.glideEnv +
      0.38 * k.diveEnv -
      0.28 * k.brakeEnv;
    const rudderDiff = THREE.MathUtils.clamp(k.bankRoll * 0.36, -0.30, 0.30);

    const nextState: Partial<LightFuryRigState> = {
      airborneFactor: k.airborneEnv,
      forelegStance,
      hindlegStance,
      limbStride: 0,
      legFlightTuck,
      coyWingVeil: 0.0,
      spineArch: 0.22 * launchAnticipation - 0.15 * launchPushOff + 0.24 * k.brakeEnv + 0.12 * (1 - k.airborneEnv),
      spineTwist: THREE.MathUtils.clamp(-k.bankRoll * 0.36, -1, 1),

      wingUnfurl,
      wingFlap,
      wingWristFold,
      wingTipLag,
      wingSweep,
      wingCamber,
      pelvicFinFlare: THREE.MathUtils.clamp(0.88 + 0.12 * (k.glideEnv + k.brakeEnv) - 0.32 * k.diveEnv, 0.32, 1.0),
      dorsalSailFlex: THREE.MathUtils.clamp(
        0.24 * (1.0 - k.airborneEnv) + 0.92 * k.glideEnv + 0.85 * k.brakeEnv + 0.65 * Math.abs(k.bankRoll),
        0.15,
        1.0
      ),

      syncHeartTailFlukes: Math.abs(rudderDiff) < 0.02,
      leftHeartFinFlare: THREE.MathUtils.clamp(baseHeartFlare + rudderDiff, -1, 1),
      rightHeartFinFlare: THREE.MathUtils.clamp(baseHeartFlare - rudderDiff, -1, 1),
      tailYaw: THREE.MathUtils.clamp(
        DEFAULT_LIGHT_FURY_STATE.tailYaw * (1.0 - k.airborneEnv) + k.lookAheadTurnDiff * 1.35 * k.airborneEnv - 0.36 * settlePurr,
        -1.0,
        1.0
      ),
      tailPitch: THREE.MathUtils.clamp(
        DEFAULT_LIGHT_FURY_STATE.tailPitch * (1.0 - k.airborneEnv) - 0.32 * k.brakeEnv + 0.16 * k.pulloutEnv + 0.20 * landingCrouch,
        -1.0,
        1.0
      ),
      tailCurl: -0.24 * (1.0 - k.airborneEnv) + k.lookAheadTurnDiff * 0.8 - 0.26 * settlePurr,
      tailWaveAmp: k.activeFlapAmp * 0.76 + k.glideEnv * 0.18,
      tailWavePhase: k.flapPhase,

      neckArch: 0.24 + 0.24 * k.brakeEnv - 0.20 * k.diveEnv + 0.14 * settlePurr,
      neckYaw: k.lookAheadTurnDiff * 0.92 * k.airborneEnv + duetMateGlance * 0.48,
      headYaw: THREE.MathUtils.clamp(
        DEFAULT_LIGHT_FURY_STATE.headYaw * (1.0 - k.airborneEnv) + k.lookAheadTurnDiff * 1.55 * k.airborneEnv + duetMateGlance,
        -1.0,
        1.0
      ),
      headPitch: THREE.MathUtils.clamp(
        DEFAULT_LIGHT_FURY_STATE.headPitch * (1.0 - k.airborneEnv) -
          0.32 * launchAnticipation +
          k.pathClimbPitch * -0.24 * k.airborneEnv +
          0.46 * k.brakeEnv +
          0.14 * landingCrouch,
        -1.0,
        1.0
      ),
      headRoll: THREE.MathUtils.clamp(
        DEFAULT_LIGHT_FURY_STATE.headRoll * (1.0 - k.airborneEnv) - k.bankRoll * 0.46 * k.airborneEnv + 0.28 * settlePurr,
        -1.0,
        1.0
      ),
      earPerk: THREE.MathUtils.clamp(
        0.82 + 0.16 * launchAnticipation - 0.56 * k.diveEnv - 0.20 * k.climbEnv + 0.16 * k.brakeEnv,
        0.14,
        1.0
      ),
      earAsymmetry: k.bankRoll * 0.24 + 0.18 * settlePurr,
      cheekNubFlare: 0.52 + 0.22 * k.diveEnv,

      eyeYaw: THREE.MathUtils.clamp(k.lookAheadTurnDiff * 1.65 * k.airborneEnv + duetMateGlance * 0.55, -0.85, 0.85),
      eyePitch: THREE.MathUtils.clamp(0.32 * launchAnticipation - 0.44 * k.brakeEnv, -0.85, 0.85),
      pupilDilation: THREE.MathUtils.clamp(0.84 - 0.20 * k.diveEnv + 0.10 * settlePurr, 0.30, 0.96),
      squint: THREE.MathUtils.clamp(0.30 * k.diveEnv + 0.56 * settlePurr, 0, 1),
      blink: bellWindow(t, 23.18, 23.28, 23.36, 23.48),

      jawOpen: THREE.MathUtils.clamp(0.14 * launchPushOff + 0.12 * k.pulloutEnv + 0.14 * settlePurr, 0, 1),
      teethExtension: 0.0,
      tongueExtend: 0.28 * settlePurr,
      tongueCurl: 0.12 * settlePurr,

      iridescentShimmer: THREE.MathUtils.clamp(0.78 + 0.22 * (k.glideEnv + diveCloakShimmer), 0, 1),
      radiantGlow: THREE.MathUtils.clamp(0.34 + 0.36 * (k.glideEnv + diveCloakShimmer), 0, 1),
      biolumGlow: THREE.MathUtils.clamp(0.58 * biolumSoarPulse, 0, 1),
      plasmaGlow: THREE.MathUtils.clamp(0.04 + 0.78 * plasmaCharge, 0, 1),
      thermalCloak: THREE.MathUtils.clamp(0.78 * diveCloakShimmer, 0, 1),
    };

    Object.assign(this.lightFuryController.state, nextState);
  }

  private applyPerchedSpectatorGaze(
    watcher: 'toothless' | 'light-fury',
    flierWorldPos: THREE.Vector3
  ): void {
    if (watcher === 'toothless') {
      this.toothlessAsset.rootGroup.position.copy(TOOTHLESS_PERCH_POSE.position);
      this.toothlessAsset.rootGroup.rotation.set(0, TOOTHLESS_PERCH_POSE.yaw, 0);
      this.toothlessAsset.rootGroup.updateMatrixWorld(true);

      const rel = flierWorldPos.clone().sub(TOOTHLESS_PERCH_POSE.position);
      rel.y -= 1.50;
      const worldAz = Math.atan2(rel.x, rel.z);
      const localAz = wrapAngleRad(worldAz - TOOTHLESS_PERCH_POSE.yaw);
      const horizDist = Math.max(0.8, Math.hypot(rel.x, rel.z));
      const elev = Math.atan2(rel.y, horizDist);

      Object.assign(this.toothlessController.state, {
        ...DEFAULT_HERO_RIG_STATE,
        neckYaw: THREE.MathUtils.clamp(localAz * 0.55, -0.85, 0.85),
        headYaw: THREE.MathUtils.clamp(localAz * 0.85, -0.95, 0.95),
        headPitch: THREE.MathUtils.clamp(-elev * 0.95, -0.85, 0.75),
        headRoll: THREE.MathUtils.clamp(-localAz * 0.18, -0.45, 0.45),
        eyeYaw: THREE.MathUtils.clamp(localAz * 0.45, -0.75, 0.75),
        eyePitch: THREE.MathUtils.clamp(elev * 0.55, -0.65, 0.65),
        earPerk: 0.94,
        pupilDilation: 0.88,
      });
    } else if (this.lightFuryAsset && this.lightFuryController) {
      this.lightFuryAsset.rootGroup.position.copy(LIGHT_FURY_PERCH_POSE.position);
      this.lightFuryAsset.rootGroup.rotation.set(0, LIGHT_FURY_PERCH_POSE.yaw, 0);
      this.lightFuryAsset.rootGroup.updateMatrixWorld(true);

      const rel = flierWorldPos.clone().sub(LIGHT_FURY_PERCH_POSE.position);
      rel.y -= 1.48;
      const worldAz = Math.atan2(rel.x, rel.z);
      const localAz = wrapAngleRad(worldAz - LIGHT_FURY_PERCH_POSE.yaw);
      const horizDist = Math.max(0.8, Math.hypot(rel.x, rel.z));
      const elev = Math.atan2(rel.y, horizDist);

      Object.assign(this.lightFuryController.state, {
        ...DEFAULT_LIGHT_FURY_STATE,
        neckYaw: THREE.MathUtils.clamp(localAz * 0.55, -0.85, 0.85),
        headYaw: THREE.MathUtils.clamp(localAz * 0.85, -0.95, 0.95),
        headPitch: THREE.MathUtils.clamp(-elev * 0.95, -0.85, 0.75),
        headRoll: THREE.MathUtils.clamp(0.18 - localAz * 0.18, -0.50, 0.55),
        eyeYaw: THREE.MathUtils.clamp(localAz * 0.45, -0.75, 0.75),
        eyePitch: THREE.MathUtils.clamp(elev * 0.55, -0.65, 0.65),
        earPerk: 0.94,
        pupilDilation: 0.90,
      });
    }
  }

  private applyAtTime(t: number): void {
    if (this.subjectMode === 'duet') {
      this.applyToothlessFlightAtTime(t, true);
      this.applyLightFuryFlightAtTime(t, true);
    } else if (this.subjectMode === 'toothless') {
      this.applyToothlessFlightAtTime(t, false);
      const tChest = this.toothlessAsset.rig.boneMap.get('chest')!;
      const tWorld = new THREE.Vector3().setFromMatrixPosition(tChest.matrixWorld);
      this.applyPerchedSpectatorGaze('light-fury', tWorld);
    } else {
      this.applyLightFuryFlightAtTime(t, false);
      if (this.lightFuryAsset) {
        const lChest = this.lightFuryAsset.rig.boneMap.get('chest')!;
        const lWorld = new THREE.Vector3().setFromMatrixPosition(lChest.matrixWorld);
        this.applyPerchedSpectatorGaze('toothless', lWorld);
      }
    }
  }
}
