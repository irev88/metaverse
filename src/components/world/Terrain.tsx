"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ISLANDS, MINI_ISLANDS, type IslandDef, type V3 } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm } from "@/lib/noise";
import { Waterfall } from "./Particles";

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

/* ============ circular displaced meadow ============ */

function makeDiscGeometry(isl: IslandDef): THREE.BufferGeometry {
  const rings = 52;
  const segs = 120;
  const positions: number[] = [];
  const colors: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const cLush = new THREE.Color("#28684c");
  const cLight = new THREE.Color("#47996a");
  const cDry = new THREE.Color("#6da265");
  const cRock = new THREE.Color("#5f5c7a");
  const c = new THREE.Color();
  const smooth = (a: number, b: number, x: number) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };

  // center vertex
  const hCenter = terrainHeight(isl.c[0], isl.c[1]);
  positions.push(0, hCenter === -Infinity ? 0 : hCenter, 0);
  colors.push(cLush.r, cLush.g, cLush.b);
  uvs.push(0.5, 0.5);

  for (let ri = 1; ri <= rings; ri++) {
    const rr = (ri / rings) * isl.r;
    for (let si = 0; si < segs; si++) {
      const a = (si / segs) * Math.PI * 2;
      const x = Math.cos(a) * rr;
      const z = Math.sin(a) * rr;
      const wx = x + isl.c[0];
      const wz = z + isl.c[1];
      let y = terrainHeight(wx, wz);
      if (y === -Infinity) y = -0.6;
      if (ri === rings) y -= 0.3; // tuck the rim under the dirt skirt
      positions.push(x, y, z);
      uvs.push(x / (isl.r * 2) + 0.5, z / (isl.r * 2) + 0.5);

      const n = fbm(wx * 0.45, wz * 0.45, 3);
      const rim = smooth(isl.r * 0.82, isl.r * 0.99, rr);
      c.copy(cLush).lerp(cLight, Math.min(1, Math.max(0, (y - 0.12) * 0.85)));
      c.lerp(cDry, n * 0.32);
      c.lerp(cRock, rim);
      colors.push(c.r, c.g, c.b);
    }
  }

  // center fan
  for (let si = 0; si < segs; si++) {
    indices.push(0, 1 + ((si + 1) % segs), 1 + si);
  }
  // ring quads
  for (let ri = 1; ri < rings; ri++) {
    const a0 = 1 + (ri - 1) * segs;
    const b0 = 1 + ri * segs;
    for (let si = 0; si < segs; si++) {
      const s1 = (si + 1) % segs;
      indices.push(a0 + si, b0 + s1, b0 + si);
      indices.push(a0 + si, a0 + s1, b0 + s1);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  // ensure normals face up
  if (geo.attributes.normal.getY(0) < 0) {
    for (let i = 0; i < indices.length; i += 3) {
      const t = indices[i + 1];
      indices[i + 1] = indices[i + 2];
      indices[i + 2] = t;
    }
    geo.setIndex(indices);
    geo.computeVertexNormals();
  }
  geo.computeBoundingSphere();
  return geo;
}

function Meadow({ isl, index }: { isl: IslandDef; index: number }) {
  const geometry = useMemo(() => makeDiscGeometry(isl), [isl]);

  const rimRocks = useMemo(() => {
    const rng = mulberry32(7 + index * 31);
    const n = Math.round(isl.r * 0.8);
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2 + rng() * 0.4;
      const r = isl.r - 0.6 - rng() * 0.9;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -0.35 + rng() * 0.5, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.5 + rng() * 1.0,
        rot: rng() * Math.PI,
      };
    });
  }, [isl, index]);

  const chunks = useMemo(() => {
    const rng = mulberry32(40 + index);
    return Array.from({ length: 4 }, () => {
      const a = rng() * Math.PI * 2;
      const r = isl.r + 2.5 + rng() * 6;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -3.6 - rng() * 3.8, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.35 + rng() * 0.9,
        speed: 0.05 + rng() * 0.06,
        phase: rng() * Math.PI * 2,
      };
    });
  }, [isl, index]);
  const chunkRefs = useRef<(THREE.Mesh | null)[]>([]);

  return (
    <group>
      <mesh geometry={geometry} position={[isl.c[0], 0, isl.c[1]]} receiveShadow>
        <meshStandardMaterial vertexColors roughness={1} metalness={0} />
      </mesh>
      {/* dirt skirt under the meadow */}
      <mesh position={[isl.c[0], -1.9, isl.c[1]]}>
        <cylinderGeometry args={[isl.r * 0.99, isl.r * 0.86, 3.8, 40, 1, true]} />
        <meshStandardMaterial color="#5a4a3a" flatShading roughness={1} side={THREE.DoubleSide} />
      </mesh>
      {/* rocky underside */}
      <mesh position={[isl.c[0], -9.4, isl.c[1]]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[isl.r * 0.86, 12.5, 28, 3]} />
        <meshStandardMaterial color="#4b4266" flatShading roughness={1} />
      </mesh>
      {rimRocks.map((rock, i) => (
        <mesh key={i} position={rock.pos} rotation={[0.3, rock.rot, 0.2]} scale={rock.scale} castShadow>
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#564d73" flatShading roughness={0.95} />
        </mesh>
      ))}
      {chunks.map((c, i) => (
        <mesh
          key={i}
          ref={(el) => {
            chunkRefs.current[i] = el;
          }}
          position={c.pos}
          scale={c.scale}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#4e4670" flatShading roughness={0.95} />
        </mesh>
      ))}
      <ChunkDrift refs={chunkRefs} specs={chunks} />
    </group>
  );
}

function ChunkDrift({
  refs,
  specs,
}: {
  refs: React.MutableRefObject<(THREE.Mesh | null)[]>;
  specs: { pos: V3; speed: number; phase: number }[];
}) {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    specs.forEach((s, i) => {
      const m = refs.current[i];
      if (!m) return;
      m.position.y = s.pos[1] + Math.sin(t * s.speed + s.phase) * 0.9;
      m.rotation.y = t * 0.05 + s.phase;
    });
  });
  return null;
}

/* ============ drifting mini islets ============ */

function MiniIsland({ spec, index }: { spec: (typeof MINI_ISLANDS)[number]; index: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.position.y = spec.y + Math.sin(t * 0.16 + index * 2.2) * 1.1;
    g.rotation.y = t * 0.02 + index;
  });
  return (
    <group ref={group} position={[spec.c[0], spec.y, spec.c[1]]}>
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[spec.r, spec.r * 0.8, 0.9, 12]} />
        <meshStandardMaterial color="#2f7a5e" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, -1.1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[spec.r * 0.8, 2.2, 12]} />
        <meshStandardMaterial color="#4b4266" flatShading roughness={1} />
      </mesh>
      {spec.tree && (
        <group position={[0, 0.45, 0]} scale={0.55}>
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.12, 0.2, 1.2, 6]} />
            <meshStandardMaterial color="#6b4b3a" flatShading />
          </mesh>
          <mesh position={[0, 1.6, 0]}>
            <coneGeometry args={[0.9, 1.4, 7]} />
            <meshStandardMaterial color="#1f6f52" flatShading />
          </mesh>
        </group>
      )}
      {spec.waterfall && <Waterfall offset={[spec.r * 0.55, -0.4]} />}
    </group>
  );
}

export function Terrain() {
  return (
    <group>
      {ISLANDS.map((isl, i) => (
        <Meadow key={isl.id} isl={isl} index={i} />
      ))}
      {MINI_ISLANDS.map((s, i) => (
        <MiniIsland key={i} spec={s} index={i} />
      ))}
    </group>
  );
}
