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
import { LODLevel } from './BodyAndHeadBuilder';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from './GeometryUtils';

export interface ModularHeadAndClawGeometries {
  jawSkinGeometry: THREE.BufferGeometry;
  oralGumsGeometry: THREE.BufferGeometry;
  teethGeometry: THREE.BufferGeometry;
  tongueGeometry: THREE.BufferGeometry;
  irisGeometry: THREE.BufferGeometry;
  corneaGeometry: THREE.BufferGeometry;
  clawsGeometry: THREE.BufferGeometry;
}

export function buildOralEyesAndClawsGeometries(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): ModularHeadAndClawGeometries {
  return {
    jawSkinGeometry: mergeSkinnedGeometries([
      buildHingedLowerMandible(rig, lod),
      ...buildOuterRictusCheekFolds(rig, lod),
    ]),
    oralGumsGeometry: buildSculptedOralCavityAndGums(rig, lod),
    teethGeometry: buildRetractableTeeth(rig, lod),
    tongueGeometry: buildArticulatedTongue(rig, lod),
    irisGeometry: buildDualEyes(rig, lod, false),
    corneaGeometry: buildDualEyes(rig, lod, true),
    clawsGeometry: buildDragonClaws(rig, lod),
  };
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/**
 * Sculpted U-shaped lower Night Fury mandible locked to evalHeadHalfWidth(z) & evalMouthSeamY(z)
 * so at jawOpen=0 the upper lip overlaps the lower lip by ~8mm with ZERO daylight gap!
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
    const s = i / axialSegs; // 0 = throat/hinge root (z=1.55), 1 = rounded lower chin tip (z=2.226)
    const z = THREE.MathUtils.lerp(1.55, 2.226, s);

    // Tuck lower lip 3.5mm inside upper lip's lateral width so upper lip drapes cleanly over it
    const rawHalfW = evalHeadHalfWidth(z);
    const chinTipRound = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (s - 0.88) / 0.12), 2)));
    const halfWidth = Math.max(0.002, (rawHalfW - 0.0035 * smoothstep(1.66, 1.76, z)) * chinTipRound);

    // Rise above evalMouthSeamY(z) by +3.5mm at outer rim (nested behind upper lip's -4.5mm overhang = 8mm seal!)
    // and rise higher into posterior skull at z < 1.68 so rear hinge never shows a gap!
    const seamY = evalMouthSeamY(z);
    const rearRamusLift = 0.028 * (1.0 - smoothstep(1.55, 1.70, z));
    const jawRimY = seamY + 0.0035 + rearRamusLift;
    const jawDepth = (0.088 - 0.034 * s) * chinTipRound;

    for (let j = 0; j <= radialSegs; j++) {
      const vFrac = j / radialSegs;
      const theta = vFrac * Math.PI * 2;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      // Muscular masseter jaw-angle pad & graceful S-curved gular throat contour (ref 03)
      const gularCurve = Math.exp(-Math.pow((s - 0.28) / 0.22, 2)) * 0.011;
      const masseterBulge = Math.exp(-Math.pow((s - 0.30) / 0.16, 2)) * Math.abs(sinT) * 0.010;
      const x = (halfWidth + masseterBulge) * sinT;
      // Concave oral trough on top (cosT > 0) so tongue & lower gums sit nestled inside mandible!
      const oralTrough = -0.022 * cosT * (1.0 - Math.pow(sinT, 2)) * smoothstep(1.68, 1.78, z);
      const y =
        cosT >= 0
          ? jawRimY + oralTrough
          : jawRimY + (jawDepth + gularCurve) * cosT;

      let scarW = 0.0;
      let finalY = y;
      if (z > 1.98 && z < 2.18 && cosT < -0.55) {
        const scarLine = Math.abs(x - 0.024 - (z - 2.08) * 0.25);
        if (scarLine < 0.013) {
          scarW = 1.0 - scarLine / 0.013;
          finalY += 0.0022 * scarW;
        }
      }

      const vIdx = i * (radialSegs + 1) + j;
      positions[vIdx * 3] = x;
      positions[vIdx * 3 + 1] = finalY;
      positions[vIdx * 3 + 2] = z;

      uvs[vIdx * 2] = s * 0.95;
      uvs[vIdx * 2 + 1] = vFrac * 0.85;

      const lipEdge = Math.exp(-Math.pow(cosT / 0.35, 2));
      anatomy[vIdx * 4] = Math.min(1.0, 0.38 + 0.56 * Math.max(lipEdge, s > 0.70 ? (s - 0.70) * 3.0 : 0));
      anatomy[vIdx * 4 + 1] = scarW;
      anatomy[vIdx * 4 + 2] = 0.0;
      anatomy[vIdx * 4 + 3] = 0.0;

      // Smooth throat-to-jaw skinning matched to computeCraniumOrNeckSkin
      const jawW = smoothstep(1.62, 1.71, z);
      const rem = 1.0 - jawW;
      const headVsNeck = smoothstep(1.42, 1.64, z);
      const n4Share = smoothstep(1.36, 1.56, z);
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

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geom.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  geom.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geom.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  geom.setIndex(new THREE.BufferAttribute(indices, 1));
  geom.computeVertexNormals();
  return geom;
}

/**
 * Bilateral elastic Oral Commissure / Rictus Cheek Folds (refs 03 & 10).
 * Connects the posterior upper jaw and lower jaw across z = 1.65..1.90 so opening the mouth
 * stretches a realistic muscular corner-of-mouth fold instead of exposing an awkward hinge gap!
 */
function buildOuterRictusCheekFolds(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const headIdx = rig.boneIndexMap.get('head')!;
  const jawIdx = rig.boneIndexMap.get('jaw')!;
  const uSegs = lod === 0 ? 14 : 8;
  const vSegs = lod === 0 ? 12 : 8;
  const out: THREE.BufferGeometry[] = [];

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    const vCount = (uSegs + 1) * (vSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs; // 0 = lower mandible attachment, 1 = upper maxilla attachment
      for (let iu = 0; iu <= uSegs; iu++) {
        const u = iu / uSegs; // 0 = rear temporomandibular hinge (z=1.65), 1 = oral corner rictus (z=1.90)
        const z = THREE.MathUtils.lerp(1.65, 1.90, u);
        const seamY = evalMouthSeamY(z);
        const baseHalfW = evalHeadHalfWidth(z) - 0.008;

        // Curved inward rictus crease at the corner of the mouth (u -> 1)
        const rictusBow = -0.016 * Math.sin(v * Math.PI) * Math.pow(u, 1.3);
        const vertSpan = 0.026 * (1.0 - 0.55 * u);
        const y = seamY + (v - 0.5) * 2.0 * vertSpan;
        const x = s * (baseHalfW - 0.006 * u + rictusBow * 0.35);

        const idx = iv * (uSegs + 1) + iu;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z + rictusBow;

        uvs[idx * 2] = u * 0.3;
        uvs[idx * 2 + 1] = v * 0.3;
        anatomy[idx * 4] = 0.35;

        const wHead = smoothstep(0.0, 1.0, v);
        const wJaw = 1.0 - wHead;
        skinIndices.set([headIdx, jawIdx, 0, 0], idx * 4);
        skinWeights.set([wHead, wJaw, 0, 0], idx * 4);
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
        if (side === 'L') {
          indices[ptr++] = a;
          indices[ptr++] = d;
          indices[ptr++] = c;
          indices[ptr++] = a;
          indices[ptr++] = c;
          indices[ptr++] = b;
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
    out.push(g);
  }

  return out;
}

function sampleDentalArchPoint(angle: number, isUpper: boolean): { x: number; z: number } {
  const z = 1.76 + Math.cos(angle) * (isUpper ? 0.422 : 0.406);
  const maxAllowedRx = Math.max(0.04, evalHeadHalfWidth(z) - (isUpper ? 0.022 : 0.030));
  return { x: Math.sin(angle) * maxAllowedRx, z };
}

/**
 * Richly sculpted anatomical Inner Mouth Cavity:
 * 1. Domed Upper Hard & Soft Palate with 9 transverse palatal rugae ridges & median raphe groove
 * 2. Concave Lower Sublingual Floor & Frenulum
 * 3. Scalloped Gingival Alveolar Tooth-Root Mounds (30 sockets!)
 * 4. Enclosed Pharyngeal Throat Pouch at rear of jaws (glows cyan-blue under Alpha Plasma!)
 */
function buildSculptedOralCavityAndGums(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const headIdx = rig.boneIndexMap.get('head')!;
  const jawIdx = rig.boneIndexMap.get('jaw')!;
  const parts: THREE.BufferGeometry[] = [];

  // A. Sculpted Domed Upper Hard Palate (9 transverse palatal rugae ridges!) & Lower Sublingual Floor
  const zSegs = lod === 0 ? 32 : 18;
  const xSegs = lod === 0 ? 28 : 16;

  for (const isUpper of [true, false]) {
    const boneIdx = isUpper ? headIdx : jawIdx;
    const vCount = (zSegs + 1) * (xSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    for (let iz = 0; iz <= zSegs; iz++) {
      const uz = iz / zSegs; // 0 = rear pharynx (z=1.68), 1 = anterior incisor gum (z=2.19)
      const z = THREE.MathUtils.lerp(1.68, 2.19, uz);
      const seamY = evalMouthSeamY(z);
      const archHalfW = Math.max(0.02, (evalHeadHalfWidth(z) - 0.016) * Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (uz - 0.86) / 0.14), 2))));

      for (let ix = 0; ix <= xSegs; ix++) {
        const ux = (ix / xSegs) * 2.0 - 1.0; // [-1, +1] across mouth width
        const absX = Math.abs(ux);
        const dome = Math.sqrt(Math.max(0, 1.0 - ux * ux));
        const x = ux * archHalfW;

        let y: number;
        if (isUpper) {
          // Vaulted roof with 9 chevron-shaped transverse palatal rugae ridges + median raphe!
          const chevronPhase = uz * Math.PI * 18.0 - absX * 2.6;
          const rugaeRidge = Math.pow(0.5 + 0.5 * Math.sin(chevronPhase), 1.8) * 0.0052 * dome * smoothstep(0.08, 0.25, uz);
          const medianRaphe = -0.0032 * Math.exp(-Math.pow(ux / 0.10, 2)) * dome;
          // Scalloped alveolar gum collar around outer edge (absX > 0.78)
          const gumScallop = 0.0035 * Math.abs(Math.sin(uz * Math.PI * 16.0)) * smoothstep(0.75, 0.98, absX);
          y = seamY + 0.004 + 0.032 * dome - rugaeRidge + medianRaphe - gumScallop;
        } else {
          // Concave sublingual mandibular basin with sublingual plica folds & alveolar scallops
          const plicaFold = 0.0038 * Math.exp(-Math.pow((absX - 0.34) / 0.14, 2)) * dome;
          const frenulum = 0.0035 * Math.exp(-Math.pow(ux / 0.07, 2)) * smoothstep(0.55, 0.20, uz);
          const gumScallop = 0.0030 * Math.abs(Math.sin(uz * Math.PI * 14.0)) * smoothstep(0.75, 0.98, absX);
          y = seamY - 0.002 - 0.020 * dome + plicaFold + frenulum + gumScallop;
        }

        const idx = iz * (xSegs + 1) + ix;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        uvs[idx * 2] = uz * 2.4;
        uvs[idx * 2 + 1] = (ux * 0.5 + 0.5) * 2.0;

        // Rear throat glows cyan-blue when Alpha Plasma Glow is active!
        anatomy[idx * 4] = 0.45;
        anatomy[idx * 4 + 2] = (1.0 - smoothstep(0.0, 0.38, uz)) * 0.85;

        skinIndices.set([boneIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(zSegs * xSegs * 6);
    let ptr = 0;
    for (let iz = 0; iz < zSegs; iz++) {
      for (let ix = 0; ix < xSegs; ix++) {
        const a = iz * (xSegs + 1) + ix;
        const b = (iz + 1) * (xSegs + 1) + ix;
        const c = (iz + 1) * (xSegs + 1) + (ix + 1);
        const d = iz * (xSegs + 1) + (ix + 1);
        if (isUpper) {
          // Normals pointing DOWNWARD into the mouth cavity!
          indices[ptr++] = a;
          indices[ptr++] = c;
          indices[ptr++] = b;
          indices[ptr++] = a;
          indices[ptr++] = d;
          indices[ptr++] = c;
        } else {
          // Normals pointing UPWARD into the mouth cavity!
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

  // B. Scalloped Gingival Tooth-Socket Ridges (Upper & Lower Alveolar Arches)
  const uSegs = lod === 0 ? 42 : 22;
  const rSegs = lod === 0 ? 12 : 8;

  for (const isUpper of [true, false]) {
    const boneIdx = isUpper ? headIdx : jawIdx;
    const toothCount = isUpper ? 16 : 14;
    const baseTubeR = 0.0155;

    const vCount = (uSegs + 1) * (rSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const anatomy = new Float32Array(vCount * 4);
    const skinIndices = new Uint16Array(vCount * 4);
    const skinWeights = new Float32Array(vCount * 4);

    const archCurvePts: THREE.Vector3[] = [];
    for (let k = 0; k <= 18; k++) {
      const a = THREE.MathUtils.lerp(-Math.PI * 0.46, Math.PI * 0.46, k / 18);
      const pt = sampleDentalArchPoint(a, isUpper);
      const y = evalMouthSeamY(pt.z) + (isUpper ? 0.012 : -0.010);
      archCurvePts.push(new THREE.Vector3(pt.x, y, pt.z));
    }
    const archCurve = new THREE.CatmullRomCurve3(archCurvePts);

    for (let i = 0; i <= uSegs; i++) {
      const u = i / uSegs;
      const center = archCurve.getPointAt(u);
      const tangent = archCurve.getTangentAt(u).normalize();
      const upVec = new THREE.Vector3(0, 1, 0);
      const outVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

      // Swell around each retractable tooth socket for bumpy anatomical gums!
      const socketSwell = 1.0 + 0.24 * Math.pow(0.5 + 0.5 * Math.cos(u * Math.PI * toothCount * 2.0), 2.0);
      const tubeR = baseTubeR * socketSwell;

      for (let j = 0; j <= rSegs; j++) {
        const v = j / rSegs;
        const th = v * Math.PI * 2;
        const festoon = 1.0 + 0.12 * Math.sin(th * 3.0);
        const pos = new THREE.Vector3()
          .copy(center)
          .addScaledVector(outVec, tubeR * festoon * Math.sin(th))
          .addScaledVector(upVec, tubeR * 0.82 * Math.cos(th));

        const idx = i * (rSegs + 1) + j;
        positions[idx * 3] = pos.x;
        positions[idx * 3 + 1] = pos.y;
        positions[idx * 3 + 2] = pos.z;
        uvs[idx * 2] = u * 3.0;
        uvs[idx * 2 + 1] = v * 1.2;
        anatomy[idx * 4] = 0.4;
        skinIndices.set([boneIdx, 0, 0, 0], idx * 4);
        skinWeights.set([1, 0, 0, 0], idx * 4);
      }
    }

    const indices = new Uint16Array(uSegs * rSegs * 6);
    let ptr = 0;
    for (let i = 0; i < uSegs; i++) {
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

  // C. Enclosed Pharyngeal Throat Curtain & Inner Mucosal Cheek Walls (seals rear of open mouth!)
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
      const v = iv / pVSegs; // 0 = lower pharyngeal floor (jaw), 1 = soft palate arch (head)
      for (let iu = 0; iu <= pUSegs; iu++) {
        const u = iu / pUSegs;
        const ang = THREE.MathUtils.lerp(-Math.PI * 0.62, Math.PI * 0.62, u);
        const z = 1.78 - Math.cos(ang) * 0.11;
        const rx = evalHeadHalfWidth(Math.max(1.66, z)) - 0.022;
        const x = Math.sin(ang) * rx;
        const seamY = evalMouthSeamY(z);
        const y = THREE.MathUtils.lerp(seamY - 0.018, seamY + 0.030, v);

        const idx = iv * (pUSegs + 1) + iu;
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        uvs[idx * 2] = u * 1.5;
        uvs[idx * 2 + 1] = v * 1.5;
        // Deep throat glows intensely cyan-blue when charging Alpha Plasma!
        anatomy[idx * 4] = 0.5;
        anatomy[idx * 4 + 2] = 0.95 * Math.cos(ang * 0.65);

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
      const archPt = sampleDentalArchPoint(angle, isUpper);

      const rootX = archPt.x;
      const rootZ = archPt.z;
      const rootY = evalMouthSeamY(rootZ) + (isUpper ? 0.011 : -0.010);

      const canineBoost = 1.0 + 0.34 * Math.exp(-Math.pow((Math.abs(angle) - 0.52) / 0.25, 2));
      const toothLen = 0.023 * canineBoost * (0.78 + 0.22 * Math.cos(angle));
      const toothRad = 0.0062 * canineBoost;

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
        const curveHook = 0.0055 * s * s;

        const cx = rootX + inwardX * curveHook;
        const cy = rootY + dirY * toothLen * s;
        const cz = rootZ + inwardZ * curveHook - 0.003 * s * s;

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

/**
 * Muscular Night Fury tongue seated safely on top of the mandibular floor (z = 1.74..2.12)
 * with sculpted median sulcus & dorsal papillae texture!
 */
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
    const z = THREE.MathUtils.lerp(1.74, 2.12, s);
    const baseY = evalMouthSeamY(z) - 0.004;
    const tipCap = Math.sqrt(Math.max(0, 1.0 - Math.pow(Math.max(0, (s - 0.76) / 0.24), 2)));
    const halfW = (0.080 + 0.012 * Math.sin(s * Math.PI) - 0.022 * s) * tipCap;
    const halfH = (0.015 - 0.005 * s) * tipCap;

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const sinT = Math.sin(th);
      const cosT = Math.cos(th);

      // Median dorsal sulcus + fine lingual papillae ripples on top surface
      const groove = cosT > 0.35 ? -0.0042 * Math.exp(-Math.pow(sinT / 0.24, 2)) : 0;
      const papillae =
        cosT > 0.2 ? 0.0012 * Math.sin(s * Math.PI * 26.0) * Math.cos(sinT * Math.PI * 9.0) * tipCap : 0;
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

/**
 * Recessed, soulful, non-protruding Night Fury eyes with wide chartreuse-emerald iris coverage
 * (irisAngularRadius = 0.94 rad so zero sclera ever peeks out inside the cute almond aperture!).
 */
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

    const poleDir = (side === 'L' ? EYE_GAZE_REST_DIR_L : EYE_GAZE_REST_DIR_R).clone();
    const rawUp = new THREE.Vector3(s * -0.16, 0.985, 0.06).normalize();
    const rightAxis = new THREE.Vector3().crossVectors(rawUp, poleDir).normalize();
    const upAxis = new THREE.Vector3().crossVectors(poleDir, rightAxis).normalize();

    const baseRadius = isCornea ? EYE_RADIUS + 0.0009 : EYE_RADIUS;
    const irisAngularRadius = 0.94; // Fills 100% of the cute rounded-almond opening!

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
          if (isCornea) {
            r += 0.0014 * irisFrac * irisFrac; // Subtle liquid tear film without bug-eye bulge!
          } else {
            r -= 0.0028 * irisFrac * irisFrac; // Concave stromal iris dish for deep soulful parallax
          }
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

function buildDragonClaws(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const hSegs = lod === 0 ? 10 : 6;
  const rSegs = lod === 0 ? 12 : 8;

  for (const side of ['L', 'R'] as const) {
    for (const isForelimb of [true, false]) {
      const toeSpecs = getDragonToeSpecs(side, isForelimb);

      for (const ts of toeSpecs) {
        const boneIdx = rig.boneIndexMap.get(ts.pawBone)!;
        const fLen = Math.hypot(ts.dirX, ts.dirZ);
        const nx = ts.dirX / fLen;
        const nz = ts.dirZ / fLen;
        const lx = nz;
        const lz = -nx;

        // Seat bold curved talon root ~2.8 cm DEEP inside the chunky toe tip (t_toe = 0.74) so claw emerges seamlessly!
        const embedFrac = 0.74;
        const startX = ts.rootX + nx * ts.toeLength * embedFrac;
        const startZ = ts.rootZ + nz * ts.toeLength * embedFrac;
        const startY =
          ts.rootY + Math.sin(embedFrac * Math.PI) * 0.011 - 0.009 * embedFrac * embedFrac + 0.002;
        const totalClawSpan = ts.toeLength * (1.0 - embedFrac) + ts.clawLength;
        const baseClawRad = ts.tipRadius * 0.76;

        const vCount = (hSegs + 1) * (rSegs + 1);
        const positions = new Float32Array(vCount * 3);
        const uvs = new Float32Array(vCount * 2);
        const anatomy = new Float32Array(vCount * 4);
        const skinIndices = new Uint16Array(vCount * 4);
        const skinWeights = new Float32Array(vCount * 4);

        for (let i = 0; i <= hSegs; i++) {
          const t = i / hSegs;
          const rad = baseClawRad * (1.0 - 0.85 * Math.pow(t, 1.52));
          const px = startX + nx * totalClawSpan * t;
          const pz = startZ + nz * totalClawSpan * t;
          // Prominent hooked Night Fury dragon talon curving cleanly down to the rock!
          const py = Math.max(0.004, startY - 0.036 * Math.pow(t, 1.80) + 0.006 * Math.sin(t * Math.PI));

          for (let j = 0; j <= rSegs; j++) {
            const v = j / rSegs;
            const th = v * Math.PI * 2;
            const sinT = Math.sin(th);
            const cosT = Math.cos(th);
            const idx = i * (rSegs + 1) + j;
            // Laterally compressed predator claw cross-section
            positions[idx * 3] = px + lx * sinT * rad * 0.74;
            positions[idx * 3 + 1] = Math.max(0.002, py + cosT * rad * 1.05);
            positions[idx * 3 + 2] = pz + lz * sinT * rad * 0.74;
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
