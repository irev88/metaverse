"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

/* ---------------- Gradient sky dome ---------------- */

const domeVert = /* glsl */ `
  varying float vH;
  void main() {
    vH = normalize(position).y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const domeFrag = /* glsl */ `
  varying float vH;
  void main() {
    vec3 zenith  = vec3(0.012, 0.016, 0.055);
    vec3 mid     = vec3(0.043, 0.055, 0.140);
    vec3 horizon = vec3(0.080, 0.095, 0.230);
    vec3 c = mix(mid, zenith, smoothstep(0.05, 0.75, vH));
    c = mix(horizon, c, smoothstep(-0.02, 0.28, vH));
    gl_FragColor = vec4(c, 1.0);
  }
`;

function SkyDome() {
  return (
    <mesh scale={[1, 1, 1]} renderOrder={-10}>
      <sphereGeometry args={[420, 24, 16]} />
      <shaderMaterial
        vertexShader={domeVert}
        fragmentShader={domeFrag}
        side={THREE.BackSide}
        depthWrite={false}
        fog={false}
      />
    </mesh>
  );
}

/* ---------------- Aurora ---------------- */

const auroraVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const auroraFrag = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float t = uTime * 0.06;
    float sway = fbm(vec2(vUv.x * 3.0 + t, vUv.y * 1.2 - t * 0.4));
    float band = smoothstep(0.28, 0.62, sway + 0.22 * vUv.y);
    float rays = fbm(vec2(vUv.x * 18.0 - t * 1.5, 0.6));
    band *= 0.55 + 0.85 * rays;
    band *= smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
    vec3 teal = vec3(0.36, 0.92, 0.83);
    vec3 violet = vec3(0.65, 0.55, 0.98);
    vec3 col = mix(teal, violet, clamp(vUv.y * 1.4 + 0.15 * sin(t * 2.0 + vUv.x * 6.0), 0.0, 1.0));
    gl_FragColor = vec4(col * band * uIntensity, band * uIntensity);
  }
`;

function Aurora({
  position,
  rotation,
  scale,
  intensity,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  intensity: number;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uIntensity: { value: intensity } }), [intensity]);
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <mesh position={position} rotation={rotation} scale={scale} renderOrder={-5}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        vertexShader={auroraVert}
        fragmentShader={auroraFrag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
        fog={false}
      />
    </mesh>
  );
}

/* ---------------- Distant planet + moon ---------------- */

function PlanetFar() {
  const planet = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (planet.current) planet.current.rotation.y += dt * 0.02;
  });
  return (
    <group position={[150, 62, -230]}>
      <mesh ref={planet}>
        <sphereGeometry args={[26, 32, 32]} />
        <meshStandardMaterial color="#a893e0" emissive="#5b4a9e" emissiveIntensity={0.38} roughness={0.9} fog={false} />
      </mesh>
      <mesh rotation={[-1.25, 0.25, 0.35]}>
        <ringGeometry args={[34, 52, 96]} />
        <meshBasicMaterial color="#cbb8ff" transparent opacity={0.32} side={THREE.DoubleSide} fog={false} />
      </mesh>
    </group>
  );
}

function MoonFar() {
  return (
    <mesh position={[-130, 95, -190]}>
      <sphereGeometry args={[6, 24, 24]} />
      <meshStandardMaterial color="#e9edff" emissive="#cdd6ff" emissiveIntensity={0.55} roughness={1} fog={false} />
    </mesh>
  );
}

/* ---------------- Shooting star ---------------- */

function ShootingStar() {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const state = useRef({ active: false, nextAt: 3, t: 0, from: new THREE.Vector3(), dir: new THREE.Vector3() });

  useFrame((clock, dt) => {
    const s = state.current;
    const g = group.current;
    if (!g) return;
    const time = clock.clock.elapsedTime;

    if (!s.active) {
      if (time >= s.nextAt) {
        s.active = true;
        s.t = 0;
        s.from.set(-120 + Math.random() * 60, 90 + Math.random() * 50, -160 + Math.random() * 80);
        s.dir.set(0.7 + Math.random() * 0.4, -0.45 - Math.random() * 0.25, 0.1).normalize();
        g.visible = true;
      }
      return;
    }

    s.t += dt;
    const k = s.t / 1.3;
    if (k >= 1) {
      s.active = false;
      g.visible = false;
      s.nextAt = time + 6 + Math.random() * 11;
      return;
    }
    g.position.copy(s.from).addScaledVector(s.dir, s.t * 90);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), s.dir);
    if (mat.current) mat.current.opacity = Math.sin(k * Math.PI) * 0.9;
  });

  return (
    <group ref={group} visible={false}>
      <mesh>
        <boxGeometry args={[7, 0.12, 0.12]} />
        <meshBasicMaterial ref={mat} color="#ffffff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} fog={false} />
      </mesh>
      <mesh position={[-6, 0, 0]}>
        <boxGeometry args={[9, 0.05, 0.05]} />
        <meshBasicMaterial color="#a5b4fc" transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} fog={false} />
      </mesh>
    </group>
  );
}

/* ---------------- Exported sky ---------------- */

export function Sky() {
  const quality = useStore((s) => s.quality);
  const rich = quality === "rich";
  return (
    <>
      <SkyDome />
      <Stars radius={280} depth={60} count={rich ? 7000 : 3000} factor={5} saturation={0.35} fade speed={0.6} />
      <Aurora position={[0, 105, -160]} rotation={[-0.28, 0, 0.1]} scale={[340, 110, 1]} intensity={0.5} />
      <Aurora position={[-90, 80, -220]} rotation={[-0.2, 0.3, -0.15]} scale={[260, 90, 1]} intensity={0.3} />
      <PlanetFar />
      <MoonFar />
      <ShootingStar />
      {rich && <Sparkles count={110} scale={[30, 12, 30]} size={2.6} speed={0.25} color="#a78bfa" opacity={0.5} position={[0, 6, 0]} />}
    </>
  );
}
