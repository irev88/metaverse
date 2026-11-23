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
 * C2-smooth rounded Nordic ridge-and-knoll noise in [0, 1].
 * Uses a hyperboloid crest sqrt(n*n + 0.085) instead of sharp |n| so hilltops, ridgelines,
 * and coastal crags are naturally rounded and weathered — NEVER flat tabletops and NEVER spiky needles!
 */
function roundedRidge2D(x: number, y: number, octaves = 3): number {
  let sum = 0;
  let weight = 1.0;
  let amp = 0.52;
  let freq = 1.0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = valueNoise2D(x * freq, y * freq) * 2.0 - 1.0;
    const ridge = 1.0 - (Math.sqrt(n * n + 0.085) - 0.2915) / 0.75;
    const clamped = Math.max(0, Math.min(1, ridge));
    sum += amp * clamped * weight;
    norm += amp;
    weight = 0.54 + 0.46 * clamped;
    freq *= 2.04;
    amp *= 0.48;
  }
  return sum / Math.max(1e-4, norm);
}

/**
 * Domain-warped craggy rock & fractured outcrop field: produces natural asymmetric bedrock ribs,
 * weathered ledges, and irregular coastal crags (breaking up overly smooth domes and straight slopes!).
 */
function craggyRockField2D(x: number, y: number, octaves = 3): number {
  const wx = x + (valueNoise2D(x * 0.75 + 11.3, y * 0.75 - 7.9) - 0.5) * 1.15;
  const wy = y + (valueNoise2D(x * 0.75 - 5.4, y * 0.75 + 14.2) - 0.5) * 1.15;
  let sum = 0;
  let weight = 1.0;
  let amp = 0.54;
  let freq = 1.0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    const n = valueNoise2D(wx * freq, wy * freq) * 2.0 - 1.0;
    const crag = 1.0 - (Math.sqrt(n * n + 0.022) - 0.148) / 0.87;
    const clamped = Math.max(0, Math.min(1, crag));
    sum += amp * clamped * weight;
    norm += amp;
    weight = 0.48 + 0.52 * clamped;
    freq *= 2.18;
    amp *= 0.49;
  }
  return sum / Math.max(1e-4, norm);
}

/**
 * Shapes a natural, irregular sea-cliff descent with discontinuous rock benches/terraces,
 * eroded vertical gullies, and jutting crag spurs — eliminating smooth, uniform ramp cliffs!
 */
function evalBrokenCliffDescent(
  cliffDrop: number,
  wx: number,
  wz: number,
  seed: number
): number {
  const t = Math.max(0, Math.min(1, cliffDrop));
  // Vary cliff steepness & convexity from column to column (sheer buttress vs gully chute!)
  const buttressVsGully = fbm2D(wx * 0.085 + seed * 1.7, wz * 0.085 - seed * 1.3, 3);
  const expCurve = 0.62 + 0.54 * buttressVsGully;
  let profile = Math.pow(t, expCurve);

  // Discontinuous tilted basalt rock benches (only appear on fractured segments, NEVER continuous rings!)
  const benchPresence1 = smoothstep(0.36, 0.74, fbm2D(wx * 0.06 + seed, wz * 0.06 + 4.1, 2));
  const benchPresence2 = smoothstep(0.40, 0.78, fbm2D(wx * 0.075 - seed, wz * 0.075 - 6.3, 2));
  const bench1Center = 0.30 + (valueNoise2D(wx * 0.05 + seed, wz * 0.05) - 0.5) * 0.14;
  const bench2Center = 0.66 + (valueNoise2D(wx * 0.05 - seed, wz * 0.05 + 3.7) - 0.5) * 0.14;

  const terracePull1 =
    Math.sin(Math.max(-1, Math.min(1, (t - bench1Center) / 0.16)) * Math.PI) *
    Math.exp(-Math.pow((t - bench1Center) / 0.13, 2.0)) *
    0.095 *
    benchPresence1;
  const terracePull2 =
    Math.sin(Math.max(-1, Math.min(1, (t - bench2Center) / 0.17)) * Math.PI) *
    Math.exp(-Math.pow((t - bench2Center) / 0.14, 2.0)) *
    0.085 *
    benchPresence2;

  // Mid-cliff crag steps & rock ribs
  const faceCrags =
    (craggyRockField2D(wx * 0.16 + seed, wz * 0.16 - seed, 2) - 0.48) *
    0.11 *
    Math.sin(t * Math.PI);

  profile = Math.max(0, Math.min(1, profile - terracePull1 - terracePull2 + faceCrags));
  return profile;
}

/**
 * Evaluates realistic fractured Nordic basalt cliff buttresses, leaning rock ribs, recessed sea-clefts,
 * and discontinuous tilted lava-bed ledges (NEVER straight or uniform!).
 */
function evalCliffWallStrataAndButtresses(
  wx: number,
  wz: number,
  wy: number,
  seed: number
): { radialOffset: number; lateralTwist: number; verticalLedgeOffset: number } {
  // Warp horizontal coordinates with elevation wy so buttresses & gullies lean, branch, and taper organically!
  const leanX = wx + wy * 0.14 * Math.sin(seed * 1.9) + (valueNoise2D(wx * 0.06 + seed, wy * 0.07) - 0.5) * 3.4;
  const leanZ = wz + wy * 0.14 * Math.cos(seed * 1.3) + (valueNoise2D(wz * 0.06 - seed, wy * 0.07) - 0.5) * 3.4;

  // Bold jutting cliff buttresses (+2.4m) alternating with recessed vertical sea-gullies (-2.1m)
  const macroButtress = (craggyRockField2D(leanX * 0.068 + seed, leanZ * 0.068 - seed, 3) - 0.47) * 3.85;
  const mediumFacets = (craggyRockField2D(leanX * 0.19 - seed * 1.3, leanZ * 0.19 + wy * 0.09, 2) - 0.48) * 1.35;
  const fineBlockCrags = (fbm2D(wx * 0.44 + wy * 0.22, wz * 0.44 - wy * 0.18, 2) - 0.5) * 0.58;

  // Discontinuous, tilted basalt strata ledges (broken up laterally so they NEVER form ruler-straight lines!)
  const bedTilt =
    wx * 0.032 -
    wz * 0.026 +
    (fbm2D(wx * 0.048 + seed, wz * 0.048 - seed, 3) - 0.5) * 3.6;
  const ledgeBreakMask = smoothstep(
    0.24,
    0.72,
    fbm2D(wx * 0.09 - seed * 0.8, wz * 0.09 + wy * 0.04, 2)
  );
  const bedCoord = (wy + bedTilt) / 3.4;
  const bedFrac = bedCoord - Math.floor(bedCoord);
  const stepLedge = (smoothstep(0.08, 0.36, bedFrac) - bedFrac) * 1.18 * (0.25 + 0.75 * ledgeBreakMask);

  // Irregular wave-quarried surf shelf & undercut notch near sea level (-11.5m)
  const waveNotchVar = 0.55 + 0.90 * fbm2D(wx * 0.08 + seed, wz * 0.08, 2);
  const basalPlinth =
    Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.55)) / 2.3, 2.0)) * 1.45 * waveNotchVar -
    Math.exp(-Math.pow((wy - (SEA_LEVEL_Y + 1.45)) / 1.35, 2.0)) * 0.55 * waveNotchVar;

  const lateralTwist = (valueNoise2D(leanX * 0.12 - seed, leanZ * 0.12 + wy * 0.11) - 0.5) * 1.35;

  return {
    radialOffset: macroButtress + mediumFacets + fineBlockCrags + stepLedge + basalPlinth,
    lateralTwist,
    verticalLedgeOffset: stepLedge * 0.62 + fineBlockCrags * 0.42,
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
 * - Keeps the immediate twin perch clearing around Toothless & the Light Fury grounded & comfortable at y ~ 0.0m
 *   so all 8 paws rest naturally without floating or clipping.
 * - Surrounds the perch with rugged coastal rock outcrops, peat/heather tussocks, broken basalt cliff brinks,
 *   and a craggy multi-knoll Nordic headland ridge & NW coastal bluff behind the dragons!
 */
export function sampleHeroCliffHeight(x: number, z: number): number {
  const innerPadDist = Math.sqrt(Math.pow(x / 7.45, 2) + Math.pow((z + 0.85) / 4.65, 2));

  // Multi-scale irregular coastal bays, sea-clefts & jutting rocky promontory spurs (NEVER straight cliff edges!)
  const rimWarpMask = smoothstep(0.76, 1.30, innerPadDist);
  const wx =
    x +
    rimWarpMask *
      ((fbm2D(x * 0.055 + 3.1, z * 0.055 - 2.4, 3) - 0.5) * 6.4 +
        (craggyRockField2D(x * 0.13 - 1.7, z * 0.13 + 4.3, 2) - 0.48) * 3.4 +
        (fbm2D(x * 0.28 + 5.1, z * 0.28 - 1.9, 2) - 0.5) * 1.35);
  const wz =
    z +
    rimWarpMask *
      ((fbm2D(x * 0.055 - 5.2, z * 0.055 + 1.9, 3) - 0.5) * 5.6 +
        (craggyRockField2D(x * 0.13 + 2.9, z * 0.13 - 3.1, 2) - 0.48) * 3.1 +
        (fbm2D(x * 0.28 - 2.7, z * 0.28 + 3.8, 2) - 0.5) * 1.25);

  const ang = Math.atan2(wz + 4.2, wx);
  const frontPinch = z > 1.2 ? 0.64 : z < -8.0 ? 1.50 : 1.0 + (-z + 1.2) * 0.046;
  const naturalEmbayments =
    1.0 +
    0.19 * Math.sin(ang * 2.0 - 0.45) +
    0.14 * Math.sin(ang * 3.0 + 0.65) +
    0.09 * Math.cos(ang * 5.0 - 1.15) +
    0.06 * Math.sin(ang * 7.0 + 2.1);

  const normX = wx / (15.8 * naturalEmbayments);
  const normZ = (wz + 4.2) / (11.2 * frontPinch * naturalEmbayments);
  let perchDist = Math.sqrt(normX * normX + normZ * normZ);

  // Connected North-Western headland lobe & natural rocky saddle
  let nwHillBoost = 0.0;
  if (z < -3.5) {
    const nwDX = (wx + 17.5) / 15.2;
    const nwDZ = (wz + 25.0) / 18.5;
    const nwRaw = Math.sqrt(nwDX * nwDX + nwDZ * nwDZ);
    const nwLobeDist = nwRaw * (0.90 + 0.18 * fbm2D(x * 0.07 + 2.2, z * 0.07 - 1.4, 3));
    const hBlend = Math.max(0, 1.0 - Math.abs(perchDist - nwLobeDist) / 0.55);
    perchDist = Math.min(perchDist, nwLobeDist) - 0.12 * hBlend * hBlend;
    nwHillBoost =
      Math.pow(Math.max(0, 1.0 - Math.pow(nwRaw / 0.88, 1.72)), 1.20) *
      (6.2 +
        3.8 * roundedRidge2D(x * 0.058 + 5.1, z * 0.058 - 3.2, 3) +
        2.1 * craggyRockField2D(x * 0.14 - 2.4, z * 0.14 + 1.7, 2));
  }

  // Natural sea-cove embayment indenting the NE cliff wall
  if (x > 9.5 && z < -7.0) {
    const coveDX = (x - 18.5) / 6.5;
    const coveDZ = (z + 19.5) / 7.5;
    const coveIndent = Math.exp(-(coveDX * coveDX + coveDZ * coveDZ)) * 0.36;
    perchDist += coveIndent;
  }

  const pawPadFlat = smoothstep(0.76, 1.26, innerPadDist);
  // Keep southern (+Z) camera sightline open onto the dragons while sculpting natural hummocks, turf tussocks & outcrops around them!
  const flankMoundMask = 1.0 - 0.62 * smoothstep(-0.5, 4.5, z) * (1.0 - smoothstep(4.5, 11.5, Math.abs(x)));
  const coastalHummocks =
    ((fbm2D(x * 0.11 + 4.2, z * 0.11 - 1.7, 3) - 0.45) * 2.25 +
      (craggyRockField2D(x * 0.16 - 2.3, z * 0.16 + 6.1, 3) - 0.44) * 1.75 +
      (fbm2D(x * 0.42 + 1.3, z * 0.42 - 2.8, 2) - 0.48) * 0.62) *
    pawPadFlat *
    flankMoundMask;

  // Rugged Nordic headland ridge, rocky crag outcrops & coastal knolls rising behind the dragons (z < -6.6m)
  const highlandEnv =
    smoothstep(-6.6, -26.0, z) * smoothstep(38.5, 7.2, Math.abs(x + 3.0));
  const ridgeCrest = roundedRidge2D(x * 0.054 + 1.8, z * 0.054 - 2.7, 3);
  const cragKnobs = craggyRockField2D(x * 0.125 - 3.9, z * 0.125 + 2.4, 3);
  const knollSwale = fbm2D(x * 0.09 - 3.4, z * 0.09 + 1.9, 3);
  const backHighland =
    highlandEnv * (4.8 + 6.8 * ridgeCrest + 3.6 * cragKnobs + 2.8 * knollSwale);

  const uplandSurfaceY = coastalHummocks + Math.max(backHighland, nwHillBoost * pawPadFlat);

  // Irregular craggy cliff brink so rocky spurs & turf ledges break naturally over the sea-cliff!
  const brinkStart =
    0.74 +
    0.13 * fbm2D(Math.cos(ang) * 2.1 + 2.1, Math.sin(ang) * 2.1 - 1.3, 3) +
    0.06 * (craggyRockField2D(x * 0.12, z * 0.12, 2) - 0.5);
  if (perchDist <= brinkStart) {
    return uplandSurfaceY;
  }

  const cliffFall = smoothstep(brinkStart, 1.62, perchDist);
  const deepSkirt = smoothstep(1.45, 2.25, perchDist);
  const cliffProfile = evalBrokenCliffDescent(cliffFall, x, z, 7.3);

  const seaShelfY = SEA_LEVEL_Y - 2.2;
  const upperCliffY = THREE.MathUtils.lerp(uplandSurfaceY, seaShelfY, cliffProfile);
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
 * Builds a Natural Sculpted Nordic / Berk-Style Coastal Island ("The Sweet Spot"):
 * - Rises out of sheer wave-washed basalt sea-cliffs onto organic coastal shoulders, rolling grassy hillsides,
 *   curved glaciated ridgelines, rounded summit knolls, and natural green saddles — NEVER flat tabletops and NEVER spiky cones!
 * - Skirts plunge cleanly to ISLAND_SKIRT_BASE_Y (-44.0m) well beneath the -25.5m submarine seafloor.
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
  const sumOffX = opts.summitOffset?.dx ?? opts.rx * 0.12 * Math.sin(opts.seed);
  const sumOffZ = opts.summitOffset?.dz ?? opts.rz * -0.10 * Math.cos(opts.seed * 1.3);

  return (wx: number, wz: number): number => {
    const dx = wx - opts.cx;
    const dz = wz - opts.cz;
    const lx = dx * cosR - dz * sinR;
    const lz = dx * sinR + dz * cosR;

    // Multi-scale irregular coastline bays, rocky headlands, sea-clefts & peninsulas (NEVER smooth ovals or straight walls!)
    const warpX =
      lx +
      (fbm2D(lx * 0.036 + opts.seed, lz * 0.036 - opts.seed, 3) - 0.5) * (opts.rx * 0.48) +
      (craggyRockField2D(lx * 0.095 - opts.seed, lz * 0.095 + opts.seed, 2) - 0.48) * (opts.rx * 0.22) +
      (fbm2D(lx * 0.21 + opts.seed * 1.4, lz * 0.21 - opts.seed, 2) - 0.5) * 2.4;
    const warpZ =
      lz +
      (fbm2D(lx * 0.036 - opts.seed, lz * 0.036 + opts.seed, 3) - 0.5) * (opts.rz * 0.48) +
      (craggyRockField2D(lx * 0.095 + opts.seed, lz * 0.095 - opts.seed, 2) - 0.48) * (opts.rz * 0.22) +
      (fbm2D(lx * 0.21 - opts.seed, lz * 0.21 + opts.seed * 1.4, 2) - 0.5) * 2.4;

    const ang = Math.atan2(warpZ, warpX);
    const lobe =
      1.0 +
      0.21 * Math.sin(ang * 2.0 + opts.seed) +
      0.14 * Math.cos(ang * 3.0 - opts.seed * 1.5) +
      0.09 * Math.sin(ang * 5.0 + 0.9) +
      0.05 * Math.cos(ang * 7.0 - opts.seed * 0.6);

    const rPrimary = Math.sqrt(
      Math.pow(warpX / (opts.rx * lobe), 2) + Math.pow(warpZ / (opts.rz * lobe), 2)
    );
    let rNorm = rPrimary;

    // Natural asymmetric hill mass around primary summit
    const rSumPrimary = Math.sqrt(
      Math.pow((warpX - sumOffX) / (opts.rx * lobe * 0.94), 2) +
        Math.pow((warpZ - sumOffZ) / (opts.rz * lobe * 0.94), 2)
    );
    const primaryShoulderY = opts.peakY * 0.34;
    const primaryDome =
      Math.pow(Math.max(0, 1.0 - Math.pow(rSumPrimary / 0.90, 1.64)), 1.18) * (opts.peakY * 0.58);
    let baseHillY = primaryShoulderY + primaryDome;

    if (opts.secondaryLobe) {
      const sl = opts.secondaryLobe;
      const sx = warpX - sl.dx;
      const sz = warpZ - sl.dz;
      const sAng = Math.atan2(sz, sx);
      const sLobe =
        1.0 +
        0.19 * Math.cos(sAng * 2.0 - opts.seed) +
        0.12 * Math.sin(sAng * 3.0 + opts.seed) +
        0.07 * Math.cos(sAng * 5.0 + opts.seed * 1.2);
      const rSec = Math.sqrt(Math.pow(sx / (sl.rx * sLobe), 2) + Math.pow(sz / (sl.rz * sLobe), 2));
      const kSmooth = sl.lowSaddle ? 0.42 : 0.35;
      const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (rSec - rNorm)) / kSmooth));
      rNorm = rSec * (1 - h) + rNorm * h - kSmooth * h * (1 - h);

      const secPeakY = opts.peakY * sl.peakScale;
      const secDome =
        secPeakY * 0.33 +
        Math.pow(Math.max(0, 1.0 - Math.pow(rSec / 0.88, 1.66)), 1.18) * (secPeakY * 0.62);
      const saddleDip = sl.lowSaddle ? Math.sin(h * Math.PI) * 0.44 : Math.sin(h * Math.PI) * 0.20;
      baseHillY = THREE.MathUtils.lerp(secDome, baseHillY, h) * (1.0 - saddleDip);
    }

    // Multi-scale sculpted ridgelines + craggy bedrock outcrops + stepped turf benches + hummocky tussocks!
    const interiorMask = 1.0 - smoothstep(0.58, 1.04, rNorm);
    const ridgeSpine = roundedRidge2D(
      lx * 0.036 + opts.seed * 1.3,
      lz * 0.044 - opts.seed * 0.9,
      3
    );
    const cragOutcrops = craggyRockField2D(
      lx * 0.088 - opts.seed * 1.1,
      lz * 0.088 + opts.seed * 0.8,
      3
    );
    const rollingHills = fbm2D(lx * 0.055 - opts.seed * 0.7, lz * 0.055 + opts.seed * 1.4, 3);
    const mediumKnobs = craggyRockField2D(lx * 0.19 + opts.seed, lz * 0.19 - opts.seed, 2);
    const tussockDetail = fbm2D(lx * 0.36 - opts.seed, lz * 0.36 + opts.seed, 2);

    // Subtle natural structural rock-terrace steps across hillsides
    const hillStepCoord = (baseHillY + rollingHills * 3.0) / 4.2;
    const hillStepFrac = hillStepCoord - Math.floor(hillStepCoord);
    const hillTerrace =
      (smoothstep(0.15, 0.55, hillStepFrac) - hillStepFrac) *
      0.85 *
      smoothstep(0.35, 0.75, cragOutcrops);

    let topSurfaceY =
      baseHillY +
      (ridgeSpine - 0.36) * (opts.peakY * 0.36) * (0.30 + 0.70 * interiorMask) +
      (cragOutcrops - 0.44) * (2.6 + opts.peakY * 0.14) * (0.38 + 0.62 * interiorMask) +
      (rollingHills - 0.47) * (2.8 + opts.peakY * 0.11) +
      (mediumKnobs - 0.46) * 1.55 +
      (tussockDetail - 0.48) * 0.68 +
      hillTerrace;

    // Smooth U-shaped mountain-island river glen feeding the eastern sea-cliff waterfall!
    if (opts.carveRiverToEast && lx > -opts.rx * 0.52) {
      const streamCenterLZ = Math.sin(lx * 0.13 + 0.5) * 2.1;
      const distFromStream = Math.abs(lz - streamCenterLZ);
      const valleyProfile = 1.0 - smoothstep(1.5, 6.8, distFromStream);
      if (valleyProfile > 0.001) {
        const targetBedY = 10.6 - smoothstep(-opts.rx * 0.45, opts.rx * 0.78, lx) * 3.0;
        topSurfaceY = THREE.MathUtils.lerp(topSurfaceY, Math.min(topSurfaceY, targetBedY), valleyProfile);
      }
    }

    // Irregular craggy coastal brink: jutting rock headlands, recessed gullies & broken bluffs!
    const brinkR =
      0.64 +
      0.15 * fbm2D(Math.cos(ang) * 1.9 + opts.seed, Math.sin(ang) * 1.9 - opts.seed, 3) +
      0.07 * (craggyRockField2D(wx * 0.09 + opts.seed, wz * 0.09, 2) - 0.5);
    if (rNorm <= brinkR) {
      return topSurfaceY;
    }

    const cliffDrop = smoothstep(brinkR, 1.09, rNorm);
    const submarinePlunge = smoothstep(1.02, 1.38, rNorm);
    const seaShelfY = SEA_LEVEL_Y - 1.8;
    const cliffCurve = evalBrokenCliffDescent(cliffDrop, wx, wz, opts.seed);
    const aboveSubShelf = THREE.MathUtils.lerp(topSurfaceY, seaShelfY, cliffCurve);
    return THREE.MathUtils.lerp(aboveSubShelf, ISLAND_SKIRT_BASE_Y, submarinePlunge);
  };
}

/**
 * Builds a Natural Nordic Crescent / Breached-Caldera Island curling around a calm turquoise lagoon:
 * - Features a craggy, irregular coastal ridge spine with rocky spurs, jagged coves breaking up the arc,
 *   stepped cliff benches, and bold headland bluffs flanking the lagoon mouth!
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

    // Multi-scale coastal warp so neither outer cliff nor inner lagoon shore ever forms a smooth geometric circle!
    const wxWarp =
      dx +
      (fbm2D(dx * 0.034 + opts.seed, dz * 0.034 - opts.seed, 3) - 0.5) * (opts.ringRadius * 0.34) +
      (craggyRockField2D(dx * 0.088 - opts.seed, dz * 0.088 + opts.seed, 2) - 0.48) * (opts.ringHalfWidth * 0.44) +
      (fbm2D(dx * 0.20 + opts.seed, dz * 0.20 - opts.seed, 2) - 0.5) * 2.2;
    const wzWarp =
      dz +
      (fbm2D(dx * 0.034 - opts.seed, dz * 0.034 + opts.seed, 3) - 0.5) * (opts.ringRadius * 0.34) +
      (craggyRockField2D(dx * 0.088 + opts.seed, dz * 0.088 - opts.seed, 2) - 0.48) * (opts.ringHalfWidth * 0.44) +
      (fbm2D(dx * 0.20 - opts.seed, dz * 0.20 + opts.seed, 2) - 0.5) * 2.2;

    const r = Math.hypot(wxWarp, wzWarp);
    const ang = Math.atan2(wzWarp, wxWarp);

    const spineCenterAng = opts.openAngleRad + Math.PI;
    let dAng = ang - spineCenterAng;
    while (dAng > Math.PI) dAng -= Math.PI * 2;
    while (dAng < -Math.PI) dAng += Math.PI * 2;
    const absAng = Math.abs(dAng);

    const hornMask = 1.0 - smoothstep(opts.arcHalfSpanRad * 0.72, opts.arcHalfSpanRad * 1.08, absAng);
    const widthMod =
      opts.ringHalfWidth *
      (0.68 +
        0.44 * hornMask +
        0.18 * Math.sin(dAng * 2.7 + opts.seed) +
        0.11 * Math.cos(dAng * 5.3 - opts.seed * 1.4));

    const signedFromSpine = r - opts.ringRadius;
    const asymWidth = signedFromSpine >= 0 ? widthMod * 0.88 : widthMod * 1.14;
    const radialDistFromSpine = Math.abs(signedFromSpine) / Math.max(3.5, asymWidth);
    const effectiveDist = radialDistFromSpine + (1.0 - hornMask) * 1.35;

    // Undulating craggy ridge hilltops, rocky saddles & bold bay-mouth headland bluffs along the crescent spine
    const arcKnolls =
      0.70 +
      0.26 * Math.cos(dAng * 2.6 + opts.seed * 0.7) +
      0.16 * Math.sin(dAng * 4.3 - opts.seed) +
      0.09 * Math.cos(dAng * 7.1 + opts.seed * 0.4);
    const ridgeCrest = roundedRidge2D(dx * 0.042 + opts.seed, dz * 0.042 - opts.seed, 3);
    const cragSpurs = craggyRockField2D(dx * 0.105 - opts.seed, dz * 0.105 + opts.seed, 3);
    const fineOutcrops = craggyRockField2D(dx * 0.24 + opts.seed, dz * 0.24 - opts.seed, 2);
    const crossCrown = Math.pow(Math.max(0, 1.0 - Math.pow(Math.min(1.0, effectiveDist / 0.88), 1.58)), 1.15);

    const ridgeTopY =
      opts.peakY * (0.32 + 0.68 * crossCrown) * (0.56 + 0.44 * hornMask) * arcKnolls +
      (ridgeCrest - 0.40) * (opts.peakY * 0.26) * hornMask +
      (cragSpurs - 0.45) * (2.4 + opts.peakY * 0.13) * (0.35 + 0.65 * hornMask) +
      (fineOutcrops - 0.47) * 1.35 +
      (fbm2D(dx * 0.35 + opts.seed, dz * 0.35 - opts.seed, 2) - 0.48) * 0.62;

    const insideLagoon = (1.0 - smoothstep(opts.ringRadius * 0.55, opts.ringRadius * 1.15, r)) * 0.65;
    const floorTargetY = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, -16.2, insideLagoon);

    const brinkDist =
      0.52 +
      0.14 * fbm2D(dx * 0.065 + opts.seed, dz * 0.065, 3) +
      0.07 * (craggyRockField2D(wx * 0.11, wz * 0.11 + opts.seed, 2) - 0.5);
    if (effectiveDist <= brinkDist) {
      return ridgeTopY;
    }

    const cliffDrop = smoothstep(brinkDist, 1.06, effectiveDist);
    const subPlunge = smoothstep(0.98, 1.36, effectiveDist);
    const seaBenchY = SEA_LEVEL_Y - 1.8;
    const cliffCurve = evalBrokenCliffDescent(cliffDrop, wx, wz, opts.seed);
    const upperY = THREE.MathUtils.lerp(ridgeTopY, seaBenchY, cliffCurve);
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
    gridSegs: 184,
    hasFlora: true,
    evalHeight: evalWestWaterfallIsland,
  },
  {
    name: 'StarboardCrescentLagoonAtoll',
    centerX: 88.0,
    centerZ: 36.0,
    spanX: 124,
    spanZ: 124,
    gridSegs: 180,
    hasFlora: true,
    evalHeight: evalStarboardCrescentAtoll,
  },
  {
    name: 'EastSerpentineTomboloIsland',
    centerX: 84.0,
    centerZ: -46.0,
    spanX: 118,
    spanZ: 134,
    gridSegs: 172,
    hasFlora: true,
    evalHeight: evalEastSerpentineTomboloIsland,
  },
  {
    name: 'WestTraelanipaTableIsland',
    centerX: -124.0,
    centerZ: -86.0,
    spanX: 116,
    spanZ: 102,
    gridSegs: 156,
    hasFlora: true,
    evalHeight: evalWestTraelanipaTableIsland,
  },
  {
    name: 'NorthWestHolmPair',
    centerX: -48.0,
    centerZ: -92.0,
    spanX: 92,
    spanZ: 86,
    gridSegs: 140,
    hasFlora: true,
    evalHeight: evalNorthWestHolmPair,
  },
  {
    name: 'NorthEastHeadlandTable',
    centerX: 42.0,
    centerZ: -112.0,
    spanX: 94,
    spanZ: 90,
    gridSegs: 136,
    hasFlora: false,
    evalHeight: evalNorthEastHeadlandTable,
  },
  {
    name: 'SouthWestBrokenCrescent',
    centerX: -144.0,
    centerZ: 78.0,
    spanX: 156,
    spanZ: 152,
    gridSegs: 148,
    hasFlora: false,
    evalHeight: evalSouthWestBrokenCrescent,
  },
  {
    name: 'SouthEastTableSound',
    centerX: 156.0,
    centerZ: 116.0,
    spanX: 168,
    spanZ: 152,
    gridSegs: 136,
    hasFlora: false,
    evalHeight: evalSouthEastTableSound,
  },
  {
    name: 'FarWestCliffMassif',
    centerX: -198.0,
    centerZ: -88.0,
    spanX: 174,
    spanZ: 168,
    gridSegs: 132,
    hasFlora: false,
    evalHeight: evalFarWestCliffMassif,
  },
  {
    name: 'NorthernSoundCrescentIsland',
    centerX: -8.0,
    centerZ: -222.0,
    spanX: 196,
    spanZ: 166,
    gridSegs: 136,
    hasFlora: false,
    evalHeight: evalNorthernSoundCrescent,
  },
  {
    name: 'SouthHorizonHolms',
    centerX: -4.0,
    centerZ: 232.0,
    spanX: 166,
    spanZ: 122,
    gridSegs: 124,
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
      maxH = Math.max(maxH, arch.plateauTopY + 3.8);
    }
  }
  for (const st of TABULAR_SEA_STACKS) {
    const rMax = Math.max(st.rx, st.rz);
    const d = Math.hypot(x - st.x, z - st.z);
    if (d < rMax * 1.45) {
      const t = 1.0 - smoothstep(0.65, 1.45, d / rMax);
      maxH = Math.max(maxH, ISLAND_SKIRT_BASE_Y + (st.topY + 2.8 - ISLAND_SKIRT_BASE_Y) * t);
    }
  }
  return maxH;
}

/**
 * Applies bold, fractured 3D basalt cliff buttresses, leaning rock ribs, recessed sea-clefts,
 * discontinuous tilted rock ledges, AND craggy hillside/ridge rock outcrops across the mesh
 * (while strictly protecting the twin dragon perch pad!).
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

    if (y < -25.0) continue;

    let padGuard = 1.0;
    if (protectHeroPad) {
      const dPad = Math.sqrt(Math.pow(x / 8.8, 2) + Math.pow((z + 0.95) / 5.8, 2));
      padGuard = smoothstep(0.88, 1.38, dPad);
      if (padGuard <= 0.001) continue;
    }

    // 1. Steep coastal sea-cliff walls: bold leaning buttresses, recessed gullies & broken rock shelves!
    const verticalWallMask =
      smoothstep(0.76, 0.22, ny) * smoothstep(-24.5, -16.0, y) * padGuard;

    // 2. Hillside shoulders & upland crags (ny up to 0.98): organic 3D rock knobs, turf tussocks & brink crags!
    const uplandCragMask =
      smoothstep(-5.5, 1.2, y) * padGuard * (0.34 + 0.66 * smoothstep(0.96, 0.55, ny));

    if (verticalWallMask <= 0.002 && uplandCragMask <= 0.002) continue;

    const hLen = Math.hypot(nx, nz);
    const outX = hLen > 1e-4 ? nx / hLen : Math.cos(seed);
    const outZ = hLen > 1e-4 ? nz / hLen : Math.sin(seed);
    // Tangent along cliff contour so buttresses twist & break laterally (eliminating straight grid lines!)
    const tanX = -outZ;
    const tanZ = outX;

    const relief = evalCliffWallStrataAndButtresses(x, z, y, seed);
    const cragKnob =
      (craggyRockField2D(x * 0.14 + seed, z * 0.14 - seed, 3) - 0.46) * 1.25 +
      (fbm2D(x * 0.38 - seed, z * 0.38 + seed, 2) - 0.48) * 0.45;

    const dx =
      (outX * relief.radialOffset + tanX * relief.lateralTwist) * verticalWallMask +
      outX * cragKnob * uplandCragMask * 0.48;
    const dy =
      relief.verticalLedgeOffset * verticalWallMask +
      cragKnob * uplandCragMask * 0.62;
    const dz =
      (outZ * relief.radialOffset + tanZ * relief.lateralTwist) * verticalWallMask +
      outZ * cragKnob * uplandCragMask * 0.48;

    pos.setXYZ(i, x + dx, y + dy, z + dz);
  }

  geom.computeVertexNormals();
}

/**
 * Builds a Natural Wave-Carved Nordic Headland Sea-Arch:
 * - Organically curved coastal rock spur with irregular headland swells, rocky coves, leaning basalt buttresses,
 *   broken tilted strata shelves, asymmetric cliff batter (broad wave-battered base tapering to a craggy ridge crest),
 *   and a ragged wave-quarried arched sea-tunnel — ZERO straight box walls!
 */
function buildFaroeseHeadlandSeaArchGeometry(spec: FaroeseSeaArchSpec): THREE.BufferGeometry {
  const uSegs = 120;
  const vSegs = 72;

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

    // Pronounced natural coastal S-curve + irregular rocky headland jogs along the spur!
    const zCenter =
      Math.sin(u * Math.PI * 1.45 + spec.seed) * 2.65 +
      Math.cos(u * Math.PI * 2.7 - spec.seed * 0.6) * 1.15 +
      (craggyRockField2D(u * 3.8 + spec.seed, 2.3, 2) - 0.48) * 2.10;

    // Undulating craggy coastal ridge spine: higher landward bluff -> rugged bridge saddle -> weathered seaward crag!
    const endRoundTaper = smoothstep(0.0, 0.09, u) * smoothstep(1.0, 0.90, u);
    const landwardBluff = (1.0 - smoothstep(0.0, 0.44, u)) * 2.85;
    const seawardKnoll = Math.exp(-Math.pow((u - 0.77) / 0.16, 2.0)) * 2.15;
    const bridgeSaddle = -Math.exp(-Math.pow((u - 0.47) / 0.19, 2.0)) * 1.05;
    const ridgeCrags =
      (craggyRockField2D(xRaw * 0.12 + spec.seed, zCenter * 0.12 - spec.seed, 3) - 0.45) * 1.95 +
      (fbm2D(xRaw * 0.28 - spec.seed, zCenter * 0.28, 2) - 0.48) * 0.85;
    const yTopBase = spec.plateauTopY + landwardBluff + seawardKnoll + bridgeSaddle + ridgeCrags;
    const yTop = THREE.MathUtils.lerp(SEA_LEVEL_Y - 4.5, yTopBase, endRoundTaper);

    // Irregular ragged wave-carved sea-arch vault
    const asymSpanX = xRaw + (fbm2D(u * 4.5 + spec.seed, 6.1, 2) - 0.5) * 1.35;
    const normSpan = Math.abs(asymSpanX) / spec.openingHalfSpan;
    const archWindowMask = 1.0 - smoothstep(0.74, 1.18, normSpan);
    const parabola = Math.max(0, 1.0 - Math.pow(Math.min(1.20, normSpan), 1.95));
    const vaultCrags =
      (craggyRockField2D(xRaw * 0.26 + spec.seed, 4.3, 3) - 0.48) * 1.45 +
      (fbm2D(xRaw * 0.55 - spec.seed, 1.9, 2) - 0.5) * 0.55;
    const tunnelCeilingY =
      (SEA_LEVEL_Y - 5.5) + (spec.vaultCrownY - (SEA_LEVEL_Y - 5.5)) * parabola + vaultCrags * archWindowMask;
    const yBot = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, tunnelCeilingY, archWindowMask);

    // Irregular spur thickness with massive buttress piers flanking the arch & rocky cove bites!
    const widthAlongU =
      0.82 +
      0.38 * craggyRockField2D(u * 3.4 - spec.seed, 5.7, 2) +
      0.22 * Math.sin(u * 8.5 + spec.seed);
    const pierWidthBoost = 1.0 + 0.42 * (1.0 - archWindowMask);
    const baseHalfW = spec.halfThickness * pierWidthBoost * widthAlongU * (0.42 + 0.58 * endRoundTaper);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs;
      // Continuous organic polar loop angle around cross-section (eliminates 90-degree rectangular box corners!)
      const phi = v * Math.PI * 2.0;
      const sinPhi = Math.sin(phi); // -Z .. +Z across width
      const cosPhi = Math.cos(phi); // +1 at ridge crest, -1 at base/vault

      // Super-elliptical natural crag cross-section (wider battered base, narrower craggy ridge crest!)
      const localYFrac = 0.5 + 0.5 * cosPhi;
      const naturalBatter = 1.24 - 0.38 * Math.pow(localYFrac, 0.85);
      const sideSign = sinPhi >= 0 ? 1 : -1;
      const sideMag = Math.pow(Math.abs(sinPhi), 0.72);
      const localZFrac = sideSign * sideMag * naturalBatter;

      const onVerticalWall = Math.pow(Math.abs(sinPhi), 0.65);
      const topCrestMask = Math.max(0, cosPhi);

      // Asymmetric craggy ridge crest along top
      const ridgeCrestLift =
        Math.pow(topCrestMask, 1.4) *
        (1.45 + 0.95 * craggyRockField2D(xRaw * 0.18 + sinPhi * 0.8, spec.seed, 2)) *
        endRoundTaper;

      let wy = THREE.MathUtils.lerp(yBot, yTop, localYFrac) + ridgeCrestLift;

      // Natural domed rocky arch soffit underneath
      if (cosPhi < -0.25 && archWindowMask > 0.05) {
        wy += (1.0 - sinPhi * sinPhi) * 1.35 * archWindowMask * Math.abs(cosPhi);
      }

      const wallRelief = evalCliffWallStrataAndButtresses(
        xRaw + sinPhi * 2.3,
        zCenter + localZFrac * baseHalfW,
        wy,
        spec.seed + sideSign * 3.7
      );

      const reliefScale = onVerticalWall * smoothstep(-24.0, -14.5, wy);
      const effZOffset =
        localZFrac * baseHalfW +
        sideSign * wallRelief.radialOffset * 0.78 * reliefScale;
      const px = xRaw + wallRelief.lateralTwist * 0.45 * reliefScale;
      const pz = zCenter + effZOffset;
      const py = wy + wallRelief.verticalLedgeOffset * 0.52 * reliefScale;

      const idx = iu * loopVerts + iv;
      positions[idx * 3] = px;
      positions[idx * 3 + 1] = py;
      positions[idx * 3 + 2] = pz;
      uvs[idx * 2] = px * 0.18;
      uvs[idx * 2 + 1] = py * 0.18;
    }
  }

  // End-cap center vertices at u = 0 and u = 1
  const cap0Idx = bodyVerts;
  const cap1Idx = bodyVerts + 1;
  positions[cap0Idx * 3] = -spec.halfLength;
  positions[cap0Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap0Idx * 3 + 2] = 0;
  uvs[cap0Idx * 2] = -spec.halfLength * 0.18;
  uvs[cap0Idx * 2 + 1] = (SEA_LEVEL_Y - 12.0) * 0.18;

  positions[cap1Idx * 3] = spec.halfLength;
  positions[cap1Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap1Idx * 3 + 2] = 0;
  uvs[cap1Idx * 2] = spec.halfLength * 0.18;
  uvs[cap1Idx * 2 + 1] = (SEA_LEVEL_Y - 12.0) * 0.18;

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
 * Builds a Natural Wave-Battered Nordic Sea-Stack or Craggy Whaleback Skerry:
 * - Cross-section twists and fractures organically with elevation wy (ZERO straight vertical extrusions!),
 *   with stepped basalt ledges, recessed fissures, wave-cut sea-level notches, and an irregular craggy crown!
 */
function buildTabularSeaStackGeometry(spec: TabularSeaStackSpec): THREE.BufferGeometry {
  const hSegs = 36;
  const rSegs = 42;
  const capRings = 7;
  const ringVerts = rSegs + 1;
  const centerVert = 1;
  const vCount = (hSegs + capRings + 1) * ringVerts + centerVert;

  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);

  const cosRot = Math.cos(spec.rotY);
  const sinRot = Math.sin(spec.rotY);

  const isTallStack = spec.topY > SEA_LEVEL_Y + 4.0;
  const crownHeight = isTallStack ? 3.10 : 1.55;
  const crestOffX = spec.rx * 0.19 * Math.sin(spec.seed * 1.7);
  const crestOffZ = spec.rz * -0.17 * Math.cos(spec.seed * 1.1);

  for (let ih = 0; ih <= hSegs + capRings; ih++) {
    const inCrown = ih > hSegs;
    const tWall = Math.min(1.0, ih / hSegs);
    const sCrown = inCrown ? (ih - hSegs) / capRings : 0.0;

    for (let ir = 0; ir <= rSegs; ir++) {
      const v = ir / rSegs;
      const theta = v * Math.PI * 2.0;
      // Twist fracture planes slightly with elevation so rock ribs lean naturally instead of extruding straight up!
      const twistTheta = theta + (tWall - 0.5) * 0.28 * Math.sin(spec.seed);
      const cosT = Math.cos(twistTheta);
      const sinT = Math.sin(twistTheta);

      const angularFacets =
        1.0 +
        0.16 * Math.cos(twistTheta * 3.0 + spec.seed) +
        0.13 * Math.sin(twistTheta * 2.0 - spec.seed * 0.7) +
        0.09 * Math.cos(twistTheta * 5.0 + spec.seed * 1.3 + tWall * 2.4);
      const heightCrag =
        0.82 +
        0.34 * craggyRockField2D(cosT * 1.55 + spec.seed + tWall * 0.85, sinT * 1.55 - spec.seed + tWall * 0.65, 3);

      const planX = Math.cos(theta) * spec.rx * angularFacets * heightCrag;
      const planZ = Math.sin(theta) * spec.rz * angularFacets * heightCrag;

      const rimY =
        spec.topY +
        planX * spec.topSlopeX +
        (craggyRockField2D(planX * 0.19 + spec.seed, planZ * 0.19 - spec.seed, 2) - 0.48) * 1.65;

      const crownRadialScale = inCrown ? Math.pow(Math.cos(sCrown * Math.PI * 0.5), 0.88) : 1.0;
      const crownDomeLift = inCrown
        ? Math.pow(Math.sin(sCrown * Math.PI * 0.5), 1.05) *
          (crownHeight +
            (craggyRockField2D(
              (planX * crownRadialScale + spec.seed) * 0.25,
              (planZ * crownRadialScale - spec.seed) * 0.25,
              2
            ) -
              0.44) *
              1.45)
        : 0.0;

      const wy = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, rimY, tWall) + crownDomeLift;

      const gentleTaper = 1.24 - 0.40 * Math.pow(tWall, 0.84);
      const surfApron =
        1.0 +
        0.36 * Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.6)) / 2.3, 2.0)) -
        0.10 * Math.exp(-Math.pow((wy - (SEA_LEVEL_Y + 1.3)) / 1.3, 2.0));

      const wallRelief = evalCliffWallStrataAndButtresses(
        spec.x + planX,
        spec.z + planZ,
        wy,
        spec.seed
      );
      const reliefFade =
        smoothstep(0.16, 0.42, tWall) * (1.0 - smoothstep(0.88, 1.0, tWall)) * (inCrown ? 0.25 : 1.0);

      const scaleXZ = gentleTaper * surfApron * crownRadialScale;
      const lx =
        THREE.MathUtils.lerp(0, crestOffX, sCrown * sCrown) +
        planX * scaleXZ +
        Math.cos(theta) * wallRelief.radialOffset * 0.52 * reliefFade;
      const lz =
        THREE.MathUtils.lerp(0, crestOffZ, sCrown * sCrown) +
        planZ * scaleXZ +
        Math.sin(theta) * wallRelief.radialOffset * 0.52 * reliefFade;

      const wx = spec.x + lx * cosRot - lz * sinRot;
      const wz = spec.z + lx * sinRot + lz * cosRot;

      const idx = ih * ringVerts + ir;
      positions[idx * 3] = wx;
      positions[idx * 3 + 1] = wy + wallRelief.verticalLedgeOffset * 0.42 * reliefFade;
      positions[idx * 3 + 2] = wz;
      uvs[idx * 2] = v * 4.0;
      uvs[idx * 2 + 1] = tWall * 5.0 + sCrown * 0.9;
    }
  }

  const capCenterIdx = (hSegs + capRings + 1) * ringVerts;
  const wxCrest = spec.x + crestOffX * cosRot - crestOffZ * sinRot;
  const wzCrest = spec.z + crestOffX * sinRot + crestOffZ * cosRot;
  positions[capCenterIdx * 3] = wxCrest;
  positions[capCenterIdx * 3 + 1] =
    spec.topY + crownHeight + (craggyRockField2D(spec.seed, spec.seed * 0.5, 2) - 0.46) * 0.55;
  positions[capCenterIdx * 3 + 2] = wzCrest;
  uvs[capCenterIdx * 2] = 0.5;
  uvs[capCenterIdx * 2 + 1] = 5.9;

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
 * Generates Fractured Faroese Basalt Trap-Rock PBR Textures with horizontal lava-flow bedding
 * and vertical blocky jointing lines (matching Photos 1 & 3!).
 */
function generateBasaltRockPBRTextures(): {
  albedo: THREE.CanvasTexture;
  normal: THREE.CanvasTexture;
  roughness: THREE.CanvasTexture;
} {
  const size = 512;
  const hField = new Float32Array(size * size);
  const mossField = new Float32Array(size * size);

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const idx = y * size + x;

      // Horizontal layered basalt strata + vertical blocky cliff jointing!
      const bedNoise = fbm2D(u * 8.0 + 2.3, v * 26.0 - 1.7, 4);
      const vertBlocks = fbm2D(u * 22.0 - 3.1, v * 7.0 + 4.2, 4);
      const horizSeam = Math.abs(fbm2D(u * 6.0 + 1.1, v * 20.0 + 3.4, 3) - 0.5);
      const vertCrack = Math.abs(fbm2D(u * 18.0 - 4.8, v * 9.0 + 9.1, 3) - 0.5);
      const seamGroove =
        smoothstep(0.055, 0.0, horizSeam) * 0.45 + smoothstep(0.045, 0.0, vertCrack) * 0.35;

      hField[idx] = Math.max(
        0,
        Math.min(1, bedNoise * 0.58 + vertBlocks * 0.42 - seamGroove)
      );

      const mossNoise = fbm2D(u * 9.0 + 19.3, v * 9.0 + 8.2, 4);
      mossField[idx] = smoothstep(0.58, 0.82, mossNoise);
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

      const dX = (hField[y * size + xp1] - hField[y * size + xm1]) * 4.4;
      const dY = (hField[yp1 * size + x] - hField[ym1 * size + x]) * 4.4;
      const inv = 1.0 / Math.sqrt(dX * dX + dY * dY + 1.0);

      nImg.data[p4] = Math.round((-dX * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 1] = Math.round((-dY * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 3] = 255;

      const h = hField[idx];
      const moss = mossField[idx];

      const rockR = 40 + h * 54;
      const rockG = 44 + h * 56;
      const rockB = 50 + h * 60;

      const mossR = 45 + h * 25;
      const mossG = 69 + h * 35;
      const mossB = 34 + h * 18;

      aImg.data[p4] = Math.round(THREE.MathUtils.lerp(rockR, mossR, moss * 0.65));
      aImg.data[p4 + 1] = Math.round(THREE.MathUtils.lerp(rockG, mossG, moss * 0.65));
      aImg.data[p4 + 2] = Math.round(THREE.MathUtils.lerp(rockB, mossB, moss * 0.65));
      aImg.data[p4 + 3] = 255;

      const rough = Math.round(THREE.MathUtils.lerp(0.60 + (1 - h) * 0.30, 0.92, moss) * 255);
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
        vec3 N = normalize(vWorldNormal);
        vec3 L = normalize(uSunDir);
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

        // Natural sculpted Nordic fjord mountain-island silhouette: rounded summit dome + curved ridgeline + secondary shoulder!
        const rSum = Math.hypot((lx - isl.offX) / (isl.rx * 0.92), lz / (isl.rz * 0.92));
        const shoulderY = isl.peakY * 0.32;
        const domeY =
          Math.pow(Math.max(0, 1.0 - Math.pow(rSum / 0.92, 1.65)), 1.25) * (isl.peakY * 0.64);
        const ridgeY =
          (roundedRidge2D(wx * 0.0085 + isl.seed, wz * 0.010 - isl.seed, 3) - 0.38) *
          (isl.peakY * 0.34) *
          (1.0 - smoothstep(0.55, 1.05, rNorm));
        const swellY = (fbm2D(wx * 0.009 + isl.seed, wz * 0.009, 3) - 0.5) * 9.5;
        const uplandY = shoulderY + domeY + ridgeY + swellY;

        const brinkR = 0.68 + 0.10 * Math.sin(theta * 2.0 - isl.seed);
        const cliffDrop = smoothstep(brinkR, 1.05, rNorm);
        const subDrop = smoothstep(0.98, 1.38, rNorm);
        const seaY = SEA_LEVEL_Y - 2.0;
        const upperY = THREE.MathUtils.lerp(uplandY, seaY, Math.pow(cliffDrop, 0.84));
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
        vec3 N = normalize(vWorldNormal);
        vec3 L = normalize(uSunDir);
        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);

        float strataBands = 0.88 + 0.18 * sin(vWorldPos.y * 0.65 + skyNoise2(vWorldPos.xz * 0.03) * 3.0);
        float slopeTurf = smoothstep(0.58, 0.86, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.072, 0.118, 0.058), slopeTurf * 0.80);

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
        gl_FragColor = vec4(finalCol, 1.0);
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
    roughnessMap: rockTex.roughness,
    roughness: 0.88,
    metalness: 0.04,
    envMapIntensity: 0.96,
  });

  // 3D World-Space Multi-Scale Triplanar Fractured Basalt Cliff, Outcrop Scree & Tactile Coastal Turf/Heather Shader:
  // - Eliminates stretched 2D PlaneGeometry UV mapping completely in favor of true 3-octave 3D triplanar rock & tussock relief!
  // - Steep cliffs feature discontinuous tilted fracture ledges, vertical fissures, crevice AO & mineral/lichen patches (NEVER uniform stripes!).
  // - Uplands & hillsides blend exposed craggy bedrock ribs, scree borders, textured moss/fescue tussocks & russet heather!
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
        vRockWorldNormal = normalize(nMat * objectNormal);`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        ${SHARED_SKY_GLSL}
        varying vec3 vRockWorldPos;
        varying vec3 vRockWorldNormal;

        // Evaluates irregular, fractured Nordic basalt cliff ledges, leaning vertical fissures & angular rock facets!
        float evalFaroeseCliffStrata(vec3 wp) {
          // Warp dip & elevation laterally so strata break, tilt, and terminate naturally (ZERO straight stripes!)
          float warpDip =
            wp.x * 0.032 -
            wp.z * 0.026 +
            (skyFbm(wp.xz * 0.055) - 0.5) * 4.2 +
            (skyNoise2(wp.xz * 0.19) - 0.5) * 1.45;
          float lateralBreak = smoothstep(0.22, 0.76, skyFbm(wp.xz * 0.095 + vec2(wp.y * 0.035, -wp.y * 0.028)));
          float coarseBed = abs(fract((wp.y + warpDip) * 0.29) - 0.5) * 2.0;
          float fineBed = abs(fract((wp.y * 1.7 + warpDip * 1.3) * 0.44) - 0.5) * 2.0;
          float brokenLedge = mix(0.45, smoothstep(0.06, 0.42, coarseBed), lateralBreak);
          // Leaning vertical columnar joints & erosion fissures
          vec2 fissureCoord = vec2(
            (wp.x + wp.z) * 0.34 + wp.y * 0.09 + (skyNoise2(wp.xz * 0.14) - 0.5) * 1.6,
            wp.y * 0.11 - (wp.x - wp.z) * 0.08
          );
          float vertJoints = skyFbm(fissureCoord);
          float angularBlocks = skyNoise2(vec2(wp.x * 0.78 - wp.z * 0.62, wp.y * 0.68));
          return brokenLedge * 0.42 + smoothstep(0.12, 0.65, fineBed) * 0.18 + vertJoints * 0.26 + angularBlocks * 0.14;
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal);
          vec3 triBlend = pow(max(abs(wN), vec3(1e-4)), vec3(4.0));
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.068;
          vec3 rpDetail = vRockWorldPos * 0.32;
          vec3 rpFine = vRockWorldPos * 1.38;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;
          vec3 albFine =
            texture2D(map, rpFine.zy).rgb * triBlend.x +
            texture2D(map, rpFine.xz).rgb * triBlend.y +
            texture2D(map, rpFine.xy).rgb * triBlend.z;

          vec3 multiRockAlb = mix(mix(albMacro, albDetail, 0.48), albFine, 0.28);
          float cliffSteepMask = 1.0 - smoothstep(0.34, 0.76, abs(wN.y));
          float strataVal = evalFaroeseCliffStrata(vRockWorldPos);
          // Deepen fracture crevices with natural rock AO & add irregular pale coastal lichen / mineral patches!
          float creviceAO = mix(0.54, 1.12, smoothstep(0.18, 0.68, strataVal));
          float lichenPatch = smoothstep(0.62, 0.88, skyFbm(vRockWorldPos.xz * 0.22 + vRockWorldPos.y * 0.14));
          vec3 mineralTint = mix(vec3(0.72, 0.74, 0.79), vec3(1.18, 1.15, 1.10), strataVal) * creviceAO;
          mineralTint = mix(mineralTint, vec3(1.16, 1.20, 1.08), lichenPatch * 0.28);
          diffuseColor.rgb *= multiRockAlb * mix(vec3(1.0), mineralTint, 0.35 + 0.65 * cliffSteepMask);
        #endif`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec2 twinPadNorm = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
        float dragonPadClear = smoothstep(0.76, 1.26, length(twinPadNorm));

        // Natural rugged Nordic mosaic: exposed craggy basalt ribs & scree + textured fescue/moss tussocks + russet heather!
        float crownSlope = smoothstep(0.54, 0.86, vRockWorldNormal.y);
        float aboveSpray = smoothstep(-5.2, 0.4, vRockWorldPos.y);
        float patchField =
          skyFbm(vRockWorldPos.xz * 0.13 + 3.7) * 0.56 +
          skyFbm(vRockWorldPos.xz * 0.46 - 2.1) * 0.28 +
          skyNoise2(vRockWorldPos.xz * 1.55) * 0.16;
        // Crisp rock-outcrop islands breaking right through the turf on ridges & steeper shoulders!
        float outcropMosaic = smoothstep(0.32, 0.64, patchField + (vRockWorldNormal.y - 0.76) * 0.55);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * outcropMosaic;

        // Multi-species textured turf (olive moss, coastal fescue, golden dry sedge & russet heather + fine tussock grain!)
        float tussockGrain = skyNoise2(vRockWorldPos.xz * 2.35) * 0.55 + skyNoise2(vRockWorldPos.xz * 6.4) * 0.45;
        float heatherZone = smoothstep(0.56, 0.84, skyFbm(vRockWorldPos.xz * 0.19 - 5.4)) * smoothstep(2.5, 14.0, vRockWorldPos.y);
        float drySedge = smoothstep(0.48, 0.82, skyFbm(vRockWorldPos.xz * 0.31 + 1.9));
        vec3 turfBase = mix(vec3(0.068, 0.136, 0.042), vec3(0.155, 0.188, 0.060), skyFbm(vRockWorldPos.xz * 0.11));
        turfBase = mix(turfBase, vec3(0.195, 0.168, 0.068), drySedge * 0.38);
        turfBase = mix(turfBase, vec3(0.148, 0.096, 0.064), heatherZone * 0.44);
        // Retain crisp micro-tussock & underlying rock grain so turf NEVER looks flat or velvety-smooth!
        turfBase *= (0.72 + 0.56 * tussockGrain);
        diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb * 1.15, turfBase, 0.78), clamp(turfMask, 0.0, 0.86));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.5m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.36, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `vec3 wNR = normalize(vRockWorldNormal);
        vec3 triWR = pow(max(abs(wNR), vec3(1e-4)), vec3(4.0));
        triWR /= max(triWR.x + triWR.y + triWR.z, 1e-4);
        vec3 rpRMid = vRockWorldPos * 0.34;
        vec3 rpRFine = vRockWorldPos * 1.42;
        float rMid =
          texture2D(roughnessMap, rpRMid.zy).g * triWR.x +
          texture2D(roughnessMap, rpRMid.xz).g * triWR.y +
          texture2D(roughnessMap, rpRMid.xy).g * triWR.z;
        float rFine =
          texture2D(roughnessMap, rpRFine.zy).g * triWR.x +
          texture2D(roughnessMap, rpRFine.xz).g * triWR.y +
          texture2D(roughnessMap, rpRFine.xy).g * triWR.z;
        roughnessFactor = roughness * mix(0.68, 1.08, mix(rMid, rFine, 0.42));
        float wetRough = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        roughnessFactor = clamp(mix(roughnessFactor, 0.16, wetRough * 0.86), 0.12, 0.98);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        // True 3D multi-scale triplanar rock fracture, cliff strata & coastal turf-tussock normal perturbation!
        {
          vec3 wN2 = normalize(vRockWorldNormal);
          vec2 padN2 = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
          float padGentle = mix(0.32, 1.0, smoothstep(0.70, 1.22, length(padN2)));
          float wallBoost = mix(0.68, 1.32, 1.0 - smoothstep(0.38, 0.82, abs(wN2.y)));
          vec3 triW = pow(max(abs(wN2), vec3(1e-4)), vec3(4.0));
          triW /= max(triW.x + triW.y + triW.z, 1e-4);

          vec3 rpNMacro = vRockWorldPos * 0.14;
          vec3 rpNMid = vRockWorldPos * 0.48;
          vec3 rpNFine = vRockWorldPos * 1.75;
          float hMacro =
            texture2D(roughnessMap, rpNMacro.zy).g * triW.x +
            texture2D(roughnessMap, rpNMacro.xz).g * triW.y +
            texture2D(roughnessMap, rpNMacro.xy).g * triW.z;
          float hMid =
            texture2D(roughnessMap, rpNMid.zy).g * triW.x +
            texture2D(roughnessMap, rpNMid.xz).g * triW.y +
            texture2D(roughnessMap, rpNMid.xy).g * triW.z;
          float hFine =
            texture2D(roughnessMap, rpNFine.zy).g * triW.x +
            texture2D(roughnessMap, rpNFine.xz).g * triW.y +
            texture2D(roughnessMap, rpNFine.xy).g * triW.z;

          float tussockMicro = skyNoise2(vRockWorldPos.xz * 2.6) * 0.6 + skyNoise2(vRockWorldPos.xz * 6.8) * 0.4;
          float strataRelief = evalFaroeseCliffStrata(vRockWorldPos);
          float combinedH =
            strataRelief * 0.44 +
            (1.0 - hMacro) * 0.22 +
            (1.0 - hMid) * 0.20 +
            (1.0 - hFine) * 0.14 +
            tussockMicro * 0.16 * smoothstep(0.55, 0.88, wN2.y);

          float rockBumpH = combinedH * 0.175 * wallBoost * padGentle;
          vec3 dPdxR = dFdx( -vViewPosition );
          vec3 dPdyR = dFdy( -vViewPosition );
          vec3 r1R = cross( dPdyR, normal );
          vec3 r2R = cross( normal, dPdxR );
          float detR = dot( dPdxR, r1R );
          float signDetR = detR < 0.0 ? -1.0 : 1.0;
          vec3 surfGradR = signDetR * ( dFdx( rockBumpH ) * r1R + dFdy( rockBumpH ) * r2R );
          vec3 pertRockN = abs( detR ) * normal - surfGradR;
          normal = dot( pertRockN, pertRockN ) > 1e-12 ? normalize( pertRockN ) : normal;
        }`
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
  // 0. CONTINUOUS SUBMARINE BATHYMETRIC SEAFLOOR (-25.5m)
  // ============================================================================
  group.add(buildSubmarineBathymetryMesh(atmosphereUniforms));

  // ============================================================================
  // 1. EXPANDED TWIN-DRAGON HERO PROMONTORY (Natural Coastal Outcrops & Fractured Basalt Cliffs!)
  // ============================================================================
  const mainGrid = 288;
  const cliffGeom = new THREE.PlaneGeometry(102, 104, mainGrid, mainGrid);
  cliffGeom.rotateX(-Math.PI * 0.5);
  const posAttr = cliffGeom.getAttribute('position') as THREE.BufferAttribute;

  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i) - 4.0;
    const z = posAttr.getZ(i) - 14.5;
    const y = sampleHeroCliffHeight(x, z);
    posAttr.setXYZ(i, x, y, z);
  }
  applyVerticalCliffWallRelief(cliffGeom, 7.3, true);

  const cliffMesh = new THREE.Mesh(cliffGeom, rockMat);
  cliffMesh.receiveShadow = true;
  cliffMesh.castShadow = true;
  cliffMesh.name = 'HeroBasaltCliffPerch';
  group.add(cliffMesh);

  const cairnY = sampleHeroCliffHeight(-8.65, -7.25);
  group.add(buildCoastalStoneCairn(-8.65, cairnY - 0.04, -7.25, rockMat));

  // ============================================================================
  // 2. FAROESE ARCHIPELAGO (Smooth Grassy Tablelands, Flat-Topped Sea-Arches & Tabular Cletts!)
  // ============================================================================
  const archipelagoGroup = new THREE.Group();
  archipelagoGroup.name = 'NordicArchipelago';

  for (let idx = 0; idx < ARCHIPELAGO_ISLANDS.length; idx++) {
    const isl = ARCHIPELAGO_ISLANDS[idx];
    const ig = new THREE.PlaneGeometry(isl.spanX, isl.spanZ, isl.gridSegs, isl.gridSegs);
    ig.rotateX(-Math.PI * 0.5);
    const ip = ig.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < ip.count; i++) {
      const wx = isl.centerX + ip.getX(i);
      const wz = isl.centerZ + ip.getZ(i);
      const wy = isl.evalHeight(wx, wz);
      ip.setXYZ(i, wx, wy, wz);
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
  // 3. PHYSICALLY GROUNDED GORGE-FED WATERFALL & OCEAN PLUNGE BOUNDARY!
  // ============================================================================
  const cosW = Math.cos(0.18);
  const sinW = Math.sin(0.18);
  const streamWorldPt = (lx: number): THREE.Vector3 => {
    const lz = Math.sin(lx * 0.13 + 0.5) * 2.1;
    const wx = -66.0 + lx * cosW + lz * sinW;
    const wz = -32.0 - lx * sinW + lz * cosW;
    const wy = evalWestWaterfallIsland(wx, wz);
    return new THREE.Vector3(wx, wy, wz);
  };

  let lipLX = 10.0;
  for (let lx = 3.0; lx <= 25.0; lx += 0.08) {
    const pt = streamWorldPt(lx);
    if (pt.y < 6.2) {
      lipLX = lx - 0.16;
      break;
    }
  }
  const lipPt = streamWorldPt(lipLX);
  const preLipPt = streamWorldPt(lipLX - 1.2);
  const streamFlowDir = new THREE.Vector2(lipPt.x - preLipPt.x, lipPt.z - preLipPt.z).normalize();
  const streamRightDir = new THREE.Vector2(-streamFlowDir.y, streamFlowDir.x);

  const streamSegsU = 32;
  const streamSegsV = 6;
  const stVerts = new Float32Array((streamSegsU + 1) * (streamSegsV + 1) * 3);
  const stUvs = new Float32Array((streamSegsU + 1) * (streamSegsV + 1) * 2);
  for (let iu = 0; iu <= streamSegsU; iu++) {
    const u = iu / streamSegsU;
    const lx = THREE.MathUtils.lerp(-8.5, lipLX + 0.14, u);
    const center = streamWorldPt(lx);
    const halfW = THREE.MathUtils.lerp(1.1, 1.48, u);
    for (let iv = 0; iv <= streamSegsV; iv++) {
      const v = iv / streamSegsV;
      const lat = (v - 0.5) * 2.0 * halfW;
      const wx = center.x + streamRightDir.x * lat;
      const wz = center.z + streamRightDir.y * lat;
      const bedY = evalWestWaterfallIsland(wx, wz);
      const wy = Math.max(bedY + 0.04, center.y + 0.22);
      const idx = iu * (streamSegsV + 1) + iv;
      stVerts[idx * 3] = wx;
      stVerts[idx * 3 + 1] = wy;
      stVerts[idx * 3 + 2] = wz;
      stUvs[idx * 2] = v;
      stUvs[idx * 2 + 1] = 1.0 - u * 2.8;
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

  const wfSegsY = 48;
  const wfSegsX = 16;
  const fallBottomY = SEA_LEVEL_Y - 3.6;
  const fallHeight = lipPt.y + 0.22 - fallBottomY;
  const horizontalThrow = 3.1;

  const wfVerts = new Float32Array((wfSegsY + 1) * (wfSegsX + 1) * 3);
  const wfUvs = new Float32Array((wfSegsY + 1) * (wfSegsX + 1) * 2);

  for (let iy = 0; iy <= wfSegsY; iy++) {
    const s = iy / wfSegsY;
    const forwardDist = -0.35 + (horizontalThrow + 0.35) * Math.pow(s, 0.62);
    const wy = lipPt.y + 0.22 - fallHeight * Math.pow(s, 1.55);
    const cx = lipPt.x + streamFlowDir.x * forwardDist;
    const cz = lipPt.z + streamFlowDir.y * forwardDist;

    const cliffRockY = evalWestWaterfallIsland(cx, cz);
    const pushOut = wy < cliffRockY + 0.45 ? 0.55 : 0.0;
    const halfWidth = THREE.MathUtils.lerp(1.42, 2.75, Math.pow(s, 0.85));

    for (let ix = 0; ix <= wfSegsX; ix++) {
      const u = ix / wfSegsX;
      const lat = (u - 0.5) * 2.0 * halfWidth;
      const curtainBow = Math.sin(u * Math.PI) * (0.32 + 0.50 * s) + pushOut;
      const wx = cx + streamRightDir.x * lat + streamFlowDir.x * curtainBow;
      const wz = cz + streamRightDir.y * lat + streamFlowDir.y * curtainBow;

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
  const wfGeom = new THREE.BufferGeometry();
  wfGeom.setAttribute('position', new THREE.BufferAttribute(wfVerts, 3));
  wfGeom.setAttribute('uv', new THREE.BufferAttribute(wfUvs, 2));
  wfGeom.setIndex(wfIndices);
  wfGeom.computeVertexNormals();

  const plungeX = lipPt.x + streamFlowDir.x * (horizontalThrow + 0.45);
  const plungeZ = lipPt.z + streamFlowDir.y * (horizontalThrow + 0.45);

  const waterfallUniforms: Record<string, THREE.IUniform> = {
    ...atmosphereUniforms,
  };

  const wfMat = new THREE.ShaderMaterial({
    name: 'NordicWaterfallShader',
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: waterfallUniforms,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      ${SHARED_SKY_GLSL}
      uniform vec3 uSunColor;
      uniform vec3 uWaterShallowColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      void main() {
        float sideFeather = sin(clamp(vUv.x, 0.0, 1.0) * 3.14159);
        float f1 = skyFbm(vec2(vUv.x * 8.5, vUv.y * 10.0 + uTime * 2.6));
        float f2 = skyFbm(vec2(vUv.x * 19.0 + 4.2, vUv.y * 22.0 + uTime * 4.3));
        float threads = smoothstep(0.28, 0.78, f1 * 0.62 + f2 * 0.38);

        float crestFoam = smoothstep(0.75, 0.98, vUv.y) * 0.45;
        float plungeBoil = smoothstep(0.28, 0.02, vUv.y) * 0.68;

        vec3 ambientWater = mix(uHorizonAntiColor, uHorizonSunColor, 0.42) * 1.18 + uSunColor * 0.36;
        vec3 deepChute = uWaterShallowColor * 1.4 + ambientWater * 0.35;
        vec3 col = mix(deepChute, ambientWater, clamp(threads * 0.82 + crestFoam + plungeBoil, 0.0, 1.0));

        vec3 toFrag = vWorldPos - cameraPosition;
        float dist = length(toFrag);
        vec3 hazeCol = evalHorizonHazeColor(toFrag);
        float aerial = 1.0 - exp(-pow(max(uMistDensity * 0.85 * dist, 1e-6), 1.26));
        col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

        float alpha = pow(max(sideFeather, 1e-5), 0.65) * (0.36 + 0.54 * threads + crestFoam + plungeBoil);
        gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), clamp(alpha, 0.0, 0.92));
      }
    `,
  });

  const wfStreamMesh = new THREE.Mesh(streamGeom, wfMat);
  wfStreamMesh.renderOrder = 3;
  const wfCurtainMesh = new THREE.Mesh(wfGeom, wfMat);
  wfCurtainMesh.renderOrder = 3;
  group.add(wfStreamMesh);
  group.add(wfCurtainMesh);

  const plungePoolGeom = new THREE.CircleGeometry(7.8, 40);
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
        float r = length(vLocalXZ) / 7.8;
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
