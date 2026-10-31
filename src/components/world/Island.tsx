"use client";

import { useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { COTTAGE, LANTERNS, PIER_DIR, PIER_LENGTH, PIER_START, SIGN, TREES, type V3 } from "@/lib/layout";
import { Smoke } from "./Particles";

/* Deterministic PRNG so the world looks the same every visit */
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

/* ---------------- Terrain ---------------- */

function Terrain() {
  const rimRocks = useMemo(() => {
    const rng = mulberry32(7);
    return Array.from({ length: 9 }, (_, i) => {
      const a = (i / 9) * Math.PI * 2 + rng() * 0.5;
      const r = 13.2 + rng() * 0.9;
      return {
        pos: [Math.cos(a) * r, -0.2 + rng() * 0.5, Math.sin(a) * r] as V3,
        scale: 0.5 + rng() * 0.8,
        rot: rng() * Math.PI,
      };
    });
  }, []);

  const floaters = useMemo(() => {
    const rng = mulberry32(21);
    return Array.from({ length: 7 }, (_, i) => {
      const a = rng() * Math.PI * 2;
      const r = 17 + rng() * 12;
      return {
        pos: [Math.cos(a) * r, -4 - rng() * 10 - (i % 3), Math.sin(a) * r] as V3,
        scale: 0.6 + rng() * 1.6,
        speed: 0.05 + rng() * 0.08,
        phase: rng() * Math.PI * 2,
      };
    });
  }, []);

  const floaterRefs = useRef<(THREE.Mesh | null)[]>([]);

  return (
    <group>
      {/* grass top */}
      <mesh position={[0, -1.2, 0]} receiveShadow>
        <cylinderGeometry args={[14, 12.4, 2.4, 12, 1]} />
        <meshStandardMaterial color="#2f7a5e" flatShading roughness={1} />
      </mesh>
      {/* dirt lip */}
      <mesh position={[0, -2.4, 0]}>
        <cylinderGeometry args={[12.4, 11.4, 1.4, 12, 1]} />
        <meshStandardMaterial color="#5a4a3a" flatShading roughness={1} />
      </mesh>
      {/* rocky underside */}
      <mesh position={[0, -8.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[11.4, 11.5, 12, 3]} />
        <meshStandardMaterial color="#4b4266" flatShading roughness={1} />
      </mesh>

      {rimRocks.map((rock, i) => (
        <mesh key={i} position={rock.pos} rotation={[0.3, rock.rot, 0.2]} scale={rock.scale} castShadow>
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#564d73" flatShading roughness={0.95} />
        </mesh>
      ))}

      {floaters.map((f, i) => (
        <mesh
          key={i}
          ref={(el) => {
            floaterRefs.current[i] = el;
          }}
          position={f.pos}
          scale={f.scale}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#4e4670" flatShading roughness={0.95} />
        </mesh>
      ))}
      <FloaterDrift refs={floaterRefs} specs={floaters} />
    </group>
  );
}

function FloaterDrift({
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

/* ---------------- Trees ---------------- */

function Tree({ pos, scale = 1 }: { pos: V3; scale?: number }) {
  return (
    <group position={pos} scale={scale}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.26, 1.2, 6]} />
        <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 1.7, 0]} castShadow>
        <coneGeometry args={[1.05, 1.5, 7]} />
        <meshStandardMaterial color="#1f6f52" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 2.5, 0]} castShadow>
        <coneGeometry args={[0.75, 1.1, 7]} />
        <meshStandardMaterial color="#27855f" flatShading roughness={1} />
      </mesh>
    </group>
  );
}

/* ---------------- Cottage ---------------- */

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
      {/* door */}
      <mesh position={[0, 0.82, 1.58]}>
        <boxGeometry args={[0.95, 1.64, 0.1]} />
        <meshStandardMaterial color="#241a30" roughness={0.9} />
      </mesh>
      {/* glowing windows */}
      <mesh position={[1.05, 1.55, 1.58]}>
        <boxGeometry args={[0.8, 0.8, 0.08]} />
        <meshStandardMaterial color="#ffdca0" emissive="#ffcf7d" emissiveIntensity={2.6} />
      </mesh>
      <mesh position={[-1.15, 1.55, 1.58]}>
        <boxGeometry args={[0.7, 0.7, 0.08]} />
        <meshStandardMaterial color="#ffdca0" emissive="#ffcf7d" emissiveIntensity={2.2} />
      </mesh>
      {/* chimney */}
      <mesh position={[1.0, 3.6, -0.6]} castShadow>
        <boxGeometry args={[0.5, 1.3, 0.5]} />
        <meshStandardMaterial color="#55486a" flatShading />
      </mesh>
      <Smoke offset={[1.0, 4.3, -0.6]} />
      {/* warm porch light */}
      <pointLight position={[0.9, 1.9, 2.6]} color="#ffb45e" intensity={16} distance={11} decay={2} />
    </group>
  );
}

/* ---------------- Pier ---------------- */

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
      {/* lantern at the end */}
      <group position={lanternPos}>
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 1.5, 6]} />
          <meshStandardMaterial color="#3a3350" flatShading />
        </mesh>
        <mesh position={[0, 1.58, 0]}>
          <sphereGeometry args={[0.16, 12, 12]} />
          <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3} />
        </mesh>
        <pointLight position={[0, 1.6, 0]} color="#ffc36b" intensity={12} distance={10} decay={2} />
      </group>
    </group>
  );
}

/* ---------------- Lantern posts ---------------- */

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
      <pointLight position={[0, 1.7, 0]} color="#ffcf8a" intensity={6} distance={6.5} decay={2} />
    </group>
  );
}

/* ---------------- Path stones / bench / sign ---------------- */

function PathStones() {
  const stones = useMemo(() => {
    const from: V3 = [0, 0, 9.2];
    const to: V3 = [0.8, 0, -1.0];
    return Array.from({ length: 8 }, (_, i) => {
      const k = i / 7;
      const wiggle = Math.sin(k * Math.PI * 2.2) * 0.5;
      return {
        pos: [from[0] + (to[0] - from[0]) * k + wiggle, 0.06, from[2] + (to[2] - from[2]) * k] as V3,
        rot: k * 2.4,
      };
    });
  }, []);
  return (
    <group>
      {stones.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={[0, s.rot, 0]} receiveShadow>
          <cylinderGeometry args={[0.42, 0.48, 0.1, 7]} />
          <meshStandardMaterial color="#5a5378" flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

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

function Signpost() {
  return (
    <group position={SIGN} rotation={[0, -0.5, 0]}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 1.3, 6]} />
        <meshStandardMaterial color="#4a3a2c" flatShading />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, 0.04]} castShadow>
        <boxGeometry args={[1.5, 0.52, 0.07]} />
        <meshStandardMaterial color="#7a5c42" flatShading roughness={1} />
      </mesh>
      <Html position={[0, 1.62, 0]} center style={{ pointerEvents: "none" }}>
        <div className="tag3d">✨ The Hearth · est. 2026</div>
      </Html>
    </group>
  );
}

/* ---------------- Exported island ---------------- */

export function Island() {
  return (
    <group>
      <Terrain />
      {TREES.map((p, i) => (
        <Tree key={i} pos={p} scale={0.9 + ((i * 13) % 5) * 0.08} />
      ))}
      <Cottage />
      <Pier />
      {LANTERNS.map((p, i) => (
        <Lantern key={i} pos={p} />
      ))}
      <PathStones />
      <Bench />
      <Signpost />
    </group>
  );
}
