import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { AtmosphereSharedUniforms, SHARED_SKY_GLSL } from './NordicAtmosphere';
import { createNorthSeaOcean, NorthSeaOceanController } from './NorthSeaOcean';

export interface NordicWorldScene {
  group: THREE.Group;
  ocean: NorthSeaOceanController;
  update: (timeSec: number) => void;
}

export const SEA_LEVEL_Y = -11.5;
// Continuous submarine seafloor sits around -25.5m, while ALL island/mountain skirts plunge to -44.0m
// (18.5m BELOW the solid seafloor!) so ZERO rectangular mesh borders can ever appear from high altitudes!
export const SEAFLOOR_BASE_Y = -25.5;
const ISLAND_SKIRT_BASE_Y = -44.0;

function fract(x: number): number {
  return x - Math.floor(x);
}

function hash2D(x: number, y: number): number {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

function valueNoise2D(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  // Quintic C2-continuous Perlin fade so horizontal island meadows are silky-smooth without grid creases!
  const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
  const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);
  const a = hash2D(ix, iy);
  const b = hash2D(ix + 1, iy);
  const c = hash2D(ix, iy + 1);
  const d = hash2D(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function fbm2D(x: number, y: number, octaves = 4): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1.0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise2D(x * freq, y * freq);
    freq *= 2.03;
    amp *= 0.5;
  }
  return sum;
}

function smoothstep(e0: number, e1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

/**
 * Angular tectonic / basalt-cleavage ridge noise in [0, 1].
 * Uses a tighter hyperboloid crest (0.018) to form realistic glaciated mountain ridgelines,
 * angular coastal cliff spurs, and vertical basalt fracture ribs without infinite-slope aliasing.
 */
function roundedRidge2D(x: number, y: number, octaves = 3): number {
  let sum = 0;
  let weight = 1.0;
  let amp = 0.54;
  let freq = 1.0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = valueNoise2D(x * freq, y * freq) * 2.0 - 1.0;
    const ridge = 1.0 - (Math.sqrt(n * n + 0.018) - 0.134) / 0.88;
    const clamped = Math.max(0, Math.min(1, ridge));
    sum += amp * clamped * weight;
    norm += amp;
    weight = 0.48 + 0.52 * clamped;
    freq *= 2.07;
    amp *= 0.48;
  }
  return sum / Math.max(1e-4, norm);
}

/**
 * Evaluates Faroese / Icelandic horizontal basalt trap terraces ("hamrar"):
 * Alternates gently inclined, concave-sweeping grassy dip-benches with crisp, steeper exposed
 * basalt lava-flow risers so hillsides have authentic volcanic-glacial curvature instead of round domes.
 */
function applyBasaltHamrarTerraces(
  rawHeight: number,
  bedTiltOffset: number,
  stepHeight: number,
  benchStrength: number
): number {
  if (rawHeight <= 0.4) return rawHeight;
  const bed = (rawHeight + bedTiltOffset) / stepHeight;
  const k = Math.floor(bed);
  const f = bed - k;
  // Concave-upward grassy bench (0..0.70) rising into a crisp basalt rock riser (0.70..0.98)
  const benchProfile = 0.34 * Math.pow(f, 1.35) + 0.66 * smoothstep(0.66, 0.96, f);
  const terraced = (k + benchProfile) * stepHeight - bedTiltOffset;
  return THREE.MathUtils.lerp(rawHeight, terraced, benchStrength);
}

/**
 * Evaluates a realistic stepped, fractured basalt sea-cliff descent from uplandY down to seaShelfY:
 * Incorporates an irregular mid-cliff lava-flow bench, angular vertical buttress ribs, and recessed
 * wave-cut gullies directly inside the monotonic heightfield (100% free of triangle folding!).
 */
function evalSteppedRockyCliffDescent(
  uplandY: number,
  seaShelfY: number,
  cliffT: number,
  wx: number,
  wz: number,
  seed: number
): number {
  const t = Math.max(0, Math.min(1, cliffT));
  // Irregular mid-cliff basalt ledge / bench (like Mulafossur & Reynisfjara cliffs)
  const benchPresence = smoothstep(
    0.34,
    0.76,
    fbm2D(wx * 0.065 + seed * 1.7, wz * 0.065 - seed * 1.3, 2)
  );
  const benchLevel = 0.38 + 0.18 * (fbm2D(wx * 0.09 - seed, wz * 0.09 + seed, 2) - 0.5);

  const upperScarp = smoothstep(0.0, 0.44, t);
  const lowerScarp = smoothstep(0.56, 1.0, t);
  const steppedFrac =
    upperScarp * benchLevel + lowerScarp * (1.0 - benchLevel);
  const sheerFrac = Math.pow(t, 0.78);
  const baseFrac = THREE.MathUtils.lerp(sheerFrac, steppedFrac, benchPresence * 0.72);

  // Angular vertical rocky buttress ribs & recessed fracture chutes along the cliff face
  const ribNoise = roundedRidge2D(wx * 0.14 + seed * 2.1, wz * 0.14 - seed * 1.9, 3);
  const blockFracture = fbm2D(wx * 0.28 - seed, wz * 0.28 + seed * 2.3, 2) - 0.5;
  const midFaceEnvelope = Math.sin(Math.min(1, t) * Math.PI);
  const rockRibLift = ((ribNoise - 0.46) * 3.2 + blockFracture * 1.35) * midFaceEnvelope;

  const rawCliffY = THREE.MathUtils.lerp(uplandY, seaShelfY, baseFrac) + rockRibLift;
  return Math.min(uplandY + 0.12, Math.max(seaShelfY - 1.2, rawCliffY));
}

/**
 * Evaluates crisp, bounded basalt block & columnar fracture relief strictly on vertical cliff walls
 * (kept <= 0.68m so adjacent PlaneGeometry triangles never invert or self-intersect).
 */
function evalCliffWallStrataAndButtresses(
  wx: number,
  wz: number,
  wy: number,
  seed: number
): { radialOffset: number; verticalLedgeOffset: number } {
  const columnRibs =
    (roundedRidge2D(wx * 0.16 + seed, wz * 0.16 - seed, 2) - 0.48) * 0.68 +
    (fbm2D(wx * 0.32 - seed * 1.3, wz * 0.32 + seed * 0.7, 2) - 0.5) * 0.28;

  const bedTilt = wx * 0.024 - wz * 0.019 + (fbm2D(wx * 0.045 + seed, wz * 0.045, 2) - 0.5) * 1.4;
  const bedCoord = (wy + bedTilt) / 2.65;
  const bedFrac = bedCoord - Math.floor(bedCoord);
  const stepLedge = (smoothstep(0.10, 0.36, bedFrac) - bedFrac) * 0.34;

  const basalPlinth = Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.45)) / 1.9, 2.0)) * 0.62;

  return {
    radialOffset: columnRibs + stepLedge + basalPlinth,
    verticalLedgeOffset: stepLedge * 0.42,
  };
}

export const TOOTHLESS_PERCH_POSE = {
  position: new THREE.Vector3(4.45, 0.0, 0.22),
  yaw: -0.14,
};

export const LIGHT_FURY_PERCH_POSE = {
  position: new THREE.Vector3(-4.45, 0.0, -0.22),
  yaw: 0.16,
};

/**
 * Evaluates the Twin-Dragon Nordic Basalt Promontory at (x, z):
 * - Protects ONLY the two localized dragon paw-stance pads around (+4.45, +0.22) and (-4.45, -0.22)
 *   so all 8 paws rest cleanly at y = 0.0000m.
 * - Shapes the southern (+Z) jump-off cliff right in front of the dragons into a dramatic, irregular,
 *   fractured basalt precipice with projecting rock prows, recessed sea-clefts, and stepped rock ledges.
 * - Sculpts the northern headland behind the dragons into an asymmetric tilted ridge with basalt "hamrar" terraces.
 */
export function sampleHeroCliffHeight(x: number, z: number): number {
  // Localized paw-stance clearings so ONLY the immediate dragon footprints are flat, NOT the front cliff brink!
  const dToothless = Math.hypot((x - 4.45) / 2.45, (z - 0.22) / 1.95);
  const dLightFury = Math.hypot((x + 4.45) / 2.45, (z + 0.22) / 1.95);
  const minStanceDist = Math.min(dToothless, dLightFury);
  const pawPadFlat = smoothstep(0.84, 1.32, minStanceDist);

  // Full-strength angular coastal fracture & headland warping all around the cliff perimeter (including z > +1.8m!)
  const rimWarpMask = smoothstep(0.72, 1.18, minStanceDist);
  const fractureMacroX =
    (fbm2D(x * 0.065 + 3.1, z * 0.065 - 2.4, 3) - 0.5) * 5.6 +
    (roundedRidge2D(x * 0.14 - 1.7, z * 0.14 + 4.3, 2) - 0.48) * 2.3;
  const fractureMacroZ =
    (fbm2D(x * 0.065 - 5.2, z * 0.065 + 1.9, 3) - 0.5) * 4.8 +
    (roundedRidge2D(x * 0.15 + 2.9, z * 0.15 - 3.1, 2) - 0.48) * 2.1;

  const wx = x + rimWarpMask * fractureMacroX;
  const wz = z + rimWarpMask * fractureMacroZ;

  const ang = Math.atan2(wz + 4.2, wx);
  const frontPinch = z > 1.2 ? 0.66 : z < -8.0 ? 1.52 : 1.0 + (-z + 1.2) * 0.046;
  const naturalEmbayments =
    1.0 +
    0.19 * Math.sin(ang * 2.0 - 0.42) +
    0.14 * Math.sin(ang * 3.0 + 0.72) +
    0.10 * Math.cos(ang * 5.0 - 1.15) +
    0.06 * Math.sin(ang * 7.0 + 0.4);

  const normX = wx / (15.8 * naturalEmbayments);
  const normZ = (wz + 4.2) / (11.2 * frontPinch * naturalEmbayments);
  let perchDist = Math.sqrt(normX * normX + normZ * normZ);

  // Dramatic, irregular jump-off cliff prows & wave-cut fracture clefts right on the southern (+Z) edge!
  if (z > 0.6) {
    // Bold rocky crag prow jutting seaward ahead of Toothless (+X)
    const eastProw = Math.exp(-Math.pow((x - 4.85) / 2.65, 2) - Math.pow((z - 3.9) / 3.4, 2)) * 0.21;
    // Bold rocky crag spur jutting seaward ahead of Light Fury (-X)
    const westProw = Math.exp(-Math.pow((x + 5.15) / 2.75, 2) - Math.pow((z - 3.6) / 3.2, 2)) * 0.19;
    // Asymmetric central fracture notch / sea-gully ("gjogv") indenting between the two prows
    const centerCleft = Math.exp(-Math.pow((x - 0.35) / 1.75, 2) - Math.pow((z - 2.9) / 2.8, 2)) * 0.17;
    // Secondary flanking crag buttresses & clefts so the cliff line zig-zags like real fractured basalt
    const outerEastSpur = Math.exp(-Math.pow((x - 10.6) / 2.4, 2) - Math.pow((z - 2.2) / 3.2, 2)) * 0.18;
    const outerWestCleft = Math.exp(-Math.pow((x + 9.2) / 1.9, 2) - Math.pow((z - 2.4) / 2.9, 2)) * 0.15;
    const fineRimJagged =
      (roundedRidge2D(x * 0.26 + 7.4, z * 0.26 - 3.8, 2) - 0.48) * 0.11 * smoothstep(1.1, 2.4, z);

    perchDist += -eastProw - westProw + centerCleft - outerEastSpur + outerWestCleft + fineRimJagged;
  }

  // Connected North-Western asymmetric cuesta headland & rocky sea-scarp
  let nwHillBoost = 0.0;
  if (z < -3.5) {
    const nwDX = (wx + 17.5) / 15.4;
    const nwDZ = (wz + 25.0) / 18.8;
    const nwRaw = Math.sqrt(nwDX * nwDX + nwDZ * nwDZ);
    const nwLobeDist = nwRaw * (0.92 + 0.16 * fbm2D(x * 0.065 + 2.2, z * 0.065 - 1.4, 3));
    const hBlend = Math.max(0, 1.0 - Math.abs(perchDist - nwLobeDist) / 0.52);
    perchDist = Math.min(perchDist, nwLobeDist) - 0.11 * hBlend * hBlend;

    // Concave-sweeping dip-slope rising toward a sharp NW seaward escarpment (not a round dome!)
    const nwSlopeSweep = Math.pow(Math.max(0, 1.0 - nwRaw / 0.96), 0.82);
    const nwTilt = THREE.MathUtils.clamp(0.62 - nwDX * 0.42 - nwDZ * 0.25, 0.22, 1.18);
    const nwRawH =
      nwSlopeSweep * nwTilt * (8.4 + 3.2 * roundedRidge2D(x * 0.055 + 5.1, z * 0.055 - 3.2, 3));
    nwHillBoost = applyBasaltHamrarTerraces(nwRawH, x * 0.04 - z * 0.03, 3.6, 0.58);
  }

  // Angular wave-cut sea-cove indenting the NE cliff wall
  if (x > 9.0 && z < -6.5) {
    const coveDX = (x - 18.2) / 6.2;
    const coveDZ = (z + 19.2) / 7.2;
    const coveIndent = Math.exp(-(coveDX * coveDX + coveDZ * coveDZ)) * 0.36;
    perchDist += coveIndent;
  }

  // Keep camera sightline in front of the dragons low while sculpting natural rocky turf benches & outcrops
  const sightlineLowMask =
    1.0 - 0.78 * smoothstep(-0.4, 4.2, z) * (1.0 - smoothstep(4.2, 11.8, Math.abs(x)));
  const coastalMicroRelief =
    ((fbm2D(x * 0.095 + 4.2, z * 0.095 - 1.7, 3) - 0.47) * 1.45 +
      (roundedRidge2D(x * 0.16 - 2.3, z * 0.16 + 6.1, 2) - 0.46) * 0.62) *
    pawPadFlat *
    sightlineLowMask;

  // Asymmetric glaciated headland ridge & stepped basalt "hamrar" terraces rising behind the dragons (z < -6.2m)
  const northDist = Math.max(0, (-z - 6.2) / 24.0);
  const concaveValleySweep = Math.pow(Math.min(1.35, northDist), 1.38);
  const lateralEnv = smoothstep(39.0, 8.0, Math.abs(x + 3.2));
  const ridgeCrest = roundedRidge2D(x * 0.052 + 1.8, z * 0.048 - 2.7, 3);
  const rawBackHighland =
    concaveValleySweep * lateralEnv * (7.8 + 8.6 * ridgeCrest + (fbm2D(x * 0.08 - 3.4, z * 0.08 + 1.9, 2) - 0.5) * 3.2);
  const backHighland = applyBasaltHamrarTerraces(rawBackHighland, x * 0.05 + z * 0.03, 4.2, 0.64);

  const uplandSurfaceY = coastalMicroRelief + Math.max(backHighland, nwHillBoost * pawPadFlat);

  // Irregular fractured cliff brink with angular rock spurs & notches
  const brinkIrreg =
    0.11 * (roundedRidge2D(x * 0.13 + 3.7, z * 0.13 - 2.1, 2) - 0.48) +
    0.07 * (fbm2D(Math.cos(ang) * 2.4 + 2.1, Math.sin(ang) * 2.4 - 1.3, 3) - 0.5);
  const brinkStart = 0.77 + brinkIrreg * rimWarpMask;
  if (perchDist <= brinkStart) {
    return uplandSurfaceY;
  }

  const cliffFall = smoothstep(brinkStart, 1.54, perchDist);
  const deepSkirt = smoothstep(1.42, 2.24, perchDist);
  const seaShelfY = SEA_LEVEL_Y - 1.85;
  const upperCliffY = evalSteppedRockyCliffDescent(uplandSurfaceY, seaShelfY, cliffFall, x, z, 7.3);
  return THREE.MathUtils.lerp(upperCliffY, ISLAND_SKIRT_BASE_Y, deepSkirt);
}

interface ArchipelagoIslandDef {
  name: string;
  centerX: number;
  centerZ: number;
  spanX: number;
  spanZ: number;
  gridSegs: number;
  hasFlora?: boolean;
  evalHeight: (worldX: number, worldZ: number) => number;
}

/**
 * Builds an Authentic North-Atlantic / Faroese Volcanic-Glacial Coastal Island:
 * - Replaces uniform round domes with asymmetric tilted cuesta dip-slopes, concave-upward glaciated
 *   valleys ("botnar"), crisp ridgelines, and horizontal basalt trap rock benches ("hamrar").
 * - Surrounded by irregular, stepped, fractured basalt sea-cliffs with vertical buttress ribs.
 * - When carveRiverToEast is true, carves a sheer Mulafossur-style basalt sea-cove amphitheater so the
 *   waterfall leaps cleanly from the rocky lip straight into deep open ocean water!
 */
function makeNaturalNordicIslandFn(opts: {
  cx: number;
  cz: number;
  rx: number;
  rz: number;
  peakY: number;
  summitOffset?: { dx: number; dz: number };
  seed: number;
  rotRad: number;
  secondaryLobe?: {
    dx: number;
    dz: number;
    rx: number;
    rz: number;
    peakScale: number;
    lowSaddle?: boolean;
  };
  carveRiverToEast?: boolean;
}): (wx: number, wz: number) => number {
  const cosR = Math.cos(opts.rotRad);
  const sinR = Math.sin(opts.rotRad);
  const sumOffX = opts.summitOffset?.dx ?? opts.rx * 0.24 * Math.sin(opts.seed);
  const sumOffZ = opts.summitOffset?.dz ?? opts.rz * -0.20 * Math.cos(opts.seed * 1.3);
  // Structural lava-bedding dip direction for asymmetric cuesta tilt (like Tindholmur & Vagar!)
  const dipAngle = opts.seed * 1.37;
  const dipCos = Math.cos(dipAngle);
  const dipSin = Math.sin(dipAngle);

  return (wx: number, wz: number): number => {
    const dx = wx - opts.cx;
    const dz = wz - opts.cz;
    const lx = dx * cosR - dz * sinR;
    const lz = dx * sinR + dz * cosR;

    // Angular coastline headlands, rocky peninsulas & recessed sea-clefts
    const warpX =
      lx +
      (fbm2D(lx * 0.038 + opts.seed, lz * 0.038 - opts.seed, 3) - 0.5) * (opts.rx * 0.40) +
      (roundedRidge2D(lx * 0.095 + opts.seed, lz * 0.095, 2) - 0.48) * (opts.rx * 0.14);
    const warpZ =
      lz +
      (fbm2D(lx * 0.038 - opts.seed, lz * 0.038 + opts.seed, 3) - 0.5) * (opts.rz * 0.40) +
      (roundedRidge2D(lx * 0.095 - opts.seed, lz * 0.095 + 2.1, 2) - 0.48) * (opts.rz * 0.14);

    const ang = Math.atan2(warpZ, warpX);
    const lobe =
      1.0 +
      0.19 * Math.sin(ang * 2.0 + opts.seed) +
      0.13 * Math.cos(ang * 3.0 - opts.seed * 1.5) +
      0.08 * Math.sin(ang * 5.0 + 0.9);

    const rPrimary = Math.sqrt(
      Math.pow(warpX / (opts.rx * lobe), 2) + Math.pow(warpZ / (opts.rz * lobe), 2)
    );
    let rNorm = rPrimary;

    // Asymmetric tilted cuesta + concave-flanked ridge profile (NEVER a round hamburger-bun dome!)
    const rSumPrimary = Math.sqrt(
      Math.pow((warpX - sumOffX) / (opts.rx * lobe * 0.98), 2) +
        Math.pow((warpZ - sumOffZ) / (opts.rz * lobe * 0.98), 2)
    );
    const dipCoord = (lx * dipCos + lz * dipSin) / Math.max(8.0, opts.rx);
    // Concave-upward sweep along the structural dip-slope rising toward the asymmetric escarpment crest
    const cuestaTilt = THREE.MathUtils.clamp(0.58 + 0.46 * dipCoord, 0.24, 1.22);
    const concaveFlank = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSumPrimary / 1.02)), 0.86);
    const sharpCrest = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSumPrimary / 0.78)), 1.65);
    let baseHillY =
      opts.peakY * (0.22 + 0.52 * concaveFlank * cuestaTilt + 0.34 * sharpCrest);

    if (opts.secondaryLobe) {
      const sl = opts.secondaryLobe;
      const sx = warpX - sl.dx;
      const sz = warpZ - sl.dz;
      const sAng = Math.atan2(sz, sx);
      const sLobe =
        1.0 + 0.16 * Math.cos(sAng * 2.0 - opts.seed) + 0.11 * Math.sin(sAng * 3.0 + opts.seed);
      const rSec = Math.sqrt(Math.pow(sx / (sl.rx * sLobe), 2) + Math.pow(sz / (sl.rz * sLobe), 2));
      const kSmooth = sl.lowSaddle ? 0.44 : 0.36;
      const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (rSec - rNorm)) / kSmooth));
      rNorm = rSec * (1 - h) + rNorm * h - kSmooth * h * (1 - h);

      const secPeakY = opts.peakY * sl.peakScale;
      const secFlank = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSec / 0.98)), 0.88);
      const secCrest = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSec / 0.72)), 1.60);
      const secHillY = secPeakY * (0.24 + 0.48 * secFlank + 0.34 * secCrest);
      // Concave U-shaped glacial saddle ("botn") carved between the twin peaks
      const saddleDip = sl.lowSaddle ? Math.sin(h * Math.PI) * 0.46 : Math.sin(h * Math.PI) * 0.24;
      baseHillY = THREE.MathUtils.lerp(secHillY, baseHillY, h) * (1.0 - saddleDip);
    }

    // Crisp glaciated ridge spine + concave valley swales + basalt "hamrar" rock terraces!
    const interiorMask = 1.0 - smoothstep(0.58, 1.04, rNorm);
    const ridgeSpine = roundedRidge2D(
      lx * 0.036 + opts.seed * 1.3,
      lz * 0.044 - opts.seed * 0.9,
      3
    );
    const valleySwale = Math.pow(fbm2D(lx * 0.048 - opts.seed * 0.7, lz * 0.048 + opts.seed * 1.4, 3), 1.45);

    const rawUplandY =
      baseHillY +
      (ridgeSpine - 0.42) * (opts.peakY * 0.34) * (0.30 + 0.70 * interiorMask) +
      (valleySwale - 0.36) * (opts.peakY * 0.16) * interiorMask;

    let topSurfaceY = applyBasaltHamrarTerraces(
      rawUplandY,
      lx * 0.035 * dipCos + lz * 0.035 * dipSin,
      Math.max(3.6, opts.peakY * 0.21),
      0.56
    );

    // Mulafossur-style upland river notch & sheer dark-basalt sea-cove amphitheater on the eastern (+lx) cliff!
    let inWaterfallCove = 0.0;
    if (opts.carveRiverToEast && lx > -opts.rx * 0.55) {
      const streamCenterLZ = Math.sin(lx * 0.11 + 0.35) * 1.85;
      const distFromStream = Math.abs(lz - streamCenterLZ);
      const valleyProfile = 1.0 - smoothstep(1.35, 6.4, distFromStream);
      if (valleyProfile > 0.001) {
        const targetBedY = 11.2 - smoothstep(-opts.rx * 0.45, 10.6, lx) * 3.1;
        topSurfaceY = THREE.MathUtils.lerp(topSurfaceY, Math.min(topSurfaceY, targetBedY), valleyProfile);
      }

      // Carve a sheer concave ocean amphitheater cove right at lx >= 10.6m so the waterfall plunges cleanly into open sea!
      const coveWidthMask = Math.exp(-Math.pow((lz - streamCenterLZ) / 7.8, 2.0));
      if (coveWidthMask > 0.02 && lx > 7.5) {
        const coveLipX = 10.6 - 1.15 * coveWidthMask;
        inWaterfallCove = smoothstep(coveLipX - 0.6, coveLipX + 0.9, lx) * coveWidthMask;
        rNorm = Math.max(rNorm, 0.72 + smoothstep(coveLipX - 0.2, coveLipX + 1.15, lx) * 0.72 * coveWidthMask);
      }
    }

    const brinkIrreg =
      0.10 * (roundedRidge2D(lx * 0.11 + opts.seed, lz * 0.11 - opts.seed, 2) - 0.48) +
      0.08 * (fbm2D(Math.cos(ang) * 2.2 + opts.seed, Math.sin(ang) * 2.2 - opts.seed, 2) - 0.5);
    const brinkR = 0.68 + brinkIrreg * (1.0 - inWaterfallCove * 0.7);
    if (rNorm <= brinkR) {
      return topSurfaceY;
    }

    // Sheer vertical cliff drop inside the waterfall amphitheater; stepped rocky basalt cliffs around the rest!
    const cliffSpanEnd = THREE.MathUtils.lerp(1.06, brinkR + 0.09, inWaterfallCove);
    const cliffDrop = smoothstep(brinkR, cliffSpanEnd, rNorm);
    const submarinePlunge = smoothstep(
      THREE.MathUtils.lerp(1.00, brinkR + 0.07, inWaterfallCove),
      THREE.MathUtils.lerp(1.36, brinkR + 0.24, inWaterfallCove),
      rNorm
    );
    const seaShelfY = THREE.MathUtils.lerp(SEA_LEVEL_Y - 1.85, SEA_LEVEL_Y - 5.8, inWaterfallCove);
    const aboveSubShelf =
      inWaterfallCove > 0.35
        ? THREE.MathUtils.lerp(topSurfaceY, seaShelfY, Math.pow(cliffDrop, 0.65))
        : evalSteppedRockyCliffDescent(topSurfaceY, seaShelfY, cliffDrop, wx, wz, opts.seed);
    return THREE.MathUtils.lerp(aboveSubShelf, ISLAND_SKIRT_BASE_Y, submarinePlunge);
  };
}

/**
 * Builds an Asymmetric Glaciated Crescent / Breached-Caldera Island:
 * - Steep, stepped rocky outer sea-cliffs & crisp asymmetric ridge crest sweeping down a
 *   concave grassy inner slope ("botn") toward a sheltered turquoise lagoon.
 */
function makeNaturalCrescentIslandFn(opts: {
  cx: number;
  cz: number;
  ringRadius: number;
  ringHalfWidth: number;
  peakY: number;
  openAngleRad: number;
  arcHalfSpanRad: number;
  seed: number;
}): (wx: number, wz: number) => number {
  return (wx: number, wz: number): number => {
    const dx = wx - opts.cx;
    const dz = wz - opts.cz;

    const wxWarp =
      dx +
      (fbm2D(dx * 0.035 + opts.seed, dz * 0.035 - opts.seed, 3) - 0.5) * (opts.ringRadius * 0.28) +
      (roundedRidge2D(dx * 0.09 + opts.seed, dz * 0.09, 2) - 0.48) * 3.4;
    const wzWarp =
      dz +
      (fbm2D(dx * 0.035 - opts.seed, dz * 0.035 + opts.seed, 3) - 0.5) * (opts.ringRadius * 0.28) +
      (roundedRidge2D(dx * 0.09 - opts.seed, dz * 0.09 + 1.7, 2) - 0.48) * 3.4;

    const r = Math.hypot(wxWarp, wzWarp);
    const ang = Math.atan2(wzWarp, wxWarp);

    const spineCenterAng = opts.openAngleRad + Math.PI;
    let dAng = ang - spineCenterAng;
    while (dAng > Math.PI) dAng -= Math.PI * 2;
    while (dAng < -Math.PI) dAng += Math.PI * 2;
    const absAng = Math.abs(dAng);

    const hornMask = 1.0 - smoothstep(opts.arcHalfSpanRad * 0.72, opts.arcHalfSpanRad * 1.08, absAng);
    const widthMod =
      opts.ringHalfWidth * (0.70 + 0.42 * hornMask + 0.16 * Math.sin(dAng * 2.6 + opts.seed));

    // Strongly asymmetric cuesta cross-section: sheer outer sea-scarp, sweeping concave inner lagoon slope!
    const signedFromSpine = r - opts.ringRadius * 1.06;
    const asymWidth = signedFromSpine >= 0 ? widthMod * 0.68 : widthMod * 1.28;
    const radialDistFromSpine = Math.abs(signedFromSpine) / Math.max(3.5, asymWidth);
    const effectiveDist = radialDistFromSpine + (1.0 - hornMask) * 1.35;

    const arcPeaks =
      0.70 +
      0.26 * Math.cos(dAng * 2.5 + opts.seed * 0.7) +
      0.15 * Math.sin(dAng * 4.2 - opts.seed);
    const ridgeCrest = roundedRidge2D(dx * 0.042 + opts.seed, dz * 0.042 - opts.seed, 3);
    // Concave-flanked asymmetric ridge crown (not a round tube!)
    const crossProfile =
      signedFromSpine < 0
        ? Math.pow(Math.max(0, 1.0 - Math.min(1.0, effectiveDist / 0.96)), 1.48)
        : Math.pow(Math.max(0, 1.0 - Math.min(1.0, effectiveDist / 0.84)), 0.85);

    const rawRidgeY =
      opts.peakY * (0.24 + 0.76 * crossProfile) * (0.56 + 0.44 * hornMask) * arcPeaks +
      (ridgeCrest - 0.42) * (opts.peakY * 0.28) * hornMask;

    const ridgeTopY = applyBasaltHamrarTerraces(
      rawRidgeY,
      dx * 0.03 - dz * 0.025,
      Math.max(3.4, opts.peakY * 0.22),
      0.52
    );

    const insideLagoon = (1.0 - smoothstep(opts.ringRadius * 0.55, opts.ringRadius * 1.15, r)) * 0.65;
    const floorTargetY = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, -16.2, insideLagoon);

    const brinkDist =
      0.56 + 0.11 * (roundedRidge2D(dx * 0.10 + opts.seed, dz * 0.10 - opts.seed, 2) - 0.48);
    if (effectiveDist <= brinkDist) {
      return ridgeTopY;
    }

    const cliffDrop = smoothstep(brinkDist, 1.05, effectiveDist);
    const subPlunge = smoothstep(0.98, 1.36, effectiveDist);
    const seaBenchY = SEA_LEVEL_Y - 1.85;
    const upperY = evalSteppedRockyCliffDescent(ridgeTopY, seaBenchY, cliffDrop, wx, wz, opts.seed);
    return THREE.MathUtils.lerp(upperY, floorTargetY, subPlunge);
  };
}

// ============================================================================
// SHARED MULTI-BELT NORDIC ARCHIPELAGO DEFINITIONS (Natural Rolling Hills, Ridges & Sea-Cliffs!)
// ============================================================================
const evalWestWaterfallIsland = makeNaturalNordicIslandFn({
  cx: -66.0,
  cz: -32.0,
  rx: 21.5,
  rz: 25.0,
  peakY: 18.4,
  summitOffset: { dx: -3.5, dz: -7.5 },
  seed: 5.7,
  rotRad: 0.18,
  secondaryLobe: { dx: -24.5, dz: -11.5, rx: 17.5, rz: 19.5, peakScale: 1.24 },
  carveRiverToEast: true,
});

const evalStarboardCrescentAtoll = makeNaturalCrescentIslandFn({
  cx: 88.0,
  cz: 36.0,
  ringRadius: 28.0,
  ringHalfWidth: 12.6,
  peakY: 16.8,
  openAngleRad: -2.45,
  arcHalfSpanRad: 1.92,
  seed: 22.9,
});

const evalEastSerpentineTomboloIsland = makeNaturalNordicIslandFn({
  cx: 88.0,
  cz: -56.0,
  rx: 25.0,
  rz: 31.5,
  peakY: 22.4,
  summitOffset: { dx: 4.2, dz: -6.0 },
  seed: 14.3,
  rotRad: -0.34,
  secondaryLobe: {
    dx: -18.0,
    dz: 33.5,
    rx: 15.0,
    rz: 17.0,
    peakScale: 0.74,
    lowSaddle: true,
  },
});

const evalWestTraelanipaTableIsland = makeNaturalNordicIslandFn({
  cx: -124.0,
  cz: -86.0,
  rx: 33.0,
  rz: 24.5,
  peakY: 25.5,
  summitOffset: { dx: -7.5, dz: 3.0 },
  seed: 37.8,
  rotRad: 0.42,
  secondaryLobe: { dx: 21.0, dz: -10.5, rx: 16.5, rz: 15.0, peakScale: 0.72 },
});

const evalNorthWestHolmPair = makeNaturalNordicIslandFn({
  cx: -42.0,
  cz: -96.0,
  rx: 17.5,
  rz: 19.5,
  peakY: 20.2,
  seed: 31.6,
  rotRad: -0.28,
  secondaryLobe: { dx: -19.5, dz: 14.0, rx: 12.5, rz: 14.0, peakScale: 0.74 },
});

const evalNorthEastHeadlandTable = makeNaturalNordicIslandFn({
  cx: 36.0,
  cz: -108.0,
  rx: 19.5,
  rz: 22.0,
  peakY: 22.8,
  seed: 44.1,
  rotRad: 0.52,
  secondaryLobe: { dx: 18.5, dz: -14.5, rx: 13.5, rz: 15.0, peakScale: 0.78 },
});

const evalSouthWestBrokenCrescent = makeNaturalCrescentIslandFn({
  cx: -144.0,
  cz: 78.0,
  ringRadius: 38.0,
  ringHalfWidth: 15.5,
  peakY: 23.8,
  openAngleRad: 0.62,
  arcHalfSpanRad: 1.84,
  seed: 58.4,
});

const evalSouthEastTableSound = makeNaturalNordicIslandFn({
  cx: 168.0,
  cz: 122.0,
  rx: 38.0,
  rz: 32.0,
  peakY: 29.5,
  seed: 71.2,
  rotRad: -0.48,
  secondaryLobe: { dx: -36.0, dz: -18.0, rx: 24.0, rz: 22.0, peakScale: 0.76 },
});

const evalFarWestCliffMassif = makeNaturalNordicIslandFn({
  cx: -206.0,
  cz: -96.0,
  rx: 42.0,
  rz: 46.0,
  peakY: 36.5,
  seed: 83.9,
  rotRad: -0.19,
  secondaryLobe: { dx: 28.0, dz: 34.0, rx: 23.0, rz: 25.0, peakScale: 0.70 },
});

const evalNorthernSoundCrescent = makeNaturalCrescentIslandFn({
  cx: -8.0,
  cz: -222.0,
  ringRadius: 52.0,
  ringHalfWidth: 19.5,
  peakY: 33.5,
  openAngleRad: 1.52,
  arcHalfSpanRad: 1.80,
  seed: 96.3,
});

const evalSouthHorizonHolms = makeNaturalNordicIslandFn({
  cx: -18.0,
  cz: 236.0,
  rx: 34.0,
  rz: 26.0,
  peakY: 25.5,
  seed: 109.7,
  rotRad: 0.15,
  secondaryLobe: { dx: 38.0, dz: -12.0, rx: 22.0, rz: 18.0, peakScale: 0.78 },
});

const ARCHIPELAGO_ISLANDS: ArchipelagoIslandDef[] = [
  {
    name: 'WestWaterfallDoubleIsland',
    centerX: -74.0,
    centerZ: -36.0,
    spanX: 112,
    spanZ: 102,
    gridSegs: 168,
    hasFlora: true,
    evalHeight: evalWestWaterfallIsland,
  },
  {
    name: 'StarboardCrescentLagoonAtoll',
    centerX: 88.0,
    centerZ: 36.0,
    spanX: 124,
    spanZ: 124,
    gridSegs: 164,
    hasFlora: true,
    evalHeight: evalStarboardCrescentAtoll,
  },
  {
    name: 'EastSerpentineTomboloIsland',
    centerX: 84.0,
    centerZ: -46.0,
    spanX: 118,
    spanZ: 134,
    gridSegs: 156,
    hasFlora: true,
    evalHeight: evalEastSerpentineTomboloIsland,
  },
  {
    name: 'WestTraelanipaTableIsland',
    centerX: -124.0,
    centerZ: -86.0,
    spanX: 116,
    spanZ: 102,
    gridSegs: 132,
    hasFlora: true,
    evalHeight: evalWestTraelanipaTableIsland,
  },
  {
    name: 'NorthWestHolmPair',
    centerX: -48.0,
    centerZ: -92.0,
    spanX: 92,
    spanZ: 86,
    gridSegs: 112,
    hasFlora: true,
    evalHeight: evalNorthWestHolmPair,
  },
  {
    name: 'NorthEastHeadlandTable',
    centerX: 42.0,
    centerZ: -112.0,
    spanX: 94,
    spanZ: 90,
    gridSegs: 112,
    hasFlora: false,
    evalHeight: evalNorthEastHeadlandTable,
  },
  {
    name: 'SouthWestBrokenCrescent',
    centerX: -144.0,
    centerZ: 78.0,
    spanX: 156,
    spanZ: 152,
    gridSegs: 120,
    hasFlora: false,
    evalHeight: evalSouthWestBrokenCrescent,
  },
  {
    name: 'SouthEastTableSound',
    centerX: 156.0,
    centerZ: 116.0,
    spanX: 168,
    spanZ: 152,
    gridSegs: 112,
    hasFlora: false,
    evalHeight: evalSouthEastTableSound,
  },
  {
    name: 'FarWestCliffMassif',
    centerX: -198.0,
    centerZ: -88.0,
    spanX: 174,
    spanZ: 168,
    gridSegs: 108,
    hasFlora: false,
    evalHeight: evalFarWestCliffMassif,
  },
  {
    name: 'NorthernSoundCrescentIsland',
    centerX: -8.0,
    centerZ: -222.0,
    spanX: 196,
    spanZ: 166,
    gridSegs: 112,
    hasFlora: false,
    evalHeight: evalNorthernSoundCrescent,
  },
  {
    name: 'SouthHorizonHolms',
    centerX: -4.0,
    centerZ: 232.0,
    spanX: 166,
    spanZ: 122,
    gridSegs: 100,
    hasFlora: false,
    evalHeight: evalSouthHorizonHolms,
  },
];

// ============================================================================
// REALISTIC BLOCKY FLAT-TOPPED TABULAR SEA-STACKS ("CLETTS") & LOW WHALEBACK SKERRIES
// (Directly modeled after Faroe Islands Photo 3: wide grounded footprints, flat/beveled tops,
//  wave-washed basal surf shelves — ZERO narrow pointy cones!)
// ============================================================================
interface TabularSeaStackSpec {
  x: number;
  z: number;
  rx: number;        // Substantial blocky half-width X (5m .. 11m — never skinny needles!)
  rz: number;        // Substantial blocky half-width Z
  topY: number;      // Above sea level (-11.5m): e.g. -8.8m = low wave-washed skerry, +6.5m = flat-topped clett!
  topSlopeX: number; // Subtle natural tilt across the flat tabular cap
  rotY: number;
  seed: number;
}

const TABULAR_SEA_STACKS: TabularSeaStackSpec[] = [
  // Iconic Faroese blocky flat-topped sea-stack standing just seaward of the Starboard Headland Sea-Arch (just like Photo 3!)
  { x: 43.5, z: 14.5, rx: 4.8, rz: 4.2, topY: 4.6, topSlopeX: -0.08, rotY: 0.45, seed: 14.2 },
  // Low wave-washed whaleback skerry reef off Starboard Crescent SW horn
  { x: 63.0, z: 50.5, rx: 7.5, rz: 5.2, topY: -8.2, topSlopeX: 0.05, rotY: -0.35, seed: 23.8 },

  // Broad tabular clett & low skerry off Hero Promontory's eastern & far-NW capes (clear of +Z flight bay!)
  { x: 27.5, z: -10.5, rx: 5.4, rz: 4.4, topY: 1.8, topSlopeX: 0.07, rotY: 0.22, seed: 31.4 },
  { x: -37.5, z: -22.0, rx: 6.2, rz: 4.8, topY: 2.6, topSlopeX: -0.09, rotY: -0.52, seed: 42.7 },

  // Tabular holm & wave-cut skerry off West Waterfall Double-Island
  { x: -46.5, z: -15.5, rx: 5.2, rz: 4.2, topY: -6.8, topSlopeX: -0.06, rotY: 0.61, seed: 55.3 },
  { x: -106.0, z: -49.0, rx: 7.8, rz: 6.0, topY: 6.4, topSlopeX: -0.10, rotY: 0.18, seed: 68.9 },

  // Tied reef skerry off East Serpentine Tombolo & Northern Sound holms
  { x: 57.5, z: -22.5, rx: 6.4, rz: 5.0, topY: -5.4, topSlopeX: 0.08, rotY: -0.44, seed: 79.1 },
  { x: -21.5, z: -79.0, rx: 7.2, rz: 5.8, topY: 5.2, topSlopeX: -0.07, rotY: 0.33, seed: 92.6 },
];

// Faroese Flat-Topped Grass-Capped Headland Sea-Arches (modeled directly after Faroe Islands Photos 1 & 3!)
interface FaroeseSeaArchSpec {
  x: number;
  z: number;
  rotY: number;
  halfLength: number;     // Half-length of the flat-topped headland rock spur
  halfThickness: number;  // Half-width of the blocky vertical cliff fin
  plateauTopY: number;    // Flat grassy plateau top elevation
  openingHalfSpan: number;// Half-width of the wave-carved sea tunnel below
  vaultCrownY: number;    // Ceiling height of the arched tunnel (well below plateauTopY so lintel is thick & solid!)
  seed: number;
}

const FAROESE_SEA_ARCHES: FaroeseSeaArchSpec[] = [
  // 1. Grand Starboard Headland Sea-Arch jutting from the NW cape of Starboard Crescent Atoll (paired with tabular stack at 43.5, 14.5!)
  {
    x: 59.5,
    z: 23.0,
    rotY: -0.58,
    halfLength: 14.5,
    halfThickness: 4.6,
    plateauTopY: 6.8,
    openingHalfSpan: 5.4,
    vaultCrownY: 0.4, // 11.9m of open headroom above sea level (-11.5m), with a solid 6.4m-thick flat grass-topped cliff lintel!
    seed: 17.3,
  },
  // 2. West Waterfall Island Coastal Cliff-Spur Sea-Arch off the NW headland
  {
    x: -95.5,
    z: -22.5,
    rotY: 0.88,
    halfLength: 13.0,
    halfThickness: 4.4,
    plateauTopY: 6.2,
    openingHalfSpan: 4.8,
    vaultCrownY: -0.2,
    seed: 49.8,
  },
];

/**
 * Samples the unified terrain elevation at any (x, z) across the Hero Promontory, Archipelago Islands,
 * Faroese Sea-Arches, and Tabular Sea-Stacks!
 */
export function sampleWorldTerrainHeight(x: number, z: number): number {
  let maxH = ISLAND_SKIRT_BASE_Y;
  if (Math.abs(x) < 54 && z > -66 && z < 40) {
    maxH = Math.max(maxH, sampleHeroCliffHeight(x, z));
  }
  for (const isl of ARCHIPELAGO_ISLANDS) {
    if (
      Math.abs(x - isl.centerX) <= isl.spanX * 0.52 &&
      Math.abs(z - isl.centerZ) <= isl.spanZ * 0.52
    ) {
      maxH = Math.max(maxH, isl.evalHeight(x, z));
    }
  }
  for (const arch of FAROESE_SEA_ARCHES) {
    if (Math.hypot(x - arch.x, z - arch.z) < arch.halfLength + 5.0) {
      maxH = Math.max(maxH, arch.plateauTopY + 1.0);
    }
  }
  for (const st of TABULAR_SEA_STACKS) {
    const rMax = Math.max(st.rx, st.rz);
    const d = Math.hypot(x - st.x, z - st.z);
    if (d < rMax * 1.45) {
      const t = 1.0 - smoothstep(0.65, 1.45, d / rMax);
      maxH = Math.max(maxH, ISLAND_SKIRT_BASE_Y + (st.topY - ISLAND_SKIRT_BASE_Y) * t);
    }
  }
  return maxH;
}

/**
 * Applies realistic basalt cliff buttresses, horizontal lava-bed ledges, basal surf shelves,
 * and subtle organic rock-outcrop undulation on hill shoulders (while strictly protecting the twin dragon perch pad!).
 */
function applyVerticalCliffWallRelief(
  geom: THREE.BufferGeometry,
  seed: number,
  protectHeroPad: boolean
): void {
  geom.computeVertexNormals();
  const pos = geom.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geom.getAttribute('normal') as THREE.BufferAttribute;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const nx = nrm.getX(i);
    const ny = nrm.getY(i);
    const nz = nrm.getZ(i);

    if (ny >= 0.72 || y < -23.5) continue;

    let padGuard = 1.0;
    if (protectHeroPad) {
      // Protect ONLY the two localized dragon paw-stance pads so the front jump-off cliff (z > 1.8m) gets full rock relief!
      const dTL = Math.hypot((x - 4.45) / 2.75, (z - 0.22) / 2.25);
      const dLF = Math.hypot((x + 4.45) / 2.75, (z + 0.22) / 2.25);
      padGuard = smoothstep(0.88, 1.32, Math.min(dTL, dLF));
      if (padGuard <= 0.001) continue;
    }

    const verticalWallMask =
      smoothstep(0.70, 0.22, ny) * smoothstep(-23.5, -16.5, y) * padGuard;

    if (verticalWallMask <= 0.002) continue;

    const hLen = Math.hypot(nx, nz);
    if (hLen < 1e-4) continue;
    const outX = nx / hLen;
    const outZ = nz / hLen;

    const relief = evalCliffWallStrataAndButtresses(x, z, y, seed);
    const radialShift = THREE.MathUtils.clamp(relief.radialOffset * verticalWallMask, -0.13, 0.19);
    const vertShift = THREE.MathUtils.clamp(relief.verticalLedgeOffset * verticalWallMask, -0.22, 0.22);

    pos.setXYZ(
      i,
      x + outX * radialShift,
      y + vertShift,
      z + outZ * radialShift
    );
  }

  geom.computeVertexNormals();
}

/**
 * Builds an Authentic Drangarnir-Style Asymmetric Headland Sea-Arch (modeled after Faroe Islands Drangarnir):
 * - Inclined asymmetric green cuesta crest rising to a bold sheer basalt peak on the landward side and
 *   sweeping down across a rocky arch bridge to a secondary crag pillar on the seaward end!
 * - Irregular, faceted wave-carved basalt tunnel and fractured cliff walls.
 */
function buildFaroeseHeadlandSeaArchGeometry(spec: FaroeseSeaArchSpec): THREE.BufferGeometry {
  const uSegs = 116;
  const vSegs = 64;

  const ringCount = uSegs + 1;
  const loopVerts = vSegs + 1;
  const bodyVerts = ringCount * loopVerts;
  const capVerts = 2;
  const totalVerts = bodyVerts + capVerts;

  const positions = new Float32Array(totalVerts * 3);
  const uvs = new Float32Array(totalVerts * 2);

  for (let iu = 0; iu <= uSegs; iu++) {
    const u = iu / uSegs;
    const xRaw = (u - 0.5) * 2.0 * spec.halfLength;

    // Irregular rock-joint planform spine (not a straight fin!)
    const zCenter =
      Math.sin(u * Math.PI * 1.35 + spec.seed) * 1.15 +
      (fbm2D(u * 3.8 + spec.seed, 1.7, 3) - 0.5) * 1.45;

    const endCliffTaper = smoothstep(0.0, 0.055, u) * smoothstep(1.0, 0.945, u);
    // Drangarnir-style tilted cuesta slope: high sheer landward crag sweeping down to a seaward rock pinnacle!
    const cuestaRamp = Math.pow(Math.max(0, 1.0 - u * 0.92), 1.18) * 5.2;
    const seawardPinnacle = Math.exp(-Math.pow((u - 0.86) / 0.085, 2.0)) * 2.85;
    const bridgeDip = -Math.exp(-Math.pow((u - 0.54) / 0.18, 2.0)) * 0.95;
    const cragSteps =
      applyBasaltHamrarTerraces(cuestaRamp, u * 1.8, 2.4, 0.45) -
      cuestaRamp +
      (roundedRidge2D(xRaw * 0.12 + spec.seed, zCenter * 0.12, 2) - 0.46) * 1.05;
    const yTopBase = spec.plateauTopY - 1.1 + cuestaRamp + seawardPinnacle + bridgeDip + cragSteps;
    const yTop = THREE.MathUtils.lerp(SEA_LEVEL_Y - 4.0, yTopBase, endCliffTaper);

    // Asymmetric, faceted wave-carved basalt arch opening (like Drangarnir's triangular/polygonal sea-portal!)
    const shiftedX = xRaw - spec.openingHalfSpan * 0.08;
    const normSpan = Math.abs(shiftedX) / spec.openingHalfSpan;
    const archWindowMask = 1.0 - smoothstep(0.78, 1.14, normSpan);
    const pointedArch = Math.max(0, 1.0 - Math.pow(Math.min(1.16, normSpan), 1.65));
    const vaultFacets =
      (roundedRidge2D(xRaw * 0.28 + spec.seed, 4.3, 2) - 0.48) * 0.85 +
      (fbm2D(xRaw * 0.45 - spec.seed, 2.1, 2) - 0.5) * 0.45;
    const tunnelCeilingY =
      (SEA_LEVEL_Y - 5.5) + (spec.vaultCrownY + 0.6 - (SEA_LEVEL_Y - 5.5)) * pointedArch + vaultFacets;
    const yBot = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, tunnelCeilingY, archWindowMask);

    const pierButtress =
      1.0 +
      0.38 * (1.0 - archWindowMask) +
      0.16 * (fbm2D(u * 4.5 + spec.seed, 6.2, 2) - 0.5);
    const baseHalfW = spec.halfThickness * pierButtress * (0.48 + 0.52 * endCliffTaper);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs;
      const phi = v * Math.PI * 2.0;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);
      // Blockier cliff-walled cross-section with a tilted cuesta crest on top!
      const localZFrac = Math.sign(sinPhi) * Math.pow(Math.abs(sinPhi), 0.44);
      const localYFrac = 0.5 + 0.5 * Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi), 0.56);
      const onVerticalWall = Math.pow(Math.abs(sinPhi), 1.15);

      // Asymmetric cross-ridge tilt so one cliff wall is sheerer and the green top slopes naturally
      const crossTilt = (0.35 - 0.45 * localZFrac) * Math.max(0, cosPhi) * endCliffTaper;
      let wy = THREE.MathUtils.lerp(yBot, yTop, localYFrac) + crossTilt;

      if (cosPhi < -0.22 && archWindowMask > 0.05) {
        wy += (-cosPhi - 0.22) * (1.0 - localZFrac * localZFrac) * 1.15 * archWindowMask;
      }

      const seaPlinth =
        Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.45)) / 2.1, 2.0)) * 1.35 * (1.0 - archWindowMask * 0.65);

      const wallRelief = evalCliffWallStrataAndButtresses(xRaw, zCenter + localZFrac * 4.5, wy, spec.seed);
      const effHalfW =
        baseHalfW +
        seaPlinth +
        wallRelief.radialOffset * 0.72 * onVerticalWall * smoothstep(-22.0, -14.0, wy);

      const px = xRaw;
      const pz = zCenter + localZFrac * effHalfW;
      const py = wy + wallRelief.verticalLedgeOffset * 0.48 * onVerticalWall;

      const idx = iu * loopVerts + iv;
      positions[idx * 3] = px;
      positions[idx * 3 + 1] = py;
      positions[idx * 3 + 2] = pz;
      uvs[idx * 2] = u * 3.8;
      uvs[idx * 2 + 1] = v * 2.6;
    }
  }

  // End-cap center vertices at u = 0 and u = 1
  const cap0Idx = bodyVerts;
  const cap1Idx = bodyVerts + 1;
  positions[cap0Idx * 3] = -spec.halfLength;
  positions[cap0Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap0Idx * 3 + 2] = 0;
  uvs[cap0Idx * 2] = 0.0;
  uvs[cap0Idx * 2 + 1] = 0.5;
  positions[cap1Idx * 3] = spec.halfLength;
  positions[cap1Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap1Idx * 3 + 2] = 0;
  uvs[cap1Idx * 2] = 3.8;
  uvs[cap1Idx * 2 + 1] = 0.5;

  const indices: number[] = [];
  for (let iu = 0; iu < uSegs; iu++) {
    for (let iv = 0; iv < vSegs; iv++) {
      const a = iu * loopVerts + iv;
      const b = (iu + 1) * loopVerts + iv;
      const c = (iu + 1) * loopVerts + (iv + 1);
      const d = iu * loopVerts + (iv + 1);
      indices.push(a, d, c, a, c, b);
    }
  }
  for (let iv = 0; iv < vSegs; iv++) {
    indices.push(cap0Idx, iv + 1, iv);
    const lastRing = uSegs * loopVerts;
    indices.push(cap1Idx, lastRing + iv, lastRing + iv + 1);
  }

  const archGeom = new THREE.BufferGeometry();
  archGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  archGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  archGeom.setIndex(indices);
  archGeom.computeVertexNormals();
  return archGeom;
}

/**
 * Builds a Rugged Reynisdrangar / Drangarnir-Style Angular Basalt Sea-Stack or Coastal Crag Skerry:
 * - Faceted polygonal columnar-basalt cliff walls with stepped horizontal rock ledges
 * - Asymmetric, tilted, craggy rock-and-turf pinnacle crown (NEVER a smooth round cap!).
 */
function buildTabularSeaStackGeometry(spec: TabularSeaStackSpec): THREE.BufferGeometry {
  const hSegs = 36;
  const rSegs = 40;
  const capRings = 7;
  const ringVerts = rSegs + 1;
  const centerVert = 1;
  const vCount = (hSegs + capRings + 1) * ringVerts + centerVert;

  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);

  const cosRot = Math.cos(spec.rotY);
  const sinRot = Math.sin(spec.rotY);

  const evalPlanRadius = (cosT: number, sinT: number, theta: number): { lx: number; lz: number } => {
    // Angular fractured basalt buttresses & polygonal column ribs (like Reynisdrangar!)
    const angularButtresses =
      1.0 +
      0.16 * Math.cos(theta * 3.0 + spec.seed) +
      0.13 * Math.sin(theta * 5.0 - spec.seed * 0.8) +
      0.08 * Math.cos(theta * 7.0 + spec.seed * 1.7);
    const rockCleavage =
      0.84 + 0.28 * roundedRidge2D(cosT * 1.5 + spec.seed, sinT * 1.5 - spec.seed, 2);
    return {
      lx: cosT * spec.rx * angularButtresses * rockCleavage,
      lz: sinT * spec.rz * angularButtresses * rockCleavage,
    };
  };

  const isTallStack = spec.topY > SEA_LEVEL_Y + 4.0;
  const crownHeight = isTallStack ? 3.45 : 1.55;
  const crestOffX = spec.rx * 0.26 * Math.sin(spec.seed * 1.7);
  const crestOffZ = spec.rz * -0.22 * Math.cos(spec.seed * 1.1);

  for (let ih = 0; ih <= hSegs + capRings; ih++) {
    const inCrown = ih > hSegs;
    const tWall = Math.min(1.0, ih / hSegs);
    const sCrown = inCrown ? (ih - hSegs) / capRings : 0.0;

    for (let ir = 0; ir <= rSegs; ir++) {
      const v = ir / rSegs;
      const theta = v * Math.PI * 2.0;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      const basePlan = evalPlanRadius(cosT, sinT, theta);
      // Asymmetric tilted & stepped crag rim (like Drangarnir's sea-stack in Photo 4!)
      const rimStep =
        (roundedRidge2D(basePlan.lx * 0.22 + spec.seed, basePlan.lz * 0.22, 2) - 0.45) * 1.45;
      const rimY = spec.topY + basePlan.lx * (spec.topSlopeX * 1.65 + 0.08) + rimStep;

      const crownRadialScale = inCrown ? Math.pow(1.0 - sCrown, 0.82) : 1.0;
      const crownCragLift = inCrown
        ? Math.pow(sCrown, 0.78) *
          (crownHeight +
            (roundedRidge2D(cosT * 1.8 + spec.seed, sinT * 1.8 - spec.seed, 2) - 0.45) * 1.25)
        : 0.0;

      // Stepped basalt ledges along the vertical stack shaft
      const stepT = tWall + 0.022 * Math.sin(tWall * 22.0 + spec.seed);
      const wy = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, rimY, Math.min(1.0, Math.max(0.0, stepT))) + crownCragLift;

      const steppedTaper =
        1.22 - 0.36 * Math.pow(tWall, 0.82) + (isTallStack ? 0.05 * Math.cos(tWall * 18.0 + spec.seed) : 0.0);
      const surfApron = 1.0 + 0.36 * Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.45)) / 2.1, 2.0));

      const wallRelief = evalCliffWallStrataAndButtresses(
        spec.x + basePlan.lx,
        spec.z + basePlan.lz,
        wy,
        spec.seed
      );
      const reliefFade =
        smoothstep(0.16, 0.42, tWall) * (1.0 - smoothstep(0.88, 1.0, tWall)) * (inCrown ? 0.25 : 1.0);

      const scaleXZ = steppedTaper * surfApron * crownRadialScale;
      const lx =
        THREE.MathUtils.lerp(0, crestOffX, sCrown) +
        basePlan.lx * scaleXZ +
        cosT * wallRelief.radialOffset * 0.58 * reliefFade;
      const lz =
        THREE.MathUtils.lerp(0, crestOffZ, sCrown) +
        basePlan.lz * scaleXZ +
        sinT * wallRelief.radialOffset * 0.58 * reliefFade;

      const wx = spec.x + lx * cosRot - lz * sinRot;
      const wz = spec.z + lx * sinRot + lz * cosRot;

      const idx = ih * ringVerts + ir;
      positions[idx * 3] = wx;
      positions[idx * 3 + 1] = wy;
      positions[idx * 3 + 2] = wz;
      uvs[idx * 2] = v * 2.4;
      uvs[idx * 2 + 1] = tWall * 3.0 + sCrown * 0.6;
    }
  }

  const capCenterIdx = (hSegs + capRings + 1) * ringVerts;
  const wxCrest = spec.x + crestOffX * cosRot - crestOffZ * sinRot;
  const wzCrest = spec.z + crestOffX * sinRot + crestOffZ * cosRot;
  positions[capCenterIdx * 3] = wxCrest;
  positions[capCenterIdx * 3 + 1] = spec.topY + crownHeight + 0.35;
  positions[capCenterIdx * 3 + 2] = wzCrest;
  uvs[capCenterIdx * 2] = 0.5;
  uvs[capCenterIdx * 2 + 1] = 3.7;

  const indices: number[] = [];
  const totalRings = hSegs + capRings;
  for (let ih = 0; ih < totalRings; ih++) {
    for (let ir = 0; ir < rSegs; ir++) {
      const a = ih * ringVerts + ir;
      const b = (ih + 1) * ringVerts + ir;
      const c = (ih + 1) * ringVerts + (ir + 1);
      const d = ih * ringVerts + (ir + 1);
      indices.push(a, b, c, a, c, d);
    }
  }
  const lastCrownRing = totalRings * ringVerts;
  for (let ir = 0; ir < rSegs; ir++) {
    indices.push(capCenterIdx, lastCrownRing + ir + 1, lastCrownRing + ir);
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

/**
 * Sculpts True 3D Angular Basalt Crag Buttresses, Overhanging Rock Ledges & Columnar Ribs
 * along the Hero Jump-Off Cliff Face & Rim (right below Toothless & the Light Fury!).
 * Breaks up any remaining heightfield regularity with real 3D rock silhouettes, overhangs, and crevices
 * while keeping top elevations <= 0.04m near the front sightline so the dragons remain 100% unobstructed.
 */
function buildHeroCliffRockOutcrops(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];

  // Helper: builds a faceted, flat-cleaved 3D polygonal basalt column / crag buttress rib
  const makeBasaltCragPillar = (opts: {
    x: number;
    z: number;
    topY: number;
    botY: number;
    rx: number;
    rz: number;
    rotY: number;
    leanX: number;
    leanZ: number;
    sides: number;
    seed: number;
  }): THREE.BufferGeometry => {
    const hSegs = 10;
    const rSegs = opts.sides;
    const ringV = rSegs + 1;
    const vCount = (hSegs + 1) * ringV + 2;
    const pos = new Float32Array(vCount * 3);
    const uvs = new Float32Array(vCount * 2);
    const cosR = Math.cos(opts.rotY);
    const sinR = Math.sin(opts.rotY);

    for (let ih = 0; ih <= hSegs; ih++) {
      const t = ih / hSegs;
      // Slight overhang bulge near the upper ledge (t ~ 0.82) like fractured basalt lava caps!
      const ledgeProfile =
        1.08 - 0.16 * t + 0.18 * Math.exp(-Math.pow((t - 0.82) / 0.14, 2.0)) +
        0.07 * Math.sin(t * 15.0 + opts.seed);
      const wy = THREE.MathUtils.lerp(opts.botY, opts.topY, t);
      const shiftX = opts.leanX * (t - 0.5);
      const shiftZ = opts.leanZ * (t - 0.5);

      for (let ir = 0; ir <= rSegs; ir++) {
        const u = ir / rSegs;
        const ang = u * Math.PI * 2.0;
        const facetMod =
          0.86 + 0.26 * hash2D(Math.floor(ir % rSegs) + opts.seed * 7.1, Math.floor(ih * 0.5) + 3.3);
        const lx = Math.cos(ang) * opts.rx * ledgeProfile * facetMod;
        const lz = Math.sin(ang) * opts.rz * ledgeProfile * facetMod;
        const wx = opts.x + shiftX + lx * cosR - lz * sinR;
        const wz = opts.z + shiftZ + lx * sinR + lz * cosR;
        const idx = ih * ringV + ir;
        pos[idx * 3] = wx;
        pos[idx * 3 + 1] = wy + (t > 0.92 ? (hash2D(ir, opts.seed) - 0.5) * 0.18 : 0.0);
        pos[idx * 3 + 2] = wz;
        uvs[idx * 2] = u * 1.5;
        uvs[idx * 2 + 1] = t * 2.2;
      }
    }

    const botCap = (hSegs + 1) * ringV;
    const topCap = botCap + 1;
    pos[botCap * 3] = opts.x - opts.leanX * 0.5;
    pos[botCap * 3 + 1] = opts.botY;
    pos[botCap * 3 + 2] = opts.z - opts.leanZ * 0.5;
    uvs[botCap * 2] = 0.5;
    uvs[botCap * 2 + 1] = 0.0;

    pos[topCap * 3] = opts.x + opts.leanX * 0.5;
    pos[topCap * 3 + 1] = opts.topY + 0.04;
    pos[topCap * 3 + 2] = opts.z + opts.leanZ * 0.5;
    uvs[topCap * 2] = 0.5;
    uvs[topCap * 2 + 1] = 2.2;

    const indices: number[] = [];
    for (let ih = 0; ih < hSegs; ih++) {
      for (let ir = 0; ir < rSegs; ir++) {
        const a = ih * ringV + ir;
        const b = (ih + 1) * ringV + ir;
        const c = (ih + 1) * ringV + (ir + 1);
        const d = ih * ringV + (ir + 1);
        indices.push(a, b, c, a, c, d);
      }
    }
    const topRing = hSegs * ringV;
    for (let ir = 0; ir < rSegs; ir++) {
      indices.push(botCap, ir, ir + 1);
      indices.push(topCap, topRing + ir + 1, topRing + ir);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    g.setIndex(indices);
    // Flat-faceted rock cleavage normals via non-indexed normal computation -> re-merged cleanly
    g.computeVertexNormals();
    return g;
  };

  // Scan around the Hero Promontory cliff face (concentrating heavily on the +Z jump-off precipice!)
  const rayAngles: number[] = [];
  // Dense coverage across the southern (+Z) jump-off cliff (angles +0.18*PI .. +0.82*PI in atan2(z+4.2, x))
  for (let i = 0; i < 34; i++) {
    rayAngles.push(0.14 * Math.PI + (i / 33) * 0.72 * Math.PI);
  }
  // Flanking East, West & North-West sea-cliffs
  for (let i = 0; i < 24; i++) {
    rayAngles.push(-0.88 * Math.PI + (i / 23) * 1.00 * Math.PI);
  }

  for (let k = 0; k < rayAngles.length; k++) {
    const ang = rayAngles[k] + (hash2D(k, 19.4) - 0.5) * 0.045;
    const dirX = Math.cos(ang);
    const dirZ = Math.sin(ang);

    // Ray-march outward from (0, -4.2) to find the exact cliff brink & mid-cliff rock wall!
    let brinkR = -1;
    let brinkH = 0;
    for (let r = 4.5; r <= 34.0; r += 0.35) {
      const sx = dirX * r;
      const sz = -4.2 + dirZ * r;
      const h = sampleHeroCliffHeight(sx, sz);
      const hAhead = sampleHeroCliffHeight(sx + dirX * 1.1, sz + dirZ * 1.1);
      if (h > -2.6 && h - hAhead > 1.35) {
        brinkR = r;
        brinkH = h;
        break;
      }
    }
    if (brinkR < 0) continue;

    const bx = dirX * brinkR;
    const bz = -4.2 + dirZ * brinkR;
    // Keep Dragon Paw Stance Pads 100% clear!
    const dTL = Math.hypot((bx - 4.45) / 2.65, (bz - 0.22) / 2.15);
    const dLF = Math.hypot((bx + 4.45) / 2.65, (bz + 0.22) / 2.15);
    if (Math.min(dTL, dLF) < 1.02) continue;

    const isFrontJumpCliff = bz > -0.2 && Math.abs(bx) < 13.5;
    // Upper overhanging fractured basalt brink slab / crag rib (capped strictly below -0.06m on front sightline!)
    const upperTopY = isFrontJumpCliff
      ? Math.min(-0.08, brinkH - 0.04)
      : brinkH + (hash2D(k, 31.7) - 0.45) * 0.42;
    const upperBotY = Math.max(SEA_LEVEL_Y - 3.2, upperTopY - (4.8 + hash2D(k, 43.2) * 5.6));

    parts.push(
      makeBasaltCragPillar({
        x: bx + dirX * 0.55,
        z: bz + dirZ * 0.55,
        topY: upperTopY,
        botY: upperBotY,
        rx: 0.95 + hash2D(k, 51.3) * 1.35,
        rz: 0.78 + hash2D(k, 63.8) * 1.05,
        rotY: ang + (hash2D(k, 71.9) - 0.5) * 0.8,
        leanX: dirX * (0.35 + hash2D(k, 83.1) * 0.55),
        leanZ: dirZ * (0.35 + hash2D(k, 83.1) * 0.55),
        sides: 5 + Math.floor(hash2D(k, 91.4) * 3),
        seed: 10.0 + k * 3.7,
      })
    );

    // Lower wave-battered columnar basalt buttress rib plunging into the surf zone (-13.5m)!
    const lowerTopY = upperBotY + 2.4 + hash2D(k, 104.2) * 2.2;
    parts.push(
      makeBasaltCragPillar({
        x: bx + dirX * (1.55 + hash2D(k, 112.6) * 1.15),
        z: bz + dirZ * (1.55 + hash2D(k, 112.6) * 1.15),
        topY: Math.min(upperTopY - 0.8, lowerTopY),
        botY: SEA_LEVEL_Y - 3.8,
        rx: 1.15 + hash2D(k, 124.5) * 1.45,
        rz: 0.92 + hash2D(k, 137.1) * 1.20,
        rotY: ang + (hash2D(k, 149.8) - 0.5) * 0.6,
        leanX: -dirX * 0.25,
        leanZ: -dirZ * 0.25,
        sides: 6,
        seed: 200.0 + k * 5.3,
      })
    );
  }

  return mergeGeometries(parts, false)!;
}

/**
 * Seamlessly periodic value-noise & FBM on [0, 1)^2 with integer period (px, py),
 * plus periodic angular Voronoi rock-block cleavage for 100% seam-free 3D triplanar rock textures!
 */
function periodicNoise2D(u: number, v: number, px: number, py: number, seed: number): number {
  const x = u * px;
  const y = v * py;
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
  const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);

  const i0 = ((ix % px) + px) % px;
  const i1 = (i0 + 1) % px;
  const j0 = ((iy % py) + py) % py;
  const j1 = (j0 + 1) % py;

  const a = hash2D(i0 + seed, j0 - seed);
  const b = hash2D(i1 + seed, j0 - seed);
  const c = hash2D(i0 + seed, j1 - seed);
  const d = hash2D(i1 + seed, j1 - seed);

  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

function periodicFbm2D(u: number, v: number, basePx: number, basePy: number, octaves: number, seed: number): number {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  let px = basePx;
  let py = basePy;
  for (let i = 0; i < octaves; i++) {
    sum += amp * periodicNoise2D(u, v, px, py, seed + i * 17.3);
    norm += amp;
    px *= 2;
    py *= 2;
    amp *= 0.5;
  }
  return sum / norm;
}

function periodicRockCells2D(
  u: number,
  v: number,
  cellsX: number,
  cellsY: number,
  seed: number
): { edgeDist: number; cellTilt: number; cellId: number } {
  const x = u * cellsX;
  const y = v * cellsY;
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  let d1 = 1e9;
  let d2 = 1e9;
  let bestId = 0;
  let bestDX = 0;
  let bestDY = 0;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const cx = (((ix + dx) % cellsX) + cellsX) % cellsX;
      const cy = (((iy + dy) % cellsY) + cellsY) % cellsY;
      const jx = 0.16 + 0.68 * hash2D(cx + seed, cy * 1.7 - seed);
      const jy = 0.16 + 0.68 * hash2D(cx * 2.3 - seed, cy + seed);
      const px = ix + dx + jx;
      const py = iy + dy + jy;
      // Slightly anisotropic blocky metric so cells form fractured basalt blocks rather than round bubbles
      const rx = (px - x) * 0.85;
      const ry = (py - y) * 1.25;
      const dist = Math.hypot(rx, ry);
      if (dist < d1) {
        d2 = d1;
        d1 = dist;
        bestId = hash2D(cx * 3.1 + seed, cy * 5.7 + seed);
        bestDX = rx;
        bestDY = ry;
      } else if (dist < d2) {
        d2 = dist;
      }
    }
  }
  const edgeDist = Math.max(0, d2 - d1);
  const tiltAngle = bestId * Math.PI * 2.0;
  const cellTilt = (bestDX * Math.cos(tiltAngle) + bestDY * Math.sin(tiltAngle)) * 0.55;
  return { edgeDist, cellTilt, cellId: bestId };
}

/**
 * Generates 100% Seamlessly Tileable 512x512 Fractured Basalt Cliff PBR Textures:
 * - Angular Voronoi rock-cleavage facets, stepped horizontal basalt bedding cracks & vertical column joints
 * - Rich charcoal-slate & warm iron-weathered mineral faces + pale coastal lichen (matching Reynisfjara & Faroe photos!).
 */
function generateBasaltRockPBRTextures(): {
  albedo: THREE.CanvasTexture;
  normal: THREE.CanvasTexture;
  roughness: THREE.CanvasTexture;
} {
  const size = 512;
  const hField = new Float32Array(size * size);
  const creviceField = new Float32Array(size * size);
  const mineralField = new Float32Array(size * size);
  const mossField = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const idx = y * size + x;

      // Warp coordinates slightly with periodic FBM so fracture seams look naturally geological
      const wu = u + (periodicFbm2D(u, v, 4, 4, 3, 5.1) - 0.5) * 0.045;
      const wv = v + (periodicFbm2D(u, v, 4, 4, 3, 13.7) - 0.5) * 0.035;

      // Macro & meso angular basalt rock blocks + tilted cleavage planes
      const macroBlock = periodicRockCells2D(wu, wv, 7, 11, 21.4);
      const mesoBlock = periodicRockCells2D(wu, wv, 16, 22, 57.9);

      const macroCrevice = 1.0 - smoothstep(0.015, 0.11, macroBlock.edgeDist);
      const mesoCrevice = 1.0 - smoothstep(0.012, 0.09, mesoBlock.edgeDist);

      // Horizontal lava-bedding ledges & fine micro-grain
      const strataSteps = periodicFbm2D(wu, wv, 4, 18, 4, 33.2);
      const microGrain = periodicFbm2D(u, v, 24, 24, 3, 71.6);

      const facetHeight =
        0.52 +
        macroBlock.cellTilt * 0.34 +
        (macroBlock.cellId - 0.5) * 0.22 +
        mesoBlock.cellTilt * 0.18 +
        (strataSteps - 0.5) * 0.32 +
        (microGrain - 0.5) * 0.14 -
        macroCrevice * 0.42 -
        mesoCrevice * 0.22;

      hField[idx] = Math.max(0, Math.min(1, facetHeight));
      creviceField[idx] = Math.min(1, macroCrevice * 0.75 + mesoCrevice * 0.45);
      mineralField[idx] = macroBlock.cellId * 0.65 + mesoBlock.cellId * 0.35;

      const mossNoise = periodicFbm2D(u, v, 8, 8, 4, 93.4);
      mossField[idx] = smoothstep(0.60, 0.84, mossNoise) * (1.0 - macroCrevice * 0.5);
    }
  }

  const aCanvas = document.createElement('canvas');
  const nCanvas = document.createElement('canvas');
  const rCanvas = document.createElement('canvas');
  for (const c of [aCanvas, nCanvas, rCanvas]) {
    c.width = size;
    c.height = size;
  }

  const aCtx = aCanvas.getContext('2d')!;
  const nCtx = nCanvas.getContext('2d')!;
  const rCtx = rCanvas.getContext('2d')!;
  const aImg = aCtx.createImageData(size, size);
  const nImg = nCtx.createImageData(size, size);
  const rImg = rCtx.createImageData(size, size);

  for (let y = 0; y < size; y++) {
    const ym1 = (y - 1 + size) % size;
    const yp1 = (y + 1) % size;
    for (let x = 0; x < size; x++) {
      const xm1 = (x - 1 + size) % size;
      const xp1 = (x + 1) % size;
      const idx = y * size + x;
      const p4 = idx * 4;

      // Crisp rock-cleavage normal vectors (OpenGL +Y-up convention for flipY=true CanvasTexture!)
      const dX = (hField[y * size + xp1] - hField[y * size + xm1]) * 7.6;
      const dY = (hField[yp1 * size + x] - hField[ym1 * size + x]) * 7.6;
      const inv = 1.0 / Math.sqrt(dX * dX + dY * dY + 1.0);

      nImg.data[p4] = Math.round((-dX * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 1] = Math.round((dY * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 3] = 255;

      const h = hField[idx];
      const crev = creviceField[idx];
      const minVar = mineralField[idx];
      const moss = mossField[idx];

      // Authentic North Atlantic basalt palette: charcoal-slate base + warm iron-oxide weathered blocks + deep crevice AO
      const ironWarmth = smoothstep(0.62, 0.92, minVar);
      const ao = 1.0 - crev * 0.56;
      const baseR = (36 + h * 58 + ironWarmth * 22) * ao;
      const baseG = (40 + h * 58 + ironWarmth * 11) * ao;
      const baseB = (46 + h * 60 - ironWarmth * 6) * ao;

      const mossR = 52 + h * 26;
      const mossG = 74 + h * 34;
      const mossB = 38 + h * 18;

      aImg.data[p4] = Math.round(THREE.MathUtils.lerp(baseR, mossR, moss * 0.52));
      aImg.data[p4 + 1] = Math.round(THREE.MathUtils.lerp(baseG, mossG, moss * 0.52));
      aImg.data[p4 + 2] = Math.round(THREE.MathUtils.lerp(baseB, mossB, moss * 0.52));
      aImg.data[p4 + 3] = 255;

      const cleavedRough = 0.54 + (1.0 - h) * 0.28 + crev * 0.16;
      const rough = Math.round(THREE.MathUtils.clamp(THREE.MathUtils.lerp(cleavedRough, 0.92, moss), 0.15, 0.98) * 255);
      rImg.data[p4] = rough;
      rImg.data[p4 + 1] = rough;
      rImg.data[p4 + 2] = rough;
      rImg.data[p4 + 3] = 255;
    }
  }

  aCtx.putImageData(aImg, 0, 0);
  nCtx.putImageData(nImg, 0, 0);
  rCtx.putImageData(rImg, 0, 0);

  const setup = (tex: THREE.CanvasTexture, srgb: boolean) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(9, 9);
    tex.anisotropy = 8;
    tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    tex.needsUpdate = true;
    return tex;
  };

  return {
    albedo: setup(new THREE.CanvasTexture(aCanvas), true),
    normal: setup(new THREE.CanvasTexture(nCanvas), false),
    roughness: setup(new THREE.CanvasTexture(rCanvas), false),
  };
}

/**
 * Builds the Continuous 7,200m-diameter Submarine Bathymetric Seafloor at y ~ -25.5m!
 * Because every island & distant mountain skirt plunges 18.5m BELOW this solid seafloor (down to -44m),
 * ZERO rectangular mesh borders can ever appear under the ocean from any camera elevation!
 */
function buildSubmarineBathymetryMesh(atmosphereUniforms: AtmosphereSharedUniforms): THREE.Mesh {
  const maxRadius = 3200;
  const radialRings = 96;
  const angularSegs = 128;
  const vCount = (radialRings + 1) * (angularSegs + 1);
  const positions = new Float32Array(vCount * 3);

  for (let ir = 0; ir <= radialRings; ir++) {
    const u = ir / radialRings;
    const r = maxRadius * Math.pow(u, 2.05);
    for (let ia = 0; ia <= angularSegs; ia++) {
      const v = ia / angularSegs;
      const theta = v * Math.PI * 2.0;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const gentleShoals = (fbm2D(x * 0.015 + 3.7, z * 0.015 - 5.2, 3) - 0.5) * 3.2 * (1.0 - u * 0.7);
      const y = SEAFLOOR_BASE_Y + gentleShoals;

      const idx = ir * (angularSegs + 1) + ia;
      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;
    }
  }

  const indices = new Uint32Array(radialRings * angularSegs * 6);
  let ptr = 0;
  for (let ir = 0; ir < radialRings; ir++) {
    for (let ia = 0; ia < angularSegs; ia++) {
      const a = ir * (angularSegs + 1) + ia;
      const b = (ir + 1) * (angularSegs + 1) + ia;
      const c = (ir + 1) * (angularSegs + 1) + (ia + 1);
      const d = ir * (angularSegs + 1) + (ia + 1);
      indices[ptr++] = a;
      indices[ptr++] = c;
      indices[ptr++] = b;
      indices[ptr++] = a;
      indices[ptr++] = d;
      indices[ptr++] = c;
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setIndex(new THREE.BufferAttribute(indices, 1));
  geom.computeVertexNormals();

  const seafloorMat = new THREE.ShaderMaterial({
    name: 'NordicSubmarineBathymetry',
    uniforms: { ...atmosphereUniforms },
    vertexShader: /* glsl */ `
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      ${SHARED_SKY_GLSL}
      uniform vec3 uWaterDeepColor;
      uniform vec3 uWaterShallowColor;
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal + vec3(0.0, 1e-5, 0.0));
        vec3 L = normalize(uSunDir + vec3(0.0, 1e-5, 0.0));
        float waterColumnDepth = clamp((-11.5 - vWorldPos.y) / 16.0, 0.0, 1.0);
        float sandMask = smoothstep(0.75, 0.95, N.y) * skyNoise2(vWorldPos.xz * 0.08);
        vec3 bedAlbedo = mix(vec3(0.028, 0.044, 0.056), vec3(0.058, 0.074, 0.080), sandMask);
        float ndotl = 0.35 + 0.65 * clamp(dot(N, L), 0.0, 1.0);
        vec3 litBed = bedAlbedo * (uWaterShallowColor * 2.2 + uSunColor * 0.30 * ndotl);
        vec3 abyssCol = uWaterDeepColor * 0.55;
        vec3 col = mix(litBed, abyssCol, smoothstep(0.15, 0.92, waterColumnDepth));

        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.26));
        float rimFade = smoothstep(1800.0, 2950.0, length(vWorldPos.xz));
        col = mix(col, hazeCol, clamp(max(aerial, rimFade), 0.0, 1.0));
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(geom, seafloorMat);
  mesh.frustumCulled = false;
  mesh.name = 'NordicSubmarineBathymetryFloor';
  return mesh;
}

/**
 * Builds Outer Belt 3: Lifelike Faroese Distant Flat-Topped Table-Islands & Tilted Headlands (r = 540m .. 1,680m)!
 * Modeled directly after the misty trapezoidal table-island on the horizon in Faroe Islands Photo 3!
 * - Built from organic radial polar island meshes (ZERO rectangular strip grids!)
 * - Skirts plunge to -44.0m well below the solid -25.5m seafloor!
 * - Aerial haze converges smoothly all the way to 1.0 at the horizon (ZERO dark horizon bands!).
 */
function buildDistantFjordArchipelago(atmosphereUniforms: AtmosphereSharedUniforms): THREE.Mesh {
  const distantFjordIslands = [
    { cx: -480, cz: -280, rx: 145, rz: 95, peakY: 56, offX: -22, rot: 0.4, seed: 11.4 },
    { cx: 520, cz: -310, rx: 165, rz: 105, peakY: 62, offX: 28, rot: -0.5, seed: 23.8 },
    { cx: -320, cz: -560, rx: 135, rz: 90, peakY: 54, offX: 18, rot: 0.2, seed: 37.2 },
    { cx: 490, cz: 340, rx: 155, rz: 98, peakY: 52, offX: -24, rot: -0.3, seed: 46.5 },
    { cx: -860, cz: -420, rx: 240, rz: 145, peakY: 86, offX: -36, rot: 0.35, seed: 51.9 },
    { cx: 880, cz: -460, rx: 255, rz: 155, peakY: 82, offX: 38, rot: -0.42, seed: 67.3 },
    { cx: -740, cz: 580, rx: 220, rz: 135, peakY: 72, offX: -28, rot: 0.55, seed: 76.4 },
    { cx: 140, cz: -1180, rx: 290, rz: 165, peakY: 94, offX: 42, rot: 0.15, seed: 83.5 },
    { cx: -1150, cz: -880, rx: 310, rz: 180, peakY: 104, offX: -45, rot: -0.28, seed: 94.1 },
    { cx: 1080, cz: 780, rx: 285, rz: 165, peakY: 92, offX: 36, rot: 0.38, seed: 108.7 },
  ];

  const islandMeshes: THREE.BufferGeometry[] = [];
  const rRings = 28;
  const aSegs = 52;

  for (const isl of distantFjordIslands) {
    const vCount = (rRings + 1) * (aSegs + 1);
    const positions = new Float32Array(vCount * 3);
    const cosR = Math.cos(isl.rot);
    const sinR = Math.sin(isl.rot);

    for (let ir = 0; ir <= rRings; ir++) {
      const rNorm = (ir / rRings) * 1.42;
      for (let ia = 0; ia <= aSegs; ia++) {
        const theta = (ia / aSegs) * Math.PI * 2.0;
        const lobe =
          1.0 +
          0.18 * Math.sin(theta * 2.0 + isl.seed) +
          0.11 * Math.cos(theta * 3.0 - isl.seed);
        const lx = Math.cos(theta) * isl.rx * lobe * rNorm;
        const lz = Math.sin(theta) * isl.rz * lobe * rNorm;
        const wx = isl.cx + lx * cosR - lz * sinR;
        const wz = isl.cz + lx * sinR + lz * cosR;

        // Asymmetric tilted cuesta & stepped basalt fjord mountain-island silhouette (like Faroe Islands mountains!)
        const rSum = Math.hypot((lx - isl.offX * 1.35) / (isl.rx * 0.96), lz / (isl.rz * 0.96));
        const dipTilt = THREE.MathUtils.clamp(0.56 + (lx / Math.max(20.0, isl.rx)) * 0.44, 0.22, 1.24);
        const concaveFlank = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSum / 1.02)), 0.85);
        const crestPeak = Math.pow(Math.max(0, 1.0 - Math.min(1.0, rSum / 0.76)), 1.65);
        const ridgeY =
          (roundedRidge2D(wx * 0.009 + isl.seed, wz * 0.011 - isl.seed, 3) - 0.40) *
          (isl.peakY * 0.34) *
          (1.0 - smoothstep(0.55, 1.05, rNorm));
        const rawUplandY =
          isl.peakY * (0.20 + 0.50 * concaveFlank * dipTilt + 0.32 * crestPeak) + ridgeY;
        const uplandY = applyBasaltHamrarTerraces(rawUplandY, lx * 0.02, Math.max(8.5, isl.peakY * 0.18), 0.48);

        const brinkR = 0.68 + 0.11 * Math.sin(theta * 3.0 - isl.seed) + 0.06 * Math.cos(theta * 5.0 + isl.seed);
        const cliffDrop = smoothstep(brinkR, 1.05, rNorm);
        const subDrop = smoothstep(0.98, 1.38, rNorm);
        const seaY = SEA_LEVEL_Y - 2.0;
        const upperY = THREE.MathUtils.lerp(uplandY, seaY, Math.pow(cliffDrop, 0.80));
        const wy = THREE.MathUtils.lerp(upperY, ISLAND_SKIRT_BASE_Y, subDrop);

        const idx = ir * (aSegs + 1) + ia;
        positions[idx * 3] = wx;
        positions[idx * 3 + 1] = wy;
        positions[idx * 3 + 2] = wz;
      }
    }

    const indices = new Uint32Array(rRings * aSegs * 6);
    let ptr = 0;
    for (let ir = 0; ir < rRings; ir++) {
      for (let ia = 0; ia < aSegs; ia++) {
        const a = ir * (aSegs + 1) + ia;
        const b = (ir + 1) * (aSegs + 1) + ia;
        const c = (ir + 1) * (aSegs + 1) + (ia + 1);
        const d = ir * (aSegs + 1) + (ia + 1);
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
    g.setIndex(new THREE.BufferAttribute(indices, 1));
    g.computeVertexNormals();
    islandMeshes.push(g);
  }

  const mergedGeom = mergeGeometries(islandMeshes, false)!;

  const farMat = new THREE.ShaderMaterial({
    name: 'DistantFjordAerialMaterial',
    uniforms: { ...atmosphereUniforms },
    vertexShader: /* glsl */ `
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      ${SHARED_SKY_GLSL}
      uniform vec3 uSunColor;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;

      void main() {
        vec3 N = normalize(vWorldNormal + vec3(0.0, 1e-5, 0.0));
        vec3 L = normalize(uSunDir + vec3(0.0, 1e-5, 0.0));
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);

        float strataBands = 0.90 + 0.14 * sin(vWorldPos.y * 0.55 + skyNoise2(vWorldPos.xz * 0.025) * 2.4);
        float slopeTurf = smoothstep(0.56, 0.84, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.074, 0.122, 0.058), slopeTurf * 0.82);

        float ndotl = clamp(dot(N, L), 0.0, 1.0);
        vec3 ambientSky = mix(uHorizonAntiColor, uZenithColor, 0.45) * 0.44;
        vec3 directSun = uSunColor * ndotl * 0.56;
        vec3 surfaceCol = rockBase * (ambientSky * 2.8 + directSun * 2.2);

        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float distHaze = 1.0 - exp(-pow(max(uMistDensity * 0.88 * dist, 1e-6), 1.22));
        float farFade = smoothstep(1250.0, 2250.0, dist);
        float waterlineMist = (1.0 - smoothstep(-11.5, 4.5, vWorldPos.y)) * 0.28;
        float totalVeil = clamp(max(distHaze, farFade) + waterlineMist * (1.0 - distHaze), 0.0, 1.0);

        vec3 finalCol = mix(surfaceCol, hazeCol, totalVeil);
        gl_FragColor = vec4(clamp(finalCol, vec3(0.0), vec3(24.0)), 1.0);
      }
    `,
  });

  const mesh = new THREE.Mesh(mergedGeom, farMat);
  mesh.frustumCulled = false;
  mesh.name = 'DistantFjordArchipelago';
  return mesh;
}

function buildVariedGrassTuftGeometry(): THREE.BufferGeometry {
  const blades: THREE.BufferGeometry[] = [];
  const bladeConfigs = [
    { dx: 0.0, dz: 0.0, h: 0.36, w: 0.020, bend: 0.11, rotY: 0.1 },
    { dx: 0.032, dz: 0.018, h: 0.28, w: 0.017, bend: 0.14, rotY: 1.8 },
    { dx: -0.028, dz: 0.022, h: 0.31, w: 0.018, bend: 0.12, rotY: 3.7 },
    { dx: 0.012, dz: -0.030, h: 0.23, w: 0.015, bend: 0.15, rotY: 5.0 },
  ];

  for (const cfg of bladeConfigs) {
    const segsY = 4;
    const positions: number[] = [];
    const normals: number[] = [];
    const indices: number[] = [];
    const cosY = Math.cos(cfg.rotY);
    const sinY = Math.sin(cfg.rotY);

    for (let i = 0; i <= segsY; i++) {
      const t = i / segsY;
      const halfW = cfg.w * (1.0 - 0.88 * Math.pow(t, 1.3));
      const y = cfg.h * t;
      const droop = cfg.bend * t * t;

      for (const side of [-1, 1]) {
        const lx = side * halfW;
        const lz = droop;
        const wx = cfg.dx + lx * cosY - lz * sinY;
        const wz = cfg.dz + lx * sinY + lz * cosY;
        positions.push(wx, y, wz);
        normals.push(-sinY * 0.3, 0.92, cosY * 0.3);
      }
    }

    for (let i = 0; i < segsY; i++) {
      const a = i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      indices.push(a, b, d, a, d, c);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    g.setIndex(indices);
    blades.push(g);
  }

  return mergeGeometries(blades, false)!;
}

function buildWildflowerClusterGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const flowerStems = [
    { ox: 0.0, oz: 0.0, h: 0.24, leanX: 0.03, leanZ: 0.02, r: 0.032 },
    { ox: 0.045, oz: 0.025, h: 0.19, leanX: 0.05, leanZ: -0.02, r: 0.027 },
    { ox: -0.038, oz: 0.030, h: 0.21, leanX: -0.04, leanZ: 0.04, r: 0.029 },
  ];

  for (const fs of flowerStems) {
    const stem = new THREE.CylinderGeometry(0.004, 0.006, fs.h, 4, 1);
    stem.translate(fs.ox + fs.leanX * 0.5, fs.h * 0.5, fs.oz + fs.leanZ * 0.5);
    const sc = stem.getAttribute('position').count;
    const stemCols = new Float32Array(sc * 3);
    for (let i = 0; i < sc; i++) {
      stemCols[i * 3] = 0.24;
      stemCols[i * 3 + 1] = 0.44;
      stemCols[i * 3 + 2] = 0.20;
    }
    stem.setAttribute('color', new THREE.BufferAttribute(stemCols, 3));
    parts.push(stem);

    const blossom = new THREE.CylinderGeometry(fs.r, fs.r * 0.28, fs.r * 0.55, 6, 1);
    blossom.translate(fs.ox + fs.leanX, fs.h + fs.r * 0.15, fs.oz + fs.leanZ);
    const bc = blossom.getAttribute('position').count;
    const bCols = new Float32Array(bc * 3);
    for (let i = 0; i < bc; i++) {
      bCols[i * 3] = 1.0;
      bCols[i * 3 + 1] = 1.0;
      bCols[i * 3 + 2] = 1.0;
    }
    blossom.setAttribute('color', new THREE.BufferAttribute(bCols, 3));
    parts.push(blossom);
  }

  return mergeGeometries(parts, false)!;
}

function buildCoastalStoneCairn(x: number, y: number, z: number, mat: THREE.Material): THREE.Group {
  const cairn = new THREE.Group();
  cairn.position.set(x, y, z);
  const tiers = [
    { rx: 0.44, ry: 0.17, rz: 0.38, dy: 0.08, rot: 0.2 },
    { rx: 0.35, ry: 0.14, rz: 0.31, dy: 0.28, rot: 1.1 },
    { rx: 0.27, ry: 0.12, rz: 0.24, dy: 0.45, rot: 2.3 },
    { rx: 0.19, ry: 0.11, rz: 0.18, dy: 0.60, rot: 0.7 },
    { rx: 0.12, ry: 0.10, rz: 0.11, dy: 0.73, rot: 1.9 },
  ];
  for (const t of tiers) {
    const g = new THREE.DodecahedronGeometry(1.0, 1);
    g.scale(t.rx, t.ry, t.rz);
    const m = new THREE.Mesh(g, mat);
    m.position.set((Math.sin(t.rot * 3) - 0.5) * 0.03, t.dy, (Math.cos(t.rot * 2) - 0.5) * 0.03);
    m.rotation.y = t.rot;
    m.castShadow = true;
    m.receiveShadow = true;
    cairn.add(m);
  }
  return cairn;
}

export function createNordicCliffWorld(
  atmosphereUniforms: AtmosphereSharedUniforms
): NordicWorldScene {
  const group = new THREE.Group();
  group.name = 'NordicCliffsideWorld';

  const rockTex = generateBasaltRockPBRTextures();

  const rockMat = new THREE.MeshStandardMaterial({
    name: 'NordicBasaltCliff_PBR',
    map: rockTex.albedo,
    normalMap: rockTex.normal,
    normalScale: new THREE.Vector2(1.25, 1.25),
    roughnessMap: rockTex.roughness,
    roughness: 0.86,
    metalness: 0.04,
    envMapIntensity: 0.98,
  });

  // 3D Triplanar Fractured North-Atlantic Basalt Cliff, "Hamrar" Rock Terraces & Coastal Turf Shader:
  // - Hardware-mipmapped 3D triplanar normalMap unpacking across YZ/XZ/XY world planes (ZERO dFdx/dFdy 2x2 pixel static
  //   and ZERO vertical UV stretching on sheer 90-degree cliffs, sea-arches & sea-stacks!).
  // - Exposes dark fractured basalt blocks, horizontal lava-bedding strata & coastal lichen on vertical cliffs,
  //   stepped "hamrar" hillside risers, and cliff-edge rims while blanketing gentle dip-slopes in natural turf.
  rockMat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, atmosphereUniforms);

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vec4 rwPos = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          rwPos = instanceMatrix * rwPos;
        #endif
        rwPos = modelMatrix * rwPos;
        vRockWorldPos = rwPos.xyz;
        mat3 nMat = mat3(modelMatrix);
        #ifdef USE_INSTANCING
          nMat = nMat * mat3(instanceMatrix);
        #endif
        vec3 rawWorldN = nMat * objectNormal;
        vRockWorldNormal = normalize(rawWorldN + vec3(0.0, 1e-5, 0.0));`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        ${SHARED_SKY_GLSL}
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;

        float evalNordicCliffStrata(vec3 wp) {
          float bedDip = wp.x * 0.024 - wp.z * 0.019 + skyFbm(wp.xz * 0.045) * 1.25;
          float bedWave = sin((wp.y + bedDip) * 2.15);
          float fineBed = abs(fract((wp.y + bedDip) * 0.34) - 0.5) * 2.0;
          float ledge = smoothstep(0.08, 0.38, fineBed);
          float vertColumns = skyFbm(vec2(wp.x * 0.38 + wp.z * 0.38, wp.y * 0.07));
          return ledge * 0.48 + (0.5 + 0.5 * bedWave) * 0.24 + vertColumns * 0.28;
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
          vec3 triBlend = abs(wN);
          triBlend = triBlend * triBlend * triBlend * triBlend;
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.068;
          vec3 rpDetail = vRockWorldPos * 0.26;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;

          float cliffSteepMask = 1.0 - smoothstep(0.36, 0.74, abs(wN.y));
          float strataVal = evalNordicCliffStrata(vRockWorldPos);
          // Subtle mineral & pale coastal lichen banding on sheer basalt rock walls (like Reynisfjara & Drangarnir!)
          vec3 mineralTint = mix(vec3(0.68, 0.70, 0.75), vec3(1.22, 1.19, 1.15), strataVal);
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.52) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.84);
        #endif`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 wNCol = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        // Localized basalt rock pads right beneath Toothless & Light Fury's claws
        float dPadTL = length((vRockWorldPos.xz - vec2(4.45, 0.22)) / vec2(2.35, 1.95));
        float dPadLF = length((vRockWorldPos.xz - vec2(-4.45, -0.22)) / vec2(2.35, 1.95));
        float dragonPadClear = smoothstep(0.68, 1.18, min(dPadTL, dPadLF));

        // Expose bare fractured basalt rock on cliffs, "hamrar" terrace risers & wind-scoured cliff rims (wN.y < 0.68)!
        float crownSlope = smoothstep(0.60, 0.84, wNCol.y);
        float aboveSpray = smoothstep(-4.8, 0.2, vRockWorldPos.y);
        float rimRockBreakup = smoothstep(0.24, 0.62, skyFbm(vRockWorldPos.xz * 0.16 + 2.9) * 0.78 + skyNoise2(vRockWorldPos.xz * 0.45) * 0.22);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * mix(rimRockBreakup, 1.0, smoothstep(0.76, 0.93, wNCol.y));

        // Natural Faroese / North Atlantic coastal turf: lush emerald-olive hollows + warm golden-olive upland fescue
        float meadowMacro = skyFbm(vRockWorldPos.xz * 0.065);
        float uplandElev = smoothstep(2.0, 20.0, vRockWorldPos.y);
        vec3 lushEmerald = mix(vec3(0.074, 0.148, 0.044), vec3(0.148, 0.186, 0.058), meadowMacro);
        vec3 uplandOlive = vec3(0.168, 0.178, 0.064);
        vec3 turfLush = mix(lushEmerald, uplandOlive, uplandElev * 0.36 * (1.0 - meadowMacro * 0.5));
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.92, 0.0, 0.92));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.2m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.3, -7.2, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.34, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        vec3 wNRgh = normalize(vRockWorldNormal + vec3(0.0, 1e-5, 0.0));
        #ifdef USE_ROUGHNESSMAP
          vec3 triR = abs(wNRgh);
          triR = triR * triR * triR * triR;
          triR /= max(triR.x + triR.y + triR.z, 1e-4);
          vec3 rpR = vRockWorldPos * 0.22;
          float triRoughSample =
            texture2D(roughnessMap, rpR.zy).g * triR.x +
            texture2D(roughnessMap, rpR.xz).g * triR.y +
            texture2D(roughnessMap, rpR.xy).g * triR.z;
          roughnessFactor = roughness * triRoughSample;
        #endif
        float meadowSmooth = smoothstep(0.64, 0.88, wNRgh.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.88, meadowSmooth * 0.78);
        float wetRough = 1.0 - smoothstep(-11.3, -7.2, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.18, wetRough * 0.85);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        #ifdef USE_NORMALMAP
        {
          // Hardware-filtered 3D Triplanar Basalt Normal Mapping (zero dFdx/dFdy static & zero vertical UV stretching!)
          vec3 gWN = normalize(inverseTransformDirection(nonPerturbedNormal, viewMatrix) + vec3(0.0, 1e-5, 0.0));
          vec3 triW = abs(gWN);
          triW = triW * triW * triW * triW;
          triW /= max(triW.x + triW.y + triW.z, 1e-4);

          vec3 np1 = vRockWorldPos * 0.068;
          vec3 np2 = vRockWorldPos * 0.26;

          vec3 tX = (texture2D(normalMap, np1.zy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.zy).xyz * 2.0 - 1.0) * 0.62;
          vec3 tY = (texture2D(normalMap, np1.xz).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xz).xyz * 2.0 - 1.0) * 0.62;
          vec3 tZ = (texture2D(normalMap, np1.xy).xyz * 2.0 - 1.0) * 0.58 + (texture2D(normalMap, np2.xy).xyz * 2.0 - 1.0) * 0.62;

          vec3 worldPerturb =
            vec3(0.0, tX.y, tX.x) * triW.x +
            vec3(tY.x, 0.0, tY.y) * triW.y +
            vec3(tZ.x, tZ.y, 0.0) * triW.z;

          // Project orthogonal to geometry normal so grazing cliff normals never invert backward
          worldPerturb -= gWN * dot(worldPerturb, gWN);

          float grassSoftMask = smoothstep(0.64, 0.88, gWN.y) * smoothstep(-4.0, 0.5, vRockWorldPos.y);
          float bumpStrength = mix(1.32, 0.14, grassSoftMask);
          vec3 perturbedWorldN = normalize(gWN + worldPerturb * bumpStrength + vec3(0.0, 1e-5, 0.0));
          normal = normalize(transformDirection(perturbedWorldN, viewMatrix) + vec3(0.0, 0.0, 1e-6));
        }
        #endif`
      )
      .replace(
        '#include <fog_fragment>',
        `vec3 rToFrag = vRockWorldPos - cameraPosition;
        float rDist = length(rToFrag);
        vec3 rHazeCol = evalHorizonHazeColor(rToFrag);
        float rAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * rDist, 1e-6), 1.26));
        gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`
      );
  };

  // ============================================================================
  // 0. CONTINUOUS 7,200m SUBMARINE BATHYMETRIC SEAFLOOR (-25.5m)
  // ============================================================================
  group.add(buildSubmarineBathymetryMesh(atmosphereUniforms));

  // ============================================================================
  // 1. EXPANDED TWIN-DRAGON HERO PROMONTORY (Irregular Rocky Jump-Off Cliff & 3D Basalt Crags!)
  // ============================================================================
  const mainGrid = 304;
  const cliffGeom = new THREE.PlaneGeometry(102, 104, mainGrid, mainGrid);
  cliffGeom.rotateX(-Math.PI * 0.5);
  const posAttr = cliffGeom.getAttribute('position') as THREE.BufferAttribute;
  const heroUvAttr = cliffGeom.getAttribute('uv') as THREE.BufferAttribute;

  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i) - 4.0;
    const z = posAttr.getZ(i) - 14.5;
    const y = sampleHeroCliffHeight(x, z);
    posAttr.setXYZ(i, x, y, z);
    heroUvAttr.setXY(i, x * 0.015, (z + y * 0.55) * 0.015);
  }
  applyVerticalCliffWallRelief(cliffGeom, 7.3, true);

  const cliffMesh = new THREE.Mesh(cliffGeom, rockMat);
  cliffMesh.receiveShadow = true;
  cliffMesh.castShadow = true;
  cliffMesh.name = 'HeroBasaltCliffPerch';
  group.add(cliffMesh);

  // True 3D Fractured Basalt Crag Buttresses, Overhanging Brink Ledges & Columnar Ribs along the Hero Cliff!
  const heroCragsMesh = new THREE.Mesh(buildHeroCliffRockOutcrops(), rockMat);
  heroCragsMesh.castShadow = true;
  heroCragsMesh.receiveShadow = true;
  heroCragsMesh.name = 'HeroCliffBasaltCragOutcrops';
  group.add(heroCragsMesh);

  const cairnY = sampleHeroCliffHeight(-8.65, -7.25);
  group.add(buildCoastalStoneCairn(-8.65, cairnY - 0.04, -7.25, rockMat));

  // ============================================================================
  // 2. NORDIC ARCHIPELAGO (Serene Grassy Islands, Natural Sea-Arches & Columnar Sea-Stacks!)
  // ============================================================================
  const archipelagoGroup = new THREE.Group();
  archipelagoGroup.name = 'NordicArchipelago';

  for (let idx = 0; idx < ARCHIPELAGO_ISLANDS.length; idx++) {
    const isl = ARCHIPELAGO_ISLANDS[idx];
    const ig = new THREE.PlaneGeometry(isl.spanX, isl.spanZ, isl.gridSegs, isl.gridSegs);
    ig.rotateX(-Math.PI * 0.5);
    const ip = ig.getAttribute('position') as THREE.BufferAttribute;
    const iuv = ig.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < ip.count; i++) {
      const wx = isl.centerX + ip.getX(i);
      const wz = isl.centerZ + ip.getZ(i);
      const wy = isl.evalHeight(wx, wz);
      ip.setXYZ(i, wx, wy, wz);
      iuv.setXY(i, wx * 0.015, (wz + wy * 0.55) * 0.015);
    }
    applyVerticalCliffWallRelief(ig, 19.1 + idx * 13.7, false);
    const im = new THREE.Mesh(ig, rockMat);
    im.receiveShadow = true;
    im.castShadow = true;
    im.name = isl.name;
    archipelagoGroup.add(im);
  }

  // Faroese Flat-Topped Grass-Capped Headland Sea-Arches!
  for (let i = 0; i < FAROESE_SEA_ARCHES.length; i++) {
    const as = FAROESE_SEA_ARCHES[i];
    const archMesh = new THREE.Mesh(buildFaroeseHeadlandSeaArchGeometry(as), rockMat);
    archMesh.position.set(as.x, 0, as.z);
    archMesh.rotation.y = as.rotY;
    archMesh.castShadow = true;
    archMesh.receiveShadow = true;
    archMesh.name = `FaroeseHeadlandSeaArch_${i}`;
    archipelagoGroup.add(archMesh);
  }

  // Blocky Flat-Topped Tabular Sea-Stacks ("Cletts") & Low Whaleback Skerries!
  const stackGeoms = TABULAR_SEA_STACKS.map((st) => buildTabularSeaStackGeometry(st));
  const mergedStacksMesh = new THREE.Mesh(mergeGeometries(stackGeoms, false)!, rockMat);
  mergedStacksMesh.castShadow = true;
  mergedStacksMesh.receiveShadow = true;
  mergedStacksMesh.name = 'TabularFaroeseSeaStacks';
  archipelagoGroup.add(mergedStacksMesh);

  group.add(archipelagoGroup);

  // ============================================================================
  // 3. MULAFOSSUR-STYLE SHEER SEA-CLIFF WATERFALL, MIST VEIL & OCEAN PLUNGE POOL!
  // ============================================================================
  const cosW = Math.cos(0.18);
  const sinW = Math.sin(0.18);
  const streamWorldPt = (lx: number): THREE.Vector3 => {
    const lz = Math.sin(lx * 0.11 + 0.35) * 1.85;
    const wx = -66.0 + lx * cosW + lz * sinW;
    const wz = -32.0 - lx * sinW + lz * cosW;
    const wy = evalWestWaterfallIsland(wx, wz);
    return new THREE.Vector3(wx, wy, wz);
  };

  // Locate the exact sheer sea-cliff brink where rock drops directly into deep open ocean water (< -13.0m)!
  let lipLX = 9.4;
  for (let lx = 5.0; lx <= 16.0; lx += 0.05) {
    const pt = streamWorldPt(lx);
    const aheadPt = streamWorldPt(lx + 1.35);
    if (pt.y > 5.5 && aheadPt.y < SEA_LEVEL_Y - 1.5) {
      lipLX = lx;
      break;
    }
    if (pt.y < 5.5) {
      lipLX = lx - 0.15;
      break;
    }
  }
  const lipPt = streamWorldPt(lipLX);

  // Outward fall direction aligned with the steepest sea-cliff gradient (-grad h) pointing into open ocean!
  const gEps = 1.2;
  const gradX = evalWestWaterfallIsland(lipPt.x + gEps, lipPt.z) - evalWestWaterfallIsland(lipPt.x - gEps, lipPt.z);
  const gradZ = evalWestWaterfallIsland(lipPt.x, lipPt.z + gEps) - evalWestWaterfallIsland(lipPt.x, lipPt.z - gEps);
  const streamFlowDir = new THREE.Vector2(-gradX, -gradZ);
  if (streamFlowDir.lengthSq() < 1e-4) {
    streamFlowDir.set(cosW, -sinW);
  } else {
    streamFlowDir.normalize();
  }
  const streamRightDir = new THREE.Vector2(-streamFlowDir.y, streamFlowDir.x);

  // Upland mountain stream ribbon flowing down the carved gorge right to the sheer cliff lip
  const streamSegsU = 36;
  const streamSegsV = 8;
  const stVerts = new Float32Array((streamSegsU + 1) * (streamSegsV + 1) * 3);
  const stUvs = new Float32Array((streamSegsU + 1) * (streamSegsV + 1) * 2);
  for (let iu = 0; iu <= streamSegsU; iu++) {
    const u = iu / streamSegsU;
    const lx = THREE.MathUtils.lerp(-9.0, lipLX + 0.18, u);
    const center = streamWorldPt(lx);
    const nextC = streamWorldPt(lx + 0.35);
    const localTan = new THREE.Vector2(nextC.x - center.x, nextC.z - center.z).normalize();
    const localRight = new THREE.Vector2(-localTan.y, localTan.x);
    // Narrows slightly into a fast rocky chute right at the Mulafossur brink!
    const halfW = THREE.MathUtils.lerp(1.15, 0.92, smoothstep(0.55, 1.0, u));
    for (let iv = 0; iv <= streamSegsV; iv++) {
      const v = iv / streamSegsV;
      const lat = (v - 0.5) * 2.0 * halfW;
      const wx = center.x + localRight.x * lat;
      const wz = center.z + localRight.y * lat;
      const bedY = evalWestWaterfallIsland(wx, wz);
      const wy = Math.max(bedY + 0.12, center.y + 0.18);
      const idx = iu * (streamSegsV + 1) + iv;
      stVerts[idx * 3] = wx;
      stVerts[idx * 3 + 1] = wy;
      stVerts[idx * 3 + 2] = wz;
      stUvs[idx * 2] = v;
      stUvs[idx * 2 + 1] = 1.0 + (1.0 - u) * 2.4;
    }
  }
  const stIndices: number[] = [];
  for (let iu = 0; iu < streamSegsU; iu++) {
    for (let iv = 0; iv < streamSegsV; iv++) {
      const a = iu * (streamSegsV + 1) + iv;
      const b = (iu + 1) * (streamSegsV + 1) + iv;
      const c = (iu + 1) * (streamSegsV + 1) + (iv + 1);
      const d = iu * (streamSegsV + 1) + (iv + 1);
      stIndices.push(a, b, c, a, c, d);
    }
  }
  const streamGeom = new THREE.BufferGeometry();
  streamGeom.setAttribute('position', new THREE.BufferAttribute(stVerts, 3));
  streamGeom.setAttribute('uv', new THREE.BufferAttribute(stUvs, 2));
  streamGeom.setIndex(stIndices);
  streamGeom.computeVertexNormals();

  // Build free-falling parabolic Mulafossur cascade + outer wind-feathered mist veil (guaranteed 100% clear of rock!)
  const buildCascadeSheetGeometry = (
    topHalfW: number,
    botHalfW: number,
    throwDist: number,
    bowDepth: number,
    windDriftRight: number
  ): THREE.BufferGeometry => {
    const wfSegsY = 52;
    const wfSegsX = 20;
    const lipStartY = lipPt.y + 0.18;
    const fallBottomY = SEA_LEVEL_Y - 1.85;
    const fallHeight = lipStartY - fallBottomY;

    const wfVerts = new Float32Array((wfSegsY + 1) * (wfSegsX + 1) * 3);
    const wfUvs = new Float32Array((wfSegsY + 1) * (wfSegsX + 1) * 2);

    for (let iy = 0; iy <= wfSegsY; iy++) {
      const s = iy / wfSegsY;
      // Ballistic horizontal throw x(s) ~ v0 * t, vertical drop y(s) ~ 0.5 * g * t^2
      const wy = lipStartY - fallHeight * Math.pow(s, 1.62);
      const ballisticForward = 0.28 + throwDist * Math.pow(s, 0.72);
      const halfWidth = THREE.MathUtils.lerp(topHalfW, botHalfW, Math.pow(s, 0.88));
      const windShift = windDriftRight * s * s;

      for (let ix = 0; ix <= wfSegsX; ix++) {
        const u = ix / wfSegsX;
        const lat = (u - 0.5) * 2.0 * halfWidth + windShift;
        const archBow = Math.sin(u * Math.PI) * (bowDepth + 0.42 * s);
        let wx = lipPt.x + streamRightDir.x * lat + streamFlowDir.x * (ballisticForward + archBow);
        let wz = lipPt.z + streamRightDir.y * lat + streamFlowDir.y * (ballisticForward + archBow);

        // Strict rock-clearance safety guard: push any vertex outward if the cliff rock is within 0.55m!
        for (let step = 0; step < 12; step++) {
          const rockY = sampleWorldTerrainHeight(wx, wz);
          if (wy >= rockY + 0.52) break;
          wx += streamFlowDir.x * 0.42;
          wz += streamFlowDir.y * 0.42;
        }

        const idx = iy * (wfSegsX + 1) + ix;
        wfVerts[idx * 3] = wx;
        wfVerts[idx * 3 + 1] = wy;
        wfVerts[idx * 3 + 2] = wz;
        wfUvs[idx * 2] = u;
        wfUvs[idx * 2 + 1] = 1.0 - s;
      }
    }

    const wfIndices: number[] = [];
    for (let iy = 0; iy < wfSegsY; iy++) {
      for (let ix = 0; ix < wfSegsX; ix++) {
        const a = iy * (wfSegsX + 1) + ix;
        const b = (iy + 1) * (wfSegsX + 1) + ix;
        const c = (iy + 1) * (wfSegsX + 1) + (ix + 1);
        const d = iy * (wfSegsX + 1) + (ix + 1);
        wfIndices.push(a, b, c, a, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(wfVerts, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(wfUvs, 2));
    g.setIndex(wfIndices);
    g.computeVertexNormals();
    return g;
  };

  const horizontalThrow = 3.85;
  const wfCoreGeom = buildCascadeSheetGeometry(0.92, 2.15, horizontalThrow, 0.34, 0.28);
  const wfMistVeilGeom = buildCascadeSheetGeometry(1.18, 3.35, horizontalThrow + 0.55, 0.68, 0.72);

  // Locate exact ocean surface impact point (s where wy == SEA_LEVEL_Y)!
  const sSeaImpact = Math.pow(
    (lipPt.y + 0.18 - SEA_LEVEL_Y) / (lipPt.y + 0.18 - (SEA_LEVEL_Y - 1.85)),
    1.0 / 1.62
  );
  let plungeX = lipPt.x + streamFlowDir.x * (0.28 + horizontalThrow * Math.pow(sSeaImpact, 0.72) + 0.55);
  let plungeZ = lipPt.z + streamFlowDir.y * (0.28 + horizontalThrow * Math.pow(sSeaImpact, 0.72) + 0.55);
  for (let step = 0; step < 12; step++) {
    if (sampleWorldTerrainHeight(plungeX, plungeZ) < SEA_LEVEL_Y - 2.2) break;
    plungeX += streamFlowDir.x * 0.55;
    plungeZ += streamFlowDir.y * 0.55;
  }

  const waterfallUniforms: Record<string, THREE.IUniform> = {
    ...atmosphereUniforms,
  };

  const makeWaterfallLayerMaterial = (isOuterMistVeil: boolean): THREE.ShaderMaterial =>
    new THREE.ShaderMaterial({
      name: 'NordicWaterfallShader',
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        ...waterfallUniforms,
        uVeilMode: { value: isOuterMistVeil ? 1.0 : 0.0 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        uniform float uVeilMode;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          // Subtle wind-flutter & aerated turbulence in the lower free-falling plume
          float fallProg = clamp(1.0 - uv.y, 0.0, 1.0);
          float flutter = sin(uTime * 5.2 + wp.y * 0.85 + uv.x * 6.0) * (0.06 + 0.18 * uVeilMode) * fallProg;
          wp.x += flutter;
          wp.z += flutter * 0.7;
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        ${SHARED_SKY_GLSL}
        uniform vec3 uSunColor;
        uniform vec3 uWaterShallowColor;
        uniform float uVeilMode;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        void main() {
          float uClamped = clamp(vUv.x, 0.0, 1.0);
          float sideFeather = sin(uClamped * 3.14159265);
          float fallFrac = clamp(1.0 - vUv.y, 0.0, 1.0);

          // Gravitational velocity stretch: water accelerates downward so vertical streaks elongate!
          float gravCoord = pow(max(vUv.y, 0.0), 0.74);
          float ribbonMacro = skyFbm(vec2(uClamped * 7.5, gravCoord * 6.5 + uTime * 2.35));
          float ribbonFine = skyFbm(vec2(uClamped * 22.0 + 3.7, gravCoord * 11.5 + uTime * 3.95));
          float fineDroplets = skyNoise2(vec2(uClamped * 38.0 - 1.9, gravCoord * 24.0 + uTime * 5.6));

          float threads = smoothstep(0.22, 0.74, ribbonMacro * 0.54 + ribbonFine * 0.34 + fineDroplets * 0.12);
          float coreSpine = pow(max(sideFeather, 1e-5), 1.35) * (1.0 - 0.32 * fallFrac);

          float crestFoam = smoothstep(0.76, 1.0, vUv.y) * 0.62;
          float plungeBoil = smoothstep(0.24, 0.02, vUv.y) * 0.72;

          // Luminous aerated silver-white Mulafossur cascade catching sky & golden-hour sunlight!
          vec3 skyIllum = mix(uHorizonAntiColor, uHorizonSunColor, 0.46) * 1.32 + uSunColor * 0.48;
          vec3 aeratedWhite = clamp(skyIllum * 1.18 + vec3(0.16, 0.19, 0.22), vec3(0.0), vec3(4.5));
          vec3 glacChute = uWaterShallowColor * 1.35 + skyIllum * 0.48;
          float foamWeight = clamp(threads * 0.78 + coreSpine * 0.42 + crestFoam + plungeBoil, 0.0, 1.0);
          vec3 col = mix(glacChute, aeratedWhite, foamWeight);

          vec3 toFrag = vWorldPos - cameraPosition;
          float dist = length(toFrag);
          vec3 hazeCol = evalHorizonHazeColor(toFrag);
          float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
          col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

          float baseAlpha = pow(max(sideFeather, 1e-5), mix(0.52, 1.15, uVeilMode))
                          * (mix(0.48, 0.14, uVeilMode) + mix(0.52, 0.34, uVeilMode) * threads + crestFoam * (1.0 - uVeilMode * 0.6) + plungeBoil * 0.5);
          // Soft sub-surface fade below sea level (-11.5m) so the curtain dissolves into the ocean boil seamlessly!
          float subSeaFade = smoothstep(-13.2, -11.35, vWorldPos.y);
          float alpha = clamp(baseAlpha * subSeaFade, 0.0, mix(0.95, 0.44, uVeilMode));
          gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), alpha);
        }
      `,
    });

  const wfCoreMat = makeWaterfallLayerMaterial(false);
  const wfMistMat = makeWaterfallLayerMaterial(true);

  const wfStreamMesh = new THREE.Mesh(streamGeom, wfCoreMat);
  wfStreamMesh.renderOrder = 3;
  const wfCurtainMesh = new THREE.Mesh(wfCoreGeom, wfCoreMat);
  wfCurtainMesh.renderOrder = 3;
  const wfMistVeilMesh = new THREE.Mesh(wfMistVeilGeom, wfMistMat);
  wfMistVeilMesh.renderOrder = 4;
  group.add(wfStreamMesh);
  group.add(wfCurtainMesh);
  group.add(wfMistVeilMesh);

  const plungePoolGeom = new THREE.CircleGeometry(9.2, 48);
  plungePoolGeom.rotateX(-Math.PI * 0.5);
  const plungePoolMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: waterfallUniforms,
    vertexShader: /* glsl */ `
      uniform float uTime;
      varying vec2 vLocalXZ;
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        wp.y += sin(uTime * 1.6 + wp.x * 0.18) * 0.18;
        vLocalXZ = position.xz;
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      ${SHARED_SKY_GLSL}
      uniform vec3 uSunColor;
      varying vec2 vLocalXZ;
      varying vec3 vWorldPos;
      void main() {
        float r = length(vLocalXZ) / 9.2;
        if (r > 1.0) discard;
        float ang = atan(vLocalXZ.y, vLocalXZ.x);
        float radialWave = sin(r * 18.0 - uTime * 3.8 + skyNoise2(vLocalXZ * 0.9) * 2.5) * 0.5 + 0.5;
        float foamCells = skyFbm(vLocalXZ * 0.85 - vec2(cos(ang), sin(ang)) * uTime * 0.55);
        float coreBoil = smoothstep(0.55, 0.05, r) * 0.88;
        float outerRings = smoothstep(1.0, 0.25, r) * radialWave * smoothstep(0.32, 0.78, foamCells) * 0.72;
        float alpha = clamp(coreBoil + outerRings, 0.0, 0.92) * smoothstep(1.0, 0.72, r);

        vec3 foamCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.28 + uSunColor * 0.36;
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        foamCol = mix(foamCol, hazeCol, clamp(1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(clamp(foamCol, vec3(0.0), vec3(24.0)), alpha);
      }
    `,
  });
  const plungePoolMesh = new THREE.Mesh(plungePoolGeom, plungePoolMat);
  plungePoolMesh.position.set(plungeX, SEA_LEVEL_Y + 0.16, plungeZ);
  plungePoolMesh.renderOrder = 3;
  group.add(plungePoolMesh);

  const sprayCount = 140;
  const sprayPos = new Float32Array(sprayCount * 3);
  const spraySeed = new Float32Array(sprayCount);
  for (let i = 0; i < sprayCount; i++) {
    sprayPos[i * 3] = plungeX + (hash2D(i, 11.3) - 0.5) * 5.8;
    sprayPos[i * 3 + 1] = SEA_LEVEL_Y + hash2D(i, 27.9) * 9.5;
    sprayPos[i * 3 + 2] = plungeZ + (hash2D(i, 43.1) - 0.5) * 5.8;
    spraySeed[i] = hash2D(i, 61.7);
  }
  const sprayGeom = new THREE.BufferGeometry();
  sprayGeom.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
  sprayGeom.setAttribute('aSeed', new THREE.BufferAttribute(spraySeed, 1));
  const sprayMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: waterfallUniforms,
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime;
      varying float vLife;
      void main() {
        float life = fract(aSeed + uTime * (0.22 + aSeed * 0.16));
        vLife = life;
        vec3 p = position;
        p.y = -11.3 + life * 10.2;
        p.x += sin(life * 4.0 + aSeed * 10.0) * (0.8 + life * 2.4);
        p.z += cos(life * 3.5 + aSeed * 8.0) * (0.8 + life * 2.4);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((195.0 * (0.4 + life * 0.9)) / max(1.0, -mv.z), 4.0, 44.0);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      ${SHARED_SKY_GLSL}
      uniform vec3 uSunColor;
      varying float vLife;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float puff = exp(-r2 * 10.0) * sin(vLife * 3.14159) * 0.22;
        vec3 mistCol = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.15 + uSunColor * 0.25;
        gl_FragColor = vec4(mistCol, puff);
      }
    `,
  });
  const sprayPoints = new THREE.Points(sprayGeom, sprayMat);
  sprayPoints.renderOrder = 4;
  sprayPoints.frustumCulled = false;
  group.add(sprayPoints);

  // ============================================================================
  // 4. BLOCKY COASTAL TALUS BOULDERS AT WATERLINE & LOW FLAT MEADOW ERRATICS!
  // ============================================================================
  const dummy = new THREE.Object3D();

  // Natural weathered blocky basalt slab (low, wide, flat-bottomed — NEVER pointy!)
  const erraticGeom = new THREE.DodecahedronGeometry(0.58, 1);
  const bPos = erraticGeom.getAttribute('position') as THREE.BufferAttribute;
  for (let i = 0; i < bPos.count; i++) {
    const bx = bPos.getX(i);
    let by = bPos.getY(i);
    const bz = bPos.getZ(i);
    const blockMod = 0.84 + 0.28 * fbm2D(bx * 2.2 + 4.3, by * 2.2 + bz * 2.2, 3);
    if (by < -0.06) {
      by = -0.06 + (by + 0.06) * 0.25;
    }
    bPos.setXYZ(i, bx * blockMod * 1.38, by * blockMod * 0.52, bz * blockMod * 1.22);
  }
  erraticGeom.computeVertexNormals();

  const floraZones: Array<{
    cx: number;
    cz: number;
    spanX: number;
    spanZ: number;
    isHero: boolean;
    evalH: (x: number, z: number) => number;
  }> = [
    { cx: -3.5, cz: -14.0, spanX: 62.0, spanZ: 58.0, isHero: true, evalH: sampleHeroCliffHeight },
    { cx: -74.0, cz: -36.0, spanX: 68.0, spanZ: 58.0, isHero: false, evalH: evalWestWaterfallIsland },
    { cx: 88.0, cz: 36.0, spanX: 74.0, spanZ: 74.0, isHero: false, evalH: evalStarboardCrescentAtoll },
    { cx: 84.0, cz: -46.0, spanX: 68.0, spanZ: 78.0, isHero: false, evalH: evalEastSerpentineTomboloIsland },
    { cx: -124.0, cz: -86.0, spanX: 68.0, spanZ: 58.0, isHero: false, evalH: evalWestTraelanipaTableIsland },
    { cx: -48.0, cz: -92.0, spanX: 52.0, spanZ: 48.0, isHero: false, evalH: evalNorthWestHolmPair },
  ];

  const maxRockSlabs = 220;
  const boulderInst = new THREE.InstancedMesh(erraticGeom, rockMat, maxRockSlabs);
  boulderInst.castShadow = true;
  boulderInst.receiveShadow = true;
  let bPlaced = 0;
  const upAxis = new THREE.Vector3(0, 1, 0);
  const surfNormal = new THREE.Vector3();
  const alignQuat = new THREE.Quaternion();
  const yawQuat = new THREE.Quaternion();

  // Subtle low wave-washed basalt talus slabs right at cliff-foot waterline (-12.2m .. -10.5m)
  for (let zIdx = 0; zIdx < floraZones.length; zIdx++) {
    const fz = floraZones[zIdx];
    let talusInZone = 0;
    for (let i = 0; i < 550 && talusInZone < 20 && bPlaced < maxRockSlabs; i++) {
      const seed = 7000 + zIdx * 800 + i;
      const tx = fz.cx + (hash2D(seed, 14.7) - 0.5) * (fz.spanX * 1.25);
      const tz = fz.cz + (hash2D(seed, 53.9) - 0.5) * (fz.spanZ * 1.25);
      const ty = fz.evalH(tx, tz);
      if (ty < -12.3 || ty > -10.6) continue;
      if (Math.hypot(tx - lipPt.x, tz - lipPt.z) < 7.0) continue;

      const sc = 1.25 + hash2D(seed, 29.1) * 2.10;
      dummy.position.set(tx, ty - 0.25 * sc, tz);
      dummy.rotation.set(
        (hash2D(seed, 3.3) - 0.5) * 0.18,
        hash2D(seed, 9.8) * Math.PI * 2,
        (hash2D(seed, 6.1) - 0.5) * 0.18
      );
      dummy.scale.set(sc * (0.95 + hash2D(seed, 4.4) * 0.35), sc * 0.58, sc);
      dummy.updateMatrix();
      boulderInst.setMatrixAt(bPlaced++, dummy.matrix);
      talusInZone++;
    }
  }

  // Low weathered meadow slabs strictly on gentle grassy plateaus (slope <= 0.24)!
  for (let zIdx = 0; zIdx < floraZones.length; zIdx++) {
    const fz = floraZones[zIdx];
    const quota = fz.isHero ? 26 : 12;
    let countInZone = 0;
    for (let i = 0; i < 400 && countInZone < quota && bPlaced < maxRockSlabs; i++) {
      const seed = zIdx * 500 + i;
      const bx = fz.cx + (hash2D(seed, 41.2) - 0.5) * fz.spanX;
      const bz = fz.cz + (hash2D(seed, 83.7) - 0.5) * fz.spanZ;
      if (fz.isHero) {
        const clearZone = Math.sqrt(Math.pow(bx / 10.2, 2) + Math.pow((bz + 1.0) / 6.4, 2));
        if (clearZone < 1.0) continue;
      } else if (Math.hypot(bx - lipPt.x, bz - lipPt.z) < 5.5) {
        continue;
      }

      const by = fz.evalH(bx, bz);
      if (by < 0.25 || by > 34.0) continue;

      const hX1 = fz.evalH(bx + 0.6, bz);
      const hX0 = fz.evalH(bx - 0.6, bz);
      const hZ1 = fz.evalH(bx, bz + 0.6);
      const hZ0 = fz.evalH(bx, bz - 0.6);
      const dHx = (hX1 - hX0) / 1.2;
      const dHz = (hZ1 - hZ0) / 1.2;
      const slope = Math.hypot(dHx, dHz);
      if (slope > 0.38 || Math.min(hX1, hX0, hZ1, hZ0) < 0.0) continue;

      const sc = (fz.isHero ? 0.38 : 0.58) + hash2D(seed, 19.4) * (fz.isHero ? 0.62 : 0.95);
      surfNormal.set(-dHx, 1.0, -dHz).normalize();
      alignQuat.setFromUnitVectors(upAxis, surfNormal);
      yawQuat.setFromAxisAngle(upAxis, hash2D(seed, 8.9) * Math.PI * 2);
      dummy.quaternion.copy(alignQuat).multiply(yawQuat);
      dummy.position.set(bx, by - 0.14 * sc, bz);
      dummy.scale.set(sc * (0.95 + hash2D(seed, 2.3) * 0.32), sc * 0.55, sc);
      dummy.updateMatrix();
      boulderInst.setMatrixAt(bPlaced++, dummy.matrix);
      countInZone++;
    }
  }
  boulderInst.count = bPlaced;
  boulderInst.instanceMatrix.needsUpdate = true;
  group.add(boulderInst);

  // ============================================================================
  // 5. NATURAL MULTI-SPECIES SWAYING GRASS & COASTAL WILDFLOWERS
  // ============================================================================
  const grassTuftGeom = buildVariedGrassTuftGeometry();
  const floraTimeUniform = { uTime: { value: 0 } };

  const applyWindAndAerialToFlora = (mat: THREE.MeshStandardMaterial, swayHeight: number) => {
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, atmosphereUniforms);
      shader.uniforms.uFloraTime = floraTimeUniform.uTime;

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
          uniform float uFloraTime;
          varying vec3 vFloraWorldPos;`
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float hFrac = clamp(position.y / ${swayHeight.toFixed(2)}, 0.0, 1.0);
          vec3 instW = vec3(0.0);
          #ifdef USE_INSTANCING
            instW = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          float gust = sin(uFloraTime * 2.1 + instW.x * 0.75 + instW.z * 0.65) * 0.085
                     + sin(uFloraTime * 4.3 + instW.x * 1.9) * 0.032;
          transformed.x += gust * hFrac * hFrac;
          transformed.z += gust * 0.55 * hFrac * hFrac;`
        )
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>
          vec4 fwPos = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            fwPos = instanceMatrix * fwPos;
          #endif
          fwPos = modelMatrix * fwPos;
          vFloraWorldPos = fwPos.xyz;`
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
          ${SHARED_SKY_GLSL}
          varying vec3 vFloraWorldPos;`
        )
        .replace(
          '#include <fog_fragment>',
          `vec3 fToFrag = vFloraWorldPos - cameraPosition;
          float fDist = length(fToFrag);
          vec3 fHaze = evalHorizonHazeColor(fToFrag);
          float fAerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * fDist, 1e-6), 1.26));
          gl_FragColor.rgb = clamp(mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0)), vec3(0.0), vec3(24.0));`
        );
    };
  };

  const grassMat = new THREE.MeshStandardMaterial({
    name: 'NordicVariedCoastalGrass',
    color: new THREE.Color(0xffffff),
    roughness: 0.78,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });
  applyWindAndAerialToFlora(grassMat, 0.36);

  const maxGrassTufts = 8400;
  const grassInstanced = new THREE.InstancedMesh(grassTuftGeom, grassMat, maxGrassTufts);
  grassInstanced.castShadow = false;
  grassInstanced.receiveShadow = true;

  const tuftColor = new THREE.Color();
  let grassPlaced = 0;

  for (let zIdx = 0; zIdx < floraZones.length; zIdx++) {
    const fz = floraZones[zIdx];
    const targetCount = fz.isHero ? 4200 : 840;
    let placedHere = 0;
    let attempts = 0;

    while (placedHere < targetCount && attempts < targetCount * 7 && grassPlaced < maxGrassTufts) {
      attempts++;
      const seed = zIdx * 25000 + attempts;
      const rx = fz.cx + (hash2D(seed, 1.3) - 0.5) * fz.spanX;
      const rz = fz.cz + (hash2D(seed, 7.9) - 0.5) * fz.spanZ;

      if (fz.isHero) {
        const clearToothless = Math.sqrt(Math.pow((rx - 4.45) / 2.35, 2) + Math.pow((rz + 0.85) / 3.85, 2));
        const clearLightFury = Math.sqrt(Math.pow((rx + 4.45) / 2.35, 2) + Math.pow((rz + 1.15) / 3.85, 2));
        if (clearToothless < 1.0 || clearLightFury < 1.0) continue;
      }

      const gy = fz.evalH(rx, rz);
      const gyX = fz.evalH(rx + 0.4, rz);
      const gyZ = fz.evalH(rx, rz + 0.4);
      const slope = Math.hypot(gyX - gy, gyZ - gy) / 0.4;
      if (gy < -0.5 || slope > 0.78) continue;

      const patchDensity = fbm2D(rx * 0.45 + 2.3, rz * 0.45 - 4.1, 3);
      if (patchDensity < 0.32) continue;

      const tallSedgeFactor = smoothstep(0.58, 0.85, patchDensity);
      const scaleH = 0.55 + hash2D(seed, 3.7) * 0.72 + tallSedgeFactor * 0.50;
      const scaleW = 0.75 + hash2D(seed, 5.1) * 0.62;

      dummy.position.set(rx, gy - 0.02, rz);
      dummy.scale.set(scaleW, scaleH, scaleW);
      dummy.rotation.set(
        (hash2D(seed, 9.2) - 0.5) * 0.18,
        hash2D(seed, 11.4) * Math.PI * 2,
        (hash2D(seed, 13.8) - 0.5) * 0.18
      );
      dummy.updateMatrix();
      grassInstanced.setMatrixAt(grassPlaced, dummy.matrix);

      const speciesRoll = hash2D(seed, 17.1);
      if (speciesRoll < 0.54) {
        tuftColor.setHSL(0.24 + (hash2D(seed, 21.1) - 0.5) * 0.04, 0.44, 0.21 + hash2D(seed, 23.7) * 0.11);
      } else if (speciesRoll < 0.80) {
        tuftColor.setHSL(0.14 + (hash2D(seed, 25.3) - 0.5) * 0.03, 0.42, 0.30 + hash2D(seed, 29.1) * 0.11);
      } else {
        tuftColor.setHSL(0.28 + (hash2D(seed, 31.9) - 0.5) * 0.03, 0.30, 0.22 + hash2D(seed, 37.4) * 0.10);
      }
      grassInstanced.setColorAt(grassPlaced, tuftColor);
      grassPlaced++;
      placedHere++;
    }
  }
  grassInstanced.count = grassPlaced;
  grassInstanced.instanceMatrix.needsUpdate = true;
  if (grassInstanced.instanceColor) grassInstanced.instanceColor.needsUpdate = true;
  group.add(grassInstanced);

  const flowerGeom = buildWildflowerClusterGeometry();
  const flowerMat = new THREE.MeshStandardMaterial({
    name: 'NordicCliffWildflowers',
    vertexColors: true,
    roughness: 0.68,
    metalness: 0.0,
  });
  applyWindAndAerialToFlora(flowerMat, 0.26);

  const maxFlowers = 2400;
  const flowerInstanced = new THREE.InstancedMesh(flowerGeom, flowerMat, maxFlowers);
  flowerInstanced.castShadow = false;
  flowerInstanced.receiveShadow = true;

  const petalColor = new THREE.Color();
  let flowersPlaced = 0;

  for (let zIdx = 0; zIdx < floraZones.length; zIdx++) {
    const fz = floraZones[zIdx];
    const targetF = fz.isHero ? 1280 : 220;
    let placedHere = 0;
    let attempts = 0;

    while (placedHere < targetF && attempts < targetF * 8 && flowersPlaced < maxFlowers) {
      attempts++;
      const seed = 90000 + zIdx * 18000 + attempts;
      const rx = fz.cx + (hash2D(seed, 2.7) - 0.5) * fz.spanX;
      const rz = fz.cz + (hash2D(seed, 6.3) - 0.5) * fz.spanZ;

      if (fz.isHero) {
        const clearToothless = Math.sqrt(Math.pow((rx - 4.45) / 2.55, 2) + Math.pow((rz + 0.85) / 4.05, 2));
        const clearLightFury = Math.sqrt(Math.pow((rx + 4.45) / 2.55, 2) + Math.pow((rz + 1.15) / 4.05, 2));
        if (clearToothless < 1.0 || clearLightFury < 1.0) continue;
      }

      const gy = fz.evalH(rx, rz);
      const slope = Math.hypot(fz.evalH(rx + 0.4, rz) - gy, fz.evalH(rx, rz + 0.4) - gy) / 0.4;
      if (gy < -0.2 || slope > 0.66) continue;

      const colonyNoise = fbm2D(rx * 0.48 - 8.2, rz * 0.48 + 5.7, 3);
      if (colonyNoise < 0.48) continue;

      const sc = 0.68 + hash2D(seed, 11.9) * 0.65;
      dummy.position.set(rx, gy - 0.015, rz);
      dummy.scale.set(sc, sc * (0.85 + hash2D(seed, 14.2) * 0.35), sc);
      dummy.rotation.set(
        (hash2D(seed, 18.5) - 0.5) * 0.18,
        hash2D(seed, 22.1) * Math.PI * 2,
        (hash2D(seed, 26.8) - 0.5) * 0.18
      );
      dummy.updateMatrix();
      flowerInstanced.setMatrixAt(flowersPlaced, dummy.matrix);

      const speciesPatch = fbm2D(rx * 0.25 + 13.1, rz * 0.25 - 9.4, 2);
      if (speciesPatch < 0.42) {
        petalColor.setHSL(0.93 + (hash2D(seed, 31.1) - 0.5) * 0.04, 0.68, 0.66 + hash2D(seed, 33.7) * 0.10);
      } else if (speciesPatch < 0.62) {
        petalColor.setHSL(0.12, 0.14, 0.88 + hash2D(seed, 35.9) * 0.08);
      } else if (speciesPatch < 0.78) {
        petalColor.setHSL(0.13 + (hash2D(seed, 39.2) - 0.5) * 0.02, 0.86, 0.56 + hash2D(seed, 41.8) * 0.08);
      } else {
        petalColor.setHSL(0.79 + (hash2D(seed, 45.1) - 0.5) * 0.04, 0.52, 0.54 + hash2D(seed, 49.3) * 0.10);
      }

      flowerInstanced.setColorAt(flowersPlaced, petalColor);
      flowersPlaced++;
      placedHere++;
    }
  }
  flowerInstanced.count = flowersPlaced;
  flowerInstanced.instanceMatrix.needsUpdate = true;
  if (flowerInstanced.instanceColor) flowerInstanced.instanceColor.needsUpdate = true;
  group.add(flowerInstanced);

  // ============================================================================
  // 6. FAROESE DISTANT TABLE-ISLANDS & IRREGULAR NORTH SEA OCEAN!
  // ============================================================================
  group.add(buildDistantFjordArchipelago(atmosphereUniforms));

  const surfObstacles: Array<{ x: number; z: number; radius: number; boost?: number }> = [
    { x: -2.0, z: -8.0, radius: 22.5 },                      // Expanded Hero Promontory main surf collar
    { x: -18.0, z: -26.0, radius: 18.0 },                    // Hero NW connected cape surf collar
    { x: 27.5, z: -10.5, radius: 6.5 },                      // Hero East Tabular Clett surf
    { x: -37.5, z: -22.0, radius: 7.2 },                     // Hero West Tabular Clett surf
    { x: plungeX, z: plungeZ, radius: 5.8, boost: 1.0 },     // Waterfall ocean impact boil!
    { x: -66.0, z: -32.0, radius: 25.5 },                    // West Waterfall Island East lobe
    { x: -91.0, z: -42.5, radius: 21.0 },                    // West Waterfall Island West lobe + Sea-Arch
    { x: 88.0, z: 36.0, radius: 34.5 },                      // Starboard Crescent Lagoon Atoll outer rim
    { x: 59.5, z: 23.0, radius: 11.0 },                      // Grand Faroese Headland Sea-Arch surf
    { x: 43.5, z: 14.5, radius: 6.2 },                       // Blocky Flat-Topped Clett off Sea-Arch tip (like Photo 3!)
    { x: 63.0, z: 50.5, radius: 8.2 },                       // Whaleback skerry off Crescent SW horn
    { x: 88.0, z: -56.0, radius: 30.5 },                     // East Serpentine Fjord main lobe
    { x: 70.0, z: -22.5, radius: 17.5 },                     // Tied northern holm & saddle surf
    { x: -124.0, z: -86.0, radius: 34.0 },                   // West Traelanipa Tilted Table-Island surf
    { x: -42.0, z: -96.0, radius: 20.0 },                    // North-West Holm Pair
    { x: 36.0, z: -108.0, radius: 22.0 },                    // North-East Headland Table
    { x: -144.0, z: 78.0, radius: 44.0 },                    // South-West Broken Crescent
    { x: 168.0, z: 122.0, radius: 42.0 },                    // South-East Table Sound
    { x: -206.0, z: -96.0, radius: 46.0 },                   // Far West Cliff Massif
    { x: -8.0, z: -222.0, radius: 58.0 },                    // Northern Sound Crescent Island
    { x: -18.0, z: 236.0, radius: 32.0 },                    // South Horizon Holms
  ];

  const ocean = createNorthSeaOcean(surfObstacles, atmosphereUniforms);
  group.add(ocean.mesh);

  // 7. Sunlit/Moonlit Coastal Sea-Spray & Sky Wind Motes
  const moteCount = 460;
  const motePositions = new Float32Array(moteCount * 3);
  const moteSeeds = new Float32Array(moteCount);
  for (let i = 0; i < moteCount; i++) {
    motePositions[i * 3] = (hash2D(i, 31.7) - 0.5) * 64.0;
    motePositions[i * 3 + 1] = -7.0 + hash2D(i, 47.3) * 28.0;
    motePositions[i * 3 + 2] = -16.0 + hash2D(i, 59.1) * 56.0;
    moteSeeds[i] = hash2D(i, 73.9);
  }
  const moteGeom = new THREE.BufferGeometry();
  moteGeom.setAttribute('position', new THREE.BufferAttribute(motePositions, 3));
  moteGeom.setAttribute('aSeed', new THREE.BufferAttribute(moteSeeds, 1));

  const moteUniforms = {
    uTime: { value: 0 },
    uColor: atmosphereUniforms.uSunColor,
  };
  const moteMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: moteUniforms,
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x = mod(p.x + 32.0 + uTime * (1.1 + aSeed * 0.9), 64.0) - 32.0;
        p.y += sin(uTime * 0.9 + aSeed * 12.0) * 0.35;
        p.z = mod(p.z + 18.0 - uTime * (0.7 + aSeed * 0.6), 56.0) - 18.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp((16.0 + 12.0 * aSeed) / max(1.0, -mv.z), 1.5, 4.8);
        vAlpha = (0.11 + 0.18 * aSeed) * smoothstep(54.0, 6.0, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float soft = exp(-r2 * 14.0);
        gl_FragColor = vec4(uColor * 0.85 + vec3(0.25), vAlpha * soft);
      }
    `,
  });
  const windMotes = new THREE.Points(moteGeom, moteMat);
  windMotes.renderOrder = 5;
  windMotes.frustumCulled = false;
  group.add(windMotes);

  return {
    group,
    ocean,
    update(timeSec: number) {
      floraTimeUniform.uTime.value = timeSec;
      moteUniforms.uTime.value = timeSec;
      ocean.update(timeSec);
    },
  };
}
