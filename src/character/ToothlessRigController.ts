import * as THREE from 'three';
import { ToothlessCharacterAsset } from './ToothlessAsset';
import {
  EYE_GAZE_REST_DIR_L,
  EYE_GAZE_REST_DIR_R,
} from './ToothlessSkeleton';
import { sampleHeroCliffHeight } from '../world/NordicCliffWorld';

export interface ToothlessRigState {
  // Head, Neck & Cranial Expressiveness
  neckArch: number;           // [-1, 1]
  neckYaw: number;            // [-1, 1]
  headPitch: number;          // [-1, 1]
  headYaw: number;            // [-1, 1]
  headRoll: number;           // [-1, 1]
  earPerk: number;            // [0, 1] 0=drooped/aerodynamic flat, 1=alert perked antennae
  earAsymmetry: number;       // [-1, 1] curious asymmetric ear tilt
  cheekNubFlare: number;      // [0, 1]

  // Ocular & Eyelids
  eyeYaw: number;             // [-1, 1]
  eyePitch: number;           // [-1, 1]
  pupilDilation: number;      // [0, 1] 0=razor predator slit, 1=cute wide puppy/cat pupil
  blink: number;              // [0, 1] 0=open, 1=closed beaded eyelids
  squint: number;             // [0, 1] lower/upper lid focus squint

  // Jaw, Retractable Dentition & Tongue
  jawOpen: number;            // [0, 1]
  teethExtension: number;     // [0, 1] 0="Toothless" retracted gums, 1=extended Night Fury fangs
  tongueExtend: number;       // [0, 1]
  tongueCurl: number;         // [-1, 1] -1=gentle tip drape over open lip, +1=upward roar curl

  // 6-Spar Primary Wings & Aerodynamic Flight Articulation
  wingUnfurl: number;         // [0, 1] 0=folded dragon cape, 1=full 8.56m flight span
  wingFlap: number;           // [-1, 1] downstroke <-> upstroke
  wingSweep: number;          // [-1, 1] swept dive <-> forward air-brake shield
  wingCamber: number;         // [0, 1] phalangeal airfoil cup
  wingWristFold: number;      // [0, 1] upstroke recovery wrist feathering flex
  wingTipLag: number;         // [-1, 1] phase-delayed phalangeal whip wave across 6 spars
  pelvicFinFlare: number;     // [0, 1] 0=folded down, 1=flared glide fins
  dorsalSpineSplit: number;   // [0, 1] 0=zipped ridge, 1=HTTYD2/3 V-split dorsal flaps

  // Spine, Quadruped Stance, Crawl Stride, Airborne Flight Streamline & Tail / Prosthetic Mechanics
  spineArch: number;          // [-1, 1]
  spineTwist: number;         // [-1, 1]
  forelegStance: number;      // [-1, 1] deep panther chest crouch (-1) <-> proud chest lift (+1)
  hindlegStance: number;      // [-1, 1] coiled haunch crouch (-1) <-> tall alert haunches (+1)
  limbStride: number;         // [-1, 1] diagonal quadruped crawl/prowl stride along cliff
  airborneFactor: number;     // [0, 1] 0=planted on cliff via 4-paw IK, 1=free airborne flight
  legFlightTuck: number;      // [-1, 1] -1=forward landing reach, +1=straight-back aerodynamic flight extension!
  tailYaw: number;            // [-1, 1] S-curve horizontal sweep
  tailPitch: number;          // [-1, 1] vertical tail lift/drop
  tailCurl: number;           // [-1, 1] distal whip curl
  tailWaveAmp: number;        // [0, 1] traveling aerodynamic spine-to-tail flight wave amplitude
  tailWavePhase: number;      // radians phase of traveling flight wave
  rightTailFinFlare: number;  // [-1, 1] -1=folded downwards, 0=flat spread, +1=folded upwards
  leftProstheticFinFlare: number; // [-1, 1] -1=folded downwards, 0=flat spread, +1=folded upwards
  autoSyncProstheticTail: boolean; // Hiccup's automatic solo-flight linkage sync

  // Living Ambient Idle Micro-Behaviors (blinking, ear-twitches, micro-saccades, breathing)
  subtleBreathing: boolean;

  // Hidden World & Alpha Shader Power Channels
  alphaGlow: number;          // [0, 1]
  biolumGlow: number;         // [0, 1]
  lightningCloak: number;     // [0, 1]
}

export const DEFAULT_HERO_RIG_STATE: ToothlessRigState = {
  neckArch: 0.16,
  neckYaw: 0.08,
  headPitch: -0.04,
  headYaw: 0.14,
  headRoll: -0.08,
  earPerk: 0.76,
  earAsymmetry: 0.06,
  cheekNubFlare: 0.50,

  eyeYaw: 0.06,
  eyePitch: 0.02,
  pupilDilation: 0.76,
  blink: 0.0,
  squint: 0.0,

  jawOpen: 0.0,
  teethExtension: 0.0,
  tongueExtend: 0.12,
  tongueCurl: 0.08,

  wingUnfurl: 0.46,
  wingFlap: 0.08,
  wingSweep: -0.05,
  wingCamber: 0.30,
  wingWristFold: 0.0,
  wingTipLag: 0.0,
  pelvicFinFlare: 0.90,
  dorsalSpineSplit: 0.22,

  spineArch: 0.08,
  spineTwist: 0.02,
  forelegStance: 0.10,
  hindlegStance: 0.06,
  limbStride: 0.0,
  airborneFactor: 0.0,
  legFlightTuck: 0.0,
  tailYaw: 0.20,
  tailPitch: 0.26,
  tailCurl: 0.16,
  tailWaveAmp: 0.0,
  tailWavePhase: 0.0,
  rightTailFinFlare: 0.24,
  leftProstheticFinFlare: 0.24,
  autoSyncProstheticTail: true,

  subtleBreathing: true,

  alphaGlow: 0.08,
  biolumGlow: 0.0,
  lightningCloak: 0.0,
};

export interface ToothlessVibePreset {
  id: string;
  label: string;
  subtitle: string;
  patch: Partial<ToothlessRigState>;
}

export const TOOTHLESS_VIBE_PRESETS: ToothlessVibePreset[] = [
  {
    id: 'hero-perch',
    label: 'Hero Perch',
    subtitle: 'Noble Alpha Sentinel',
    patch: { ...DEFAULT_HERO_RIG_STATE },
  },
  {
    id: 'gummy-smile',
    label: 'Gummy Grin',
    subtitle: 'Toothless Happy Smile',
    patch: {
      ...DEFAULT_HERO_RIG_STATE,
      headYaw: 0.22,
      headPitch: -0.06,
      headRoll: -0.24,
      earPerk: 0.96,
      pupilDilation: 0.94,
      squint: 0.22,
      jawOpen: 0.34,
      teethExtension: 0.0,
      tongueExtend: 0.58,
      tongueCurl: 0.26,
      tailYaw: 0.36,
    },
  },
  {
    id: 'courtship-cape',
    label: 'Courtship Cape',
    subtitle: 'Beach Wing-Display Dance',
    patch: {
      ...DEFAULT_HERO_RIG_STATE,
      forelegStance: 0.52,
      neckArch: 0.48,
      headYaw: 0.28,
      headPitch: 0.08,
      headRoll: -0.18,
      earPerk: 1.0,
      pupilDilation: 0.96,
      jawOpen: 0.26,
      teethExtension: 0.0,
      tongueExtend: 0.42,
      wingUnfurl: 0.96,
      wingFlap: 0.88,
      wingSweep: 0.44,
      wingCamber: 0.68,
      dorsalSpineSplit: 0.85,
    },
  },
  {
    id: 'curious-tilt',
    label: 'Curious Tilt',
    subtitle: 'Asymmetric Ear-Perk',
    patch: {
      ...DEFAULT_HERO_RIG_STATE,
      headRoll: -0.62,
      headYaw: 0.14,
      headPitch: 0.08,
      earPerk: 0.92,
      earAsymmetry: -0.45,
      pupilDilation: 0.92,
      jawOpen: 0.05,
      teethExtension: 0.0,
    },
  },
  {
    id: 'alpha-roar',
    label: 'Alpha Roar',
    subtitle: 'Split Spines & Cyan Fire',
    patch: {
      ...DEFAULT_HERO_RIG_STATE,
      forelegStance: -0.48,
      spineArch: 0.36,
      neckArch: -0.22,
      headPitch: -0.22,
      earPerk: 0.08,
      squint: 0.42,
      pupilDilation: 0.08,
      jawOpen: 0.88,
      teethExtension: 1.0,
      tongueExtend: 0.52,
      tongueCurl: 0.46,
      wingUnfurl: 0.92,
      wingFlap: 0.46,
      wingSweep: 0.28,
      dorsalSpineSplit: 1.0,
      alphaGlow: 1.0,
      biolumGlow: 0.65,
      lightningCloak: 0.35,
    },
  },
  {
    id: 'lightning-storm',
    label: 'Storm Skrill',
    subtitle: 'Arc-Plasma Overload',
    patch: {
      ...DEFAULT_HERO_RIG_STATE,
      forelegStance: -0.35,
      wingUnfurl: 0.98,
      wingFlap: 0.62,
      wingCamber: 0.72,
      dorsalSpineSplit: 1.0,
      pupilDilation: 0.16,
      jawOpen: 0.54,
      teethExtension: 1.0,
      alphaGlow: 1.0,
      biolumGlow: 0.92,
      lightningCloak: 1.0,
    },
  },
];

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

const RAW_UP_L = new THREE.Vector3(-0.16, 0.985, 0.06).normalize();
const RAW_UP_R = new THREE.Vector3(0.16, 0.985, 0.06).normalize();
const EYE_RIGHT_AXIS_L = new THREE.Vector3().crossVectors(RAW_UP_L, EYE_GAZE_REST_DIR_L).normalize();
const EYE_UP_AXIS_L = new THREE.Vector3().crossVectors(EYE_GAZE_REST_DIR_L, EYE_RIGHT_AXIS_L).normalize();
const EYE_RIGHT_AXIS_R = new THREE.Vector3().crossVectors(RAW_UP_R, EYE_GAZE_REST_DIR_R).normalize();
const EYE_UP_AXIS_R = new THREE.Vector3().crossVectors(EYE_GAZE_REST_DIR_R, EYE_RIGHT_AXIS_R).normalize();

export class ToothlessRigController {
  public readonly state: ToothlessRigState;
  private readonly asset: ToothlessCharacterAsset;
  private readonly restPos = new Map<string, THREE.Vector3>();
  private readonly restQuat = new Map<string, THREE.Quaternion>();
  private readonly tmpEuler = new THREE.Euler();
  private readonly tmpQuat = new THREE.Quaternion();
  private readonly tmpQuatB = new THREE.Quaternion();
  private readonly tmpVecA = new THREE.Vector3();
  private readonly tmpVecB = new THREE.Vector3();
  private readonly tmpVecC = new THREE.Vector3();
  private elapsed = 0;

  // Secondary spring-damper state for lifelike feline ear-plate & cranial follow-through!
  private prevHeadYaw = 0;
  private prevHeadPitch = 0;
  private prevHeadRoll = 0;
  private earLagYaw = 0;
  private earLagYawVel = 0;
  private earLagPitch = 0;
  private earLagPitchVel = 0;

  constructor(asset: ToothlessCharacterAsset, initialState?: Partial<ToothlessRigState>) {
    this.asset = asset;
    this.state = { ...DEFAULT_HERO_RIG_STATE, ...initialState };
    this.prevHeadYaw = this.state.headYaw;
    this.prevHeadPitch = this.state.headPitch;
    this.prevHeadRoll = this.state.headRoll;

    for (const bone of asset.rig.bones) {
      this.restPos.set(bone.name, bone.position.clone());
      this.restQuat.set(bone.name, bone.quaternion.clone());
    }

    this.applyRigState(0);
  }

  public resetToHeroPose(): void {
    Object.assign(this.state, DEFAULT_HERO_RIG_STATE);
    this.earLagYaw = 0;
    this.earLagYawVel = 0;
    this.earLagPitch = 0;
    this.earLagPitchVel = 0;
    this.applyRigState(0);
  }

  public setState(patch: Partial<ToothlessRigState>): void {
    Object.assign(this.state, patch);
    if (this.state.autoSyncProstheticTail) {
      if (patch.rightTailFinFlare !== undefined) {
        this.state.leftProstheticFinFlare = patch.rightTailFinFlare;
      } else if (patch.leftProstheticFinFlare !== undefined) {
        this.state.rightTailFinFlare = patch.leftProstheticFinFlare;
      } else if (patch.autoSyncProstheticTail === true) {
        this.state.leftProstheticFinFlare = this.state.rightTailFinFlare;
      }
    }
  }

  private setBonePose(
    name: string,
    rx = 0,
    ry = 0,
    rz = 0,
    order: THREE.EulerOrder = 'XYZ',
    dx = 0,
    dy = 0,
    dz = 0
  ): void {
    const bone = this.asset.rig.boneMap.get(name);
    if (!bone) return;
    const rp = this.restPos.get(name)!;
    const rq = this.restQuat.get(name)!;

    bone.position.set(rp.x + dx, rp.y + dy, rp.z + dz);
    this.tmpEuler.set(rx, ry, rz, order);
    this.tmpQuat.setFromEuler(this.tmpEuler);
    bone.quaternion.copy(rq).multiply(this.tmpQuat);
    bone.scale.set(1, 1, 1);
  }

  private setBoneAxisQuat(name: string, quat: THREE.Quaternion): void {
    const bone = this.asset.rig.boneMap.get(name);
    if (!bone) return;
    const rp = this.restPos.get(name)!;
    const rq = this.restQuat.get(name)!;
    bone.position.copy(rp);
    bone.quaternion.copy(rq).multiply(quat);
    bone.scale.set(1, 1, 1);
  }

  /**
   * Computes a spontaneous natural feline blink & ear-twitch envelope when Living Idle is enabled.
   */
  private sampleLivingIdleMicros(timeSec: number): {
    autoBlink: number;
    earTwitchL: number;
    earTwitchR: number;
    gazeMicroX: number;
    gazeMicroY: number;
    pupilPulse: number;
  } {
    if (!this.state.subtleBreathing) {
      return { autoBlink: 0, earTwitchL: 0, earTwitchR: 0, gazeMicroX: 0, gazeMicroY: 0, pupilPulse: 0 };
    }

    // Crisp 170ms feline blink every ~4.6s, with a charming double-blink every 3rd cycle!
    const cycleLen = 4.6;
    const phase = timeSec % cycleLen;
    const cycleIdx = Math.floor(timeSec / cycleLen);
    let autoBlink = 0;
    if (phase > 3.85 && phase < 4.03) {
      autoBlink = Math.sin(((phase - 3.85) / 0.18) * Math.PI);
    } else if (cycleIdx % 3 === 1 && phase > 4.12 && phase < 4.29) {
      autoBlink = Math.sin(((phase - 4.12) / 0.17) * Math.PI);
    }

    // Subtle independent feline ear-plate radar twitches
    const twitchWindowL = (timeSec + 1.3) % 6.2;
    const earTwitchL =
      twitchWindowL < 0.22 ? Math.sin((twitchWindowL / 0.22) * Math.PI) * 0.085 : 0;
    const twitchWindowR = (timeSec + 3.9) % 7.4;
    const earTwitchR =
      twitchWindowR < 0.20 ? -Math.sin((twitchWindowR / 0.20) * Math.PI) * 0.075 : 0;

    // Tiny soft ocular micro-saccades & living pupil accommodation
    const gazeMicroX =
      Math.sin(timeSec * 0.72) * 0.032 + Math.sin(timeSec * 1.95 + 1.1) * 0.014;
    const gazeMicroY = Math.cos(timeSec * 0.58 + 0.4) * 0.022;
    const pupilPulse = Math.sin(timeSec * 1.15) * 0.025;

    return { autoBlink, earTwitchL, earTwitchR, gazeMicroX, gazeMicroY, pupilPulse };
  }

  /**
   * Exact 2-bone analytical limb IK solver keeping all 4 paws planted cleanly on the cliff rock
   * across deep crouch, tall alert stance, and diagonal quadruped crawl strides!
   */
  private solvePlantedLimbIK(
    upperName: string,
    midName: string,
    endName: string,
    pawName: string,
    poleDirWorld: THREE.Vector3,
    targetOffsetChar?: THREE.Vector3,
    pawPitchAdjust = 0
  ): void {
    const rig = this.asset.rig;
    const upperBone = rig.boneMap.get(upperName)!;
    const midBone = rig.boneMap.get(midName)!;
    const endBone = rig.boneMap.get(endName)!;
    const pawBone = rig.boneMap.get(pawName)!;

    upperBone.position.copy(this.restPos.get(upperName)!);
    midBone.position.copy(this.restPos.get(midName)!);
    endBone.position.copy(this.restPos.get(endName)!);
    pawBone.position.copy(this.restPos.get(pawName)!);
    this.tmpEuler.set(pawPitchAdjust, 0, 0, 'XYZ');
    pawBone.quaternion.setFromEuler(this.tmpEuler);

    upperBone.parent!.updateMatrixWorld(true);
    this.asset.rootGroup.updateMatrixWorld(false);
    const rootInv = new THREE.Matrix4().copy(this.asset.rootGroup.matrixWorld).invert();
    const parentCharMat = new THREE.Matrix4().multiplyMatrices(rootInv, upperBone.parent!.matrixWorld);

    const p0 = new THREE.Vector3().setFromMatrixPosition(
      new THREE.Matrix4().multiplyMatrices(
        parentCharMat,
        new THREE.Matrix4().makeTranslation(
          upperBone.position.x,
          upperBone.position.y,
          upperBone.position.z
        )
      )
    );

    const bindUpper = rig.bindWorldPositions.get(upperName)!;
    const bindMid = rig.bindWorldPositions.get(midName)!;
    const bindEnd = rig.bindWorldPositions.get(endName)!;

    const v1Bind = new THREE.Vector3().subVectors(bindMid, bindUpper);
    const v2Bind = new THREE.Vector3().subVectors(bindEnd, bindMid);
    const L1 = v1Bind.length();
    const L2 = v2Bind.length();

    const targetEnd = bindEnd.clone();
    if (targetOffsetChar) {
      targetEnd.add(targetOffsetChar);
      targetEnd.y = Math.max(bindEnd.y, targetEnd.y);
    }
    const toTarget = new THREE.Vector3().subVectors(targetEnd, p0);
    const rawDist = toTarget.length();
    // Strict biomechanical clamp: never lock straight (0.968 max) and never over-collapse (minReach + 0.08)!
    const maxReach = (L1 + L2) * 0.968;
    const minReach = Math.abs(L1 - L2) + 0.085;
    const d = THREE.MathUtils.clamp(rawDist, minReach, maxReach);

    const uD = toTarget.normalize();
    const uPole = poleDirWorld
      .clone()
      .addScaledVector(uD, -poleDirWorld.dot(uD))
      .normalize();

    const cosAlpha = THREE.MathUtils.clamp(
      (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d),
      -1,
      1
    );
    const sinAlpha = Math.sqrt(Math.max(0, 1 - cosAlpha * cosAlpha));

    const p1World = p0
      .clone()
      .addScaledVector(uD, L1 * cosAlpha)
      .addScaledVector(uPole, L1 * sinAlpha);
    const p2World = p0.clone().addScaledVector(uD, d);

    const v1New = new THREE.Vector3().subVectors(p1World, p0).normalize();
    const v2New = new THREE.Vector3().subVectors(p2World, p1World).normalize();

    const qUpperWorld = new THREE.Quaternion().setFromUnitVectors(
      v1Bind.clone().normalize(),
      v1New
    );
    const qMidWorld = new THREE.Quaternion().setFromUnitVectors(
      v2Bind.clone().normalize(),
      v2New
    );

    const parentCharQuat = new THREE.Quaternion().setFromRotationMatrix(parentCharMat);

    upperBone.quaternion.copy(parentCharQuat).invert().multiply(qUpperWorld);
    midBone.quaternion.copy(qUpperWorld).invert().multiply(qMidWorld);
    endBone.quaternion.copy(qMidWorld).invert();
  }

  public update(dt: number): void {
    this.elapsed += dt;

    // Integrate damped secondary spring follow-through on cranial ear-plates from head angular velocity!
    const safeDt = Math.max(0.001, Math.min(dt, 0.05));
    const headYawVel = (this.state.headYaw - this.prevHeadYaw) / safeDt;
    const headPitchVel = (this.state.headPitch - this.prevHeadPitch) / safeDt;
    this.prevHeadYaw = this.state.headYaw;
    this.prevHeadPitch = this.state.headPitch;
    this.prevHeadRoll = this.state.headRoll;

    const stiffness = 68.0;
    const damping = 11.5;
    const targetLagYaw = THREE.MathUtils.clamp(-headYawVel * 0.055, -0.28, 0.28);
    const targetLagPitch = THREE.MathUtils.clamp(-headPitchVel * 0.055, -0.28, 0.28);

    this.earLagYawVel += ((targetLagYaw - this.earLagYaw) * stiffness - this.earLagYawVel * damping) * safeDt;
    this.earLagYaw += this.earLagYawVel * safeDt;

    this.earLagPitchVel += ((targetLagPitch - this.earLagPitch) * stiffness - this.earLagPitchVel * damping) * safeDt;
    this.earLagPitch += this.earLagPitchVel * safeDt;

    this.applyRigState(this.elapsed);
  }

  public applyRigState(timeSec: number): void {
    const s = this.state;
    const air = THREE.MathUtils.clamp(s.airborneFactor, 0, 1);
    const idle = this.sampleLivingIdleMicros(timeSec);

    // Multi-harmonic organic breathing wave
    const breathWave = s.subtleBreathing
      ? Math.sin(timeSec * 1.55) * 0.8 + Math.sin(timeSec * 3.1) * 0.2
      : 0;
    const microTail = s.subtleBreathing ? Math.sin(timeSec * 1.15 - 0.5) * 0.020 : 0;

    // 1. Axial Spine, Independent Fore/Hind Crouch & Interactive Flight-Hover Clearance
    const manualTuckPreview = smoothstep(0.02, 0.55, Math.abs(s.legFlightTuck)) * (1.0 - air);
    const effAir = Math.max(air, manualTuckPreview);
    const groundedWeight = 1.0 - effAir;

    const foreDropY = s.forelegStance >= 0 ? s.forelegStance * 0.055 : s.forelegStance * 0.275;
    const hindDropY = s.hindlegStance >= 0 ? s.hindlegStance * 0.048 : s.hindlegStance * 0.245;
    const avgBodyY = 0.52 * foreDropY + 0.48 * hindDropY;
    // Positive root pitch tilts chest DOWN relative to pelvis when foreDropY < hindDropY!
    const stancePitch = THREE.MathUtils.clamp((hindDropY - foreDropY) * 0.44, -0.22, 0.24);
    const strideYaw = THREE.MathUtils.clamp(s.limbStride, -1, 1) * 0.045 * groundedWeight;
    const hoverPreviewY = manualTuckPreview * 0.34;

    this.setBonePose(
      'root',
      stancePitch * groundedWeight,
      strideYaw,
      0,
      'XYZ',
      0,
      avgBodyY * groundedWeight + hoverPreviewY + breathWave * 0.004,
      0
    );

    const flightWaveChest = s.tailWaveAmp * Math.sin(s.tailWavePhase) * 0.05;
    this.setBonePose('pelvis', s.spineArch * 0.06 + flightWaveChest, -s.spineTwist * 0.05 - strideYaw * 0.6, 0);
    this.setBonePose('spine_1', -s.spineArch * 0.055 + breathWave * 0.007, s.spineTwist * 0.06, 0);
    this.setBonePose('spine_2', -s.spineArch * 0.055 + breathWave * 0.008, s.spineTwist * 0.07, 0);
    this.setBonePose(
      'chest',
      -stancePitch * 0.32 * groundedWeight + breathWave * 0.010 - flightWaveChest * 0.6,
      s.spineTwist * 0.07 + strideYaw * 0.8,
      0
    );

    this.asset.rig.rootBone.updateMatrixWorld(true);

    // Quadruped Limbs: Seamless blend between 4-Paw Crouch/Crawl IK (grounded) & Straight-Back Flight Streamlining!
    const stride = THREE.MathUtils.clamp(s.limbStride, -1, 1);
    const crouchForeSplay = Math.max(0, -s.forelegStance);
    const crouchHindSplay = Math.max(0, -s.hindlegStance);

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const scapBone = this.asset.rig.boneMap.get(`scapula_${side}`)!;
      this.setBonePose(`scapula_${side}`, 0, 0, 0);
      scapBone.updateMatrixWorld(true);

      if (effAir < 0.999) {
        // Diagonal feline crawl gait: FL (+1) & HR (-1) advance together while FR (-1) & HL (+1) push back!
        const foreStrideZ = sign * stride * 0.23;
        const hindStrideZ = -sign * stride * 0.22;
        const foreLiftY = Math.max(0, sign * stride) * Math.sin(Math.abs(stride) * Math.PI) * 0.042;
        const hindLiftY = Math.max(0, -sign * stride) * Math.sin(Math.abs(stride) * Math.PI) * 0.038;

        const foreOffset = new THREE.Vector3(
          sign * crouchForeSplay * 0.055,
          foreLiftY,
          foreStrideZ + crouchForeSplay * 0.045
        );
        const hindOffset = new THREE.Vector3(
          sign * crouchHindSplay * 0.050,
          hindLiftY,
          hindStrideZ - crouchHindSplay * 0.040
        );

        this.asset.rootGroup.updateMatrixWorld(false);
        const rootInv = new THREE.Matrix4().copy(this.asset.rootGroup.matrixWorld).invert();
        const shBone = this.asset.rig.boneMap.get(`shoulder_${side}`)!;
        shBone.position.copy(this.restPos.get(`shoulder_${side}`)!);
        shBone.updateMatrixWorld(true);
        const shChar = this.tmpVecC
          .setFromMatrixPosition(shBone.matrixWorld)
          .applyMatrix4(rootInv);
        const wrTarget = this.asset.rig.bindWorldPositions.get(`wrist_${side}`)!.clone().add(foreOffset);
        const excessReach = shChar.distanceTo(wrTarget) - 0.675;
        if (excessReach > 0) {
          const clampedExcess = Math.min(excessReach, 0.045);
          this.setBonePose(`scapula_${side}`, 0, 0, 0, 'XYZ', 0, -clampedExcess * 1.08 * groundedWeight, 0);
          scapBone.updateMatrixWorld(true);
        }

        // Natural feline outward elbow/knee splay increases smoothly in deep crouch so limbs never clip chest/belly!
        this.solvePlantedLimbIK(
          `shoulder_${side}`,
          `elbow_${side}`,
          `wrist_${side}`,
          `forepaw_${side}`,
          this.tmpVecA.set(sign * (0.20 + 0.16 * crouchForeSplay), -0.08 + 0.18 * crouchForeSplay, -1.0).normalize(),
          foreOffset,
          foreLiftY * 2.2
        );
        this.solvePlantedLimbIK(
          `hip_${side}`,
          `knee_${side}`,
          `ankle_${side}`,
          `hindpaw_${side}`,
          this.tmpVecB.set(sign * (0.20 + 0.14 * crouchHindSplay), 0.14 + 0.16 * crouchHindSplay, 1.0).normalize(),
          hindOffset,
          hindLiftY * 2.0
        );
      }

      if (effAir > 0.001) {
        const tuck = THREE.MathUtils.clamp(s.legFlightTuck, -1, 1);
        // Natural, slightly flexed Night Fury flight posture (NEVER 100% rigid/locked!) + subtle living wind & wingbeat motion!
        const flapBob = s.wingFlap * 0.082 * effAir;
        const windWaveA = Math.sin(timeSec * 2.05 + (side === 'L' ? 0.0 : 1.25)) * 0.052 * effAir;
        const windWaveB = Math.cos(timeSec * 1.58 + (side === 'L' ? 0.7 : 2.2)) * 0.046 * effAir;

        // Forelimbs: tucked comfortably beneath the chest with a natural elbow & wrist bend
        const fShPitch = (tuck >= 0 ? 0.86 * tuck : -0.44 * -tuck) + flapBob * 0.65 + windWaveA * 0.50;
        const fShYaw = tuck >= 0 ? -sign * 0.06 * tuck : 0;
        const fShRoll = (tuck >= 0 ? sign * 0.09 * tuck : sign * 0.05 * -tuck) + sign * windWaveB * 0.35;
        const fElPitch = (tuck >= 0 ? 0.34 * tuck : 0.28 * -tuck) - flapBob * 0.55 + windWaveB * 0.65;
        const fWrPitch = (tuck >= 0 ? 0.40 * tuck : 0.20 * -tuck) + windWaveA * 0.70;
        const fPawPitch = (tuck >= 0 ? 0.36 * tuck : -0.10 * -tuck) + windWaveB * 0.55;

        // Hindlimbs: relaxed knee & ankle flex trailing naturally along the tail base with subtle air-current sway
        const hHipPitch = (tuck >= 0 ? 1.16 * tuck : -0.48 * -tuck) + flapBob * 0.55 + windWaveB * 0.55;
        const hHipYaw = (tuck >= 0 ? -sign * 0.05 * tuck : 0) + sign * windWaveA * 0.25;
        const hHipRoll = (tuck >= 0 ? sign * 0.07 * tuck : sign * 0.05 * -tuck) + sign * windWaveA * 0.30;
        const hKneePitch = (tuck >= 0 ? -0.66 * tuck : 0.34 * -tuck) - flapBob * 0.50 - windWaveA * 0.65;
        const hAnklePitch = (tuck >= 0 ? 0.78 * tuck : -0.16 * -tuck) + flapBob * 0.45 + windWaveB * 0.75;
        const hPawPitch = (tuck >= 0 ? 0.62 * tuck : 0.16 * -tuck) + windWaveA * 0.60;

        const blendLimbJoint = (bName: string, rx: number, ry: number, rz: number) => {
          const b = this.asset.rig.boneMap.get(bName)!;
          this.tmpEuler.set(rx, ry, rz, 'XYZ');
          this.tmpQuat.copy(this.restQuat.get(bName)!).multiply(this.tmpQuatB.setFromEuler(this.tmpEuler));
          if (effAir >= 0.999) {
            b.position.copy(this.restPos.get(bName)!);
            b.quaternion.copy(this.tmpQuat);
          } else {
            b.quaternion.slerp(this.tmpQuat, effAir);
          }
        };

        blendLimbJoint(`shoulder_${side}`, fShPitch, fShYaw, fShRoll);
        blendLimbJoint(`elbow_${side}`, fElPitch, 0, 0);
        blendLimbJoint(`wrist_${side}`, fWrPitch, 0, 0);
        blendLimbJoint(`forepaw_${side}`, fPawPitch, 0, 0);

        blendLimbJoint(`hip_${side}`, hHipPitch, hHipYaw, hHipRoll);
        blendLimbJoint(`knee_${side}`, hKneePitch, 0, 0);
        blendLimbJoint(`ankle_${side}`, hAnklePitch, 0, 0);
        blendLimbJoint(`hindpaw_${side}`, hPawPitch, 0, 0);
      }
    }

    // 2. Lifelike Cervical-Cranium Distributed Coupling!
    // Turning/pitching/rolling the head recruits natural S-curve follow-through down neck_1..4!
    const roarTension = smoothstep(0.28, 0.85, s.jawOpen);
    const nBasePitch = -s.neckArch * 0.12 - breathWave * 0.009 - roarTension * 0.035;
    const nBaseYaw = s.neckYaw * 0.13;

    this.setBonePose(
      'neck_1',
      nBasePitch + s.headPitch * 0.04,
      nBaseYaw + s.headYaw * 0.05,
      s.headRoll * 0.04,
      'YXZ'
    );
    this.setBonePose(
      'neck_2',
      nBasePitch + s.headPitch * 0.07,
      nBaseYaw + s.headYaw * 0.09,
      s.headRoll * 0.07,
      'YXZ'
    );
    this.setBonePose(
      'neck_3',
      nBasePitch * 0.9 + s.headPitch * 0.10,
      nBaseYaw + s.headYaw * 0.14,
      s.headRoll * 0.11,
      'YXZ'
    );
    this.setBonePose(
      'neck_4',
      nBasePitch * 0.8 + s.headPitch * 0.14,
      nBaseYaw * 0.85 + s.headYaw * 0.19,
      s.headRoll * 0.15,
      'YXZ'
    );

    this.setBonePose(
      'head',
      s.headPitch * 0.36 + breathWave * 0.010 - roarTension * 0.05,
      s.headYaw * 0.46,
      s.headRoll * 0.36,
      'YXZ'
    );

    // 3. 8 Cranial Appendages with Gravity Roll-Follow, Roar Sleek-Back & Spring Inertia!
    const effectiveEarPerk = THREE.MathUtils.clamp(s.earPerk - roarTension * 0.28, 0, 1);
    const perkBase = (effectiveEarPerk - 0.5) * 0.72;
    // Curious head tilt (headRoll) naturally lets the lower ear relax slightly & upper ear perk!
    const rollGravityAsym = s.headRoll * 0.18;

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const idleTwitch = side === 'L' ? idle.earTwitchL : idle.earTwitchR;
      const asym = sign * (s.earAsymmetry * 0.28 + rollGravityAsym) + idleTwitch;
      const earLift = perkBase + asym + this.earLagPitch * 0.65;
      const earSpread = (1.0 - effectiveEarPerk) * 0.36 - sign * this.earLagYaw * 0.55;

      this.setBonePose(`ear_${side}_1`, earLift * 0.65, -sign * earSpread, sign * earLift * 0.25, 'YXZ');
      this.setBonePose(`ear_${side}_2`, earLift * 0.36 + this.earLagPitch * 0.35, -sign * earSpread * 0.35, 0, 'YXZ');
      this.setBonePose(`ear_${side}_3`, earLift * 0.24 + this.earLagPitch * 0.25, 0, 0, 'YXZ');

      const effectiveNubFlare = THREE.MathUtils.clamp(s.cheekNubFlare + roarTension * 0.22, 0, 1);
      const nubFlare = (effectiveNubFlare - 0.5) * 0.44;
      this.setBonePose(`cheekUpper_${side}_1`, nubFlare * 0.3, -sign * (nubFlare * 0.55 + this.earLagYaw * 0.25), 0);
      this.setBonePose(`cheekLower_${side}_1`, nubFlare * 0.2, -sign * (nubFlare * 0.45 + this.earLagYaw * 0.20), 0);
    }

    // 4. Natural Goldilocks Eyes + Palpebral Gaze-Follow Reflex + Living Blinks!
    const effEyeYaw = THREE.MathUtils.clamp(s.eyeYaw + idle.gazeMicroX, -1, 1);
    const effEyePitch = THREE.MathUtils.clamp(s.eyePitch + idle.gazeMicroY, -1, 1);
    const effBlink = Math.max(s.blink, idle.autoBlink * (1.0 - s.blink));
    const effSquint = THREE.MathUtils.clamp(s.squint + roarTension * 0.26, 0, 1);

    for (const side of ['L', 'R'] as const) {
      const rightAxis = side === 'L' ? EYE_RIGHT_AXIS_L : EYE_RIGHT_AXIS_R;
      const upAxis = side === 'L' ? EYE_UP_AXIS_L : EYE_UP_AXIS_R;

      this.tmpQuat.setFromAxisAngle(upAxis, effEyeYaw * 0.34);
      this.tmpQuatB.setFromAxisAngle(rightAxis, -effEyePitch * 0.28);
      this.tmpQuat.multiply(this.tmpQuatB);
      this.setBoneAxisQuat(`eye_${side}`, this.tmpQuat);

      // Palpebral Gaze-Follow Reflex: eyelids subtly track vertical eye gaze!
      const upperGazeFollow = effEyePitch > 0 ? -effEyePitch * 0.14 : -effEyePitch * 0.22;
      const lowerGazeFollow = effEyePitch > 0 ? effEyePitch * 0.12 : effEyePitch * 0.08;

      const upperClose = THREE.MathUtils.clamp(
        Math.max(effBlink, effSquint * 0.52) + upperGazeFollow * (1.0 - effBlink),
        -0.14,
        1.0
      );
      const lowerClose = THREE.MathUtils.clamp(
        Math.max(effBlink, effSquint * 0.60) + lowerGazeFollow * (1.0 - effBlink),
        -0.10,
        1.0
      );

      this.tmpQuat.setFromAxisAngle(rightAxis, upperClose * 0.72);
      this.setBoneAxisQuat(`eyelidUpper_${side}`, this.tmpQuat);

      this.tmpQuat.setFromAxisAngle(rightAxis, -lowerClose * 0.64);
      this.setBoneAxisQuat(`eyelidLower_${side}`, this.tmpQuat);
    }

    // Update Ocular & Skin Custom Shader Uniforms
    const effPupil = THREE.MathUtils.clamp(s.pupilDilation + idle.pupilPulse - roarTension * 0.25, 0, 1);
    this.asset.materials.eyeMaterials.uniforms.uPupilDilation.value = effPupil;
    this.asset.materials.eyeMaterials.uniforms.uAlphaGlow.value = s.alphaGlow;

    this.asset.materials.uniforms.uTime.value = timeSec;
    this.asset.materials.uniforms.uAlphaGlow.value = s.alphaGlow;
    this.asset.materials.uniforms.uBiolumGlow.value = s.biolumGlow;
    this.asset.materials.uniforms.uLightningCloak.value = s.lightningCloak;

    // 5. Seamless Hinged Jaw, Lip-Safe Retractable Teeth & Physically Bounded Tongue!
    this.setBonePose('jaw', s.jawOpen * 0.66, 0, 0);

    const lipClearance = 0.28 + 0.72 * smoothstep(0.0, 0.14, s.jawOpen);
    const effectiveTeethExt = s.teethExtension * lipClearance;
    const retractFactor = 1.0 - effectiveTeethExt;
    this.setBonePose('teethUpper', 0, 0, 0, 'XYZ', 0, retractFactor * 0.025, 0);
    this.setBonePose('teethLower', 0, 0, 0, 'XYZ', 0, -retractFactor * 0.023, 0);

    const mouthOpenClearance = smoothstep(0.06, 0.48, s.jawOpen);
    const tForward = s.tongueExtend * 0.044 * mouthOpenClearance;

    if (s.tongueCurl >= 0) {
      const upPitch = -s.tongueCurl * (0.018 + 0.20 * mouthOpenClearance);
      this.setBonePose('tongue_1', upPitch * 0.35, 0, 0, 'XYZ', 0, 0, tForward);
      this.setBonePose('tongue_2', upPitch * 0.65, 0, 0);
      this.setBonePose('tongue_3', upPitch * 0.95, 0, 0);
      this.setBonePose('tongue_4', upPitch * 1.15, 0, 0);
    } else {
      const tipDrapeAllow = mouthOpenClearance * smoothstep(0.20, 0.95, s.tongueExtend);
      const downTip = -s.tongueCurl * tipDrapeAllow;
      this.setBonePose('tongue_1', 0, 0, 0, 'XYZ', 0, 0, tForward);
      this.setBonePose('tongue_2', 0, 0, 0);
      this.setBonePose('tongue_3', downTip * 0.13, 0, 0);
      this.setBonePose('tongue_4', downTip * 0.20, 0, 0);
    }

    // 6. 6-Spar Primary Wings (Cliff-Safe When Perched <-> Full-Stroke Aerodynamic Whip in Flight!)
    const fold = THREE.MathUtils.clamp(1.0 - s.wingUnfurl + s.wingWristFold * 0.28, 0, 1);
    const downstrokeMax = THREE.MathUtils.lerp(0.11, 0.74, effAir);

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;

      const rawFlap = s.wingFlap * (0.25 + 0.75 * s.wingUnfurl);
      const shoulderFlap = sign * (rawFlap >= 0 ? rawFlap * 0.74 : rawFlap * downstrokeMax);
      const outerStrokeCup =
        rawFlap < 0 ? rawFlap * THREE.MathUtils.lerp(0.04, 0.26, air) * s.wingUnfurl : 0;
      const sweepAngle = sign * s.wingSweep * 0.44;
      const recoveryElbowBend = s.wingWristFold * 0.46;

      this.setBonePose(
        `wingClavicle_${side}`,
        0.05 * fold,
        sign * 0.12 * fold,
        shoulderFlap * 0.18,
        'YXZ'
      );

      this.setBonePose(
        `wingShoulder_${side}`,
        s.wingCamber * 0.09,
        sign * 0.82 * fold + sweepAngle,
        shoulderFlap - sign * 0.22 * fold,
        'YXZ'
      );

      this.setBonePose(
        `wingElbow_${side}`,
        0,
        -sign * (1.42 * fold + recoveryElbowBend * 0.45),
        sign * 0.86 * fold + shoulderFlap * 0.22 + sign * s.wingTipLag * 0.16,
        'YXZ'
      );

      this.setBonePose(
        `wingWrist_${side}`,
        -0.35 * fold - s.wingCamber * 0.18,
        sign * (1.32 * fold + recoveryElbowBend * 0.55) + sweepAngle * 0.35,
        sign * 0.12 * fold + sign * outerStrokeCup * 0.30 + sign * s.wingTipLag * 0.26,
        'YXZ'
      );

      for (let f = 1; f <= 6; f++) {
        const fNorm = (f - 1) / 5;
        const pleatYaw = sign * (-0.38 + fNorm * 0.58) * fold;
        const camberPitch = -s.wingCamber * (0.14 + 0.18 * (1.0 - fNorm)) - 0.10 * fold;
        // Progressive phase-lagged phalangeal whip across all 6 wing fingers!
        const whipFlex = s.wingTipLag * (0.18 + 0.26 * fNorm);
        const perchedSafeDownFlex =
          rawFlap >= 0
            ? -rawFlap * 0.22
            : -rawFlap *
              THREE.MathUtils.lerp(
                0.06 * Math.pow(Math.max(0, (fNorm - 0.5) / 0.5), 1.8),
                0.24,
                air
              );

        this.setBonePose(
          `wingFinger_${side}_${f}_a`,
          camberPitch,
          pleatYaw,
          sign * (perchedSafeDownFlex * 0.4 + whipFlex * 0.45),
          'YXZ'
        );
        this.setBonePose(
          `wingFinger_${side}_${f}_b`,
          camberPitch * 0.5,
          pleatYaw * 0.25,
          sign * (perchedSafeDownFlex * 0.7 + whipFlex * 0.75),
          'YXZ'
        );
      }

      // 3-Spar Pelvic Glide Fins: non-compressing vertical fold around Z
      const pFoldDown = 1.0 - s.pelvicFinFlare;
      for (let pf = 1; pf <= 3; pf++) {
        this.setBonePose(`pelvicFin_${side}_${pf}`, 0, 0, -sign * pFoldDown * 1.18, 'XYZ');
      }
    }

    // 7. V-Splitting Dorsal Spines Morph Target
    for (const dMesh of this.asset.dorsalSpineMeshes) {
      if (dMesh.morphTargetInfluences && dMesh.morphTargetInfluences.length > 0) {
        dMesh.morphTargetInfluences[0] = s.dorsalSpineSplit;
      }
    }

    // 8. 10-Bone Flexible Tail + Traveling Flight Wave + Cliff-Clearance Guard!
    const effectiveLeftFlare = s.autoSyncProstheticTail
      ? s.rightTailFinFlare
      : s.leftProstheticFinFlare;

    const minFinVal = Math.min(s.rightTailFinFlare, effectiveLeftFlare);
    const downwardFinHang =
      minFinVal < 0 ? Math.sin(Math.abs(minFinVal) * 1.38) * 0.53 : 0.02;

    for (let t = 1; t <= 10; t++) {
      const tFrac = t / 10;
      const isSplintedDistal = t >= 9;

      const yawCurve = isSplintedDistal
        ? 0
        : s.tailYaw * 0.13 +
          s.tailCurl * 0.18 * Math.pow(tFrac, 1.4) +
          microTail * tFrac;

      // Traveling aerodynamic wave propagates down tail_1..8 during active flight!
      const travelingWave = isSplintedDistal
        ? 0
        : s.tailWaveAmp * Math.sin(s.tailWavePhase - t * 0.48) * 0.085 * (0.4 + 0.6 * tFrac);

      let pitchCurve = isSplintedDistal
        ? 0
        : s.tailPitch * 0.088 * (0.45 + tFrac) + travelingWave;

      // Cliff-floor clearance guard active whenever perched near the cliff (air < 0.85)
      if (!isSplintedDistal && air < 0.85 && t >= 2 && t <= 8) {
        const minSafeDistalPitch = Math.max(0, (downwardFinHang - 0.05) * 0.135) * (1.0 - air);
        if (pitchCurve < minSafeDistalPitch) {
          pitchCurve = THREE.MathUtils.lerp(pitchCurve, minSafeDistalPitch, smoothstep(1, 5, t));
        }
      }

      this.setBonePose(`tail_${t}`, pitchCurve, yawCurve, 0, 'YXZ');

      if (air < 0.85) {
        const tBone = this.asset.rig.boneMap.get(`tail_${t}`)!;
        tBone.parent!.updateMatrixWorld(true);
        tBone.updateMatrixWorld(true);
        const wp = this.tmpVecC.setFromMatrixPosition(tBone.matrixWorld);
        const groundY = sampleHeroCliffHeight(wp.x, wp.z);
        const reqClearance = groundY + (t >= 8 ? 0.055 + downwardFinHang : 0.065);
        if (wp.y < reqClearance && t > 1) {
          const pBone = tBone.parent as THREE.Bone;
          const segLen = tBone.position.length();
          const liftRad =
            Math.min(0.45, (reqClearance - wp.y) / Math.max(0.15, segLen)) * (1.0 - air);
          this.tmpEuler.set(liftRad, 0, 0, 'XYZ');
          this.tmpQuat.setFromEuler(this.tmpEuler);
          pBone.quaternion.multiply(this.tmpQuat);
          pBone.updateMatrixWorld(true);
        }
      }
    }

    // Rigid Non-Compressing Vertical Hinge Fold on Both Caudal Tail Fins:
    const maxFoldRad = 1.38;
    const rightFoldRad = s.rightTailFinFlare * maxFoldRad;
    const leftFoldRad = effectiveLeftFlare * maxFoldRad;

    this.setBonePose('tailFinHinge_R', 0, 0, -rightFoldRad, 'XYZ');
    this.setBonePose('tailFinHinge_L', 0, 0, leftFoldRad, 'XYZ');

    for (let k = 1; k <= 5; k++) {
      this.setBonePose(`tailFin_R_${k}`, 0, 0, 0);
      this.setBonePose(`tailFin_L_${k}`, 0, 0, 0);
    }

    this.setBonePose('prostheticCollar', 0, 0, leftFoldRad * 0.22);
    this.setBonePose('prostheticRod', 0, 0, 0);

    this.asset.rig.rootBone.updateMatrixWorld(true);
  }
}
