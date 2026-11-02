"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { COTTAGE, MAILBOX, PICNIC, WELL, type V3 } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { NearTag } from "./NearTag";

function useGroundY(pos: V3): number {
  return useMemo(() => (pos[1] || 0) + terrainHeight(pos[0], pos[2]), [pos]);
}

/* ================= wishing well ================= */

export function Well() {
  const y = useGroundY(WELL);
  return (
    <group position={[WELL[0], y, WELL[2]]}>
      {/* stone ring */}
      <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.95, 0.85, 14]} />
        <meshStandardMaterial color="#6a6284" flatShading roughness={1} />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, 0.18 + i * 0.17, 0]}>
          <torusGeometry args={[0.88, 0.045, 6, 18]} />
          <meshStandardMaterial color="#565070" flatShading roughness={1} />
        </mesh>
      ))}
      {/* dark water inside */}
      <mesh position={[0, 0.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.72, 20]} />
        <meshStandardMaterial color="#131a38" roughness={0.25} metalness={0.4} />
      </mesh>
      {/* posts + roof */}
      {[-0.72, 0.72].map((x) => (
        <mesh key={x} position={[x, 1.35, 0]} castShadow>
          <boxGeometry args={[0.09, 1.7, 0.09]} />
          <meshStandardMaterial color="#5d4534" flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 2.35, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.15, 0.62, 4]} />
        <meshStandardMaterial color="#3a3358" flatShading roughness={0.9} />
      </mesh>
      {/* crossbar + rope + bucket */}
      <mesh position={[0, 1.95, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 1.6, 8]} />
        <meshStandardMaterial color="#4a3a2c" flatShading />
      </mesh>
      <mesh position={[0.28, 1.8, 0]} rotation={[Math.PI / 2, 0, 0.28]}>
        <cylinderGeometry args={[0.03, 0.03, 0.22, 10]} />
        <meshStandardMaterial color="#8a6a4a" flatShading />
      </mesh>
      <mesh position={[0.28, 1.62, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.28, 5]} />
        <meshStandardMaterial color="#d9cba8" roughness={0.9} />
      </mesh>
      <mesh position={[0.28, 1.42, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.11, 0.18, 10]} />
        <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
      </mesh>
      <NearTag position={[0, 3.0, 0]} radius={4}>
        ✧ wishing well
      </NearTag>
    </group>
  );
}

/* ================= mailbox ================= */

export function Mailbox() {
  const y = useGroundY(MAILBOX);
  return (
    <group position={[MAILBOX[0], y, MAILBOX[2]]} rotation={[0, -0.7, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 1.1, 6]} />
        <meshStandardMaterial color="#4a3a2c" flatShading />
      </mesh>
      <group position={[0, 1.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.32, 0.3, 0.5]} />
          <meshStandardMaterial color="#b3543f" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.32, 10, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#b3543f" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.163, 0.163, 0.335, 10, 1, true, 0, Math.PI]} />
          <meshStandardMaterial color="#8a3f30" roughness={0.8} side={THREE.DoubleSide} />
        </mesh>
        {/* flag */}
        <mesh position={[0.2, 0.22, -0.1]}>
          <boxGeometry args={[0.03, 0.22, 0.06]} />
          <meshStandardMaterial color="#f2c94c" roughness={0.6} />
        </mesh>
        <mesh position={[0.1, 0.12, -0.24]}>
          <boxGeometry args={[0.02, 0.02, 0.16]} />
          <meshStandardMaterial color="#54406b" />
        </mesh>
      </group>
      <NearTag position={[0, 1.9, 0]} radius={3}>
        ✧ our letters
      </NearTag>
    </group>
  );
}

/* ================= barrels, crates, log pile by the cottage ================= */

function Barrel({ pos, rot = 0 }: { pos: V3; rot?: number }) {
  return (
    <group position={pos} rotation={[0, rot, 0]}>
      <mesh position={[0, 0.34, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.22, 0.68, 12]} />
        <meshStandardMaterial color="#7a5b42" roughness={0.9} flatShading />
      </mesh>
      {[0.16, 0.52].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <torusGeometry args={[0.265, 0.022, 6, 16]} />
          <meshStandardMaterial color="#3d3540" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Crate({ pos, rot = 0, s = 1 }: { pos: V3; rot?: number; s?: number }) {
  return (
    <group position={pos} rotation={[0, rot, 0]} scale={s}>
      <mesh position={[0, 0.24, 0]} castShadow>
        <boxGeometry args={[0.48, 0.48, 0.48]} />
        <meshStandardMaterial color="#96714f" roughness={0.95} flatShading />
      </mesh>
      {[
        [0.245, 0, 0],
        [-0.245, 0, 0],
      ].map(([x], i) => (
        <mesh key={i} position={[x, 0.24, 0]}>
          <boxGeometry args={[0.03, 0.5, 0.5]} />
          <meshStandardMaterial color="#7a5b42" roughness={0.95} flatShading />
        </mesh>
      ))}
    </group>
  );
}

export function CottageYard() {
  const y = useGroundY(COTTAGE);
  return (
    <group>
      <Barrel pos={[COTTAGE[0] - 2.6, y, COTTAGE[2] + 1.6]} rot={0.4} />
      <Barrel pos={[COTTAGE[0] - 2.0, y, COTTAGE[2] + 2.3]} rot={1.1} />
      <Crate pos={[COTTAGE[0] - 2.9, y, COTTAGE[2] + 0.4]} rot={0.3} />
      <Crate pos={[COTTAGE[0] - 2.6, y + 0.48, COTTAGE[2] + 0.6]} rot={0.8} s={0.8} />
      {/* firewood log pile */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[COTTAGE[0] + 2.7, y + 0.14, COTTAGE[2] + 1.4 + i * 0.24]} rotation={[0, 1.5, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.8, 8]} />
          <meshStandardMaterial color="#5b4030" flatShading roughness={1} />
        </mesh>
      ))}
      {[0, 1].map((i) => (
        <mesh key={i} position={[COTTAGE[0] + 2.7, y + 0.34, COTTAGE[2] + 1.62 + i * 0.24]} rotation={[0, 1.5, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.8, 8]} />
          <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

/* ================= picnic set ================= */

function makeBlanketTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#c2445a";
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = "#f2e6e0";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) g.fillRect(i * 16, j * 16, 16, 16);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

export function Picnic() {
  const y = useGroundY(PICNIC);
  const tex = useMemo(makeBlanketTexture, []);
  return (
    <group position={[PICNIC[0], y, PICNIC[2]]} rotation={[0, 0.6, 0]}>
      {/* blanket */}
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[2.3, 1.8]} />
        <meshStandardMaterial map={tex} roughness={1} />
      </mesh>
      {/* basket */}
      <group position={[0.55, 0.08, -0.35]}>
        <mesh position={[0, 0.12, 0]} castShadow>
          <cylinderGeometry args={[0.24, 0.19, 0.24, 10]} />
          <meshStandardMaterial color="#96714f" roughness={1} flatShading />
        </mesh>
        <mesh position={[0, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.17, 0.02, 6, 14]} />
          <meshStandardMaterial color="#7a5b42" roughness={1} />
        </mesh>
        <mesh position={[0, 0.34, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.16, 0.022, 6, 16, Math.PI]} />
          <meshStandardMaterial color="#5d4534" roughness={1} />
        </mesh>
      </group>
      {/* two cushions */}
      {[
        [-0.55, 0.45],
        [0.35, 0.62],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.1, z]} rotation={[0, i * 0.7, 0]} castShadow>
          <cylinderGeometry args={[0.32, 0.32, 0.12, 12]} />
          <meshStandardMaterial color={i === 0 ? "#e58fb4" : "#8b7cf6"} roughness={1} />
        </mesh>
      ))}
      {/* lantern + rose on the blanket */}
      <mesh position={[-0.2, 0.12, -0.3]} castShadow>
        <cylinderGeometry args={[0.07, 0.09, 0.16, 8]} />
        <meshStandardMaterial color="#3a3350" flatShading />
      </mesh>
      <mesh position={[-0.2, 0.23, -0.3]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={2.2} />
      </mesh>
      <mesh position={[0.1, 0.09, 0.28]}>
        <icosahedronGeometry args={[0.06, 0]} />
        <meshStandardMaterial color="#ff6f9e" roughness={0.7} flatShading />
      </mesh>
      <NearTag position={[0, 0.9, 0]} radius={4}>
        🧺 saved for two
      </NearTag>
    </group>
  );
}
