import * as THREE from 'three';
import { BoneSpec, DragonToeSpec, ToothlessRigSkeleton } from '../ToothlessSkeleton';

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function gaussian(x: number, mu: number, sigma: number): number {
  const d = (x - mu) / sigma;
  return Math.exp(-0.5 * d * d);
}

/**
 * Shared cranial half-width profile for the Light Fury (z = 1.44 -> 2.065).
 * Softer, slightly smaller (~91%), heart-contoured feline cheeks tapering into a dainty rounded muzzle!
 */
export function evalLFHeadHalfWidth(z: number): number {
  const hz = Math.max(0, Math.min(1, (z - 1.44) / (2.065 - 1.44)));
  const snoutCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (hz - 0.78) / 0.22), 2)));
  const cheekRoundness = 0.054 * gaussian(hz, 0.36, 0.23);
  const muzzleTaper = -0.046 * smoothstep(0.50, 0.88, hz);
  const whiskerPad = 0.013 * gaussian(hz, 0.77, 0.13);
  return (0.204 + cheekRoundness + muzzleTaper + whiskerPad) * snoutCap;
}

/**
 * Exact shared mouth-closure lip seam Y profile for the Light Fury (z = 1.54 -> 2.065).
 * Features a sweet, serene upturned feline corner smile with 0.000m upper/lower jaw gap!
 */
export function evalLFMouthSeamY(z: number): number {
  const t = Math.max(0, Math.min(1, (z - 1.55) / (2.065 - 1.55)));
  const cornerSmile = 0.022 * Math.pow(1.0 - smoothstep(0.0, 0.44, t), 1.55);
  const midCurve = -0.008 * Math.sin(t * Math.PI);
  return 1.482 + cornerSmile + midCurve;
}

/**
 * Signature Rounded Heart-Shaped 5-Spar Caudal Tail Fluke Blueprint (meters, symmetrical on BOTH Left & Right!).
 * Plump, rounded anterior outer heart lobes sweeping smoothly backward into a rounded teardrop/heart tip
 * with a gentle central heart notch (shorter, rounder & smoother than Toothless's bat-fan tail, refs 14 & 15)!
 */
export const LF_HEART_FIN_RIB_SPECS: Array<{
  rootX: number;
  rootY: number;
  rootZ: number;
  tipX: number;
  tipY: number;
  tipZ: number;
}> = [
  { rootX: 0.018, rootY: 0.116, rootZ: -3.34, tipX: 0.34, tipY: 0.126, tipZ: -3.32 },
  { rootX: 0.018, rootY: 0.116, rootZ: -3.50, tipX: 0.45, tipY: 0.130, tipZ: -3.52 },
  { rootX: 0.018, rootY: 0.116, rootZ: -3.66, tipX: 0.44, tipY: 0.130, tipZ: -3.74 },
  { rootX: 0.018, rootY: 0.116, rootZ: -3.82, tipX: 0.34, tipY: 0.125, tipZ: -3.96 },
  { rootX: 0.018, rootY: 0.116, rootZ: -3.97, tipX: 0.18, tipY: 0.120, tipZ: -4.14 },
];

export const LF_PELVIC_FIN_RIB_SPECS: Array<{
  parentBone: string;
  rootX: number;
  rootY: number;
  rootZ: number;
  tipX: number;
  tipY: number;
  tipZ: number;
}> = [
  { parentBone: 'tail_1', rootX: 0.155, rootY: 0.70, rootZ: -0.78, tipX: 0.37, tipY: 0.68, tipZ: -0.92 },
  { parentBone: 'tail_2', rootX: 0.130, rootY: 0.62, rootZ: -1.02, tipX: 0.42, tipY: 0.59, tipZ: -1.19 },
  { parentBone: 'tail_2', rootX: 0.105, rootY: 0.55, rootZ: -1.24, tipX: 0.31, tipY: 0.52, tipZ: -1.42 },
];

// Gently emerging soulful feline gaze (~24.5 deg cant: smooth unbroken orbital skin, zero distortion!)
export const LF_EYE_GAZE_REST_DIR_L = new THREE.Vector3(0.415, 0.035, 0.909).normalize();
export const LF_EYE_GAZE_REST_DIR_R = new THREE.Vector3(-0.415, 0.035, 0.909).normalize();
export const LF_EYE_RADIUS = 0.075;

/**
 * Sleek, dainty feline 4-digit paw & claw layout for the Light Fury (locked 100% to pawBone in land & flight!).
 */
export function getLightFuryToeSpecs(side: 'L' | 'R', isForelimb: boolean): DragonToeSpec[] {
  const s = side === 'L' ? 1 : -1;
  const pawBone = isForelimb ? `forepaw_${side}` : `hindpaw_${side}`;
  const centerX = s * (isForelimb ? 0.292 : 0.274);
  const centerZ = isForelimb ? 0.935 : -0.510;
  const rootY = 0.036;
  const spreadX = isForelimb ? 0.074 : 0.069;

  const specs: DragonToeSpec[] = [];
  // Wide radial 96-degree feline-dragon paw fan across the broad foot cushion!
  const angles = [-0.84, -0.28, 0.28, 0.84];
  for (let d = 0; d < 4; d++) {
    const fan = angles[d] + s * 0.05;
    const isInnerPair = d === 1 || d === 2;
    const toeLength = (isForelimb ? 0.106 : 0.098) * (isInnerPair ? 1.0 : 0.86);
    const clawLength = (isForelimb ? 0.054 : 0.050) * (isInnerPair ? 1.0 : 0.88);
    specs.push({
      pawBone,
      rootX: centerX + Math.sin(fan) * spreadX,
      rootY,
      rootZ: centerZ + Math.cos(fan) * 0.032,
      dirX: Math.sin(fan) * 0.90,
      dirZ: Math.cos(fan),
      toeLength,
      baseRadius: isInnerPair ? 0.037 : 0.033,
      tipRadius: isInnerPair ? 0.024 : 0.021,
      clawLength,
    });
  }
  return specs;
}

export function buildLightFuryBoneSpecs(): BoneSpec[] {
  const specs: BoneSpec[] = [
    // Axial Core (~91% stature of Toothless, slenderer swan-feline posture)
    { name: 'root', parent: null, worldPos: [0, 0.79, 0.11] },
    { name: 'pelvis', parent: 'root', worldPos: [0, 0.77, -0.50] },
    { name: 'spine_1', parent: 'root', worldPos: [0, 0.78, 0.13] },
    { name: 'spine_2', parent: 'spine_1', worldPos: [0, 0.84, 0.46] },
    { name: 'chest', parent: 'spine_2', worldPos: [0, 0.91, 0.79] },

    // Graceful Swan-Feline Cervical Neck & Rigid Cranium Pivot
    { name: 'neck_1', parent: 'chest', worldPos: [0, 1.04, 0.99] },
    { name: 'neck_2', parent: 'neck_1', worldPos: [0, 1.19, 1.14] },
    { name: 'neck_3', parent: 'neck_2', worldPos: [0, 1.35, 1.28] },
    { name: 'neck_4', parent: 'neck_3', worldPos: [0, 1.47, 1.40] },
    { name: 'head', parent: 'neck_4', worldPos: [0, 1.535, 1.51] },

    // Gently Emerging Sky-Blue Feline Eyes & Smooth Palpebral Eyelids
    { name: 'eye_L', parent: 'head', worldPos: [0.158, 1.558, 1.848] },
    { name: 'eye_R', parent: 'head', worldPos: [-0.158, 1.558, 1.848] },
    { name: 'eyelidUpper_L', parent: 'head', worldPos: [0.158, 1.558, 1.848] },
    { name: 'eyelidLower_L', parent: 'head', worldPos: [0.158, 1.558, 1.848] },
    { name: 'eyelidUpper_R', parent: 'head', worldPos: [-0.158, 1.558, 1.848] },
    { name: 'eyelidLower_R', parent: 'head', worldPos: [-0.158, 1.558, 1.848] },

    // Retractable Pearly Dentition, Jaw Hinge & Pink Feline Tongue
    { name: 'teethUpper', parent: 'head', worldPos: [0, 1.495, 1.80] },
    { name: 'jaw', parent: 'head', worldPos: [0, 1.490, 1.55] },
    { name: 'teethLower', parent: 'jaw', worldPos: [0, 1.472, 1.80] },
    { name: 'tongue_1', parent: 'jaw', worldPos: [0, 1.472, 1.62] },
    { name: 'tongue_2', parent: 'tongue_1', worldPos: [0, 1.472, 1.72] },
    { name: 'tongue_3', parent: 'tongue_2', worldPos: [0, 1.472, 1.82] },
    { name: 'tongue_4', parent: 'tongue_3', worldPos: [0, 1.470, 1.91] },

    // Short Rounded Bunny/Paddle Ear-Nubs + Single Pair of Dainty Rounded Cheek Nubs (refs 13, 14, 15!)
    { name: 'ear_L_1', parent: 'head', worldPos: [0.118, 1.665, 1.48] },
    { name: 'ear_L_2', parent: 'ear_L_1', worldPos: [0.142, 1.748, 1.38] },
    { name: 'ear_L_3', parent: 'ear_L_2', worldPos: [0.156, 1.815, 1.29] },
    { name: 'ear_R_1', parent: 'head', worldPos: [-0.118, 1.665, 1.48] },
    { name: 'ear_R_2', parent: 'ear_R_1', worldPos: [-0.142, 1.748, 1.38] },
    { name: 'ear_R_3', parent: 'ear_R_2', worldPos: [-0.156, 1.815, 1.29] },

    { name: 'cheekUpper_L_1', parent: 'head', worldPos: [0.222, 1.568, 1.49] },
    { name: 'cheekUpper_L_2', parent: 'cheekUpper_L_1', worldPos: [0.268, 1.592, 1.40] },
    { name: 'cheekUpper_R_1', parent: 'head', worldPos: [-0.222, 1.568, 1.49] },
    { name: 'cheekUpper_R_2', parent: 'cheekUpper_R_1', worldPos: [-0.268, 1.592, 1.40] },
  ];

  // Sleek Feline Quadruped Limbs (Tucked smoothly inside fuller torso so joints never bulge!)
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    specs.push(
      { name: `scapula_${side}`, parent: 'chest', worldPos: [s * 0.200, 0.87, 0.81] },
      { name: `shoulder_${side}`, parent: `scapula_${side}`, worldPos: [s * 0.232, 0.75, 0.83] },
      { name: `elbow_${side}`, parent: `shoulder_${side}`, worldPos: [s * 0.278, 0.435, 0.74] },
      { name: `wrist_${side}`, parent: `elbow_${side}`, worldPos: [s * 0.288, 0.142, 0.87] },
      { name: `forepaw_${side}`, parent: `wrist_${side}`, worldPos: [s * 0.292, 0.040, 0.965] },

      { name: `hip_${side}`, parent: 'pelvis', worldPos: [s * 0.192, 0.71, -0.50] },
      { name: `knee_${side}`, parent: `hip_${side}`, worldPos: [s * 0.256, 0.425, -0.32] },
      { name: `ankle_${side}`, parent: `knee_${side}`, worldPos: [s * 0.270, 0.215, -0.61] },
      { name: `hindpaw_${side}`, parent: `ankle_${side}`, worldPos: [s * 0.274, 0.040, -0.475] }
    );
  }

  // Sleek 6-Spar Primary Iridescent Wings (~7.8m span, smooth lateral shoulder root without dorsal bat-ridge!)
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    specs.push(
      { name: `wingClavicle_${side}`, parent: 'chest', worldPos: [s * 0.21, 0.96, 0.69] },
      { name: `wingShoulder_${side}`, parent: `wingClavicle_${side}`, worldPos: [s * 0.34, 1.00, 0.67] },
      { name: `wingElbow_${side}`, parent: `wingShoulder_${side}`, worldPos: [s * 0.88, 1.05, 0.46] },
      { name: `wingWrist_${side}`, parent: `wingElbow_${side}`, worldPos: [s * 1.56, 1.11, 0.86] }
    );

    const fingerEndpoints: Array<{ mid: [number, number, number]; tip: [number, number, number] }> = [
      { mid: [s * 1.48, 1.08, 0.16], tip: [s * 1.40, 0.99, -0.60] },
      { mid: [s * 1.84, 1.09, 0.22], tip: [s * 2.04, 1.00, -0.56] },
      { mid: [s * 2.18, 1.11, 0.33], tip: [s * 2.62, 1.02, -0.40] },
      { mid: [s * 2.48, 1.13, 0.48], tip: [s * 3.14, 1.05, -0.14] },
      { mid: [s * 2.78, 1.15, 0.68], tip: [s * 3.54, 1.08, 0.22] },
      { mid: [s * 2.94, 1.17, 0.86], tip: [s * 3.90, 1.12, 0.70] },
    ];

    fingerEndpoints.forEach((fp, idx) => {
      const fNum = idx + 1;
      specs.push(
        { name: `wingFinger_${side}_${fNum}_a`, parent: `wingWrist_${side}`, worldPos: fp.mid },
        { name: `wingFinger_${side}_${fNum}_b`, parent: `wingFinger_${side}_${fNum}_a`, worldPos: fp.tip }
      );
    });
  }

  // 10-Bone Flexible Feline Tail
  const tailCoords: Array<[number, number, number]> = [
    [0, 0.72, -0.76],
    [0, 0.63, -1.08],
    [0, 0.50, -1.43],
    [0, 0.36, -1.80],
    [0, 0.24, -2.18],
    [0, 0.16, -2.56],
    [0, 0.12, -2.94],
    [0, 0.116, -3.30],
    [0, 0.116, -3.66],
    [0, 0.116, -4.06],
  ];

  tailCoords.forEach((pos, idx) => {
    const tNum = idx + 1;
    const parent = idx === 0 ? 'pelvis' : `tail_${idx}`;
    specs.push({ name: `tail_${tNum}`, parent, worldPos: pos });
  });

  // 3-Spar Pelvic Glide Fins
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    LF_PELVIC_FIN_RIB_SPECS.forEach((rib, idx) => {
      specs.push({
        name: `pelvicFin_${side}_${idx + 1}`,
        parent: rib.parentBone,
        worldPos: [s * rib.rootX, rib.rootY, rib.rootZ],
      });
    });
  }

  // Symmetrical Biological Heart-Shaped Caudal Tail Fin Hinges & 5 Ribs per Side (Zero Prosthetics!)
  specs.push(
    { name: 'tailFinHinge_R', parent: 'tail_9', worldPos: [-0.020, 0.116, -3.65] },
    { name: 'tailFinHinge_L', parent: 'tail_9', worldPos: [0.020, 0.116, -3.65] }
  );

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    LF_HEART_FIN_RIB_SPECS.forEach((rib, idx) => {
      specs.push({
        name: `tailFin_${side}_${idx + 1}`,
        parent: `tailFinHinge_${side}`,
        worldPos: [s * rib.rootX, rib.rootY, rib.rootZ],
      });
    });
  }

  return specs;
}

export function createLightFurySkeleton(): ToothlessRigSkeleton {
  const specs = buildLightFuryBoneSpecs();
  const bones: THREE.Bone[] = [];
  const boneMap = new Map<string, THREE.Bone>();
  const boneIndexMap = new Map<string, number>();
  const bindWorldPositions = new Map<string, THREE.Vector3>();

  for (let i = 0; i < specs.length; i++) {
    const spec = specs[i];
    const bone = new THREE.Bone();
    bone.name = spec.name;
    const wp = new THREE.Vector3(...spec.worldPos);
    bindWorldPositions.set(spec.name, wp);

    if (spec.parent === null) {
      bone.position.copy(wp);
    } else {
      const parentBone = boneMap.get(spec.parent)!;
      const parentWp = bindWorldPositions.get(spec.parent)!;
      bone.position.copy(wp).sub(parentWp);
      parentBone.add(bone);
    }

    bones.push(bone);
    boneMap.set(spec.name, bone);
    boneIndexMap.set(spec.name, i);
  }

  const rootBone = boneMap.get('root')!;
  rootBone.updateMatrixWorld(true);
  const skeleton = new THREE.Skeleton(bones);

  return {
    skeleton,
    rootBone,
    bones,
    boneMap,
    boneIndexMap,
    bindWorldPositions,
  };
}
