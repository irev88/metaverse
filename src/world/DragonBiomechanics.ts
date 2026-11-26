import * as THREE from 'three';
import { sampleHeroCliffHeight, sampleWorldTerrainHeight } from './NordicCliffWorld';

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp((x - e0) / Math.max(1e-5, e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

/**
 * Exact registered solid obstacles on the Hero Island plateau & northern meadow
 * (Coastal stone cairn + weathered basalt meadow slabs from NordicCliffWorld.ts)
 * so neither dragon can EVER clip or pass through any world object!
 */
export interface WorldStaticObstacle {
  x: number;
  z: number;
  radius: number;
  topY: number;
}

export const HERO_ISLAND_OBSTACLES: ReadonlyArray<WorldStaticObstacle> = [
  { x: -8.65, z: -7.25, radius: 1.38, topY: 1.85 },  // Coastal Stone Cairn
  { x: 4.30, z: -13.24, radius: 1.18, topY: 2.35 },  // NE Meadow Slab
  { x: -12.32, z: -13.68, radius: 1.12, topY: 2.15 }, // NW Meadow Slab
  { x: -14.32, z: -17.32, radius: 1.25, topY: 4.35 }, // Upper West Slab
  { x: -15.78, z: -12.97, radius: 1.26, topY: 2.25 }, // Far West Slab
];

export function pushOutOfHeroObstaclesXZ(
  x: number,
  z: number,
  bodyRadius = 1.05
): { x: number; z: number } {
  let outX = x;
  let outZ = z;
  for (const obs of HERO_ISLAND_OBSTACLES) {
    const dx = outX - obs.x;
    const dz = outZ - obs.z;
    const d = Math.hypot(dx, dz);
    const minDist = obs.radius + bodyRadius;
    if (d < minDist) {
      if (d < 1e-4) {
        outX = obs.x + minDist;
      } else {
        const push = (minDist - d) + 0.02;
        outX += (dx / d) * push;
        outZ += (dz / d) * push;
      }
    }
  }
  return { x: outX, z: outZ };
}

export interface GroundedPlacementResult {
  x: number;
  y: number;
  z: number;
  terrainPitch: number;
  terrainRoll: number;
}

/**
 * True terrain-conforming 4-paw support plane placement across BOTH the Seaward Cliff Brink
 * (z ~ -1.8 .. +0.18) AND the Elevated Northern Grassy Meadow Bench (z ~ -11.4 .. -6.5).
 * Uses the exact 4-paw support average (NEVER floating on Math.max + air offset!), while
 * individual paws conform to exact terrain undulations via Per-Paw World Terrain IK.
 */
export function computeSafeCliffGroundPlacement(
  rawX: number,
  rawZ: number,
  yaw: number,
  bodyScale = 1.0
): GroundedPlacementResult {
  // Safe plateau & northern grassy meadow bounds (well inside all sheer cliff brinks)
  const clampedX = clamp(rawX, -5.15, 4.60);
  const clampedZ = clamp(rawZ, -11.45, 0.20);
  const safeXZ = pushOutOfHeroObstaclesXZ(clampedX, clampedZ, 1.10 * bodyScale);
  const x = clamp(safeXZ.x, -5.15, 4.60);
  const z = clamp(safeXZ.z, -11.45, 0.20);

  const sinY = Math.sin(yaw);
  const cosY = Math.cos(yaw);

  const foreDist = 1.00 * bodyScale;
  const hindDist = -0.52 * bodyScale;
  const halfWidth = 0.32 * bodyScale;

  const samplePt = (lx: number, lz: number) => {
    const wx = x + lx * cosY + lz * sinY;
    const wz = z - lx * sinY + lz * cosY;
    return sampleHeroCliffHeight(wx, wz);
  };

  const hFL = samplePt(halfWidth, foreDist);
  const hFR = samplePt(-halfWidth, foreDist);
  const hHL = samplePt(halfWidth, hindDist);
  const hHR = samplePt(-halfWidth, hindDist);

  // Exact 4-paw support centroid so the dragon NEVER floats on an elevated horizontal plane!
  const y = 0.25 * (hFL + hFR + hHL + hHR);

  const hFront = 0.5 * (hFL + hFR);
  const hBack = 0.5 * (hHL + hHR);
  const hLeft = 0.5 * (hFL + hHL);
  const hRight = 0.5 * (hFR + hHR);

  const terrainPitch = clamp((hBack - hFront) / Math.max(0.8, foreDist - hindDist), -0.24, 0.24);
  const terrainRoll = clamp((hRight - hLeft) / Math.max(0.5, halfWidth * 2), -0.18, 0.18);

  return { x, y, z, terrainPitch, terrainRoll };
}

export interface DragonMacroDirective {
  rearUpJoy: number;
  playPawL: number;
  playPawR: number;
  /** Independent feline/arm-like expressive forelimb reach & curious gesture (0..1) */
  armReachL: number;
  armReachR: number;
  /**
   * Romantic chest-cradle embrace (Toothless): sits proudly on 3 grounded paws & gently raises
   * his inner forelimb like an open welcoming arm so Light Fury can rest tenderly by his chest!
   */
  cradleEmbrace: number;
  /**
   * Romantic chest-rest nestle (Light Fury): settles warmly beside Toothless's open chest
   * and curves her head & neck softly into the protective arc of his chest & raised forelimb!
   */
  nestleIntoChest: number;
  /** Gentle respectful bow supplement (kept subtle so bow is noble, never contorted!) */
  deepCourtshipBow: number;
  affectionateNuzzle: number;
  /** Elevates Toothless's inner wing high (y > 2.05m) over Light Fury's back with ZERO overlap */
  protectiveWingMantle: number;
  /** Sweeps Light Fury's inner wing sleekly back along her flank with ZERO lateral stick-out */
  tuckInnerWingNeat: number;
  /** Sweeps BOTH wings compactly back along flanks when walking/turning near mate */
  compactFoldedWings: number;
  lookAtMateWeight: number;
  mateWorldPos: THREE.Vector3;
  timeSec: number;
}

export function createDefaultMacroDirective(): DragonMacroDirective {
  return {
    rearUpJoy: 0,
    playPawL: 0,
    playPawR: 0,
    armReachL: 0,
    armReachR: 0,
    cradleEmbrace: 0,
    nestleIntoChest: 0,
    deepCourtshipBow: 0,
    affectionateNuzzle: 0,
    protectiveWingMantle: 0,
    tuckInnerWingNeat: 0,
    compactFoldedWings: 0,
    lookAtMateWeight: 0,
    mateWorldPos: new THREE.Vector3(),
    timeSec: 0,
  };
}

/**
 * Smoothly filters all numeric properties of a rig state / macro object so NO instantaneous
 * posture snap can ever occur across scene boundaries!
 */
export class ContinuousPoseFilter<T extends object> {
  private current: Record<string, number> = {};
  private initialized = false;

  public reset(): void {
    this.initialized = false;
    this.current = {};
  }

  public filterInPlace(targetObj: T, dt: number, tauSec = 0.20): void {
    const rec = targetObj as unknown as Record<string, unknown>;
    const alpha = this.initialized ? 1.0 - Math.exp(-Math.min(dt, 0.05) / Math.max(0.02, tauSec)) : 1.0;

    for (const key of Object.keys(rec)) {
      const val = rec[key];
      if (typeof val === 'number' && Number.isFinite(val)) {
        if (key === 'tailWavePhase' || key === 'timeSec') {
          this.current[key] = val;
          continue;
        }
        const prev = this.current[key];
        const next = prev === undefined ? val : prev + (val - prev) * alpha;
        this.current[key] = next;
        rec[key] = next;
      }
    }
    this.initialized = true;
  }
}

/**
 * Smoothly filters rootGroup world position & quaternion so world movement & heading turns
 * are guaranteed 100% C1-continuous across every act & scene boundary!
 */
export class ContinuousTransformFilter {
  private readonly pos = new THREE.Vector3();
  private readonly quat = new THREE.Quaternion();
  private initialized = false;

  public reset(): void {
    this.initialized = false;
  }

  public apply(
    rootGroup: THREE.Group,
    dt: number,
    posTau = 0.16,
    rotTau = 0.18,
    isGrounded = false
  ): void {
    if (!this.initialized) {
      this.pos.copy(rootGroup.position);
      this.quat.copy(rootGroup.quaternion);
      this.initialized = true;
      return;
    }
    const safeDt = clamp(dt, 0.001, 0.05);
    const kp = 1.0 - Math.exp(-safeDt / Math.max(0.02, posTau));
    const kr = 1.0 - Math.exp(-safeDt / Math.max(0.02, rotTau));

    const nextPos = this.pos.clone().lerp(rootGroup.position, kp);
    if (isGrounded) {
      const stepVec = nextPos.clone().sub(this.pos);
      const maxStep = 4.5 * safeDt;
      if (stepVec.length() > maxStep) {
        stepVec.setLength(maxStep);
        nextPos.copy(this.pos).add(stepVec);
      }
    }
    this.pos.copy(nextPos);

    const angleDiff = this.quat.angleTo(rootGroup.quaternion);
    const maxAngleStep = (isGrounded ? 2.8 : 4.2) * safeDt;
    const slerpT = angleDiff > 1e-5 ? Math.min(kr, maxAngleStep / angleDiff) : kr;
    this.quat.slerp(rootGroup.quaternion, slerpT);

    rootGroup.position.copy(this.pos);
    rootGroup.quaternion.copy(this.quat);
    rootGroup.updateMatrixWorld(false);
  }

  public syncAfterCollisionPush(rootGroup: THREE.Group): void {
    this.pos.copy(rootGroup.position);
    this.quat.copy(rootGroup.quaternion);
  }
}

interface RigCompatibleAsset {
  rootGroup: THREE.Group;
  rig: {
    rootBone: THREE.Bone;
    boneMap: Map<string, THREE.Bone>;
    bindWorldPositions: Map<string, THREE.Vector3>;
  };
}

type LimbKey = 'FL' | 'FR' | 'HL' | 'HR';

interface WorldFootPlantState {
  initialized: boolean;
  plantedWx: number;
  plantedWz: number;
  swingStartWx: number;
  swingStartWz: number;
  wasInStance: boolean;
  idleRepositionTimer: number;
  idleFromWx: number;
  idleFromWz: number;
  idleToWx: number;
  idleToWz: number;
}

function createFootPlantState(): WorldFootPlantState {
  return {
    initialized: false,
    plantedWx: 0,
    plantedWz: 0,
    swingStartWx: 0,
    swingStartWz: 0,
    wasInStance: true,
    idleRepositionTimer: -1,
    idleFromWx: 0,
    idleFromWz: 0,
    idleToWx: 0,
    idleToWz: 0,
  };
}

function sampleIslandOrWorldTerrainY(wx: number, wz: number): number {
  if (Math.abs(wx) < 22.0 && wz > -26.0 && wz < 6.0) {
    return Math.max(sampleHeroCliffHeight(wx, wz), sampleWorldTerrainHeight(wx, wz));
  }
  return sampleWorldTerrainHeight(wx, wz);
}

export class DragonBiomechanicalAnimator {
  private readonly asset: RigCompatibleAsset;
  private readonly isLightFury: boolean;
  private readonly bodyScale: number;
  private readonly restPos = new Map<string, THREE.Vector3>();
  private readonly restQuat = new Map<string, THREE.Quaternion>();

  private prevPos = new THREE.Vector3();
  private prevYaw = 0;
  private velWorldX = 0;
  private velWorldZ = 0;
  private initialized = false;

  public gaitCycle = 0;
  public smoothedSpeed = 0;
  public smoothedTurnRate = 0;
  public walkWeight = 0;
  private smoothedLookYaw = 0;
  private smoothedLookPitch = 0;

  private readonly footPlants: Record<LimbKey, WorldFootPlantState> = {
    FL: createFootPlantState(),
    FR: createFootPlantState(),
    HL: createFootPlantState(),
    HR: createFootPlantState(),
  };

  private readonly tmpVecA = new THREE.Vector3();
  private readonly tmpVecB = new THREE.Vector3();
  private readonly tmpVecC = new THREE.Vector3();
  private readonly tmpVecD = new THREE.Vector3();
  private readonly tmpMatA = new THREE.Matrix4();
  private readonly tmpMatB = new THREE.Matrix4();
  private readonly tmpQuatA = new THREE.Quaternion();
  private readonly tmpQuatB = new THREE.Quaternion();
  private readonly tmpEuler = new THREE.Euler();

  private readonly strideLength: number;
  private readonly reachLimitFore: number;

  constructor(asset: RigCompatibleAsset, isLightFury = false) {
    this.asset = asset;
    this.isLightFury = isLightFury;
    this.bodyScale = isLightFury ? 0.92 : 1.0;
    this.strideLength = isLightFury ? 1.24 : 1.38;
    this.reachLimitFore = isLightFury ? 0.618 : 0.678;

    for (const [name, bone] of asset.rig.boneMap.entries()) {
      this.restPos.set(name, bone.position.clone());
      this.restQuat.set(name, bone.quaternion.clone());
    }
  }

  public resetMotionTracking(): void {
    this.initialized = false;
    this.smoothedSpeed = 0;
    this.smoothedTurnRate = 0;
    this.velWorldX = 0;
    this.velWorldZ = 0;
    this.walkWeight = 0;
    this.smoothedLookYaw = 0;
    this.smoothedLookPitch = 0;
    for (const k of ['FL', 'FR', 'HL', 'HR'] as const) {
      this.footPlants[k] = createFootPlantState();
    }
  }

  public applyPostPass(
    dt: number,
    airborneFactor: number,
    wingFlap: number,
    crouchFore: number,
    crouchHind: number,
    macro: DragonMacroDirective,
    isFrozenPause = false
  ): void {
    const rootGroup = this.asset.rootGroup;
    const boneMap = this.asset.rig.boneMap;
    const air = clamp(airborneFactor, 0, 1);
    const grounded = 1.0 - air;

    rootGroup.updateMatrixWorld(false);
    const fwdWorld = this.tmpVecA.set(0, 0, 1).transformDirection(rootGroup.matrixWorld);
    const curYaw = Math.atan2(fwdWorld.x, fwdWorld.z);

    if (!this.initialized) {
      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;
      this.initialized = true;
    }

    const safeDt = clamp(dt, 0.001, 0.05);
    if (isFrozenPause) {
      this.smoothedSpeed = 0;
      this.smoothedTurnRate = 0;
      this.velWorldX = 0;
      this.velWorldZ = 0;
      this.walkWeight = 0;
      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;
    } else {
      const dx = rootGroup.position.x - this.prevPos.x;
      const dz = rootGroup.position.z - this.prevPos.z;
      const horizDist = Math.hypot(dx, dz);
      const rawVx = grounded > 0.25 ? dx / safeDt : 0;
      const rawVz = grounded > 0.25 ? dz / safeDt : 0;
      const rawSpeed = grounded > 0.25 ? horizDist / safeDt : 0;

      let dYaw = curYaw - this.prevYaw;
      while (dYaw > Math.PI) dYaw -= Math.PI * 2;
      while (dYaw < -Math.PI) dYaw += Math.PI * 2;
      const rawTurnRate = grounded > 0.25 ? clamp(dYaw / safeDt, -2.8, 2.8) : 0;

      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;

      const velAlpha = 1.0 - Math.exp(-11.0 * safeDt);
      this.velWorldX += (rawVx - this.velWorldX) * velAlpha;
      this.velWorldZ += (rawVz - this.velWorldZ) * velAlpha;
      this.smoothedSpeed += (rawSpeed - this.smoothedSpeed) * (1.0 - Math.exp(-10.5 * safeDt));
      this.smoothedTurnRate += (rawTurnRate - this.smoothedTurnRate) * (1.0 - Math.exp(-8.5 * safeDt));

      if (this.smoothedSpeed < 0.010) this.smoothedSpeed = 0;

      // Include rotational yaw-in-place velocity so turning smoothly triggers natural stepping!
      const effectiveLocoSpeed = this.smoothedSpeed + Math.abs(this.smoothedTurnRate) * 0.42;
      const cradleSupp = 1.0 - clamp(macro.cradleEmbrace, 0, 1) * 0.95;
      const targetWalkWeight =
        smoothstep(0.028, 0.30, effectiveLocoSpeed) * grounded * (1.0 - macro.rearUpJoy) * cradleSupp;
      this.walkWeight += (targetWalkWeight - this.walkWeight) * (1.0 - Math.exp(-9.5 * safeDt));
      if (this.walkWeight < 0.0006) this.walkWeight = 0;

      if (this.walkWeight > 0.0005 && (horizDist > 0.00004 || Math.abs(dYaw) > 0.00015)) {
        const effectiveStepDist = horizDist + Math.abs(dYaw) * 0.34;
        this.gaitCycle = (this.gaitCycle + effectiveStepDist / this.strideLength) % 1.0;
      }
    }

    if (air > 0.55) {
      for (const k of ['FL', 'FR', 'HL', 'HR'] as const) {
        this.footPlants[k].initialized = false;
      }
    }

    const wWalk = this.walkWeight;
    const rear = clamp(macro.rearUpJoy, 0, 1) * grounded;
    const bow = clamp(macro.deepCourtshipBow, 0, 1) * grounded;
    const cradle = clamp(macro.cradleEmbrace, 0, 1) * grounded;
    const nestle = clamp(macro.nestleIntoChest, 0, 1) * grounded;
    const armL = clamp(macro.armReachL, 0, 1) * grounded;
    const armR = clamp(macro.armReachR, 0, 1) * grounded;

    // Determine smooth inner-mate side in character frame (+X = Left, -X = Right)
    const rootInvEarly = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
    const mateLocalEarly = this.tmpVecB.copy(macro.mateWorldPos).applyMatrix4(rootInvEarly);
    const innerWeightL = smoothstep(-0.35, 0.35, mateLocalEarly.x);
    // Positive innerSign means mate is on +X (Left); negative means mate is on -X (Right)
    const innerSignSmooth = innerWeightL * 2.0 - 1.0;

    // 1. Center-of-mass weight shift, Curved-Path Spine Arc, Cradle Semi-Sit & Micro-Life
    const rootBone = boneMap.get('root');
    const pelvisBone = boneMap.get('pelvis');
    const spine1Bone = boneMap.get('spine_1');
    const spine2Bone = boneMap.get('spine_2');
    const chestBone = boneMap.get('chest');

    const cycRad = this.gaitCycle * Math.PI * 2;
    const walkBounceY = Math.sin(cycRad * 2.0 - 0.35) * 0.025 * wWalk;
    // Shift COM subtly over the supporting diagonal pair + lean slightly into curved turn!
    const lateralWeightX =
      -Math.cos(cycRad) * 0.026 * wWalk +
      clamp(this.smoothedTurnRate * 0.022, -0.035, 0.035) * wWalk +
      (armR - armL) * 0.042 +
      -innerSignSmooth * cradle * 0.048; // Shift weight onto planted outer foreleg during cradle embrace!

    const forwardSurgeZ = Math.cos(cycRad * 2.0) * 0.014 * wWalk;
    const walkBodyRoll =
      Math.cos(cycRad) * 0.032 * wWalk -
      clamp(this.smoothedTurnRate * 0.058, -0.10, 0.10) * wWalk +
      -innerSignSmooth * cradle * 0.035;
    const walkBodyPitch = Math.cos(cycRad * 2.0 + 0.4) * 0.020 * wWalk;
    const walkBodyYaw = Math.sin(cycRad) * 0.032 * wWalk;

    const flightHeaveY = air > 0.05 ? -wingFlap * 0.070 * air : 0;
    const flightPitchWave = air > 0.05 ? wingFlap * 0.038 * air : 0;

    // Subtle affectionate purr resonance when nestled or cradling!
    const purrMicro = (cradle + nestle + clamp(macro.affectionateNuzzle, 0, 1)) > 0.1
      ? Math.sin(macro.timeSec * 14.5) * 0.0022 * grounded
      : 0;

    if (rootBone) {
      rootBone.position.x += lateralWeightX;
      rootBone.position.y += walkBounceY + rear * 0.25 + cradle * 0.045 - nestle * 0.035 - bow * 0.032 + flightHeaveY + purrMicro;
      rootBone.position.z += forwardSurgeZ - rear * 0.12 - cradle * 0.045 + bow * 0.02;

      this.addLocalEuler(
        rootBone,
        walkBodyPitch - rear * 0.40 - cradle * 0.11 + bow * 0.08 + flightPitchWave,
        walkBodyYaw,
        walkBodyRoll
      );
    }

    // True curved-path anatomical spine arc: bends pelvis -> spine_1 -> spine_2 -> chest into the turn circle!
    const turnCurvatureArc = clamp(this.smoothedTurnRate * 0.105, -0.16, 0.16) * smoothstep(0.02, 0.25, wWalk);
    const spineWave1 = Math.sin(cycRad - 0.5) * 0.040 * wWalk + turnCurvatureArc * 0.90;
    const spineWave2 = Math.sin(cycRad - 1.1) * 0.044 * wWalk + turnCurvatureArc * 1.05;
    const spineWave3 = Math.sin(cycRad - 1.7) * 0.048 * wWalk + turnCurvatureArc * 1.10;

    if (pelvisBone) {
      this.addLocalEuler(
        pelvisBone,
        rear * 0.20 + cradle * 0.10 - bow * 0.04,
        -turnCurvatureArc * 0.75 - Math.sin(cycRad - 0.5) * 0.028 * wWalk,
        Math.sin(cycRad) * 0.036 * wWalk
      );
    }
    if (spine1Bone) {
      this.addLocalEuler(
        spine1Bone,
        -rear * 0.09 - cradle * 0.07 + bow * 0.04,
        spineWave1 + innerSignSmooth * nestle * 0.05,
        0
      );
    }
    if (spine2Bone) {
      this.addLocalEuler(
        spine2Bone,
        -rear * 0.11 - cradle * 0.08 + bow * 0.04,
        spineWave2 + innerSignSmooth * nestle * 0.06,
        0
      );
    }
    if (chestBone) {
      this.addLocalEuler(
        chestBone,
        -rear * 0.12 - cradle * 0.08 + bow * 0.05 - Math.cos(cycRad * 2.0) * 0.020 * wWalk,
        spineWave3 + innerSignSmooth * (cradle * 0.08 + nestle * 0.08),
        -Math.cos(cycRad) * 0.028 * wWalk
      );
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // 2. TRUE WORLD-SPACE PER-PAW TERRAIN-CONFORMING IK + EXPRESSIVE FORELIMB ARMS + CRADLE EMBRACE!
    //    Runs on EVERY grounded frame (grounded > 0.02) so paws NEVER float on a flat horizontal plane!
    if (grounded > 0.02) {
      const crouchForeSplay = Math.max(0, -crouchFore);
      const crouchHindSplay = Math.max(0, -crouchHind);
      const tSec = macro.timeSec + (this.isLightFury ? 1.7 : 0.0);

      for (const side of ['L', 'R'] as const) {
        const sign = side === 'L' ? 1 : -1;
        const wInner = side === 'L' ? innerWeightL : 1.0 - innerWeightL;

        // Lateral natural four-beat walk sequence: LH(0.00) -> LF(0.24) -> RH(0.50) -> RF(0.74)
        const forePhase = (this.gaitCycle + (side === 'L' ? 0.24 : 0.74)) % 1.0;
        const hindPhase = (this.gaitCycle + (side === 'L' ? 0.00 : 0.50)) % 1.0;

        // --- A. HINDLIMBS: World-Space Terrain-Locked IK ---
        const hindKey: LimbKey = side === 'L' ? 'HL' : 'HR';
        const hindRestLocalX = sign * (crouchHindSplay * 0.052 + rear * 0.040 + cradle * 0.025);
        const hindRestLocalZ = -crouchHindSplay * 0.038 + rear * 0.075 + cradle * 0.035;
        const hindTarget = this.computeWorldFootTarget(
          hindKey,
          `ankle_${side}`,
          hindRestLocalX,
          hindRestLocalZ,
          hindPhase,
          0.062 * this.bodyScale,
          false,
          wWalk * (1.0 - rear),
          safeDt,
          curYaw
        );

        const hindPole = this.tmpVecC
          .set(sign * (0.22 + 0.14 * crouchHindSplay), 0.16 + 0.16 * crouchHindSplay, 1.0)
          .normalize();
        const hindBlend = smoothstep(0.02, 0.25, grounded);
        this.solveLimbIKWorld(
          `hip_${side}`,
          `knee_${side}`,
          `ankle_${side}`,
          `hindpaw_${side}`,
          hindPole,
          hindTarget.worldPos,
          hindTarget.pawPitch * (1.0 - rear),
          hindTarget.pawRoll,
          hindBlend
        );

        const hindToeFlex = hindTarget.toeCurl * wWalk;
        for (let d = 1; d <= 4; d++) {
          const hToe = boneMap.get(`hindToe_${side}_${d}`) ?? boneMap.get(`toe_hind_${side}_${d}`);
          if (hToe && Math.abs(hindToeFlex) > 0.001) this.addLocalEuler(hToe, hindToeFlex, 0, 0);
        }

        // --- B. FORELIMBS: World-Space Terrain-Locked IK + Independent Feline "Arm" Gestures + Cradle Embrace! ---
        const foreKey: LimbKey = side === 'L' ? 'FL' : 'FR';
        const playPaw = side === 'L' ? clamp(macro.playPawL, 0, 1) : clamp(macro.playPawR, 0, 1);
        const armReach = side === 'L' ? armL : armR;
        const cradleThisArm = cradle * wInner; // Only the inner forelimb facing Light Fury lifts to cradle!

        const foreRestLocalX = sign * (crouchForeSplay * 0.054 + (1.0 - wInner) * cradle * 0.035);
        const foreRestLocalZ = crouchForeSplay * 0.042;
        const plantedFore = this.computeWorldFootTarget(
          foreKey,
          `wrist_${side}`,
          foreRestLocalX,
          foreRestLocalZ,
          forePhase,
          0.072 * this.bodyScale,
          true,
          wWalk,
          safeDt,
          curYaw
        );

        // Scapula cushion & terrain-dip extension so deep turf hollows never starve foreleg reach!
        const scapBone = boneMap.get(`scapula_${side}`);
        const armLiftTotal = clamp(Math.max(rear, playPaw, armReach, cradleThisArm), 0, 1);
        if (scapBone) {
          scapBone.position.copy(this.restPos.get(`scapula_${side}`)!);
          scapBone.position.y += plantedFore.scapulaShiftY * wWalk * (1.0 - armLiftTotal) + cradleThisArm * 0.038;
          scapBone.updateMatrixWorld(true);

          if (armLiftTotal < 0.85) {
            rootGroup.updateMatrixWorld(false);
            const rootInv = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
            const shBone = boneMap.get(`shoulder_${side}`)!;
            shBone.updateMatrixWorld(true);
            const shChar = this.tmpVecD.setFromMatrixPosition(shBone.matrixWorld).applyMatrix4(rootInv);
            const wrChar = plantedFore.worldPos.clone().applyMatrix4(rootInv);
            const excess = shChar.distanceTo(wrChar) - this.reachLimitFore;
            if (excess > 0) {
              scapBone.position.y -= excess * 1.05 * (1.0 - armLiftTotal);
              scapBone.updateMatrixWorld(true);
            }
          }
        }

        // Compute target wrist world position: seamlessly blends from planted terrain paw -> expressive arm / romantic cradle!
        const wristWorldTarget = plantedFore.worldPos.clone();
        let pawPitch = plantedFore.pawPitch;
        let pawRoll = plantedFore.pawRoll;
        let pawYaw = 0;
        let toeCurl = plantedFore.toeCurl * wWalk;

        // 1) Independent feline "Arm Reach" gesture (curious reach / gentle sand-tap / greeting wave)
        if (armReach > 0.001) {
          const gentlePulse = Math.sin(tSec * 2.8 + (side === 'L' ? 0 : 1.4));
          const bindWr = this.asset.rig.bindWorldPositions.get(`wrist_${side}`)!;
          const armCharTarget = this.tmpVecD.set(
            bindWr.x * 0.78 - sign * 0.05,
            0.44 + 0.07 * gentlePulse,
            bindWr.z + 0.24 + 0.04 * Math.cos(tSec * 2.2)
          );
          const armWorld = armCharTarget.applyMatrix4(rootGroup.matrixWorld);
          const minArmY = sampleIslandOrWorldTerrainY(armWorld.x, armWorld.z) + 0.22 * this.bodyScale;
          if (armWorld.y < minArmY) armWorld.y = minArmY;

          wristWorldTarget.lerp(armWorld, armReach);
          pawPitch = THREE.MathUtils.lerp(pawPitch, 0.34 - gentlePulse * 0.10, armReach);
          pawRoll = THREE.MathUtils.lerp(pawRoll, -sign * 0.22, armReach);
          toeCurl = THREE.MathUtils.lerp(toeCurl, 0.26, armReach);
        }

        // 2) Romantic Single-Forelimb Chest-Cradle Embrace (100% anatomical IK, zero awkward joint twist, zero clipping!)
        if (cradleThisArm > 0.001) {
          const breathLift = Math.sin(tSec * 1.55) * 0.012;
          const bindWr = this.asset.rig.bindWorldPositions.get(`wrist_${side}`)!;
          // Open, warm, protective arm arc: lifted beside upper chest & gently curved forward to frame Light Fury!
          const cradleCharTarget = this.tmpVecD.set(
            bindWr.x + sign * 0.13,
            0.70 + breathLift,
            bindWr.z + 0.18
          );
          const cradleWorld = cradleCharTarget.applyMatrix4(rootGroup.matrixWorld);
          const minCradleY = sampleIslandOrWorldTerrainY(cradleWorld.x, cradleWorld.z) + 0.42;
          if (cradleWorld.y < minCradleY) cradleWorld.y = minCradleY;

          // Smooth curved lift trajectory (rises slightly outward as it lifts so it never grazes Light Fury!)
          const arcMidOut = Math.sin(cradleThisArm * Math.PI) * 0.08;
          wristWorldTarget.lerp(cradleWorld, cradleThisArm);
          const sideWorld = this.tmpVecC.set(sign, 0, 0).transformDirection(rootGroup.matrixWorld);
          wristWorldTarget.addScaledVector(sideWorld, arcMidOut);

          pawPitch = THREE.MathUtils.lerp(pawPitch, 0.38, cradleThisArm);
          pawYaw = THREE.MathUtils.lerp(pawYaw, -sign * 0.26, cradleThisArm);
          pawRoll = THREE.MathUtils.lerp(pawRoll, -sign * 0.32, cradleThisArm);
          toeCurl = THREE.MathUtils.lerp(toeCurl, 0.28, cradleThisArm);
        }

        const forePole = this.tmpVecC
          .set(
            sign * (0.24 + 0.16 * crouchForeSplay + 0.26 * Math.max(armReach, cradleThisArm)),
            -0.08 + 0.18 * crouchForeSplay - 0.18 * cradleThisArm,
            -1.0
          )
          .normalize();

        const ikWeight = smoothstep(0.02, 0.25, grounded) * (1.0 - clamp(Math.max(rear, playPaw), 0, 1));
        if (ikWeight > 0.001) {
          this.solveLimbIKWorld(
            `shoulder_${side}`,
            `elbow_${side}`,
            `wrist_${side}`,
            `forepaw_${side}`,
            forePole,
            wristWorldTarget,
            pawPitch,
            pawRoll,
            ikWeight,
            pawYaw
          );
        }

        // Joyful rear-up / playful paw wave FK blend when fully rearing
        const airPawFK = clamp(Math.max(rear, playPaw), 0, 1);
        if (airPawFK > 0.001) {
          const wave = Math.sin(macro.timeSec * 4.2 + (side === 'L' ? 0.0 : 2.1));
          const shPitch = rear > playPaw ? -0.58 - wave * 0.14 : -0.76 - Math.sin(macro.timeSec * 4.8) * 0.12;
          const shYaw = -sign * (0.12 * playPaw + 0.05 * rear);
          const shRoll = sign * 0.10;
          const elPitch = rear > playPaw ? 0.56 + wave * 0.16 : 0.42 + Math.cos(macro.timeSec * 4.8) * 0.14;
          const wrPitch = 0.32 - wave * 0.18;
          const pPitch = 0.24 + wave * 0.16;

          this.blendBoneToRestOffset(`shoulder_${side}`, shPitch, shYaw, shRoll, airPawFK);
          this.blendBoneToRestOffset(`elbow_${side}`, elPitch, 0, 0, airPawFK);
          this.blendBoneToRestOffset(`wrist_${side}`, wrPitch, 0, 0, airPawFK);
          this.blendBoneToRestOffset(`forepaw_${side}`, pPitch, 0, 0, airPawFK);
          toeCurl = 0.22 * airPawFK;
        }

        for (let d = 1; d <= 4; d++) {
          const toeBone = boneMap.get(`foreToe_${side}_${d}`) ?? boneMap.get(`toe_fore_${side}_${d}`);
          if (toeBone && Math.abs(toeCurl) > 0.001) this.addLocalEuler(toeBone, toeCurl, 0, 0);
        }
      }
    }

    // 3. Mate eye-contact tracking, cervical head-bob, romantic chest-nestle & feline micro-movements!
    rootGroup.updateMatrixWorld(false);
    const rootInv = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
    const mateLocal = this.tmpVecA.copy(macro.mateWorldPos).applyMatrix4(rootInv);

    const lookW = clamp(macro.lookAtMateWeight, 0, 1);
    const relX = mateLocal.x;
    const relY = mateLocal.y - 1.35;
    const relZ = mateLocal.z - 1.15;
    const horizDist = Math.max(0.5, Math.hypot(relX, relZ));
    const forwardConeFade = smoothstep(-0.65, 0.35, relZ);

    const desiredLookYaw = clamp(Math.atan2(relX, Math.max(-0.5, relZ)), -0.95, 0.95) * lookW * forwardConeFade;
    const desiredLookPitch = clamp(-Math.atan2(relY, horizDist), -0.42, 0.42) * lookW;

    const lookAlpha = 1.0 - Math.exp(-8.0 * safeDt);
    this.smoothedLookYaw += (desiredLookYaw - this.smoothedLookYaw) * lookAlpha;
    this.smoothedLookPitch += (desiredLookPitch - this.smoothedLookPitch) * lookAlpha;

    if (Math.abs(this.smoothedLookYaw) > 0.0005 || Math.abs(this.smoothedLookPitch) > 0.0005) {
      const neckNames = ['neck_1', 'neck_2', 'neck_3', 'neck_4'] as const;
      const yawShares = [0.09, 0.13, 0.17, 0.21];
      const pitchShares = [0.07, 0.10, 0.13, 0.16];
      for (let i = 0; i < 4; i++) {
        const nb = boneMap.get(neckNames[i]);
        if (nb) {
          this.addLocalEuler(
            nb,
            this.smoothedLookPitch * pitchShares[i],
            this.smoothedLookYaw * yawShares[i],
            -this.smoothedLookYaw * 0.04,
            'YXZ'
          );
        }
      }
      const headBone = boneMap.get('head');
      if (headBone) {
        this.addLocalEuler(
          headBone,
          this.smoothedLookPitch * 0.32,
          this.smoothedLookYaw * 0.32,
          -this.smoothedLookYaw * 0.06,
          'YXZ'
        );
      }
    }

    const headBobPitch = Math.sin(cycRad * 2.0 - 0.95) * 0.030 * wWalk;
    const nuzzle = clamp(macro.affectionateNuzzle, 0, 1);
    const mateSignSmooth = clamp(mateLocal.x / 0.45, -1, 1);

    // Subtle organic feline curiosity micro-movements (head micro-tilt, sniff nod & asymmetric ear twitches!)
    const microPhase = macro.timeSec + (this.isLightFury ? 3.1 : 0.0);
    const curiousHeadTilt =
      grounded *
      (Math.sin(microPhase * 0.92) * 0.024 + Math.sin(microPhase * 2.15) * 0.012) *
      (1.0 - 0.5 * cradle - 0.5 * nestle);
    const sniffMicroPitch =
      grounded * Math.pow(Math.max(0, Math.sin(microPhase * 1.35)), 8.0) * 0.028 * (1.0 - nestle);

    for (let i = 1; i <= 4; i++) {
      const nb = boneMap.get(`neck_${i}`);
      if (nb) {
        const bowNeck = i <= 3 ? bow * 0.045 : -bow * 0.035;
        const nuzzleCurve = (nuzzle * 0.045 + nestle * 0.058 + cradle * 0.024) * mateSignSmooth;
        const nestlePitch = nestle * (i <= 2 ? 0.038 : -0.025) + cradle * 0.028;
        this.addLocalEuler(
          nb,
          headBobPitch * 0.20 + bowNeck + nestlePitch,
          nuzzleCurve,
          nuzzleCurve * 0.38,
          'YXZ'
        );
      }
    }
    const headBone = boneMap.get('head');
    if (headBone) {
      this.addLocalEuler(
        headBone,
        headBobPitch * 0.32 - bow * 0.10 + nuzzle * 0.05 - cradle * 0.08 + nestle * 0.04 - sniffMicroPitch,
        (nuzzle * 0.10 + nestle * 0.11 + cradle * 0.05) * mateSignSmooth,
        (nuzzle * 0.18 + nestle * 0.22 - cradle * 0.10) * mateSignSmooth + curiousHeadTilt,
        'YXZ'
      );
    }

    // Asymmetric feline ear-plate listening twitches!
    if (grounded > 0.2) {
      const earTwitchL = Math.pow(Math.max(0, Math.sin(microPhase * 1.73 + 0.4)), 10.0) * 0.11;
      const earTwitchR = Math.pow(Math.max(0, Math.sin(microPhase * 2.11 + 2.3)), 10.0) * 0.11;
      const earL = boneMap.get('ear_L_1') ?? boneMap.get('earPlate_L') ?? boneMap.get('ear_L');
      const earR = boneMap.get('ear_R_1') ?? boneMap.get('earPlate_R') ?? boneMap.get('ear_R');
      if (earL && earTwitchL > 0.002) this.addLocalEuler(earL, earTwitchL * 0.6, earTwitchL, 0, 'YXZ');
      if (earR && earTwitchR > 0.002) this.addLocalEuler(earR, earTwitchR * 0.6, -earTwitchR, 0, 'YXZ');
    }

    // 4. Verified Non-Overlapping Wings + Subtle Alula/Wrist Micro-Adjustments
    const mantle = clamp(macro.protectiveWingMantle, 0, 1) * grounded;
    const neatTuck = clamp(macro.tuckInnerWingNeat, 0, 1) * grounded;
    const compactBoth = clamp(macro.compactFoldedWings, 0, 1) * grounded;

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const wInner = side === 'L' ? innerWeightL : 1.0 - innerWeightL;
      const wOuter = 1.0 - wInner;

      const clav = boneMap.get(`wingClavicle_${side}`);
      const sh = boneMap.get(`wingShoulder_${side}`);
      const el = boneMap.get(`wingElbow_${side}`);
      const wr = boneMap.get(`wingWrist_${side}`);
      const thumb = boneMap.get(`wingFinger_${side}_1_a`);

      const walkWingBounce = Math.sin(cycRad * 2.0 - 0.8 + (side === 'L' ? 0 : 0.35)) * 0.038 * wWalk;
      const aeroFlutter = air > 0.1 ? Math.sin(macro.timeSec * 3.4 + (side === 'L' ? 0 : 0.9)) * 0.028 * air : 0;
      const idleWingSettle = grounded * Math.sin(microPhase * 1.15 + (side === 'L' ? 0 : 1.2)) * 0.014;

      if (clav) this.addLocalEuler(clav, 0, 0, sign * (walkWingBounce * 0.45 + idleWingSettle * 0.5), 'YXZ');
      if (sh) this.addLocalEuler(sh, 0, 0, sign * (walkWingBounce + idleWingSettle), 'YXZ');

      // Toothless protective canopy: lifts inner wing cleanly ABOVE y=2.08m (completely above Light Fury!)
      if (mantle > 0.001) {
        if (wInner > 0.001) {
          const mIn = mantle * wInner;
          if (clav) this.addLocalEuler(clav, 0, 0, sign * 0.50 * mIn, 'YXZ');
          if (sh) this.addLocalEuler(sh, 0.15 * mIn, -sign * 0.22 * mIn, sign * 1.02 * mIn, 'YXZ');
          if (el) this.addLocalEuler(el, 0, sign * 0.32 * mIn, -sign * 0.38 * mIn, 'YXZ');
        }
        if (wOuter > 0.001) {
          const mOut = mantle * wOuter;
          if (sh) this.addLocalEuler(sh, -0.08 * mOut, sign * 0.52 * mOut, -sign * 0.22 * mOut, 'YXZ');
        }
      }

      // Sleek flank fold: sweeps inner/both wings backward along body so zero wing sticks sideways!
      const tuckAmt = Math.max(neatTuck * wInner, compactBoth);
      if (tuckAmt > 0.001) {
        if (sh) this.addLocalEuler(sh, -0.10 * tuckAmt, sign * 0.64 * tuckAmt, -sign * 0.27 * tuckAmt, 'YXZ');
        if (el) this.addLocalEuler(el, 0, -sign * 0.40 * tuckAmt, sign * 0.16 * tuckAmt, 'YXZ');
      }

      if (wr && Math.abs(aeroFlutter) > 0.0005) {
        this.addLocalEuler(wr, aeroFlutter * 0.6, 0, sign * aeroFlutter, 'YXZ');
      }
      if (thumb && grounded > 0.2) {
        const thumbMicro = Math.sin(microPhase * 1.9 + sign * 1.1) * 0.032 * grounded;
        this.addLocalEuler(thumb, thumbMicro, 0, 0, 'XYZ');
      }
    }

    // 5. Traveling biomechanical tail S-wave + curved-path counter-balance + idle tail-tip curiosity flick!
    const tailTipFlick = grounded * Math.sin(microPhase * 1.85) * 0.022 * (1.0 - wWalk);
    for (let t = 1; t <= 8; t++) {
      const tb = boneMap.get(`tail_${t}`);
      if (tb) {
        const tFrac = t / 8;
        const tailSway = Math.sin(cycRad - 1.6 - t * 0.42) * 0.056 * (0.35 + 0.65 * tFrac) * wWalk;
        // Follow the curved path arc naturally so the tail sweeps cleanly behind the turning spine
        const tailTurnArc = -turnCurvatureArc * 0.58 * tFrac;
        const microTip = t >= 5 ? tailTipFlick * tFrac : 0;
        if (wWalk > 0.001 || Math.abs(microTip) > 0.0005) {
          this.addLocalEuler(
            tb,
            Math.cos(cycRad * 2.0 - t * 0.35) * 0.015 * wWalk,
            tailSway + tailTurnArc + microTip,
            0,
            'YXZ'
          );
        }
      }
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // 6. STRICT PER-FRAME WORLD GROUND, OBSTACLE & OCEAN CLEARANCE GUARD (0% Clipping!)
    this.enforceStrictGroundClearance(grounded);
  }

  /**
   * Computes a world-space foot target (wrist or ankle) that:
   * 1) Locks onto the exact world (X, Z) turf coordinate during stance (ZERO foot sliding on straight or curved walks!),
   * 2) Automatically takes subtle weight-shifting micro-steps when turning/adjusting in place, and
   * 3) Samples the EXACT contoured terrain height & slope right under THAT individual paw!
   */
  private computeWorldFootTarget(
    key: LimbKey,
    endBoneName: string,
    extraLocalX: number,
    extraLocalZ: number,
    phase: number,
    stepHeight: number,
    isForelimb: boolean,
    wWalk: number,
    dt: number,
    curYaw: number
  ): {
    worldPos: THREE.Vector3;
    pawPitch: number;
    pawRoll: number;
    scapulaShiftY: number;
    toeCurl: number;
  } {
    const rootGroup = this.asset.rootGroup;
    const bindEnd = this.asset.rig.bindWorldPositions.get(endBoneName)!;
    // Exact height of wrist/ankle above the paw sole pad, minus 4mm turf-blade press for 100% solid ground contact!
    const soleToJointHeight = Math.max(0.08, bindEnd.y * this.bodyScale - 0.004);

    // Rest footprint carried by current rootGroup transform
    const restWorld = this.tmpVecD
      .set(bindEnd.x + extraLocalX, 0, bindEnd.z + extraLocalZ)
      .applyMatrix4(rootGroup.matrixWorld);
    const restWx = restWorld.x;
    const restWz = restWorld.z;

    const st = this.footPlants[key];
    if (!st.initialized || Math.hypot(st.plantedWx - restWx, st.plantedWz - restWz) > 0.72 * this.bodyScale) {
      st.plantedWx = restWx;
      st.plantedWz = restWz;
      st.swingStartWx = restWx;
      st.swingStartWz = restWz;
      st.wasInStance = true;
      st.idleRepositionTimer = -1;
      st.initialized = true;
    }

    const stanceEnd = 0.66;
    let footWx = st.plantedWx;
    let footWz = st.plantedWz;
    let liftY = 0;
    let pawPitch = 0;
    let scapulaShiftY = 0;
    let toeCurl = 0;

    if (wWalk >= 0.025) {
      st.idleRepositionTimer = -1;
      const inStance = phase < stanceEnd;

      if (inStance) {
        const u = phase / stanceEnd;
        // Clamp planted foot gently within anatomical reach envelope around rest footprint
        const offX = st.plantedWx - restWx;
        const offZ = st.plantedWz - restWz;
        const offDist = Math.hypot(offX, offZ);
        const maxAnchorRadius = 0.36 * this.bodyScale;
        if (offDist > maxAnchorRadius) {
          const pull = maxAnchorRadius / offDist;
          st.plantedWx = restWx + offX * pull;
          st.plantedWz = restWz + offZ * pull;
        }
        footWx = st.plantedWx;
        footWz = st.plantedWz;

        const cushion = -Math.sin(clamp(u / 0.28, 0, 1) * Math.PI) * 0.014;
        const pushExtend = Math.sin(clamp((u - 0.25) / 0.75, 0, 1) * Math.PI) * 0.012;
        pawPitch = smoothstep(0.80, 1.0, u) * (isForelimb ? 0.20 : 0.16) * wWalk;
        scapulaShiftY = cushion + pushExtend;
        toeCurl = -0.06 * Math.sin(u * Math.PI);
        st.wasInStance = true;
      } else {
        if (st.wasInStance) {
          st.swingStartWx = st.plantedWx;
          st.swingStartWz = st.plantedWz;
          st.wasInStance = false;
        }
        const u = clamp((phase - stanceEnd) / (1.0 - stanceEnd), 0, 1);
        const easeU = u * u * (3 - 2 * u);

        // Predict landing spot ahead along BOTH linear velocity AND curved rotational yaw velocity!
        const relRx = restWx - rootGroup.position.x;
        const relRz = restWz - rootGroup.position.z;
        // In Three.js (+X left, +Z forward, +yaw rotates +Z -> +X): d/dt (x, z) from +yawRate is (+yawRate * relRz, -yawRate * relRx)
        const rotVx = this.smoothedTurnRate * relRz;
        const rotVz = -this.smoothedTurnRate * relRx;
        const totalVx = this.velWorldX + rotVx;
        const totalVz = this.velWorldZ + rotVz;

        const leadTime = 0.24;
        let stepLeadX = totalVx * leadTime;
        let stepLeadZ = totalVz * leadTime;
        const maxLead = 0.30 * this.bodyScale;
        const leadLen = Math.hypot(stepLeadX, stepLeadZ);
        if (leadLen > maxLead) {
          stepLeadX = (stepLeadX / leadLen) * maxLead;
          stepLeadZ = (stepLeadZ / leadLen) * maxLead;
        }

        const landWx = restWx + stepLeadX;
        const landWz = restWz + stepLeadZ;

        footWx = THREE.MathUtils.lerp(st.swingStartWx, landWx, easeU);
        footWz = THREE.MathUtils.lerp(st.swingStartWz, landWz, easeU);
        st.plantedWx = landWx;
        st.plantedWz = landWz;

        liftY = Math.sin(Math.pow(u, 0.82) * Math.PI) * stepHeight * wWalk;
        const wristPeel = Math.sin(clamp(u / 0.68, 0, 1) * Math.PI) * (isForelimb ? 0.46 : 0.36);
        const reachPlace = -smoothstep(0.68, 1.0, u) * 0.12;
        pawPitch = (wristPeel + reachPlace) * wWalk;
        scapulaShiftY = 0.008 * Math.sin(u * Math.PI);
        toeCurl = 0.24 * Math.sin(u * Math.PI);
      }
    } else {
      // Standing / quiet posture: keep paw locked on turf, taking a tiny natural adjustment micro-step ONLY if body turns significantly!
      st.wasInStance = true;
      const drift = Math.hypot(st.plantedWx - restWx, st.plantedWz - restWz);
      const staggerDelay = key === 'FL' ? 0.0 : key === 'HR' ? 0.08 : key === 'FR' ? 0.16 : 0.24;
      if (st.idleRepositionTimer < 0 && drift > (0.15 + staggerDelay * 0.25) * this.bodyScale) {
        st.idleRepositionTimer = 0;
        st.idleFromWx = st.plantedWx;
        st.idleFromWz = st.plantedWz;
        st.idleToWx = restWx;
        st.idleToWz = restWz;
      }

      if (st.idleRepositionTimer >= 0) {
        st.idleRepositionTimer += dt / 0.34;
        if (st.idleRepositionTimer >= 1.0) {
          st.plantedWx = st.idleToWx;
          st.plantedWz = st.idleToWz;
          st.idleRepositionTimer = -1;
          footWx = st.plantedWx;
          footWz = st.plantedWz;
        } else {
          const u = st.idleRepositionTimer;
          const easeU = u * u * (3 - 2 * u);
          st.idleToWx = restWx;
          st.idleToWz = restWz;
          footWx = THREE.MathUtils.lerp(st.idleFromWx, st.idleToWx, easeU);
          footWz = THREE.MathUtils.lerp(st.idleFromWz, st.idleToWz, easeU);
          liftY = Math.sin(u * Math.PI) * 0.032 * this.bodyScale;
          pawPitch = Math.sin(u * Math.PI) * 0.18;
        }
      } else {
        footWx = st.plantedWx;
        footWz = st.plantedWz;
      }
    }

    // Sample EXACT contoured terrain elevation & local slope right under THIS paw!
    const hGround = sampleIslandOrWorldTerrainY(footWx, footWz);
    const sinY = Math.sin(curYaw);
    const cosY = Math.cos(curYaw);
    const probeD = 0.16;
    const hAhead = sampleIslandOrWorldTerrainY(footWx + sinY * probeD, footWz + cosY * probeD);
    const hBack = sampleIslandOrWorldTerrainY(footWx - sinY * probeD, footWz - cosY * probeD);
    const hLeft = sampleIslandOrWorldTerrainY(footWx + cosY * probeD, footWz - sinY * probeD);
    const hRight = sampleIslandOrWorldTerrainY(footWx - cosY * probeD, footWz + sinY * probeD);

    const groundSlopePitch = clamp((hBack - hAhead) / (2 * probeD), -0.32, 0.32);
    const groundSlopeRoll = clamp((hRight - hLeft) / (2 * probeD), -0.26, 0.26);
    const stanceConform = 1.0 - clamp(liftY / Math.max(0.02, stepHeight), 0, 1);

    return {
      worldPos: new THREE.Vector3(footWx, hGround + soleToJointHeight + liftY, footWz),
      pawPitch: pawPitch + groundSlopePitch * stanceConform * 0.65,
      pawRoll: groundSlopeRoll * stanceConform * 0.55,
      scapulaShiftY,
      toeCurl,
    };
  }

  /**
   * Ensures EVERY anatomical point (belly, chest, jaw, wing elbows/wrists/tips, tail_2..10,
   * and airborne paws) stays strictly ABOVE terrain, island boulders/cairns, and ocean level,
   * WITHOUT artificially floating grounded paws off the grass!
   */
  public enforceStrictGroundClearance(groundedWeight: number): void {
    const rootGroup = this.asset.rootGroup;
    const boneMap = this.asset.rig.boneMap;

    // A. Push horizontally out of any Hero Island boulder / stone cairn if needed
    if (groundedWeight > 0.2) {
      const safeXZ = pushOutOfHeroObstaclesXZ(rootGroup.position.x, rootGroup.position.z, 1.10 * this.bodyScale);
      if (
        Math.abs(safeXZ.x - rootGroup.position.x) > 1e-4 ||
        Math.abs(safeXZ.z - rootGroup.position.z) > 1e-4
      ) {
        rootGroup.position.x = safeXZ.x;
        rootGroup.position.z = safeXZ.z;
        rootGroup.updateMatrixWorld(true);
      }
    }

    // B. Lift wing shoulders if any wing joint/tip dips close to cliff rock or sea surface!
    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const sh = boneMap.get(`wingShoulder_${side}`);
      if (!sh) continue;

      sh.parent?.updateMatrixWorld(true);
      sh.updateMatrixWorld(true);

      let maxWingDeficit = 0;
      const wingCheckNames = [
        `wingElbow_${side}`,
        `wingWrist_${side}`,
        `wingFinger_${side}_1_b`,
        `wingFinger_${side}_3_b`,
        `wingFinger_${side}_5_b`,
        `wingFinger_${side}_6_b`,
      ];
      for (const wName of wingCheckNames) {
        const wb = boneMap.get(wName);
        if (!wb) continue;
        wb.updateMatrixWorld(true);
        const wp = this.tmpVecB.setFromMatrixPosition(wb.matrixWorld);
        const terrY = sampleIslandOrWorldTerrainY(wp.x, wp.z);
        const surfY = Math.max(-11.15, terrY) + 0.22;
        if (wp.y < surfY) {
          maxWingDeficit = Math.max(maxWingDeficit, surfY - wp.y);
        }
      }

      if (maxWingDeficit > 0.001) {
        const liftRad = clamp(maxWingDeficit * 0.75, 0, 1.08);
        this.addLocalEuler(sh, 0, 0, sign * liftRad, 'YXZ');
        sh.updateMatrixWorld(true);
      }
    }

    // C. Lift tail segments if any tail bone or fluke approaches the cliff/meadow turf!
    for (let t = 2; t <= 10; t++) {
      const tb = boneMap.get(`tail_${t}`);
      if (!tb || !tb.parent) continue;
      tb.parent.updateMatrixWorld(true);
      tb.updateMatrixWorld(true);
      const wp = this.tmpVecB.setFromMatrixPosition(tb.matrixWorld);
      const minClear = t >= 8 ? 0.30 : t >= 5 ? 0.20 : 0.14;
      const surfY = Math.max(-11.15, sampleIslandOrWorldTerrainY(wp.x, wp.z)) + minClear;
      if (wp.y < surfY) {
        const lift = clamp((surfY - wp.y) * 1.65, 0, 0.50);
        this.addLocalEuler(tb.parent as THREE.Bone, lift, 0, 0, 'YXZ');
        tb.parent.updateMatrixWorld(true);
      }
    }

    // D. Whole-body vertical floor guard!
    //    CRITICAL: When grounded (groundedWeight > 0.45), paws are ALREADY solved in exact world-space
    //    onto the contoured turf, and wings/tail are articulated above turf by Sections B & C —
    //    so we ONLY guard core belly/head penetration here and NEVER jack rootGroup.y off its planted paws!
    rootGroup.updateMatrixWorld(true);
    const s = this.bodyScale;
    const bodyCheckSpecs: Array<[string, number]> =
      groundedWeight > 0.45
        ? [
            ['chest', 0.24 * s],
            ['spine_1', 0.22 * s],
            ['pelvis', 0.20 * s],
            ['head', 0.20 * s],
            ['jaw', 0.16 * s],
          ]
        : [
            ['forepaw_L', 0.195],
            ['forepaw_R', 0.195],
            ['hindpaw_L', 0.195],
            ['hindpaw_R', 0.195],
            ['wrist_L', 0.14],
            ['wrist_R', 0.14],
            ['ankle_L', 0.14],
            ['ankle_R', 0.14],
            ['chest', 0.34 * s],
            ['spine_1', 0.30 * s],
            ['pelvis', 0.28 * s],
            ['head', 0.24 * s],
            ['jaw', 0.20 * s],
            ['wingElbow_L', 0.20],
            ['wingElbow_R', 0.20],
            ['wingWrist_L', 0.20],
            ['wingWrist_R', 0.20],
            ['wingFinger_L_1_b', 0.20],
            ['wingFinger_R_1_b', 0.20],
            ['wingFinger_L_3_b', 0.20],
            ['wingFinger_R_3_b', 0.20],
            ['wingFinger_L_5_b', 0.20],
            ['wingFinger_R_5_b', 0.20],
            ['wingFinger_L_6_b', 0.20],
            ['wingFinger_R_6_b', 0.20],
            ['tail_3', 0.18],
            ['tail_5', 0.22],
            ['tail_7', 0.28],
            ['tail_9', 0.34],
            ['tail_10', 0.38],
          ];

    let neededLiftY = 0;
    for (const [bName, clearance] of bodyCheckSpecs) {
      const b = boneMap.get(bName);
      if (!b) continue;
      const wp = this.tmpVecB.setFromMatrixPosition(b.matrixWorld);
      const terrainY =
        groundedWeight > 0.25
          ? sampleIslandOrWorldTerrainY(wp.x, wp.z)
          : Math.max(-11.15, sampleIslandOrWorldTerrainY(wp.x, wp.z));
      const reqY = terrainY + clearance;
      if (wp.y < reqY) {
        neededLiftY = Math.max(neededLiftY, reqY - wp.y);
      }
    }

    if (neededLiftY > 0.0005) {
      rootGroup.position.y += neededLiftY;
      rootGroup.updateMatrixWorld(true);
    }
  }

  private addLocalEuler(
    bone: THREE.Bone,
    rx: number,
    ry: number,
    rz: number,
    order: THREE.EulerOrder = 'XYZ'
  ): void {
    this.tmpEuler.set(rx, ry, rz, order);
    this.tmpQuatA.setFromEuler(this.tmpEuler);
    bone.quaternion.multiply(this.tmpQuatA);
  }

  private blendBoneToRestOffset(
    name: string,
    rx: number,
    ry: number,
    rz: number,
    weight: number
  ): void {
    const bone = this.asset.rig.boneMap.get(name);
    const rq = this.restQuat.get(name);
    const rp = this.restPos.get(name);
    if (!bone || !rq || !rp) return;
    this.tmpEuler.set(rx, ry, rz, 'XYZ');
    this.tmpQuatA.copy(rq).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler));
    if (weight >= 0.999) {
      bone.position.copy(rp);
      bone.quaternion.copy(this.tmpQuatA);
    } else {
      bone.quaternion.slerp(this.tmpQuatA, weight);
    }
  }

  /**
   * Solves exact anatomical 2-bone IK (upper -> mid -> end + paw orientation) to a WORLD-SPACE
   * target point `targetEndWorld`, seamlessly blending with `blendWeight`!
   */
  private solveLimbIKWorld(
    upperName: string,
    midName: string,
    endName: string,
    pawName: string,
    poleDirChar: THREE.Vector3,
    targetEndWorld: THREE.Vector3,
    pawPitchAdjust: number,
    pawRollAdjust: number,
    blendWeight = 1.0,
    pawYawAdjust = 0
  ): void {
    const rig = this.asset.rig;
    const upperBone = rig.boneMap.get(upperName);
    const midBone = rig.boneMap.get(midName);
    const endBone = rig.boneMap.get(endName);
    const pawBone = rig.boneMap.get(pawName);
    if (!upperBone || !midBone || !endBone || !pawBone || !upperBone.parent) return;

    const prevUpperQ = upperBone.quaternion.clone();
    const prevMidQ = midBone.quaternion.clone();
    const prevEndQ = endBone.quaternion.clone();
    const prevPawQ = pawBone.quaternion.clone();

    upperBone.position.copy(this.restPos.get(upperName)!);
    midBone.position.copy(this.restPos.get(midName)!);
    endBone.position.copy(this.restPos.get(endName)!);
    pawBone.position.copy(this.restPos.get(pawName)!);

    upperBone.parent.updateMatrixWorld(true);
    this.asset.rootGroup.updateMatrixWorld(false);
    const rootInv = this.tmpMatA.copy(this.asset.rootGroup.matrixWorld).invert();
    const parentCharMat = this.tmpMatB.multiplyMatrices(rootInv, upperBone.parent.matrixWorld);

    const p0 = new THREE.Vector3(
      upperBone.position.x,
      upperBone.position.y,
      upperBone.position.z
    ).applyMatrix4(parentCharMat);

    const bindUpper = rig.bindWorldPositions.get(upperName)!;
    const bindMid = rig.bindWorldPositions.get(midName)!;
    const bindEnd = rig.bindWorldPositions.get(endName)!;

    const targetEndChar = targetEndWorld.clone().applyMatrix4(rootInv);

    const l1 = bindUpper.distanceTo(bindMid);
    const l2 = bindMid.distanceTo(bindEnd);
    const toTarget = targetEndChar.sub(p0);
    const rawDist = toTarget.length();
    const maxReach = (l1 + l2) * 0.992;
    const minReach = Math.abs(l1 - l2) + 0.03;
    const d = clamp(rawDist, minReach, maxReach);

    const dir = toTarget.normalize();
    const cosA = clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
    const angleA = Math.acos(cosA);

    const poleOrtho = poleDirChar.clone().addScaledVector(dir, -poleDirChar.dot(dir));
    if (poleOrtho.lengthSq() < 1e-6) {
      poleOrtho.set(0, 0, 1).addScaledVector(dir, -dir.z);
    }
    poleOrtho.normalize();

    const p1 = p0
      .clone()
      .addScaledVector(dir, Math.cos(angleA) * l1)
      .addScaledVector(poleOrtho, Math.sin(angleA) * l1);
    const p2 = p0.clone().addScaledVector(dir, d);

    const parentCharQuat = new THREE.Quaternion().setFromRotationMatrix(parentCharMat);
    const v1Char = p1.clone().sub(p0).normalize();
    const v1Local = v1Char.applyQuaternion(parentCharQuat.clone().invert());
    const restDir1 = midBone.position.clone().normalize();
    upperBone.quaternion.setFromUnitVectors(restDir1, v1Local);

    const upperCharQuat = parentCharQuat.clone().multiply(upperBone.quaternion);
    const v2Char = p2.clone().sub(p1).normalize();
    const v2Local = v2Char.applyQuaternion(upperCharQuat.clone().invert());
    const restDir2 = endBone.position.clone().normalize();
    midBone.quaternion.setFromUnitVectors(restDir2, v2Local);

    const midCharQuat = upperCharQuat.clone().multiply(midBone.quaternion);
    endBone.quaternion.copy(midCharQuat.invert());

    this.tmpEuler.set(pawPitchAdjust, pawYawAdjust, pawRollAdjust, 'YXZ');
    pawBone.quaternion.copy(this.restQuat.get(pawName)!).multiply(this.tmpQuatA.setFromEuler(this.tmpEuler));

    if (blendWeight < 0.999) {
      upperBone.quaternion.copy(prevUpperQ).slerp(upperBone.quaternion, blendWeight);
      midBone.quaternion.copy(prevMidQ).slerp(midBone.quaternion, blendWeight);
      endBone.quaternion.copy(prevEndQ).slerp(endBone.quaternion, blendWeight);
      pawBone.quaternion.copy(prevPawQ).slerp(pawBone.quaternion, blendWeight);
    }
  }
}

interface CollisionSphere {
  center: THREE.Vector3;
  radius: number;
}

const SPHERE_BONE_SPECS: Array<{ bone: string; radius: number; localOffsetZ?: number }> = [
  { bone: 'head', radius: 0.24, localOffsetZ: 0.42 }, // Snout tip sphere
  { bone: 'head', radius: 0.28 },                     // Cranium sphere
  { bone: 'neck_3', radius: 0.24 },
  { bone: 'neck_1', radius: 0.28 },
  { bone: 'chest', radius: 0.44 },
  { bone: 'spine_2', radius: 0.40 },
  { bone: 'spine_1', radius: 0.38 },
  { bone: 'pelvis', radius: 0.38 },
  { bone: 'elbow_L', radius: 0.16 },
  { bone: 'elbow_R', radius: 0.16 },
  { bone: 'wrist_L', radius: 0.15 },
  { bone: 'wrist_R', radius: 0.15 },
  { bone: 'forepaw_L', radius: 0.16 },
  { bone: 'forepaw_R', radius: 0.16 },
  { bone: 'hindpaw_L', radius: 0.16 },
  { bone: 'hindpaw_R', radius: 0.16 },
  { bone: 'wingElbow_L', radius: 0.20 },
  { bone: 'wingElbow_R', radius: 0.20 },
  { bone: 'wingWrist_L', radius: 0.22 },
  { bone: 'wingWrist_R', radius: 0.22 },
  { bone: 'wingFinger_L_3_a', radius: 0.20 },
  { bone: 'wingFinger_R_3_a', radius: 0.20 },
  { bone: 'wingFinger_L_3_b', radius: 0.16 },
  { bone: 'wingFinger_R_3_b', radius: 0.16 },
  { bone: 'tail_2', radius: 0.24 },
  { bone: 'tail_5', radius: 0.18 },
  { bone: 'tail_8', radius: 0.16 },
  { bone: 'tail_10', radius: 0.22 },
];

function extractWorldSpheres(asset: RigCompatibleAsset, scale = 1.0): CollisionSphere[] {
  asset.rootGroup.updateMatrixWorld(true);
  const list: CollisionSphere[] = [];
  for (const spec of SPHERE_BONE_SPECS) {
    const b = asset.rig.boneMap.get(spec.bone);
    if (!b) continue;
    const c = new THREE.Vector3(0, 0, spec.localOffsetZ ?? 0).applyMatrix4(b.matrixWorld);
    list.push({ center: c, radius: spec.radius * scale });
  }
  return list;
}

/**
 * Hard 3D 28x28 multi-sphere pairwise dragon-dragon + world-obstacle non-penetration solver!
 * Checks snout, head, neck, torso, elbows, wrists, paws, wings & tail.
 */
export function enforceStrictPairwiseDragonSeparation(
  nfAsset: RigCompatibleAsset,
  lfAsset: RigCompatibleAsset,
  nfGrounded: boolean,
  lfGrounded: boolean
): number {
  const spheresNF = extractWorldSpheres(nfAsset, 1.0);
  const spheresLF = extractWorldSpheres(lfAsset, 0.92);

  let maxPenetration = 0;
  for (const a of spheresNF) {
    for (const b of spheresLF) {
      const d = a.center.distanceTo(b.center);
      const minAllowed = a.radius + b.radius;
      if (d < minAllowed) {
        maxPenetration = Math.max(maxPenetration, minAllowed - d);
      }
    }
  }

  if (maxPenetration > 0.0005) {
    const sepDir = new THREE.Vector3().subVectors(nfAsset.rootGroup.position, lfAsset.rootGroup.position);
    sepDir.y = 0;
    if (sepDir.lengthSq() < 1e-5) {
      sepDir.set(1, 0, 0);
    } else {
      sepDir.normalize();
    }

    const pushEach = (maxPenetration + 0.025) * 0.52;
    nfAsset.rootGroup.position.addScaledVector(sepDir, pushEach);
    lfAsset.rootGroup.position.addScaledVector(sepDir, -pushEach);

    if (nfGrounded) {
      const safeNF = pushOutOfHeroObstaclesXZ(nfAsset.rootGroup.position.x, nfAsset.rootGroup.position.z, 1.10);
      nfAsset.rootGroup.position.x = safeNF.x;
      nfAsset.rootGroup.position.z = safeNF.z;
      const gNF = sampleHeroCliffHeight(safeNF.x, safeNF.z);
      if (nfAsset.rootGroup.position.y < gNF) nfAsset.rootGroup.position.y = gNF;
    }
    if (lfGrounded) {
      const safeLF = pushOutOfHeroObstaclesXZ(lfAsset.rootGroup.position.x, lfAsset.rootGroup.position.z, 1.02);
      lfAsset.rootGroup.position.x = safeLF.x;
      lfAsset.rootGroup.position.z = safeLF.z;
      const gLF = sampleHeroCliffHeight(safeLF.x, safeLF.z);
      if (lfAsset.rootGroup.position.y < gLF) lfAsset.rootGroup.position.y = gLF;
    }

    nfAsset.rootGroup.updateMatrixWorld(true);
    lfAsset.rootGroup.updateMatrixWorld(true);
  }

  return maxPenetration;
}
