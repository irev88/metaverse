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

/* ============ displaced, vertex-colored meadow ============ */

function Meadow({ isl, index }: { isl: IslandDef; index: number }) {
  const geometry = useMemo(() => {
    const seg = 84;
    const size = isl.r * 2.06;
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const cLush = new THREE.Color("#2e7a58");
    const cLight = new THREE.Color("#4da273");
    const cDry = new THREE.Color("#7fae6a");
    const cRock = new THREE.Color("#6c6685");
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + isl.c[0];
      const z = pos.getZ(i) + isl.c[1];
      const h = terrainHeight(x, z);
      const y = h === -Infinity ? -0.6 : h;
      pos.setY(i, y);
      // color: lush in dips, lighter on hills, rocky at the rim
      const localX = pos.getX(i);
      const localZ = pos.getZ(i);
      const d = Math.hypot(localX, localZ) / isl.r;
      const n = fbm(x * 0.5, z * 0.5, 3);
      c.copy(cLush).lerp(cLight, Math.min(1, Math.max(0, (y - 0.15) * 0.9)));
      c.lerp(cDry, n * 0.3);
      c.lerp(cRock, THREE.MathUtils.smoothstep(d, 0.88, 1.0));
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, [isl]);

  const rimRocks = useMemo(() => {
    const rng = mulberry32(7 + index * 31);
    const n = 16;
    return Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2 + rng() * 0.4;
      const r = isl.r - 0.6 - rng() * 0.8;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -0.35 + rng() * 0.5, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.5 + rng() * 1.0,
        rot: rng() * Math.PI,
      };
    });
  }, [isl, index]);

  const chunks = useMemo(() => {
    const rng = mulberry32(40 + index);
    return Array.from({ length: 3 }, () => {
      const a = rng() * Math.PI * 2;
      const r = isl.r + 2 + rng() * 5;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -3.4 - rng() * 3.6, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.35 + rng() * 0.8,
        speed: 0.05 + rng() * 0.06,
        phase: rng() * Math.PI * 2,
      };
    });
  }, [isl, index]);
  const chunkRefs = useRef<(THREE.Mesh | null)[]>([]);

  return (
    <group>
      <mesh geometry={geometry} position={[isl.c[0], 0, isl.c[1]]} receiveShadow />
      {/* dirt skirt under the meadow */}
      <mesh position={[isl.c[0], -1.7, isl.c[1]]}>
        <cylinderGeometry args={[isl.r * 0.985, isl.r * 0.86, 3.4, 28, 1, true]} />
        <meshStandardMaterial color="#5a4a3a" flatShading roughness={1} side={THREE.DoubleSide} />
      </mesh>
      {/* rocky underside */}
      <mesh position={[isl.c[0], -8.6, isl.c[1]]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[isl.r * 0.86, 11.5, 24, 3]} />
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
