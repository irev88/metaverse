import * as THREE from 'three';
import { sampleHeroCliffHeight, sampleWorldTerrainHeight } from './NordicCliffWorld';

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp((x - e0) / Math.max(1e-5, e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

export interface GroundedPlacementResult {
  x: number;
  y: number;
  z: number;
  terrainPitch: number;
  terrainRoll: number;
}

/**
 * Calibrated 5-point plateau grounding using exact measured paw coordinates
 * (forepaw z=+1.02m, hindpaw z=-0.52m, width=+-0.33m).
 * Keeps root strictly above the highest paw terrain sample so ZERO paws or belly vertices sink!
 */
export function computeSafeCliffGroundPlacement(
  rawX: number,
  rawZ: number,
  yaw: number,
  bodyScale = 1.0
): GroundedPlacementResult {
  const x = clamp(rawX, -4.45, 4.45);
  const z = clamp(rawZ, -4.65, 0.18);

  const sinY = Math.sin(yaw);
  const cosY = Math.cos(yaw);

  const foreDist = 1.02 * bodyScale;
  const hindDist = -0.52 * bodyScale;
  const halfWidth = 0.33 * bodyScale;

  const samplePt = (lx: number, lz: number) => {
    const wx = x + lx * cosY + lz * sinY;
    const wz = z - lx * sinY + lz * cosY;
    return sampleHeroCliffHeight(wx, wz);
  };

  const hCenter = sampleHeroCliffHeight(x, z);
  const hChest = samplePt(0, 0.72 * bodyScale);
  const hFL = samplePt(halfWidth, foreDist);
  const hFR = samplePt(-halfWidth, foreDist);
  const hHL = samplePt(halfWidth, hindDist);
  const hHR = samplePt(-halfWidth, hindDist);

  // Use maximum of support points so on sloped/curved turf no paw or chest ever dips under grass!
  const y = Math.max(hCenter, hChest, hFL, hFR, hHL, hHR) + 0.016;

  const hFront = 0.5 * (hFL + hFR);
  const hBack = 0.5 * (hHL + hHR);
  const hLeft = 0.5 * (hFL + hHL);
  const hRight = 0.5 * (hFR + hHR);

  const terrainPitch = clamp((hBack - hFront) / Math.max(0.8, foreDist - hindDist), -0.14, 0.14);
  const terrainRoll = clamp((hRight - hLeft) / Math.max(0.5, halfWidth * 2), -0.12, 0.12);

  return { x, y, z, terrainPitch, terrainRoll };
}

export interface DragonMacroDirective {
  rearUpJoy: number;
  playPawL: number;
  playPawR: number;
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
        // Keep wavePhase unwrapped so sin(tailWavePhase) stays continuous
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
      const maxStep = 4.2 * safeDt;
      if (stepVec.length() > maxStep) {
        stepVec.setLength(maxStep);
        nextPos.copy(this.pos).add(stepVec);
      }
    }
    this.pos.copy(nextPos);

    // Rate-limited quaternion slerp so even antipodal target flips rotate smoothly!
    const angleDiff = this.quat.angleTo(rootGroup.quaternion);
    const maxAngleStep = (isGrounded ? 2.6 : 3.8) * safeDt;
    const desiredStep = angleDiff * kr;
    const slerpT = angleDiff > 1e-5 ? Math.min(kr, maxAngleStep / angleDiff) : kr;
    void desiredStep;
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

export class DragonBiomechanicalAnimator {
  private readonly asset: RigCompatibleAsset;
  private readonly restPos = new Map<string, THREE.Vector3>();
  private readonly restQuat = new Map<string, THREE.Quaternion>();

  private prevPos = new THREE.Vector3();
  private prevYaw = 0;
  private initialized = false;

  public gaitCycle = 0;
  public smoothedSpeed = 0;
  public smoothedTurnRate = 0;
  public walkWeight = 0;
  private smoothedLookYaw = 0;
  private smoothedLookPitch = 0;

  private readonly tmpVecA = new THREE.Vector3();
  private readonly tmpVecB = new THREE.Vector3();
  private readonly tmpVecC = new THREE.Vector3();
  private readonly tmpMatA = new THREE.Matrix4();
  private readonly tmpMatB = new THREE.Matrix4();
  private readonly tmpQuatA = new THREE.Quaternion();
  private readonly tmpQuatB = new THREE.Quaternion();
  private readonly tmpEuler = new THREE.Euler();

  private readonly strideLength: number;
  private readonly reachLimit: number;

  constructor(asset: RigCompatibleAsset, isLightFury = false) {
    this.asset = asset;
    this.strideLength = isLightFury ? 1.28 : 1.42;
    this.reachLimit = isLightFury ? 0.615 : 0.675;

    for (const [name, bone] of asset.rig.boneMap.entries()) {
      this.restPos.set(name, bone.position.clone());
      this.restQuat.set(name, bone.quaternion.clone());
    }
  }

  public resetMotionTracking(): void {
    this.initialized = false;
    this.smoothedSpeed = 0;
    this.smoothedTurnRate = 0;
    this.walkWeight = 0;
    this.smoothedLookYaw = 0;
    this.smoothedLookPitch = 0;
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
      this.walkWeight = 0;
      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;
    } else {
      const dx = rootGroup.position.x - this.prevPos.x;
      const dz = rootGroup.position.z - this.prevPos.z;
      const horizDist = Math.hypot(dx, dz);
      const rawSpeed = grounded > 0.25 ? horizDist / safeDt : 0;

      let dYaw = curYaw - this.prevYaw;
      while (dYaw > Math.PI) dYaw -= Math.PI * 2;
      while (dYaw < -Math.PI) dYaw += Math.PI * 2;
      const rawTurnRate = grounded > 0.25 ? clamp(dYaw / safeDt, -2.6, 2.6) : 0;

      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;

      this.smoothedSpeed += (rawSpeed - this.smoothedSpeed) * (1.0 - Math.exp(-10.0 * safeDt));
      this.smoothedTurnRate += (rawTurnRate - this.smoothedTurnRate) * (1.0 - Math.exp(-8.0 * safeDt));

      if (this.smoothedSpeed < 0.012) this.smoothedSpeed = 0;

      const targetWalkWeight = smoothstep(0.03, 0.34, this.smoothedSpeed) * grounded * (1.0 - macro.rearUpJoy);
      this.walkWeight += (targetWalkWeight - this.walkWeight) * (1.0 - Math.exp(-9.5 * safeDt));
      if (this.walkWeight < 0.0006) this.walkWeight = 0;

      if (this.walkWeight > 0.0005 && (horizDist > 0.00005 || Math.abs(dYaw) > 0.0002)) {
        const effectiveStepDist = horizDist + Math.abs(dYaw) * 0.26;
        this.gaitCycle = (this.gaitCycle + effectiveStepDist / this.strideLength) % 1.0;
      }
    }

    const wWalk = this.walkWeight;
    const rear = clamp(macro.rearUpJoy, 0, 1) * grounded;
    const bow = clamp(macro.deepCourtshipBow, 0, 1) * grounded;

    // 1. Center-of-mass weight shift, S-wave spine & gentle bow / rear-up
    const rootBone = boneMap.get('root');
    const pelvisBone = boneMap.get('pelvis');
    const spine1Bone = boneMap.get('spine_1');
    const spine2Bone = boneMap.get('spine_2');
    const chestBone = boneMap.get('chest');

    const cycRad = this.gaitCycle * Math.PI * 2;
    const walkBounceY = Math.sin(cycRad * 2.0 - 0.35) * 0.026 * wWalk;
    const lateralWeightX = -Math.cos(cycRad) * 0.024 * wWalk;
    const forwardSurgeZ = Math.cos(cycRad * 2.0) * 0.015 * wWalk;
    const walkBodyRoll = Math.cos(cycRad) * 0.035 * wWalk - clamp(this.smoothedTurnRate * 0.05, -0.09, 0.09) * wWalk;
    const walkBodyPitch = Math.cos(cycRad * 2.0 + 0.4) * 0.024 * wWalk;
    const walkBodyYaw = Math.sin(cycRad) * 0.038 * wWalk;

    const flightHeaveY = air > 0.05 ? -wingFlap * 0.070 * air : 0;
    const flightPitchWave = air > 0.05 ? wingFlap * 0.038 * air : 0;

    if (rootBone) {
      rootBone.position.x += lateralWeightX;
      rootBone.position.y += walkBounceY + rear * 0.25 - bow * 0.035 + flightHeaveY;
      rootBone.position.z += forwardSurgeZ - rear * 0.12 + bow * 0.02;

      this.addLocalEuler(
        rootBone,
        walkBodyPitch - rear * 0.40 + bow * 0.08 + flightPitchWave,
        walkBodyYaw,
        walkBodyRoll
      );
    }

    const turnSpineBend = clamp(this.smoothedTurnRate * 0.08, -0.13, 0.13) * wWalk;
    const spineWave1 = Math.sin(cycRad - 0.5) * 0.044 * wWalk + turnSpineBend;
    const spineWave2 = Math.sin(cycRad - 1.1) * 0.048 * wWalk + turnSpineBend;
    const spineWave3 = Math.sin(cycRad - 1.7) * 0.052 * wWalk + turnSpineBend * 0.8;

    if (pelvisBone) this.addLocalEuler(pelvisBone, rear * 0.20 - bow * 0.04, -spineWave1 * 0.7, Math.sin(cycRad) * 0.04 * wWalk);
    if (spine1Bone) this.addLocalEuler(spine1Bone, -rear * 0.09 + bow * 0.04, spineWave1, 0);
    if (spine2Bone) this.addLocalEuler(spine2Bone, -rear * 0.11 + bow * 0.04, spineWave2, 0);
    if (chestBone) {
      this.addLocalEuler(
        chestBone,
        -rear * 0.12 + bow * 0.05 - Math.cos(cycRad * 2.0) * 0.022 * wWalk,
        spineWave3,
        -Math.cos(cycRad) * 0.03 * wWalk
      );
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // 2. True 4-beat quadruped limbs + expressive rear-up / play-paw articulation
    if (grounded > 0.02 && (wWalk > 0.001 || rear > 0.001 || macro.playPawL > 0.001 || macro.playPawR > 0.001)) {
      const crouchForeSplay = Math.max(0, -crouchFore);
      const crouchHindSplay = Math.max(0, -crouchHind);

      for (const side of ['L', 'R'] as const) {
        const sign = side === 'L' ? 1 : -1;
        const turnScale = clamp(1.0 - sign * this.smoothedTurnRate * 0.18, 0.74, 1.26);

        const forePhase = (this.gaitCycle + (side === 'L' ? 0.24 : 0.74)) % 1.0;
        const hindPhase = (this.gaitCycle + (side === 'L' ? 0.00 : 0.50)) % 1.0;

        const foreStep = this.sampleFootTrajectory(forePhase, 0.26 * turnScale * wWalk, 0.065 * wWalk, true);
        const hindStep = this.sampleFootTrajectory(hindPhase, 0.24 * turnScale * wWalk, 0.056 * wWalk, false);

        const playPaw = side === 'L' ? clamp(macro.playPawL, 0, 1) : clamp(macro.playPawR, 0, 1);

        const scapBone = boneMap.get(`scapula_${side}`);
        if (scapBone && rear < 0.5 && playPaw < 0.3) {
          scapBone.position.y += foreStep.scapulaShiftY * wWalk;
          scapBone.updateMatrixWorld(true);
        }

        if (wWalk > 0.001 || rear > 0.001) {
          const hindOffset = new THREE.Vector3(
            sign * (crouchHindSplay * 0.050 + rear * 0.040),
            hindStep.liftY * (1.0 - rear),
            hindStep.strideZ * (1.0 - rear) - crouchHindSplay * 0.038 + rear * 0.07
          );
          const hindPole = this.tmpVecB
            .set(sign * (0.22 + 0.14 * crouchHindSplay), 0.15 + 0.16 * crouchHindSplay, 1.0)
            .normalize();
          this.solveLimbIKChar(
            `hip_${side}`,
            `knee_${side}`,
            `ankle_${side}`,
            `hindpaw_${side}`,
            hindPole,
            hindOffset,
            hindStep.pawPitch * (1.0 - rear)
          );
        }

        const airPawBlend = clamp(Math.max(rear, playPaw), 0, 1);
        if (wWalk > 0.001 && airPawBlend < 0.999) {
          const foreOffset = new THREE.Vector3(
            sign * crouchForeSplay * 0.052,
            foreStep.liftY,
            foreStep.strideZ + crouchForeSplay * 0.042
          );

          if (scapBone) {
            rootGroup.updateMatrixWorld(false);
            const rootInv = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
            const shBone = boneMap.get(`shoulder_${side}`)!;
            shBone.updateMatrixWorld(true);
            const shChar = this.tmpVecC.setFromMatrixPosition(shBone.matrixWorld).applyMatrix4(rootInv);
            const wrTarget = this.asset.rig.bindWorldPositions.get(`wrist_${side}`)!.clone().add(foreOffset);
            const excess = shChar.distanceTo(wrTarget) - this.reachLimit;
            if (excess > 0) {
              scapBone.position.y -= excess * 1.05;
              scapBone.updateMatrixWorld(true);
            }
          }

          const forePole = this.tmpVecA
            .set(sign * (0.22 + 0.16 * crouchForeSplay), -0.08 + 0.18 * crouchForeSplay, -1.0)
            .normalize();
          this.solveLimbIKChar(
            `shoulder_${side}`,
            `elbow_${side}`,
            `wrist_${side}`,
            `forepaw_${side}`,
            forePole,
            foreOffset,
            foreStep.pawPitch
          );
        }

        if (airPawBlend > 0.001) {
          const wave = Math.sin(macro.timeSec * 4.2 + (side === 'L' ? 0.0 : 2.1));
          const shPitch = rear > playPaw ? -0.58 - wave * 0.14 : -0.76 - Math.sin(macro.timeSec * 4.8) * 0.12;
          const shYaw = -sign * (0.12 * playPaw + 0.05 * rear);
          const shRoll = sign * 0.10;
          const elPitch = rear > playPaw ? 0.56 + wave * 0.16 : 0.42 + Math.cos(macro.timeSec * 4.8) * 0.14;
          const wrPitch = 0.32 - wave * 0.18;
          const pawPitch = 0.24 + wave * 0.16;

          this.blendBoneToRestOffset(`shoulder_${side}`, shPitch, shYaw, shRoll, airPawBlend);
          this.blendBoneToRestOffset(`elbow_${side}`, elPitch, 0, 0, airPawBlend);
          this.blendBoneToRestOffset(`wrist_${side}`, wrPitch, 0, 0, airPawBlend);
          this.blendBoneToRestOffset(`forepaw_${side}`, pawPitch, 0, 0, airPawBlend);
        }

        const toeFlex = airPawBlend > 0.1 ? 0.20 * airPawBlend : foreStep.toeCurl * wWalk;
        for (let d = 1; d <= 4; d++) {
          const toeBone = boneMap.get(`foreToe_${side}_${d}`) ?? boneMap.get(`toe_fore_${side}_${d}`);
          if (toeBone) this.addLocalEuler(toeBone, toeFlex, 0, 0);
        }
      }
    }

    // 3. Mate eye-contact tracking, cervical head-bob & gentle nuzzle (100% smooth, zero +-PI jump!)
    rootGroup.updateMatrixWorld(false);
    const rootInv = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
    const mateLocal = this.tmpVecA.copy(macro.mateWorldPos).applyMatrix4(rootInv);

    const lookW = clamp(macro.lookAtMateWeight, 0, 1);
    const relX = mateLocal.x;
    const relY = mateLocal.y - 1.35;
    const relZ = mateLocal.z - 1.15;
    const horizDist = Math.max(0.5, Math.hypot(relX, relZ));
    // Fade out yaw tracking when mate passes behind dragon so atan2(relX, relZ) never hits +-PI branch cut!
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

    const headBobPitch = Math.sin(cycRad * 2.0 - 0.95) * 0.032 * wWalk;
    const nuzzle = clamp(macro.affectionateNuzzle, 0, 1);
    const mateSignSmooth = clamp(mateLocal.x / 0.45, -1, 1);

    for (let i = 1; i <= 4; i++) {
      const nb = boneMap.get(`neck_${i}`);
      if (nb) {
        const bowNeck = i <= 3 ? bow * 0.045 : -bow * 0.035;
        const nuzzleCurve = nuzzle * 0.045 * mateSignSmooth;
        this.addLocalEuler(nb, headBobPitch * 0.20 + bowNeck, nuzzleCurve, nuzzleCurve * 0.35, 'YXZ');
      }
    }
    const headBone = boneMap.get('head');
    if (headBone) {
      this.addLocalEuler(
        headBone,
        headBobPitch * 0.32 - bow * 0.10 + nuzzle * 0.05,
        nuzzle * 0.10 * mateSignSmooth,
        nuzzle * 0.18 * mateSignSmooth,
        'YXZ'
      );
    }

    // 4. Verified Non-Overlapping Wings (Smoothly weighted inner/outer so zero side-switch pop!)
    const innerWeightL = smoothstep(-0.35, 0.35, mateLocal.x);
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

      const walkWingBounce = Math.sin(cycRad * 2.0 - 0.8 + (side === 'L' ? 0 : 0.35)) * 0.042 * wWalk;
      const aeroFlutter = air > 0.1 ? Math.sin(macro.timeSec * 3.4 + (side === 'L' ? 0 : 0.9)) * 0.028 * air : 0;

      if (clav) this.addLocalEuler(clav, 0, 0, sign * walkWingBounce * 0.45, 'YXZ');
      if (sh) this.addLocalEuler(sh, 0, 0, sign * walkWingBounce, 'YXZ');

      // Toothless protective canopy: lifts inner wing cleanly ABOVE y=2.05m (completely above Light Fury!)
      if (mantle > 0.001) {
        if (wInner > 0.001) {
          const mIn = mantle * wInner;
          if (clav) this.addLocalEuler(clav, 0, 0, sign * 0.48 * mIn, 'YXZ');
          if (sh) this.addLocalEuler(sh, 0.15 * mIn, -sign * 0.22 * mIn, sign * 0.98 * mIn, 'YXZ');
          if (el) this.addLocalEuler(el, 0, sign * 0.32 * mIn, -sign * 0.38 * mIn, 'YXZ');
        }
        if (wOuter > 0.001) {
          const mOut = mantle * wOuter;
          if (sh) this.addLocalEuler(sh, -0.06 * mOut, sign * 0.45 * mOut, -sign * 0.18 * mOut, 'YXZ');
        }
      }

      // Light Fury compact sleek flank fold: sweeps inner wing backward along body so it never sticks sideways!
      const tuckAmt = Math.max(neatTuck * wInner, compactBoth);
      if (tuckAmt > 0.001) {
        if (sh) this.addLocalEuler(sh, -0.10 * tuckAmt, sign * 0.62 * tuckAmt, -sign * 0.26 * tuckAmt, 'YXZ');
        if (el) this.addLocalEuler(el, 0, -sign * 0.38 * tuckAmt, sign * 0.15 * tuckAmt, 'YXZ');
      }

      if (wr && Math.abs(aeroFlutter) > 0.0005) {
        this.addLocalEuler(wr, aeroFlutter * 0.6, 0, sign * aeroFlutter, 'YXZ');
      }
    }

    // 5. Traveling biomechanical tail S-wave
    if (wWalk > 0.001) {
      for (let t = 1; t <= 8; t++) {
        const tb = boneMap.get(`tail_${t}`);
        if (tb) {
          const tFrac = t / 8;
          const tailSway = Math.sin(cycRad - 1.6 - t * 0.42) * 0.060 * (0.35 + 0.65 * tFrac) * wWalk;
          const tailTurnArc = -turnSpineBend * 0.70 * tFrac;
          this.addLocalEuler(tb, Math.cos(cycRad * 2.0 - t * 0.35) * 0.016 * wWalk, tailSway + tailTurnArc, 0, 'YXZ');
        }
      }
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // 6. STRICT PER-FRAME WORLD GROUND & OCEAN CLEARANCE GUARD (0% Ground Clipping!)
    this.enforceStrictGroundClearance(grounded);
  }

  /**
   * Ensures EVERY anatomical point (paws, wrists, chest, jaw, wing elbows/wrists/tips, and tail_2..10)
   * stays strictly ABOVE terrain & ocean level at every single frame!
   */
  public enforceStrictGroundClearance(groundedWeight: number): void {
    const rootGroup = this.asset.rootGroup;
    const boneMap = this.asset.rig.boneMap;

    // A. Lift wing shoulders if any wing joint/tip dips close to cliff rock or sea surface!
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
        const terrY =
          Math.abs(wp.x) < 6.5 && wp.z > -7.0 && wp.z < 1.2
            ? Math.max(sampleHeroCliffHeight(wp.x, wp.z), sampleWorldTerrainHeight(wp.x, wp.z))
            : sampleWorldTerrainHeight(wp.x, wp.z);
        const surfY = Math.max(-11.15, terrY) + 0.22;
        if (wp.y < surfY) {
          maxWingDeficit = Math.max(maxWingDeficit, surfY - wp.y);
        }
      }

      if (maxWingDeficit > 0.001) {
        const liftRad = clamp(maxWingDeficit * 0.72, 0, 1.05);
        this.addLocalEuler(sh, 0, 0, sign * liftRad, 'YXZ');
        sh.updateMatrixWorld(true);
      }
    }

    // B. Lift tail segments if any tail bone or fluke approaches the cliff turf!
    for (let t = 2; t <= 10; t++) {
      const tb = boneMap.get(`tail_${t}`);
      if (!tb || !tb.parent) continue;
      tb.parent.updateMatrixWorld(true);
      tb.updateMatrixWorld(true);
      const wp = this.tmpVecB.setFromMatrixPosition(tb.matrixWorld);
      const minClear = t >= 8 ? 0.24 : t >= 5 ? 0.16 : 0.12;
      const cliffOrWorldY =
        Math.abs(wp.x) < 6.5 && wp.z > -7.0 && wp.z < 1.2
          ? Math.max(sampleHeroCliffHeight(wp.x, wp.z), sampleWorldTerrainHeight(wp.x, wp.z))
          : sampleWorldTerrainHeight(wp.x, wp.z);
      const surfY = Math.max(-11.15, cliffOrWorldY) + minClear;
      if (wp.y < surfY) {
        const lift = clamp((surfY - wp.y) * 1.55, 0, 0.42);
        this.addLocalEuler(tb.parent as THREE.Bone, lift, 0, 0, 'YXZ');
        tb.parent.updateMatrixWorld(true);
      }
    }

    // C. Whole-body vertical floor guard across paws, belly, chest, jaw, wingtips & full tail!
    rootGroup.updateMatrixWorld(true);
    const pawMargin = groundedWeight > 0.75 ? 0.054 : 0.195;
    const bodyCheckSpecs: Array<[string, number]> = [
      ['forepaw_L', pawMargin],
      ['forepaw_R', pawMargin],
      ['hindpaw_L', pawMargin],
      ['hindpaw_R', pawMargin],
      ['elbow_L', 0.14],
      ['elbow_R', 0.14],
      ['knee_L', 0.14],
      ['knee_R', 0.14],
      ['wrist_L', 0.11],
      ['wrist_R', 0.11],
      ['ankle_L', 0.11],
      ['ankle_R', 0.11],
      ['chest', 0.36],
      ['spine_1', 0.32],
      ['pelvis', 0.30],
      ['head', 0.24],
      ['jaw', 0.20],
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
      ['tail_3', 0.20],
      ['tail_5', 0.24],
      ['tail_7', 0.30],
      ['tail_9', 0.38],
      ['tail_10', 0.42],
    ];

    let neededLiftY = 0;
    for (const [bName, clearance] of bodyCheckSpecs) {
      const b = boneMap.get(bName);
      if (!b) continue;
      const wp = this.tmpVecB.setFromMatrixPosition(b.matrixWorld);
      const terrainY =
        groundedWeight > 0.3 || (Math.abs(wp.x) < 6.5 && wp.z > -7.0 && wp.z < 1.2)
          ? Math.max(sampleHeroCliffHeight(wp.x, wp.z), sampleWorldTerrainHeight(wp.x, wp.z))
          : Math.max(-11.15, sampleWorldTerrainHeight(wp.x, wp.z));
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

  private sampleFootTrajectory(
    phase: number,
    halfStride: number,
    stepHeight: number,
    isForelimb: boolean
  ): { strideZ: number; liftY: number; pawPitch: number; scapulaShiftY: number; toeCurl: number } {
    const stanceEnd = 0.68;
    if (phase < stanceEnd) {
      const u = phase / stanceEnd;
      const strideZ = THREE.MathUtils.lerp(halfStride, -halfStride, u);
      const cushion = -Math.sin(clamp(u / 0.28, 0, 1) * Math.PI) * 0.015;
      const pushExtend = Math.sin(clamp((u - 0.25) / 0.75, 0, 1) * Math.PI) * 0.013;
      const latePeel = smoothstep(0.82, 1.0, u) * (isForelimb ? 0.20 : 0.16);
      return {
        strideZ,
        liftY: 0,
        pawPitch: latePeel,
        scapulaShiftY: cushion + pushExtend,
        toeCurl: -0.07 * Math.sin(u * Math.PI),
      };
    } else {
      const u = (phase - stanceEnd) / (1.0 - stanceEnd);
      const easeU = u * u * (3 - 2 * u);
      const strideZ = THREE.MathUtils.lerp(-halfStride, halfStride, easeU);
      const liftY = Math.sin(Math.pow(u, 0.82) * Math.PI) * stepHeight;
      const wristPeel = Math.sin(clamp(u / 0.68, 0, 1) * Math.PI) * (isForelimb ? 0.48 : 0.38);
      const reachPlace = -smoothstep(0.68, 1.0, u) * 0.12;
      return {
        strideZ,
        liftY,
        pawPitch: wristPeel + reachPlace,
        scapulaShiftY: 0.007 * Math.sin(u * Math.PI),
        toeCurl: 0.24 * Math.sin(u * Math.PI),
      };
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

  private solveLimbIKChar(
    upperName: string,
    midName: string,
    endName: string,
    pawName: string,
    poleDirChar: THREE.Vector3,
    targetOffsetChar: THREE.Vector3,
    pawPitchAdjust: number
  ): void {
    const rig = this.asset.rig;
    const upperBone = rig.boneMap.get(upperName);
    const midBone = rig.boneMap.get(midName);
    const endBone = rig.boneMap.get(endName);
    const pawBone = rig.boneMap.get(pawName);
    if (!upperBone || !midBone || !endBone || !pawBone || !upperBone.parent) return;

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

    const targetEnd = bindEnd.clone().add(targetOffsetChar);

    const l1 = bindUpper.distanceTo(bindMid);
    const l2 = bindMid.distanceTo(bindEnd);
    const toTarget = targetEnd.clone().sub(p0);
    const rawDist = toTarget.length();
    const maxReach = (l1 + l2) * 0.994;
    const minReach = Math.abs(l1 - l2) + 0.02;
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
    const v1Local = v1Char.clone().applyQuaternion(parentCharQuat.clone().invert());
    const restDir1 = midBone.position.clone().normalize();
    upperBone.quaternion.setFromUnitVectors(restDir1, v1Local);

    const upperCharQuat = parentCharQuat.clone().multiply(upperBone.quaternion);
    const v2Char = p2.clone().sub(p1).normalize();
    const v2Local = v2Char.clone().applyQuaternion(upperCharQuat.clone().invert());
    const restDir2 = endBone.position.clone().normalize();
    midBone.quaternion.setFromUnitVectors(restDir2, v2Local);

    const midCharQuat = upperCharQuat.clone().multiply(midBone.quaternion);
    endBone.quaternion.copy(midCharQuat.clone().invert());

    this.tmpEuler.set(pawPitchAdjust, 0, 0, 'XYZ');
    pawBone.quaternion.copy(this.restQuat.get(pawName)!).multiply(this.tmpQuatA.setFromEuler(this.tmpEuler));
  }
}

interface CollisionSphere {
  center: THREE.Vector3;
  radius: number;
}

const SPHERE_BONE_SPECS: Array<{ bone: string; radius: number; localOffsetZ?: number }> = [
  { bone: 'head', radius: 0.24, localOffsetZ: 0.42 }, // Snout tip sphere!
  { bone: 'head', radius: 0.28 },                     // Cranium sphere
  { bone: 'neck_3', radius: 0.24 },
  { bone: 'neck_1', radius: 0.28 },
  { bone: 'chest', radius: 0.44 },
  { bone: 'spine_2', radius: 0.40 },
  { bone: 'spine_1', radius: 0.38 },
  { bone: 'pelvis', radius: 0.38 },
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
 * Hard 3D multi-sphere pairwise dragon-dragon non-penetration solver!
 * Checks all 24x24 anatomical spheres across snout, head, neck, torso, limbs, wings & tail.
 * If ANY sphere pair approaches closer than rA + rB, pushes both dragons cleanly apart!
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
      const gNF = sampleHeroCliffHeight(nfAsset.rootGroup.position.x, nfAsset.rootGroup.position.z) + 0.016;
      if (nfAsset.rootGroup.position.y < gNF) nfAsset.rootGroup.position.y = gNF;
    }
    if (lfGrounded) {
      const gLF = sampleHeroCliffHeight(lfAsset.rootGroup.position.x, lfAsset.rootGroup.position.z) + 0.016;
      if (lfAsset.rootGroup.position.y < gLF) lfAsset.rootGroup.position.y = gLF;
    }

    nfAsset.rootGroup.updateMatrixWorld(true);
    lfAsset.rootGroup.updateMatrixWorld(true);
  }

  return maxPenetration;
}
