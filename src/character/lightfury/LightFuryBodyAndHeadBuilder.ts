import * as THREE from 'three';
import { ToothlessRigSkeleton } from '../ToothlessSkeleton';
import { LODLevel } from '../geometry/BodyAndHeadBuilder';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from '../geometry/GeometryUtils';
import {
  evalLFHeadHalfWidth,
  evalLFMouthSeamY,
  getLightFuryToeSpecs,
  LF_EYE_GAZE_REST_DIR_L,
  LF_EYE_GAZE_REST_DIR_R,
  LF_EYE_RADIUS,
} from './LightFurySkeleton';

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
 * Fritsch-Carlson monotone cubic Hermite spline evaluator: guarantees C1 continuity
 * with ZERO overshoot/bulging across tail -> pelvis -> waist -> chest -> swan neck -> cranium!
 */
function evalLFMonotoneProfile(z: number, knots: ReadonlyArray<[number, number]>): number {
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
  return (
    (2 * t3 - 3 * t2 + 1) * knots[seg][1] +
    (t3 - 2 * t2 + t) * h * slopes[seg] +
    (-2 * t3 + 3 * t2) * knots[seg + 1][1] +
    (t3 - t2) * h * slopes[seg + 1]
  );
}

const LF_RX_KNOTS: ReadonlyArray<[number, number]> = [
  [-4.18, 0.015],
  [-3.55, 0.048],
  [-2.75, 0.088],
  [-1.90, 0.146],
  [-1.25, 0.202],
  [-0.82, 0.246], // Fuller, smooth feline tail root
  [-0.50, 0.278], // Fuller pelvis enveloping hip sockets cleanly (zero hip bulge!)
  [-0.08, 0.258], // Graceful hourglass feline waist
  [0.42, 0.312],  // Fuller ribcage sweep
  [0.72, 0.326],  // Fuller feline chest enveloping shoulder sockets cleanly!
  [0.98, 0.254],  // Smooth swan-collar transition
  [1.22, 0.210],  // Slender mid swan-neck
  [1.44, 0.198],  // Seamless handoff to cranium
];

const LF_RY_KNOTS: ReadonlyArray<[number, number]> = [
  [-4.18, 0.014],
  [-3.55, 0.042],
  [-2.75, 0.076],
  [-1.90, 0.126],
  [-1.25, 0.172],
  [-0.82, 0.204], // Smooth tail base
  [-0.50, 0.228], // Fuller pelvis depth
  [-0.08, 0.214], // Supple waist
  [0.42, 0.248],  // Fuller aerodynamic ribcage
  [0.72, 0.260],  // Fuller chest depth concealing limb roots!
  [0.98, 0.208],  // Smooth throat/collar
  [1.22, 0.182],  // Slender mid neck
  [1.44, 0.174],  // Seamless handoff to cranium
];

const LF_SPINE_CONTROL_POINTS: ReadonlyArray<[number, number, number]> = [
  [0, 0.116, -4.18],
  [0, 0.116, -3.72],
  [0, 0.116, -3.28],
  [0, 0.12, -2.82],
  [0, 0.175, -2.30],
  [0, 0.32, -1.78],
  [0, 0.51, -1.32],
  [0, 0.68, -0.86],
  [0, 0.755, -0.50],
  [0, 0.76, -0.08],
  [0, 0.815, 0.38],
  [0, 0.885, 0.75],
  [0, 1.03, 0.98],
  [0, 1.24, 1.19],
  [0, 1.45, 1.38],
  [0, 1.54, 1.54],
  [0, 1.562, 1.73],
  [0, 1.538, 1.90],
  [0, 1.490, 2.065],
];

let cachedLFSpineCurve: THREE.CatmullRomCurve3 | null = null;
function getLFSpineCurve(): THREE.CatmullRomCurve3 {
  if (!cachedLFSpineCurve) {
    cachedLFSpineCurve = new THREE.CatmullRomCurve3(
      LF_SPINE_CONTROL_POINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
      false,
      'centripetal',
      0.5
    );
  }
  return cachedLFSpineCurve;
}

export function evalLightFuryDorsalSurface(zTarget: number): {
  point: THREE.Vector3;
  tangent: THREE.Vector3;
  up: THREE.Vector3;
} {
  const curve = getLFSpineCurve();
  let lo = 0.0;
  let hi = 1.0;
  for (let iter = 0; iter < 24; iter++) {
    const mid = (lo + hi) * 0.5;
    if (curve.getPointAt(mid).z < zTarget) lo = mid;
    else hi = mid;
  }
  const s = (lo + hi) * 0.5;
  const center = curve.getPointAt(s);
  const tangent = curve.getTangentAt(s).normalize();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const up = new THREE.Vector3().copy(worldUp).addScaledVector(tangent, -worldUp.dot(tangent)).normalize();
  const z = center.z;
  const ry = evalLFMonotoneProfile(z, LF_RY_KNOTS) * smoothstep(-4.18, -4.10, z);
  return {
    point: center.clone().addScaledVector(up, ry),
    tangent,
    up,
  };
}

/**
 * Evaluates a soft 2D heart silhouette mask in [0, 1] for the Light Fury's canonical
 * twin glittery forehead heart markings (ref 16-light-fury-forehead-hearts-wing-sparkle.jpg)!
 */
function evalSoftHeartMask(dx: number, dz: number, scale: number): number {
  const x = dx / scale;
  const y = dz / scale + 0.15;
  const a = x * x + Math.pow(y - 0.58 * Math.sqrt(Math.abs(x) + 0.04), 2);
  return 1.0 - smoothstep(0.62, 1.15, a);
}

export function computeLFCraniumOrNeckSkin(
  pos: THREE.Vector3,
  rig: ToothlessRigSkeleton,
  neckChainIndices: number[],
  neckChainPositions: THREE.Vector3[]
): { indices: [number, number, number, number]; weights: [number, number, number, number] } {
  const headIdx = rig.boneIndexMap.get('head')!;
  const neck4Idx = rig.boneIndexMap.get('neck_4')!;
  const neck3Idx = rig.boneIndexMap.get('neck_3')!;

  if (pos.z >= 1.53) {
    return {
      indices: [headIdx, 0, 0, 0],
      weights: [1, 0, 0, 0],
    };
  }

  if (pos.z >= 1.28) {
    const headW = smoothstep(1.31, 1.53, pos.z);
    const rem = 1.0 - headW;
    const n4Share = smoothstep(1.26, 1.45, pos.z);
    return normalizeSkinWeights(
      [headIdx, neck4Idx, neck3Idx, 0],
      [headW, rem * (0.52 + 0.48 * n4Share), rem * (0.48 - 0.48 * n4Share), 0]
    );
  }

  return computeChainSkinWeight(pos, neckChainIndices, neckChainPositions, 3.5);
}

export function buildLightFuryBodyAndHeadGeometry(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  parts.push(buildAxialBodyAndCranium(rig, lod));
  parts.push(...buildRoundedBunnyEarAndCheekNubs(rig, lod));
  parts.push(...buildPalpebralEyelids(rig, lod));
  parts.push(...buildSleekFelineLimbsAndPaws(rig, lod));
  return mergeSkinnedGeometries(parts);
}

/**
 * Builds the Light Fury's sleek feline body & smooth heart-contoured cranium on an unbroken 256x88 grid!
 * Anatomy channels:
 * - x: fine micro-scale sheen weight (smooth across body, slightly higher along nose/paws)
 * - y: glittery iridescent pattern mask (twin forehead heart markings + nose blush marker)
 * - z: pastel ice-blue ventral countershading zone (throat, chest, underbelly — refs 14, 15!)
 * - w: pink nostril/snout blush & plasma glow zone
 */
function buildAxialBodyAndCranium(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const axialSegs = lod === 0 ? 256 : lod === 1 ? 128 : 64;
  const radialSegs = lod === 0 ? 88 : lod === 1 ? 46 : 24;

  const curve = getLFSpineCurve();

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

  // Expressive feline upward-tilted almond outer canthus frames (refs 13, 15, 16!)
  const eyeFrames = [
    {
      center: eyeCenterL,
      fwd: LF_EYE_GAZE_REST_DIR_L,
      up: new THREE.Vector3(-0.19, 0.980, 0.06).normalize(),
    },
    {
      center: eyeCenterR,
      fwd: LF_EYE_GAZE_REST_DIR_R,
      up: new THREE.Vector3(0.19, 0.980, 0.06).normalize(),
    },
  ].map((ef) => {
    const right = new THREE.Vector3().crossVectors(ef.up, ef.fwd).normalize();
    const orthoUp = new THREE.Vector3().crossVectors(ef.fwd, right).normalize();
    return { center: ef.center, fwd: ef.fwd, right, up: orthoUp };
  });

  for (let i = 0; i <= axialSegs; i++) {
    const u = i / axialSegs;
    // 5x finer axial ring concentration over neck, cranium, eye sockets & cute snout!
    const s = 1.0 - Math.pow(1.0 - u, 1.85);
    const center = curve.getPointAt(s);
    const tangent = curve.getTangentAt(s).normalize();

    const upVec = new THREE.Vector3()
      .copy(worldUp)
      .addScaledVector(tangent, -worldUp.dot(tangent))
      .normalize();
    const leftVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

    const z = center.z;
    // Continuous C1 monotone profile from tail tip (-4.18) -> swan neck -> smooth cranium (+2.065) with ZERO bulges!
    const tailTipCap = smoothstep(-4.18, -4.10, z);
    const bodyRx = evalLFMonotoneProfile(z, LF_RX_KNOTS) * tailTipCap;
    const bodyRy = evalLFMonotoneProfile(z, LF_RY_KNOTS) * tailTipCap;

    const headBlend = smoothstep(1.36, 1.50, z);
    let rx = bodyRx;
    let ry = bodyRy;
    if (headBlend > 0.0) {
      const hz = Math.max(0, Math.min(1, (z - 1.44) / (2.065 - 1.44)));
      const snoutCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (hz - 0.78) / 0.22), 2)));
      const headRx = evalLFHeadHalfWidth(z);
      const headRy = (0.174 + 0.018 * gaussian(hz, 0.36, 0.24) - 0.062 * smoothstep(0.36, 0.94, hz)) * snoutCap;
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

      let microScaleWeight = 0.08; // Porcelain-smooth hide (dramatically smoother than Toothless!)
      let sparklePattern = 0.0;
      let iceBlueBellyZone = 0.0;
      let plasmaAndBlushZone = 0.0;

      // Subtle Pale Sky-Blue Underbelly, Throat & Ventral Tail Countershading (refs 14, 15!)
      if (z > -2.90 && z < 1.60 && cosT < 0.12) {
        const longEnv = smoothstep(-2.90, -0.55, z) * (1.0 - smoothstep(1.36, 1.60, z));
        iceBlueBellyZone = smoothstep(0.12, -0.68, cosT) * longEnv;
      }

      // Subtle Under-Wing Axillary Flank Blush & Glimmering Dorsal Neck/Shoulder Stardust (film still ref 13!)
      if (z > -0.45 && z < 0.92) {
        const underWingFlank =
          gaussian(z, 0.30, 0.42) *
          gaussian(Math.abs(sinT), 0.88, 0.22) *
          gaussian(cosT, 0.08, 0.36);
        plasmaAndBlushZone = Math.max(plasmaAndBlushZone, underWingFlank * 0.28);
      }
      if (cosT > 0.35 && z > -3.90 && z < 1.60) {
        const neckShoulderGlitter =
          smoothstep(0.35, 0.92, cosT) * smoothstep(0.10, 0.85, z) * (1.0 - smoothstep(1.45, 1.65, z));
        // Continuous dorsal crest bioluminescent spine line from crown to heart-tail tip + flank scroll ribbons!
        const dorsalBiolumLine = gaussian(sinT, 0.0, 0.16) * smoothstep(0.55, 0.96, cosT);
        const flankRibbon =
          Math.pow(Math.max(0, Math.sin(z * 5.8 + Math.abs(sinT) * 3.4)), 4.0) *
          gaussian(cosT, 0.42, 0.24) *
          smoothstep(-2.4, -0.4, z) *
          (1.0 - smoothstep(0.95, 1.35, z));
        sparklePattern = Math.max(sparklePattern, neckShoulderGlitter * 0.48, dorsalBiolumLine * 0.84, flankRibbon * 0.72);
      }

      // 1. Fuller Porcelain Feline Chest & Smooth Axillary/Inguinal Limb-Socket Wrap (ZERO leg bulges!)
      if (z > -0.78 && z < 1.08) {
        const pecZ = gaussian(z, 0.68, 0.28);
        const pecLobed = gaussian(Math.abs(sinT), 0.44, 0.22) * smoothstep(-0.10, -0.86, cosT);
        localY -= 0.018 * pecZ * pecLobed;
        localX += Math.sign(sinT) * 0.012 * pecZ * pecLobed;

        // Smooth ventrolateral axillary (foreleg) & inguinal (hindleg) fold aprons enveloping upper leg roots!
        const foreAxilla = gaussian(z, 0.78, 0.20) * gaussian(Math.abs(sinT), 0.70, 0.18) * smoothstep(-0.08, -0.78, cosT);
        const hindInguinal = gaussian(z, -0.49, 0.22) * gaussian(Math.abs(sinT), 0.68, 0.19) * smoothstep(-0.05, -0.78, cosT);
        localY -= 0.026 * foreAxilla + 0.022 * hindInguinal;
      }

      // 2. Smooth Heart-Contoured Feline Cranium (NO jagged brow osteoderms, NO forehead bumps, NO scars!)
      if (z >= 1.42) {
        const browLong = gaussian(z, 1.842, 0.095);
        const browLat = gaussian(Math.abs(sinT), 0.62, 0.17) * smoothstep(0.18, 0.74, cosT);
        localY += 0.014 * browLong * browLat;
        localX += Math.sign(sinT) * 0.007 * browLong * browLat;

        // Soft, plush feline cheek cushions (giving her that adorable expressive expression in refs 13 & 15!)
        const cheekPlush =
          gaussian(z, 1.76, 0.12) *
          gaussian(Math.abs(sinT), 0.88, 0.17) *
          gaussian(cosT, -0.12, 0.25);
        localX += Math.sign(sinT) * 0.016 * cheekPlush;

        // Cute subtle medial forehead dimple/arch & Twin Glittery Forehead Heart Markings (ref 16!)
        if (cosT > 0.65 && z > 1.56 && z < 1.86) {
          const h1 = evalSoftHeartMask(localX, z - 1.745, 0.052);
          const h2 = evalSoftHeartMask(localX, z - 1.648, 0.038);
          sparklePattern = Math.max(sparklePattern, Math.max(h1, h2 * 0.92));
        }

        // Delicate feline rostral philtrum at very tip of nose
        if (z > 1.98 && cosT > -0.35 && cosT < 0.35) {
          localY -= 0.0020 * gaussian(sinT, 0.0, 0.08) * smoothstep(1.98, 2.055, z);
        }

        microScaleWeight = 0.22 + 0.24 * smoothstep(1.85, 2.05, z);
      }

      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(leftVec, localX)
        .addScaledVector(upVec, localY);

      // 3. ZERO-GAP INTERLOCKING UPPER LIP MARGIN + VAULTED ORAL ROOF
      const mouthBlend = smoothstep(1.52, 1.60, z);
      if (mouthBlend > 0 && cosT < 0.04) {
        const seamY = evalLFMouthSeamY(z);
        const rimFactor = Math.max(
          smoothstep(0.56, 0.90, Math.abs(sinT)),
          smoothstep(1.96, 2.04, z)
        );
        const lipOverhangY = seamY - 0.0042;
        const oralVaultY = seamY + 0.039 * (1.0 - smoothstep(1.92, 2.05, z));
        const targetVentralY = THREE.MathUtils.lerp(oralVaultY, lipOverhangY, rimFactor);
        const ventralStrength = mouthBlend * smoothstep(0.04, -0.26, cosT);
        pos.y = THREE.MathUtils.lerp(pos.y, targetVentralY, ventralStrength);
      }

      // 4. SILKY-SMOOTH CONTINUOUS ORBITAL CRADLE (Unbroken Quad Grid — Zero Polygon Distortion!)
      if (z > 1.66 && z < 2.00) {
        for (const ef of eyeFrames) {
          if (Math.sign(pos.x) !== Math.sign(ef.center.x)) continue;
          const rel = new THREE.Vector3().subVectors(pos, ef.center);
          const gF = rel.dot(ef.fwd);
          const gR = rel.dot(ef.right);
          const gU = rel.dot(ef.up);

          if (gF > 0.0) {
            const orbitGauss =
              Math.exp(-0.5 * (Math.pow(gR / 0.053, 2) + Math.pow(gU / 0.045, 2))) *
              smoothstep(0.0, 0.032, gF);
            const targetCradleDepth = LF_EYE_RADIUS - 0.022;
            const targetGF = THREE.MathUtils.lerp(gF, targetCradleDepth, orbitGauss);
            if (gF > targetGF) {
              pos.addScaledVector(ef.fwd, targetGF - gF);
            }
          }
        }
      }

      // 5. Dainty Feline Slit Nostrils + Soft Rose-Pink Nose Blush (canonical Light Fury pink nose tint!)
      if (z > 1.94 && z < 2.065 && pos.y > 1.48) {
        const nL = gaussian2D(pos.x, pos.z, 0.054, 2.018, 0.017, 0.020) * gaussian(pos.y, 1.508, 0.014);
        const nR = gaussian2D(pos.x, pos.z, -0.054, 2.018, 0.017, 0.020) * gaussian(pos.y, 1.508, 0.014);
        const nCavity = Math.max(nL, nR);
        const pinkNoseBlush = smoothstep(1.96, 2.055, pos.z) * gaussian(pos.y, 1.505, 0.032);
        plasmaAndBlushZone = Math.max(plasmaAndBlushZone, pinkNoseBlush * 0.65);

        if (nCavity > 0.05) {
          pos.x *= 1.0 - 0.14 * nCavity;
          pos.y -= 0.009 * nCavity;
          pos.z -= 0.011 * nCavity;
          plasmaAndBlushZone = Math.max(plasmaAndBlushZone, Math.min(1.0, 0.55 + nCavity * 0.85));
        }
      }

      const vIdx = i * (radialSegs + 1) + j;
      positions[vIdx * 3] = pos.x;
      positions[vIdx * 3 + 1] = pos.y;
      positions[vIdx * 3 + 2] = pos.z;

      uvs[vIdx * 2] = s * 5.2;
      uvs[vIdx * 2 + 1] = vFrac * 1.6;

      anatomy[vIdx * 4] = microScaleWeight;
      anatomy[vIdx * 4 + 1] = sparklePattern;
      anatomy[vIdx * 4 + 2] = iceBlueBellyZone;
      anatomy[vIdx * 4 + 3] = plasmaAndBlushZone;

      const skin = computeLFCraniumOrNeckSkin(pos, rig, bodyBoneIndices, bodyBonePositions);
      skinIndices.set(skin.indices, vIdx * 4);
      skinWeights.set(skin.weights, vIdx * 4);
    }
  }

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
 * Builds the Light Fury's 4 signature rounded bunny/paddle cranial nubs (refs 13, 14, 15, 16):
 * - 2 short, wide, softly rounded paddle-tipped top ear nubs (NO sharp points!)
 * - 2 small, cute rounded lateral cheek nubs (NO lower jaw chin flaps!)
 */
function buildRoundedBunnyEarAndCheekNubs(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const geoms: THREE.BufferGeometry[] = [];
  const headIdx = rig.boneIndexMap.get('head')!;

  interface NubConfig {
    boneNames: string[];
    tipPos: [number, number, number];
    maxWidth: number;
    maxThick: number;
    rollAngle: number;
    isPrimaryEar: boolean;
  }

  const configs: NubConfig[] = [];
  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    // Short, rounded, paddle-like bunny/axolotl ear nubs (compare refs 13 & 15!)
    configs.push({
      boneNames: [`ear_${side}_1`, `ear_${side}_2`, `ear_${side}_3`],
      tipPos: [s * 0.162, 1.848, 1.24],
      maxWidth: 0.068,
      maxThick: 0.028,
      rollAngle: s * -0.28,
      isPrimaryEar: true,
    });
    // Single dainty rounded lateral cheek nub per side
    configs.push({
      boneNames: [`cheekUpper_${side}_1`, `cheekUpper_${side}_2`],
      tipPos: [s * 0.288, 1.608, 1.35],
      maxWidth: 0.032,
      maxThick: 0.017,
      rollAngle: s * -0.82,
      isPrimaryEar: false,
    });
  }

  const lenSegs = lod === 0 ? 22 : lod === 1 ? 14 : 8;
  const radSegs = lod === 0 ? 24 : lod === 1 ? 16 : 10;

  for (const cfg of configs) {
    const pts = cfg.boneNames.map((n) => rig.bindWorldPositions.get(n)!.clone());
    const rootDir = new THREE.Vector3().subVectors(pts[1], pts[0]).normalize();
    const embedRoot = pts[0].clone().addScaledVector(rootDir, -0.055);
    const splinePts = [embedRoot, ...pts, new THREE.Vector3(...cfg.tipPos)];
    const curve = new THREE.CatmullRomCurve3(splinePts);

    const chainIndices = cfg.boneNames.map((n) => rig.boneIndexMap.get(n)!);
    const chainPositions = cfg.boneNames.map((n) => rig.bindWorldPositions.get(n)!);

    const vCount = (lenSegs + 1) * (radSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    const refUp = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i <= lenSegs; i++) {
      const u = i / lenSegs;
      const center = curve.getPointAt(u);
      const tangent = curve.getTangentAt(u).normalize();

      const baseUp = refUp.clone().addScaledVector(tangent, -refUp.dot(tangent)).normalize();
      const baseSide = new THREE.Vector3().crossVectors(baseUp, tangent).normalize();

      const cosR = Math.cos(cfg.rollAngle);
      const sinR = Math.sin(cfg.rollAngle);
      const majorAxis = baseSide.clone().multiplyScalar(cosR).addScaledVector(baseUp, sinR);
      const minorAxis = baseUp.clone().multiplyScalar(cosR).addScaledVector(baseSide, -sinR);

      // Wide, rounded paddle-shaped bunny tip (stays plump up to u=0.82 then caps in a smooth hemisphere!)
      const paddleSwell = cfg.isPrimaryEar
        ? 0.72 + 0.36 * Math.sin(Math.pow(u, 0.75) * Math.PI * 0.88)
        : Math.sin(Math.pow(u, 0.68) * Math.PI * 0.92);
      const roundCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (u - 0.76) / 0.24), 2)));
      const w = cfg.maxWidth * paddleSwell * roundCap;
      const th = cfg.maxThick * (0.78 + 0.28 * Math.sin(u * Math.PI)) * roundCap;

      for (let j = 0; j <= radSegs; j++) {
        const v = j / radSegs;
        const ang = v * Math.PI * 2;
        const pos = new THREE.Vector3()
          .copy(center)
          .addScaledVector(majorAxis, w * Math.cos(ang))
          .addScaledVector(minorAxis, th * Math.sin(ang));

        const idx = i * (radSegs + 1) + j;
        positions[idx * 3] = pos.x;
        positions[idx * 3 + 1] = pos.y;
        positions[idx * 3 + 2] = pos.z;

        uvs[idx * 2] = u * 0.48;
        uvs[idx * 2 + 1] = v * 0.48;

        // Subtle glittery tip shimmer on ear paddles (visible in Sideshow sculpt ref 15!)
        anatomy[idx * 4] = 0.20;
        anatomy[idx * 4 + 1] = smoothstep(0.55, 0.95, u) * 0.65;
        anatomy[idx * 4 + 2] = 0.0;
        anatomy[idx * 4 + 3] = smoothstep(0.65, 1.0, u) * 0.30; // Faint rosy tip warmth

        const chainSkin = computeChainSkinWeight(pos, chainIndices, chainPositions, 4.0);
        const headBlend = smoothstep(0.30, 0.0, u);
        const finalSkin = normalizeSkinWeights(
          [headIdx, chainSkin.indices[0], chainSkin.indices[1], chainSkin.indices[2]],
          [
            headBlend,
            chainSkin.weights[0] * (1 - headBlend),
            chainSkin.weights[1] * (1 - headBlend),
            chainSkin.weights[2] * (1 - headBlend),
          ]
        );
        skinIndices.set(finalSkin.indices, idx * 4);
        skinWeights.set(finalSkin.weights, idx * 4);
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

    const forward = (side === 'L' ? LF_EYE_GAZE_REST_DIR_L : LF_EYE_GAZE_REST_DIR_R).clone();
    const rawUp = new THREE.Vector3(s * -0.19, 0.980, 0.06).normalize();
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

      const baseLidRadius = LF_EYE_RADIUS + 0.0016;

      for (let iv = 0; iv <= vSegs; iv++) {
        const vFrac = iv / vSegs;
        const marginRim = gaussian(vFrac, 0.06, 0.08);

        for (let iu = 0; iu <= uSegs; iu++) {
          const uFrac = iu / uSegs;
          const lon = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(-65, 65, uFrac));
          const cornerPinch = Math.sin(uFrac * Math.PI);
          // Graceful feline almond aperture (+42 deg upper arch, -38 deg lower cradle)
          const openLatDeg = isUpper ? 42 * cornerPinch : -38 * cornerPinch;
          const rimSealLatDeg = isUpper ? 78 : -74;
          const lat = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(openLatDeg, rimSealLatDeg, vFrac));

          const lidR = baseLidRadius + 0.0016 * marginRim - 0.0026 * vFrac;

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
          anatomy[idx * 4] = 0.25;

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

function buildSleekFelineLimbsAndPaws(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const geoms: THREE.BufferGeometry[] = [];
  const lenSegs = lod === 0 ? 40 : lod === 1 ? 24 : 14;
  const radSegs = lod === 0 ? 32 : lod === 1 ? 20 : 12;

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;

    const foreSpline = [
      new THREE.Vector3(s * 0.14, 0.89, 0.78),
      rig.bindWorldPositions.get(`scapula_${side}`)!,
      rig.bindWorldPositions.get(`shoulder_${side}`)!,
      rig.bindWorldPositions.get(`elbow_${side}`)!,
      rig.bindWorldPositions.get(`wrist_${side}`)!,
      new THREE.Vector3(s * 0.292, 0.048, 0.925),
      new THREE.Vector3(s * 0.292, 0.028, 0.992),
    ];
    const foreBones = ['chest', `scapula_${side}`, `shoulder_${side}`, `elbow_${side}`, `wrist_${side}`, `forepaw_${side}`];
    geoms.push(buildSingleFelineLimb(rig, foreSpline, foreBones, true, s, lenSegs, radSegs));
    geoms.push(...buildArticulatedFelineToes(rig, side, true, lod));

    const hindSpline = [
      new THREE.Vector3(s * 0.13, 0.75, -0.49),
      rig.bindWorldPositions.get(`hip_${side}`)!,
      rig.bindWorldPositions.get(`knee_${side}`)!,
      rig.bindWorldPositions.get(`ankle_${side}`)!,
      new THREE.Vector3(s * 0.278, 0.046, -0.506),
      new THREE.Vector3(s * 0.278, 0.028, -0.442),
    ];
    const hindBones = ['pelvis', `hip_${side}`, `knee_${side}`, `ankle_${side}`, `hindpaw_${side}`];
    geoms.push(buildSingleFelineLimb(rig, hindSpline, hindBones, false, s, lenSegs, radSegs));
    geoms.push(...buildArticulatedFelineToes(rig, side, false, lod));
  }

  return geoms;
}

function buildArticulatedFelineToes(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  isForelimb: boolean,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const toeGeoms: THREE.BufferGeometry[] = [];
  const toeSpecs = getLightFuryToeSpecs(side, isForelimb);
  const uSegs = lod === 0 ? 15 : lod === 1 ? 10 : 6;
  const vSegs = lod === 0 ? 16 : lod === 1 ? 10 : 8;

  for (const ts of toeSpecs) {
    const pawBoneIdx = rig.boneIndexMap.get(ts.pawBone)!;
    const vCount = (uSegs + 1) * (vSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    const fLen = Math.hypot(ts.dirX, ts.dirZ);
    const nx = ts.dirX / fLen;
    const nz = ts.dirZ / fLen;
    const lx = nz;
    const lz = -nx;

    for (let iu = 0; iu <= uSegs; iu++) {
      const uFrac = iu / uSegs;
      // Start deep inside the broad feline paw cushion (t = -0.36) so all 4 splayed toes form one cohesive paw!
      const t = THREE.MathUtils.lerp(-0.36, 1.0, uFrac);
      const tClamped = Math.max(0, t);

      const footBridgeLift = Math.max(0, -t) * 0.036;
      const archY = Math.sin(tClamped * Math.PI) * 0.009 - 0.008 * tClamped * tClamped + footBridgeLift;
      const cx = ts.rootX + nx * ts.toeLength * t;
      const cz = ts.rootZ + nz * ts.toeLength * t;
      const cy = ts.rootY + archY;

      const webRootFlare = 1.0 + 0.42 * Math.pow(1.0 - smoothstep(-0.36, 0.18, t), 1.5);
      const knuckleBulge = 1.0 + 0.13 * gaussian(tClamped, 0.40, 0.18) + 0.11 * gaussian(tClamped, 0.84, 0.10);
      const tipDome = Math.sqrt(Math.max(0.04, 1.0 - Math.pow(Math.max(0, (uFrac - 0.89) / 0.11), 2)));
      const rad = THREE.MathUtils.lerp(ts.baseRadius, ts.tipRadius, tClamped) * webRootFlare * knuckleBulge * tipDome;

      for (let iv = 0; iv <= vSegs; iv++) {
        const vFrac = iv / vSegs;
        const theta = vFrac * Math.PI * 2;
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);

        const latWeb = 1.10 + 0.22 * (1.0 - smoothstep(-0.34, 0.20, t));
        const px = cx + lx * sinT * rad * latWeb;
        const pz = cz + lz * sinT * rad * latWeb;
        let py = cy + cosT * rad * 0.86;
        if (py < 0.003) {
          py = 0.003 + Math.max(0, py) * 0.14;
        }

        const idx = iu * (vSegs + 1) + iv;
        positions[idx * 3] = px;
        positions[idx * 3 + 1] = py;
        positions[idx * 3 + 2] = pz;

        uvs[idx * 2] = uFrac * 0.36;
        uvs[idx * 2 + 1] = vFrac * 0.32;

        anatomy[idx * 4] = 0.28;
        anatomy[idx * 4 + 1] = cosT > 0.2 ? 0.52 * smoothstep(0.2, 0.85, tClamped) : 0.0;
        anatomy[idx * 4 + 2] = 0.35; // Soft ice-blue paw-top tint (matching ref 14!)

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

function buildSingleFelineLimb(
  rig: ToothlessRigSkeleton,
  splinePts: THREE.Vector3[],
  boneNames: string[],
  isForelimb: boolean,
  sideSign: number,
  lenSegs: number,
  radSegs: number
): THREE.BufferGeometry {
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

    // Tucked-in proximal shoulder/hip root (ZERO protruding lateral joint bulges!) -> graceful lower limb -> broad 4-toe paw dome!
    const rootMelt = 0.50 + 0.50 * smoothstep(0.0, 0.34, rootToPaw);
    const toeCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (rootToPaw - 0.91) / 0.09), 2))) * rootMelt;
    let rWidth = 0.080;
    let rDepth = 0.092;

    if (isForelimb) {
      const forearmGrace = gaussian(rootToPaw, 0.54, 0.16) * 0.022;
      const broadPawFlare = gaussian(rootToPaw, 0.86, 0.12) * 0.072;
      rWidth = (0.076 + forearmGrace + broadPawFlare) * toeCap;
      rDepth = (0.090 + gaussian(rootToPaw, 0.25, 0.18) * 0.028 + forearmGrace + broadPawFlare * 0.86) * toeCap;
    } else {
      const calfGrace = gaussian(rootToPaw, 0.52, 0.15) * 0.026;
      const broadHindPawFlare = gaussian(rootToPaw, 0.86, 0.12) * 0.068;
      rWidth = (0.074 + calfGrace + broadHindPawFlare) * toeCap;
      rDepth = (0.094 + gaussian(rootToPaw, 0.26, 0.19) * 0.038 + calfGrace * 1.06 + broadHindPawFlare * 0.84) * toeCap;
    }

    const pawZone = smoothstep(0.70, 0.94, rootToPaw);
    const upperJunction = 1.0 - smoothstep(0.08, 0.42, rootToPaw);

    for (let j = 0; j <= radSegs; j++) {
      const vFrac = j / radSegs;
      const theta = vFrac * Math.PI * 2;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      // Keep outer lateral shoulder & thigh completely flush inside the fuller torso contour!
      const isOuterAspect = sinT * sideSign > 0 ? Math.abs(sinT) : 0;
      const latFlushFactor = 1.0 - 0.28 * upperJunction * isOuterAspect;

      let digitBulge = 1.0;
      if (pawZone > 0.01 && cosT > -0.35) {
        const toeAngle = Math.atan2(sinT, Math.max(0.05, cosT + 0.25));
        const fourToes = Math.cos(toeAngle * 3.6);
        digitBulge += 0.14 * pawZone * Math.max(-0.12, fourToes) * smoothstep(-0.35, 0.45, cosT);
      }

      // Signature Light Fury smooth, rounded lateral-posterior leg fins (refs 14, 15 & Wiki!)
      let aeroLegFin = 0.0;
      if (isForelimb && rootToPaw > 0.28 && rootToPaw < 0.84) {
        const outDirMatch = Math.max(0, sinT * sideSign * 0.62 - cosT * 0.78);
        aeroLegFin = Math.pow(outDirMatch, 3.6) * Math.sin(((rootToPaw - 0.28) / 0.56) * Math.PI) * 0.028;
      } else if (!isForelimb && rootToPaw > 0.34 && rootToPaw < 0.84) {
        const outDirMatch = Math.max(0, sinT * sideSign * 0.58 - cosT * 0.81);
        aeroLegFin = Math.pow(outDirMatch, 3.8) * Math.sin(((rootToPaw - 0.34) / 0.50) * Math.PI) * 0.022;
      }

      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(latVec, (rWidth * latFlushFactor * sinT + sideSign * aeroLegFin * 0.65) * digitBulge)
        .addScaledVector(fwdVec, (rDepth * cosT - aeroLegFin * 0.75) * digitBulge);

      if (rootToPaw > 0.70 && pos.y < 0.004) {
        pos.y = 0.002 + Math.max(0, pos.y) * 0.14;
      }

      const vIdx = i * (radSegs + 1) + j;
      positions[vIdx * 3] = pos.x;
      positions[vIdx * 3 + 1] = pos.y;
      positions[vIdx * 3 + 2] = pos.z;

      uvs[vIdx * 2] = rootToPaw * 1.35;
      uvs[vIdx * 2 + 1] = vFrac * 0.85;

      anatomy[vIdx * 4] = 0.22;
      // Bioluminescent limb-fin & dorsal paw stripe mask
      anatomy[vIdx * 4 + 1] = Math.min(
        1.0,
        aeroLegFin * 22.0 + Math.pow(Math.max(0, Math.sin(rootToPaw * 14.0)), 4.0) * isOuterAspect * 0.65
      );
      anatomy[vIdx * 4 + 2] = Math.max(
        smoothstep(0.65, 0.96, rootToPaw) * 0.35,
        Math.max(0, -sinT * sideSign) * 0.45
      );

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
