import * as THREE from 'three';
import { ToothlessRigSkeleton } from '../ToothlessSkeleton';
import { LODLevel } from '../geometry/BodyAndHeadBuilder';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from '../geometry/GeometryUtils';
import { ModularHeadAndClawGeometries } from '../geometry/OralAndEyesBuilder';
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

export function buildLightFuryOralEyesAndClawsGeometries(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): ModularHeadAndClawGeometries {
  return {
    jawSkinGeometry: mergeSkinnedGeometries([
      buildHingedLowerMandible(rig, lod),
      ...buildSmoothRictusCheekFolds(rig, lod),
    ]),
    oralGumsGeometry: buildSculptedOralCavityAndGums(rig, lod),
    teethGeometry: buildRetractableTeeth(rig, lod),
    tongueGeometry: buildArticulatedTongue(rig, lod),
    irisGeometry: buildDualEyes(rig, lod, false),
    corneaGeometry: buildDualEyes(rig, lod, true),
    clawsGeometry: buildFelineClaws(rig, lod),
  };
}

function sampleLFDentalArchPoint(angle: number, isUpper: boolean): { x: number; z: number } {
  const z = 1.66 + Math.cos(angle) * (isUpper ? 0.355 : 0.340);
  const archHalfW = Math.max(0.02, evalLFHeadHalfWidth(z) - (isUpper ? 0.022 : 0.028));
  const x = Math.sin(angle) * archHalfW;
  return { x, z };
}

/**
 * Smooth, cute feline U-shaped lower mandible locked to evalLFHeadHalfWidth(z) & evalLFMouthSeamY(z)
 * with zero battle scars, zero lower jaw chin-flaps, and soft ice-blue gular throat countershading!
 */
function buildHingedLowerMandible(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const axialSegs = lod === 0 ? 40 : lod === 1 ? 26 : 16;
  const radialSegs = lod === 0 ? 38 : lod === 1 ? 24 : 16;

  const jawIdx = rig.boneIndexMap.get('jaw')!;
  const headIdx = rig.boneIndexMap.get('head')!;
  const neck4Idx = rig.boneIndexMap.get('neck_4')!;
  const neck3Idx = rig.boneIndexMap.get('neck_3')!;

  const vCount = (axialSegs + 1) * (radialSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let i = 0; i <= axialSegs; i++) {
    const s = i / axialSegs;
    const z = THREE.MathUtils.lerp(1.45, 2.056, s);

    const rawHalfW = evalLFHeadHalfWidth(z);
    const chinTipRound = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (s - 0.87) / 0.13), 2)));
    const halfWidth = Math.max(0.002, (rawHalfW - 0.0032 * smoothstep(1.55, 1.65, z)) * chinTipRound);

    const seamY = evalLFMouthSeamY(z);
    const rearRamusLift = 0.025 * (1.0 - smoothstep(1.45, 1.59, z));
    const jawRimY = seamY + 0.0032 + rearRamusLift;
    const jawDepth = (0.074 - 0.030 * s) * chinTipRound;

    for (let j = 0; j <= radialSegs; j++) {
      const vFrac = j / radialSegs;
      const theta = vFrac * Math.PI * 2;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      const gularCurve = Math.exp(-Math.pow((s - 0.28) / 0.22, 2)) * 0.009;
      const cheekSoft = Math.exp(-Math.pow((s - 0.30) / 0.16, 2)) * Math.abs(sinT) * 0.008;
      const x = (halfWidth + cheekSoft) * sinT;
      const oralTrough = -0.019 * cosT * (1.0 - Math.pow(sinT, 2)) * smoothstep(1.57, 1.66, z);
      const y = cosT >= 0 ? jawRimY + oralTrough : jawRimY + (jawDepth + gularCurve) * cosT;

      const vIdx = i * (radialSegs + 1) + j;
      positions[vIdx * 3] = x;
      positions[vIdx * 3 + 1] = y;
      positions[vIdx * 3 + 2] = z;

      uvs[vIdx * 2] = s * 0.95;
      uvs[vIdx * 2 + 1] = vFrac * 0.85;

      anatomy[vIdx * 4] = 0.22;
      anatomy[vIdx * 4 + 1] = 0.0;
      // Soft ice-blue throat & chin shading blending seamlessly into neck!
      anatomy[vIdx * 4 + 2] = cosT < -0.15 ? smoothstep(0.92, 0.25, s) * (-cosT) * 0.72 : 0.0;
      anatomy[vIdx * 4 + 3] = s > 0.82 ? (s - 0.82) * 2.2 : 0.0; // Subtle chin tip warmth

      const jawW = smoothstep(1.51, 1.60, z);
      const rem = 1.0 - jawW;
      const headVsNeck = smoothstep(1.31, 1.53, z);
      const n4Share = smoothstep(1.26, 1.45, z);
      const neckRem = rem * (1.0 - headVsNeck);
      const normSkin = normalizeSkinWeights(
        [jawIdx, headIdx, neck4Idx, neck3Idx],
        [
          jawW,
          rem * headVsNeck,
          neckRem * (0.52 + 0.48 * n4Share),
          neckRem * (0.48 - 0.48 * n4Share),
        ]
      );

      skinIndices.set(normSkin.indices, vIdx * 4);
      skinWeights.set(normSkin.weights, vIdx * 4);
    }
  }

  const indices = new Uint16Array(axialSegs * radialSegs * 6);
  let ptr = 0;
  for (let i = 0; i < axialSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * (radialSegs + 1) + j;
      const b = (i + 1) * (radialSegs + 1) + j;
      const c = (i + 1) * (radialSegs + 1) + (j + 1);
      const d = i * (radialSegs + 1) + (j + 1);
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
  return g;
}

function buildSmoothRictusCheekFolds(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const parts: THREE.BufferGeometry[] = [];
  const headIdx = rig.boneIndexMap.get('head')!;
  const jawIdx = rig.boneIndexMap.get('jaw')!;
  const uSegs = lod === 0 ? 12 : 8;
  const vSegs = lod === 0 ? 10 : 6;

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    const vCount = (uSegs + 1) * (vSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs;
      for (let iu = 0; iu <= uSegs; iu++) {
        const u = iu / uSegs;
        const z = THREE.MathUtils.lerp(1.56, 1.72, u);
        const seamY = evalLFMouthSeamY(z);
        const y = THREE.MathUtils.lerp(seamY - 0.015, seamY + 0.018, v);
        const baseW = evalLFHeadHalfWidth(z) - 0.008;
        const foldTuck = -0.005 * Math.sin(u * Math.PI) * Math.sin(v * Math.PI);
        const x = s * (baseW + foldTuck);

        const idx = iv * (uSegs + 1) + iu;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        uvs[idx * 2] = u * 0.25;
        uvs[idx * 2 + 1] = v * 0.25;
        anatomy[idx * 4] = 0.22;

        const wHead = smoothstep(0.0, 1.0, v);
        skinIndices.set([headIdx, jawIdx, 0, 0], idx * 4);
        skinWeights.set([wHead, 1.0 - wHead, 0, 0], idx * 4);
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
        if (s > 0) {
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

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
    g.setIndex(new THREE.BufferAttribute(indices, 1));
    g.computeVertexNormals();
    parts.push(g);
  }

  return parts;
}

function buildSculptedOralCavityAndGums(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const headIdx = rig.boneIndexMap.get('head')!;
  const jawIdx = rig.boneIndexMap.get('jaw')!;

  const pSegs = lod === 0 ? 28 : 16;
  const pRad = lod === 0 ? 18 : 10;

  // A. Vaulted Hard Palate Roof + Transverse Palatal Rugae
  {
    const vCount = (pSegs + 1) * (pRad + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let i = 0; i <= pSegs; i++) {
      const u = i / pSegs;
      const z = THREE.MathUtils.lerp(1.58, 2.025, u);
      const maxW = Math.max(0.014, evalLFHeadHalfWidth(z) - 0.018);
      const seamY = evalLFMouthSeamY(z);
      const rugaeWave = Math.sin(u * Math.PI * 12.0) * 0.0022 * Math.sin(u * Math.PI);

      for (let j = 0; j <= pRad; j++) {
        const v = j / pRad;
        const lat = (v - 0.5) * 2.0;
        const archVault = Math.cos(lat * Math.PI * 0.5) * 0.028 * (1.0 - 0.45 * u);
        const rapheGroove = -0.0020 * Math.exp(-Math.pow(lat / 0.12, 2));
        const gumCollar = Math.exp(-Math.pow((Math.abs(lat) - 0.88) / 0.12, 2)) * -0.005;

        const x = lat * maxW;
        const y = seamY + 0.007 + archVault + rugaeWave * (1.0 - Math.abs(lat) * 0.5) + rapheGroove + gumCollar;

        const idx = i * (pRad + 1) + j;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        uvs[idx * 2] = u * 2.0;
        uvs[idx * 2 + 1] = v * 2.0;
        anatomy[idx * 4 + 3] = (1.0 - u) * 0.65;

        skinIndices.set([headIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(pSegs * pRad * 6);
    let ptr = 0;
    for (let i = 0; i < pSegs; i++) {
      for (let j = 0; j < pRad; j++) {
        const a = i * (pRad + 1) + j;
        const b = (i + 1) * (pRad + 1) + j;
        const c = (i + 1) * (pRad + 1) + (j + 1);
        const d = i * (pRad + 1) + (j + 1);
        indices[ptr++] = a;
        indices[ptr++] = c;
        indices[ptr++] = b;
        indices[ptr++] = a;
        indices[ptr++] = d;
        indices[ptr++] = c;
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
    parts.push(g);
  }

  // B. Concave Mandibular Sublingual Floor & Lower Alveolar Gum Ridge
  {
    const vCount = (pSegs + 1) * (pRad + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let i = 0; i <= pSegs; i++) {
      const u = i / pSegs;
      const z = THREE.MathUtils.lerp(1.58, 2.015, u);
      const maxW = Math.max(0.012, evalLFHeadHalfWidth(z) - 0.022);
      const seamY = evalLFMouthSeamY(z);

      for (let j = 0; j <= pRad; j++) {
        const v = j / pRad;
        const lat = (v - 0.5) * 2.0;
        const sublingualBowl = -Math.cos(lat * Math.PI * 0.5) * 0.016 * (1.0 - 0.35 * u);
        const gumRidge = Math.exp(-Math.pow((Math.abs(lat) - 0.86) / 0.14, 2)) * 0.0055;

        const x = lat * maxW;
        const y = seamY - 0.004 + sublingualBowl + gumRidge;

        const idx = i * (pRad + 1) + j;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        uvs[idx * 2] = u * 2.0;
        uvs[idx * 2 + 1] = v * 2.0;
        anatomy[idx * 4 + 3] = (1.0 - u) * 0.55;

        skinIndices.set([jawIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(pSegs * pRad * 6);
    let ptr = 0;
    for (let i = 0; i < pSegs; i++) {
      for (let j = 0; j < pRad; j++) {
        const a = i * (pRad + 1) + j;
        const b = (i + 1) * (pRad + 1) + j;
        const c = (i + 1) * (pRad + 1) + (j + 1);
        const d = i * (pRad + 1) + (j + 1);
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
    parts.push(g);
  }

  // C. Enclosed Pharyngeal Throat Curtain (glows rose-violet/ice-cyan when charging plasma!)
  const pUSegs = lod === 0 ? 18 : 10;
  const pVSegs = lod === 0 ? 12 : 8;
  {
    const vCount = (pUSegs + 1) * (pVSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let iv = 0; iv <= pVSegs; iv++) {
      const v = iv / pVSegs;
      for (let iu = 0; iu <= pUSegs; iu++) {
        const u = iu / pUSegs;
        const ang = THREE.MathUtils.lerp(-Math.PI * 0.62, Math.PI * 0.62, u);
        const z = 1.66 - Math.cos(ang) * 0.10;
        const rx = evalLFHeadHalfWidth(Math.max(1.55, z)) - 0.020;
        const x = Math.sin(ang) * rx;
        const seamY = evalLFMouthSeamY(z);
        const y = THREE.MathUtils.lerp(seamY - 0.016, seamY + 0.026, v);

        const idx = iv * (pUSegs + 1) + iu;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        uvs[idx * 2] = u * 1.5;
        uvs[idx * 2 + 1] = v * 1.5;
        anatomy[idx * 4 + 3] = 0.95 * Math.cos(ang * 0.65);

        const wHead = smoothstep(0.0, 1.0, v);
        skinIndices.set([headIdx, jawIdx, 0, 0], idx * 4);
        skinWeights.set([wHead, 1.0 - wHead, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(pUSegs * pVSegs * 6);
    let ptr = 0;
    for (let iv = 0; iv < pVSegs; iv++) {
      for (let iu = 0; iu < pUSegs; iu++) {
        const a = iv * (pUSegs + 1) + iu;
        const b = (iv + 1) * (pUSegs + 1) + iu;
        const c = (iv + 1) * (pUSegs + 1) + (iu + 1);
        const d = iv * (pUSegs + 1) + (iu + 1);
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
    parts.push(g);
  }

  return mergeSkinnedGeometries(parts);
}

function buildRetractableTeeth(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const upperIdx = rig.boneIndexMap.get('teethUpper')!;
  const lowerIdx = rig.boneIndexMap.get('teethLower')!;
  const parts: THREE.BufferGeometry[] = [];

  const hSegs = lod === 0 ? 8 : 5;
  const rSegs = lod === 0 ? 10 : 6;

  for (const isUpper of [true, false]) {
    const count = isUpper ? 16 : 14;
    const boneIdx = isUpper ? upperIdx : lowerIdx;
    const dirY = isUpper ? -1 : 1;

    for (let t = 0; t < count; t++) {
      const frac = (t + 0.5) / count;
      const angle = THREE.MathUtils.lerp(-Math.PI * 0.42, Math.PI * 0.42, frac);
      const archPt = sampleLFDentalArchPoint(angle, isUpper);

      const rootX = archPt.x;
      const rootZ = archPt.z;
      const rootY = evalLFMouthSeamY(rootZ) + (isUpper ? 0.010 : -0.009);

      const canineBoost = 1.0 + 0.30 * Math.exp(-Math.pow((Math.abs(angle) - 0.52) / 0.25, 2));
      const toothLen = 0.0195 * canineBoost * (0.78 + 0.22 * Math.cos(angle));
      const toothRad = 0.0054 * canineBoost;

      const vCount = (hSegs + 1) * (rSegs + 1);
      const positions = new Float32Array(vCount * 3);
      const uvs = new Float32Array(vCount * 2);
      const anatomy = new Float32Array(vCount * 4);
      const skinIndices = new Uint16Array(vCount * 4);
      const skinWeights = new Float32Array(vCount * 4);

      const inwardX = -Math.sin(angle);
      const inwardZ = -Math.cos(angle);

      for (let i = 0; i <= hSegs; i++) {
        const s = isUpper ? 1.0 - i / hSegs : i / hSegs;
        const radius = toothRad * (1.0 - 0.88 * Math.pow(s, 1.25));
        const curveHook = 0.0045 * s * s;

        const cx = rootX + inwardX * curveHook;
        const cy = rootY + dirY * toothLen * s;
        const cz = rootZ + inwardZ * curveHook - 0.0025 * s * s;

        for (let j = 0; j <= rSegs; j++) {
          const v = j / rSegs;
          const th = v * Math.PI * 2;
          const idx = i * (rSegs + 1) + j;
          positions[idx * 3] = cx + Math.sin(th) * radius;
          positions[idx * 3 + 1] = cy;
          positions[idx * 3 + 2] = cz + Math.cos(th) * radius;
          uvs[idx * 2] = s;
          uvs[idx * 2 + 1] = v;
          skinIndices.set([boneIdx, 0, 0, 0], idx * 4);
          skinWeights.set([1, 0, 0, 0], idx * 4);
        }
      }

      const indices = new Uint16Array(hSegs * rSegs * 6);
      let ptr = 0;
      for (let i = 0; i < hSegs; i++) {
        for (let j = 0; j < rSegs; j++) {
          const a = i * (rSegs + 1) + j;
          const b = (i + 1) * (rSegs + 1) + j;
          const c = (i + 1) * (rSegs + 1) + (j + 1);
          const d = i * (rSegs + 1) + (j + 1);
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
      parts.push(g);
    }
  }

  return mergeSkinnedGeometries(parts);
}

function buildArticulatedTongue(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const lenSegs = lod === 0 ? 28 : 16;
  const radSegs = lod === 0 ? 22 : 12;

  const boneNames = ['tongue_1', 'tongue_2', 'tongue_3', 'tongue_4'];
  const chainIndices = boneNames.map((n) => rig.boneIndexMap.get(n)!);
  const chainPositions = boneNames.map((n) => rig.bindWorldPositions.get(n)!);

  const vCount = (lenSegs + 1) * (radSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let i = 0; i <= lenSegs; i++) {
    const s = i / lenSegs;
    const z = THREE.MathUtils.lerp(1.62, 1.96, s);
    const baseY = evalLFMouthSeamY(z) - 0.0035;
    const tipCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (s - 0.76) / 0.24), 2)));
    const halfW = (0.068 + 0.010 * Math.sin(s * Math.PI) - 0.020 * s) * tipCap;
    const halfH = (0.013 - 0.004 * s) * tipCap;

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const sinT = Math.sin(th);
      const cosT = Math.cos(th);

      const groove = cosT > 0.35 ? -0.0035 * Math.exp(-Math.pow(sinT / 0.24, 2)) : 0;
      const papillae =
        cosT > 0.2 ? 0.0010 * Math.sin(s * Math.PI * 26.0) * Math.cos(sinT * Math.PI * 9.0) * tipCap : 0;
      const pos = new THREE.Vector3(halfW * sinT, baseY + halfH * cosT + groove + papillae, z);

      const idx = i * (radSegs + 1) + j;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;
      uvs[idx * 2] = s * 2.5;
      uvs[idx * 2 + 1] = v * 1.8;

      const skin = computeChainSkinWeight(pos, chainIndices, chainPositions, 3.8);
      skinIndices.set(skin.indices, idx * 4);
      skinWeights.set(skin.weights, idx * 4);
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

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  g.setIndex(new THREE.BufferAttribute(indices, 1));
  g.computeVertexNormals();
  return g;
}

function buildDualEyes(
  rig: ToothlessRigSkeleton,
  lod: LODLevel,
  isCornea: boolean
): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const rings = lod === 0 ? 32 : lod === 1 ? 22 : 14;
  const segs = lod === 0 ? 40 : lod === 1 ? 26 : 16;

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    const eyeCenter = rig.bindWorldPositions.get(`eye_${side}`)!;
    const eyeBoneIdx = rig.boneIndexMap.get(`eye_${side}`)!;

    const poleDir = (side === 'L' ? LF_EYE_GAZE_REST_DIR_L : LF_EYE_GAZE_REST_DIR_R).clone();
    const rawUp = new THREE.Vector3(s * -0.19, 0.980, 0.06).normalize();
    const rightAxis = new THREE.Vector3().crossVectors(rawUp, poleDir).normalize();
    const upAxis = new THREE.Vector3().crossVectors(poleDir, rightAxis).normalize();

    const baseRadius = isCornea ? LF_EYE_RADIUS + 0.0008 : LF_EYE_RADIUS;
    const irisAngularRadius = 0.94;

    const vCount = (rings + 1) * (segs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let ir = 0; ir <= rings; ir++) {
      const phi = (ir / rings) * (isCornea ? Math.PI * 0.52 : Math.PI * 0.88);
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      for (let is = 0; is <= segs; is++) {
        const theta = (is / segs) * Math.PI * 2;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);

        let r = baseRadius;
        if (phi < irisAngularRadius) {
          const irisFrac = 1.0 - phi / irisAngularRadius;
          r += isCornea ? 0.0013 * irisFrac * irisFrac : -0.0025 * irisFrac * irisFrac;
        }

        const dir = new THREE.Vector3()
          .addScaledVector(poleDir, cosPhi)
          .addScaledVector(rightAxis, sinPhi * cosT)
          .addScaledVector(upAxis, sinPhi * sinT)
          .normalize();

        const pos = new THREE.Vector3().copy(eyeCenter).addScaledVector(dir, r);
        const idx = ir * (segs + 1) + is;
        positions[idx * 3] = pos.x;
        positions[idx * 3 + 1] = pos.y;
        positions[idx * 3 + 2] = pos.z;

        const uvRad = Math.min(0.498, (phi / irisAngularRadius) * 0.48);
        uvs[idx * 2] = 0.5 + uvRad * cosT;
        uvs[idx * 2 + 1] = 0.5 + uvRad * sinT;

        skinIndices.set([eyeBoneIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(rings * segs * 6);
    let ptr = 0;
    for (let ir = 0; ir < rings; ir++) {
      for (let is = 0; is < segs; is++) {
        const a = ir * (segs + 1) + is;
        const b = (ir + 1) * (segs + 1) + is;
        const c = (ir + 1) * (segs + 1) + (is + 1);
        const d = ir * (segs + 1) + (is + 1);
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
    parts.push(g);
  }

  return mergeSkinnedGeometries(parts);
}

function buildFelineClaws(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const hSegs = lod === 0 ? 10 : 6;
  const rSegs = lod === 0 ? 12 : 8;

  for (const side of ['L', 'R'] as const) {
    for (const isForelimb of [true, false]) {
      const toeSpecs = getLightFuryToeSpecs(side, isForelimb);

      for (const ts of toeSpecs) {
        const boneIdx = rig.boneIndexMap.get(ts.pawBone)!;
        const fLen = Math.hypot(ts.dirX, ts.dirZ);
        const nx = ts.dirX / fLen;
        const nz = ts.dirZ / fLen;
        const lx = nz;
        const lz = -nx;

        const embedFrac = 0.74;
        const startX = ts.rootX + nx * ts.toeLength * embedFrac;
        const startZ = ts.rootZ + nz * ts.toeLength * embedFrac;
        const startY =
          ts.rootY + Math.sin(embedFrac * Math.PI) * 0.009 - 0.008 * embedFrac * embedFrac + 0.002;
        const totalClawSpan = ts.toeLength * (1.0 - embedFrac) + ts.clawLength;
        const baseClawRad = ts.tipRadius * 0.72;

        const vCount = (hSegs + 1) * (rSegs + 1);
        const positions = new Float32Array(vCount * 3);
        const uvs = new Float32Array(vCount * 2);
        const anatomy = new Float32Array(vCount * 4);
        const skinIndices = new Uint16Array(vCount * 4);
        const skinWeights = new Float32Array(vCount * 4);

        for (let i = 0; i <= hSegs; i++) {
          const t = i / hSegs;
          // Smooth sculpted feline claw tip (prominent yet rounder than Toothless's sharper talons!)
          const rad = baseClawRad * Math.sqrt(Math.max(0.06, 1.0 - Math.pow(t, 1.72)));
          const px = startX + nx * totalClawSpan * t;
          const pz = startZ + nz * totalClawSpan * t;
          const py = Math.max(0.004, startY - 0.028 * Math.pow(t, 1.82) + 0.004 * Math.sin(t * Math.PI));

          for (let j = 0; j <= rSegs; j++) {
            const v = j / rSegs;
            const th = v * Math.PI * 2;
            const sinT = Math.sin(th);
            const cosT = Math.cos(th);
            const idx = i * (rSegs + 1) + j;
            positions[idx * 3] = px + lx * sinT * rad * 0.72;
            positions[idx * 3 + 1] = Math.max(0.002, py + cosT * rad * 1.04);
            positions[idx * 3 + 2] = pz + lz * sinT * rad * 0.72;
            uvs[idx * 2] = t;
            uvs[idx * 2 + 1] = v;
            skinIndices.set([boneIdx, 0, 0, 0], idx * 4);
            skinWeights.set([1, 0, 0, 0], idx * 4);
          }
        }

        const indices = new Uint16Array(hSegs * rSegs * 6);
        let ptr = 0;
        for (let i = 0; i < hSegs; i++) {
          for (let j = 0; j < rSegs; j++) {
            const a = i * (rSegs + 1) + j;
            const b = (i + 1) * (rSegs + 1) + j;
            const c = (i + 1) * (rSegs + 1) + (j + 1);
            const dIdx = i * (rSegs + 1) + (j + 1);
            indices[ptr++] = a;
            indices[ptr++] = b;
            indices[ptr++] = c;
            indices[ptr++] = a;
            indices[ptr++] = c;
            indices[ptr++] = dIdx;
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
        parts.push(g);
      }
    }
  }

  return mergeSkinnedGeometries(parts);
}
