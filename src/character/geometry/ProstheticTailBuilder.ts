import * as THREE from 'three';
import { CAUDAL_FIN_RIB_SPECS, ToothlessRigSkeleton } from '../ToothlessSkeleton';
import { LODLevel } from './BodyAndHeadBuilder';
import { mergeSkinnedGeometries, normalizeSkinWeights } from './GeometryUtils';

export interface ProstheticTailGeometries {
  bronzeHardwareGeometry: THREE.BufferGeometry;
  ironStrutsGeometry: THREE.BufferGeometry;
  scalePasteMembraneGeometry: THREE.BufferGeometry;
}

/**
 * Builds Option A: Toothless's Hidden World Solo-Flight Automatic Left (+X) Prosthetic Tail Fin
 * engineered by Hiccup (docs/references/05-hidden-world-auto-black-tailfin.jpg).
 * Uses the EXACT mirrored CAUDAL_FIN_RIB_SPECS & scallop crests of the Right biological fin
 * for 100% aerodynamic symmetry, while rendering Hiccup's forged Viking bronze collars,
 * bell-crank push-rod linkage, forged-iron mechanical ribs, bronze ferrules, and scale-paste membrane!
 */
export function buildProstheticTailGeometries(
  rig: ToothlessRigSkeleton,
  lod: LODLevel
): ProstheticTailGeometries {
  const bronzeParts: THREE.BufferGeometry[] = [];
  const ironParts: THREE.BufferGeometry[] = [];
  const membraneParts: THREE.BufferGeometry[] = [];

  const collarIdx = rig.boneIndexMap.get('prostheticCollar')!;
  const rodIdx = rig.boneIndexMap.get('prostheticRod')!;
  const tail8Idx = rig.boneIndexMap.get('tail_8')!;
  const tail9Idx = rig.boneIndexMap.get('tail_9')!;
  const tail10Idx = rig.boneIndexMap.get('tail_10')!;

  const radSegs = lod === 0 ? 20 : 12;

  // 1. Forged Viking Bronze Clamp Collars around tail_8 + Distal Tail-Ring Collar
  const collarRings = [
    { z: -3.48, y: 0.125, rOuter: 0.066, length: 0.044, boneIdx: collarIdx },
    { z: -3.56, y: 0.125, rOuter: 0.062, length: 0.040, boneIdx: collarIdx },
    { z: -4.34, y: 0.128, rOuter: 0.033, length: 0.032, boneIdx: tail10Idx },
  ];

  for (const cr of collarRings) {
    bronzeParts.push(
      buildSkinnedCylinderBand(
        new THREE.Vector3(0, cr.y, cr.z - cr.length * 0.5),
        new THREE.Vector3(0, cr.y, cr.z + cr.length * 0.5),
        cr.rOuter,
        cr.rOuter * 1.03,
        radSegs,
        cr.boneIdx
      )
    );
  }

  // Bell-Crank Actuator Housing on Left (+X) side of Collar
  bronzeParts.push(
    buildSkinnedCylinderBand(
      new THREE.Vector3(0.044, 0.138, -3.60),
      new THREE.Vector3(0.048, 0.142, -3.46),
      0.024,
      0.028,
      lod === 0 ? 14 : 8,
      collarIdx
    )
  );

  // Longitudinal Bronze Spine Push-Rod Linkage running along +X dorsal-lateral tailbone
  const rodSegs = lod === 0 ? 16 : 8;
  bronzeParts.push(
    buildMultiBoneRod(
      new THREE.Vector3(0.038, 0.138, -3.52),
      new THREE.Vector3(0.020, 0.138, -4.34),
      0.012,
      0.0085,
      rodSegs,
      lod === 0 ? 12 : 8,
      [rodIdx, tail9Idx, tail10Idx]
    )
  );

  // Forged-Iron Spine Backing Rail
  ironParts.push(
    buildMultiBoneRod(
      new THREE.Vector3(0.026, 0.126, -3.50),
      new THREE.Vector3(0.014, 0.127, -4.35),
      0.014,
      0.009,
      rodSegs,
      lod === 0 ? 10 : 6,
      [tail8Idx, tail9Idx, tail10Idx]
    )
  );

  // 2. 5 Hinged Mechanical Fin Ribs Skinned 100% to their Spine Hinge-Root Bones (tailFin_L_1..5)!
  const rootPoints: THREE.Vector3[] = [];
  const tipPoints: THREE.Vector3[] = [];
  const finBoneIndices: number[] = [];

  CAUDAL_FIN_RIB_SPECS.forEach((spec, idx) => {
    const finBoneName = `tailFin_L_${idx + 1}`;
    const finIdx = rig.boneIndexMap.get(finBoneName)!;

    const rootPt = new THREE.Vector3(spec.rootX, spec.rootY, spec.rootZ);
    const tipPt = new THREE.Vector3(spec.tipX, spec.tipY, spec.tipZ);

    rootPoints.push(rootPt);
    tipPoints.push(tipPt);
    finBoneIndices.push(finIdx);

    // Rigid mechanical iron strut rotating cleanly around rootPt!
    ironParts.push(
      buildTwoBoneStrut(
        rootPt,
        tipPt,
        0.0125,
        0.0040,
        lod === 0 ? 10 : 6,
        lod === 0 ? 10 : 6,
        finIdx,
        finIdx
      )
    );

    const dir = new THREE.Vector3().subVectors(tipPt, rootPt).normalize();
    // Bronze pin-hinge knuckle at spine hinge root
    bronzeParts.push(
      buildSkinnedCylinderBand(
        rootPt.clone(),
        rootPt.clone().addScaledVector(dir, 0.026),
        0.0155,
        0.0145,
        lod === 0 ? 10 : 6,
        finIdx
      )
    );

    // Golden-bronze ferrule tip at outer apex of each mechanical rib (ref 05)
    bronzeParts.push(
      buildSkinnedCylinderBand(
        tipPt.clone().addScaledVector(dir, -0.012),
        tipPt.clone().addScaledVector(dir, 0.020),
        0.0055,
        0.0018,
        lod === 0 ? 8 : 6,
        finIdx
      )
    );
  });

  // Leading-edge bronze grommet rivets along Rib 1
  for (let r = 1; r <= 4; r++) {
    const f = r / 5;
    const gPos = new THREE.Vector3().lerpVectors(rootPoints[0], tipPoints[0], f);
    bronzeParts.push(
      buildSkinnedCylinderBand(
        gPos.clone().add(new THREE.Vector3(0, -0.0055, 0)),
        gPos.clone().add(new THREE.Vector3(0, 0.0055, 0)),
        0.006,
        0.006,
        8,
        finBoneIndices[0]
      )
    );
  }

  // 3. Fireproof Night-Fury-Scale-Paste Black Membrane (100% symmetrical crest curve with Right fin!)
  const mSegs = lod === 0 ? 12 : 7;
  for (let k = 0; k < 4; k++) {
    const rA = rootPoints[k];
    const rB = rootPoints[k + 1];
    const tA = tipPoints[k];
    const tB = tipPoints[k + 1];
    const iTA = finBoneIndices[k];
    const iTB = finBoneIndices[k + 1];

    membraneParts.push(
      buildProstheticPatch(mSegs, k, (u, v) => {
        const ptA = new THREE.Vector3().lerpVectors(rA, tA, v);
        const ptB = new THREE.Vector3().lerpVectors(rB, tB, v);
        const pos = new THREE.Vector3().lerpVectors(ptA, ptB, u);

        const midRoot = new THREE.Vector3().lerpVectors(rA, rB, u);
        const toSpine = new THREE.Vector3().subVectors(midRoot, pos).normalize();
        pos.addScaledVector(toSpine, 0.046 * Math.sin(u * Math.PI) * Math.pow(v, 2.15));

        const skin = normalizeSkinWeights([iTA, iTB, 0, 0], [1 - u, u, 0, 0]);
        return { pos, skin };
      })
    );
  }

  // Symmetrical trailing wedge from Rib 5 onto longitudinal hinge axis (0.000m compression on fold!)
  const r5 = rootPoints[4];
  const t5 = tipPoints[4];
  const tailApex = new THREE.Vector3(r5.x, r5.y, -4.50);
  const iT5 = finBoneIndices[4];
  const hingeLIdx = rig.boneIndexMap.get('tailFinHinge_L')!;

  membraneParts.push(
    buildProstheticPatch(mSegs, 4, (u, v) => {
      const ptA = new THREE.Vector3().lerpVectors(r5, t5, v);
      const pos = new THREE.Vector3().lerpVectors(ptA, tailApex, u);
      const skin = normalizeSkinWeights([iT5, hingeLIdx, 0, 0], [1 - u, u, 0, 0]);
      return { pos, skin };
    })
  );

  return {
    bronzeHardwareGeometry: mergeSkinnedGeometries(bronzeParts),
    ironStrutsGeometry: mergeSkinnedGeometries(ironParts),
    scalePasteMembraneGeometry: mergeSkinnedGeometries(membraneParts),
  };
}

function buildProstheticPatch(
  mSegs: number,
  bayIndex: number,
  evalFn: (
    u: number,
    v: number
  ) => {
    pos: THREE.Vector3;
    skin: { indices: [number, number, number, number]; weights: [number, number, number, number] };
  }
): THREE.BufferGeometry {
  const vCount = (mSegs + 1) * (mSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let iv = 0; iv <= mSegs; iv++) {
    const v = iv / mSegs;
    for (let iu = 0; iu <= mSegs; iu++) {
      const u = iu / mSegs;
      const sample = evalFn(u, v);
      const idx = iv * (mSegs + 1) + iu;

      positions[idx * 3] = sample.pos.x;
      positions[idx * 3 + 1] = sample.pos.y;
      positions[idx * 3 + 2] = sample.pos.z;
      uvs[idx * 2] = (bayIndex + u) * 0.45;
      uvs[idx * 2 + 1] = v * 1.2;

      anatomy[idx * 4] = 0.55;
      anatomy[idx * 4 + 3] = 0.25;

      skinIndices.set(sample.skin.indices, idx * 4);
      skinWeights.set(sample.skin.weights, idx * 4);
    }
  }

  const indices = new Uint16Array(mSegs * mSegs * 6);
  let ptr = 0;
  for (let iv = 0; iv < mSegs; iv++) {
    for (let iu = 0; iu < mSegs; iu++) {
      const a = iv * (mSegs + 1) + iu;
      const b = (iv + 1) * (mSegs + 1) + iu;
      const c = (iv + 1) * (mSegs + 1) + (iu + 1);
      const d = iv * (mSegs + 1) + (iu + 1);
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

function buildSkinnedCylinderBand(
  start: THREE.Vector3,
  end: THREE.Vector3,
  r0: number,
  r1: number,
  radSegs: number,
  boneIdx: number
): THREE.BufferGeometry {
  return buildTwoBoneStrut(start, end, r0, r1, 3, radSegs, boneIdx, boneIdx);
}

function buildTwoBoneStrut(
  start: THREE.Vector3,
  end: THREE.Vector3,
  r0: number,
  r1: number,
  lenSegs: number,
  radSegs: number,
  boneIdxA: number,
  boneIdxB: number
): THREE.BufferGeometry {
  const axis = new THREE.Vector3().subVectors(end, start);
  const tangent = axis.clone().normalize();
  let refUp = new THREE.Vector3(0, 1, 0);
  if (Math.abs(tangent.dot(refUp)) > 0.92) refUp = new THREE.Vector3(0, 0, 1);
  const upVec = refUp.clone().addScaledVector(tangent, -refUp.dot(tangent)).normalize();
  const sideVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

  const vCount = (lenSegs + 1) * (radSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let i = 0; i <= lenSegs; i++) {
    const u = i / lenSegs;
    const c = new THREE.Vector3().lerpVectors(start, end, u);
    const r = THREE.MathUtils.lerp(r0, r1, u);
    const endPinch = i === 0 || i === lenSegs ? 0.35 : 1.0;

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const pos = c
        .clone()
        .addScaledVector(sideVec, r * endPinch * Math.sin(th))
        .addScaledVector(upVec, r * endPinch * Math.cos(th));

      const idx = i * (radSegs + 1) + j;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;
      uvs[idx * 2] = u;
      uvs[idx * 2 + 1] = v;
      const skin = normalizeSkinWeights([boneIdxA, boneIdxB, 0, 0], [1 - u, u, 0, 0]);
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
  g.setAttribute('uv1', new THREE.BufferAttribute(uvs, 2));
  g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  g.setIndex(new THREE.BufferAttribute(indices, 1));
  g.computeVertexNormals();
  return g;
}

function buildMultiBoneRod(
  start: THREE.Vector3,
  end: THREE.Vector3,
  r0: number,
  r1: number,
  lenSegs: number,
  radSegs: number,
  boneChain: [number, number, number]
): THREE.BufferGeometry {
  const tangent = new THREE.Vector3().subVectors(end, start).normalize();
  const upVec = new THREE.Vector3(0, 1, 0).addScaledVector(tangent, -tangent.y).normalize();
  const sideVec = new THREE.Vector3().crossVectors(upVec, tangent).normalize();

  const vCount = (lenSegs + 1) * (radSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);
  const anatomy = new Float32Array(vCount * 4);
  const skinIndices = new Uint16Array(vCount * 4);
  const skinWeights = new Float32Array(vCount * 4);

  for (let i = 0; i <= lenSegs; i++) {
    const u = i / lenSegs;
    const c = new THREE.Vector3().lerpVectors(start, end, u);
    const r = THREE.MathUtils.lerp(r0, r1, u);

    const w0 = Math.max(0, 1.0 - u * 2.0);
    const w2 = Math.max(0, (u - 0.5) * 2.0);
    const w1 = 1.0 - w0 - w2;
    const skin = normalizeSkinWeights([boneChain[0], boneChain[1], boneChain[2], 0], [w0, w1, w2, 0]);

    for (let j = 0; j <= radSegs; j++) {
      const v = j / radSegs;
      const th = v * Math.PI * 2;
      const pos = c
        .clone()
        .addScaledVector(sideVec, r * Math.sin(th))
        .addScaledVector(upVec, r * Math.cos(th));

      const idx = i * (radSegs + 1) + j;
      positions[idx * 3] = pos.x;
      positions[idx * 3 + 1] = pos.y;
      positions[idx * 3 + 2] = pos.z;
      uvs[idx * 2] = u;
      uvs[idx * 2 + 1] = v;
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
  g.setAttribute('uv1', new THREE.BufferAttribute(uvs, 2));
  g.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  g.setIndex(new THREE.BufferAttribute(indices, 1));
  g.computeVertexNormals();
  return g;
}
