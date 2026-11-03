// Deterministic scatter data shared by rocks, grass, ferns and puddles
// so every layer agrees on where stones and soil features are.
import { ARCH, BENCH, CAMPFIRE, COTTAGE, ISLANDS, MAILBOX, OBSERVATORY, ORRERY, POND, PICNIC, PORTALS, SWING, TELESCOPE, WELL, WISH_TREE } from "./layout";
import { terrainHeight } from "./terrain";
import { fbm } from "./noise";

export interface ScatterPoint {
  x: number;
  z: number;
  y: number;
  s: number;
  rot: number;
  v: number; // variant
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Soil masks in [0,1] — shared by terrain vertex colors and grass placement. */
export function soilNoise(x: number, z: number): { bare: number; litter: number; clover: number } {
  return {
    bare: fbm(x * 0.3 + 90, z * 0.3 + 30, 3),
    litter: fbm(x * 0.35 + 40, z * 0.35 + 77, 3),
    clover: fbm(x * 0.4 + 140, z * 0.4 + 11, 3),
  };
}

const AVOID: { x: number; z: number; r: number }[] = [
  { x: CAMPFIRE[0], z: CAMPFIRE[2], r: 2.6 },
  { x: COTTAGE[0], z: COTTAGE[2], r: 3.4 },
  { x: WISH_TREE[0], z: WISH_TREE[2], r: 3.6 },
  { x: TELESCOPE[0], z: TELESCOPE[2], r: 1.8 },
  { x: BENCH[0], z: BENCH[2], r: 1.6 },
  { x: WELL[0], z: WELL[2], r: 2.2 },
  { x: MAILBOX[0], z: MAILBOX[2], r: 1.2 },
  { x: PICNIC[0], z: PICNIC[2], r: 2.4 },
  { x: SWING[0], z: SWING[2], r: 2.0 },
  { x: ARCH[0], z: ARCH[2], r: 2.0 },
  { x: OBSERVATORY[0], z: OBSERVATORY[2], r: 4.6 },
  { x: ORRERY[0], z: ORRERY[2], r: 2.2 },
  { x: POND.c[0], z: POND.c[1], r: 4.2 },
  ...PORTALS.map((p) => ({ x: p.pos[0], z: p.pos[2], r: 1.8 })),
];

export function avoidsPOI(x: number, z: number, pad = 0): boolean {
  for (const a of AVOID) {
    if (Math.hypot(x - a.x, z - a.z) < a.r + pad) return true;
  }
  return false;
}

function randomLandPoint(rnd: () => number, shrink = 2.2): { x: number; z: number; y: number } | null {
  const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
  const a = rnd() * Math.PI * 2;
  const r = Math.sqrt(rnd()) * (isl.r - shrink);
  const x = isl.c[0] + Math.cos(a) * r;
  const z = isl.c[1] + Math.sin(a) * r;
  const y = terrainHeight(x, z);
  if (y === -Infinity) return null;
  return { x, z, y };
}

interface ScatterData {
  boulders: ScatterPoint[];
  riverStones: ScatterPoint[];
  pebbles: ScatterPoint[];
  twigs: ScatterPoint[];
  cloverZones: { x: number; z: number; r: number }[];
  puddles: { x: number; z: number; y: number; r: number }[];
}

let cache: ScatterData | null = null;

export function scatterData(): ScatterData {
  if (cache) return cache;
  const rnd = mulberry32(4242);
  const data: ScatterData = { boulders: [], riverStones: [], pebbles: [], twigs: [], cloverZones: [], puddles: [] };

  let guard = 0;
  // mossy boulders — prefer clumpy noise spots
  while (data.boulders.length < 26 && guard < 3000) {
    guard++;
    const p = randomLandPoint(rnd, 3);
    if (!p || avoidsPOI(p.x, p.z, 0.6)) continue;
    const clump = fbm(p.x * 0.22 + 5, p.z * 0.22 + 9, 3);
    if (rnd() > 0.25 + clump * 0.75) continue;
    data.boulders.push({ x: p.x, z: p.z, y: p.y, s: 0.55 + rnd() * 1.5, rot: rnd() * Math.PI * 2, v: Math.floor(rnd() * 3) });
  }
  guard = 0;
  // smooth river stones
  while (data.riverStones.length < 30 && guard < 3000) {
    guard++;
    const p = randomLandPoint(rnd, 2.6);
    if (!p || avoidsPOI(p.x, p.z, 0.3)) continue;
    data.riverStones.push({ x: p.x, z: p.z, y: p.y, s: 0.22 + rnd() * 0.5, rot: rnd() * Math.PI * 2, v: Math.floor(rnd() * 2) });
  }
  guard = 0;
  // pebbles in clusters
  while (data.pebbles.length < 132 && guard < 4000) {
    guard++;
    const p = randomLandPoint(rnd, 2.2);
    if (!p || avoidsPOI(p.x, p.z, 0.1)) continue;
    data.pebbles.push({ x: p.x + (rnd() - 0.5) * 0.9, z: p.z + (rnd() - 0.5) * 0.9, y: p.y, s: 0.06 + rnd() * 0.12, rot: rnd() * Math.PI * 2, v: Math.floor(rnd() * 2) });
  }
  guard = 0;
  // fallen twigs near boulders & trees
  while (data.twigs.length < 26 && guard < 2000) {
    guard++;
    const p = randomLandPoint(rnd, 2.2);
    if (!p || avoidsPOI(p.x, p.z, 0.2)) continue;
    data.twigs.push({ x: p.x, z: p.z, y: p.y, s: 0.32 + rnd() * 0.3, rot: rnd() * Math.PI * 2, v: 0 });
  }
  guard = 0;
  // clover patches
  while (data.cloverZones.length < 14 && guard < 2000) {
    guard++;
    const p = randomLandPoint(rnd, 2.5);
    if (!p || avoidsPOI(p.x, p.z, 0.4)) continue;
    data.cloverZones.push({ x: p.x, z: p.z, r: 1.2 + rnd() * 1.8 });
  }
  guard = 0;
  // reflective puddles in dips
  while (data.puddles.length < 12 && guard < 2500) {
    guard++;
    const p = randomLandPoint(rnd, 3);
    if (!p || avoidsPOI(p.x, p.z, 0.8)) continue;
    if (p.y > 0.55) continue; // keep them in low spots
    const soil = soilNoise(p.x, p.z);
    if (soil.bare < 0.55) continue;
    data.puddles.push({ x: p.x, z: p.z, y: p.y, r: 0.35 + rnd() * 0.5 });
  }

  cache = data;
  return data;
}
