// Walkable-terrain queries for the archipelago: islands + bridges.
import { BRIDGES, ISLANDS } from "./layout";

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

export function groundHeight(x: number, z: number): number {
  for (const i of ISLANDS) {
    if (Math.hypot(x - i.c[0], z - i.c[1]) <= i.r) return 0;
  }
  for (const b of BRIDGES) {
    if (distToSegment(x, z, b.a[0], b.a[1], b.b[0], b.b[1]) <= b.w / 2 + 0.12) return 0;
  }
  return -Infinity;
}
