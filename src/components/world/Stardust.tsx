"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { STARDUST } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { useStore } from "@/lib/store";

export function Stardust() {
  const collected = useStore((s) => s.collected);
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const heights = useMemo(() => STARDUST.map((p) => (terrainHeight(p[0], p[2]) === -Infinity ? 0.9 : terrainHeight(p[0], p[2]) + 0.9)), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((m, i) => {
      if (!m) return;
      m.rotation.y = t * 1.4 + i;
      m.position.y = heights[i] + Math.sin(t * 1.8 + i * 1.3) * 0.15;
      m.scale.setScalar(1 + Math.sin(t * 2.4 + i) * 0.12);
    });
  });

  return (
    <group>
      {STARDUST.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={[p[0], heights[i], p[2]]}
          visible={!collected.has(i)}
        >
          <octahedronGeometry args={[0.17, 0]} />
          <meshStandardMaterial color="#ffe9b0" emissive="#ffd27a" emissiveIntensity={2.8} />
        </mesh>
      ))}
    </group>
  );
}
