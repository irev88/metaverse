import * as THREE from 'three';

/**
 * Merges multiple indexed BufferGeometries that share position, normal, uv,
 * aAnatomyData (vec4), skinIndex (uint16x4), and skinWeight (float32x4).
 */
export function mergeSkinnedGeometries(geometries: THREE.BufferGeometry[]): THREE.BufferGeometry {
  let totalVerts = 0;
  let totalIndices = 0;

  for (const g of geometries) {
    const pos = g.getAttribute('position');
    totalVerts += pos.count;
    const idx = g.getIndex();
    totalIndices += idx ? idx.count : pos.count;
  }

  const positions = new Float32Array(totalVerts * 3);
  const normals = new Float32Array(totalVerts * 3);
  const uvs = new Float32Array(totalVerts * 2);
  const anatomy = new Float32Array(totalVerts * 4);
  const skinIndices = new Uint16Array(totalVerts * 4);
  const skinWeights = new Float32Array(totalVerts * 4);
  const indices = totalVerts > 65535 ? new Uint32Array(totalIndices) : new Uint16Array(totalIndices);

  let vOffset = 0;
  let iOffset = 0;

  for (const g of geometries) {
    const pos = g.getAttribute('position') as THREE.BufferAttribute;
    const norm = g.getAttribute('normal') as THREE.BufferAttribute;
    const uv = g.getAttribute('uv') as THREE.BufferAttribute;
    const anat = g.getAttribute('aAnatomyData') as THREE.BufferAttribute | undefined;
    const sIdx = g.getAttribute('skinIndex') as THREE.BufferAttribute;
    const sWgt = g.getAttribute('skinWeight') as THREE.BufferAttribute;
    const count = pos.count;

    positions.set(pos.array as Float32Array, vOffset * 3);
    if (norm) {
      normals.set(norm.array as Float32Array, vOffset * 3);
    }
    if (uv) {
      uvs.set(uv.array as Float32Array, vOffset * 2);
    }
    if (anat) {
      anatomy.set(anat.array as Float32Array, vOffset * 4);
    } else {
      for (let i = 0; i < count; i++) {
        anatomy[(vOffset + i) * 4] = 0.35;
      }
    }
    if (sIdx && sWgt) {
      for (let i = 0; i < count * 4; i++) {
        skinIndices[vOffset * 4 + i] = sIdx.array[i];
        skinWeights[vOffset * 4 + i] = sWgt.array[i];
      }
    }

    const idx = g.getIndex();
    if (idx) {
      for (let i = 0; i < idx.count; i++) {
        indices[iOffset + i] = idx.getX(i) + vOffset;
      }
      iOffset += idx.count;
    } else {
      for (let i = 0; i < count; i++) {
        indices[iOffset + i] = vOffset + i;
      }
      iOffset += count;
    }

    vOffset += count;
  }

  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  merged.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  merged.setAttribute('uv1', new THREE.BufferAttribute(uvs, 2)); // For glTF aoMap support
  merged.setAttribute('aAnatomyData', new THREE.BufferAttribute(anatomy, 4));
  merged.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  merged.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  merged.setIndex(new THREE.BufferAttribute(indices, 1));
  merged.computeBoundingSphere();
  merged.computeBoundingBox();
  return merged;
}

/**
 * Normalizes a 4-weight skinning tuple so weights sum strictly to 1.0 (required by glTF 2.0).
 */
export function normalizeSkinWeights(
  indices: [number, number, number, number],
  weights: [number, number, number, number]
): { indices: [number, number, number, number]; weights: [number, number, number, number] } {
  const sum = weights[0] + weights[1] + weights[2] + weights[3];
  if (sum <= 1e-6) {
    return { indices: [indices[0], 0, 0, 0], weights: [1, 0, 0, 0] };
  }
  const inv = 1.0 / sum;
  return {
    indices,
    weights: [weights[0] * inv, weights[1] * inv, weights[2] * inv, weights[3] * inv],
  };
}

/**
 * Computes smooth closest-segment multi-bone skin weights along an ordered chain of bones.
 */
export function computeChainSkinWeight(
  point: THREE.Vector3,
  chainIndices: number[],
  chainPositions: THREE.Vector3[],
  sharpness = 3.2
): { indices: [number, number, number, number]; weights: [number, number, number, number] } {
  const scores: Array<{ idx: number; w: number }> = [];

  for (let i = 0; i < chainIndices.length; i++) {
    const bp = chainPositions[i];
    let dist = point.distanceTo(bp);

    // Also measure distance to segment toward next bone in chain for smooth tubular skinning
    if (i < chainIndices.length - 1) {
      const nextBp = chainPositions[i + 1];
      const seg = new THREE.Vector3().subVectors(nextBp, bp);
      const lenSq = seg.lengthSq();
      if (lenSq > 1e-6) {
        const t = Math.max(0, Math.min(1, new THREE.Vector3().subVectors(point, bp).dot(seg) / lenSq));
        const proj = new THREE.Vector3().copy(bp).addScaledVector(seg, t);
        dist = Math.min(dist, point.distanceTo(proj) + t * 0.08);
      }
    }

    const w = 1.0 / Math.pow(Math.max(0.035, dist), sharpness);
    scores.push({ idx: chainIndices[i], w });
  }

  scores.sort((a, b) => b.w - a.w);
  const top = scores.slice(0, 4);
  while (top.length < 4) top.push({ idx: 0, w: 0 });

  return normalizeSkinWeights(
    [top[0].idx, top[1].idx, top[2].idx, top[3].idx],
    [top[0].w, top[1].w, top[2].w, top[3].w]
  );
}
