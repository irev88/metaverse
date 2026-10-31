"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BRIDGES, COTTAGE, ISLANDS, LANTERNS, MINI_ISLANDS, PIER_DIR, PIER_LENGTH, PIER_START, type IslandDef, type V3 } from "@/lib/layout";
import { useStore } from "@/lib/store";
import { Smoke, Waterfall } from "./Particles";

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

/* ================= terrain ================= */

function IslandBody({ isl, index }: { isl: IslandDef; index: number }) {
  const rimRocks = useMemo(() => {
    const rng = mulberry32(7 + index * 31);
    return Array.from({ length: 10 }, (_, i) => {
      const a = (i / 10) * Math.PI * 2 + rng() * 0.5;
      const r = isl.r - 0.8 - rng() * 0.7;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -0.2 + rng() * 0.5, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.45 + rng() * 0.8,
        rot: rng() * Math.PI,
      };
    });
  }, [isl, index]);

  const chunks = useMemo(() => {
    const rng = mulberry32(40 + index);
    return Array.from({ length: 3 }, () => {
      const a = rng() * Math.PI * 2;
      const r = isl.r + 1.5 + rng() * 4;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, -3.2 - rng() * 3.4, isl.c[1] + Math.sin(a) * r] as V3,
        scale: 0.35 + rng() * 0.7,
        speed: 0.05 + rng() * 0.06,
        phase: rng() * Math.PI * 2,
      };
    });
  }, [isl, index]);

  const chunkRefs = useRef<(THREE.Mesh | null)[]>([]);
  const segments = 14 + index * 2;

  return (
    <group>
      {/* grass top */}
      <mesh position={[isl.c[0], -1.2, isl.c[1]]} receiveShadow>
        <cylinderGeometry args={[isl.r, isl.r * 0.885, 2.4, segments, 1]} />
        <meshStandardMaterial color={isl.grass} flatShading roughness={1} />
      </mesh>
      {/* dirt lip */}
      <mesh position={[isl.c[0], -2.4, isl.c[1]]}>
        <cylinderGeometry args={[isl.r * 0.885, isl.r * 0.8, 1.4, segments, 1]} />
        <meshStandardMaterial color="#5a4a3a" flatShading roughness={1} />
      </mesh>
      {/* rocky underside */}
      <mesh position={[isl.c[0], -7.6, isl.c[1]]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[isl.r * 0.8, 9.6, segments, 3]} />
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

/* ================= scatter detail (grass, flowers, pebbles, mushrooms) ================= */

function Scatter({ quality }: { quality: "rich" | "lite" }) {
  const tuftData = useMemo(() => {
    const rng = mulberry32(311);
    const n = quality === "rich" ? 260 : 120;
    return Array.from({ length: n }, () => {
      const isl = ISLANDS[Math.floor(rng() * ISLANDS.length)];
      const a = rng() * Math.PI * 2;
      const r = Math.sqrt(rng()) * (isl.r - 1.2);
      const s = 0.6 + rng() * 0.9;
      return {
        pos: [isl.c[0] + Math.cos(a) * r, 0.12, isl.c[1] + Math.sin(a) * r] as V3,
        rot: rng() * Math.PI,
        s,
        tint: 0.82 + rng() * 0.36,
      };
    });
  }, [quality]);

  const flowerData = useMemo(() => {
    const rng = mulberry32(707);
    const n = quality === "rich" ? 150 : 80;
    const cols = ["#ff8fb3", "#ffd27a", "#b9a5ff", "#fff3f5", "#7ee8d8"].map((c) => new THREE.Color(c));
    return Array.from({ length: n }, () => {
      const f = FLOWER_FIELD_PICK[Math.floor(rng() * FLOWER_FIELD_PICK.length)];
      const a = rng() * Math.PI * 2;
      const r = Math.sqrt(rng()) * f.r;
      const s = 0.7 + rng() * 0.8;
      return {
        pos: [f.c[0] + Math.cos(a) * r, 0.14, f.c[1] + Math.sin(a) * r] as V3,
        s,
        color: cols[Math.floor(rng() * cols.length)],
      };
    });
  }, [quality]);

  const tuftRef = useRef<THREE.InstancedMesh>(null);
  const flowerRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useLayoutEffect(() => {
    const m = tuftRef.current;
    if (!m) return;
    tuftData.forEach((d, i) => {
      dummy.position.set(d.pos[0], d.pos[1], d.pos[2]);
      dummy.rotation.set(0, d.rot, 0);
      dummy.scale.setScalar(d.s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  }, [tuftData, dummy]);

  useLayoutEffect(() => {
    const m = flowerRef.current;
    if (!m) return;
    flowerData.forEach((d, i) => {
      dummy.position.set(d.pos[0], d.pos[1], d.pos[2]);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar(d.s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
      m.setColorAt(i, d.color);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [flowerData, dummy]);

  return (
    <group>
      <instancedMesh
        key={`t-${quality}`}
        ref={tuftRef}
        args={[undefined as unknown as THREE.BufferGeometry, undefined as unknown as THREE.Material, tuftData.length]}
      >
        <coneGeometry args={[0.055, 0.4, 5]} />
        <meshStandardMaterial color="#3f9a6e" flatShading roughness={1} />
      </instancedMesh>
      <instancedMesh
        key={`f-${quality}`}
        ref={flowerRef}
        args={[undefined as unknown as THREE.BufferGeometry, undefined as unknown as THREE.Material, flowerData.length]}
      >
        <icosahedronGeometry args={[0.085, 0]} />
        <meshStandardMaterial roughness={0.7} flatShading />
      </instancedMesh>
    </group>
  );
}

// imported lazily to avoid a circular import with layout — mirror of FLOWER_FIELDS
const FLOWER_FIELD_PICK: { c: [number, number]; r: number }[] = [
  { c: [26.5, -1.0], r: 3.4 },
  { c: [30.5, -1.5], r: 2.6 },
  { c: [24.0, -3.5], r: 2.4 },
  { c: [31.0, -7.5], r: 2.2 },
  { c: [2.5, 4.5], r: 1.8 },
  { c: [-3.0, 3.0], r: 1.5 },
];

function Pebbles() {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() => {
    const rng = mulberry32(881);
    return Array.from({ length: 64 }, () => {
      const isl = ISLANDS[Math.floor(rng() * ISLANDS.length)];
      const a = rng() * Math.PI * 2;
      const r = Math.sqrt(rng()) * (isl.r - 1.5);
      return {
        pos: [isl.c[0] + Math.cos(a) * r, 0.05, isl.c[1] + Math.sin(a) * r] as V3,
        rot: rng() * Math.PI,
        s: 0.12 + rng() * 0.3,
      };
    });
  }, []);
  useLayoutEffect(() => {
    const m = ref.current;
    if (!m) return;
    data.forEach((d, i) => {
      dummy.position.set(d.pos[0], d.pos[1], d.pos[2]);
      dummy.rotation.set(0.3, d.rot, 0.2);
      dummy.scale.setScalar(d.s);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  }, [data, dummy]);
  return (
    <instancedMesh ref={ref} args={[undefined as unknown as THREE.BufferGeometry, undefined as unknown as THREE.Material, data.length]} castShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#5e5680" flatShading roughness={1} />
    </instancedMesh>
  );
}

function GlowMushrooms() {
  const spots = useMemo(() => {
    const rng = mulberry32(1237);
    const out: { pos: V3; c: string; s: number }[] = [];
    const zones: [number, number][] = [
      [-11.5, 4.5],
      [-9.8, -5.2],
      [12.2, -3.8],
      [-27.5, 9.5],
      [-20.8, 4.2],
      [24.0, 1.5],
      [32.5, -4.0],
      [1.0, -10.0],
    ];
    zones.forEach(([x, z]) => {
      out.push({
        pos: [x + (rng() - 0.5), 0, z + (rng() - 0.5)],
        c: rng() < 0.5 ? "#7ee8d8" : "#ff9ec7",
        s: 0.7 + rng() * 0.7,
      });
    });
    return out;
  }, []);
  const caps = useRef<(THREE.Mesh | null)[]>([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    caps.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.6 + Math.sin(t * 1.4 + i * 2.1) * 0.7;
    });
  });
  return (
    <group>
      {spots.map((s, i) => (
        <group key={i} position={s.pos} scale={s.s}>
          <mesh position={[0, 0.16, 0]}>
            <cylinderGeometry args={[0.05, 0.08, 0.32, 6]} />
            <meshStandardMaterial color="#e8e2f2" roughness={0.9} />
          </mesh>
          <mesh
            ref={(el) => {
              caps.current[i] = el;
            }}
            position={[0, 0.34, 0]}
            scale={[1, 0.62, 1]}
          >
            <sphereGeometry args={[0.17, 10, 10]} />
            <meshStandardMaterial color={s.c} emissive={s.c} emissiveIntensity={1.8} roughness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ================= trees ================= */

function Tree({ pos, scale = 1, blossom = false }: { pos: V3; scale?: number; blossom?: boolean }) {
  return (
    <group position={pos} scale={scale}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.26, 1.2, 6]} />
        <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 1.7, 0]} castShadow>
        <coneGeometry args={[1.05, 1.5, 7]} />
        <meshStandardMaterial color={blossom ? "#5a3b52" : "#1f6f52"} flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 2.5, 0]} castShadow>
        <coneGeometry args={[0.75, 1.1, 7]} />
        <meshStandardMaterial color={blossom ? "#e58fb4" : "#27855f"} emissive={blossom ? "#c96f9d" : "#000000"} emissiveIntensity={blossom ? 0.25 : 0} flatShading roughness={1} />
      </mesh>
      {blossom && (
        <mesh position={[0, 3.1, 0]} castShadow>
          <coneGeometry args={[0.45, 0.7, 7]} />
          <meshStandardMaterial color="#f3b1cd" emissive="#d98caf" emissiveIntensity={0.3} flatShading roughness={1} />
        </mesh>
      )}
    </group>
  );
}

/* ================= bridges ================= */

function Bridge({ index }: { index: number }) {
  const b = BRIDGES[index];
  const dx = b.b[0] - b.a[0];
  const dz = b.b[1] - b.a[1];
  const len = Math.hypot(dx, dz);
  const yaw = Math.atan2(dx, dz);
  const ux = dx / len;
  const uz = dz / len;
  const px = -uz;
  const pz = ux;
  const mid: [number, number] = [(b.a[0] + b.b[0]) / 2, (b.a[1] + b.b[1]) / 2];
  const nPlanks = Math.max(4, Math.round(len / 0.8));
  const planks = useMemo(() => Array.from({ length: nPlanks }, (_, i) => i), [nPlanks]);
  const nPosts = Math.max(2, Math.round(len / 1.7));
  const posts = useMemo(() => Array.from({ length: nPosts }, (_, i) => i), [nPosts]);

  return (
    <group>
      {planks.map((i) => {
        const t = 0.3 + i * 0.82;
        const cx = b.a[0] + ux * t;
        const cz = b.a[1] + uz * t;
        return (
          <mesh key={i} position={[cx, -0.05, cz]} rotation={[0, yaw + (((i * 41) % 10) - 5) * 0.008, 0]} castShadow receiveShadow>
            <boxGeometry args={[b.w, 0.1, 0.62]} />
            <meshStandardMaterial color="#6e4f39" flatShading roughness={1} />
          </mesh>
        );
      })}
      {posts.map((i) => {
        const t = 0.5 + i * 1.7;
        if (t > len - 0.2) return null;
        return [1, -1].map((side) => {
          const cx = b.a[0] + ux * t + px * side * (b.w / 2);
          const cz = b.a[1] + uz * t + pz * side * (b.w / 2);
          return (
            <mesh key={`${i}-${side}`} position={[cx, 0.45, cz]} castShadow>
              <boxGeometry args={[0.07, 1.0, 0.07]} />
              <meshStandardMaterial color="#4a3a2c" flatShading roughness={1} />
            </mesh>
          );
        });
      })}
      {[1, -1].map((side) => (
        <mesh
          key={`rail-${side}`}
          position={[mid[0] + px * side * (b.w / 2), 0.92, mid[1] + pz * side * (b.w / 2)]}
          rotation={[0, yaw, 0]}
          castShadow
        >
          <boxGeometry args={[0.06, 0.07, len]} />
          <meshStandardMaterial color="#5d4534" flatShading roughness={1} />
        </mesh>
      ))}
      {/* end lanterns */}
      {[b.a, b.b].map(([x, z], i) => (
        <group key={i} position={[x + px * (b.w / 2 + 0.25), 0, z + pz * (b.w / 2 + 0.25)]}>
          <mesh position={[0, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.08, 1.4, 6]} />
            <meshStandardMaterial color="#3a3350" flatShading />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[0.13, 10, 10]} />
            <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ================= string lights (cottage -> wish tree) ================= */

function StringLights() {
  const bulbs = useRef<(THREE.Mesh | null)[]>([]);
  const A = useMemo(() => new THREE.Vector3(-4.4, 3.1, -2.2), []);
  const B = useMemo(() => new THREE.Vector3(6.4, 3.4, -3.4), []);
  const specs = useMemo(() => {
    const cols = ["#ffd27a", "#ff9ec7", "#a5f3e8"];
    return Array.from({ length: 12 }, (_, i) => {
      const k = (i + 1) / 13;
      const p = new THREE.Vector3().lerpVectors(A, B, k);
      p.y -= Math.sin(k * Math.PI) * 1.15;
      return { pos: p as unknown as V3, color: cols[i % 3], phase: i * 1.7 };
    });
  }, [A, B]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    bulbs.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 2.2 + Math.sin(t * 2.2 + specs[i].phase) * 0.9;
    });
  });
  return (
    <group>
      {specs.map((s, i) => (
        <group key={i} position={s.pos}>
          <mesh>
            <sphereGeometry args={[0.055, 8, 8]} />
            <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={2.4} />
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <sphereGeometry args={[0.02, 6, 6]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          <mesh
            ref={(el) => {
              bulbs.current[i] = el;
            }}
            visible={false}
          >
            <sphereGeometry args={[0.01, 4, 4]} />
            <meshStandardMaterial color={s.color} emissive={s.color} />
          </mesh>
        </group>
      ))}
      {/* the wire */}
      <mesh>
        <tubeGeometry args={[wireCurve(A, B), 24, 0.012, 5, false]} />
        <meshStandardMaterial color="#2a2438" roughness={1} />
      </mesh>
    </group>
  );
}

function wireCurve(a: THREE.Vector3, b: THREE.Vector3) {
  const mid = new THREE.Vector3().lerpVectors(a, b, 0.5);
  mid.y -= 1.15;
  return new THREE.CatmullRomCurve3([a, mid, b]);
}

/* ================= fences & paths ================= */

function Fence() {
  const pickets = useMemo(() => {
    const start: [number, number] = [-8.6, 0.4];
    const dir: [number, number] = [0.985, 0.174];
    return Array.from({ length: 11 }, (_, i) => ({
      pos: [start[0] + dir[0] * i * 0.42, 0.26, start[1] + dir[1] * i * 0.42] as V3,
    }));
  }, []);
  return (
    <group>
      {pickets.map((p, i) => (
        <mesh key={i} position={p.pos} castShadow>
          <boxGeometry args={[0.07, 0.52, 0.045]} />
          <meshStandardMaterial color="#cbb9a4" flatShading roughness={0.9} />
        </mesh>
      ))}
      {[0.18, 0.4].map((y, i) => (
        <mesh key={i} position={[-7.05, y, 0.77]} rotation={[0, Math.atan2(0.985, 0.174), 0]}>
          <boxGeometry args={[4.4, 0.05, 0.03]} />
          <meshStandardMaterial color="#b7a58f" flatShading roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function PathStones() {
  const paths = useMemo(() => {
    const make = (from: [number, number], to: [number, number], n: number, seed: number) => {
      const rng = mulberry32(seed);
      return Array.from({ length: n }, (_, i) => {
        const k = i / (n - 1);
        const wiggle = (rng() - 0.5) * 0.8;
        const nx = -(to[1] - from[1]);
        const nz = to[0] - from[0];
        const nl = Math.hypot(nx, nz) || 1;
        return {
          pos: [from[0] + (to[0] - from[0]) * k + (nx / nl) * wiggle, 0.05, from[1] + (to[1] - from[1]) * k + (nz / nl) * wiggle] as V3,
          rot: rng() * Math.PI,
          s: 0.85 + rng() * 0.4,
        };
      });
    };
    return [
      ...make([0, 9.2], [0.8, -1.0], 8, 5),
      ...make([1.4, -1.8], [12.4, -0.9], 9, 6),
      ...make([-1.2, 8.6], [-12.4, 3.6], 9, 7),
      ...make([17.8, -1.5], [22.6, -1.8], 4, 8),
      ...make([-16.9, 4.05], [-21.5, 5.8], 4, 9),
    ];
  }, []);
  return (
    <group>
      {paths.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={[0, s.rot, 0]} scale={s.s} receiveShadow>
          <cylinderGeometry args={[0.42, 0.48, 0.09, 7]} />
          <meshStandardMaterial color="#5a5378" flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

/* ================= bench / lanterns / pier / sign ================= */

function Bench() {
  return (
    <group position={[3.0, 0, 0.9]} rotation={[0, Math.atan2(-1.8, -2.5), 0]}>
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[1.7, 0.1, 0.55]} />
        <meshStandardMaterial color="#5d4534" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 0.75, -0.24]} rotation={[-0.15, 0, 0]} castShadow>
        <boxGeometry args={[1.7, 0.5, 0.09]} />
        <meshStandardMaterial color="#5d4534" flatShading roughness={1} />
      </mesh>
      {[-0.7, 0.7].map((x) => (
        <mesh key={x} position={[x, 0.22, 0]}>
          <boxGeometry args={[0.1, 0.45, 0.45]} />
          <meshStandardMaterial color="#4a3a2c" flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Lantern({ pos }: { pos: V3 }) {
  return (
    <group position={pos}>
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.09, 1.6, 6]} />
        <meshStandardMaterial color="#3a3350" flatShading />
      </mesh>
      <mesh position={[0, 1.68, 0]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3.2} />
      </mesh>
      <sprite position={[0, 1.68, 0]} scale={[1.1, 1.1, 1]}>
        <spriteMaterial color="#ffcf8a" transparent opacity={0.16} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
    </group>
  );
}

function Pier() {
  const ang = Math.atan2(PIER_DIR[0], PIER_DIR[2]);
  const perp: V3 = [PIER_DIR[2], 0, -PIER_DIR[0]];
  const planks = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const t = 0.55 + i * 0.95;
        return {
          pos: [PIER_START[0] + PIER_DIR[0] * t, 0, PIER_START[2] + PIER_DIR[2] * t] as V3,
          rot: ang + (((i * 37) % 10) - 5) * 0.006,
        };
      }),
    [ang],
  );
  const lanternPos: V3 = [
    PIER_START[0] + PIER_DIR[0] * (PIER_LENGTH - 0.3),
    0,
    PIER_START[2] + PIER_DIR[2] * (PIER_LENGTH - 0.3),
  ];
  return (
    <group>
      {planks.map((p, i) => (
        <group key={i}>
          <mesh position={[p.pos[0], -0.06, p.pos[2]]} rotation={[0, p.rot, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.7, 0.12, 0.78]} />
            <meshStandardMaterial color="#6e4f39" flatShading roughness={1} />
          </mesh>
          {i % 2 === 0 &&
            [1, -1].map((side) => {
              const px = p.pos[0] + perp[0] * side * 0.78;
              const pz = p.pos[2] + perp[2] * side * 0.78;
              return (
                <mesh key={side} position={[px, -0.62, pz]}>
                  <cylinderGeometry args={[0.07, 0.09, 1.25, 6]} />
                  <meshStandardMaterial color="#4a3a2c" flatShading roughness={1} />
                </mesh>
              );
            })}
        </group>
      ))}
      <group position={lanternPos}>
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 1.5, 6]} />
          <meshStandardMaterial color="#3a3350" flatShading />
        </mesh>
        <mesh position={[0, 1.58, 0]}>
          <sphereGeometry args={[0.16, 12, 12]} />
          <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3} />
        </mesh>
        <pointLight position={[0, 1.6, 0]} color="#ffc36b" intensity={10} distance={9} decay={2} />
      </group>
    </group>
  );
}

function Signpost() {
  return (
    <group position={[1.6, 0, 8.0]} rotation={[0, -0.5, 0]}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 1.3, 6]} />
        <meshStandardMaterial color="#4a3a2c" flatShading />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0.04]} castShadow>
        <boxGeometry args={[1.7, 0.56, 0.07]} />
        <meshStandardMaterial color="#7a5c42" flatShading roughness={1} />
      </mesh>
      <Html position={[0, 1.66, 0]} center style={{ pointerEvents: "none" }} zIndexRange={[9, 0]}>
        <div className="tag3d font-display">✦ The Hearth · est. 2026 ✦</div>
      </Html>
    </group>
  );
}

/* ================= drifting islets ================= */

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
        <cylinderGeometry args={[spec.r, spec.r * 0.8, 0.9, 9]} />
        <meshStandardMaterial color="#2f7a5e" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, -1.1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[spec.r * 0.8, 2.2, 9]} />
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

/* ================= export ================= */

export function Island() {
  const quality = useStore((s) => s.quality);
  return (
    <group>
      {ISLANDS.map((isl, i) => (
        <IslandBody key={isl.id} isl={isl} index={i} />
      ))}
      <Scatter quality={quality} />
      <Pebbles />
      <GlowMushrooms />

      {TREES_MAP.hearth.map((p, i) => (
        <Tree key={`h${i}`} pos={p} scale={0.9 + ((i * 13) % 5) * 0.08} />
      ))}
      {BLOSSOMS.map((p, i) => (
        <Tree key={`b${i}`} pos={p} scale={0.95 + ((i * 17) % 5) * 0.07} blossom />
      ))}

      <Cottage />
      <Bridge index={0} />
      <Bridge index={1} />
      <Pier />
      {LANTERNS.map((p, i) => (
        <Lantern key={i} pos={p} />
      ))}
      <PathStones />
      <Bench />
      <Signpost />
      <Fence />
      <StringLights />
      {MINI_ISLANDS.map((s, i) => (
        <MiniIsland key={i} spec={s} index={i} />
      ))}

      {/* island name tags */}
      <Html position={[27, 6.8, -2]} center style={{ pointerEvents: "none" }} zIndexRange={[9, 0]}>
        <div className="tag3d font-display">🌸 Everbloom Isle</div>
      </Html>
      <Html position={[-25, 7.6, 6]} center style={{ pointerEvents: "none" }} zIndexRange={[9, 0]}>
        <div className="tag3d font-display">🔭 Starfall Isle</div>
      </Html>
    </group>
  );
}

const TREES_MAP = {
  hearth: [
    [-10.5, 0, -1.5],
    [-9.0, 0, -7.0],
    [3.5, 0, -8.5],
    [9.5, 0, -1.2],
    [-4.5, 0, 6.5],
    [11.0, 0, 2.5],
  ] as V3[],
};

const BLOSSOMS = [
  [22.5, 0, -8.5],
  [31.0, 0, 2.8],
  [29.8, 0, -9.2],
  [24.8, 0, 4.6],
  [-29.0, 0, 2.2],
  [-20.5, 0, 11.0],
  [-28.6, 0, 10.4],
] as V3[];

/* ================= cottage ================= */

function Cottage() {
  const yaw = Math.atan2(-COTTAGE[0], -COTTAGE[2]);
  return (
    <group position={COTTAGE} rotation={[0, yaw, 0]}>
      <mesh position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[3.6, 2.5, 3.1]} />
        <meshStandardMaterial color="#7c5b45" flatShading roughness={0.95} />
      </mesh>
      <mesh position={[0, 3.42, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[3.1, 1.9, 4]} />
        <meshStandardMaterial color="#3a3358" flatShading roughness={0.9} />
      </mesh>
      {/* arched door */}
      <mesh position={[0, 0.82, 1.58]}>
        <boxGeometry args={[0.95, 1.64, 0.1]} />
        <meshStandardMaterial color="#241a30" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.64, 1.58]}>
        <cylinderGeometry args={[0.475, 0.475, 0.1, 12, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#241a30" roughness={0.9} />
      </mesh>
      <mesh position={[0.3, 0.85, 1.66]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#f2c94c" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* windows with frames + flower boxes */}
      {[
        [1.05, 1.55],
        [-1.15, 1.55],
      ].map(([x, y], wi) => (
        <group key={wi} position={[x, y, 1.58]}>
          <mesh>
            <boxGeometry args={[wi === 0 ? 0.8 : 0.7, wi === 0 ? 0.8 : 0.7, 0.08]} />
            <meshStandardMaterial color="#ffdca0" emissive="#ffcf7d" emissiveIntensity={2.6} />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[wi === 0 ? 0.86 : 0.76, 0.05, 0.03]} />
            <meshStandardMaterial color="#54406b" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[0.05, wi === 0 ? 0.86 : 0.76, 0.03]} />
            <meshStandardMaterial color="#54406b" />
          </mesh>
          <mesh position={[0, -0.48, 0.1]}>
            <boxGeometry args={[wi === 0 ? 0.9 : 0.8, 0.16, 0.22]} />
            <meshStandardMaterial color="#5d4534" flatShading />
          </mesh>
          {[0, 1, 2].map((f) => (
            <mesh key={f} position={[(f - 1) * 0.22, -0.38, 0.12]}>
              <icosahedronGeometry args={[0.06, 0]} />
              <meshStandardMaterial color={["#ff8fb3", "#ffb37a", "#e58fb4"][f]} flatShading />
            </mesh>
          ))}
        </group>
      ))}
      {/* chimney + smoke */}
      <mesh position={[1.0, 3.6, -0.6]} castShadow>
        <boxGeometry args={[0.5, 1.3, 0.5]} />
        <meshStandardMaterial color="#55486a" flatShading />
      </mesh>
      <Smoke offset={[1.0, 4.3, -0.6]} />
      <pointLight position={[0.9, 1.9, 2.6]} color="#ffb45e" intensity={16} distance={11} decay={2} />
      {/* doorstep lantern */}
      <mesh position={[-1.5, 2.35, 1.7]}>
        <boxGeometry args={[0.14, 0.2, 0.14]} />
        <meshStandardMaterial color="#3a3350" />
      </mesh>
      <mesh position={[-1.5, 2.12, 1.7]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={2.6} />
      </mesh>
    </group>
  );
}
