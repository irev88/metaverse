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
 * Evaluates realistic Faroese horizontal basalt lava-flow strata ledges & blocky vertical buttress ribs
 * ONLY for steep vertical cliff walls (never applied to horizontal grassy plateaus!).
 */
function evalCliffWallStrataAndButtresses(
  wx: number,
  wz: number,
  wy: number,
  seed: number
): { radialOffset: number; verticalLedgeOffset: number } {
  // 1. Broad, sturdy vertical cliff buttresses & recessed alcoves/chimneys (12m..22m natural spacing, NOT spiky noise!)
  const buttressWave =
    (fbm2D(wx * 0.075 + seed, wz * 0.075 - seed, 3) - 0.5) * 1.55 +
    (fbm2D(wx * 0.19 - seed * 1.3, wz * 0.19 + seed * 0.7, 2) - 0.5) * 0.52;

  // 2. Horizontal Faroese basalt trap-rock bedding layers (~2.8m..3.6m thick lava beds)
  const bedTilt = wx * 0.025 - wz * 0.020 + (fbm2D(wx * 0.04 + seed, wz * 0.04, 2) - 0.5) * 1.8;
  const bedCoord = (wy + bedTilt) / 3.1;
  const bedFrac = bedCoord - Math.floor(bedCoord);
  const stepLedge = (smoothstep(0.12, 0.42, bedFrac) - bedFrac) * 0.48;

  // 3. Natural wave-washed basal rock plinth flaring slightly outward right around sea level (-11.5m)
  const basalPlinth = Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.35)) / 2.2, 2.0)) * 0.85;

  return {
    radialOffset: buttressWave + stepLedge + basalPlinth,
    verticalLedgeOffset: stepLedge * 0.45,
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
 * Evaluates the Expanded Twin-Dragon Faroese Basalt Promontory at (x, z).
 * - Horizontal top surface is a lush, smooth, gently rolling coastal meadow (ZERO spiky peaks!),
 *   rising softly northward into a gently inclined grassy headland (like Traelanipa in the Faroe Islands).
 * - Steep cliff brink breaks cleanly into sheer, buttressed basalt sea-cliffs plunging to -44.0m below the seabed!
 */
export function sampleHeroCliffHeight(x: number, z: number): number {
  const innerPadDist = Math.sqrt(Math.pow(x / 7.85, 2) + Math.pow((z + 0.95) / 5.05, 2));

  // Smooth, natural scalloped coastal bays & bold rounded promontory noses (NO jagged star-spikes!)
  const rimWarpMask = smoothstep(0.78, 1.35, innerPadDist);
  const wx =
    x +
    rimWarpMask *
      ((fbm2D(x * 0.055 + 3.1, z * 0.055 - 2.4, 3) - 0.5) * 5.2 +
        (fbm2D(x * 0.14 - 1.7, z * 0.14 + 4.3, 2) - 0.5) * 1.6);
  const wz =
    z +
    rimWarpMask *
      ((fbm2D(x * 0.055 - 5.2, z * 0.055 + 1.9, 3) - 0.5) * 4.4 +
        (fbm2D(x * 0.14 + 2.9, z * 0.14 - 3.1, 2) - 0.5) * 1.4);

  const ang = Math.atan2(wz + 4.2, wx);
  const frontPinch = z > 1.2 ? 0.64 : z < -8.0 ? 1.50 : 1.0 + (-z + 1.2) * 0.046;
  const naturalEmbayments =
    1.0 +
    0.18 * Math.sin(ang * 2.0 - 0.45) +
    0.13 * Math.sin(ang * 3.0 + 0.65) +
    0.08 * Math.cos(ang * 4.0 - 1.15);

  const normX = wx / (15.8 * naturalEmbayments);
  const normZ = (wz + 4.2) / (11.2 * frontPinch * naturalEmbayments);
  let perchDist = Math.sqrt(normX * normX + normZ * normZ);

  // Connected North-Western grassy headland cape & smooth meadow saddle
  if (z < -3.5) {
    const nwDX = (wx + 17.5) / 15.2;
    const nwDZ = (wz + 25.0) / 18.5;
    const nwLobeDist =
      Math.sqrt(nwDX * nwDX + nwDZ * nwDZ) *
      (0.92 + 0.14 * fbm2D(x * 0.06 + 2.2, z * 0.06 - 1.4, 3));
    const hBlend = Math.max(0, 1.0 - Math.abs(perchDist - nwLobeDist) / 0.55);
    perchDist = Math.min(perchDist, nwLobeDist) - 0.12 * hBlend * hBlend;
  }

  // Natural Faroese sea-cove embayment indenting the NE cliff wall
  if (x > 9.5 && z < -7.0) {
    const coveDX = (x - 18.5) / 6.5;
    const coveDZ = (z + 19.5) / 7.5;
    const coveIndent = Math.exp(-(coveDX * coveDX + coveDZ * coveDZ)) * 0.34;
    perchDist += coveIndent;
  }

  const pawPadFlat = smoothstep(0.84, 1.34, innerPadDist);
  // Velvety, gently rolling coastal turf undulation (+/- 0.38m)
  const meadowUndulation =
    ((fbm2D(x * 0.18 + 4.2, z * 0.18 - 1.7, 3) - 0.48) * 0.68 +
      (fbm2D(x * 0.48, z * 0.48, 2) - 0.5) * 0.16) *
    pawPadFlat;

  // Gently inclined grassy northern tableland slope behind the dragons (like Faroe Islands' Traelanipa!)
  const highlandEnv =
    smoothstep(-7.5, -32.0, z) * smoothstep(36.0, 6.0, Math.abs(x + 3.5));
  const backHighland =
    highlandEnv * (7.4 + 2.6 * fbm2D(x * 0.055 + 1.3, z * 0.055 - 2.1, 3));

  const plateauTopY = meadowUndulation + backHighland;

  if (perchDist <= 0.84) {
    return plateauTopY;
  }

  // Crisp cliff brink at perchDist = 0.84 -> steep basalt sea-cliff plunging unbroken to -44.0m!
  const cliffFall = smoothstep(0.84, 1.62, perchDist);
  const deepSkirt = smoothstep(1.45, 2.25, perchDist);
  const cliffProfile = Math.pow(cliffFall, 0.86);

  const seaShelfY = SEA_LEVEL_Y - 2.2;
  const upperCliffY = THREE.MathUtils.lerp(plateauTopY, seaShelfY, cliffProfile);
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
 * Builds a lifelike Faroese / Hebridean Tabular Grassy Table-Island or Gently-Tilted Cuesta Headland!
 * - Horizontal top surface (rNorm < 0.78) is a broad, serene, gently sloping grassy meadow plateau (ZERO pointy cones/spikes!).
 * - Coastline breaks crisply at the cliff rim into steep vertical basalt cliffs with a wave-washed rock shelf at sea level,
 *   then plunges to ISLAND_SKIRT_BASE_Y (-44.0m) well beneath the -25.5m seafloor!
 */
function makeTabularPlateauIslandFn(opts: {
  cx: number;
  cz: number;
  rx: number;
  rz: number;
  plateauY: number;
  tiltX?: number; // Gentle Faroe-style inclined grassy ramp slope (e.g. +0.12 = ~7 deg sweep!)
  tiltZ?: number;
  seed: number;
  rotRad: number;
  secondaryLobe?: {
    dx: number;
    dz: number;
    rx: number;
    rz: number;
    plateauScale: number;
    lowSaddle?: boolean;
  };
  carveRiverToEast?: boolean;
}): (wx: number, wz: number) => number {
  const cosR = Math.cos(opts.rotRad);
  const sinR = Math.sin(opts.rotRad);
  const tiltX = opts.tiltX ?? 0.0;
  const tiltZ = opts.tiltZ ?? 0.0;

  return (wx: number, wz: number): number => {
    const dx = wx - opts.cx;
    const dz = wz - opts.cz;
    const lx = dx * cosR - dz * sinR;
    const lz = dx * sinR + dz * cosR;

    // Smooth, organic coastline bays, coves & rounded headlands (low-frequency fbm, NEVER spiky!)
    const warpX =
      lx + (fbm2D(lx * 0.038 + opts.seed, lz * 0.038 - opts.seed, 3) - 0.5) * (opts.rx * 0.44);
    const warpZ =
      lz + (fbm2D(lx * 0.038 - opts.seed, lz * 0.038 + opts.seed, 3) - 0.5) * (opts.rz * 0.44);

    const ang = Math.atan2(warpZ, warpX);
    const lobe =
      1.0 +
      0.20 * Math.sin(ang * 2.0 + opts.seed) +
      0.13 * Math.cos(ang * 3.0 - opts.seed * 1.5) +
      0.07 * Math.sin(ang * 4.0 + 0.9);

    let rNorm = Math.sqrt(
      Math.pow(warpX / (opts.rx * lobe), 2) + Math.pow(warpZ / (opts.rz * lobe), 2)
    );
    let basePlateauY = opts.plateauY;

    if (opts.secondaryLobe) {
      const sl = opts.secondaryLobe;
      const sx = warpX - sl.dx;
      const sz = warpZ - sl.dz;
      const sAng = Math.atan2(sz, sx);
      const sLobe =
        1.0 + 0.18 * Math.cos(sAng * 2.0 - opts.seed) + 0.11 * Math.sin(sAng * 3.0 + opts.seed);
      const rSec = Math.sqrt(Math.pow(sx / (sl.rx * sLobe), 2) + Math.pow(sz / (sl.rz * sLobe), 2));
      const kSmooth = sl.lowSaddle ? 0.42 : 0.34;
      const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (rSec - rNorm)) / kSmooth));
      rNorm = rSec * (1 - h) + rNorm * h - kSmooth * h * (1 - h);
      const saddleDip = sl.lowSaddle ? Math.sin(h * Math.PI) * 0.48 : 0.0;
      basePlateauY =
        THREE.MathUtils.lerp(opts.plateauY * sl.plateauScale, opts.plateauY, h) * (1.0 - saddleDip);
    }

    // Smooth, gently sloping grassy plateau top (like Faroe Islands Photos 1, 2 & 3!)
    const gentleTilt = THREE.MathUtils.clamp(lx * tiltX + lz * tiltZ, -basePlateauY * 0.42, basePlateauY * 0.52);
    const softRollingTurf =
      (fbm2D(lx * 0.045 + opts.seed * 1.7, lz * 0.045 - opts.seed, 3) - 0.48) * 2.4 +
      (fbm2D(lx * 0.13 - opts.seed, lz * 0.13 + opts.seed, 2) - 0.5) * 0.55;

    let topSurfaceY = basePlateauY + gentleTilt + softRollingTurf;

    // Optional smooth U-shaped grassy stream valley across West Waterfall Island feeding the sea-cliff waterfall!
    if (opts.carveRiverToEast && lx > -opts.rx * 0.48) {
      const streamCenterLZ = Math.sin(lx * 0.13 + 0.5) * 2.1;
      const distFromStream = Math.abs(lz - streamCenterLZ);
      const valleyProfile = 1.0 - smoothstep(1.4, 5.2, distFromStream);
      if (valleyProfile > 0.001) {
        const targetBedY = 10.4 - smoothstep(-opts.rx * 0.42, opts.rx * 0.78, lx) * 2.8;
        topSurfaceY = THREE.MathUtils.lerp(topSurfaceY, Math.min(topSurfaceY, targetBedY), valleyProfile);
      }
    }

    // Crisp Faroese plateau brink at rNorm = 0.76 -> steep sheer sea-cliff drop -> wave-cut shelf -> buried -44m skirt!
    if (rNorm <= 0.76) {
      return topSurfaceY;
    }

    const cliffDrop = smoothstep(0.76, 1.08, rNorm);
    const submarinePlunge = smoothstep(1.02, 1.38, rNorm);
    const seaShelfY = SEA_LEVEL_Y - 1.8;
    const aboveSubShelf = THREE.MathUtils.lerp(topSurfaceY, seaShelfY, Math.pow(cliffDrop, 0.82));
    return THREE.MathUtils.lerp(aboveSubShelf, ISLAND_SKIRT_BASE_Y, submarinePlunge);
  };
}

/**
 * Builds a lifelike Faroese Half-Ring / Crescent Table-Island curling around a calm coastal lagoon!
 * Broad, smooth grassy tableland top + crisp steep inner/outer basalt sea-cliffs + ZERO spiky cones!
 */
function makeCrescentTableIslandFn(opts: {
  cx: number;
  cz: number;
  ringRadius: number;
  ringHalfWidth: number;
  plateauY: number;
  openAngleRad: number;
  arcHalfSpanRad: number;
  seed: number;
}): (wx: number, wz: number) => number {
  return (wx: number, wz: number): number => {
    const dx = wx - opts.cx;
    const dz = wz - opts.cz;

    const wxWarp =
      dx + (fbm2D(dx * 0.034 + opts.seed, dz * 0.034 - opts.seed, 3) - 0.5) * (opts.ringRadius * 0.30);
    const wzWarp =
      dz + (fbm2D(dx * 0.034 - opts.seed, dz * 0.034 + opts.seed, 3) - 0.5) * (opts.ringRadius * 0.30);

    const r = Math.hypot(wxWarp, wzWarp);
    const ang = Math.atan2(wzWarp, wxWarp);

    const spineCenterAng = opts.openAngleRad + Math.PI;
    let dAng = ang - spineCenterAng;
    while (dAng > Math.PI) dAng -= Math.PI * 2;
    while (dAng < -Math.PI) dAng += Math.PI * 2;
    const absAng = Math.abs(dAng);

    // Smooth, rounded headland horns at both ends of the crescent bay
    const hornMask = 1.0 - smoothstep(opts.arcHalfSpanRad * 0.72, opts.arcHalfSpanRad * 1.08, absAng);
    const widthMod =
      opts.ringHalfWidth * (0.68 + 0.42 * hornMask + 0.16 * Math.sin(dAng * 2.5 + opts.seed));

    const radialDistFromSpine = Math.abs(r - opts.ringRadius) / Math.max(3.5, widthMod);
    const effectiveDist = radialDistFromSpine + (1.0 - hornMask) * 1.35;

    // Smooth, gently undulating grassy plateau top along the crescent headland
    const topMeadowY =
      opts.plateauY * (0.72 + 0.34 * hornMask) +
      (fbm2D(dx * 0.045 + opts.seed, dz * 0.045 - opts.seed, 3) - 0.48) * 2.1;

    // Sheltered shallow turquoise lagoon shelf (-16.2m) inside the bay, plunging to -44m outside!
    const insideLagoon = (1.0 - smoothstep(opts.ringRadius * 0.55, opts.ringRadius * 1.15, r)) * 0.65;
    const floorTargetY = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, -16.2, insideLagoon);

    if (effectiveDist <= 0.62) {
      return topMeadowY;
    }

    const cliffDrop = smoothstep(0.62, 1.04, effectiveDist);
    const subPlunge = smoothstep(0.98, 1.36, effectiveDist);
    const seaBenchY = SEA_LEVEL_Y - 1.8;
    const upperY = THREE.MathUtils.lerp(topMeadowY, seaBenchY, Math.pow(cliffDrop, 0.80));
    return THREE.MathUtils.lerp(upperY, floorTargetY, subPlunge);
  };
}

// ============================================================================
// SHARED MULTI-BELT FAROESE ARCHIPELAGO DEFINITIONS (Smooth Grassy Tops, Sheer Cliffs!)
// ============================================================================
const evalWestWaterfallIsland = makeTabularPlateauIslandFn({
  cx: -66.0,
  cz: -32.0,
  rx: 21.5,
  rz: 25.0,
  plateauY: 12.8,
  tiltX: -0.09, // Gently rises westward like a natural Faroese coastal tableland!
  tiltZ: -0.05,
  seed: 5.7,
  rotRad: 0.18,
  secondaryLobe: { dx: -24.5, dz: -11.5, rx: 17.5, rz: 19.5, plateauScale: 1.22 },
  carveRiverToEast: true,
});

const evalStarboardCrescentAtoll = makeCrescentTableIslandFn({
  cx: 88.0,
  cz: 36.0,
  ringRadius: 28.0,
  ringHalfWidth: 12.6,
  plateauY: 11.8,
  openAngleRad: -2.45,
  arcHalfSpanRad: 1.92,
  seed: 22.9,
});

const evalEastSerpentineTomboloIsland = makeTabularPlateauIslandFn({
  cx: 88.0,
  cz: -56.0,
  rx: 25.0,
  rz: 31.5,
  plateauY: 15.6,
  tiltX: 0.11,
  tiltZ: -0.06,
  seed: 14.3,
  rotRad: -0.34,
  secondaryLobe: {
    dx: -18.0,
    dz: 33.5,
    rx: 15.0,
    rz: 17.0,
    plateauScale: 0.76,
    lowSaddle: true,
  },
});

// Traelanipa-Inspired Gently-Inclined Grassy Cuesta Table-Island (smooth green ramp -> sheer sea cliff, like Photo 2!)
const evalWestTraelanipaTableIsland = makeTabularPlateauIslandFn({
  cx: -124.0,
  cz: -86.0,
  rx: 34.0,
  rz: 24.0,
  plateauY: 17.5,
  tiltX: -0.22, // Smooth ~12.5-degree lush green sweep rising to a grand western sea-cliff!
  tiltZ: 0.08,
  seed: 37.8,
  rotRad: 0.42,
});

const evalNorthWestHolmPair = makeTabularPlateauIslandFn({
  cx: -42.0,
  cz: -96.0,
  rx: 17.5,
  rz: 19.5,
  plateauY: 14.8,
  tiltX: -0.08,
  tiltZ: -0.10,
  seed: 31.6,
  rotRad: -0.28,
  secondaryLobe: { dx: -19.5, dz: 14.0, rx: 12.5, rz: 14.0, plateauScale: 0.72 },
});

const evalNorthEastHeadlandTable = makeTabularPlateauIslandFn({
  cx: 36.0,
  cz: -108.0,
  rx: 19.5,
  rz: 22.0,
  plateauY: 16.8,
  tiltX: 0.14,
  tiltZ: -0.08,
  seed: 44.1,
  rotRad: 0.52,
  secondaryLobe: { dx: 18.5, dz: -14.5, rx: 13.5, rz: 15.0, plateauScale: 0.78 },
});

const evalSouthWestBrokenCrescent = makeCrescentTableIslandFn({
  cx: -144.0,
  cz: 78.0,
  ringRadius: 38.0,
  ringHalfWidth: 15.5,
  plateauY: 17.2,
  openAngleRad: 0.62,
  arcHalfSpanRad: 1.84,
  seed: 58.4,
});

const evalSouthEastTableSound = makeTabularPlateauIslandFn({
  cx: 168.0,
  cz: 122.0,
  rx: 38.0,
  rz: 32.0,
  plateauY: 21.5,
  tiltX: 0.18,
  tiltZ: 0.09,
  seed: 71.2,
  rotRad: -0.48,
  secondaryLobe: { dx: -36.0, dz: -18.0, rx: 24.0, rz: 22.0, plateauScale: 0.74 },
});

const evalFarWestCliffMassif = makeTabularPlateauIslandFn({
  cx: -206.0,
  cz: -96.0,
  rx: 42.0,
  rz: 46.0,
  plateauY: 26.5,
  tiltX: -0.16,
  tiltZ: -0.07,
  seed: 83.9,
  rotRad: -0.19,
  secondaryLobe: { dx: 28.0, dz: 34.0, rx: 23.0, rz: 25.0, plateauScale: 0.68 },
});

const evalNorthernSoundCrescent = makeCrescentTableIslandFn({
  cx: -8.0,
  cz: -222.0,
  ringRadius: 52.0,
  ringHalfWidth: 19.5,
  plateauY: 24.5,
  openAngleRad: 1.52,
  arcHalfSpanRad: 1.80,
  seed: 96.3,
});

const evalSouthHorizonHolms = makeTabularPlateauIslandFn({
  cx: -18.0,
  cz: 236.0,
  rx: 34.0,
  rz: 26.0,
  plateauY: 18.5,
  tiltX: -0.12,
  tiltZ: 0.10,
  seed: 109.7,
  rotRad: 0.15,
  secondaryLobe: { dx: 38.0, dz: -12.0, rx: 22.0, rz: 18.0, plateauScale: 0.78 },
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
 * Applies realistic blocky basalt buttresses, recessed cliff chimneys, horizontal lava-bed ledges,
 * and basal surf shelves STRICTLY TO STEEP VERTICAL CLIFF WALLS (ny < 0.65)!
 * Horizontal & gently-sloping grassy island tops (ny >= 0.65) receive ZERO displacement and remain 100% velvety-smooth!
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

    // STRICT HORIZONTAL GUARD: Never touch plateau meadows, gentle hills, or deep buried seabed skirts!
    if (ny >= 0.66 || y < -23.5) continue;

    let padGuard = 1.0;
    if (protectHeroPad) {
      const dPad = Math.sqrt(Math.pow(x / 8.8, 2) + Math.pow((z + 0.95) / 5.8, 2));
      padGuard = smoothstep(0.88, 1.35, dPad);
      if (padGuard <= 0.001) continue;
    }

    // Smoothly ramp relief ON only on genuinely steep vertical cliff walls (ny in [0.15 .. 0.65])
    const verticalWallMask =
      smoothstep(0.66, 0.24, ny) * smoothstep(-23.5, -16.5, y) * padGuard;
    if (verticalWallMask <= 0.002) continue;

    const hLen = Math.hypot(nx, nz);
    if (hLen < 1e-4) continue;
    const outX = nx / hLen;
    const outZ = nz / hLen;

    const relief = evalCliffWallStrataAndButtresses(x, z, y, seed);
    pos.setXYZ(
      i,
      x + outX * relief.radialOffset * verticalWallMask,
      y + relief.verticalLedgeOffset * verticalWallMask,
      z + outZ * relief.radialOffset * verticalWallMask
    );
  }

  geom.computeVertexNormals();
}

/**
 * Builds an Authentic Faroese Flat-Topped, Grass-Capped Headland Sea-Arch (modeled directly on Faroe Photos 1 & 3!).
 * - Single watertight volumetric rock-spur mesh:
 *   * Top is a flat, gently sloping grassy tableland plateau (continuous with the island cliff top!).
 *   * Sides are sheer, blocky, horizontally-stratified vertical basalt cliff walls with basal surf plinths.
 *   * Lower center is pierced by a tall, natural wave-carved arched tunnel with ocean water flowing cleanly underneath!
 */
function buildFaroeseHeadlandSeaArchGeometry(spec: FaroeseSeaArchSpec): THREE.BufferGeometry {
  const uSegs = 112; // Along spur length X
  const vSegs = 64;  // Closed perimeter loop around the cross-section [Top -> +Z Cliff -> Underside/Vault -> -Z Cliff]

  const ringCount = uSegs + 1;
  const loopVerts = vSegs + 1;
  const bodyVerts = ringCount * loopVerts;
  const capVerts = 2; // End-cap centers at u=0 and u=1
  const totalVerts = bodyVerts + capVerts;

  const positions = new Float32Array(totalVerts * 3);
  const uvs = new Float32Array(totalVerts * 2);

  for (let iu = 0; iu <= uSegs; iu++) {
    const u = iu / uSegs; // 0 .. 1 along spur length
    const xRaw = (u - 0.5) * 2.0 * spec.halfLength;

    // Gentle organic bend along the headland spur centerline
    const zCenter =
      Math.sin(u * Math.PI * 1.3 + spec.seed) * 0.95 +
      (fbm2D(u * 3.2 + spec.seed, 1.7, 2) - 0.5) * 1.25;

    // 1. Flat, gently-sloping grassy plateau top (sloping slightly down toward the seaward tip u -> 1, just like Photo 1 & 3!)
    const endRoundTaper = smoothstep(0.0, 0.06, u) * smoothstep(1.0, 0.93, u);
    const yTopBase =
      spec.plateauTopY -
      u * 0.95 +
      (fbm2D(xRaw * 0.08 + spec.seed, zCenter * 0.08, 2) - 0.5) * 0.45;
    const yTop = THREE.MathUtils.lerp(SEA_LEVEL_Y - 4.0, yTopBase, endRoundTaper);

    // 2. Pier base vs. Wave-Carved Arch Tunnel Vault height!
    // For |xRaw| > openingHalfSpan: solid pier plunges all the way to ISLAND_SKIRT_BASE_Y (-44m).
    // For |xRaw| < openingHalfSpan: rises smoothly into a sturdy natural parabolic rock vault!
    const normSpan = Math.abs(xRaw) / spec.openingHalfSpan;
    const archWindowMask = 1.0 - smoothstep(0.76, 1.16, normSpan);
    const parabola = Math.max(0, 1.0 - Math.pow(Math.min(1.18, normSpan), 2.1));
    const vaultIrreg = (fbm2D(xRaw * 0.28 + spec.seed, 4.3, 3) - 0.5) * 0.75;
    const tunnelCeilingY =
      (SEA_LEVEL_Y - 5.5) + (spec.vaultCrownY - (SEA_LEVEL_Y - 5.5)) * parabola + vaultIrreg;
    const yBot = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, tunnelCeilingY, archWindowMask);

    // Wider buttress piers at both ends, slightly narrower across the central rock bridge
    const pierWidthBoost = 1.0 + 0.34 * (1.0 - archWindowMask);
    const baseHalfW = spec.halfThickness * pierWidthBoost * (0.45 + 0.55 * endRoundTaper);

    for (let iv = 0; iv <= vSegs; iv++) {
      const v = iv / vSegs; // [0..0.24] Top Plateau, [0.24..0.50] +Z Wall, [0.50..0.74] Bottom/Vault, [0.74..1.0] -Z Wall
      let localZFrac = 0;
      let localYFrac = 1;
      let onVerticalWall = 0;

      if (v <= 0.25) {
        // Flat grassy plateau top (-1 -> +1 across Z, slightly crowned)
        const s = v / 0.25;
        localZFrac = -1.0 + 2.0 * s;
        localYFrac = 1.0;
        onVerticalWall = smoothstep(0.86, 1.0, Math.abs(localZFrac)) * 0.25;
      } else if (v <= 0.50) {
        // Sheer +Z vertical basalt cliff wall (top 1 -> bottom 0)
        const s = (v - 0.25) / 0.25;
        localZFrac = 1.0;
        localYFrac = 1.0 - s;
        onVerticalWall = 1.0;
      } else if (v <= 0.75) {
        // Vaulted sea-tunnel ceiling / pier bottom (+1 -> -1 across Z, arched slightly upward in center!)
        const s = (v - 0.50) / 0.25;
        localZFrac = 1.0 - 2.0 * s;
        localYFrac = 0.0;
        onVerticalWall = 0.65;
      } else {
        // Sheer -Z vertical basalt cliff wall (bottom 0 -> top 1)
        const s = (v - 0.75) / 0.25;
        localZFrac = -1.0;
        localYFrac = s;
        onVerticalWall = 1.0;
      }

      // Softly bevel the cliff brink corners so rock edges catch natural sunlight without razor-sharp aliasing
      const cornerRound = 1.0 - 0.06 * Math.pow(localZFrac, 4.0) * Math.pow(2.0 * localYFrac - 1.0, 4.0);
      let wy = THREE.MathUtils.lerp(yBot, yTop, localYFrac);

      // Concave dome inside the sea-tunnel roof along Z so the arch underside is naturally vaulted!
      if (localYFrac < 0.05 && archWindowMask > 0.05) {
        wy += (1.0 - localZFrac * localZFrac) * 1.15 * archWindowMask;
      }

      // Flared dark wave-washed basal rock shelf right around SEA_LEVEL_Y (-11.5m) on the piers!
      const seaPlinth =
        Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.4)) / 2.3, 2.0)) * 1.55 * (1.0 - archWindowMask * 0.6);

      // Blocky basalt buttress & horizontal lava-strata relief ONLY on the vertical cliff walls!
      const wallRelief = evalCliffWallStrataAndButtresses(xRaw, zCenter + localZFrac * 4.0, wy, spec.seed);
      const effHalfW =
        baseHalfW * cornerRound +
        seaPlinth +
        wallRelief.radialOffset * 0.62 * onVerticalWall * smoothstep(-22.0, -14.0, wy);

      const px = xRaw;
      const pz = zCenter + localZFrac * effHalfW;
      const py = wy + wallRelief.verticalLedgeOffset * 0.35 * onVerticalWall;

      const idx = iu * loopVerts + iv;
      positions[idx * 3] = px;
      positions[idx * 3 + 1] = py;
      positions[idx * 3 + 2] = pz;
      uvs[idx * 2] = u * 6.0;
      uvs[idx * 2 + 1] = v * 4.0;
    }
  }

  // End-cap center vertices at u = 0 and u = 1
  const cap0Idx = bodyVerts;
  const cap1Idx = bodyVerts + 1;
  positions[cap0Idx * 3] = -spec.halfLength;
  positions[cap0Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap0Idx * 3 + 2] = 0;
  positions[cap1Idx * 3] = spec.halfLength;
  positions[cap1Idx * 3 + 1] = SEA_LEVEL_Y - 12.0;
  positions[cap1Idx * 3 + 2] = 0;

  const indices: number[] = [];
  for (let iu = 0; iu < uSegs; iu++) {
    for (let iv = 0; iv < vSegs; iv++) {
      const a = iu * loopVerts + iv;
      const b = (iu + 1) * loopVerts + iv;
      const c = (iu + 1) * loopVerts + (iv + 1);
      const d = iu * loopVerts + (iv + 1);
      // Outward-facing counter-clockwise winding (+Y on top plateau, +Z/-Z on cliff walls, -Y on vault ceiling)!
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
 * Builds a Realistic Faroese Blocky Flat-Topped Tabular Sea-Stack ("Clett") or Low Whaleback Skerry!
 * Modeled directly after Faroe Islands Photo 3:
 * - Substantial boxy/polygonal rock cross-section (NEVER narrow pointy cones!)
 * - Wide wave-washed dark rock apron right at sea level (-11.5m)
 * - Steep horizontally-stratified basalt walls with vertical flutes
 * - Flat, gently beveled tabular top!
 */
function buildTabularSeaStackGeometry(spec: TabularSeaStackSpec): THREE.BufferGeometry {
  const hSegs = 32;
  const rSegs = 36;
  const ringVerts = rSegs + 1;
  const capRingVerts = rSegs + 1;
  const centerVert = 1;
  const vCount = (hSegs + 1) * ringVerts + capRingVerts + centerVert;

  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);

  const cosRot = Math.cos(spec.rotY);
  const sinRot = Math.sin(spec.rotY);

  // Evaluate organic blocky-polygonal planform radius at angle theta
  const evalPlanRadius = (cosT: number, sinT: number, theta: number): { lx: number; lz: number } => {
    // Squarish / blocky-trapezoidal harmonic (cos(4*theta)) + low-freq organic asymmetry (NEVER spiky!)
    const blocky =
      1.0 +
      0.11 * Math.cos(theta * 4.0 + spec.seed) +
      0.14 * Math.sin(theta * 2.0 - spec.seed * 0.7) +
      0.08 * Math.cos(theta * 3.0 + spec.seed * 1.3);
    const smoothRock = 0.90 + 0.22 * fbm2D(cosT * 1.4 + spec.seed, sinT * 1.4 - spec.seed, 3);
    return {
      lx: cosT * spec.rx * blocky * smoothRock,
      lz: sinT * spec.rz * blocky * smoothRock,
    };
  };

  for (let ih = 0; ih <= hSegs; ih++) {
    const t = ih / hSegs; // 0 at buried skirt (-44m), 1 at flat tabular brink!
    for (let ir = 0; ir <= rSegs; ir++) {
      const v = ir / rSegs;
      const theta = v * Math.PI * 2.0;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      const basePlan = evalPlanRadius(cosT, sinT, theta);
      const capTopY =
        spec.topY +
        basePlan.lx * spec.topSlopeX +
        (fbm2D(basePlan.lx * 0.16 + spec.seed, basePlan.lz * 0.16, 2) - 0.5) * 0.42;

      const wy = THREE.MathUtils.lerp(ISLAND_SKIRT_BASE_Y, capTopY, t);

      // Gentle ~84-degree inward batter toward top (keeps 76% of full width at the top — broad & flat-topped, NEVER conical!)
      const gentleTaper = 1.18 - 0.34 * Math.pow(t, 0.85);
      // Wide, dark wave-washed basal rock shelf right at SEA_LEVEL_Y (-11.5m), just like Photo 3!
      const surfApron = 1.0 + 0.34 * Math.exp(-Math.pow((wy - (SEA_LEVEL_Y - 0.5)) / 2.3, 2.0));
      // Subtle top-brink bevel on the uppermost 4%
      const brinkBevel = 1.0 - 0.06 * smoothstep(0.94, 1.0, t);

      const wallRelief = evalCliffWallStrataAndButtresses(
        spec.x + basePlan.lx,
        spec.z + basePlan.lz,
        wy,
        spec.seed
      );
      const reliefFade = smoothstep(0.18, 0.45, t) * (1.0 - smoothstep(0.90, 1.0, t));

      const scaleXZ = gentleTaper * surfApron * brinkBevel;
      const lx = basePlan.lx * scaleXZ + cosT * wallRelief.radialOffset * 0.42 * reliefFade;
      const lz = basePlan.lz * scaleXZ + sinT * wallRelief.radialOffset * 0.42 * reliefFade;

      const wx = spec.x + lx * cosRot - lz * sinRot;
      const wz = spec.z + lx * sinRot + lz * cosRot;

      const idx = ih * ringVerts + ir;
      positions[idx * 3] = wx;
      positions[idx * 3 + 1] = wy;
      positions[idx * 3 + 2] = wz;
      uvs[idx * 2] = v * 4.0;
      uvs[idx * 2 + 1] = t * 5.0;
    }
  }

  // Flat/gently-sloped tabular cap ring + center vertex (so the top has clean upward-facing normals for turf/rock!)
  const capRingStart = (hSegs + 1) * ringVerts;
  const topRingStart = hSegs * ringVerts;
  for (let ir = 0; ir <= rSegs; ir++) {
    const src = (topRingStart + ir) * 3;
    const dst = (capRingStart + ir) * 3;
    positions[dst] = positions[src];
    positions[dst + 1] = positions[src + 1];
    positions[dst + 2] = positions[src + 2];
    uvs[(capRingStart + ir) * 2] = uvs[(topRingStart + ir) * 2];
    uvs[(capRingStart + ir) * 2 + 1] = 5.2;
  }

  const capCenterIdx = capRingStart + capRingVerts;
  positions[capCenterIdx * 3] = spec.x;
  positions[capCenterIdx * 3 + 1] =
    spec.topY + (fbm2D(spec.seed, spec.seed * 0.5, 2) - 0.5) * 0.25;
  positions[capCenterIdx * 3 + 2] = spec.z;
  uvs[capCenterIdx * 2] = 0.5;
  uvs[capCenterIdx * 2 + 1] = 5.5;

  const indices: number[] = [];
  for (let ih = 0; ih < hSegs; ih++) {
    for (let ir = 0; ir < rSegs; ir++) {
      const a = ih * ringVerts + ir;
      const b = (ih + 1) * ringVerts + ir;
      const c = (ih + 1) * ringVerts + (ir + 1);
      const d = ih * ringVerts + (ir + 1);
      // Outward-facing wall winding (+X at theta=0, +Z at theta=PI/2)!
      indices.push(a, b, c, a, c, d);
    }
  }
  for (let ir = 0; ir < rSegs; ir++) {
    // Upward-facing (+Y) flat tabular cap winding!
    indices.push(capCenterIdx, capRingStart + ir + 1, capRingStart + ir);
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
  const maxRadius = 3600;
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

        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        float aerial = 1.0 - exp(-pow(uMistDensity * dist, 1.28));
        col = mix(col, hazeCol, clamp(aerial, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
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
  const distantTableIslands = [
    { cx: -480, cz: -280, rx: 145, rz: 95, topY: 44, tiltX: -0.11, rot: 0.4, seed: 11.4 },
    { cx: 520, cz: -310, rx: 165, rz: 105, topY: 48, tiltX: 0.12, rot: -0.5, seed: 23.8 },
    { cx: -320, cz: -560, rx: 135, rz: 90, topY: 42, tiltX: 0.09, rot: 0.2, seed: 37.2 },
    { cx: 490, cz: 340, rx: 155, rz: 98, topY: 40, tiltX: -0.10, rot: -0.3, seed: 46.5 },
    { cx: -860, cz: -420, rx: 240, rz: 145, topY: 68, tiltX: -0.12, rot: 0.35, seed: 51.9 },
    { cx: 880, cz: -460, rx: 255, rz: 155, topY: 64, tiltX: 0.11, rot: -0.42, seed: 67.3 },
    { cx: -740, cz: 580, rx: 220, rz: 135, topY: 56, tiltX: -0.09, rot: 0.55, seed: 76.4 },
    { cx: 140, cz: -1180, rx: 290, rz: 165, topY: 74, tiltX: 0.10, rot: 0.15, seed: 83.5 },
    { cx: -1150, cz: -880, rx: 310, rz: 180, topY: 82, tiltX: -0.11, rot: -0.28, seed: 94.1 },
    { cx: 1080, cz: 780, rx: 285, rz: 165, topY: 72, tiltX: 0.10, rot: 0.38, seed: 108.7 },
  ];

  const islandMeshes: THREE.BufferGeometry[] = [];
  const rRings = 24;
  const aSegs = 48;

  for (const isl of distantTableIslands) {
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

        // Classic Faroe trapezoidal flat-topped / gently-tilted table-island silhouette (like Photo 3 background!)
        const gentleRamp = THREE.MathUtils.clamp(lx * isl.tiltX, -isl.topY * 0.35, isl.topY * 0.38);
        const softSwell = (fbm2D(wx * 0.008 + isl.seed, wz * 0.008, 3) - 0.5) * 6.5;
        const plateauY = isl.topY + gentleRamp + softSwell;

        const cliffDrop = smoothstep(0.68, 1.04, rNorm);
        const subDrop = smoothstep(0.98, 1.38, rNorm);
        const seaY = SEA_LEVEL_Y - 2.0;
        const upperY = THREE.MathUtils.lerp(plateauY, seaY, Math.pow(cliffDrop, 0.80));
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
        float dist = length(vWorldPos - cameraPosition);
        vec3 viewRay = normalize(vWorldPos - cameraPosition);

        float strataBands = 0.88 + 0.18 * sin(vWorldPos.y * 0.65 + skyNoise2(vWorldPos.xz * 0.03) * 3.0);
        float slopeTurf = smoothstep(0.58, 0.86, N.y) * smoothstep(-4.0, 14.0, vWorldPos.y);
        vec3 rockBase = mix(vec3(0.058, 0.068, 0.084) * strataBands, vec3(0.072, 0.118, 0.058), slopeTurf * 0.80);

        float ndotl = clamp(dot(N, L), 0.0, 1.0);
        vec3 ambientSky = mix(uHorizonAntiColor, uZenithColor, 0.45) * 0.44;
        vec3 directSun = uSunColor * ndotl * 0.56;
        vec3 surfaceCol = rockBase * (ambientSky * 2.8 + directSun * 2.2);

        vec3 hazeCol = evalHorizonHazeColor(viewRay);
        float distHaze = 1.0 - exp(-pow(uMistDensity * 0.88 * dist, 1.22));
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
    normalMap: rockTex.normal,
    normalScale: new THREE.Vector2(1.55, 1.55),
    roughnessMap: rockTex.roughness,
    roughness: 0.88,
    metalness: 0.04,
    envMapIntensity: 0.96,
  });

  // 3D World-Space Triplanar Faroese Basalt Strata & Lush Plateau Turf Shader:
  // - Steep vertical cliffs (N.y small) display layered horizontal basalt strata, mineral weathering bands & vertical joints!
  // - Gentle plateau tops (N.y > 0.64) transition smoothly into velvety Nordic coastal grass turf!
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

        // Evaluates Faroese horizontal basalt lava-bedding & vertical block-jointing relief for steep cliff faces!
        float evalFaroeseCliffStrata(vec3 wp) {
          float bedDip = wp.x * 0.025 - wp.z * 0.020 + skyFbm(wp.xz * 0.05) * 1.4;
          float bedWave = sin((wp.y + bedDip) * 2.1);
          float fineBed = abs(fract((wp.y + bedDip) * 0.36) - 0.5) * 2.0;
          float ledge = smoothstep(0.08, 0.38, fineBed);
          float vertFlutes = skyFbm(vec2(wp.x * 0.42 + wp.z * 0.42, wp.y * 0.08));
          return ledge * 0.48 + (0.5 + 0.5 * bedWave) * 0.24 + vertFlutes * 0.28;
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#ifdef USE_MAP
          vec3 wN = normalize(vRockWorldNormal);
          vec3 triBlend = pow(abs(wN), vec3(4.0));
          triBlend /= max(triBlend.x + triBlend.y + triBlend.z, 1e-4);
          vec3 rpMacro = vRockWorldPos * 0.075;
          vec3 rpDetail = vRockWorldPos * 0.30;
          vec3 albMacro =
            texture2D(map, rpMacro.zy).rgb * triBlend.x +
            texture2D(map, rpMacro.xz).rgb * triBlend.y +
            texture2D(map, rpMacro.xy).rgb * triBlend.z;
          vec3 albDetail =
            texture2D(map, rpDetail.zy).rgb * triBlend.x +
            texture2D(map, rpDetail.xz).rgb * triBlend.y +
            texture2D(map, rpDetail.xy).rgb * triBlend.z;

          float cliffSteepMask = 1.0 - smoothstep(0.35, 0.72, abs(wN.y));
          float strataVal = evalFaroeseCliffStrata(vRockWorldPos);
          // Subtle pale mineral/lichen basalt band modulation on vertical cliffs (like Faroe Photo 1 & 3!)
          vec3 mineralTint = mix(vec3(0.76, 0.78, 0.82), vec3(1.18, 1.16, 1.14), strataVal);
          diffuseColor.rgb *= mix(albMacro, albDetail, 0.44) * mix(vec3(1.0), mineralTint, cliffSteepMask * 0.85);
        #endif`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec2 twinPadNorm = (vRockWorldPos.xz - vec2(-0.05, -1.05)) / vec2(4.35, 4.10);
        float dragonPadClear = smoothstep(0.76, 1.26, length(twinPadNorm));
        // Lush, velvety Faroese emerald-olive plateau grass across all gently sloping island & arch tops!
        float crownSlope = smoothstep(0.56, 0.82, vRockWorldNormal.y);
        float aboveSpray = smoothstep(-5.2, -0.2, vRockWorldPos.y);
        float turfPatchNoise = 0.74 + 0.26 * skyNoise2(vRockWorldPos.xz * 0.28);
        float turfMask = dragonPadClear * crownSlope * aboveSpray * turfPatchNoise;
        vec3 turfLush = mix(vec3(0.082, 0.156, 0.048), vec3(0.158, 0.192, 0.062), skyFbm(vRockWorldPos.xz * 0.09));
        diffuseColor.rgb = mix(diffuseColor.rgb, turfLush, clamp(turfMask * 0.92, 0.0, 0.94));

        // Dark wet intertidal basalt splash zone (-11.8m .. -7.5m) & submarine rock below
        float wetZone = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        float submergedDepth = 1.0 - smoothstep(-24.0, -11.6, vRockWorldPos.y);
        diffuseColor.rgb *= mix(1.0, 0.36, wetZone);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.024, 0.042, 0.054), submergedDepth * 0.74);`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        float wetRough = 1.0 - smoothstep(-11.2, -7.5, vRockWorldPos.y);
        roughnessFactor = mix(roughnessFactor, 0.16, wetRough * 0.86);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        // Apply crisp triplanar basalt strata & jointing bump ONLY on steep rock walls (keeps grassy tops velvety smooth!)
        {
          vec3 wN2 = normalize(vRockWorldNormal);
          float wallOnly = 1.0 - smoothstep(0.42, 0.72, abs(wN2.y));
          if (wallOnly > 0.01) {
            vec3 triW = pow(abs(wN2), vec3(4.0));
            triW /= max(triW.x + triW.y + triW.z, 1e-4);
            vec3 rpN = vRockWorldPos * 0.30;
            float texH =
              texture2D(roughnessMap, rpN.zy).g * triW.x +
              texture2D(roughnessMap, rpN.xz).g * triW.y +
              texture2D(roughnessMap, rpN.xy).g * triW.z;
            float rockBumpH = (evalFaroeseCliffStrata(vRockWorldPos) * 0.62 + (1.0 - texH) * 0.38) * 0.12 * wallOnly;
            vec3 dPdxR = dFdx( -vViewPosition );
            vec3 dPdyR = dFdy( -vViewPosition );
            vec3 r1R = cross( dPdyR, normal );
            vec3 r2R = cross( normal, dPdxR );
            float detR = dot( dPdxR, r1R );
            float signDetR = detR < 0.0 ? -1.0 : 1.0;
            vec3 surfGradR = signDetR * ( dFdx( rockBumpH ) * r1R + dFdy( rockBumpH ) * r2R );
            normal = normalize( abs( detR ) * normal - surfGradR + vec3( 0.0, 0.0, 1e-6 ) );
          }
        }`
      )
      .replace(
        '#include <fog_fragment>',
        `float rDist = length(vRockWorldPos - cameraPosition);
        vec3 rViewRay = normalize(vRockWorldPos - cameraPosition);
        vec3 rHazeCol = evalHorizonHazeColor(rViewRay);
        float rAerial = 1.0 - exp(-pow(uMistDensity * 0.85 * rDist, 1.26));
        gl_FragColor.rgb = mix(gl_FragColor.rgb, rHazeCol, clamp(rAerial, 0.0, 1.0));`
      );
  };

  // ============================================================================
  // 0. CONTINUOUS 7,200m SUBMARINE BATHYMETRIC SEAFLOOR (-25.5m)
  // ============================================================================
  group.add(buildSubmarineBathymetryMesh(atmosphereUniforms));

  // ============================================================================
  // 1. EXPANDED TWIN-DRAGON HERO PROMONTORY (Smooth Meadow Top, Buttressed Vertical Cliffs!)
  // ============================================================================
  const mainGrid = 264;
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
      uniform float uTime;
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

        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        float aerial = 1.0 - exp(-pow(uMistDensity * 0.85 * dist, 1.26));
        col = mix(col, hazeCol, clamp(aerial, 0.0, 0.95));

        float alpha = pow(sideFeather, 0.65) * (0.36 + 0.54 * threads + crestFoam + plungeBoil);
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.92));
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
      uniform float uTime;
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
        float dist = length(vWorldPos - cameraPosition);
        vec3 hazeCol = evalHorizonHazeColor(normalize(vWorldPos - cameraPosition));
        foamCol = mix(foamCol, hazeCol, clamp(1.0 - exp(-pow(uMistDensity * 0.85 * dist, 1.26)), 0.0, 0.95));
        gl_FragColor = vec4(foamCol, alpha);
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
      if (by < 0.25 || by > 24.0) continue;

      const hX1 = fz.evalH(bx + 0.6, bz);
      const hX0 = fz.evalH(bx - 0.6, bz);
      const hZ1 = fz.evalH(bx, bz + 0.6);
      const hZ0 = fz.evalH(bx, bz - 0.6);
      const dHx = (hX1 - hX0) / 1.2;
      const dHz = (hZ1 - hZ0) / 1.2;
      const slope = Math.hypot(dHx, dHz);
      if (slope > 0.24 || Math.min(hX1, hX0, hZ1, hZ0) < 0.0) continue;

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
          `float fDist = length(vFloraWorldPos - cameraPosition);
          vec3 fHaze = evalHorizonHazeColor(normalize(vFloraWorldPos - cameraPosition));
          float fAerial = 1.0 - exp(-pow(uMistDensity * 0.85 * fDist, 1.26));
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fHaze, clamp(fAerial, 0.0, 1.0));`
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
      if (gy < -0.5 || slope > 0.62) continue;

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
      if (gy < -0.2 || slope > 0.52) continue;

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
