import * as THREE from 'three';
import {
  CAUDAL_FIN_RIB_SPECS,
  PELVIC_FIN_RIB_SPECS,
  ToothlessRigSkeleton,
} from '../ToothlessSkeleton';
import {
  computeCraniumOrNeckSkin,
  evalToothlessDorsalSurface,
  LODLevel,
} from './BodyAndHeadBuilder';
import { computeChainSkinWeight, mergeSkinnedGeometries, normalizeSkinWeights } from './GeometryUtils';

export interface FlightSurfaceGeometries {
  wingSparsSkinGeometry: THREE.BufferGeometry;
  wingMembraneGeometry: THREE.BufferGeometry;
  dorsalSpinesGeometry: THREE.BufferGeometry;
  alulaClawsGeometry: THREE.BufferGeometry;
}

export function buildWingsAndFinsGeometries(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): FlightSurfaceGeometries {
  const sparParts: THREE.BufferGeometry[] = [];
  const membraneParts: THREE.BufferGeometry[] = [];
  const alulaClaws: THREE.BufferGeometry[] = [];

  for (const side of ['L', 'R'] as const) {
    const s = side === 'L' ? 1 : -1;
    sparParts.push(...buildSingleWingSpars(rig, side, s, lod));
    membraneParts.push(...buildSingleWingMembranes(rig, side, s, lod));
    sparParts.push(...buildPelvicFinSpars(rig, side, lod));
    membraneParts.push(buildPelvicFinMembrane(rig, side, lod));
    alulaClaws.push(buildWingAlulaClaw(rig, side, s, lod));
  }

  // Right (-X) Biological 5-Spar Caudal Tail Fin ONLY (Left +X is Hiccup's Prosthetic Tail Fin!)
  sparParts.push(...buildNaturalRightTailFinSpars(rig, lod));
  membraneParts.push(buildNaturalRightTailFinMembrane(rig, lod));

  return {
    wingSparsSkinGeometry: mergeSkinnedGeometries(sparParts),
    wingMembraneGeometry: mergeSkinnedGeometries(membraneParts),
    dorsalSpinesGeometry: buildVSplittingDorsalSpines(rig, lod),
    alulaClawsGeometry: mergeSkinnedGeometries(alulaClaws),
  };
}

/**
 * Helper to build a tapered skinned tube along an ordered sequence of bones & optional tip extension.
 */
function buildTaperedBoneTube(
  rig: ToothlessRigSkeleton,
  pts: THREE.Vector3[],
  boneNames: string[],
  radii: number[],
  lenSegs: number,
  radSegs: number,
  macroScale = 0.55
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

    // Interpolate radius piecewise along radii[]
    const rPos = u * (radii.length - 1);
    const rIdx = Math.min(radii.length - 2, Math.floor(rPos));
    const rFrac = rPos - rIdx;
    let rad = THREE.MathUtils.lerp(radii[rIdx], radii[rIdx + 1], rFrac);
    if (u > 0.92) {
      rad *= Math.sqrt(Math.max(0, 1.0 - Math.pow((u - 0.92) / 0.08, 2)));
    }

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const pos = new THREE.Vector3()
        .copy(center)
        .addScaledVector(sideVec, rad * Math.sin(th))
        .addScaledVector(upVec, rad * 0.88 * Math.cos(th));

      const idx = i * (radSegs + 1) + j;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;
      uvs[idx * 2] = u * 1.4;
      uvs[idx * 2 + 1] = v * 0.45;
      anatomy[idx * 4] = macroScale;

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

  // 1. Muscular Leading Wing Arm: Smooth low-profile chest embed -> Clavicle -> Shoulder -> Elbow -> Wrist -> Leading Finger 6
  const armPts = [
    new THREE.Vector3(s * 0.17, 1.01, 0.75),
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
    buildTaperedBoneTube(
      rig,
      armPts,
      armBones,
      [0.062, 0.068, 0.066, 0.056, 0.044, 0.030, 0.008],
      armSegs,
      armRad,
      0.72
    )
  );

  // 2. Radiating Phalangeal Wing Spars 1..5 (from Carpal Wrist Hub -> Mid Joint -> Scallop Tip)
  const wristPos = rig.bindWorldPositions.get(`wingWrist_${side}`)!;
  for (let f = 1; f <= 5; f++) {
    const midPos = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_a`)!;
    const tipPos = rig.bindWorldPositions.get(`wingFinger_${side}_${f}_b`)!;
    parts.push(
      buildTaperedBoneTube(
        rig,
        [wristPos, midPos, tipPos],
        [`wingWrist_${side}`, `wingFinger_${side}_${f}_a`, `wingFinger_${side}_${f}_b`],
        [0.030, 0.019, 0.005],
        fingerSegs,
        fingerRad,
        0.58
      )
    );
  }

  return parts;
}

/**
 * Builds scalloped aerodynamic patagium membranes for one 6-spar Night Fury wing
 * with exact bay-local bone skinning so folding/spreading never cross-bleeds between fingers.
 */
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

  // A. Leading Propatagium Strip (Shoulder -> Elbow -> Carpal Wrist, ref 08-wing-bone-joint-blueprint.jpg)
  parts.push(
    buildMembranePatch(
      uSegs,
      Math.max(4, Math.floor(vSegs * 0.5)),
      (u, v) => {
        // Leading chord from shoulder to wrist vs inner arm edge through elbow
        const leadPt = new THREE.Vector3().lerpVectors(
          new THREE.Vector3(s * 0.30, 1.13, 0.88),
          wristPos,
          u
        );
        // Subtle inward curve along leading propatagium edge
        leadPt.z += 0.05 * Math.sin(u * Math.PI);

        const armPt =
          u < 0.48
            ? new THREE.Vector3().lerpVectors(shoulderPos, elbowPos, u / 0.48)
            : new THREE.Vector3().lerpVectors(elbowPos, wristPos, (u - 0.48) / 0.52);

        const pos = new THREE.Vector3().lerpVectors(armPt, leadPt, v);
        const wWrist = Math.max(0, (u - 0.45) / 0.55);
        const wShoulder = Math.max(0, (0.55 - u) / 0.55);
        const wElbow = 1.0 - Math.abs(u - 0.5) * 1.8;
        const skin = normalizeSkinWeights(
          [shoulderIdx, elbowIdx, wristIdx, chestIdx],
          [wShoulder, Math.max(0, wElbow), wWrist, (1 - u) * 0.25]
        );
        return { pos, skin, thinness: v * 0.65 };
      }
    )
  );

  // B. Plagiopatagium (Inner Body Flank -> Elbow/Wrist -> Finger 1 with catenary trailing scallop)
  const f1Mid = rig.bindWorldPositions.get(`wingFinger_${side}_1_a`)!;
  const f1Tip = rig.bindWorldPositions.get(`wingFinger_${side}_1_b`)!;
  const f1aIdx = rig.boneIndexMap.get(`wingFinger_${side}_1_a`)!;
  const f1bIdx = rig.boneIndexMap.get(`wingFinger_${side}_1_b`)!;

  const bodyLead = new THREE.Vector3(s * 0.32, 1.06, 0.72);
  const bodyMid = new THREE.Vector3(s * 0.29, 0.90, 0.14);
  const bodyTrail = new THREE.Vector3(s * 0.26, 0.82, -0.46);

  parts.push(
    buildMembranePatch(uSegs, vSegs, (u, v) => {
      // u: 0 = along body flank, 1 = along Finger 1
      // v: 0 = anterior arm chord, 1 = scalloped trailing edge
      const flankPt =
        v < 0.5
          ? new THREE.Vector3().lerpVectors(bodyLead, bodyMid, v * 2)
          : new THREE.Vector3().lerpVectors(bodyMid, bodyTrail, (v - 0.5) * 2);

      const f1Pt =
        v < 0.5
          ? new THREE.Vector3().lerpVectors(wristPos, f1Mid, v * 2)
          : new THREE.Vector3().lerpVectors(f1Mid, f1Tip, (v - 0.5) * 2);

      const antPt =
        u < 0.45
          ? new THREE.Vector3().lerpVectors(bodyLead, elbowPos, u / 0.45)
          : new THREE.Vector3().lerpVectors(elbowPos, wristPos, (u - 0.45) / 0.55);

      const linearSpan = new THREE.Vector3().lerpVectors(flankPt, f1Pt, u);
      const pos = new THREE.Vector3().lerpVectors(antPt, linearSpan, Math.pow(v, 0.88));

      // Catenary trailing-edge scallop between hip flank and Finger 1 tip
      const scallopArch = Math.sin(u * Math.PI) * Math.pow(v, 2.2);
      pos.z += 0.19 * scallopArch;
      pos.y += 0.035 * Math.sin(u * Math.PI) * Math.sin(v * Math.PI); // Subtle aerodynamic airfoil camber

      const bodyBone = v < 0.42 ? chestIdx : v < 0.78 ? spine1Idx : pelvisIdx;
      const fingerBone = v < 0.35 ? wristIdx : v < 0.72 ? f1aIdx : f1bIdx;
      const armSupport = (1.0 - v) * Math.sin(u * Math.PI) * 0.6;
      const skin = normalizeSkinWeights(
        [bodyBone, fingerBone, elbowIdx, wristIdx],
        [(1.0 - u) * (1.0 - armSupport * 0.5), u * (1.0 - armSupport * 0.5), armSupport * 0.65, armSupport * 0.35]
      );
      return { pos, skin, thinness: 0.35 + 0.65 * Math.sin(u * Math.PI) * v };
    })
  );

  // C. 5 Inter-Digital Scalloped Phalangeal Bays (Finger k <-> Finger k+1 for k=1..5)
  for (let k = 1; k <= 5; k++) {
    const midA = rig.bindWorldPositions.get(`wingFinger_${side}_${k}_a`)!;
    const tipA = rig.bindWorldPositions.get(`wingFinger_${side}_${k}_b`)!;
    const midB = rig.bindWorldPositions.get(`wingFinger_${side}_${k + 1}_a`)!;
    const tipB = rig.bindWorldPositions.get(`wingFinger_${side}_${k + 1}_b`)!;

    const idxAa = rig.boneIndexMap.get(`wingFinger_${side}_${k}_a`)!;
    const idxAb = rig.boneIndexMap.get(`wingFinger_${side}_${k}_b`)!;
    const idxBa = rig.boneIndexMap.get(`wingFinger_${side}_${k + 1}_a`)!;
    const idxBb = rig.boneIndexMap.get(`wingFinger_${side}_${k + 1}_b`)!;

    // Deeper catenary scallop on outer wider bay (between 5 and 6, ref 08-wing-bone-joint-blueprint.jpg)
    const scallopDepth = k === 5 ? 0.24 : 0.17;

    parts.push(
      buildMembranePatch(uSegs, vSegs, (u, v) => {
        // v: 0 = carpal wrist apex, 1 = scalloped trailing edge between tipA and tipB
        // u: 0 = Finger k, 1 = Finger k+1
        const ptA =
          v < 0.5
            ? new THREE.Vector3().lerpVectors(wristPos, midA, v * 2)
            : new THREE.Vector3().lerpVectors(midA, tipA, (v - 0.5) * 2);

        const ptB =
          v < 0.5
            ? new THREE.Vector3().lerpVectors(wristPos, midB, v * 2)
            : new THREE.Vector3().lerpVectors(midB, tipB, (v - 0.5) * 2);

        const pos = new THREE.Vector3().lerpVectors(ptA, ptB, u);

        // Pull trailing edge inward toward carpal wrist in a crisp bat-wing catenary curve!
        const toWrist = new THREE.Vector3().subVectors(wristPos, pos).normalize();
        const catenary = Math.sin(u * Math.PI) * Math.pow(v, 2.4);
        pos.addScaledVector(toWrist, scallopDepth * catenary);
        // Subtle dorsal airfoil camber
        pos.y += 0.028 * Math.sin(u * Math.PI) * Math.sin(v * Math.PI);

        // Exact bay-isolated skinning: ONLY wrist + Finger k + Finger k+1!
        let skin: ReturnType<typeof normalizeSkinWeights>;
        if (v < 0.25) {
          const wProx = 1.0 - v / 0.25;
          skin = normalizeSkinWeights(
            [wristIdx, idxAa, idxBa, 0],
            [wProx, (1 - wProx) * (1 - u), (1 - wProx) * u, 0]
          );
        } else {
          const distFrac = Math.max(0, Math.min(1, (v - 0.42) / 0.48));
          skin = normalizeSkinWeights(
            [idxAa, idxAb, idxBa, idxBb],
            [(1 - u) * (1 - distFrac), (1 - u) * distFrac, u * (1 - distFrac), u * distFrac]
          );
        }

        return {
          pos,
          skin,
          thinness: 0.30 + 0.70 * Math.sin(u * Math.PI) * Math.pow(v, 0.7),
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
  const segs = lod === 0 ? 12 : 7;
  const rad = lod === 0 ? 8 : 6;
  const s = side === 'L' ? 1 : -1;
  const parts: THREE.BufferGeometry[] = [];

  PELVIC_FIN_RIB_SPECS.forEach((rib, idx) => {
    const finBone = `pelvicFin_${side}_${idx + 1}`;
    const rootPt = new THREE.Vector3(s * rib.rootX, rib.rootY, rib.rootZ);
    const tipPt = new THREE.Vector3(s * rib.tipX, rib.tipY, rib.tipZ);
    parts.push(
      buildTaperedBoneTube(
        rig,
        [rootPt, tipPt],
        [finBone],
        [0.017, 0.004],
        segs,
        rad,
        0.55
      )
    );
  });
  return parts;
}

function buildPelvicFinMembrane(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  lod: LODLevel
): THREE.BufferGeometry {
  const segs = lod === 0 ? 12 : 7;
  const s = side === 'L' ? 1 : -1;
  const parts: THREE.BufferGeometry[] = [];

  const roots = PELVIC_FIN_RIB_SPECS.map((r) => new THREE.Vector3(s * r.rootX, r.rootY, r.rootZ));
  const tips = PELVIC_FIN_RIB_SPECS.map((r) => new THREE.Vector3(s * r.tipX, r.tipY, r.tipZ));
  const finIdx = [1, 2, 3].map((k) => rig.boneIndexMap.get(`pelvicFin_${side}_${k}`)!);
  const idxT3 = rig.boneIndexMap.get('tail_3')!;
  const tail3Anchor = new THREE.Vector3(s * 0.10, 0.54, -1.56);

  const bays = [
    { rA: roots[0], tA: tips[0], rB: roots[1], tB: tips[1], iA: finIdx[0], iB: finIdx[1] },
    { rA: roots[1], tA: tips[1], rB: roots[2], tB: tips[2], iA: finIdx[1], iB: finIdx[2] },
    { rA: roots[2], tA: tips[2], rB: tail3Anchor, tB: tail3Anchor, iA: finIdx[2], iB: idxT3 },
  ];

  for (const b of bays) {
    parts.push(
      buildMembranePatch(segs, segs, (u, v) => {
        const ptA = new THREE.Vector3().lerpVectors(b.rA, b.tA, v);
        const ptB = new THREE.Vector3().lerpVectors(b.rB, b.tB, v);
        const pos = new THREE.Vector3().lerpVectors(ptA, ptB, u);
        const inward = new THREE.Vector3().subVectors(b.rA, pos).normalize();
        pos.addScaledVector(inward, 0.042 * Math.sin(u * Math.PI) * Math.pow(v, 2.1));
        const skin = normalizeSkinWeights([b.iA, b.iB, 0, 0], [1 - u, u, 0, 0]);
        return { pos, skin, thinness: 0.4 + 0.55 * v };
      })
    );
  }

  return mergeSkinnedGeometries(parts);
}

/**
 * Right (-X) Biological 5-Spar Caudal Tail Fin built from exact mirrored CAUDAL_FIN_RIB_SPECS
 * so its aerodynamic planform & scallop crests match the Left (+X) Hidden World prosthetic fin!
 */
function buildNaturalRightTailFinSpars(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry[] {
  const segs = lod === 0 ? 12 : 7;
  const rad = lod === 0 ? 8 : 6;
  const parts: THREE.BufferGeometry[] = [];

  CAUDAL_FIN_RIB_SPECS.forEach((rib, idx) => {
    const finName = `tailFin_R_${idx + 1}`;
    const rootPos = new THREE.Vector3(-rib.rootX, rib.rootY, rib.rootZ);
    const tipPos = new THREE.Vector3(-rib.tipX, rib.tipY, rib.tipZ);
    parts.push(
      buildTaperedBoneTube(
        rig,
        [rootPos, tipPos],
        [finName],
        [0.014, 0.0038],
        segs,
        rad,
        0.52
      )
    );
  });
  return parts;
}

function buildNaturalRightTailFinMembrane(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): THREE.BufferGeometry {
  const segs = lod === 0 ? 12 : 7;
  const parts: THREE.BufferGeometry[] = [];

  for (let k = 0; k < 4; k++) {
    const specA = CAUDAL_FIN_RIB_SPECS[k];
    const specB = CAUDAL_FIN_RIB_SPECS[k + 1];
    const rA = new THREE.Vector3(-specA.rootX, specA.rootY, specA.rootZ);
    const rB = new THREE.Vector3(-specB.rootX, specB.rootY, specB.rootZ);
    const tA = new THREE.Vector3(-specA.tipX, specA.tipY, specA.tipZ);
    const tB = new THREE.Vector3(-specB.tipX, specB.tipY, specB.tipZ);

    const iTA = rig.boneIndexMap.get(`tailFin_R_${k + 1}`)!;
    const iTB = rig.boneIndexMap.get(`tailFin_R_${k + 2}`)!;

    parts.push(
      buildMembranePatch(segs, segs, (u, v) => {
        const ptA = new THREE.Vector3().lerpVectors(rA, tA, v);
        const ptB = new THREE.Vector3().lerpVectors(rB, tB, v);
        const pos = new THREE.Vector3().lerpVectors(ptA, ptB, u);
        // Symmetrical spine-directed scallop notch identical to Left prosthetic fin!
        const midRoot = new THREE.Vector3().lerpVectors(rA, rB, u);
        const toSpine = new THREE.Vector3().subVectors(midRoot, pos).normalize();
        pos.addScaledVector(toSpine, 0.046 * Math.sin(u * Math.PI) * Math.pow(v, 2.15));
        const skin = normalizeSkinWeights([iTA, iTB, 0, 0], [1 - u, u, 0, 0]);
        return { pos, skin, thinness: 0.45 + 0.55 * v };
      })
    );
  }

  // Trailing wedge from Rib 5 into distal tail hinge line (rotates rigidly with zero compression!)
  const spec5 = CAUDAL_FIN_RIB_SPECS[4];
  const r5 = new THREE.Vector3(-spec5.rootX, spec5.rootY, spec5.rootZ);
  const t5 = new THREE.Vector3(-spec5.tipX, spec5.tipY, spec5.tipZ);
  const tailApex = new THREE.Vector3(-spec5.rootX, spec5.rootY, -4.50);
  const iT5 = rig.boneIndexMap.get('tailFin_R_5')!;
  const iHingeR = rig.boneIndexMap.get('tailFinHinge_R')!;

  parts.push(
    buildMembranePatch(segs, segs, (u, v) => {
      const ptA = new THREE.Vector3().lerpVectors(r5, t5, v);
      const pos = new THREE.Vector3().lerpVectors(ptA, tailApex, u);
      const skin = normalizeSkinWeights([iT5, iHingeR, 0, 0], [1 - u, u, 0, 0]);
      return { pos, skin, thinness: 0.45 + 0.5 * v };
    })
  );

  return mergeSkinnedGeometries(parts);
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

      anatomy[idx * 4] = 0.22; // Fine leathery patagium micro-grain
      anatomy[idx * 4 + 1] = 0.0;
      anatomy[idx * 4 + 2] = 0.18 * sample.thinness;
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

/**
 * Builds 32 modular pairs of V-splitting dorsal spines along Toothless's neck, back & tail,
 * anchored directly to `evalToothlessDorsalSurface(z)` with 2.6cm deep dermal embed and
 * identical bone skinning weights so EVERY spine is 100% attached to his back skin (ZERO floating)!
 */
function buildVSplittingDorsalSpines(rig: ToothlessRigSkeleton, lod: LODLevel): THREE.BufferGeometry {
  const spineCount = lod === 0 ? 32 : lod === 1 ? 22 : 14;
  const bodyBoneNames = [
    'tail_10', 'tail_9', 'tail_8', 'tail_7', 'tail_6',
    'tail_5', 'tail_4', 'tail_3', 'tail_2', 'tail_1',
    'pelvis', 'spine_1', 'spine_2', 'chest',
    'neck_1', 'neck_2', 'neck_3', 'neck_4',
  ];
  const chainIndices = bodyBoneNames.map((n) => rig.boneIndexMap.get(n)!);
  const chainPositions = bodyBoneNames.map((n) => rig.bindWorldPositions.get(n)!);

  // Each finlet has 6 vertices (base front, base back, base outer, apex front, apex tip, inner core) -> 8 tris
  const finletsTotal = spineCount * 2;
  const vertsPerFinlet = 6;
  const trisPerFinlet = 8;

  const positions = new Float32Array(finletsTotal * vertsPerFinlet * 3);
  const splitPositions = new Float32Array(finletsTotal * vertsPerFinlet * 3);
  const uvs = new Float32Array(finletsTotal * vertsPerFinlet * 2);
  const anatomy = new Float32Array(finletsTotal * vertsPerFinlet * 4);
  const skinIndices = new Uint16Array(finletsTotal * vertsPerFinlet * 4);
  const skinWeights = new Float32Array(finletsTotal * vertsPerFinlet * 4);
  const indices = new Uint16Array(finletsTotal * trisPerFinlet * 3);

  let vCursor = 0;
  let iCursor = 0;

  for (let sIdx = 0; sIdx < spineCount; sIdx++) {
    const frac = sIdx / (spineCount - 1); // 0 = lower tail (-3.25m), 1 = upper neck (+1.48m)
    // Concentrate slightly closer spacing over neck & shoulders just like ref 06!
    const zPos = THREE.MathUtils.lerp(-3.25, 1.48, 1.0 - Math.pow(1.0 - frac, 1.28));
    const surf = evalToothlessDorsalSurface(zPos);
    const basePt = surf.point;
    const tangent = surf.tangent;
    const up = surf.up;

    // Spine height peaks cleanly over thorax/shoulders and tapers neatly toward tail & crown
    const sizeEnv = 0.32 + 0.68 * Math.sin(Math.pow(frac, 0.74) * Math.PI);
    const height = 0.078 * sizeEnv;
    const length = 0.108 * sizeEnv;
    // Deep 2.8 cm root embed BELOW the actual curved dorsal skin surface (accounting for longitudinal curvature!)
    const rootSink = -0.028;

    const skin = computeCraniumOrNeckSkin(basePt, rig, chainIndices, chainPositions);

    for (const sideSign of [1, -1]) {
      const closedOffset = sideSign * 0.004;
      const splitLat = sideSign * height * 0.62;
      const splitDrop = -height * 0.16;

      // 6 vertices of a sleek shark-fin-like dorsal plate rooted solidly INSIDE the dorsal dermis!
      const frontSurf = evalToothlessDorsalSurface(zPos + length * 0.50).point;
      const backSurf = evalToothlessDorsalSurface(zPos - length * 0.50).point;

      const localVertsClosed: THREE.Vector3[] = [
        frontSurf.clone().addScaledVector(up, rootSink).setX(closedOffset),
        backSurf.clone().addScaledVector(up, rootSink).setX(closedOffset),
        basePt.clone().addScaledVector(up, rootSink * 0.85).setX(sideSign * 0.020 * sizeEnv),
        basePt.clone().addScaledVector(tangent, length * 0.10).addScaledVector(up, height * 0.64).setX(closedOffset * 1.2),
        basePt.clone().addScaledVector(tangent, -length * 0.40).addScaledVector(up, height).setX(closedOffset * 1.1),
        basePt.clone().addScaledVector(tangent, -length * 0.12).addScaledVector(up, height * 0.42).setX(sideSign * 0.001),
      ];

      const localVertsSplit = localVertsClosed.map((v, k) => {
        const out = v.clone();
        // Base stays rooted; upper vertices (k=3,4,5) fan laterally into V-shape!
        if (k >= 3) {
          const tipFactor = k === 4 ? 1.0 : k === 3 ? 0.68 : 0.48;
          out.x += splitLat * tipFactor;
          out.y += splitDrop * tipFactor;
        }
        return out;
      });

      for (let k = 0; k < vertsPerFinlet; k++) {
        const vc = (vCursor + k) * 3;
        positions[vc] = localVertsClosed[k].x;
        positions[vc + 1] = localVertsClosed[k].y;
        positions[vc + 2] = localVertsClosed[k].z;

        splitPositions[vc] = localVertsSplit[k].x;
        splitPositions[vc + 1] = localVertsSplit[k].y;
        splitPositions[vc + 2] = localVertsSplit[k].z;

        uvs[(vCursor + k) * 2] = frac;
        uvs[(vCursor + k) * 2 + 1] = k / vertsPerFinlet;

        // Inner medial core (k=5,0,1) glows vibrant cyan-blue during Alpha Dominance mode!
        anatomy[(vCursor + k) * 4] = 0.75;
        anatomy[(vCursor + k) * 4 + 1] = 0;
        anatomy[(vCursor + k) * 4 + 2] = k === 5 || k >= 3 ? 0.96 : 0.72;
        anatomy[(vCursor + k) * 4 + 3] = 0;

        skinIndices.set(skin.indices, (vCursor + k) * 4);
        skinWeights.set(skin.weights, (vCursor + k) * 4);
      }

      // Closed manifold tetrahedron/hexahedron triangles (winded outward for each sideSign)
      const fTris =
        sideSign > 0
          ? [
              [0, 2, 3], [2, 1, 4], [2, 4, 3],
              [0, 3, 5], [5, 3, 4], [5, 4, 1],
              [0, 5, 1], [0, 1, 2],
            ]
          : [
              [0, 3, 2], [2, 4, 1], [2, 3, 4],
              [0, 5, 3], [5, 4, 3], [5, 1, 4],
              [0, 1, 5], [0, 2, 1],
            ];

      for (const tri of fTris) {
        indices[iCursor++] = vCursor + tri[0];
        indices[iCursor++] = vCursor + tri[1];
        indices[iCursor++] = vCursor + tri[2];
      }

      vCursor += vertsPerFinlet;
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

  // Register glTF-standard morph target for V-Split Dorsal Spines
  const splitAttr = new THREE.BufferAttribute(splitPositions, 3);
  splitAttr.name = 'dorsalVSplit';
  g.morphAttributes.position = [splitAttr];

  g.computeVertexNormals();
  return g;
}

function buildWingAlulaClaw(
  rig: ToothlessRigSkeleton,
  side: 'L' | 'R',
  s: number,
  lod: LODLevel
): THREE.BufferGeometry {
  const wristPos = rig.bindWorldPositions.get(`wingWrist_${side}`)!;
  const tip = wristPos.clone().add(new THREE.Vector3(s * 0.035, 0.018, 0.085));
  return buildTaperedBoneTube(
    rig,
    [wristPos, tip],
    [`wingWrist_${side}`],
    [0.016, 0.003],
    lod === 0 ? 7 : 4,
    lod === 0 ? 8 : 6,
    0.8
  );
}
