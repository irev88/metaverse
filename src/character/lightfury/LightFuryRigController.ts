import * as THREE from 'three';
import { sampleHeroCliffHeight } from '../../world/NordicCliffWorld';
import { LightFuryCharacterAsset } from './LightFuryAsset';
import {
  LF_EYE_GAZE_REST_DIR_L,
  LF_EYE_GAZE_REST_DIR_R,
} from './LightFurySkeleton';

export interface LightFuryRigState {
  // Head, Swan-Neck & Cute Bunny-Ear Expressiveness
  neckArch: number;           // [-1, 1]
  neckYaw: number;            // [-1, 1]
  headPitch: number;          // [-1, 1]
  headYaw: number;            // [-1, 1]
  headRoll: number;           // [-1, 1] signature adorable feline head-tilt!
  earPerk: number;            // [0, 1] rounded bunny-ear nubs drooped <-> alert
  earAsymmetry: number;       // [-1, 1]
  cheekNubFlare: number;      // [0, 1]

  // Sky-Blue Feline Eyes & Eyelids
  eyeYaw: number;             // [-1, 1]
  eyePitch: number;           // [-1, 1]
  pupilDilation: number;      // [0, 1] 0=razor cat slit, 1=huge soulful sky-blue pupils!
  blink: number;              // [0, 1]
  squint: number;             // [0, 1] affectionate feline happy-squint!

  // Jaw, Retractable Pearly Dentition & Pink Feline Tongue
  jawOpen: number;            // [0, 1]
  teethExtension: number;     // [0, 1] 0=cute hidden gums, 1=extended Strike-Class fangs
  tongueExtend: number;       // [0, 1]
  tongueCurl: number;         // [-1, 1]

  // 6-Spar Iridescent Wings, Coy Wing-Veil & Continuous Dorsal Sail
  wingUnfurl: number;         // [0, 1]
  wingFlap: number;           // [-1, 1]
  wingSweep: number;          // [-1, 1]
  wingCamber: number;         // [0, 1]
  wingWristFold: number;      // [0, 1]
  wingTipLag: number;         // [-1, 1]
  coyWingVeil: number;        // [0, 1] signature shy Hidden World forward wing-drape peek!
  pelvicFinFlare: number;     // [0, 1]
  dorsalSailFlex: number;     // [0, 1] smooth continuous dorsal ridge flex

  // Feline Spine, Crouch/Crawl IK, Straight-Back Flight Streamline & Heart-Shaped Tail Flukes
  spineArch: number;          // [-1, 1]
  spineTwist: number;         // [-1, 1]
  forelegStance: number;      // [-1, 1] deep feline chest crouch (-1) <-> proud chest lift (+1)
  hindlegStance: number;      // [-1, 1] coiled haunch crouch (-1) <-> tall alert haunches (+1)
  limbStride: number;         // [-1, 1] diagonal feline crawl/prowl stride along cliff
  airborneFactor: number;     // [0, 1]
  legFlightTuck: number;      // [-1, 1] -1=forward landing reach, +1=straight-back aerodynamic flight extension!
  tailYaw: number;            // [-1, 1]
  tailPitch: number;          // [-1, 1]
  tailCurl: number;           // [-1, 1]
  tailWaveAmp: number;        // [0, 1]
  tailWavePhase: number;      // radians
  rightHeartFinFlare: number; // [-1, 1] -1=folded down, 0=flat heart silhouette, +1=folded up
  leftHeartFinFlare: number;  // [-1, 1]
  syncHeartTailFlukes: boolean;

  // Living Feline Idle Micro-Behaviors (purring, curious micro-tilt, blinking, ear twitches)
  subtleBreathing: boolean;

  // Signature Light Fury Specialty Shader Channels!
  iridescentShimmer: number;  // [0, 1] pinpoint stardust crystal glimmer & opal sheen
  pastelTint: number;         // [0, 1] subtle pale-pink underwing & pale-blue belly undertones
  radiantGlow: number;        // [0, 1] partly-glowing radiant skin & shimmer markings!
  biolumGlow: number;         // [0, 1] Hidden World neon rose-pink, magenta-orchid & cyan bioluminescence!
  plasmaGlow: number;         // [0, 1] orchid-rose & cyan plasma charge glow
  thermalCloak: number;       // [0, 1] superheated plasma-mirror optical invisibility!
}

export const DEFAULT_LIGHT_FURY_STATE: LightFuryRigState = {
  neckArch: 0.24,
  neckYaw: -0.10,
  headPitch: -0.02,
  headYaw: -0.18,      // Softly glancing affectionately toward Toothless & viewer!
  headRoll: 0.16,      // Cute gentle feline head-tilt!
  earPerk: 0.82,
  earAsymmetry: 0.10,
  cheekNubFlare: 0.52,

  eyeYaw: -0.08,
  eyePitch: 0.04,
  pupilDilation: 0.84, // Big, cute, expressive sky-blue eyes!
  blink: 0.0,
  squint: 0.08,

  jawOpen: 0.0,
  teethExtension: 0.0,
  tongueExtend: 0.10,
  tongueCurl: 0.05,

  wingUnfurl: 0.36,
  wingFlap: 0.06,
  wingSweep: -0.08,
  wingCamber: 0.28,
  wingWristFold: 0.0,
  wingTipLag: 0.0,
  coyWingVeil: 0.0,
  pelvicFinFlare: 0.88,
  dorsalSailFlex: 0.24,

  spineArch: 0.12,
  spineTwist: -0.04,
  forelegStance: 0.14,
  hindlegStance: 0.08,
  limbStride: 0.0,
  airborneFactor: 0.0,
  legFlightTuck: 0.0,
  tailYaw: -0.26,      // Gracefully curved feline tail!
  tailPitch: 0.24,
  tailCurl: -0.24,
  tailWaveAmp: 0.0,
  tailWavePhase: 0.0,
  rightHeartFinFlare: 0.18,
  leftHeartFinFlare: 0.18,
  syncHeartTailFlukes: true,

  subtleBreathing: true,

  iridescentShimmer: 0.78,
  pastelTint: 0.78,
  radiantGlow: 0.34,
  biolumGlow: 0.0,
  plasmaGlow: 0.04,
  thermalCloak: 0.0,
};

export interface LightFuryVibePreset {
  id: string;
  label: string;
  subtitle: string;
  patch: Partial<LightFuryRigState>;
}

export const LIGHT_FURY_VIBE_PRESETS: LightFuryVibePreset[] = [
  {
    id: 'serene-mate',
    label: 'Serene Mate',
    subtitle: 'Sweet Gaze & Heart Tail',
    patch: { ...DEFAULT_LIGHT_FURY_STATE },
  },
  {
    id: 'curious-cat',
    label: 'Curious Tilt',
    subtitle: 'Adorable Head-Roll & Big Eyes',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      headRoll: 0.68,
      headPitch: 0.10,
      headYaw: -0.06,
      earPerk: 0.98,
      earAsymmetry: 0.42,
      pupilDilation: 0.96,
      squint: 0.0,
      jawOpen: 0.06,
      teethExtension: 0.0,
      coyWingVeil: 0.0,
      thermalCloak: 0.0,
      plasmaGlow: 0.08,
    },
  },
  {
    id: 'happy-purr',
    label: 'Happy Purr',
    subtitle: 'Blissful Feline Smile',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      neckArch: 0.42,
      neckYaw: -0.22,
      headYaw: -0.28,
      headPitch: -0.10,
      headRoll: 0.28,
      earPerk: 0.66,
      squint: 0.68,
      blink: 0.22,
      pupilDilation: 0.90,
      jawOpen: 0.14,
      teethExtension: 0.0,
      tongueExtend: 0.35,
      tailYaw: -0.45,
      tailCurl: -0.48,
      rightHeartFinFlare: 0.04,
      leftHeartFinFlare: 0.04,
      coyWingVeil: 0.0,
      thermalCloak: 0.0,
      iridescentShimmer: 0.95,
    },
  },
  {
    id: 'coy-wing-veil',
    label: 'Coy Wing Peek',
    subtitle: 'Shy Wing-Curtain Pose',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      headYaw: -0.26,
      headPitch: -0.12,
      headRoll: 0.34,
      eyeYaw: 0.22,
      eyePitch: 0.14,
      pupilDilation: 0.88,
      earPerk: 0.58,
      coyWingVeil: 0.92,
      wingUnfurl: 0.52,
      thermalCloak: 0.0,
    },
  },
  {
    id: 'hidden-world-biolum',
    label: 'Hidden World Glow',
    subtitle: 'Neon Rose & Cyan Filigree',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      wingUnfurl: 0.78,
      wingFlap: 0.22,
      neckArch: 0.34,
      headRoll: 0.22,
      pupilDilation: 0.94,
      iridescentShimmer: 0.96,
      radiantGlow: 0.64,
      biolumGlow: 0.96,
      plasmaGlow: 0.42,
      thermalCloak: 0.0,
    },
  },
  {
    id: 'mirror-cloak',
    label: 'Mirror Cloak',
    subtitle: 'Plasma Silicate Stealth',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      wingUnfurl: 0.72,
      wingFlap: 0.24,
      neckArch: 0.30,
      headPitch: 0.12,
      pupilDilation: 0.62,
      coyWingVeil: 0.0,
      plasmaGlow: 0.78,
      iridescentShimmer: 1.0,
      thermalCloak: 0.86,
    },
  },
  {
    id: 'strike-hiss',
    label: 'Strike Hiss',
    subtitle: 'Fangs & Orchid Plasma',
    patch: {
      ...DEFAULT_LIGHT_FURY_STATE,
      forelegStance: -0.55,
      spineArch: 0.42,
      neckArch: -0.18,
      headPitch: -0.14,
      headRoll: -0.08,
      earPerk: 0.06,
      squint: 0.48,
      pupilDilation: 0.06,
      jawOpen: 0.76,
      teethExtension: 1.0,
      tongueExtend: 0.48,
      tongueCurl: 0.45,
      wingUnfurl: 0.84,
      wingFlap: 0.38,
      wingSweep: 0.32,
      coyWingVeil: 0.0,
      dorsalSailFlex: 1.0,
      plasmaGlow: 0.92,
      thermalCloak: 0.0,
    },
  },
];

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

const LF_RAW_UP_L = new THREE.Vector3(-0.19, 0.980, 0.06).normalize();
const LF_RAW_UP_R = new THREE.Vector3(0.19, 0.980, 0.06).normalize();
const LF_EYE_RIGHT_L = new THREE.Vector3().crossVectors(LF_RAW_UP_L, LF_EYE_GAZE_REST_DIR_L).normalize();
const LF_EYE_UP_L = new THREE.Vector3().crossVectors(LF_EYE_GAZE_REST_DIR_L, LF_EYE_RIGHT_L).normalize();
const LF_EYE_RIGHT_R = new THREE.Vector3().crossVectors(LF_RAW_UP_R, LF_EYE_GAZE_REST_DIR_R).normalize();
const LF_EYE_UP_R = new THREE.Vector3().crossVectors(LF_EYE_GAZE_REST_DIR_R, LF_EYE_RIGHT_R).normalize();

export class LightFuryRigController {
  public readonly state: LightFuryRigState;
  private readonly asset: LightFuryCharacterAsset;
  private readonly restPos = new Map<string, THREE.Vector3>();
  private readonly restQuat = new Map<string, THREE.Quaternion>();
  private readonly tmpEuler = new THREE.Euler();
  private readonly tmpQuat = new THREE.Quaternion();
  private readonly tmpQuatB = new THREE.Quaternion();
  private readonly tmpVecA = new THREE.Vector3();
  private readonly tmpVecB = new THREE.Vector3();
  private readonly tmpVecC = new THREE.Vector3();
  private elapsed = 0;

  private prevHeadYaw = 0;
  private prevHeadPitch = 0;
  private earLagYaw = 0;
  private earLagYawVel = 0;
  private earLagPitch = 0;
  private earLagPitchVel = 0;

  constructor(asset: LightFuryCharacterAsset, initialState?: Partial<LightFuryRigState>) {
    this.asset = asset;
    this.state = { ...DEFAULT_LIGHT_FURY_STATE, ...initialState };
    this.prevHeadYaw = this.state.headYaw;
    this.prevHeadPitch = this.state.headPitch;

    for (const bone of asset.rig.bones) {
      this.restPos.set(bone.name, bone.position.clone());
      this.restQuat.set(bone.name, bone.quaternion.clone());
    }

    this.applyRigState(0);
  }

  public resetToHeroPose(): void {
    Object.assign(this.state, DEFAULT_LIGHT_FURY_STATE);
    this.earLagYaw = 0;
    this.earLagYawVel = 0;
    this.earLagPitch = 0;
    this.earLagPitchVel = 0;
    this.applyRigState(0);
  }

  public setState(patch: Partial<LightFuryRigState>): void {
    Object.assign(this.state, patch);
    if (this.state.syncHeartTailFlukes) {
      if (patch.rightHeartFinFlare !== undefined) {
        this.state.leftHeartFinFlare = patch.rightHeartFinFlare;
      } else if (patch.leftHeartFinFlare !== undefined) {
        this.state.rightHeartFinFlare = patch.leftHeartFinFlare;
      } else if (patch.syncHeartTailFlukes === true) {
        this.state.leftHeartFinFlare = this.state.rightHeartFinFlare;
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

  private sampleLivingFelineIdleMicros(timeSec: number) {
    if (!this.state.subtleBreathing) {
      return {
        autoBlink: 0,
        earTwitchL: 0,
        earTwitchR: 0,
        gazeMicroX: 0,
        gazeMicroY: 0,
        pupilPulse: 0,
        felineHeadMicroRoll: 0,
      };
    }

    // Offset blink rhythm from Toothless so the two dragons blink independently like real living creatures!
    const cycleA = (timeSec + 2.15) % 4.35;
    let autoBlink = 0;
    if (cycleA < 0.16) {
      autoBlink = Math.sin((cycleA / 0.16) * Math.PI);
    } else if (cycleA > 0.25 && cycleA < 0.40 && Math.floor((timeSec + 2.15) / 4.35) % 3 === 1) {
      autoBlink = Math.sin(((cycleA - 0.25) / 0.15) * Math.PI);
    }

    const twitchL = (timeSec + 0.8) % 5.6;
    const earTwitchL = twitchL < 0.20 ? Math.sin((twitchL / 0.20) * Math.PI) * 0.095 : 0;
    const twitchR = (timeSec + 3.2) % 6.8;
    const earTwitchR = twitchR < 0.18 ? -Math.sin((twitchR / 0.18) * Math.PI) * 0.085 : 0;

    const gazeMicroX = Math.sin(timeSec * 0.68 + 1.4) * 0.030 + Math.sin(timeSec * 1.85) * 0.012;
    const gazeMicroY = Math.cos(timeSec * 0.54 + 2.1) * 0.022;
    const pupilPulse = Math.sin(timeSec * 1.25 + 0.8) * 0.028;
    const felineHeadMicroRoll = Math.sin(timeSec * 0.62 + 0.7) * 0.026;

    return {
      autoBlink,
      earTwitchL,
      earTwitchR,
      gazeMicroX,
      gazeMicroY,
      pupilPulse,
      felineHeadMicroRoll,
    };
  }

  /**
   * World-transform-invariant 2-bone analytical limb IK solver keeping all 4 dainty feline paws
   * 100% planted flat on the rock regardless of rootGroup world position or rotation!
   */
  private solvePlantedLimbIK(
    upperName: string,
    midName: string,
    endName: string,
    pawName: string,
    poleDirChar: THREE.Vector3,
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
    const maxReach = (L1 + L2) * 0.968;
    const minReach = Math.abs(L1 - L2) + 0.080;
    const d = THREE.MathUtils.clamp(rawDist, minReach, maxReach);

    const uD = toTarget.normalize();
    const uPole = poleDirChar
      .clone()
      .addScaledVector(uD, -poleDirChar.dot(uD))
      .normalize();

    const cosAlpha = THREE.MathUtils.clamp(
      (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d),
      -1,
      1
    );
    const sinAlpha = Math.sqrt(Math.max(0, 1 - cosAlpha * cosAlpha));

    const p1Char = p0
      .clone()
      .addScaledVector(uD, L1 * cosAlpha)
      .addScaledVector(uPole, L1 * sinAlpha);
    const p2Char = p0.clone().addScaledVector(uD, d);

    const v1New = new THREE.Vector3().subVectors(p1Char, p0).normalize();
    const v2New = new THREE.Vector3().subVectors(p2Char, p1Char).normalize();

    const qUpperChar = new THREE.Quaternion().setFromUnitVectors(
      v1Bind.clone().normalize(),
      v1New
    );
    const qMidChar = new THREE.Quaternion().setFromUnitVectors(
      v2Bind.clone().normalize(),
      v2New
    );

    const parentCharQuat = new THREE.Quaternion().setFromRotationMatrix(parentCharMat);

    upperBone.quaternion.copy(parentCharQuat).invert().multiply(qUpperChar);
    midBone.quaternion.copy(qUpperChar).invert().multiply(qMidChar);
    endBone.quaternion.copy(qMidChar).invert();
  }

  public update(dt: number): void {
    this.elapsed += dt;
    const safeDt = Math.max(0.001, Math.min(dt, 0.05));
    const headYawVel = (this.state.headYaw - this.prevHeadYaw) / safeDt;
    const headPitchVel = (this.state.headPitch - this.prevHeadPitch) / safeDt;
    this.prevHeadYaw = this.state.headYaw;
    this.prevHeadPitch = this.state.headPitch;

    const stiffness = 64.0;
    const damping = 10.8;
    const targetLagYaw = THREE.MathUtils.clamp(-headYawVel * 0.06, -0.30, 0.30);
    const targetLagPitch = THREE.MathUtils.clamp(-headPitchVel * 0.06, -0.30, 0.30);

    this.earLagYawVel += ((targetLagYaw - this.earLagYaw) * stiffness - this.earLagYawVel * damping) * safeDt;
    this.earLagYaw += this.earLagYawVel * safeDt;

    this.earLagPitchVel += ((targetLagPitch - this.earLagPitch) * stiffness - this.earLagPitchVel * damping) * safeDt;
    this.earLagPitch += this.earLagPitchVel * safeDt;

    this.applyRigState(this.elapsed);
  }

  public applyRigState(timeSec: number): void {
    const s = this.state;
    const air = THREE.MathUtils.clamp(s.airborneFactor, 0, 1);
    const idle = this.sampleLivingFelineIdleMicros(timeSec);

    // Gentle feline breathing + slow, calm warm chest swell when squinting happily (zero high-frequency vibration!)
    const purrFlutter = s.subtleBreathing && s.squint > 0.35 ? Math.sin(timeSec * 2.15) * 0.035 * s.squint : 0;
    const breathWave = s.subtleBreathing
      ? Math.sin(timeSec * 1.68 + 0.9) * 0.8 + Math.sin(timeSec * 3.36 + 0.9) * 0.2 + purrFlutter
      : 0;
    const microTail = s.subtleBreathing ? Math.sin(timeSec * 1.28 + 1.2) * 0.026 : 0;

    // 1. Axial Spine, Independent Fore/Hind Crouch & Interactive Flight-Hover Clearance
    const manualTuckPreview = smoothstep(0.02, 0.55, Math.abs(s.legFlightTuck)) * (1.0 - air);
    const effAir = Math.max(air, manualTuckPreview);
    const groundedWeight = 1.0 - effAir;

    const foreDropY = s.forelegStance >= 0 ? s.forelegStance * 0.050 : s.forelegStance * 0.255;
    const hindDropY = s.hindlegStance >= 0 ? s.hindlegStance * 0.044 : s.hindlegStance * 0.230;
    const avgBodyY = 0.52 * foreDropY + 0.48 * hindDropY;
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

    // 2. Quadruped Limbs: 4-Paw Crouch/Crawl IK (grounded) <-> Straight-Back Flight Streamlining!
    const stride = THREE.MathUtils.clamp(s.limbStride, -1, 1);
    const crouchForeSplay = Math.max(0, -s.forelegStance);
    const crouchHindSplay = Math.max(0, -s.hindlegStance);

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const scapBone = this.asset.rig.boneMap.get(`scapula_${side}`)!;
      this.setBonePose(`scapula_${side}`, 0, 0, 0);
      scapBone.updateMatrixWorld(true);

      if (effAir < 0.999) {
        const foreStrideZ = sign * stride * 0.21;
        const hindStrideZ = -sign * stride * 0.20;
        const foreLiftY = Math.max(0, sign * stride) * Math.sin(Math.abs(stride) * Math.PI) * 0.038;
        const hindLiftY = Math.max(0, -sign * stride) * Math.sin(Math.abs(stride) * Math.PI) * 0.034;

        const foreOffset = new THREE.Vector3(
          sign * crouchForeSplay * 0.050,
          foreLiftY,
          foreStrideZ + crouchForeSplay * 0.040
        );
        const hindOffset = new THREE.Vector3(
          sign * crouchHindSplay * 0.045,
          hindLiftY,
          hindStrideZ - crouchHindSplay * 0.036
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
        const excessReach = shChar.distanceTo(wrTarget) - 0.615;
        if (excessReach > 0) {
          this.setBonePose(`scapula_${side}`, 0, 0, 0, 'XYZ', 0, -excessReach * 1.08 * groundedWeight, 0);
          scapBone.updateMatrixWorld(true);
        }

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
        // Natural, slightly flexed feline flight posture (NOT ram-rod 100% rigid!) + subtle living wind & wingbeat motion!
        const flapBob = s.wingFlap * 0.075 * effAir;
        const windWaveA = Math.sin(timeSec * 2.15 + (side === 'L' ? 0.0 : 1.15)) * 0.048 * effAir;
        const windWaveB = Math.cos(timeSec * 1.65 + (side === 'L' ? 0.6 : 2.1)) * 0.042 * effAir;

        // Forelimbs: swept back beneath the chest with a natural relaxed elbow & wrist bend
        const fShPitch = (tuck >= 0 ? 0.88 * tuck : -0.44 * -tuck) + flapBob * 0.65 + windWaveA * 0.5;
        const fShYaw = tuck >= 0 ? -sign * 0.06 * tuck : 0;
        const fShRoll = (tuck >= 0 ? sign * 0.09 * tuck : sign * 0.05 * -tuck) + sign * windWaveB * 0.35;
        const fElPitch = (tuck >= 0 ? 0.36 * tuck : 0.28 * -tuck) - flapBob * 0.55 + windWaveB * 0.65;
        const fWrPitch = (tuck >= 0 ? 0.42 * tuck : 0.20 * -tuck) + windWaveA * 0.70;
        const fPawPitch = (tuck >= 0 ? 0.38 * tuck : -0.10 * -tuck) + windWaveB * 0.55;

        // Hindlimbs: relaxed knee & hock flex trailing naturally along the tail base with gentle air-current sway
        const hHipPitch = (tuck >= 0 ? 1.18 * tuck : -0.48 * -tuck) + flapBob * 0.55 + windWaveB * 0.55;
        const hHipYaw = (tuck >= 0 ? -sign * 0.05 * tuck : 0) + sign * windWaveA * 0.25;
        const hHipRoll = (tuck >= 0 ? sign * 0.07 * tuck : sign * 0.05 * -tuck) + sign * windWaveA * 0.30;
        const hKneePitch = (tuck >= 0 ? -0.68 * tuck : 0.34 * -tuck) - flapBob * 0.50 - windWaveA * 0.65;
        const hAnklePitch = (tuck >= 0 ? 0.82 * tuck : -0.16 * -tuck) + flapBob * 0.45 + windWaveB * 0.75;
        const hPawPitch = (tuck >= 0 ? 0.64 * tuck : 0.16 * -tuck) + windWaveA * 0.60;

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

    // 3. Swan-Feline Cervical Neck & Expressive Head Roll Coupling
    const hissTension = smoothstep(0.32, 0.85, s.jawOpen);
    const effHeadRoll = s.headRoll + idle.felineHeadMicroRoll * (1.0 - air);
    const nBasePitch = -s.neckArch * 0.12 - breathWave * 0.009 - hissTension * 0.032;
    const nBaseYaw = s.neckYaw * 0.14;

    this.setBonePose('neck_1', nBasePitch + s.headPitch * 0.04, nBaseYaw + s.headYaw * 0.05, effHeadRoll * 0.05, 'YXZ');
    this.setBonePose('neck_2', nBasePitch + s.headPitch * 0.07, nBaseYaw + s.headYaw * 0.09, effHeadRoll * 0.08, 'YXZ');
    this.setBonePose('neck_3', nBasePitch * 0.9 + s.headPitch * 0.11, nBaseYaw + s.headYaw * 0.14, effHeadRoll * 0.12, 'YXZ');
    this.setBonePose('neck_4', nBasePitch * 0.8 + s.headPitch * 0.15, nBaseYaw * 0.85 + s.headYaw * 0.19, effHeadRoll * 0.16, 'YXZ');

    this.setBonePose(
      'head',
      s.headPitch * 0.36 + breathWave * 0.010 - hissTension * 0.045,
      s.headYaw * 0.46,
      effHeadRoll * 0.40,
      'YXZ'
    );

    // 4. Rounded Bunny-Ear Nubs & Cheek Nubs with Spring Follow-Through
    const effectiveEarPerk = THREE.MathUtils.clamp(s.earPerk - hissTension * 0.32, 0, 1);
    const perkBase = (effectiveEarPerk - 0.5) * 0.68;
    const rollGravityAsym = effHeadRoll * 0.20;

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      const idleTwitch = side === 'L' ? idle.earTwitchL : idle.earTwitchR;
      const asym = sign * (s.earAsymmetry * 0.28 + rollGravityAsym) + idleTwitch;
      const earLift = perkBase + asym + this.earLagPitch * 0.65;
      const earSpread = (1.0 - effectiveEarPerk) * 0.32 - sign * this.earLagYaw * 0.50;

      this.setBonePose(`ear_${side}_1`, earLift * 0.60, -sign * earSpread, sign * earLift * 0.22, 'YXZ');
      this.setBonePose(`ear_${side}_2`, earLift * 0.34 + this.earLagPitch * 0.32, -sign * earSpread * 0.32, 0, 'YXZ');
      this.setBonePose(`ear_${side}_3`, earLift * 0.22 + this.earLagPitch * 0.22, 0, 0, 'YXZ');

      const nubFlare = (THREE.MathUtils.clamp(s.cheekNubFlare + hissTension * 0.20, 0, 1) - 0.5) * 0.40;
      this.setBonePose(`cheekUpper_${side}_1`, nubFlare * 0.28, -sign * (nubFlare * 0.50 + this.earLagYaw * 0.22), 0);
    }

    // 5. Sky-Blue Feline Eyes & Smooth Gaze-Follow Eyelids
    const effEyeYaw = THREE.MathUtils.clamp(s.eyeYaw + idle.gazeMicroX, -1, 1);
    const effEyePitch = THREE.MathUtils.clamp(s.eyePitch + idle.gazeMicroY, -1, 1);
    const effBlink = Math.max(s.blink, idle.autoBlink * (1.0 - s.blink));
    const effSquint = THREE.MathUtils.clamp(s.squint + hissTension * 0.24, 0, 1);

    for (const side of ['L', 'R'] as const) {
      const rightAxis = side === 'L' ? LF_EYE_RIGHT_L : LF_EYE_RIGHT_R;
      const upAxis = side === 'L' ? LF_EYE_UP_L : LF_EYE_UP_R;

      this.tmpQuat.setFromAxisAngle(upAxis, effEyeYaw * 0.34);
      this.tmpQuatB.setFromAxisAngle(rightAxis, -effEyePitch * 0.28);
      this.tmpQuat.multiply(this.tmpQuatB);
      this.setBoneAxisQuat(`eye_${side}`, this.tmpQuat);

      const upperGazeFollow = effEyePitch > 0 ? -effEyePitch * 0.14 : -effEyePitch * 0.22;
      const lowerGazeFollow = effEyePitch > 0 ? effEyePitch * 0.12 : effEyePitch * 0.08;

      const upperClose = THREE.MathUtils.clamp(
        Math.max(effBlink, effSquint * 0.54) + upperGazeFollow * (1.0 - effBlink),
        -0.14,
        1.0
      );
      const lowerClose = THREE.MathUtils.clamp(
        Math.max(effBlink, effSquint * 0.62) + lowerGazeFollow * (1.0 - effBlink),
        -0.10,
        1.0
      );

      this.tmpQuat.setFromAxisAngle(rightAxis, upperClose * 0.72);
      this.setBoneAxisQuat(`eyelidUpper_${side}`, this.tmpQuat);
      this.tmpQuat.setFromAxisAngle(rightAxis, -lowerClose * 0.64);
      this.setBoneAxisQuat(`eyelidLower_${side}`, this.tmpQuat);
    }

    // Sync Light Fury Specialty Shader Uniforms + Zero-Skull Thermal-Mirror Cloak Depth Pre-Pass!
    const effPupil = THREE.MathUtils.clamp(s.pupilDilation + idle.pupilPulse - hissTension * 0.28, 0, 1);
    const matSet = this.asset.materials;
    matSet.eyeMaterials.uniforms.uPupilDilation.value = effPupil;
    matSet.eyeMaterials.uniforms.uBiolumGlow.value = s.biolumGlow;
    matSet.eyeMaterials.uniforms.uPlasmaGlow.value = s.plasmaGlow;
    matSet.eyeMaterials.uniforms.uThermalCloak.value = s.thermalCloak;

    matSet.uniforms.uTime.value = timeSec;
    matSet.uniforms.uIridescentShimmer.value = s.iridescentShimmer;
    matSet.uniforms.uPastelTint.value = s.pastelTint;
    matSet.uniforms.uRadiantGlow.value = s.radiantGlow;
    matSet.uniforms.uBiolumGlow.value = s.biolumGlow;
    matSet.uniforms.uPlasmaGlow.value = s.plasmaGlow;
    matSet.uniforms.uThermalCloak.value = s.thermalCloak;
    const cloakDepthActive = matSet.syncCloakTransparency(s.thermalCloak);
    for (const dm of this.asset.hullDepthMeshes) {
      dm.visible = cloakDepthActive;
    }

    // 6. Jaw, Lip-Safe Retractable Pearly Teeth & Bounded Pink Feline Tongue
    this.setBonePose('jaw', s.jawOpen * 0.64, 0, 0);

    const lipClearance = 0.28 + 0.72 * smoothstep(0.0, 0.14, s.jawOpen);
    const retractFactor = 1.0 - s.teethExtension * lipClearance;
    this.setBonePose('teethUpper', 0, 0, 0, 'XYZ', 0, retractFactor * 0.022, 0);
    this.setBonePose('teethLower', 0, 0, 0, 'XYZ', 0, -retractFactor * 0.020, 0);

    const mouthOpenClearance = smoothstep(0.06, 0.48, s.jawOpen);
    const tForward = s.tongueExtend * 0.039 * mouthOpenClearance;

    if (s.tongueCurl >= 0) {
      const upPitch = -s.tongueCurl * (0.016 + 0.19 * mouthOpenClearance);
      this.setBonePose('tongue_1', upPitch * 0.35, 0, 0, 'XYZ', 0, 0, tForward);
      this.setBonePose('tongue_2', upPitch * 0.65, 0, 0);
      this.setBonePose('tongue_3', upPitch * 0.95, 0, 0);
      this.setBonePose('tongue_4', upPitch * 1.15, 0, 0);
    } else {
      const tipDrapeAllow = mouthOpenClearance * smoothstep(0.20, 0.95, s.tongueExtend);
      const downTip = -s.tongueCurl * tipDrapeAllow;
      this.setBonePose('tongue_1', 0, 0, 0, 'XYZ', 0, 0, tForward);
      this.setBonePose('tongue_2', 0, 0, 0);
      this.setBonePose('tongue_3', downTip * 0.12, 0, 0);
      this.setBonePose('tongue_4', downTip * 0.18, 0, 0);
    }

    // 7. 6-Spar Iridescent Wings + Signature Coy Wing-Veil Drape (with Chest/Muzzle Self-Clearance!)
    const fold = THREE.MathUtils.clamp(1.0 - s.wingUnfurl + s.wingWristFold * 0.28, 0, 1);
    const downstrokeMax = THREE.MathUtils.lerp(0.11, 0.74, effAir);

    for (const side of ['L', 'R'] as const) {
      const sign = side === 'L' ? 1 : -1;
      // Coy Wing-Veil drapes the starboard (-X / 'R') wing gracefully outside her chest/cheek without clipping!
      const veil = side === 'R' ? s.coyWingVeil * groundedWeight : 0;

      const rawFlap = s.wingFlap * (0.25 + 0.75 * s.wingUnfurl);
      const shoulderFlap = sign * (rawFlap >= 0 ? rawFlap * 0.74 : rawFlap * downstrokeMax);
      const outerStrokeCup =
        rawFlap < 0 ? rawFlap * THREE.MathUtils.lerp(0.04, 0.26, effAir) * s.wingUnfurl : 0;
      const sweepAngle = sign * (s.wingSweep * 0.44 - veil * 0.68);
      const recoveryElbowBend = s.wingWristFold * 0.46;

      this.setBonePose(
        `wingClavicle_${side}`,
        0.05 * fold + veil * 0.08,
        sign * 0.12 * fold,
        shoulderFlap * 0.18,
        'YXZ'
      );

      this.setBonePose(
        `wingShoulder_${side}`,
        s.wingCamber * 0.09 + veil * 0.18,
        sign * 0.82 * fold * (1.0 - veil * 0.65) + sweepAngle,
        shoulderFlap - sign * 0.22 * fold + sign * veil * 0.32,
        'YXZ'
      );

      this.setBonePose(
        `wingElbow_${side}`,
        veil * 0.12,
        -sign * (1.42 * fold * (1.0 - veil * 0.58) + recoveryElbowBend * 0.45 - veil * 0.42),
        sign * 0.86 * fold * (1.0 - veil * 0.45) + shoulderFlap * 0.22 + sign * s.wingTipLag * 0.16,
        'YXZ'
      );

      this.setBonePose(
        `wingWrist_${side}`,
        -0.35 * fold - s.wingCamber * 0.18 - veil * 0.28,
        sign * (1.32 * fold * (1.0 - veil * 0.60) + recoveryElbowBend * 0.55 - veil * 0.48) + sweepAngle * 0.35,
        sign * 0.12 * fold + sign * outerStrokeCup * 0.30 + sign * s.wingTipLag * 0.26,
        'YXZ'
      );

      for (let f = 1; f <= 6; f++) {
        const fNorm = (f - 1) / 5;
        const pleatYaw = sign * (-0.38 + fNorm * 0.58) * fold * (1.0 - veil * 0.6);
        const camberPitch = -s.wingCamber * (0.14 + 0.18 * (1.0 - fNorm)) - 0.10 * fold - veil * 0.24;
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

      const pFoldDown = 1.0 - s.pelvicFinFlare;
      for (let pf = 1; pf <= 3; pf++) {
        this.setBonePose(`pelvicFin_${side}_${pf}`, 0, 0, -sign * pFoldDown * 1.18, 'XYZ');
      }
    }

    // 8. Continuous Dorsal Sail Ridge Flex Morph Target
    for (const dMesh of this.asset.dorsalSailMeshes) {
      if (dMesh.morphTargetInfluences && dMesh.morphTargetInfluences.length > 0) {
        dMesh.morphTargetInfluences[0] = s.dorsalSailFlex;
      }
    }

    // 9. 10-Bone Feline Tail + Cliff-Clearance Guard + Rigid Non-Compressing Heart-Shaped Tail Flukes!
    const effLeftFlare = s.syncHeartTailFlukes ? s.rightHeartFinFlare : s.leftHeartFinFlare;
    const minFinVal = Math.min(s.rightHeartFinFlare, effLeftFlare);
    const downwardFinHang = minFinVal < 0 ? Math.sin(Math.abs(minFinVal) * 1.38) * 0.48 : 0.02;

    this.asset.rootGroup.updateMatrixWorld(false);

    for (let t = 1; t <= 10; t++) {
      const tFrac = t / 10;
      const isDistalHingeZone = t >= 9;

      const yawCurve = isDistalHingeZone
        ? 0
        : s.tailYaw * 0.14 + s.tailCurl * 0.19 * Math.pow(tFrac, 1.4) + microTail * tFrac;

      const travelingWave = isDistalHingeZone
        ? 0
        : s.tailWaveAmp * Math.sin(s.tailWavePhase - t * 0.48) * 0.085 * (0.4 + 0.6 * tFrac);

      let pitchCurve = isDistalHingeZone
        ? 0
        : s.tailPitch * 0.088 * (0.45 + tFrac) + travelingWave;

      if (!isDistalHingeZone && air < 0.85 && t >= 2 && t <= 8) {
        const minSafePitch = Math.max(0, (downwardFinHang - 0.05) * 0.135) * (1.0 - air);
        if (pitchCurve < minSafePitch) {
          pitchCurve = THREE.MathUtils.lerp(pitchCurve, minSafePitch, smoothstep(1, 5, t));
        }
      }

      this.setBonePose(`tail_${t}`, pitchCurve, yawCurve, 0, 'YXZ');

      if (air < 0.85) {
        const tBone = this.asset.rig.boneMap.get(`tail_${t}`)!;
        tBone.parent!.updateMatrixWorld(true);
        tBone.updateMatrixWorld(true);
        const wp = this.tmpVecC.setFromMatrixPosition(tBone.matrixWorld);
        const groundY = sampleHeroCliffHeight(wp.x, wp.z);
        const reqClearance = groundY + (t >= 8 ? 0.050 + downwardFinHang : 0.058);
        if (wp.y < reqClearance && t > 1) {
          const pBone = tBone.parent as THREE.Bone;
          const segLen = tBone.position.length();
          const liftRad =
            Math.min(0.45, (reqClearance - wp.y) / Math.max(0.14, segLen)) * (1.0 - air);
          this.tmpEuler.set(liftRad, 0, 0, 'XYZ');
          this.tmpQuat.setFromEuler(this.tmpEuler);
          pBone.quaternion.multiply(this.tmpQuat);
          pBone.updateMatrixWorld(true);
        }
      }
    }

    // Symmetrical rigid Euclidean hinge rotation around tailFinHinge_R & tailFinHinge_L (ZERO compression!)
    const rFoldAngle = -s.rightHeartFinFlare * 1.38;
    const lFoldAngle = effLeftFlare * 1.38;
    this.setBonePose('tailFinHinge_R', 0, 0, rFoldAngle, 'XYZ');
    this.setBonePose('tailFinHinge_L', 0, 0, lFoldAngle, 'XYZ');
    for (let f = 1; f <= 5; f++) {
      this.setBonePose(`tailFin_R_${f}`, 0, 0, 0);
      this.setBonePose(`tailFin_L_${f}`, 0, 0, 0);
    }

    this.asset.rig.rootBone.updateMatrixWorld(true);
  }
}
