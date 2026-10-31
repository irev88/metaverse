// Walkable-terrain queries for the archipelago.
// Rolling noise hills inside each island, flattened basins where structures sit.
import { BRIDGES, FLATTEN, ISLANDS } from "./layout";
import { fbm } from "./noise";

function distToSegment(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax;
  const dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + dx * t;
  const cz = az + dz * t;
  return Math.hypot(px - cx, pz - cz);
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function terrainHeight(x: number, z: number): number {
  let h = -Infinity;
  for (const isl of ISLANDS) {
    const dx = x - isl.c[0];
    const dz = z - isl.c[1];
    const d = Math.hypot(dx, dz);
    if (d < isl.r) {
      // rolling meadow: gentle hills, calm at the rim
      const edge = smoothstep(1.0, 0.55, d / isl.r);
      const n = fbm(x * 0.09 + 11.3, z * 0.09 + 7.7, 4);
      const n2 = fbm(x * 0.24 + 3.1, z * 0.24 + 9.2, 3);
      const local = 0.1 + 1.45 * Math.pow(n, 1.35) * edge + 0.35 * (n2 - 0.5) * edge;
      h = Math.max(h, local);
    }
  }
  if (h === -Infinity) return -Infinity;

  // flatten basins around structures so they sit true
  let mask = 0;
  for (const f of FLATTEN) {
    const d2 = (x - f.x) * (x - f.x) + (z - f.z) * (z - f.z);
    const s2 = f.s * f.s;
    if (d2 < s2 * 9) {
      mask += Math.exp(-d2 / (2 * s2));
    }
  }
  if (mask > 0.001) {
    const m = Math.min(1, mask);
    h = h * (1 - 0.96 * m) + 0.03 * 0.96 * m;
  }
  return h;
}

/** Walkable height (island terrain + bridge decks). */
export function groundHeight(x: number, z: number): number {
  const h = terrainHeight(x, z);
  if (h !== -Infinity) return h;
  for (const b of BRIDGES) {
    if (distToSegment(x, z, b.a[0], b.a[1], b.b[0], b.b[1]) <= b.w / 2 + 0.12) return 0;
  }
  return -Infinity;
}
