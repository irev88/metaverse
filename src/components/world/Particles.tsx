"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fx, playerState } from "@/lib/input";
import { useStore } from "@/lib/store";

/* ---------- helpers ---------- */

function makeRadialTexture(inner: string, outer: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  grad.addColorStop(0, inner);
  grad.addColorStop(1, outer);
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function heartTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ff6b8d";
  g.shadowColor = "#ff6b8d";
  g.shadowBlur = 18;
  g.beginPath();
  const cx = 64,
    cy = 60,
    s = 44;
  g.moveTo(cx, cy + s * 0.55);
  g.bezierCurveTo(cx - s * 1.1, cy - s * 0.25, cx - s * 0.5, cy - s * 1.05, cx, cy - s * 0.35);
  g.bezierCurveTo(cx + s * 0.5, cy - s * 1.05, cx + s * 1.1, cy - s * 0.25, cx, cy + s * 0.55);
  g.fill();
  return new THREE.CanvasTexture(c);
}

/* ---------- fireflies ---------- */

const fireflyVert = /* glsl */ `
  attribute float aSeed;
  attribute float aTint;
  uniform float uTime;
  uniform float uDpr;
  varying float vTint;
  varying float vTw;
  void main() {
    vTint = aTint;
    vec3 p = position;
    p.x += sin(uTime * 0.30 + aSeed * 17.0) * 0.7;
    p.z += cos(uTime * 0.23 + aSeed * 29.0) * 0.7;
    p.y += sin(uTime * 0.50 + aSeed * 43.0) * 0.4;
    vTw = 0.55 + 0.45 * sin(uTime * (1.2 + fract(aSeed) * 1.5) + aSeed * 40.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (5.0 + 5.0 * fract(aSeed * 7.0)) * vTw * uDpr * (160.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fireflyFrag = /* glsl */ `
  varying float vTint;
  varying float vTw;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vTw;
    vec3 gold = vec3(1.0, 0.85, 0.45);
    vec3 teal = vec3(0.45, 0.95, 0.85);
    vec3 col = mix(gold, teal, vTint);
    gl_FragColor = vec4(col, a);
  }
`;

function seededPositions(n: number, fn: (i: number, r: number) => [number, number, number], seed = 1) {
  const pos = new Float32Array(n * 3);
  const seedAttr = new Float32Array(n);
  const tint = new Float32Array(n);
  let s = seed;
  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  for (let i = 0; i < n; i++) {
    const r = rnd();
    const [x, y, z] = fn(i, r);
    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;
    seedAttr[i] = rnd() * 100;
    tint[i] = rnd();
  }
  return { pos, seedAttr, tint };
}

export function Fireflies() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const data = useMemo(
    () =>
      seededPositions(42, (i, r) => {
        const a = r * Math.PI * 2;
        const rad = 2.5 + r * 9.5;
        return [Math.cos(a) * rad, 0.4 + r * 1.8, Math.sin(a) * rad];
      }, 1234),
    [],
  );
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uDpr: { value: Math.min(window.devicePixelRatio || 1, 2) } }),
    [],
  );
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.pos, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[data.seedAttr, 1]} />
        <bufferAttribute attach="attributes-aTint" args={[data.tint, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={fireflyVert}
        fragmentShader={fireflyFrag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------- generic rising/falling motes (embers, wish motes) ---------- */

const motesVert = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uDpr;
  uniform float uRise;   // 1 = rising, -1 = falling
  uniform float uSpan;
  varying float vA;
  void main() {
    vec3 p = position;
    float cycle = fract(uTime * (0.16 + 0.10 * fract(aSeed * 3.1)) + aSeed);
    float h = uRise > 0.0 ? cycle : (1.0 - cycle);
    p.y += h * uSpan;
    p.x += sin((uTime + aSeed * 10.0) * 1.7) * 0.14 * cycle;
    p.z += cos((uTime + aSeed * 7.0) * 1.3) * 0.14 * cycle;
    vA = (1.0 - cycle) * smoothstep(0.0, 0.18, cycle);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = 4.5 * uDpr * (160.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const motesFrag = /* glsl */ `
  uniform vec3 uColor;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.08, d) * vA;
    gl_FragColor = vec4(uColor, a);
  }
`;

function Motes({
  position,
  count,
  radius,
  span,
  rise,
  color,
}: {
  position: [number, number, number];
  count: number;
  radius: number;
  span: number;
  rise: boolean;
  color: string;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const data = useMemo(
    () =>
      seededPositions(count, (i, r) => {
        const a = r * Math.PI * 2;
        const rad = r * radius;
        return [Math.cos(a) * rad, 0, Math.sin(a) * rad];
      }, position[0] * 77 + count),
    [count, radius, position],
  );
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDpr: { value: Math.min(window.devicePixelRatio || 1, 2) },
      uRise: { value: rise ? 1 : -1 },
      uSpan: { value: span },
      uColor: { value: new THREE.Color(color) },
    }),
    [rise, span, color],
  );
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return (
    <group position={position}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.pos, 3]} />
          <bufferAttribute attach="attributes-aSeed" args={[data.seedAttr, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={mat}
          vertexShader={motesVert}
          fragmentShader={motesFrag}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function EmberParticles({ position }: { position: [number, number, number] }) {
  return <Motes position={position} count={14} radius={0.35} span={1.6} rise color="#ffb066" />;
}

export function WishMotes({ position }: { position: [number, number, number] }) {
  return <Motes position={position} count={16} radius={1.9} span={2.4} rise={false} color="#b18cff" />;
}

/* ---------- chimney smoke ---------- */

export function Smoke({ offset }: { offset: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const tex = useMemo(() => makeRadialTexture("rgba(190,185,215,0.55)", "rgba(160,155,190,0)"), []);
  const sprites = useMemo(() => {
    return Array.from({ length: 6 }, () => {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.3, depthWrite: false });
      const sp = new THREE.Sprite(mat);
      return sp;
    });
  }, [tex]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    sprites.forEach((sp, i) => {
      const k = (t * 0.2 + i / 6) % 1;
      sp.position.set(Math.sin((t + i * 2) * 0.7) * 0.25 * k, offset[1] + k * 2.4, offset[2] + Math.cos((t + i) * 0.6) * 0.2 * k);
      sp.position.x += offset[0] * 0; // keep local
      sp.scale.setScalar(0.45 + k * 1.15);
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.32;
    });
  });
  return (
    <group position={[offset[0], 0, offset[2]]} ref={group}>
      {sprites.map((sp, i) => (
        <primitive key={i} object={sp} />
      ))}
    </group>
  );
}

/* ---------- drifting sky lanterns ---------- */

export function DriftingLanterns() {
  const refs = useRef<(THREE.Group | null)[]>([]);
  const specs = useMemo(() => {
    let s = 99;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    return Array.from({ length: 6 }, () => {
      const a = rnd() * Math.PI * 2;
      const r = 16 + rnd() * 8;
      return { x: Math.cos(a) * r, z: Math.sin(a) * r, speed: 0.45 + rnd() * 0.4, phase: rnd() * 30, wobble: 0.8 + rnd() };
    });
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    specs.forEach((sp, i) => {
      const g = refs.current[i];
      if (!g) return;
      const k = (t * 0.022 * sp.speed + sp.phase / 30) % 1;
      g.position.set(sp.x + Math.sin(t * 0.3 * sp.wobble + sp.phase) * 1.2, -4 + k * 32, sp.z + Math.cos(t * 0.24 * sp.wobble + sp.phase) * 1.2);
      const fade = Math.min(1, k * 6) * Math.min(1, (1 - k) * 6);
      g.scale.setScalar(0.9 + Math.sin(t + i) * 0.04);
      g.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.material) {
          const m = mesh.material as THREE.MeshStandardMaterial;
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 1.7 * fade;
        }
      });
    });
  });
  return (
    <group>
      {specs.map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <mesh>
            <sphereGeometry args={[0.22, 10, 10]} />
            <meshStandardMaterial color="#ffcf8a" emissive="#ffb35e" emissiveIntensity={1.7} transparent opacity={0.95} />
          </mesh>
          <mesh position={[0, 0.26, 0]} scale={[0.5, 0.35, 0.5]}>
            <coneGeometry args={[0.22, 0.2, 8]} />
            <meshStandardMaterial color="#8a6a4a" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ---------- heart burst (heart emote) ---------- */

export function HeartBurst() {
  const hearts = useRef<(THREE.Sprite | null)[]>([]);
  const lastTrigger = useRef(0);
  const startAt = useRef<number[]>([]);
  const tex = useMemo(heartTexture, []);
  const sprites = useMemo(
    () =>
      Array.from({ length: 7 }, () => {
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false });
        const sp = new THREE.Sprite(mat);
        sp.visible = false;
        return sp;
      }),
    [tex],
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (fx.heartAt !== lastTrigger.current) {
      lastTrigger.current = fx.heartAt;
      const now = t;
      startAt.current = sprites.map((_, i) => now + i * 0.09);
      sprites.forEach((sp) => (sp.visible = true));
    }
    sprites.forEach((sp, i) => {
      if (!sp.visible) return;
      const k = (t - startAt.current[i]) / 1.6;
      if (k >= 1) {
        sp.visible = false;
        (sp.material as THREE.SpriteMaterial).opacity = 0;
        return;
      }
      const jitter = Math.sin(i * 39.7) * 0.5;
      sp.position.set(
        playerState.pos.x + jitter + Math.sin(t * 2 + i) * 0.12,
        playerState.pos.y + 2.05 + k * 1.25,
        playerState.pos.z + Math.cos(i * 17.3) * 0.4,
      );
      sp.scale.setScalar(0.2 + k * 0.22);
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.95;
    });
  });
  return (
    <group>
      {sprites.map((sp, i) => (
        <primitive key={i} object={sp} />
      ))}
    </group>
  );
}
