import * as THREE from 'three';

export interface ScalePBRMaps {
  albedoMap: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
  aoMap: THREE.CanvasTexture;
  iridescenceThicknessMap: THREE.CanvasTexture;
  prostheticPasteNormalMap: THREE.CanvasTexture;
  prostheticPasteRoughnessMap: THREE.CanvasTexture;
}

function hash2(ix: number, iy: number, seed: number): [number, number, number] {
  let n = (ix * 374761393 + iy * 668265263 + seed * 1442695041) | 0;
  n = (n ^ (n >>> 13)) * 1274126177;
  const h1 = ((n ^ (n >>> 16)) >>> 0) / 4294967296;

  let m = (ix * 1103515245 + iy * 12345 + (seed + 7919) * 2654435761) | 0;
  m = (m ^ (m >>> 15)) * 2246822519;
  const h2 = ((m ^ (m >>> 13)) >>> 0) / 4294967296;

  let k = (ix * 73856093 + iy * 19349663 + (seed + 31337) * 83492791) | 0;
  k = (k ^ (k >>> 14)) * 1597334677;
  const h3 = ((k ^ (k >>> 15)) >>> 0) / 4294967296;

  return [h1, h2, h3];
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Evaluates periodic (seamless toroidal) Voronoi F1, F2 edge distance & per-cell ID
 * so reptile/Night Fury scales tile across UV seams without discontinuities.
 */
function samplePeriodicVoronoi(
  u: number,
  v: number,
  cellsX: number,
  cellsY: number,
  seed: number,
  aspectStretch = 1.0
): { edgeDist: number; centerDist: number; cellTone: number; cellAngle: number } {
  const gx = u * cellsX;
  const gy = v * cellsY;
  const ix0 = Math.floor(gx);
  const iy0 = Math.floor(gy);

  let d1 = 1e9;
  let d2 = 1e9;
  let bestTone = 0.5;
  let bestAngle = 0.0;
  let bestDx = 0;
  let bestDy = 0;

  for (let oy = -1; oy <= 1; oy++) {
    for (let ox = -1; ox <= 1; ox++) {
      const cx = ix0 + ox;
      const cy = iy0 + oy;
      const wx = ((cx % cellsX) + cellsX) % cellsX;
      const wy = ((cy % cellsY) + cellsY) % cellsY;
      const [jx, jy, tone] = hash2(wx, wy, seed);

      const px = cx + 0.14 + jx * 0.72;
      const py = cy + 0.14 + jy * 0.72;
      const dx = (px - gx) * aspectStretch;
      const dy = py - gy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < d1) {
        d2 = d1;
        d1 = dist;
        bestTone = tone;
        bestAngle = (jx - 0.5) * Math.PI;
        bestDx = dx;
        bestDy = dy;
      } else if (dist < d2) {
        d2 = dist;
      }
    }
  }

  // Exact distance-to-border approximation between two closest Voronoi seeds
  const edgeDist = Math.max(0, (d2 - d1) * 0.5);
  const directionalSlope = bestDx * Math.cos(bestAngle) + bestDy * Math.sin(bestAngle);
  return {
    edgeDist,
    centerDist: d1,
    cellTone: bestTone,
    cellAngle: directionalSlope,
  };
}

let cachedMaps: ScalePBRMaps | null = null;

export function generateToothlessScalePBRMaps(resolution = 1024): ScalePBRMaps {
  if (cachedMaps) return cachedMaps;

  const size = resolution;
  const heightField = new Float32Array(size * size);
  const roughField = new Float32Array(size * size);
  const aoField = new Float32Array(size * size);
  const toneField = new Float32Array(size * size);
  const iridField = new Float32Array(size * size);

  // Synthesize dual-scale Voronoi monitor-lizard / Night Fury obsidian scale mosaic
  const primaryCells = 28;
  const fineCells = 76;

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const idx = y * size + x;

      // Primary polygonal osteoderm scale lattice
      const macro = samplePeriodicVoronoi(u, v, primaryCells, primaryCells, 101, 1.08);
      // Secondary finer granular micro-tubercles inside crevices and fine skin zones
      const micro = samplePeriodicVoronoi(u, v, fineCells, fineCells, 409, 1.0);

      // Domed polygonal scale crown with subtle imbrication (slight directional tilt)
      const macroCrown = smoothstep(0.015, 0.24, macro.edgeDist);
      const microCrown = smoothstep(0.02, 0.28, micro.edgeDist);

      // Fine keratin micro-striae & battle micro-scratches across scale crowns
      const scratchWave =
        Math.sin((u * 135 + v * 47 + macro.cellTone * 6.28) * Math.PI * 2) *
        Math.sin((u * 29 - v * 113 + macro.cellTone * 3.14) * Math.PI * 2);
      const microScratch = scratchWave > 0.86 ? -0.055 * (scratchWave - 0.86) * 7.0 : 0.0;

      const imbrication = Math.max(-0.08, Math.min(0.08, macro.cellAngle * 0.11)) * macroCrown;
      const h =
        macroCrown * (0.76 + 0.14 * macro.cellTone) +
        microCrown * 0.22 * (1.0 - macroCrown * 0.55) +
        imbrication +
        microScratch * macroCrown;

      heightField[idx] = Math.max(0, Math.min(1, h));

      // Freshly-shed-snake satin sheen on crowns (~0.29-0.38), dry matte crevices (~0.84)
      const creaseFactor = 1.0 - macroCrown;
      const baseRough =
        0.30 +
        0.09 * (1.0 - macro.cellTone) +
        creaseFactor * 0.52 +
        (1.0 - microCrown) * 0.08 -
        microScratch * 0.4;
      roughField[idx] = Math.max(0.18, Math.min(0.95, baseRough));

      // Deep interstitial ambient occlusion between scales
      const ao = 0.24 + 0.76 * smoothstep(0.0, 0.16, macro.edgeDist) * (0.85 + 0.15 * microCrown);
      aoField[idx] = Math.max(0.15, Math.min(1.0, ao));

      // Subtle per-scale charcoal/obsidian tonal variation
      toneField[idx] = macro.cellTone * 0.7 + micro.cellTone * 0.3;

      // Per-scale thin-film interference thickness variation (drives teal-blue-violet iridescence)
      iridField[idx] = Math.max(
        0,
        Math.min(1, 0.32 + 0.58 * macro.cellTone * macroCrown + 0.1 * microCrown)
      );
    }
  }

  // Create canvases for glTF-serializable PBR maps
  const albedoCanvas = document.createElement('canvas');
  const normalCanvas = document.createElement('canvas');
  const roughCanvas = document.createElement('canvas');
  const aoCanvas = document.createElement('canvas');
  const iridCanvas = document.createElement('canvas');

  for (const c of [albedoCanvas, normalCanvas, roughCanvas, aoCanvas, iridCanvas]) {
    c.width = size;
    c.height = size;
  }

  const albedoCtx = albedoCanvas.getContext('2d')!;
  const normalCtx = normalCanvas.getContext('2d')!;
  const roughCtx = roughCanvas.getContext('2d')!;
  const aoCtx = aoCanvas.getContext('2d')!;
  const iridCtx = iridCanvas.getContext('2d')!;

  const albedoImg = albedoCtx.createImageData(size, size);
  const normalImg = normalCtx.createImageData(size, size);
  const roughImg = roughCtx.createImageData(size, size);
  const aoImg = aoCtx.createImageData(size, size);
  const iridImg = iridCtx.createImageData(size, size);

  const normalStrength = 3.6;

  for (let y = 0; y < size; y++) {
    const ym1 = (y - 1 + size) % size;
    const yp1 = (y + 1) % size;
    for (let x = 0; x < size; x++) {
      const xm1 = (x - 1 + size) % size;
      const xp1 = (x + 1) % size;
      const idx = y * size + x;
      const p4 = idx * 4;

      // 3x3 Scharr gradient filter for ultra-crisp, artifact-free tangent-space normals
      const tl = heightField[ym1 * size + xm1];
      const tc = heightField[ym1 * size + x];
      const tr = heightField[ym1 * size + xp1];
      const ml = heightField[y * size + xm1];
      const mr = heightField[y * size + xp1];
      const bl = heightField[yp1 * size + xm1];
      const bc = heightField[yp1 * size + x];
      const br = heightField[yp1 * size + xp1];

      const dX = ((tr + 3 * mr + br) - (tl + 3 * ml + bl)) * normalStrength;
      const dY = ((bl + 3 * bc + br) - (tl + 3 * tc + tr)) * normalStrength;

      let nx = -dX;
      let ny = -dY;
      let nz = 1.0;
      const invLen = 1.0 / Math.sqrt(nx * nx + ny * ny + nz * nz);
      nx *= invLen;
      ny *= invLen;
      nz *= invLen;

      normalImg.data[p4] = Math.round((nx * 0.5 + 0.5) * 255);
      normalImg.data[p4 + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      normalImg.data[p4 + 2] = Math.round((nz * 0.5 + 0.5) * 255);
      normalImg.data[p4 + 3] = 255;

      // Obsidian Night Fury Albedo: deep coal-black with subtle cool midnight-blue/teal undertone
      // Never pure (0,0,0) so physically-based indirect sky reflection & AO crevices read naturally
      const h = heightField[idx];
      const t = toneField[idx];
      const baseLum = 12 + h * 15 + t * 8;
      albedoImg.data[p4] = Math.round(baseLum * 0.86); // R (cool obsidian)
      albedoImg.data[p4 + 1] = Math.round(baseLum * 0.96); // G (faint slate-teal)
      albedoImg.data[p4 + 2] = Math.round(baseLum * 1.14); // B (subtle midnight-blue)
      albedoImg.data[p4 + 3] = 255;

      const rByte = Math.round(roughField[idx] * 255);
      roughImg.data[p4] = rByte;
      roughImg.data[p4 + 1] = rByte;
      roughImg.data[p4 + 2] = rByte;
      roughImg.data[p4 + 3] = 255;

      const aoByte = Math.round(aoField[idx] * 255);
      aoImg.data[p4] = aoByte;
      aoImg.data[p4 + 1] = aoByte;
      aoImg.data[p4 + 2] = aoByte;
      aoImg.data[p4 + 3] = 255;

      const irByte = Math.round(iridField[idx] * 255);
      iridImg.data[p4] = irByte;
      iridImg.data[p4 + 1] = irByte;
      iridImg.data[p4 + 2] = irByte;
      iridImg.data[p4 + 3] = 255;
    }
  }

  albedoCtx.putImageData(albedoImg, 0, 0);
  normalCtx.putImageData(normalImg, 0, 0);
  roughCtx.putImageData(roughImg, 0, 0);
  aoCtx.putImageData(aoImg, 0, 0);
  iridCtx.putImageData(iridImg, 0, 0);

  const configureRepeat = (tex: THREE.CanvasTexture, isSRGB = false, repeat = 7) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeat);
    tex.anisotropy = 8;
    tex.colorSpace = isSRGB ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    tex.needsUpdate = true;
    return tex;
  };

  // Brushed fireproof Night-Fury-scale-paste texture for Hiccup's Hidden World prosthetic fin
  const pasteSize = 512;
  const pasteNormalCanvas = document.createElement('canvas');
  const pasteRoughCanvas = document.createElement('canvas');
  pasteNormalCanvas.width = pasteSize;
  pasteNormalCanvas.height = pasteSize;
  pasteRoughCanvas.width = pasteSize;
  pasteRoughCanvas.height = pasteSize;

  const pNormCtx = pasteNormalCanvas.getContext('2d')!;
  const pRoughCtx = pasteRoughCanvas.getContext('2d')!;
  const pNormImg = pNormCtx.createImageData(pasteSize, pasteSize);
  const pRoughImg = pRoughCtx.createImageData(pasteSize, pasteSize);
  const pasteHeight = new Float32Array(pasteSize * pasteSize);

  for (let y = 0; y < pasteSize; y++) {
    const v = y / pasteSize;
    for (let x = 0; x < pasteSize; x++) {
      const u = x / pasteSize;
      const idx = y * pasteSize + x;
      // Artisanal resin brush strokes + crushed Night Fury scale flecks
      const brush =
        Math.sin(v * 92 * Math.PI * 2 + Math.sin(u * 9 * Math.PI * 2) * 1.4) * 0.25 +
        Math.sin(v * 210 * Math.PI * 2 + u * 18) * 0.12;
      const fleck = samplePeriodicVoronoi(u, v, 44, 44, 887, 1.0);
      const crushedFleck = smoothstep(0.08, 0.22, fleck.edgeDist) * (fleck.cellTone > 0.45 ? 0.55 : 0.15);
      pasteHeight[idx] = 0.5 + brush * 0.35 + crushedFleck * 0.4;
    }
  }

  for (let y = 0; y < pasteSize; y++) {
    const ym1 = (y - 1 + pasteSize) % pasteSize;
    const yp1 = (y + 1) % pasteSize;
    for (let x = 0; x < pasteSize; x++) {
      const xm1 = (x - 1 + pasteSize) % pasteSize;
      const xp1 = (x + 1) % pasteSize;
      const idx = y * pasteSize + x;
      const p4 = idx * 4;
      const dX = (pasteHeight[y * pasteSize + xp1] - pasteHeight[y * pasteSize + xm1]) * 2.4;
      const dY = (pasteHeight[yp1 * pasteSize + x] - pasteHeight[ym1 * pasteSize + x]) * 2.4;
      const inv = 1.0 / Math.sqrt(dX * dX + dY * dY + 1.0);

      pNormImg.data[p4] = Math.round((-dX * inv * 0.5 + 0.5) * 255);
      pNormImg.data[p4 + 1] = Math.round((-dY * inv * 0.5 + 0.5) * 255);
      pNormImg.data[p4 + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      pNormImg.data[p4 + 3] = 255;

      const rVal = Math.round((0.36 + (1.0 - pasteHeight[idx]) * 0.28) * 255);
      pRoughImg.data[p4] = rVal;
      pRoughImg.data[p4 + 1] = rVal;
      pRoughImg.data[p4 + 2] = rVal;
      pRoughImg.data[p4 + 3] = 255;
    }
  }
  pNormCtx.putImageData(pNormImg, 0, 0);
  pRoughCtx.putImageData(pRoughImg, 0, 0);

  cachedMaps = {
    albedoMap: configureRepeat(new THREE.CanvasTexture(albedoCanvas), true, 7),
    normalMap: configureRepeat(new THREE.CanvasTexture(normalCanvas), false, 7),
    roughnessMap: configureRepeat(new THREE.CanvasTexture(roughCanvas), false, 7),
    aoMap: configureRepeat(new THREE.CanvasTexture(aoCanvas), false, 7),
    iridescenceThicknessMap: configureRepeat(new THREE.CanvasTexture(iridCanvas), false, 7),
    prostheticPasteNormalMap: configureRepeat(new THREE.CanvasTexture(pasteNormalCanvas), false, 3),
    prostheticPasteRoughnessMap: configureRepeat(new THREE.CanvasTexture(pasteRoughCanvas), false, 3),
  };

  return cachedMaps;
}
