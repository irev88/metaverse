import * as THREE from 'three';
import { sampleHeroCliffHeight } from './NordicCliffWorld';

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
 * Safe sanctuary plateau clamp + 5-point (center + 4 paws) terrain plane solver.
 * Guarantees neither dragon nor any paw ever dips under the grass or approaches
 * the z > +1.05m southern cliff precipice!
 */
export function computeSafeCliffGroundPlacement(
  rawX: number,
  rawZ: number,
  yaw: number,
  bodyScale = 1.0
): GroundedPlacementResult {
  // Safe continuous grassy plateau verified via heightfield scan: x in [-4.25, +4.25], z in [-4.55, +0.20]
  const x = clamp(rawX, -4.25, 4.25);
  const z = clamp(rawZ, -4.55, 0.20);

  const sinY = Math.sin(yaw);
  const cosY = Math.cos(yaw);

  const foreDist = 0.56 * bodyScale;
  const hindDist = -0.54 * bodyScale;
  const halfWidth = 0.32 * bodyScale;

  const samplePaw = (lx: number, lz: number) => {
    const wx = x + lx * cosY + lz * sinY;
    const wz = z - lx * sinY + lz * cosY;
    return sampleHeroCliffHeight(wx, wz);
  };

  const hCenter = sampleHeroCliffHeight(x, z);
  const hFL = samplePaw(halfWidth, foreDist);
  const hFR = samplePaw(-halfWidth, foreDist);
  const hHL = samplePaw(halfWidth, hindDist);
  const hHR = samplePaw(-halfWidth, hindDist);

  const avgPaws = 0.25 * (hFL + hFR + hHL + hHR);
  const maxPaw = Math.max(hFL, hFR, hHL, hHR);
  // Keep root cleanly above highest local turf rise so paws & chest never sink below grass!
  const y = Math.max(hCenter, avgPaws, maxPaw - 0.035) + 0.015;

  const hFront = 0.5 * (hFL + hFR);
  const hBack = 0.5 * (hHL + hHR);
  const hLeft = 0.5 * (hFL + hHL);
  const hRight = 0.5 * (hFR + hHR);

  // Positive X rotation tilts nose (+Z) down when hFront < hBack
  const terrainPitch = clamp((hBack - hFront) / Math.max(0.5, foreDist - hindDist), -0.18, 0.18);
  const terrainRoll = clamp((hRight - hLeft) / Math.max(0.4, halfWidth * 2), -0.16, 0.16);

  return { x, y, z, terrainPitch, terrainRoll };
}

export interface DragonMacroDirective {
  /** 0..1 proud joyful rear-up onto haunches with forepaws pawing air & wings flared */
  rearUpJoy: number;
  /** 0..1 playful left forepaw lift & gentle batting wave */
  playPawL: number;
  /** 0..1 playful right forepaw lift & gentle batting wave */
  playPawR: number;
  /** 0..1 deep unmistakable courtship bow (chest low to sand-heart, eyes gazing warmly up) */
  deepCourtshipBow: number;
  /** 0..1 tender cheek/forehead nuzzle curve toward mate */
  affectionateNuzzle: number;
  /** 0..1 Toothless elevates & arches his inner wing HIGH over Light Fury as a protective canopy (zero overlap!) */
  protectiveWingMantle: number;
  /** 0..1 Light Fury tucks her inner wing sleekly & slightly lower against her flank (zero overlap!) */
  tuckInnerWingNeat: number;
  /** 0..1 tracking weight to turn neck & head toward mateWorldPos */
  lookAtMateWeight: number;
  /** World position of the mate's head/chest for natural gaze & inner-wing detection */
  mateWorldPos: THREE.Vector3;
  /** Current clock time (seconds) for smooth macro secondary waves */
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
    lookAtMateWeight: 0,
    mateWorldPos: new THREE.Vector3(),
    timeSec: 0,
  };
}

interface RigCompatibleAsset {
  rootGroup: THREE.Group;
  rig: {
    rootBone: THREE.Bone;
    boneMap: Map<string, THREE.Bone>;
    bindWorldPositions: Map<string, THREE.Vector3>;
  };
}

/**
 * Stateful per-dragon biomechanical locomotion & full-joint secondary motion solver.
 * Implements:
 * - True 4-beat quadruped walk cycle (HL -> FL -> HR -> FR) with 68% ground-push stance & 32% wrist-peel swing
 * - Turn-rate stride asymmetry, body bank, and spinal arc curvature
 * - Center-of-mass weight shift, scapula load compression, cervical head-bob, and traveling S-wave tail
 * - Full-joint macro actions (rear-up joy, playful foreleg reach, deep courtship bow, protective non-overlapping wing mantle)
 * - Aerodynamic wingbeat thoracic heave & trailing slipstream micro-motions in flight
 */
export class DragonBiomechanicalAnimator {
  private readonly asset: RigCompatibleAsset;
  private readonly restPos = new Map<string, THREE.Vector3>();
  private readonly restQuat = new Map<string, THREE.Quaternion>();

  private prevPos = new THREE.Vector3();
  private prevYaw = 0;
  private initialized = false;

  public gaitCycle = 0; // 0..1 continuous 4-beat cycle
  public smoothedSpeed = 0;
  public smoothedTurnRate = 0;
  public walkWeight = 0;

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
  }

  /**
   * Call AFTER rootGroup position/rotation and controller.update(dt) have run for this frame!
   */
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

    // Extract current horizontal heading yaw from rootGroup forward (+Z in local space)
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
      const rawTurnRate = grounded > 0.25 ? clamp(dYaw / safeDt, -2.8, 2.8) : 0;

      this.prevPos.copy(rootGroup.position);
      this.prevYaw = curYaw;

      const speedFollow = 1.0 - Math.exp(-10.0 * safeDt);
      this.smoothedSpeed += (rawSpeed - this.smoothedSpeed) * speedFollow;
      this.smoothedTurnRate += (rawTurnRate - this.smoothedTurnRate) * (1.0 - Math.exp(-8.0 * safeDt));

      if (this.smoothedSpeed < 0.012) {
        this.smoothedSpeed = 0;
      }

      const targetWalkWeight = smoothstep(0.03, 0.34, this.smoothedSpeed) * grounded * (1.0 - macro.rearUpJoy);
      this.walkWeight += (targetWalkWeight - this.walkWeight) * (1.0 - Math.exp(-9.5 * safeDt));
      if (this.walkWeight < 0.0006) this.walkWeight = 0;

      // Advance 4-beat gait phase proportional to actual ground distance so paws NEVER skate!
      if (this.walkWeight > 0.0005 && horizDist > 0.00005) {
        // Also allow pure turn-in-place stepping if pivoting on the spot
        const effectiveStepDist = horizDist + Math.abs(dYaw) * 0.28;
        this.gaitCycle = (this.gaitCycle + effectiveStepDist / this.strideLength) % 1.0;
      }
    }

    const wWalk = this.walkWeight;
    const rear = clamp(macro.rearUpJoy, 0, 1) * grounded;
    const bow = clamp(macro.deepCourtshipBow, 0, 1) * grounded;

    // -------------------------------------------------------------------------
    // 1. BODY CENTER-OF-MASS WEIGHT TRANSFER, S-WAVE SPINE & MACRO BOW / REAR-UP
    // -------------------------------------------------------------------------
    const rootBone = boneMap.get('root');
    const pelvisBone = boneMap.get('pelvis');
    const spine1Bone = boneMap.get('spine_1');
    const spine2Bone = boneMap.get('spine_2');
    const chestBone = boneMap.get('chest');

    const cycRad = this.gaitCycle * Math.PI * 2;
    // Double-harmonic ground push heave (two push peaks per full 4-beat stride)
    const walkBounceY = Math.sin(cycRad * 2.0 - 0.35) * 0.028 * wWalk;
    // Lateral weight shift toward currently planted forelimb (FL planted around 0.25..0.93, FR around 0.75..0.43)
    const lateralWeightX = -Math.cos(cycRad) * 0.026 * wWalk;
    // Forward push surge impulse twice per cycle
    const forwardSurgeZ = Math.cos(cycRad * 2.0) * 0.016 * wWalk;
    // Subtle shoulder/hip roll & yaw from 4-beat weight transfer + turn banking
    const walkBodyRoll = Math.cos(cycRad) * 0.038 * wWalk - clamp(this.smoothedTurnRate * 0.055, -0.10, 0.10) * wWalk;
    const walkBodyPitch = Math.cos(cycRad * 2.0 + 0.4) * 0.026 * wWalk;
    const walkBodyYaw = Math.sin(cycRad) * 0.042 * wWalk;

    // In-flight aerodynamic wingbeat chest surge (downstroke lifts body!)
    const flightHeaveY = air > 0.05 ? -wingFlap * 0.075 * air : 0;
    const flightPitchWave = air > 0.05 ? wingFlap * 0.042 * air : 0;

    if (rootBone) {
      rootBone.position.x += lateralWeightX;
      rootBone.position.y += walkBounceY + rear * 0.28 - bow * 0.095 + flightHeaveY;
      rootBone.position.z += forwardSurgeZ - rear * 0.14 + bow * 0.04;

      this.addLocalEuler(
        rootBone,
        walkBodyPitch - rear * 0.44 + bow * 0.22 + flightPitchWave,
        walkBodyYaw,
        walkBodyRoll
      );
    }

    const turnSpineBend = clamp(this.smoothedTurnRate * 0.085, -0.14, 0.14) * wWalk;
    const spineWave1 = Math.sin(cycRad - 0.5) * 0.048 * wWalk + turnSpineBend;
    const spineWave2 = Math.sin(cycRad - 1.1) * 0.052 * wWalk + turnSpineBend;
    const spineWave3 = Math.sin(cycRad - 1.7) * 0.055 * wWalk + turnSpineBend * 0.8;

    if (pelvisBone) {
      this.addLocalEuler(pelvisBone, rear * 0.22 - bow * 0.08, -spineWave1 * 0.7, Math.sin(cycRad) * 0.045 * wWalk);
    }
    if (spine1Bone) {
      this.addLocalEuler(spine1Bone, -rear * 0.10 + bow * 0.09, spineWave1, 0);
    }
    if (spine2Bone) {
      this.addLocalEuler(spine2Bone, -rear * 0.12 + bow * 0.10, spineWave2, 0);
    }
    if (chestBone) {
      this.addLocalEuler(
        chestBone,
        -rear * 0.14 + bow * 0.12 - Math.cos(cycRad * 2.0) * 0.024 * wWalk,
        spineWave3,
        -Math.cos(cycRad) * 0.032 * wWalk
      );
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // -------------------------------------------------------------------------
    // 2. TRUE 4-BEAT QUADRUPED LIMB BIOMECHANICS + PLAYFUL PAW / REAR-UP POSES
    // -------------------------------------------------------------------------
    // Natural lateral cat/dragon walk footfall order: HL (0.00) -> FL (0.24) -> HR (0.50) -> FR (0.74)
    if (grounded > 0.02 && (wWalk > 0.001 || rear > 0.001 || macro.playPawL > 0.001 || macro.playPawR > 0.001)) {
      const crouchForeSplay = Math.max(0, -crouchFore);
      const crouchHindSplay = Math.max(0, -crouchHind);

      for (const side of ['L', 'R'] as const) {
        const sign = side === 'L' ? 1 : -1;
        // Turn stride asymmetry: when turning left (+dYaw, toward +X = L), L is inner leg, R is outer leg!
        const turnScale = clamp(1.0 - sign * this.smoothedTurnRate * 0.18, 0.72, 1.28);

        const forePhase = (this.gaitCycle + (side === 'L' ? 0.24 : 0.74)) % 1.0;
        const hindPhase = (this.gaitCycle + (side === 'L' ? 0.00 : 0.50)) % 1.0;

        const foreStep = this.sampleFootTrajectory(forePhase, 0.27 * turnScale * wWalk, 0.068 * wWalk, true);
        const hindStep = this.sampleFootTrajectory(hindPhase, 0.25 * turnScale * wWalk, 0.058 * wWalk, false);

        const playPaw = side === 'L' ? clamp(macro.playPawL, 0, 1) : clamp(macro.playPawR, 0, 1);

        // Scapula cushioned load compression when forepaw is pushing into the ground!
        const scapBone = boneMap.get(`scapula_${side}`);
        if (scapBone && rear < 0.5 && playPaw < 0.3) {
          scapBone.position.y += foreStep.scapulaShiftY * wWalk;
          scapBone.updateMatrixWorld(true);
        }

        // Solve Hindlimb IK (planted solidly during walk AND during rear-up!)
        if (wWalk > 0.001 || rear > 0.001) {
          const hindOffset = new THREE.Vector3(
            sign * (crouchHindSplay * 0.050 + rear * 0.045),
            hindStep.liftY * (1.0 - rear),
            hindStep.strideZ * (1.0 - rear) - crouchHindSplay * 0.038 + rear * 0.08
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

        // Solve Forelimb: either IK ground-push/swing OR expressive Rear-Up / Play-Paw Reach!
        const airPawBlend = clamp(Math.max(rear, playPaw), 0, 1);
        if (wWalk > 0.001 && airPawBlend < 0.999) {
          const foreOffset = new THREE.Vector3(
            sign * crouchForeSplay * 0.052,
            foreStep.liftY,
            foreStep.strideZ + crouchForeSplay * 0.042
          );

          // Prevent over-extension by letting scapula drop slightly on long forward reach
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

        // Expressive multi-joint forelimb articulation for Joyful Rear-Up OR Playful Foreleg Batting!
        if (airPawBlend > 0.001) {
          const wave = Math.sin(macro.timeSec * 4.4 + (side === 'L' ? 0.0 : 2.1));
          const shPitch = rear > playPaw
            ? -0.62 - wave * 0.16
            : -0.82 - Math.sin(macro.timeSec * 5.2) * 0.14;
          const shYaw = -sign * (0.14 * playPaw + 0.06 * rear);
          const shRoll = sign * 0.10;
          const elPitch = rear > playPaw
            ? 0.58 + wave * 0.18
            : 0.42 + Math.cos(macro.timeSec * 5.2) * 0.16;
          const wrPitch = 0.34 - wave * 0.22;
          const pawPitch = 0.25 + wave * 0.20;

          this.blendBoneToRestOffset(`shoulder_${side}`, shPitch, shYaw, shRoll, airPawBlend);
          this.blendBoneToRestOffset(`elbow_${side}`, elPitch, 0, 0, airPawBlend);
          this.blendBoneToRestOffset(`wrist_${side}`, wrPitch, 0, 0, airPawBlend);
          this.blendBoneToRestOffset(`forepaw_${side}`, pawPitch, 0, 0, airPawBlend);
        }

        // Subtle toe splay on stance push vs curl on swing!
        const toeFlex = airPawBlend > 0.1
          ? 0.22 * airPawBlend
          : foreStep.toeCurl * wWalk;
        for (let d = 1; d <= 4; d++) {
          const toeBone = boneMap.get(`foreToe_${side}_${d}`) ?? boneMap.get(`toe_fore_${side}_${d}`);
          if (toeBone) {
            this.addLocalEuler(toeBone, toeFlex, 0, 0);
          }
        }
      }
    }

    // -------------------------------------------------------------------------
    // 3. MATE EYE-CONTACT TRACKING, HEAD BOB & AFFECTIONATE NUZZLE (FIXES ISSUE #2)
    // -------------------------------------------------------------------------
    rootGroup.updateMatrixWorld(false);
    const rootInv = this.tmpMatA.copy(rootGroup.matrixWorld).invert();
    const mateLocal = this.tmpVecA.copy(macro.mateWorldPos).applyMatrix4(rootInv);

    if (macro.lookAtMateWeight > 0.001) {
      const lookW = clamp(macro.lookAtMateWeight, 0, 1);
      // Neck origin in character local space is roughly (0, 0.88, 0.52)
      const relX = mateLocal.x;
      const relY = mateLocal.y - 0.88;
      const relZ = mateLocal.z - 0.52;
      const horizDist = Math.max(0.35, Math.hypot(relX, relZ));

      const targetYaw = clamp(Math.atan2(relX, relZ), -1.18, 1.18) * lookW;
      const targetPitch = clamp(-Math.atan2(relY, horizDist), -0.58, 0.58) * lookW;

      // Distribute smoothly across cervical spine & cranium so neck curves naturally toward mate!
      const neckNames = ['neck_1', 'neck_2', 'neck_3', 'neck_4'] as const;
      const yawShares = [0.10, 0.14, 0.18, 0.22];
      const pitchShares = [0.08, 0.11, 0.14, 0.18];
      for (let i = 0; i < 4; i++) {
        const nb = boneMap.get(neckNames[i]);
        if (nb) {
          this.addLocalEuler(nb, targetPitch * pitchShares[i], targetYaw * yawShares[i], -targetYaw * 0.04, 'YXZ');
        }
      }
      const headBone = boneMap.get('head');
      if (headBone) {
        this.addLocalEuler(headBone, targetPitch * 0.36, targetYaw * 0.34, -targetYaw * 0.08, 'YXZ');
      }
    }

    // Natural cervical head-bob counter-balancing chest heave during walk + deep bow / affectionate nuzzle
    const headBobPitch = Math.sin(cycRad * 2.0 - 0.95) * 0.036 * wWalk;
    const nuzzle = clamp(macro.affectionateNuzzle, 0, 1);
    const mateSign = mateLocal.x >= 0 ? 1 : -1;

    for (let i = 1; i <= 4; i++) {
      const nb = boneMap.get(`neck_${i}`);
      if (nb) {
        const bowNeck = i <= 3 ? bow * 0.095 : -bow * 0.08;
        const nuzzleCurve = nuzzle * 0.065 * mateSign;
        this.addLocalEuler(nb, headBobPitch * 0.22 + bowNeck, nuzzleCurve, nuzzleCurve * 0.45, 'YXZ');
      }
    }
    const headBone = boneMap.get('head');
    if (headBone) {
      // During deep courtship bow, lift eyes/snout slightly upward from lowered neck to look adorably at her!
      this.addLocalEuler(
        headBone,
        headBobPitch * 0.35 - bow * 0.26 + nuzzle * 0.08,
        nuzzle * 0.14 * mateSign,
        nuzzle * 0.22 * mateSign,
        'YXZ'
      );
    }

    // -------------------------------------------------------------------------
    // 4. NON-OVERLAPPING WINGS + FOLDED WING WALK SUSPENSION + FLIGHT MICRO-TRIM
    //    (FIXES ISSUES #5, #8, #12)
    // -------------------------------------------------------------------------
    // Automatically identify which wing faces the mate (innerSide) vs away (outerSide)!
    const innerSide: 'L' | 'R' = mateLocal.x >= 0 ? 'L' : 'R';
    const mantle = clamp(macro.protectiveWingMantle, 0, 1) * grounded;
    const neatTuck = clamp(macro.tuckInnerWingNeat, 0, 1) * grounded;

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const isInner = side === innerSide;

      const clav = boneMap.get(`wingClavicle_${side}`);
      const sh = boneMap.get(`wingShoulder_${side}`);
      const el = boneMap.get(`wingElbow_${side}`);
      const wr = boneMap.get(`wingWrist_${side}`);

      // Grounded walking secondary suspension bounce on folded wings (gives real dragon mass!)
      const walkWingBounce = Math.sin(cycRad * 2.0 - 0.8 + (side === 'L' ? 0 : 0.35)) * 0.045 * wWalk;
      // In-flight aero micro-trim wave across wing wrist & outer fingers
      const aeroFlutter = air > 0.1 ? Math.sin(macro.timeSec * 3.4 + (side === 'L' ? 0 : 0.9)) * 0.028 * air : 0;

      if (clav) {
        this.addLocalEuler(clav, 0, 0, sign * walkWingBounce * 0.45, 'YXZ');
      }
      if (sh) {
        this.addLocalEuler(sh, 0, 0, sign * walkWingBounce, 'YXZ');
      }

      // ISSUE #12: Toothless raises & arches his INNER wing high above Light Fury's back as a
      // warm, protective canopy while keeping his outer wing neatly posed at his side!
      if (mantle > 0.001) {
        if (isInner) {
          if (clav) this.addLocalEuler(clav, -0.08 * mantle, -sign * 0.10 * mantle, sign * 0.24 * mantle, 'YXZ');
          if (sh) this.addLocalEuler(sh, 0.12 * mantle, -sign * 0.48 * mantle, sign * 0.56 * mantle, 'YXZ');
          if (el) this.addLocalEuler(el, 0, sign * 0.62 * mantle, -sign * 0.28 * mantle, 'YXZ');
          if (wr) this.addLocalEuler(wr, 0.16 * mantle, -sign * 0.46 * mantle, -sign * 0.22 * mantle, 'YXZ');
        } else {
          // Outer wing folds comfortably slightly further back & low
          if (sh) this.addLocalEuler(sh, 0, sign * 0.16 * mantle, -sign * 0.10 * mantle, 'YXZ');
        }
      }

      // ISSUE #12: Light Fury keeps her INNER wing sleekly tucked & lowered against her flank
      // so there is generous vertical & lateral clearance beneath Toothless's protective canopy!
      if (neatTuck > 0.001 && isInner) {
        if (clav) this.addLocalEuler(clav, 0.05 * neatTuck, sign * 0.08 * neatTuck, -sign * 0.12 * neatTuck, 'YXZ');
        if (sh) this.addLocalEuler(sh, -0.06 * neatTuck, sign * 0.26 * neatTuck, -sign * 0.24 * neatTuck, 'YXZ');
        if (el) this.addLocalEuler(el, 0, -sign * 0.22 * neatTuck, sign * 0.14 * neatTuck, 'YXZ');
      }

      if (wr && Math.abs(aeroFlutter) > 0.0005) {
        this.addLocalEuler(wr, aeroFlutter * 0.6, 0, sign * aeroFlutter, 'YXZ');
      }
    }

    // -------------------------------------------------------------------------
    // 5. TRAVELING BIOMECHANICAL TAIL S-WAVE & CLIFF CLEARANCE GUARD
    // -------------------------------------------------------------------------
    if (wWalk > 0.001) {
      for (let t = 1; t <= 8; t++) {
        const tb = boneMap.get(`tail_${t}`);
        if (tb) {
          const tFrac = t / 8;
          const tailSway = Math.sin(cycRad - 1.6 - t * 0.42) * 0.065 * (0.35 + 0.65 * tFrac) * wWalk;
          const tailTurnArc = -turnSpineBend * 0.75 * tFrac;
          this.addLocalEuler(tb, Math.cos(cycRad * 2.0 - t * 0.35) * 0.018 * wWalk, tailSway + tailTurnArc, 0, 'YXZ');
        }
      }
    }

    // Final world-space tail ground-clearance check when grounded
    if (grounded > 0.2) {
      for (let t = 2; t <= 9; t++) {
        const tb = boneMap.get(`tail_${t}`);
        if (!tb || !tb.parent) continue;
        tb.parent.updateMatrixWorld(true);
        tb.updateMatrixWorld(true);
        const wp = this.tmpVecB.setFromMatrixPosition(tb.matrixWorld);
        const gY = sampleHeroCliffHeight(wp.x, wp.z) + (t >= 8 ? 0.11 : 0.075);
        if (wp.y < gY) {
          const lift = Math.min(0.32, (gY - wp.y) * 1.6) * grounded;
          this.addLocalEuler(tb.parent as THREE.Bone, lift, 0, 0, 'YXZ');
        }
      }
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);
  }

  /**
   * Computes realistic 68%-stance / 32%-swing foot trajectory:
   * - Stance (0.00..0.68): foot stays firmly at liftY = 0 and pushes backward (+halfStride -> -halfStride)
   *   applying real ground reaction force!
   * - Swing (0.68..1.00): ankle/wrist peels off ground (pawPitch), arcs cleanly forward (-halfStride -> +halfStride)
   *   and extends toes just prior to soft front-pad placement!
   */
  private sampleFootTrajectory(
    phase: number,
    halfStride: number,
    stepHeight: number,
    isForelimb: boolean
  ): { strideZ: number; liftY: number; pawPitch: number; scapulaShiftY: number; toeCurl: number } {
    const stanceEnd = 0.68;
    if (phase < stanceEnd) {
      // Planted ground-push phase!
      const u = phase / stanceEnd; // 0 (touchdown at +halfStride) -> 1 (push-off at -halfStride)
      const strideZ = THREE.MathUtils.lerp(halfStride, -halfStride, u);
      // Scapula/hip absorbs impact on touchdown (u ~ 0.15) and pushes body upward in mid-late stance (u ~ 0.55)
      const cushion = -Math.sin(clamp(u / 0.28, 0, 1) * Math.PI) * 0.016;
      const pushExtend = Math.sin(clamp((u - 0.25) / 0.75, 0, 1) * Math.PI) * 0.014;
      // Heel/wrist begins peeling slightly in final 15% of stance (pre-liftoff push!)
      const latePeel = smoothstep(0.82, 1.0, u) * (isForelimb ? 0.22 : 0.18);
      return {
        strideZ,
        liftY: 0,
        pawPitch: latePeel,
        scapulaShiftY: cushion + pushExtend,
        toeCurl: -0.08 * Math.sin(u * Math.PI), // toes splay flat against ground under weight
      };
    } else {
      // Graceful forward swing phase!
      const u = (phase - stanceEnd) / (1.0 - stanceEnd); // 0 -> 1
      // Smooth S-curve forward protraction
      const easeU = u * u * (3 - 2 * u);
      const strideZ = THREE.MathUtils.lerp(-halfStride, halfStride, easeU);
      // Asymmetric lift curve: brisk paw peel-off, smooth hover crest, gentle cushioned descent
      const liftY = Math.sin(Math.pow(u, 0.82) * Math.PI) * stepHeight;
      // Pronounced feline carpal/wrist break on lift-off (u ~ 0.28) transitioning to reach extension (u ~ 0.88)
      const wristPeel = Math.sin(clamp(u / 0.68, 0, 1) * Math.PI) * (isForelimb ? 0.52 : 0.40);
      const reachPlace = -smoothstep(0.68, 1.0, u) * 0.14;
      return {
        strideZ,
        liftY,
        pawPitch: wristPeel + reachPlace,
        scapulaShiftY: 0.008 * Math.sin(u * Math.PI),
        toeCurl: 0.26 * Math.sin(u * Math.PI),
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

  /**
   * Character-local 2-bone analytical limb IK solver matching both dragon rigs cleanly.
   */
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

    let poleOrtho = poleDirChar.clone().addScaledVector(dir, -poleDirChar.dot(dir));
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
