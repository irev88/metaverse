import * as THREE from 'three';
import {
  evalHeadHalfWidth,
  evalMouthSeamY,
  EYE_GAZE_REST_DIR_L,
  EYE_GAZE_REST_DIR_R,
  EYE_RADIUS,
  getDragonToeSpecs,
  ToothlessRigSkeleton,
} from '../ToothlessSkeleton';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from './GeometryUtils';

export type LODLevel = 0 | 1 | 2;

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function gaussian(x: number, mu: number, sigma: number): number {
  const d = (x - mu) / sigma;
  return Math.exp(-0.5 * d * d);
}

function gaussian2D(x: number, y: number, mx: number, my: number, sx: number, sy: number): number {
  const dx = (x - mx) / sx;
  const dy = (y - my) / sy;
  return Math.exp(-0.5 * (dx * dx + dy * dy));
}

/**
 * Fritsch-Carlson monotone cubic Hermite spline evaluator: C1-smooth everywhere
 * with ZERO overshoot/bulging and ZERO piecewise boundary discontinuities!
 */
function evalMonotoneProfile(z: number, knots: ReadonlyArray<[number, number]>): number {
  const n = knots.length;
  if (z <= knots[0][0]) return knots[0][1];
  if (z >= knots[n - 1][0]) return knots[n - 1][1];

  const deltas = new Array<number>(n - 1);
  const slopes = new Array<number>(n);
  for (let k = 0; k < n - 1; k++) {
    deltas[k] = (knots[k + 1][1] - knots[k][1]) / (knots[k + 1][0] - knots[k][0]);
  }
  slopes[0] = deltas[0];
  slopes[n - 1] = deltas[n - 2];
  for (let k = 1; k < n - 1; k++) {
    if (deltas[k - 1] * deltas[k] <= 0) {
      slopes[k] = 0;
    } else {
      slopes[k] = (deltas[k - 1] + deltas[k]) * 0.5;
    }
  }
  for (let k = 0; k < n - 1; k++) {
    if (Math.abs(deltas[k]) < 1e-8) {
      slopes[k] = 0;
      slopes[k + 1] = 0;
    } else {
      const a = slopes[k] / deltas[k];
      const b = slopes[k + 1] / deltas[k];
      const mag = Math.hypot(a, b);
      if (mag > 3.0) {
        const tau = 3.0 / mag;
        slopes[k] = tau * a * deltas[k];
        slopes[k + 1] = tau * b * deltas[k];
      }
    }
  }

  let seg = 0;
  for (let k = 0; k < n - 1; k++) {
    if (z >= knots[k][0] && z <= knots[k + 1][0]) {
      seg = k;
      break;
    }
  }
  const h = knots[seg + 1][0] - knots[seg][0];
  const t = (z - knots[seg][0]) / h;
  const t2 = t * t;
  const t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;
  return (
    h00 * knots[seg][1] +
    h10 * h * slopes[seg] +
    h01 * knots[seg + 1][1] +
    h11 * h * slopes[seg + 1]
  );
}

const TOOTHLESS_RX_KNOTS: ReadonlyArray<[number, number]> = [
  [-4.55, 0.018],
  [-3.95, 0.052],
  [-3.05, 0.095],
  [-2.10, 0.160],
  [-1.35, 0.228],
  [-0.88, 0.282], // Plump muscular tail base
  [-0.54, 0.334], // Fuller pelvic haunch enveloping hip sockets cleanly!
  [-0.10, 0.328], // Full, natural dragon belly/waist
  [0.42, 0.378],  // Full barrel ribcage
  [0.82, 0.394],  // Broad, full chest enveloping shoulder sockets with zero side-joint bulge!
  [1.08, 0.304],  // Smooth muscular collar taper into neck
  [1.32, 0.250],  // Mid cervical neck
  [1.54, 0.228],  // Seamless handoff to cranium
];

const TOOTHLESS_RY_KNOTS: ReadonlyArray<[number, number]> = [
  [-4.55, 0.016],
  [-3.95, 0.044],
  [-3.05, 0.084],
  [-2.10, 0.140],
  [-1.35, 0.194],
  [-0.88, 0.236], // Smoothly flattened tail base
  [-0.54, 0.274], // Fuller pelvis concealing upper thigh root
  [-0.10, 0.272], // Full barrel belly
  [0.42, 0.306],  // Full lower-chest & belly depth
  [0.82, 0.312],  // Deep muscular chest concealing shoulder joint
  [1.08, 0.246],  // Smooth neck base
  [1.32, 0.208],  // Mid neck
  [1.54, 0.192],  // Seamless handoff to cranium
];

const TOOTHLESS_SPINE_CONTROL_POINTS: THREE.Vector3[] = [
  new THREE.Vector3(0, 0.126, -4.55),
  new THREE.Vector3(0, 0.126, -4.05),
  new THREE.Vector3(0, 0.126, -3.55),
  new THREE.Vector3(0, 0.13, -3.05),
  new THREE.Vector3(0, 0.19, -2.50),
  new THREE.Vector3(0, 0.35, -1.92),
  new THREE.Vector3(0, 0.56, -1.42),
  new THREE.Vector3(0, 0.74, -0.92),
  new THREE.Vector3(0, 0.81, -0.54), // Pelvis
  new THREE.Vector3(0, 0.82, -0.10), // Lumbar waist
  new THREE.Vector3(0, 0.87, 0.40),  // Mid ribcage
  new THREE.Vector3(0, 0.94, 0.80),  // Chest
  new THREE.Vector3(0, 1.09, 1.06),  // Neck base transition
  new THREE.Vector3(0, 1.31, 1.28),  // Mid cervical neck
  new THREE.Vector3(0, 1.53, 1.48),  // Upper neck
  new THREE.Vector3(0, 1.635, 1.66), // Occiput / posterior cranium
  new THREE.Vector3(0, 1.654, 1.86), // Domed forehead
  new THREE.Vector3(0, 1.632, 2.05), // Nasal bridge
  new THREE.Vector3(0, 1.586, 2.235), // Rounded feline nose tip
];

let cachedToothlessSpineCurve: THREE.CatmullRomCurve3 | null = null;
function getToothlessSpineCurve(): THREE.CatmullRomCurve3 {
  if (!cachedToothlessSpineCurve) {
    cachedToothlessSpineCurve = new THREE.CatmullRomCurve3(
      TOOTHLESS_SPINE_CONTROL_POINTS,
      false,
      'centripetal',
      0.5
    );
  }
  return cachedToothlessSpineCurve;
}

/**
 * Evaluates the EXACT 3D dorsal skin surface point, tangent, and outward normal at world Z
 * on Toothless's axial body/neck mesh so all 32 V-splitting dorsal spines sit 100% attached
 * to his actual back skin with ZERO midair floating gaps!
 */
export function evalToothlessDorsalSurface(zTarget: number): {
  point: THREE.Vector3;
  tangent: THREE.Vector3;
  up: THREE.Vector3;
} {
  const curve = getToothlessSpineCurve();
  let lo = 0.0;
  let hi = 1.0;
  for (let iter = 0; iter < 22; iter++) {
    const mid = (lo + hi) * 0.5;
    if (curve.getPointAt(mid).z < zTarget) lo = mid;
    else hi = mid;
  }
  const s = (lo + hi) * 0.5;
  const center = curve.getPointAt(s);
  const tangent = curve.getTangentAt(s).normalize();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const upVec = worldUp.clone().addScaledVector(tangent, -worldUp.dot(tangent)).normalize();

  const z = center.z;
  const tailTipCap = smoothstep(-4.55, -4.46, z);
  let ry = evalMonotoneProfile(z, TOOTHLESS_RY_KNOTS) * tailTipCap;
  const headBlend = smoothstep(1.46, 1.60, z);
  if (headBlend > 0.0) {
    const hz = Math.max(0, Math.min(1, (z - 1.54) / (2.235 - 1.54)));
    const snoutCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (hz - 0.80) / 0.20), 2)));
    const headRy = (0.192 + 0.014 * gaussian(hz, 0.35, 0.22) - 0.068 * smoothstep(0.34, 0.94, hz)) * snoutCap;
    ry = THREE.MathUtils.lerp(ry, headRy, headBlend);
  }

  let dorsalLift = ry;
  if (z > -0.45 && z < 1.18) {
    dorsalLift += 0.010 * gaussian(z, 0.35, 0.55);
  }

  const point = center.clone().addScaledVector(upVec, dorsalLift);
  return { point, tangent, up: upVec };
}

/**
 * Shared neck-to-cranium skinning weight helper.
 * Guarantees 100.0% rigid 'head' bone weight across the entire skull (z >= 1.64)
 * and smooth 3-bone cervical blending across neck_3 -> neck_4 -> head!
 */
export function computeCraniumOrNeckSkin(
  pos: THREE.Vector3,
  rig: ToothlessRigSkeleton,
  neckChainIndices: number[],
  neckChainPositions: THREE.Vector3[]
): { indices: [number, number, number, number]; weights: [number, number, number, number] } {
  const headIdx = rig.boneIndexMap.get('head')!;
  const neck4Idx = rig.boneIndexMap.get('neck_4')!;
  const neck3Idx = rig.boneIndexMap.get('neck_3')!;

  if (pos.z >= 1.64) {
    return {
      indices: [headIdx, 0, 0, 0],
      weights: [1, 0, 0, 0],
    };
  }

  if (pos.z >= 1.38) {
    const headW = smoothstep(1.42, 1.64, pos.z);
    const rem = 1.0 - headW;
    const n4Share = smoothstep(1.36, 1.56, pos.z);
    return normalizeSkinWeights(
      [headIdx, neck4Idx, neck3Idx, 0],
      [headW, rem * (0.52 + 0.48 * n4Share), rem * (0.48 - 0.48 * n4Share), 0]
    );
  }

  return computeChainSkinWeight(pos, neckChainIndices, neckChainPositions, 3.5);
}

export function buildBodyAndHeadGeometry(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  parts.push(buildAxialBodyAndCranium(rig, lod));
  parts.push(...buildCranialEarPlatesAndNubs(rig, lod));
  parts.push(...buildPalpebralEyelids(rig, lod));
  parts.push(...buildQuadrupedLimbsAndPaws(rig, lod));

  return mergeSkinnedGeometries(parts);
}

function buildAxialBodyAndCranium(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const axialSegs = lod === 0 ? 256 : lod === 1 ? 128 : 64;
  const radialSegs = lod === 0 ? 88 : lod === 1 ? 46 : 24;

  const curve = getToothlessSpineCurve();

  const bodyBoneNames = [
    'tail_10', 'tail_9', 'tail_8', 'tail_7', 'tail_6',
    'tail_5', 'tail_4', 'tail_3', 'tail_2', 'tail_1',
    'pelvis', 'spine_1', 'spine_2', 'chest',
    'neck_1', 'neck_2', 'neck_3', 'neck_4',
  ];
  const bodyBoneIndices = bodyBoneNames.map((n) => rig.boneIndexMap.get(n)!);
  const bodyBonePositions = bodyBoneNames.map((n) => rig.bindWorldPositions.get(n)!);

  const vertCount = (axialSegs + 1) * (radialSegs + 1);
  const positions = new Float32Array(vertCount * 3);
  const uvs = new Float32Array(vertCount * 2);
  const anatomy = new Float32Array(vertCount * 4);
  const skinIndices = new Uint16Array(vertCount * 4);
  const skinWeights = new Float32Array(vertCount * 4);

  const worldUp = new THREE.Vector3(0, 1, 0);
  const eyeCenterL = rig.bindWorldPositions.get('eye_L')!;
  const eyeCenterR = rig.bindWorldPositions.get('eye_R')!;

  // Cute upward-tilted outer canthus orbital frames (matches refs 01, 07, 10!)
  const eyeFrames = [
    {
      center: eyeCenterL,
      fwd: EYE_GAZE_REST_DIR_L,
      up: new THREE.Vector3(-0.16, 0.985, 0.06).normalize(),
    },
    {
      center: eyeCenterR,
      fwd: EYE_GAZE_REST_DIR_R,
      up: new THREE.Vector3(0.16, 0.985, 0.06).normalize(),
    },
  ].map((ef) => {
    const right = new THREE.Vector3().crossVectors(ef.up, ef.fwd).normalize();
    const orthoUp = new THREE.Vector3().crossVectors(ef.fwd, right).normalize();
    return { center: ef.center, fwd: ef.fwd, right, up: orthoUp };
  });

  for (let i = 0; i <= axialSegs; i++) {
    const u = i / axialSegs;
    // Smoothly concentrate 5x finer axial ring density across the neck, cranium, eye sockets & snout!
    const s = 1.0 - Math.pow(1.0 - u, 1.85);
    const center = curve.getPointAt(s);
    const tangent = curve.getTangentAt(s).normalize();

    const upVec = new THREE.Vector3()
      .copy(worldUp)
      .addScaledVector(tangent, -worldUp.dot(tangent))
      .normalize();
    const leftVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

    const z = center.z;

    // Continuous C1 monotone profile from tail tip (-4.55) -> neck -> cranium (+2.235) with ZERO step jumps or bulges!
    const tailTipCap = smoothstep(-4.55, -4.46, z);
    const bodyRx = evalMonotoneProfile(z, TOOTHLESS_RX_KNOTS) * tailTipCap + 0.008 * gaussian(z, -3.96, 0.36);
    const bodyRy = evalMonotoneProfile(z, TOOTHLESS_RY_KNOTS) * tailTipCap;

    const headBlend = smoothstep(1.46, 1.60, z);
    let rx = bodyRx;
    let ry = bodyRy;
    if (headBlend > 0.0) {
      const hz = Math.max(0, Math.min(1, (z - 1.54) / (2.235 - 1.54)));
      const snoutCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (hz - 0.80) / 0.20), 2)));
      const headRx = evalHeadHalfWidth(z);
      const headRy = (0.192 + 0.014 * gaussian(hz, 0.35, 0.22) - 0.068 * smoothstep(0.34, 0.94, hz)) * snoutCap;
      rx = THREE.MathUtils.lerp(bodyRx, headRx, headBlend);
      ry = THREE.MathUtils.lerp(bodyRy, headRy, headBlend);
    }

    for (let j = 0; j <= radialSegs; j++) {
      const vFrac = j / radialSegs;
      const theta = vFrac * Math.PI * 2.0;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      let localX = rx * sinT;
      let localY = ry * cosT;

      let macroScaleWeight = 0.28;
      let scarWeight = 0.0;
      let biolumZone = 0.0;

      // 1. Fuller Muscular Torso + Smooth Ventrolateral Axillary & Inguinal Limb-Socket Wrap!
      if (z > -0.85 && z < 1.18) {
        const pecZ = gaussian(z, 0.76, 0.30);
        const pecLobed = gaussian(Math.abs(sinT), 0.48, 0.24) * smoothstep(-0.05, -0.88, cosT);
        const sternumCleft = gaussian(sinT, 0.0, 0.11) * smoothstep(-0.55, -0.98, cosT) * pecZ;
        localY -= 0.026 * pecZ * pecLobed - 0.012 * sternumCleft;
        localX += Math.sign(sinT) * 0.016 * pecZ * pecLobed;

        // Soft ventrolateral axillary (foreleg) & inguinal (hindleg) skin aprons wrapping smoothly down onto the upper limbs!
        const foreAxilla = gaussian(z, 0.88, 0.22) * gaussian(Math.abs(sinT), 0.72, 0.18) * smoothstep(-0.08, -0.78, cosT);
        const hindInguinal = gaussian(z, -0.54, 0.24) * gaussian(Math.abs(sinT), 0.70, 0.19) * smoothstep(-0.05, -0.78, cosT);
        localY -= 0.032 * foreAxilla + 0.028 * hindInguinal;

        const ribMask = gaussian(z, 0.38, 0.28) * gaussian(Math.abs(sinT), 0.92, 0.16) * gaussian(cosT, -0.12, 0.35);
        localX += Math.sign(sinT) * Math.sin(z * 26.0) * 0.003 * ribMask;

        if (cosT > 0.75 && z > -0.45) {
          localY += 0.010 * Math.pow((cosT - 0.75) / 0.25, 2) * gaussian(z, 0.35, 0.55);
        }
      }

      if (z >= 1.00 && z < 1.56) {
        const neckEnv = smoothstep(1.00, 1.18, z) * (1.0 - smoothstep(1.44, 1.56, z));
        const neckCord = gaussian(Math.abs(sinT), 0.62, 0.18) * gaussian(cosT, -0.35, 0.30);
        localX += Math.sign(sinT) * 0.008 * neckCord * neckEnv;
      }

      // 2. Lifelike Cranial Anatomy: Temporalis Domes, 6-Scale Brow Ridge, Masseter Cheek & Philtrum
      if (z >= 1.50) {
        // Twin temporalis muscle domes on upper posterior cranium (z = 1.64..1.88)
        const tempDome =
          gaussian(z, 1.75, 0.10) *
          gaussian(Math.abs(sinT), 0.52, 0.20) *
          smoothstep(0.35, 0.90, cosT);
        localY += 0.014 * tempDome;
        localX += Math.sign(sinT) * 0.010 * tempDome;

        // Supraorbital brow arch with 6 sculpted individual osteoderm scale cushions (refs 01, 03, 10)
        const browLong = gaussian(z, 1.985, 0.105);
        const browLat = gaussian(Math.abs(sinT), 0.64, 0.17) * smoothstep(0.16, 0.72, cosT);
        const browScaleRipple = 1.0 + 0.22 * Math.max(0, Math.sin(((z - 1.88) / 0.21) * Math.PI * 6.0));
        localY += 0.024 * browLong * browLat * browScaleRipple;
        localX += Math.sign(sinT) * 0.012 * browLong * browLat;

        // Masseter jaw-closing muscle pad & soft feline zygomatic cheek fullness
        const masseterPad =
          gaussian(z, 1.76, 0.11) *
          gaussian(Math.abs(sinT), 0.92, 0.16) *
          gaussian(cosT, -0.18, 0.26);
        const cheekPuff =
          gaussian(z, 1.90, 0.13) *
          gaussian(Math.abs(sinT), 0.88, 0.17) *
          gaussian(cosT, -0.10, 0.24);
        localX += Math.sign(sinT) * (0.018 * masseterPad + 0.015 * cheekPuff);

        // Medial forehead dermal spine crest (6 sculpted osteoderm bumps) + subtle frontal furrow
        if (cosT > 0.86 && z > 1.58 && z < 1.95) {
          const centerPeak = Math.pow((cosT - 0.86) / 0.14, 2);
          const ridgeWave = Math.max(0, Math.sin(((z - 1.58) / 0.37) * Math.PI * 6.0));
          const flankingFurrow = -0.003 * gaussian(Math.abs(sinT), 0.16, 0.07);
          localY += (0.008 + 0.015 * Math.pow(ridgeWave, 1.5)) * centerPeak + flankingFurrow;
          biolumZone = Math.max(biolumZone, 0.75 * centerPeak * smoothstep(1.58, 1.94, z));
        }

        // Subtle feline rostral philtrum dimple at very front of snout tip (ref 01)
        if (z > 2.15 && cosT > -0.35 && cosT < 0.35) {
          const philtrum = gaussian(sinT, 0.0, 0.08) * smoothstep(2.15, 2.225, z);
          localY -= 0.0025 * philtrum;
        }

        // Bold, large armored head scale plates along nasal bridge/forehead center, supraorbital brows, snout tip & upper lip (refs 04 & 06)!
        const nasalBridgeMask = gaussian(sinT, 0.0, 0.26) * smoothstep(0.42, 0.96, cosT) * smoothstep(1.66, 1.98, z);
        const snoutTipMask = smoothstep(1.98, 2.19, z) * smoothstep(-0.35, 0.85, cosT);
        const browPlateMask = browLong * browLat * 1.45;
        const lipMarginMask = gaussian(cosT, -0.20, 0.20) * smoothstep(1.74, 2.18, z);
        const headPlateZone = Math.min(1.0, Math.max(nasalBridgeMask, snoutTipMask, browPlateMask, lipMarginMask * 0.88));
        // Values in (1.0 .. 2.0] trigger large sculpted 3D hexagonal/shield scale plates in ToothlessMaterials!
        macroScaleWeight = 0.38 + 1.56 * headPlateZone;
      }

      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(leftVec, localX)
        .addScaledVector(upVec, localY);

      // 3. ZERO-GAP INTERLOCKING UPPER LIP MARGIN + VAULTED ORAL ROOF CAVITY
      // Outer lip curtain overhangs evalMouthSeamY(z) by 4mm to seal 100% flush against the lower jaw,
      // while the interior roof vaults upward to house the sculpted palatal rugae & retractable fangs!
      const mouthBlend = smoothstep(1.63, 1.72, z);
      if (mouthBlend > 0 && cosT < 0.04) {
        const seamY = evalMouthSeamY(z);
        const rimFactor = Math.max(
          smoothstep(0.56, 0.90, Math.abs(sinT)),
          smoothstep(2.12, 2.21, z)
        );
        const lipOverhangY = seamY - 0.0045; // 4.5mm upper-lip overhang eliminates all jaw gaps!
        const oralVaultY = seamY + 0.044 * (1.0 - smoothstep(2.08, 2.22, z));
        const targetVentralY = THREE.MathUtils.lerp(oralVaultY, lipOverhangY, rimFactor);
        const ventralStrength = mouthBlend * smoothstep(0.04, -0.26, cosT);
        pos.y = THREE.MathUtils.lerp(pos.y, targetVentralY, ventralStrength);
      }

      // 4. SILKY-SMOOTH CONTINUOUS ORBITAL CRADLE (Zero Polygon Snapping & Zero Hole-Deletion!)
      // Instead of yanking grid vertices sideways or deleting jagged triangles, we apply a pure C-infinity
      // Gaussian inward cradle along -ef.fwd so the glossy eyeball & concentric radial eyelids emerge
      // smoothly (~1.5 cm) out of 100% unbroken, distortion-free head skin!
      if (z > 1.80 && z < 2.16) {
        for (const ef of eyeFrames) {
          if (Math.sign(pos.x) !== Math.sign(ef.center.x)) continue;
          const rel = new THREE.Vector3().subVectors(pos, ef.center);
          const gF = rel.dot(ef.fwd);
          const gR = rel.dot(ef.right);
          const gU = rel.dot(ef.up);

          if (gF > 0.0) {
            const orbitGauss =
              Math.exp(-0.5 * (Math.pow(gR / 0.058, 2) + Math.pow(gU / 0.050, 2))) *
              smoothstep(0.0, 0.035, gF);
            const targetCradleDepth = EYE_RADIUS - 0.024;
            const targetGF = THREE.MathUtils.lerp(gF, targetCradleDepth, orbitGauss);
            if (gF > targetGF) {
              pos.addScaledVector(ef.fwd, targetGF - gF);
              macroScaleWeight = Math.max(macroScaleWeight, 0.78 * orbitGauss);
            }
          }
        }
      }

      // 5. Crescentic Anterolateral Slit Nostrils + Sculpted Alar Rim & Cyan Plasma Glow (ref 01)
      if (z > 2.10 && z < 2.23 && pos.y > 1.575) {
        const nostrilDistL =
          gaussian2D(pos.x, pos.z, 0.066, 2.182, 0.021, 0.024) * gaussian(pos.y, 1.606, 0.017);
        const nostrilDistR =
          gaussian2D(pos.x, pos.z, -0.066, 2.182, 0.021, 0.024) * gaussian(pos.y, 1.606, 0.017);
        const nCavity = Math.max(nostrilDistL, nostrilDistR);
        const alarRim =
          Math.max(
            gaussian2D(pos.x, pos.z, 0.068, 2.176, 0.025, 0.026),
            gaussian2D(pos.x, pos.z, -0.068, 2.176, 0.025, 0.026)
          ) * gaussian(pos.y, 1.622, 0.012);
        if (alarRim > 0.05) {
          pos.y += 0.0035 * alarRim;
          pos.x += Math.sign(pos.x) * 0.0025 * alarRim;
        }
        if (nCavity > 0.05) {
          pos.x *= 1.0 - 0.16 * nCavity;
          pos.y -= 0.011 * nCavity;
          pos.z -= 0.014 * nCavity;
          biolumZone = Math.max(biolumZone, Math.min(1.0, nCavity * 1.35));
        }
      }

      // 6. Supraorbital Battle Scars (ref 04)
      if (z > 1.76 && z < 2.02 && pos.y > 1.68) {
        const scarLineR = Math.abs(pos.x + 0.140 - (pos.z - 1.89) * 0.40);
        const scarEnvR = gaussian(pos.z, 1.89, 0.052) * smoothstep(0.015, 0.002, scarLineR);
        const scarLineL = Math.abs(pos.x - 0.120 + (pos.z - 1.84) * 0.34);
        const scarEnvL = gaussian(pos.z, 1.84, 0.034) * smoothstep(0.012, 0.002, scarLineL);
        scarWeight = Math.min(1.0, Math.max(scarEnvR, scarEnvL * 0.85));
        if (scarWeight > 0.01) {
          pos.y -= 0.0035 * scarWeight;
        }
      }

      if (cosT > 0.92 && z < 1.56) {
        biolumZone = Math.max(biolumZone, ((cosT - 0.92) / 0.08) * 0.55);
        macroScaleWeight = Math.max(macroScaleWeight, 0.65 * ((cosT - 0.92) / 0.08));
      }

      const vIdx = i * (radialSegs + 1) + j;
      positions[vIdx * 3] = pos.x;
      positions[vIdx * 3 + 1] = pos.y;
      positions[vIdx * 3 + 2] = pos.z;

      uvs[vIdx * 2] = s * 5.2;
      uvs[vIdx * 2 + 1] = vFrac * 1.6;

      anatomy[vIdx * 4] = macroScaleWeight;
      anatomy[vIdx * 4 + 1] = scarWeight;
      anatomy[vIdx * 4 + 2] = biolumZone;
      anatomy[vIdx * 4 + 3] = 0.0;

      const skin = computeCraniumOrNeckSkin(pos, rig, bodyBoneIndices, bodyBonePositions);
      skinIndices.set(skin.indices, vIdx * 4);
      skinWeights.set(skin.weights, vIdx * 4);
    }
  }

  // Emit 100% continuous unbroken quad grid (ZERO jagged orbital hole deletion!)
  const indexArray = new Uint32Array(axialSegs * radialSegs * 6);
  let iPtr = 0;
  for (let i = 0; i < axialSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * (radialSegs + 1) + j;
      const b = (i + 1) * (radialSegs + 1) + j;
      const c = (i + 1) * (radialSegs + 1) + (j + 1);
      const d = i * (radialSegs + 1) + (j + 1);
      indexArray[iPtr++] = a;
      indexArray[iPtr++] = b;
      indexArray[iPtr++] = c;
      indexArray[iPtr++] = a;
      indexArray[iPtr++] = c;
      indexArray[iPtr++] = d;
    }
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geom.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  geom.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geom.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  geom.setIndex(new THREE.BufferAttribute(indexArray, 1));
  geom.computeVertexNormals();

  weldRadialSeamNormals(geom, axialSegs, radialSegs);
  return geom;
}

/**
 * Builds the 8 lateral cranial ear-plates & cheek/jaw nubbins (4 per side)
 * with deep organic socket blending into 'head' so ear twitches never show root seams!
 */
function buildCranialEarPlatesAndNubs(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const geoms: THREE.BufferGeometry[] = [];
  const headIdx = rig.boneIndexMap.get('head')!;

  interface AppendageConfig {
    boneNames: string[];
    customStart?: [number, number, number];
    tipPos: [number, number, number];
    maxWidth: number;
    maxThick: number;
    rollAngle: number;
  }

  const configs: AppendageConfig[] = [];
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    configs.push({
      boneNames: [`ear_${side}_1`, `ear_${side}_2`, `ear_${side}_3`],
      tipPos: [s * 0.272, 2.09, 1.06],
      maxWidth: 0.074,
      maxThick: 0.027,
      rollAngle: s * -0.46,
    });
    configs.push({
      boneNames: [`cheekUpper_${side}_1`, `cheekUpper_${side}_2`],
      tipPos: [s * 0.395, 1.692, 1.33],
      maxWidth: 0.038,
      maxThick: 0.017,
      rollAngle: s * -0.95,
    });
    configs.push({
      boneNames: [`cheekLower_${side}_1`, `cheekLower_${side}_2`],
      tipPos: [s * 0.348, 1.565, 1.39],
      maxWidth: 0.030,
      maxThick: 0.015,
      rollAngle: s * -1.15,
    });
    configs.push({
      boneNames: [`cheekLower_${side}_1`, `cheekLower_${side}_2`],
      customStart: [s * 0.218, 1.498, 1.62],
      tipPos: [s * 0.274, 1.488, 1.48],
      maxWidth: 0.021,
      maxThick: 0.012,
      rollAngle: s * -1.28,
    });
  }

  const lenSegs = lod === 0 ? 22 : lod === 1 ? 14 : 8;
  const radSegs = lod === 0 ? 24 : lod === 1 ? 16 : 10;

  for (const cfg of configs) {
    const pts = cfg.customStart
      ? [new THREE.Vector3(...cfg.customStart), new THREE.Vector3(...cfg.tipPos).lerp(new THREE.Vector3(...cfg.customStart), 0.5)]
      : cfg.boneNames.map((n) => rig.bindWorldPositions.get(n)!.clone());

    const rootDir = new THREE.Vector3().subVectors(pts[1], pts[0]).normalize();
    const embeddedStart = pts[0].clone().addScaledVector(rootDir, -0.052);
    const splinePts = [embeddedStart, ...pts, new THREE.Vector3(...cfg.tipPos)];
    const curve = new THREE.CatmullRomCurve3(splinePts);

    const chainIndices = cfg.boneNames.map((n) => rig.boneIndexMap.get(n)!);
    const chainPositions = cfg.boneNames.map((n) => rig.bindWorldPositions.get(n)!);

    const vCount = (lenSegs + 1) * (radSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let i = 0; i <= lenSegs; i++) {
      const tipToRoot = i / lenSegs;
      const uFromRoot = 1.0 - tipToRoot;
      const center = curve.getPointAt(uFromRoot);
      const tangent = curve.getTangentAt(uFromRoot).negate().normalize();

      const refUp = new THREE.Vector3(Math.sin(cfg.rollAngle), Math.cos(cfg.rollAngle), 0).normalize();
      const upVec = refUp.clone().addScaledVector(tangent, -refUp.dot(tangent)).normalize();
      const leftVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

      const tipCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (uFromRoot - 0.76) / 0.24), 2)));
      const paddleBell = 0.72 + 0.44 * Math.sin(Math.min(1, uFromRoot * 1.15) * Math.PI);
      const baseFlare = 1.0 + 0.34 * Math.pow(Math.max(0, 1.0 - uFromRoot * 4.2), 2);
      const w = cfg.maxWidth * paddleBell * tipCap * baseFlare;
      const th = cfg.maxThick * (0.85 + 0.25 * (1.0 - uFromRoot)) * tipCap * baseFlare;

      for (let j = 0; j <= radSegs; j++) {
        const vFrac = j / radSegs;
        const theta = vFrac * Math.PI * 2;
        const pos = new THREE.Vector3()
          .copy(center)
          .addScaledVector(leftVec, w * Math.sin(theta))
          .addScaledVector(upVec, th * Math.cos(theta));

        const vIdx = i * (radSegs + 1) + j;
        positions[vIdx * 3] = pos.x;
        positions[vIdx * 3 + 1] = pos.y;
        positions[vIdx * 3 + 2] = pos.z;

        uvs[vIdx * 2] = uFromRoot * 0.85;
        uvs[vIdx * 2 + 1] = vFrac * 0.65;

        // Large visible armored scales along the outer halves & tips of Toothless's cranial ear-plates (ref 06)!
        anatomy[vIdx * 4] = 0.45 + 1.35 * smoothstep(0.32, 0.90, uFromRoot);

        const chainSkin = computeChainSkinWeight(pos, chainIndices, chainPositions, 3.6);
        const headBlend = smoothstep(0.28, 0.0, uFromRoot);
        const normSkin = normalizeSkinWeights(
          [headIdx, chainSkin.indices[0], chainSkin.indices[1], chainSkin.indices[2]],
          [
            headBlend,
            chainSkin.weights[0] * (1 - headBlend),
            chainSkin.weights[1] * (1 - headBlend),
            chainSkin.weights[2] * (1 - headBlend),
          ]
        );
        skinIndices.set(normSkin.indices, vIdx * 4);
        skinWeights.set(normSkin.weights, vIdx * 4);
      }
    }

    const indices = new Uint16Array(lenSegs * radSegs * 6);
    let ptr = 0;
    for (let i = 0; i < lenSegs; i++) {
      for (let j = 0; j < radSegs; j++) {
        const a = i * (radSegs + 1) + j;
        const b = (i + 1) * (radSegs + 1) + j;
        const c = (i + 1) * (radSegs + 1) + (j + 1);
        const d = i * (radSegs + 1) + (j + 1);
        indices[ptr++] = a;
        indices[ptr++] = b;
        indices[ptr++] = c;
        indices[ptr++] = a;
        indices[ptr++] = c;
        indices[ptr++] = d;
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geom.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
    geom.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
    geom.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
    geom.setIndex(new THREE.BufferAttribute(indices, 1));
    geom.computeVertexNormals();
    weldRadialSeamNormals(geom, lenSegs, radSegs);
    geoms.push(geom);
  }

  return geoms;
}

/**
 * Flush, recessed palpebral eyelids tucked INSIDE the orbital socket roof/floor
 * so there is ZERO frog-eye spherical bulge outside the brow or cheek contour!
 */
function buildPalpebralEyelids(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry[] {
  const geoms: THREE.BufferGeometry[] = [];
  const headIdx = rig.boneIndexMap.get('head')!;
  const uSegs = lod === 0 ? 28 : lod === 1 ? 18 : 10;
  const vSegs = lod === 0 ? 10 : lod === 1 ? 6 : 4;

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    const eyeCenter = rig.bindWorldPositions.get(`eye_${side}`)!;
    const upperIdx = rig.boneIndexMap.get(`eyelidUpper_${side}`)!;
    const lowerIdx = rig.boneIndexMap.get(`eyelidLower_${side}`)!;

    const forward = (side === 'L' ? EYE_GAZE_REST_DIR_L : EYE_GAZE_REST_DIR_R).clone();
    const rawUp = new THREE.Vector3(s * -0.16, 0.985, 0.06).normalize();
    const right = new THREE.Vector3().crossVectors(forward, rawUp).normalize();
    const up = new THREE.Vector3().crossVectors(right, forward).normalize();

    for (const isUpper of [true, false]) {
      const lidBoneIdx = isUpper ? upperIdx : lowerIdx;
      const vCount = (uSegs + 1) * (vSegs + 1);
      const positions = new Float32Array(vCount * 3);
      const uvs = new Float32Array(vCount * 2);
      const anatomy = new Float32Array(vCount * 4);
      const skinIndices = new Uint16Array(vCount * 4);
      const skinWeights = new Float32Array(vCount * 4);

      const baseLidRadius = EYE_RADIUS + 0.0018;

      for (let iv = 0; iv <= vSegs; iv++) {
        const vFrac = iv / vSegs; // 0 = delicate beaded palpebral rim, 1 = recessed socket pocket
        const marginRim = gaussian(vFrac, 0.06, 0.08);

        for (let iu = 0; iu <= uSegs; iu++) {
          const uFrac = iu / uSegs;
          const lon = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(-65, 65, uFrac));
          const cornerPinch = Math.sin(uFrac * Math.PI);
          // Cute rounded-almond opening: wide soulful arch (+44 deg) & clean lower cradle (-40 deg)
          const openLatDeg = isUpper ? 44 * cornerPinch : -40 * cornerPinch;
          const rimSealLatDeg = isUpper ? 78 : -74;
          const lat = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(openLatDeg, rimSealLatDeg, vFrac));

          const beadBump = Math.max(0, Math.sin(uFrac * Math.PI * 22)) * 0.0014 * marginRim;
          // Tucks inward at vFrac -> 1 so back of eyelid hides completely inside orbital bone!
          const lidR = baseLidRadius + 0.0018 * marginRim + beadBump - 0.0028 * vFrac;

          const localDir = new THREE.Vector3()
            .addScaledVector(forward, Math.cos(lat) * Math.cos(lon))
            .addScaledVector(right, Math.cos(lat) * Math.sin(lon))
            .addScaledVector(up, Math.sin(lat))
            .normalize();

          const pos = new THREE.Vector3().copy(eyeCenter).addScaledVector(localDir, lidR);
          const idx = iv * (uSegs + 1) + iu;

          positions[idx * 3] = pos.x;
          positions[idx * 3 + 1] = pos.y;
          positions[idx * 3 + 2] = pos.z;

          uvs[idx * 2] = uFrac * 0.35;
          uvs[idx * 2 + 1] = vFrac * 0.18;

          anatomy[idx * 4] = 0.85;

          const lidWeight = cornerPinch * (1.0 - smoothstep(0.48, 1.0, vFrac));
          const wLid = Math.max(0, Math.min(1, lidWeight));
          skinIndices.set([lidBoneIdx, headIdx, 0, 0], idx * 4);
          skinWeights.set([wLid, 1.0 - wLid, 0, 0], idx * 4);
        }
      }

      const indices = new Uint16Array(uSegs * vSegs * 6);
      let ptr = 0;
      for (let iv = 0; iv < vSegs; iv++) {
        for (let iu = 0; iu < uSegs; iu++) {
          const a = iv * (uSegs + 1) + iu;
          const b = (iv + 1) * (uSegs + 1) + iu;
          const c = (iv + 1) * (uSegs + 1) + (iu + 1);
          const d = iv * (uSegs + 1) + (iu + 1);
          if (isUpper) {
            indices[ptr++] = a;
            indices[ptr++] = c;
            indices[ptr++] = b;
            indices[ptr++] = a;
            indices[ptr++] = d;
            indices[ptr++] = c;
          } else {
            indices[ptr++] = a;
            indices[ptr++] = b;
            indices[ptr++] = c;
            indices[ptr++] = a;
            indices[ptr++] = c;
            indices[ptr++] = d;
          }
        }
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geom.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
      geom.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
      geom.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
      geom.setIndex(new THREE.BufferAttribute(indices, 1));
      geom.computeVertexNormals();
      geoms.push(geom);
    }
  }

  return geoms;
}

function buildQuadrupedLimbsAndPaws(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry[] {
  const geoms: THREE.BufferGeometry[] = [];
  const lenSegs = lod === 0 ? 40 : lod === 1 ? 24 : 14;
  const radSegs = lod === 0 ? 32 : lod === 1 ? 20 : 12;

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;

    const foreSpline = [
      new THREE.Vector3(s * 0.16, 0.96, 0.86),
      rig.bindWorldPositions.get(`scapula_${side}`)!,
      rig.bindWorldPositions.get(`shoulder_${side}`)!,
      rig.bindWorldPositions.get(`elbow_${side}`)!,
      rig.bindWorldPositions.get(`wrist_${side}`)!,
      new THREE.Vector3(s * 0.342, 0.056, 1.000),
      new THREE.Vector3(s * 0.342, 0.032, 1.078),
    ];
    const foreBones = ['chest', `scapula_${side}`, `shoulder_${side}`, `elbow_${side}`, `wrist_${side}`, `forepaw_${side}`];
    geoms.push(buildSingleMuscularLimb(rig, foreSpline, foreBones, true, side, lenSegs, radSegs));
    geoms.push(...buildArticulatedDragonToes(rig, side, true, lod));

    const hindSpline = [
      new THREE.Vector3(s * 0.15, 0.80, -0.54),
      rig.bindWorldPositions.get(`hip_${side}`)!,
      rig.bindWorldPositions.get(`knee_${side}`)!,
      rig.bindWorldPositions.get(`ankle_${side}`)!,
      new THREE.Vector3(s * 0.318, 0.054, -0.562),
      new THREE.Vector3(s * 0.318, 0.032, -0.488),
    ];
    const hindBones = ['pelvis', `hip_${side}`, `knee_${side}`, `ankle_${side}`, `hindpaw_${side}`];
    geoms.push(buildSingleMuscularLimb(rig, hindSpline, hindBones, false, side, lenSegs, radSegs));
    geoms.push(...buildArticulatedDragonToes(rig, side, false, lod));
  }

  return geoms;
}

/**
 * Builds 4 large, widely-splayed, muscular Night Fury toes seamlessly emerging from the broad
 * metacarpal/metatarsal foot dome, armored with bold dorsal digital scutes and locked 100% to pawBone!
 */
function buildArticulatedDragonToes(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  isForelimb: boolean,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const toeGeoms: THREE.BufferGeometry[] = [];
  const toeSpecs = getDragonToeSpecs(side, isForelimb);
  const uSegs = lod === 0 ? 16 : lod === 1 ? 10 : 6;
  const vSegs = lod === 0 ? 16 : lod === 1 ? 10 : 8;

  for (const ts of toeSpecs) {
    const pawBoneIdx = rig.boneIndexMap.get(ts.pawBone)!;
    const vCount = (uSegs + 1) * (vSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    const fwdX = ts.dirX;
    const fwdZ = ts.dirZ;
    const fLen = Math.hypot(fwdX, fwdZ);
    const nx = fwdX / fLen;
    const nz = fwdZ / fLen;
    const lx = nz;
    const lz = -nx;

    for (let iu = 0; iu <= uSegs; iu++) {
      const uFrac = iu / uSegs;
      // Start deep at t = -0.38 inside the wide foot bridge so toes & interdigital webs merge into one unified dragon foot!
      const t = THREE.MathUtils.lerp(-0.38, 1.0, uFrac);
      const tClamped = Math.max(0, t);

      // Sloped metacarpal foot-to-digit ramp + arched feline phalanx + rounded claw-sheath hood
      const footBridgeLift = Math.max(0, -t) * 0.042;
      const archY = Math.sin(tClamped * Math.PI) * 0.011 - 0.009 * tClamped * tClamped + footBridgeLift;
      const cx = ts.rootX + nx * ts.toeLength * t;
      const cz = ts.rootZ + nz * ts.toeLength * t;
      const cy = ts.rootY + archY;

      // Broad webbed root merge into foot + muscular knuckle swell + pronounced distal claw-hood collar
      const webRootFlare = 1.0 + 0.44 * Math.pow(1.0 - smoothstep(-0.38, 0.18, t), 1.5);
      const knuckleBulge = 1.0 + 0.15 * gaussian(tClamped, 0.40, 0.18) + 0.14 * gaussian(tClamped, 0.84, 0.10);
      const tipDome = Math.sqrt(Math.max(0.04, 1.0 - Math.pow(Math.max(0, (uFrac - 0.89) / 0.11), 2)));
      const rad = THREE.MathUtils.lerp(ts.baseRadius, ts.tipRadius, tClamped) * webRootFlare * knuckleBulge * tipDome;

      for (let iv = 0; iv <= vSegs; iv++) {
        const vFrac = iv / vSegs;
        const theta = vFrac * Math.PI * 2;
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);

        // Bold sculpted dorsal digital armor scutes along top of each toe (refs 04 & 06!)
        const dorsalScute =
          cosT > 0.15
            ? Math.pow(Math.max(0, Math.sin(tClamped * Math.PI * 4.5)), 0.75) * 0.0042 * ((cosT - 0.15) / 0.85)
            : 0;

        // Lateral interdigital web skirt near base (t < 0.22)
        const latWeb = 1.12 + 0.24 * (1.0 - smoothstep(-0.35, 0.22, t));

        const px = cx + lx * sinT * rad * latWeb;
        const pz = cz + lz * sinT * rad * latWeb;
        let py = cy + cosT * (rad * 0.86 + dorsalScute);
        if (py < 0.003) {
          py = 0.003 + Math.max(0, py) * 0.12;
        }

        const idx = iu * (vSegs + 1) + iv;
        positions[idx * 3] = px;
        positions[idx * 3 + 1] = py;
        positions[idx * 3 + 2] = pz;

        uvs[idx * 2] = uFrac * 0.42;
        uvs[idx * 2 + 1] = vFrac * 0.36;

        // Strong macro plate armor on top of toes (1.95), leathery sole pad underneath (0.35)
        anatomy[idx * 4] = cosT > 0.05 ? 1.95 : 0.38;

        skinIndices.set([pawBoneIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(uSegs * vSegs * 6);
    let ptr = 0;
    for (let iu = 0; iu < uSegs; iu++) {
      for (let iv = 0; iv < vSegs; iv++) {
        const a = iu * (vSegs + 1) + iv;
        const b = (iu + 1) * (vSegs + 1) + iv;
        const c = (iu + 1) * (vSegs + 1) + (iv + 1);
        const d = iu * (vSegs + 1) + (iv + 1);
        indices[ptr++] = a;
        indices[ptr++] = b;
        indices[ptr++] = c;
        indices[ptr++] = a;
        indices[ptr++] = c;
        indices[ptr++] = d;
      }
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
    g.setIndex(new THREE.BufferAttribute(indices, 1));
    g.computeVertexNormals();
    weldRadialSeamNormals(g, uSegs, vSegs);
    toeGeoms.push(g);
  }

  return toeGeoms;
}

function buildSingleMuscularLimb(
  rig: ToothlessRigSkeleton,
  splinePts: THREE.Vector3[],
  boneNames: string[],
  isForelimb: boolean,
  side: 'L' | 'R',
  lenSegs: number,
  radSegs: number
): THREE.BufferGeometry {
  const sSign = side === 'L' ? 1 : -1;
  const curve = new THREE.CatmullRomCurve3(splinePts, false, 'centripetal', 0.5);
  const chainIndices = boneNames.map((n) => rig.boneIndexMap.get(n)!);
  const chainPositions = boneNames.map((n) => rig.bindWorldPositions.get(n)!);

  const vCount = (lenSegs + 1) * (radSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  const refForward = new THREE.Vector3(0, 0, 1);

  for (let i = 0; i <= lenSegs; i++) {
    const pawToRoot = i / lenSegs;
    const rootToPaw = 1.0 - pawToRoot;

    const center = curve.getPointAt(rootToPaw);
    const tangent = curve.getTangentAt(rootToPaw).negate().normalize();

    const fwdVec = refForward.clone().addScaledVector(tangent, -refForward.dot(tangent)).normalize();
    const latVec = new THREE.Vector3().crossVectors(fwdVec, tangent).normalize();

    // Slim, tucked-in proximal root (zero bulbous shoulder/hip joint!) -> muscular lower limb -> broad splayed dragon foot dome!
    const rootMelt = 0.52 + 0.48 * smoothstep(0.0, 0.34, rootToPaw);
    const toeCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (rootToPaw - 0.91) / 0.09), 2))) * rootMelt;
    let rWidth = 0.095;
    let rDepth = 0.110;

    if (isForelimb) {
      const forearmMuscle = gaussian(rootToPaw, 0.54, 0.16) * 0.028;
      // Wide, sturdy dorsal metacarpal foot cushion flaring smoothly into the 4 splayed toes!
      const broadFootFlare = gaussian(rootToPaw, 0.86, 0.12) * 0.088;
      rWidth = (0.090 + forearmMuscle + broadFootFlare) * toeCap;
      rDepth = (0.106 + gaussian(rootToPaw, 0.26, 0.18) * 0.036 + forearmMuscle + broadFootFlare * 0.86) * toeCap;
    } else {
      const calfMuscle = gaussian(rootToPaw, 0.52, 0.15) * 0.032;
      const broadHindFootFlare = gaussian(rootToPaw, 0.86, 0.12) * 0.082;
      rWidth = (0.088 + calfMuscle + broadHindFootFlare) * toeCap;
      rDepth = (0.110 + gaussian(rootToPaw, 0.26, 0.19) * 0.046 + calfMuscle * 1.08 + broadHindFootFlare * 0.84) * toeCap;
    }

    const pawZone = smoothstep(0.70, 0.94, rootToPaw);
    const upperJunction = 1.0 - smoothstep(0.08, 0.42, rootToPaw);

    for (let j = 0; j <= radSegs; j++) {
      const vFrac = j / radSegs;
      const theta = vFrac * Math.PI * 2;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      // Flatten the outer lateral aspect of the upper shoulder/thigh so it sits 100% flush inside the fuller torso contour!
      const isOuterAspect = sinT * sSign > 0 ? Math.abs(sinT) : 0;
      const latFlushFactor = 1.0 - 0.28 * upperJunction * isOuterAspect;

      // Broad 4-knuckle metacarpal fan across the wide foot bridge!
      let digitBulge = 1.0;
      if (pawZone > 0.01 && cosT > -0.35) {
        const toeAngle = Math.atan2(sinT, Math.max(0.05, cosT + 0.25));
        const fourKnuckles = Math.cos(toeAngle * 3.6);
        digitBulge += 0.16 * pawZone * Math.max(-0.12, fourKnuckles) * smoothstep(-0.35, 0.45, cosT);
      }

      // Sculpted 3D hexagonal/pebble armor scute domes on lower forearm/shin & dorsal foot (refs 04 & 06)!
      const anteriorOuterMask = smoothstep(-0.25, 0.55, cosT + 0.35 * isOuterAspect);
      const distalArmorZone = smoothstep(0.36, 0.68, rootToPaw);
      const scuteCellU = rootToPaw * 22.0;
      const scuteCellV = vFrac * 14.0 + Math.floor(scuteCellU) * 0.5;
      const scuteDome =
        Math.max(0, Math.sin(scuteCellU * Math.PI)) *
        Math.max(0, Math.sin(scuteCellV * Math.PI)) *
        0.0038 *
        anteriorOuterMask *
        distalArmorZone;

      const effW = rWidth * latFlushFactor * digitBulge + scuteDome;
      const effD = rDepth * digitBulge + scuteDome;

      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(latVec, effW * sinT)
        .addScaledVector(fwdVec, effD * cosT);

      if (rootToPaw > 0.70 && pos.y < 0.004) {
        pos.y = 0.002 + Math.max(0, pos.y) * 0.14;
      }

      const vIdx = i * (radSegs + 1) + j;
      positions[vIdx * 3] = pos.x;
      positions[vIdx * 3 + 1] = pos.y;
      positions[vIdx * 3 + 2] = pos.z;

      uvs[vIdx * 2] = rootToPaw * 1.35;
      uvs[vIdx * 2 + 1] = vFrac * 0.85;

      // Bold, unmistakable macro armor scale plates (up to 1.98) on distal legs & tops of feet!
      anatomy[vIdx * 4] = 0.36 + 1.62 * anteriorOuterMask * distalArmorZone;

      const skin = computeChainSkinWeight(pos, chainIndices, chainPositions, 3.5);
      const trunkBlend = smoothstep(0.24, 0.0, rootToPaw) * 0.72;
      const pawBoneIdx = chainIndices[chainIndices.length - 1];
      const distalPawLock = smoothstep(0.74, 0.88, rootToPaw);
      const midScale = (1 - trunkBlend) * (1 - distalPawLock);
      const finalSkin = normalizeSkinWeights(
        [pawBoneIdx, chainIndices[0], skin.indices[0], skin.indices[1]],
        [
          distalPawLock,
          trunkBlend * (1 - distalPawLock),
          skin.weights[0] * midScale,
          skin.weights[1] * midScale,
        ]
      );
      skinIndices.set(finalSkin.indices, vIdx * 4);
      skinWeights.set(finalSkin.weights, vIdx * 4);
    }
  }

  const indices = new Uint16Array(lenSegs * radSegs * 6);
  let ptr = 0;
  for (let i = 0; i < lenSegs; i++) {
    for (let j = 0; j < radSegs; j++) {
      const a = i * (radSegs + 1) + j;
      const b = (i + 1) * (radSegs + 1) + j;
      const c = (i + 1) * (radSegs + 1) + (j + 1);
      const d = i * (radSegs + 1) + (j + 1);
      indices[ptr++] = a;
      indices[ptr++] = b;
      indices[ptr++] = c;
      indices[ptr++] = a;
      indices[ptr++] = c;
      indices[ptr++] = d;
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geom.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  geom.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geom.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  geom.setIndex(new THREE.BufferAttribute(indices, 1));
  geom.computeVertexNormals();
  weldRadialSeamNormals(geom, lenSegs, radSegs);
  return geom;
}

function weldRadialSeamNormals(geom: THREE.BufferGeometry, axialSegs: number, radialSegs: number): void {
  const norm = geom.getAttribute('normal') as THREE.BufferAttribute;
  const v0 = new THREE.Vector3();
  const vN = new THREE.Vector3();
  for (let i = 0; i <= axialSegs; i++) {
    const idx0 = i * (radialSegs + 1);
    const idxN = i * (radialSegs + 1) + radialSegs;
    v0.fromBufferAttribute(norm, idx0);
    vN.fromBufferAttribute(norm, idxN);
    if (v0.lengthSq() > 1e-6 && vN.lengthSq() > 1e-6) {
      v0.add(vN).normalize();
      norm.setXYZ(idx0, v0.x, v0.y, v0.z);
      norm.setXYZ(idxN, v0.x, v0.y, v0.z);
    }
  }
  norm.needsUpdate = true;
}
