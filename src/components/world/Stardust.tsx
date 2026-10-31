"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { STARDUST } from "@/lib/layout";
import { useStore } from "@/lib/store";

export function Stardust() {
  const collected = useStore((s) => s.collected);
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((m, i) => {
      if (!m) return;
      m.rotation.y = t * 1.4 + i;
      m.position.y = STARDUST[i][1] + Math.sin(t * 1.8 + i * 1.3) * 0.15;
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
          position={p}
          visible={!collected.has(i)}
        >
          <octahedronGeometry args={[0.17, 0]} />
          <meshStandardMaterial color="#ffe9b0" emissive="#ffd27a" emissiveIntensity={2.8} />
        </mesh>
      ))}
    </group>
  );
}
