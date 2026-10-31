"use client";

import { useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CAMPFIRE, PORTALS, TELESCOPE, WISH_TREE } from "@/lib/layout";
import { useStore } from "@/lib/store";
import { EmberParticles, WishMotes } from "./Particles";

/* ---------------- Campfire ---------------- */

const flameTex = () => {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 84, 4, 64, 72, 62);
  grad.addColorStop(0, "rgba(255,240,190,1)");
  grad.addColorStop(0.35, "rgba(255,170,70,0.9)");
  grad.addColorStop(0.7, "rgba(255,90,40,0.35)");
  grad.addColorStop(1, "rgba(255,60,30,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  return t;
};

export function Campfire() {
  const flames = useRef<(THREE.Mesh | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const tex = useMemo(flameTex, []);
  const stones = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const a = (i / 7) * Math.PI * 2;
        return { pos: [CAMPFIRE[0] + Math.cos(a) * 0.95, 0.08, CAMPFIRE[2] + Math.sin(a) * 0.95] as [number, number, number], rot: a * 2.1 };
      }),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    flames.current.forEach((m, i) => {
      if (!m) return;
      const flick = 0.85 + Math.sin(t * (9 + i * 2.7) + i * 1.7) * 0.18;
      m.scale.set(flick, 1.05 + Math.sin(t * 11 + i * 2.1) * 0.22, flick);
      m.rotation.y = t * (0.6 + i * 0.3);
    });
    if (light.current) light.current.intensity = 13 + Math.sin(t * 9.3) * 2.5 + Math.sin(t * 23.7) * 1.2;
  });

  return (
    <group>
      {stones.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={[0.2, s.rot, 0.15]} castShadow>
          <dodecahedronGeometry args={[0.24, 0]} />
          <meshStandardMaterial color="#5f5878" flatShading roughness={1} />
        </mesh>
      ))}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[CAMPFIRE[0], 0.18, CAMPFIRE[2]]}
          rotation={[Math.PI / 2 - 0.3, (i / 3) * Math.PI * 2, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.08, 0.1, 1.05, 6]} />
          <meshStandardMaterial color="#5b4030" flatShading roughness={1} />
        </mesh>
      ))}
      {/* crossed flame sprites */}
      {[0, 1].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            flames.current[i] = el;
          }}
          position={[CAMPFIRE[0], 0.62, CAMPFIRE[2]]}
          rotation={[0, (i * Math.PI) / 2, 0]}
        >
          <planeGeometry args={[1.15, 1.5]} />
          <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <mesh position={[CAMPFIRE[0], 0.3, CAMPFIRE[2]]}>
        <sphereGeometry args={[0.3, 10, 10]} />
        <meshStandardMaterial color="#ffb066" emissive="#ff7c30" emissiveIntensity={3} />
      </mesh>
      <pointLight ref={light} position={[CAMPFIRE[0], 1.15, CAMPFIRE[2]]} color="#ff9d4d" intensity={13} distance={11} decay={2} />
      <EmberParticles position={[CAMPFIRE[0], 0.4, CAMPFIRE[2]]} />
    </group>
  );
}

/* ---------------- Telescope ---------------- */

export function Telescope() {
  const azimuth = Math.atan2(150 - TELESCOPE[0], -230 - TELESCOPE[2]);
  return (
    <group position={TELESCOPE} rotation={[0, azimuth, 0]}>
      <mesh position={[0, 0.09, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.62, 0.18, 8]} />
        <meshStandardMaterial color="#4c4570" flatShading roughness={1} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.sin((i / 3) * Math.PI * 2) * 0.28, 0.65, Math.cos((i / 3) * Math.PI * 2) * 0.28]} rotation={[0.32, (i / 3) * Math.PI * 2, 0]} castShadow>
          <cylinderGeometry args={[0.045, 0.055, 1.35, 6]} />
          <meshStandardMaterial color="#8a6a4a" flatShading metalness={0.4} roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.13, 10, 10]} />
        <meshStandardMaterial color="#d4b078" metalness={0.6} roughness={0.35} />
      </mesh>
      <group position={[0, 1.32, 0]} rotation={[-0.62, 0, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.13, 0.19, 1.45, 12]} />
          <meshStandardMaterial color="#d4b078" metalness={0.55} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 12]} />
          <meshStandardMaterial color="#3d3560" metalness={0.4} roughness={0.4} />
        </mesh>
      </group>
      <Html position={[0, 2.2, 0]} center style={{ pointerEvents: "none" }}>
        <div className="tag3d">🔭 stargazer</div>
      </Html>
    </group>
  );
}

/* ---------------- Wish tree ---------------- */

export function WishTree() {
  const wishes = useStore((s) => s.wishes);
  const canopy = useMemo(
    () => [
      { pos: [0, 3.4, 0] as [number, number, number], r: 1.9, c: "#b18cff" },
      { pos: [1.2, 2.9, 0.4] as [number, number, number], r: 1.3, c: "#6ee7d8" },
      { pos: [-1.1, 3.0, -0.3] as [number, number, number], r: 1.4, c: "#b18cff" },
      { pos: [0.4, 2.7, -1.1] as [number, number, number], r: 1.2, c: "#8b7cf6" },
      { pos: [-0.5, 2.6, 1.0] as [number, number, number], r: 1.15, c: "#6ee7d8" },
    ],
    [],
  );
  const fruits = useMemo(() => {
    const rng = (i: number) => Math.sin(i * 127.1) * 43758.5453 % 1;
    return Array.from({ length: 8 }, (_, i) => {
      const a = Math.abs(rng(i + 1)) * Math.PI * 2;
      const rr = 1.7 + Math.abs(rng(i + 9)) * 0.8;
      return {
        pos: [WISH_TREE[0] + Math.cos(a) * rr, 2.1 + Math.abs(rng(i + 3)) * 1.1, WISH_TREE[2] + Math.sin(a) * rr] as [number, number, number],
      };
    });
  }, []);
  const glow = Math.min(0.85 + wishes.length * 0.14, 2.1);

  return (
    <group>
      <mesh position={[WISH_TREE[0], 1.4, WISH_TREE[2]]} castShadow>
        <cylinderGeometry args={[0.3, 0.55, 2.8, 7]} />
        <meshStandardMaterial color="#4a3663" flatShading roughness={1} />
      </mesh>
      {canopy.map((c, i) => (
        <mesh key={i} position={[WISH_TREE[0] + c.pos[0], c.pos[1], WISH_TREE[2] + c.pos[2]]} castShadow>
          <icosahedronGeometry args={[c.r, 0]} />
          <meshStandardMaterial color="#2c2350" emissive={c.c} emissiveIntensity={glow * 0.55} flatShading roughness={0.85} />
        </mesh>
      ))}
      {/* hanging wish-fruits */}
      {fruits.slice(0, wishes.length).map((f, i) => (
        <mesh key={i} position={f.pos}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#ffe2a8" emissive="#ffd27a" emissiveIntensity={3.4} />
        </mesh>
      ))}
      {/* ground glow */}
      <mesh position={[WISH_TREE[0], 0.02, WISH_TREE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.4, 32]} />
        <meshBasicMaterial color="#8b6cf0" transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <WishMotes position={[WISH_TREE[0], 2.6, WISH_TREE[2]]} />
      <Html position={[WISH_TREE[0], 4.9, WISH_TREE[2]]} center style={{ pointerEvents: "none" }}>
        <div className="tag3d">🌟 wishing tree · {wishes.length} wish{wishes.length === 1 ? "" : "es"}</div>
      </Html>
    </group>
  );
}

/* ---------------- Portals ---------------- */

const portalVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const portalFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    if (r > 1.0) discard;
    float a = atan(p.y, p.x);
    float sw = sin(a * 3.0 - uTime * 2.2 + r * 9.0);
    float glow = smoothstep(1.0, 0.15, r);
    float alpha = glow * (0.32 + 0.30 * sw);
    vec3 c = uColor * (0.55 + 0.6 * sw);
    gl_FragColor = vec4(c, alpha * 0.95);
  }
`;

function Portal({
  label,
  emoji,
  pos,
  color,
}: {
  label: string;
  emoji: string;
  pos: [number, number, number];
  color: string;
}) {
  const ring = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);
  const yaw = Math.atan2(-pos[0], -pos[2]);
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color(color) } }),
    [color],
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mat.current) mat.current.uniforms.uTime.value = t;
    if (ring.current) ring.current.position.y = 1.75 + Math.sin(t * 1.4 + pos[0]) * 0.07;
  });
  return (
    <group position={pos} rotation={[0, yaw, 0]}>
      <mesh position={[0, 0.11, 0]} castShadow>
        <cylinderGeometry args={[0.82, 0.95, 0.22, 8]} />
        <meshStandardMaterial color="#4c4570" flatShading roughness={1} />
      </mesh>
      <mesh ref={ring} position={[0, 1.75, 0]}>
        <torusGeometry args={[1.05, 0.075, 12, 48]} />
        <meshStandardMaterial color="#241f3d" emissive={color} emissiveIntensity={1.5} roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <circleGeometry args={[1.0, 40]} />
        <shaderMaterial
          ref={mat}
          vertexShader={portalVert}
          fragmentShader={portalFrag}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Html position={[0, 3.3, 0]} center style={{ pointerEvents: "none" }}>
        <div className="tag3d">{emoji} {label} · soon</div>
      </Html>
    </group>
  );
}

export function Portals() {
  return (
    <group>
      {PORTALS.map((p) => (
        <Portal key={p.id} label={p.label} emoji={p.emoji} pos={p.pos} color={p.color} />
      ))}
    </group>
  );
}
