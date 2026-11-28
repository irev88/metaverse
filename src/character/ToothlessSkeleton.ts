import * as THREE from 'three';

export interface BoneSpec {
  name: string;
  parent: string | null;
  worldPos: [number, number, number];
}

export interface ToothlessRigSkeleton {
  skeleton: THREE.Skeleton;
  rootBone: THREE.Bone;
  bones: THREE.Bone[];
  boneMap: Map<string, THREE.Bone>;
  boneIndexMap: Map<string, number>;
  bindWorldPositions: Map<string, THREE.Vector3>;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function gaussian(x: number, mu: number, sigma: number): number {
  const d = (x - mu) / sigma;
  return Math.exp(-0.5 * d * d);
}

/**
 * Shared cranial half-width profile (z = 1.54 -> 2.235) used by BOTH the upper cranium
 * and lower mandible so the closed mouth interlocks with zero gap and a cute rounded feline muzzle!
 */
export function evalHeadHalfWidth(z: number): number {
  const hz = Math.max(0, Math.min(1, (z - 1.54) / (2.235 - 1.54)));
  const snoutCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (hz - 0.80) / 0.20), 2)));
  // Full, cute axolotl-feline rounded cheeks (refs 01, 07, 10) tapering gently into a broad rounded muzzle
  const cheekRoundness = 0.056 * gaussian(hz, 0.38, 0.24);
  const muzzleTaper = -0.042 * smoothstep(0.54, 0.88, hz);
  const whiskerPad = 0.016 * gaussian(hz, 0.78, 0.13);
  return (0.228 + cheekRoundness + muzzleTaper + whiskerPad) * snoutCap;
}

/**
 * Exact shared mouth-closure lip seam Y profile (z = 1.64 -> 2.235).
 * Gives Toothless his signature subtle upturned feline corner-of-mouth smile with 0.000m head-to-jaw gap!
 */
export function evalMouthSeamY(z: number): number {
  const t = Math.max(0, Math.min(1, (z - 1.66) / (2.235 - 1.66)));
  // Upturned rear smile commissure (~1.596m) -> gentle mid-muzzle dip (~1.572m) -> rounded nose-lip (~1.580m)
  const cornerSmile = 0.020 * Math.pow(1.0 - smoothstep(0.0, 0.42, t), 1.6);
  const midCurve = -0.010 * Math.sin(t * Math.PI);
  return 1.578 + cornerSmile + midCurve;
}

/**
 * Shared symmetrical 5-rib caudal tail-fin blueprint (meters).
 * All 5 rib roots lie collinearly along x = ±0.024, y = 0.126 under tailFinHinge_L/R
 * so folding upwards or downwards is a 100% rigid Euclidean hinge rotation with ZERO compression!
 */
export const CAUDAL_FIN_RIB_SPECS: Array<{
  rootX: number;
  rootY: number;
  rootZ: number;
  tipX: number;
  tipY: number;
  tipZ: number;
}> = [
  { rootX: 0.024, rootY: 0.126, rootZ: -3.60, tipX: 0.34, tipY: 0.142, tipZ: -3.72 },
  { rootX: 0.024, rootY: 0.126, rootZ: -3.78, tipX: 0.49, tipY: 0.148, tipZ: -3.96 },
  { rootX: 0.024, rootY: 0.126, rootZ: -3.96, tipX: 0.55, tipY: 0.152, tipZ: -4.22 },
  { rootX: 0.024, rootY: 0.126, rootZ: -4.14, tipX: 0.46, tipY: 0.146, tipZ: -4.45 },
  { rootX: 0.024, rootY: 0.126, rootZ: -4.30, tipX: 0.27, tipY: 0.138, tipZ: -4.58 },
];

export const PELVIC_FIN_RIB_SPECS: Array<{
  parentBone: string;
  rootX: number;
  rootY: number;
  rootZ: number;
  tipX: number;
  tipY: number;
  tipZ: number;
}> = [
  { parentBone: 'tail_1', rootX: 0.18, rootY: 0.75, rootZ: -0.84, tipX: 0.44, tipY: 0.72, tipZ: -0.98 },
  { parentBone: 'tail_2', rootX: 0.15, rootY: 0.67, rootZ: -1.10, tipX: 0.50, tipY: 0.63, tipZ: -1.27 },
  { parentBone: 'tail_2', rootX: 0.12, rootY: 0.59, rootZ: -1.34, tipX: 0.37, tipY: 0.56, tipZ: -1.52 },
];

// Gently emerging natural Night Fury binocular gaze (~25.8 deg cant: smooth convex emergence, zero polygon distortion!)
export const EYE_GAZE_REST_DIR_L = new THREE.Vector3(0.435, 0.03, 0.8999).normalize();
export const EYE_GAZE_REST_DIR_R = new THREE.Vector3(-0.435, 0.03, 0.8999).normalize();
export const EYE_RADIUS = 0.082;

export interface DragonToeSpec {
  pawBone: string;
  rootX: number;
  rootY: number;
  rootZ: number;
  dirX: number;
  dirZ: number;
  toeLength: number;
  baseRadius: number;
  tipRadius: number;
  clawLength: number;
}

/**
 * Shared anatomical 4-digit dragon toe & claw layout for all 4 paws so fleshy scaled toes
 * and curved keratin claws are 100% coaxial, deeply rooted in the foot pad, and move together in flight!
 */
export function getDragonToeSpecs(side: 'L' | 'R', isForelimb: boolean): DragonToeSpec[] {
  const s = side === 'L' ? 1 : -1;
  const pawBone = isForelimb ? `forepaw_${side}` : `hindpaw_${side}`;
  const centerX = s * (isForelimb ? 0.342 : 0.318);
  const centerZ = isForelimb ? 1.005 : -0.555;
  const rootY = 0.040;
  const spreadX = isForelimb ? 0.088 : 0.082;

  const specs: DragonToeSpec[] = [];
  // Wide 101-degree radial dragon paw fan across the front & sides of the broad foot cushion!
  const angles = [-0.88, -0.29, 0.29, 0.88];
  for (let d = 0; d < 4; d++) {
    const fan = angles[d] + s * 0.055;
    const isInnerPair = d === 1 || d === 2;
    const toeLength = (isForelimb ? 0.126 : 0.118) * (isInnerPair ? 1.0 : 0.86);
    const clawLength = (isForelimb ? 0.066 : 0.062) * (isInnerPair ? 1.0 : 0.88);
    specs.push({
      pawBone,
      rootX: centerX + Math.sin(fan) * spreadX,
      rootY,
      rootZ: centerZ + Math.cos(fan) * 0.036,
      dirX: Math.sin(fan) * 0.92,
      dirZ: Math.cos(fan),
      toeLength,
      baseRadius: isInnerPair ? 0.044 : 0.039,
      tipRadius: isInnerPair ? 0.029 : 0.0255,
      clawLength,
    });
  }
  return specs;
}

export function buildToothlessBoneSpecs(): BoneSpec[] {
  const specs: BoneSpec[] = [
    // Axial Core
    { name: 'root', parent: null, worldPos: [0, 0.86, 0.12] },
    { name: 'pelvis', parent: 'root', worldPos: [0, 0.83, -0.54] },
    { name: 'spine_1', parent: 'root', worldPos: [0, 0.85, 0.14] },
    { name: 'spine_2', parent: 'spine_1', worldPos: [0, 0.91, 0.50] },
    { name: 'chest', parent: 'spine_2', worldPos: [0, 0.98, 0.86] },

    // Cervical Neck & Rigid Cranium Pivot
    { name: 'neck_1', parent: 'chest', worldPos: [0, 1.11, 1.08] },
    { name: 'neck_2', parent: 'neck_1', worldPos: [0, 1.27, 1.24] },
    { name: 'neck_3', parent: 'neck_2', worldPos: [0, 1.44, 1.39] },
    { name: 'neck_4', parent: 'neck_3', worldPos: [0, 1.56, 1.51] },
    { name: 'head', parent: 'neck_4', worldPos: [0, 1.63, 1.62] },

    // Gently Emerging Natural Ocular & Smooth Palpebral Eyelid Rigs (zero skin distortion!)
    { name: 'eye_L', parent: 'head', worldPos: [0.178, 1.658, 1.992] },
    { name: 'eye_R', parent: 'head', worldPos: [-0.178, 1.658, 1.992] },
    { name: 'eyelidUpper_L', parent: 'head', worldPos: [0.178, 1.658, 1.992] },
    { name: 'eyelidLower_L', parent: 'head', worldPos: [0.178, 1.658, 1.992] },
    { name: 'eyelidUpper_R', parent: 'head', worldPos: [-0.178, 1.658, 1.992] },
    { name: 'eyelidLower_R', parent: 'head', worldPos: [-0.178, 1.658, 1.992] },

    // Retractable Upper Dentition, Temporomandibular Jaw Hinge, Lower Dentition & Oral-Floor Tongue
    { name: 'teethUpper', parent: 'head', worldPos: [0, 1.592, 1.95] },
    { name: 'jaw', parent: 'head', worldPos: [0, 1.588, 1.66] },
    { name: 'teethLower', parent: 'jaw', worldPos: [0, 1.568, 1.95] },
    { name: 'tongue_1', parent: 'jaw', worldPos: [0, 1.568, 1.74] },
    { name: 'tongue_2', parent: 'tongue_1', worldPos: [0, 1.568, 1.85] },
    { name: 'tongue_3', parent: 'tongue_2', worldPos: [0, 1.568, 1.96] },
    { name: 'tongue_4', parent: 'tongue_3', worldPos: [0, 1.566, 2.07] },

    // 8 Cranial Ear-Plates & Lateral Cheek/Jaw Nubs (children of head -> 100% locked with skull!)
    { name: 'ear_L_1', parent: 'head', worldPos: [0.158, 1.772, 1.57] },
    { name: 'ear_L_2', parent: 'ear_L_1', worldPos: [0.208, 1.895, 1.38] },
    { name: 'ear_L_3', parent: 'ear_L_2', worldPos: [0.246, 2.005, 1.19] },
    { name: 'ear_R_1', parent: 'head', worldPos: [-0.158, 1.772, 1.57] },
    { name: 'ear_R_2', parent: 'ear_R_1', worldPos: [-0.208, 1.895, 1.38] },
    { name: 'ear_R_3', parent: 'ear_R_2', worldPos: [-0.246, 2.005, 1.19] },

    { name: 'cheekUpper_L_1', parent: 'head', worldPos: [0.268, 1.648, 1.58] },
    { name: 'cheekUpper_L_2', parent: 'cheekUpper_L_1', worldPos: [0.348, 1.680, 1.43] },
    { name: 'cheekUpper_R_1', parent: 'head', worldPos: [-0.268, 1.648, 1.58] },
    { name: 'cheekUpper_R_2', parent: 'cheekUpper_R_1', worldPos: [-0.348, 1.680, 1.43] },

    { name: 'cheekLower_L_1', parent: 'head', worldPos: [0.252, 1.552, 1.61] },
    { name: 'cheekLower_L_2', parent: 'cheekLower_L_1', worldPos: [0.312, 1.562, 1.48] },
    { name: 'cheekLower_R_1', parent: 'head', worldPos: [-0.252, 1.552, 1.61] },
    { name: 'cheekLower_R_2', parent: 'cheekLower_R_1', worldPos: [-0.312, 1.562, 1.48] },
  ];

  // Quadruped Limbs (Tucked smoothly inside fuller torso barrel so shoulder/hip joints never bulge!)
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    specs.push(
      { name: `scapula_${side}`, parent: 'chest', worldPos: [s * 0.235, 0.94, 0.88] },
      { name: `shoulder_${side}`, parent: `scapula_${side}`, worldPos: [s * 0.272, 0.80, 0.90] },
      { name: `elbow_${side}`, parent: `shoulder_${side}`, worldPos: [s * 0.325, 0.47, 0.80] },
      { name: `wrist_${side}`, parent: `elbow_${side}`, worldPos: [s * 0.338, 0.155, 0.94] },
      { name: `forepaw_${side}`, parent: `wrist_${side}`, worldPos: [s * 0.342, 0.044, 1.045] },

      { name: `hip_${side}`, parent: 'pelvis', worldPos: [s * 0.222, 0.77, -0.55] },
      { name: `knee_${side}`, parent: `hip_${side}`, worldPos: [s * 0.295, 0.46, -0.34] },
      { name: `ankle_${side}`, parent: `knee_${side}`, worldPos: [s * 0.312, 0.23, -0.66] },
      { name: `hindpaw_${side}`, parent: `ankle_${side}`, worldPos: [s * 0.318, 0.044, -0.515] }
    );
  }

  // 6-Spar Primary Wings in Extended Aerodynamic Glide Bind Pose
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    specs.push(
      { name: `wingClavicle_${side}`, parent: 'chest', worldPos: [s * 0.23, 1.11, 0.78] },
      { name: `wingShoulder_${side}`, parent: `wingClavicle_${side}`, worldPos: [s * 0.38, 1.15, 0.76] },
      { name: `wingElbow_${side}`, parent: `wingShoulder_${side}`, worldPos: [s * 0.96, 1.18, 0.50] },
      { name: `wingWrist_${side}`, parent: `wingElbow_${side}`, worldPos: [s * 1.72, 1.24, 0.96] }
    );

    const fingerEndpoints: Array<{ mid: [number, number, number]; tip: [number, number, number] }> = [
      { mid: [s * 1.62, 1.16, 0.18], tip: [s * 1.54, 1.06, -0.66] },
      { mid: [s * 2.02, 1.17, 0.24], tip: [s * 2.24, 1.07, -0.62] },
      { mid: [s * 2.38, 1.19, 0.36], tip: [s * 2.88, 1.09, -0.44] },
      { mid: [s * 2.72, 1.21, 0.52], tip: [s * 3.44, 1.12, -0.16] },
      { mid: [s * 3.04, 1.23, 0.74], tip: [s * 3.88, 1.16, 0.24] },
      { mid: [s * 3.22, 1.25, 0.94], tip: [s * 4.28, 1.20, 0.76] },
    ];

    fingerEndpoints.forEach((fp, idx) => {
      const fNum = idx + 1;
      specs.push(
        { name: `wingFinger_${side}_${fNum}_a`, parent: `wingWrist_${side}`, worldPos: fp.mid },
        { name: `wingFinger_${side}_${fNum}_b`, parent: `wingFinger_${side}_${fNum}_a`, worldPos: fp.tip }
      );
    });
  }

  // 10-Bone Flexible Tail
  const tailCoords: Array<[number, number, number]> = [
    [0, 0.78, -0.82],
    [0, 0.68, -1.16],
    [0, 0.54, -1.54],
    [0, 0.39, -1.94],
    [0, 0.26, -2.35],
    [0, 0.17, -2.76],
    [0, 0.13, -3.18],
    [0, 0.126, -3.58],
    [0, 0.126, -3.98],
    [0, 0.126, -4.42],
  ];

  tailCoords.forEach((pos, idx) => {
    const tNum = idx + 1;
    const parent = idx === 0 ? 'pelvis' : `tail_${idx}`;
    specs.push({ name: `tail_${tNum}`, parent, worldPos: pos });
  });

  // 3-Spar Pelvic Glide Fins — Bone Origins Placed AT SPINE HINGE ROOTS
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    PELVIC_FIN_RIB_SPECS.forEach((rib, idx) => {
      specs.push({
        name: `pelvicFin_${side}_${idx + 1}`,
        parent: rib.parentBone,
        worldPos: [s * rib.rootX, rib.rootY, rib.rootZ],
      });
    });
  }

  // Longitudinal Caudal Fin Hinge Rails (Rigid vertical folding downwards/upwards with ZERO compression!)
  specs.push(
    { name: 'tailFinHinge_R', parent: 'tail_9', worldPos: [-0.024, 0.126, -3.96] },
    { name: 'tailFinHinge_L', parent: 'tail_9', worldPos: [0.024, 0.126, -3.96] }
  );

  // Right (-X) Biological 5-Spar Caudal Tail Fin
  CAUDAL_FIN_RIB_SPECS.forEach((rib, idx) => {
    specs.push({
      name: `tailFin_R_${idx + 1}`,
      parent: 'tailFinHinge_R',
      worldPos: [-rib.rootX, rib.rootY, rib.rootZ],
    });
  });

  // Left (+X) Hidden World Automatic Prosthetic Tail Fin + Bronze Linkage
  specs.push(
    { name: 'prostheticCollar', parent: 'tail_8', worldPos: [0.024, 0.128, -3.54] },
    { name: 'prostheticRod', parent: 'tail_9', worldPos: [0.036, 0.138, -3.96] }
  );
  CAUDAL_FIN_RIB_SPECS.forEach((rib, idx) => {
    specs.push({
      name: `tailFin_L_${idx + 1}`,
      parent: 'tailFinHinge_L',
      worldPos: [rib.rootX, rib.rootY, rib.rootZ],
    });
  });

  return specs;
}

export function createToothlessSkeleton(): ToothlessRigSkeleton {
  const specs = buildToothlessBoneSpecs();
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
      const parentBone = boneMap.get(spec.parent);
      const parentWp = bindWorldPositions.get(spec.parent);
      if (!parentBone || !parentWp) {
        throw new Error(`Missing parent bone ${spec.parent} for ${spec.name}`);
      }
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
