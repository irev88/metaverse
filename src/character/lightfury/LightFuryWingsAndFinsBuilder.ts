import * as THREE from 'three';
import { ToothlessRigSkeleton } from '../ToothlessSkeleton';
import { LODLevel } from '../geometry/BodyAndHeadBuilder';
import { FlightSurfaceGeometries } from '../geometry/WingsAndFinsBuilder';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from '../geometry/GeometryUtils';
import { evalLightFuryDorsalSurface } from './LightFuryBodyAndHeadBuilder';
import { LF_HEART_FIN_RIB_SPECS, LF_PELVIC_FIN_RIB_SPECS } from './LightFurySkeleton';

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

export function buildLightFuryWingsAndFinsGeometries(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): Omit<FlightSurfaceGeometries, 'alulaClawsGeometry'> {
  const sparParts: THREE.BufferGeometry[] = [];
  const membraneParts: THREE.BufferGeometry[] = [];

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    sparParts.push(...buildSingleWingSpars(rig, side, s, lod));
    membraneParts.push(...buildSingleWingMembranes(rig, side, s, lod));
    sparParts.push(...buildPelvicFinSpars(rig, side, lod));
    membraneParts.push(buildPelvicFinMembrane(rig, side, lod));
    membraneParts.push(buildUpperSecondaryTailFlukelet(rig, side, s, lod));
    // Symmetrical biological rounded Heart-Shaped Caudal Tail Flukes on BOTH Left & Right!
    sparParts.push(...buildHeartTailFinSpars(rig, side, s, lod));
    membraneParts.push(buildHeartTailFinMembrane(rig, side, s, lod));
  }

  return {
    wingSparsSkinGeometry: mergeSkinnedGeometries(sparParts),
    wingMembraneGeometry: mergeSkinnedGeometries(membraneParts),
    dorsalSpinesGeometry: buildContinuousDorsalSailRidge(rig, lod),
  };
}

/**
 * Builds a sleek, dorsoventrally flattened flute/spar tube so the Light Fury's wings & fins
 * have smooth manta/swan-like contours WITHOUT protruding bat-bone ridges!
 */
function buildFlattenedSmoothSparTube(
  rig: ToothlessRigSkeleton,
  pts: THREE.Vector3[],
  boneNames: string[],
  radii: number[],
  lenSegs: number,
  radSegs: number,
  verticalAspect = 0.42,
  iceBlueTint = 0.12
): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(pts);
  const chainIndices = boneNames.map((n) => rig.boneIndexMap.get(n)!);
  const chainPositions = boneNames.map((n) => rig.bindWorldPositions.get(n)!);

  const vCount = (lenSegs + 1) * (radSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  const worldUp = new THREE.Vector3(0, 1, 0);

  for (let i = 0; i <= lenSegs; i++) {
    const u = i / lenSegs;
    const center = curve.getPointAt(u);
    const tangent = curve.getTangentAt(u).normalize();

    let upVec = worldUp.clone().addScaledVector(tangent, -worldUp.dot(tangent));
    if (upVec.lengthSq() < 1e-4) upVec.set(0, 0, 1);
    upVec.normalize();
    const sideVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

    const rPos = u * (radii.length - 1);
    const rIdx = Math.min(radii.length - 2, Math.floor(rPos));
    const rFrac = rPos - rIdx;
    let rad = THREE.MathUtils.lerp(radii[rIdx], radii[rIdx + 1], rFrac);
    if (u > 0.86) {
      rad *= Math.sqrt(Math.max(0, 1.0 - Math.pow((u - 0.86) / 0.14, 2)));
    }

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(sideVec, rad * Math.sin(th))
        .addScaledVector(upVec, rad * verticalAspect * Math.cos(th));

      const idx = i * (radSegs + 1) + j;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;
      uvs[idx * 2] = u * 1.4;
      uvs[idx * 2 + 1] = v * 0.45;
      anatomy[idx * 4] = 0.08; // Ultra-smooth satin skin
      anatomy[idx * 4 + 1] = smoothstep(0.30, 0.92, u) * 0.38;
      anatomy[idx * 4 + 2] = iceBlueTint;

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

function buildSingleWingSpars(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const parts: THREE.BufferGeometry[] = [];
  const armSegs = lod === 0 ? 28 : lod === 1 ? 18 : 10;
  const armRad = lod === 0 ? 18 : lod === 1 ? 12 : 8;
  const fingerSegs = lod === 0 ? 20 : lod === 1 ? 12 : 8;
  const fingerRad = lod === 0 ? 12 : lod === 1 ? 8 : 6;

  // Low-profile lateral chest embed so ZERO bony wing-spar ridge protrudes from her smooth back!
  const armPts = [
    new THREE.Vector3(s * 0.16, 0.90, 0.68),
    rig.bindWorldPositions.get(`wingClavicle_${side}`)!,
    rig.bindWorldPositions.get(`wingShoulder_${side}`)!,
    rig.bindWorldPositions.get(`wingElbow_${side}`)!,
    rig.bindWorldPositions.get(`wingWrist_${side}`)!,
    rig.bindWorldPositions.get(`wingFinger_${side}_6_a`)!,
    rig.bindWorldPositions.get(`wingFinger_${side}_6_b`)!,
  ];
  const armBones = [
    'chest',
    `wingClavicle_${side}`,
    `wingShoulder_${side}`,
    `wingElbow_${side}`,
    `wingWrist_${side}`,
    `wingFinger_${side}_6_a`,
    `wingFinger_${side}_6_b`,
  ];
  parts.push(
    buildFlattenedSmoothSparTube(
      rig,
      armPts,
      armBones,
      [0.048, 0.052, 0.050, 0.042, 0.032, 0.020, 0.005],
      armSegs,
      armRad,
      0.58,
      0.08
    )
  );

  // Subtle, silky internal wing flutes (flattened 0.34x vertically — NO bony bat-finger rods!)
  const wristPos = rig.bindWorldPositions.get(`wingWrist_${side}`)!;
  for (let f = 1; f <= 5; f++) {
    const midPos = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_a`)!;
    const tipPos = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_b`)!;
    parts.push(
      buildFlattenedSmoothSparTube(
        rig,
        [wristPos, midPos, tipPos],
        [`wingWrist_${side}`, `wingFinger_${side}_${f}_a`, `wingFinger_${side}_${f}_b`],
        [0.013, 0.0085, 0.0025],
        fingerSegs,
        fingerRad,
        0.34,
        0.10
      )
    );
  }

  return parts;
}

function buildMembranePatch(
  uSegs: number,
  vSegs: number,
  evalFn: (
    u: number,
    v: number
  ) => {
    pos: THREE.Vector3;
    skin: { indices: [number, number, number, number]; weights: [number, number, number, number] };
    thinness: number;
    pinkStripe?: number;
    iceBlue?: number;
  }
): THREE.BufferGeometry {
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
      const sample = evalFn(u, v);
      const idx = iv * (uSegs + 1) + iu;

      positions[idx * 3] = sample.pos.x;
      positions[idx * 3 + 1] = sample.pos.y;
      positions[idx * 3 + 2] = sample.pos.z;

      uvs[idx * 2] = u * 1.25;
      uvs[idx * 2 + 1] = v * 1.25;

      anatomy[idx * 4] = 0.06;
      anatomy[idx * 4 + 1] = sample.pinkStripe ?? 0.0;
      anatomy[idx * 4 + 2] = sample.iceBlue ?? 0.14;
      anatomy[idx * 4 + 3] = sample.thinness;

      skinIndices.set(sample.skin.indices, idx * 4);
      skinWeights.set(sample.skin.weights, idx * 4);
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
  g.setAttribute('uv1', new THREE.BufferAttribute(uvs, 2));
  g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  g.setIndex(new THREE.BufferAttribute(indices, 1));
  g.computeVertexNormals();
  return g;
}

function buildSingleWingMembranes(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const parts: THREE.BufferGeometry[] = [];
  const uSegs = lod === 0 ? 16 : lod === 1 ? 9 : 5;
  const vSegs = lod === 0 ? 16 : lod === 1 ? 9 : 5;

  const wristIdx = rig.boneIndexMap.get(`wingWrist_${side}`)!;
  const elbowIdx = rig.boneIndexMap.get(`wingElbow_${side}`)!;
  const shoulderIdx = rig.boneIndexMap.get(`wingShoulder_${side}`)!;
  const chestIdx = rig.boneIndexMap.get('chest')!;
  const spine1Idx = rig.boneIndexMap.get('spine_1')!;
  const pelvisIdx = rig.boneIndexMap.get('pelvis')!;

  const wristPos = rig.bindWorldPositions.get(`wingWrist_${side}`)!;
  const elbowPos = rig.bindWorldPositions.get(`wingElbow_${side}`)!;
  const shoulderPos = rig.bindWorldPositions.get(`wingShoulder_${side}`)!;

  // A. Smooth Rounded Leading Propatagium Fold (no bat hook!)
  parts.push(
    buildMembranePatch(
      uSegs,
      Math.max(4, Math.floor(vSegs * 0.5)),
      (u, v) => {
        const leadPt = new THREE.Vector3().lerpVectors(
          new THREE.Vector3(s * 0.25, 0.96, 0.74),
          wristPos,
          u
        );
        const armPt =
          u < 0.45
            ? new THREE.Vector3().lerpVectors(shoulderPos, elbowPos, u / 0.45)
            : new THREE.Vector3().lerpVectors(elbowPos, wristPos, (u - 0.45) / 0.55);
        const pos = new THREE.Vector3().lerpVectors(armPt, leadPt, v);
        const wSh = Math.max(0, 1 - u * 2.1);
        const wWr = Math.max(0, (u - 0.45) * 1.82);
        const wEl = Math.max(0, 1 - wSh - wWr);
        const skin = normalizeSkinWeights([shoulderIdx, elbowIdx, wristIdx, 0], [wSh, wEl, wWr, 0]);
        return { pos, skin, thinness: 0.38 + 0.34 * v, pinkStripe: 0.18 * v, iceBlue: 0.10 };
      }
    )
  );

  // B. Inner Plagiopatagium Web (Smooth Rounded Swan/Spitfire Trailing Arc!)
  const f1Mid = rig.bindWorldPositions.get(`wingFinger_${side}_1_a`)!;
  const f1Tip = rig.bindWorldPositions.get(`wingFinger_${side}_1_b`)!;
  const f1aIdx = rig.boneIndexMap.get(`wingFinger_${side}_1_a`)!;
  const f1bIdx = rig.boneIndexMap.get(`wingFinger_${side}_1_b`)!;

  parts.push(
    buildMembranePatch(uSegs, vSegs, (u, v) => {
      const bodyFront = new THREE.Vector3(s * 0.21, 0.90, 0.62);
      const bodyBack = new THREE.Vector3(s * 0.18, 0.75, -0.44);
      const bodyEdge = new THREE.Vector3().lerpVectors(bodyFront, bodyBack, v);

      const f1Edge =
        v < 0.5
          ? new THREE.Vector3().lerpVectors(wristPos, f1Mid, v * 2)
          : new THREE.Vector3().lerpVectors(f1Mid, f1Tip, (v - 0.5) * 2);

      const topArmEdge =
        u < 0.45
          ? new THREE.Vector3().lerpVectors(shoulderPos, elbowPos, u / 0.45)
          : new THREE.Vector3().lerpVectors(elbowPos, wristPos, (u - 0.45) / 0.55);

      const spanChord = new THREE.Vector3().lerpVectors(bodyEdge, f1Edge, u);
      const pos = new THREE.Vector3().lerpVectors(topArmEdge, spanChord, Math.pow(v, 0.85));
      // Gentle convex/rounded Spitfire trailing curve rather than deep jagged bat scallop!
      pos.z += Math.sin(u * Math.PI) * 0.045 * Math.pow(v, 1.8);
      pos.y += Math.sin(u * Math.PI) * Math.sin(v * Math.PI) * 0.022;

      const bodyW = 1 - u;
      const outerW = u;
      const bIdx = v < 0.36 ? chestIdx : v < 0.72 ? spine1Idx : pelvisIdx;
      const oIdx1 = v < 0.25 ? elbowIdx : v < 0.55 ? wristIdx : f1aIdx;
      const oIdx2 = v < 0.55 ? f1aIdx : f1bIdx;
      const oMix = v < 0.55 ? v / 0.55 : (v - 0.55) / 0.45;

      const skin = normalizeSkinWeights(
        [bIdx, oIdx1, oIdx2, shoulderIdx],
        [bodyW * 0.88, outerW * (1 - oMix), outerW * oMix, bodyW * 0.12]
      );
      const stripe = Math.pow(0.5 + 0.5 * Math.sin(v * 14.0 + u * 4.5), 3.0) * 0.55;
      return {
        pos,
        skin,
        thinness: 0.55 + 0.40 * v,
        pinkStripe: stripe * u,
        iceBlue: (1.0 - u) * 0.35 + 0.08,
      };
    })
  );

  // C. 5 Interdigital Bays with Soft Rounded Spitfire/Dove Contour (NO sharp bat scallops!)
  for (let f = 1; f <= 5; f++) {
    const midA = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_a`)!;
    const tipA = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_b`)!;
    const midB = rig.bindWorldPositions.get(`wingFinger_${side}_${f + 1}_a`)!;
    const tipB = rig.bindWorldPositions.get(`wingFinger_${side}_${f + 1}_b`)!;

    const iA1 = rig.boneIndexMap.get(`wingFinger_${side}_${f}_a`)!;
    const iA2 = rig.boneIndexMap.get(`wingFinger_${side}_${f}_b`)!;
    const iB1 = rig.boneIndexMap.get(`wingFinger_${side}_${f + 1}_a`)!;
    const iB2 = rig.boneIndexMap.get(`wingFinger_${side}_${f + 1}_b`)!;

    parts.push(
      buildMembranePatch(uSegs, vSegs, (u, v) => {
        const ptA =
          v < 0.5
            ? new THREE.Vector3().lerpVectors(wristPos, midA, v * 2)
            : new THREE.Vector3().lerpVectors(midA, tipA, (v - 0.5) * 2);
        const ptB =
          v < 0.5
            ? new THREE.Vector3().lerpVectors(wristPos, midB, v * 2)
            : new THREE.Vector3().lerpVectors(midB, tipB, (v - 0.5) * 2);

        const pos = new THREE.Vector3().lerpVectors(ptA, ptB, u);
        // Very soft, rounded trailing contour (outermost bay f=5 bulges slightly outward for a rounded wingtip!)
        const scallopDepth = f === 5 ? -0.028 : 0.042;
        const toWrist = new THREE.Vector3().subVectors(wristPos, pos).normalize();
        pos.addScaledVector(toWrist, scallopDepth * Math.sin(u * Math.PI) * Math.pow(v, 2.2));
        pos.y += Math.sin(u * Math.PI) * Math.sin(v * Math.PI) * 0.018;

        let skin: { indices: [number, number, number, number]; weights: [number, number, number, number] };
        if (v < 0.5) {
          const t = v * 2;
          skin = normalizeSkinWeights(
            [wristIdx, iA1, iB1, 0],
            [1 - t, t * (1 - u), t * u, 0]
          );
        } else {
          const t = (v - 0.5) * 2;
          skin = normalizeSkinWeights(
            [iA1, iA2, iB1, iB2],
            [(1 - u) * (1 - t), (1 - u) * t, u * (1 - t), u * t]
          );
        }

        // Delicate curved pearlescent shimmer bands (ref 16!)
        const bandWave = Math.sin(v * 18.0 - f * 0.65 + Math.sin(u * Math.PI) * 1.4);
        const pinkStripe = smoothstep(0.28, 0.94, bandWave) * smoothstep(0.14, 0.58, v) * 0.88;

        return {
          pos,
          skin,
          thinness: 0.62 + 0.38 * v,
          pinkStripe,
          iceBlue: (1.0 - v) * 0.24 + 0.06,
        };
      })
    );
  }

  return parts;
}

function buildPelvicFinSpars(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  lod: LODLevel
): THREE.BufferGeometry[] {
  const s = side === 'L' ? 1 : -1;
  const parts: THREE.BufferGeometry[] = [];
  const segs = lod === 0 ? 10 : 6;
  const rad = lod === 0 ? 8 : 6;

  LF_PELVIC_FIN_RIB_SPECS.forEach((spec, idx) => {
    const finBone = `pelvicFin_${side}_${idx + 1}`;
    const rootPt = new THREE.Vector3(s * spec.rootX, spec.rootY, spec.rootZ);
    const tipPt = new THREE.Vector3(s * spec.tipX, spec.tipY, spec.tipZ);
    parts.push(
      buildFlattenedSmoothSparTube(rig, [rootPt, tipPt], [finBone], [0.009, 0.0022], segs, rad, 0.35, 0.20)
    );
  });
  return parts;
}

function buildPelvicFinMembrane(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  lod: LODLevel
): THREE.BufferGeometry {
  const s = side === 'L' ? 1 : -1;
  const segs = lod === 0 ? 16 : 9;
  const iF1 = rig.boneIndexMap.get(`pelvicFin_${side}_1`)!;
  const iF2 = rig.boneIndexMap.get(`pelvicFin_${side}_2`)!;
  const iF3 = rig.boneIndexMap.get(`pelvicFin_${side}_3`)!;

  // Smooth rounded petal-fin contour along the pelvic tail base (zero spiky corners!)
  const rStart = new THREE.Vector3(s * 0.16, 0.72, -0.70);
  const rEnd = new THREE.Vector3(s * 0.095, 0.52, -1.46);

  return buildMembranePatch(segs, segs, (u, v) => {
    const rootPt = new THREE.Vector3().lerpVectors(rStart, rEnd, u);
    const lobeSpan = 0.29 * Math.sin(Math.pow(u, 0.74) * Math.PI);
    const outerPt = rootPt.clone().add(new THREE.Vector3(s * lobeSpan, -0.025 * lobeSpan, -0.08 * Math.sin(u * Math.PI)));
    const pos = new THREE.Vector3().lerpVectors(rootPt, outerPt, v);

    const w1 = Math.max(0, 1 - u * 2.0);
    const w3 = Math.max(0, (u - 0.5) * 2.0);
    const w2 = Math.max(0, 1 - w1 - w3);
    const skin = normalizeSkinWeights([iF1, iF2, iF3, 0], [w1, w2, w3, 0]);
    return { pos, skin, thinness: 0.52 + 0.45 * v, pinkStripe: v * 0.38, iceBlue: 0.26 };
  });
}

/**
 * Canonical Light Fury detail: two dainty, smooth rounded secondary tail flukelets just ahead of the main heart flukes (ref 14)!
 */
function buildUpperSecondaryTailFlukelet(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry {
  const segs = lod === 0 ? 12 : 6;
  const tail7Idx = rig.boneIndexMap.get('tail_7')!;
  const tail8Idx = rig.boneIndexMap.get('tail_8')!;

  const rFront = new THREE.Vector3(s * 0.020, 0.120, -2.92);
  const rBack = new THREE.Vector3(s * 0.018, 0.116, -3.22);

  return buildMembranePatch(segs, segs, (u, v) => {
    const spineEdge = new THREE.Vector3().lerpVectors(rFront, rBack, u);
    const roundSpan = 0.115 * Math.sin(Math.pow(u, 0.75) * Math.PI);
    const outerEdge = spineEdge.clone().add(new THREE.Vector3(s * roundSpan, 0.008 * Math.sin(u * Math.PI), -0.025 * u));
    const pos = new THREE.Vector3().lerpVectors(spineEdge, outerEdge, v);
    const skin = normalizeSkinWeights([tail7Idx, tail8Idx, 0, 0], [1 - u, u, 0, 0]);
    return { pos, skin, thinness: 0.55 + 0.40 * v, pinkStripe: v * 0.35, iceBlue: 0.28 };
  });
}

/**
 * Subtle flattened internal flutes inside the Heart-Shaped Caudal Tail Flukes (matching refs 14 & 15!).
 */
function buildHeartTailFinSpars(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const parts: THREE.BufferGeometry[] = [];
  const segs = lod === 0 ? 10 : 6;
  const rad = lod === 0 ? 8 : 6;

  LF_HEART_FIN_RIB_SPECS.forEach((spec, idx) => {
    const finBone = `tailFin_${side}_${idx + 1}`;
    const rootPt = new THREE.Vector3(s * spec.rootX, spec.rootY, spec.rootZ);
    // Keep internal rib tips slightly inside the rounded outer heart-paddle margin so zero spikes poke out!
    const tipPt = new THREE.Vector3().lerpVectors(
      rootPt,
      new THREE.Vector3(s * spec.tipX, spec.tipY, spec.tipZ),
      0.92
    );
    parts.push(
      buildFlattenedSmoothSparTube(rig, [rootPt, tipPt], [finBone], [0.0075, 0.0018], segs, rad, 0.34, 0.24)
    );
  });
  return parts;
}

/**
 * Continuous, Plush, Rounded Heart-Shaped Caudal Tail Fluke Paddle (refs 14 & 15!):
 * Each side forms one smooth convex heart lobe with a forward-rounded upper shoulder,
 * silky rib-flute undulation, and a soft rounded central heart V-notch at the tail tip—
 * ZERO spiky bat-points and 100% rigid rotation around tailFinHinge_L/R!
 */
function buildHeartTailFinMembrane(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry {
  const uSegs = lod === 0 ? 28 : lod === 1 ? 16 : 10;
  const vSegs = lod === 0 ? 16 : lod === 1 ? 10 : 6;

  const iHinge = rig.boneIndexMap.get(`tailFinHinge_${side}`)!;
  const iRib1 = rig.boneIndexMap.get(`tailFin_${side}_1`)!;
  const iRib3 = rig.boneIndexMap.get(`tailFin_${side}_3`)!;
  const iRib5 = rig.boneIndexMap.get(`tailFin_${side}_5`)!;

  const zStart = -3.22; // Anterior emergence on tail shaft
  const zNotch = -4.08; // Central rounded heart V-notch at tail tip

  return buildMembranePatch(uSegs, vSegs, (u, v) => {
    // Spine hinge attachment runs smoothly from zStart (-3.22) -> zNotch (-4.08)
    const rootZ = THREE.MathUtils.lerp(zStart, zNotch, u);
    const rootX = s * 0.016;
    const rootY = 0.116;

    // Parametric smooth heart-lobe outer curve:
    // Bulges forward & wide in the anterior upper lobe (u ~ 0.25..0.42), then sweeps smoothly back to a
    // rounded lobe apex at z = -4.19 before curving gently inward into the central heart notch at z = -4.08!
    const heartProfile = Math.sin(Math.pow(u, 0.60) * Math.PI);
    const maxHalfSpan = 0.455 * heartProfile * (1.0 + 0.10 * Math.sin(u * Math.PI * 2.0 - 0.6));

    // Forward bulge on the leading heart cheek + rounded trailing heart lobe extending slightly past zNotch!
    const forwardCheek = 0.095 * Math.sin(Math.min(1, u / 0.52) * Math.PI) * (u < 0.52 ? 1 : 0);
    const trailingHeartPetal = -0.115 * Math.sin(Math.max(0, (u - 0.50) / 0.50) * Math.PI);
    const outerZ = rootZ + forwardCheek + trailingHeartPetal;
    const outerX = rootX + s * maxHalfSpan;
    const outerY = rootY + 0.012 * heartProfile;

    // Subtle plush flute undulation across the 5 internal ribs (like Sideshow sculpt ref 14!)
    const fluteWave = Math.sin(u * Math.PI * 5.0) * 0.0028 * Math.sin(v * Math.PI) * heartProfile;

    const pos = new THREE.Vector3(
      THREE.MathUtils.lerp(rootX, outerX, v),
      THREE.MathUtils.lerp(rootY, outerY, v) + fluteWave,
      THREE.MathUtils.lerp(rootZ, outerZ, v)
    );

    // Rigidly bound to tailFinHinge + child ribs (which all share the same rigid hinge rotation -> 0.000% compression!)
    const w1 = Math.max(0, 1 - u * 2.2);
    const w5 = Math.max(0, (u - 0.55) * 2.2);
    const w3 = Math.max(0, 1 - w1 - w5);
    const skin = normalizeSkinWeights([iHinge, iRib1, iRib3, iRib5], [0.25, w1 * 0.75, w3 * 0.75, w5 * 0.75]);

    return {
      pos,
      skin,
      thinness: 0.54 + 0.44 * v,
      pinkStripe: smoothstep(0.32, 0.94, v) * 0.52,
      iceBlue: 0.34 * (1.0 - v * 0.35),
    };
  });
}

/**
 * Builds the Light Fury's smooth, low, rounded continuous dorsal ridge along her back & tail (refs 13, 14!):
 * Starts gently BEHIND her shoulders (z = +0.62) so her swan neck & collar stay 100% porcelain-smooth!
 */
function buildContinuousDorsalSailRidge(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const uSegs = lod === 0 ? 84 : lod === 1 ? 48 : 28;
  const vSegs = lod === 0 ? 10 : 6;

  const axialBoneNames = [
    'tail_8', 'tail_7', 'tail_6', 'tail_5', 'tail_4', 'tail_3', 'tail_2', 'tail_1',
    'pelvis', 'spine_1', 'spine_2', 'chest',
  ];
  const chainIndices = axialBoneNames.map((n) => rig.boneIndexMap.get(n)!);
  const chainPositions = axialBoneNames.map((n) => rig.bindWorldPositions.get(n)!);

  const dorsalCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.14, -3.02),
    new THREE.Vector3(0, 0.23, -2.24),
    new THREE.Vector3(0, 0.45, -1.50),
    new THREE.Vector3(0, 0.82, -0.78),
    new THREE.Vector3(0, 0.94, -0.32),
    new THREE.Vector3(0, 1.01, 0.18),
    new THREE.Vector3(0, 1.07, 0.60),
  ]);

  const vCount = (uSegs + 1) * (vSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const flexPositions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let iu = 0; iu <= uSegs; iu++) {
    const u = iu / uSegs;
    const zPos = THREE.MathUtils.lerp(-3.02, 0.66, u);
    const surf = evalLightFuryDorsalSurface(zPos);
    const basePt = surf.point;
    const up = surf.up;

    const endTaper = smoothstep(0.0, 0.14, u) * smoothstep(1.0, 0.82, u);
    const sailHeight = (0.012 + 0.024 * Math.sin(Math.pow(u, 0.78) * Math.PI)) * endTaper;
    const baseHalfThick = 0.015 * (0.45 + 0.55 * endTaper);

    const skin = computeChainSkinWeight(basePt, chainIndices, chainPositions, 3.8);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs;
      const arch = Math.sin(v * Math.PI);
      const sideX = Math.cos(v * Math.PI) * baseHalfThick * (1.0 - 0.55 * arch);
      // Root -1.6 cm below dorsal skin surface so the ridge sail is 100% flush!
      const yLift = -0.016 + (sailHeight + 0.016) * Math.pow(arch, 0.90);

      const pos = basePt.clone().addScaledVector(up, yLift);
      pos.x = sideX;

      const flexPos = pos.clone().addScaledVector(up, sailHeight * 0.35 * arch);

      const idx = iu * (vSegs + 1) + iv;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;

      flexPositions[idx * 3] = flexPos.x;
      flexPositions[idx * 3 + 1] = flexPos.y;
      flexPositions[idx * 3 + 2] = flexPos.z;

      uvs[idx * 2] = u * 3.0;
      uvs[idx * 2 + 1] = v;

      anatomy[idx * 4] = 0.08;
      anatomy[idx * 4 + 1] = arch * 0.72;
      anatomy[idx * 4 + 2] = arch * 0.28;
      anatomy[idx * 4 + 3] = arch * 0.88;

      skinIndices.set(skin.indices, idx * 4);
      skinWeights.set(skin.weights, idx * 4);
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
  g.setAttribute('uv1', new THREE.BufferAttribute(uvs, 2));
  g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  g.setIndex(new THREE.BufferAttribute(indices, 1));

  const flexAttr = new THREE.BufferAttribute(flexPositions, 3);
  flexAttr.name = 'dorsalFlex';
  g.morphAttributes.position = [flexAttr];

  g.computeVertexNormals();
  return g;
}
