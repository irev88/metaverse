"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { BRIDGES, CAMPFIRE, COTTAGE, LANTERNS, PIER_DIR, PIER_LENGTH, PIER_START, SIGN, type V3 } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { Smoke, glowTexture } from "./Particles";
import { NearTag } from "./NearTag";

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

/* ================= lanterns ================= */

function Lantern({ pos }: { pos: V3 }) {
  const y = useMemo(() => terrainHeight(pos[0], pos[2]), [pos]);
  const tex = useMemo(glowTexture, []);
  const halo = useRef<THREE.Sprite>(null);
  const phase = useMemo(() => (pos[0] * 7 + pos[2] * 13) % 10, [pos]);
  useFrame((state) => {
    if (!halo.current) return;
    const t = state.clock.elapsedTime;
    const flicker = 0.15 + Math.sin(t * 6.7 + phase) * 0.025 + Math.sin(t * 13.3 + phase * 2) * 0.015;
    (halo.current.material as THREE.SpriteMaterial).opacity = flicker;
    halo.current.scale.setScalar(1.05 + Math.sin(t * 5.1 + phase) * 0.05);
  });
  return (
    <group position={[pos[0], y, pos[2]]}>
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.09, 1.6, 6]} />
        <meshStandardMaterial color="#3a3350" flatShading />
      </mesh>
      <mesh position={[0, 1.68, 0]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3.2} />
      </mesh>
      <sprite ref={halo} position={[0, 1.68, 0]} scale={[1.1, 1.1, 1]}>
        <spriteMaterial map={tex} color="#ffcf8a" transparent opacity={0.15} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
    </group>
  );
}

/* ================= paths / bench / sign / fence ================= */

function PathStones() {
  const paths = useMemo(() => {
    const make = (from: [number, number], to: [number, number], n: number, seed: number) => {
      const rng = (i: number) => Math.abs(Math.sin(i * 91.7 + seed) * 43758.55 % 1);
      return Array.from({ length: n }, (_, i) => {
        const k = i / (n - 1);
        const wiggle = (rng(i) - 0.5) * 1.0;
        const nx = -(to[1] - from[1]);
        const nz = to[0] - from[0];
        const nl = Math.hypot(nx, nz) || 1;
        return {
          pos: [from[0] + (to[0] - from[0]) * k + (nx / nl) * wiggle, 0, from[1] + (to[1] - from[1]) * k + (nz / nl) * wiggle] as V3,
          rot: rng(i + 40) * Math.PI,
          s: 0.85 + rng(i + 80) * 0.4,
        };
      });
    };
    return [
      ...make([0, 10.4], [0.8, -1.0], 10, 5),
      ...make([1.4, -1.8], [26.0, -3.0], 15, 6),
      ...make([-1.2, 9.4], [-25.2, 6.9], 14, 7),
      ...make([33.6, -3.9], [38.9, -4.3], 4, 8),
      ...make([-29.8, 8.1], [-35.0, 9.6], 4, 9),
      ...make([3.2, 6.6], [9.0, 6.7], 5, 10),
    ];
  }, []);
  return (
    <group>
      {paths.map((s, i) => {
        const y = terrainHeight(s.pos[0], s.pos[2]);
        if (y === -Infinity) return null;
        return (
          <mesh key={i} position={[s.pos[0], y + 0.04, s.pos[2]]} rotation={[0, s.rot, 0]} scale={s.s} receiveShadow>
            <cylinderGeometry args={[0.42, 0.48, 0.09, 7]} />
            <meshStandardMaterial color="#5a5378" flatShading roughness={1} />
          </mesh>
        );
      })}
    </group>
  );
}

function Bench() {
  const y = useMemo(() => terrainHeight(3.0, 0.9), []);
  return (
    <group position={[3.0, y, 0.9]} rotation={[0, Math.atan2(-1.8, -2.5), 0]}>
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

function Signpost() {
  const y = useMemo(() => terrainHeight(SIGN[0], SIGN[2]), []);
  return (
    <group position={[SIGN[0], y, SIGN[2]]} rotation={[0, -0.5, 0]}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 1.3, 6]} />
        <meshStandardMaterial color="#4a3a2c" flatShading />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0.04]} castShadow>
        <boxGeometry args={[1.7, 0.56, 0.07]} />
        <meshStandardMaterial color="#7a5c42" flatShading roughness={1} />
      </mesh>
      <NearTag position={[0, 1.66, 0]} radius={4.5}>
        ✦ The Hearth · est. 2026 ✦
      </NearTag>
    </group>
  );
}

function Fence() {
  const pickets = useMemo(() => {
    const start: [number, number] = [-8.6, 0.4];
    const dir: [number, number] = [0.985, 0.174];
    return Array.from({ length: 11 }, (_, i) => ({
      pos: [start[0] + dir[0] * i * 0.42, start[1] + dir[1] * i * 0.42] as [number, number],
    }));
  }, []);
  return (
    <group>
      {pickets.map((p, i) => {
        const y = terrainHeight(p.pos[0], p.pos[1]);
        if (y === -Infinity) return null;
        return (
          <mesh key={i} position={[p.pos[0], y + 0.26, p.pos[1]]} castShadow>
            <boxGeometry args={[0.07, 0.52, 0.045]} />
            <meshStandardMaterial color="#cbb9a4" flatShading roughness={0.9} />
          </mesh>
        );
      })}
      {[0.18, 0.4].map((ry, i) => {
        const y = terrainHeight(-7.05, 0.77);
        if (y === -Infinity) return null;
        return (
          <mesh key={i} position={[-7.05, y + ry, 0.77]} rotation={[0, Math.atan2(0.985, 0.174), 0]}>
            <boxGeometry args={[4.4, 0.05, 0.03]} />
            <meshStandardMaterial color="#b7a58f" flatShading roughness={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ================= string lights ================= */

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

/* ================= glow mushrooms ================= */

function GlowMushrooms() {
  const spots = useMemo(() => {
    const zones: [number, number][] = [
      [-12.5, 5.5],
      [-10.4, -6.0],
      [13.0, -4.4],
      [-31.5, 11.5],
      [-24.8, 3.0],
      [29.0, 1.5],
      [38.0, -4.0],
      [1.0, -10.0],
      [-34.0, 12.8],
      [43.0, -12.0],
    ];
    return zones.map(([x, z], i) => {
      const h = terrainHeight(x, z);
      return {
        pos: [x, h === -Infinity ? 0 : h, z] as V3,
        c: i % 2 === 0 ? "#7ee8d8" : "#ff9ec7",
        s: 0.7 + ((i * 13) % 5) * 0.14,
      };
    });
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

/* ================= island structures export ================= */

export function Island() {
  return (
    <group>
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
      <GlowMushrooms />

      {/* island name tags */}
      <NearTag position={[52, 8.6, -6]} radius={22}>
        🌸 Everbloom Isle
      </NearTag>
      <NearTag position={[-45, 9.2, 12]} radius={20}>
        🔭 Starfall Isle
      </NearTag>
    </group>
  );
}

/* ================= pier ================= */

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
  void CAMPFIRE;
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
