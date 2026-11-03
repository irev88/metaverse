"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fx, playerState } from "@/lib/input";
import { ISLANDS } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { skyState } from "./Sky";

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

/** Soft radial glow — use as `map` on any sprite so halos are never squares. */
export function glowTexture() {
  return makeRadialTexture("rgba(255,255,255,1)", "rgba(255,255,255,0)");
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

function petalTexture(color: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  g.fillStyle = color;
  g.shadowColor = color;
  g.shadowBlur = 8;
  g.beginPath();
  g.ellipse(32, 32, 14, 24, 0.5, 0, Math.PI * 2);
  g.fill();
  return new THREE.CanvasTexture(c);
}

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

/* ---------- fireflies (spread across the archipelago) ---------- */

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

export function Fireflies() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const data = useMemo(
    () =>
      seededPositions(78, (i, r) => {
        const isl = ISLANDS[i % ISLANDS.length];
        const a = r * Math.PI * 2;
        const rad = Math.sqrt(r) * (isl.r - 2);
        return [isl.c[0] + Math.cos(a) * rad, 0.4 + r * 2.0, isl.c[1] + Math.sin(a) * rad];
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
  uniform float uRise;
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

export function WishMotes({
  position,
  radius = 1.9,
  count = 16,
  span = 2.6,
  color = "#b18cff",
}: {
  position: [number, number, number];
  radius?: number;
  count?: number;
  span?: number;
  color?: string;
}) {
  return <Motes position={position} count={count} radius={radius} span={span} rise={false} color={color} />;
}

/* ---------- chimney smoke ---------- */

export function Smoke({ offset }: { offset: [number, number, number] }) {
  const tex = useMemo(() => makeRadialTexture("rgba(190,185,215,0.55)", "rgba(160,155,190,0)"), []);
  const sprites = useMemo(() => {
    return Array.from({ length: 6 }, () => {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.3, depthWrite: false });
      return new THREE.Sprite(mat);
    });
  }, [tex]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    sprites.forEach((sp, i) => {
      const k = (t * 0.2 + i / 6) % 1;
      sp.position.set(Math.sin((t + i * 2) * 0.7) * 0.25 * k, offset[1] + k * 2.4, offset[2] + Math.cos((t + i) * 0.6) * 0.2 * k);
      sp.scale.setScalar(0.45 + k * 1.15);
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.32;
    });
  });
  return (
    <group position={[offset[0], 0, offset[2]]}>
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
    return Array.from({ length: 8 }, () => {
      const a = rnd() * Math.PI * 2;
      const r = 18 + rnd() * 16;
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

/* ---------- falling petals (everbloom) ---------- */

export function Petals({ center }: { center: [number, number] }) {
  const tex = useMemo(() => petalTexture("#ffa8c8"), []);
  const specs = useMemo(() => {
    let s = 4242;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    return Array.from({ length: 34 }, () => {
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * 8.5;
      return { x: center[0] + Math.cos(a) * r, z: center[1] + Math.sin(a) * r, phase: rnd() * 40, speed: 0.55 + rnd() * 0.5, sway: 0.4 + rnd() * 0.5, scale: 0.16 + rnd() * 0.12 };
    });
  }, [center]);
  return <PetalMotion specs={specs} tex={tex} center={center} />;
}

function PetalMotion({
  specs,
  tex,
  center,
}: {
  specs: { x: number; z: number; phase: number; speed: number; sway: number; scale: number }[];
  tex: THREE.CanvasTexture;
  center: [number, number];
}) {
  const refs = useRef<(THREE.Sprite | null)[]>([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = specs[i];
      const k = (t * 0.09 * s.speed + s.phase / 40) % 1;
      sp.position.set(
        s.x + Math.sin(t * s.speed + s.phase) * s.sway,
        3.6 - k * 4.2,
        s.z + Math.cos(t * s.speed * 0.8 + s.phase) * s.sway,
      );
      sp.material.rotation = t * 0.8 + s.phase;
      (sp.material as THREE.SpriteMaterial).opacity = Math.min(1, k * 5) * Math.min(1, (1 - k) * 4) * 0.85;
    });
  });
  return (
    <group>
      {specs.map((_, i) => (
        <sprite
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={[center[0], 2, center[1]]}
          scale={[specs[i].scale, specs[i].scale, 1]}
        >
          <spriteMaterial map={tex} transparent depthWrite={false} />
        </sprite>
      ))}
    </group>
  );
}

/* ---------- butterflies (everbloom) ---------- */

function Butterfly({ color, center, phase }: { color: string; center: [number, number]; phase: number }) {
  const group = useRef<THREE.Group>(null);
  const wingL = useRef<THREE.Group>(null);
  const wingR = useRef<THREE.Group>(null);
  const prev = useMemo(() => new THREE.Vector3(), []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    const nx = center[0] + Math.sin(t * 0.32 + phase) * 4.2 + Math.sin(t * 0.9 + phase * 2) * 0.8;
    const nz = center[1] + Math.cos(t * 0.27 + phase * 1.3) * 3.6 + Math.cos(t * 0.8 + phase) * 0.7;
    const ny = 1.1 + Math.sin(t * 0.75 + phase * 2.1) * 0.55;
    prev.copy(g.position);
    g.position.set(nx, ny, nz);
    const dx = nx - prev.x;
    const dz = nz - prev.z;
    if (Math.abs(dx) + Math.abs(dz) > 1e-5) g.rotation.y = Math.atan2(dx, dz);
    const flap = Math.sin(t * 11 + phase * 5) * 0.85;
    if (wingL.current) wingL.current.rotation.z = 0.35 + flap;
    if (wingR.current) wingR.current.rotation.z = -0.35 - flap;
  });
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.016, 0.09, 3, 6]} />
        <meshStandardMaterial color="#3d2f4e" roughness={1} />
      </mesh>
      <group ref={wingL} position={[-0.01, 0.05, 0]}>
        <mesh position={[-0.09, 0, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.19, 0.13]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} side={THREE.DoubleSide} transparent opacity={0.95} />
        </mesh>
      </group>
      <group ref={wingR} position={[0.01, 0.05, 0]}>
        <mesh position={[0.09, 0, 0]}>
          <planeGeometry args={[0.19, 0.13]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} side={THREE.DoubleSide} transparent opacity={0.95} />
        </mesh>
      </group>
    </group>
  );
}

export function Butterflies() {
  return (
    <group>
      <Butterfly color="#ff9ec7" center={[52, -6]} phase={0} />
      <Butterfly color="#ffd27a" center={[50, -8]} phase={2.4} />
      <Butterfly color="#c4b5fd" center={[54, -5]} phase={4.1} />
      <Butterfly color="#7ee8d8" center={[51, -10]} phase={1.2} />
      <Butterfly color="#ff9ec7" center={[2.5, 4.5]} phase={3.3} />
      <Butterfly color="#fff3f5" center={[-2, 6]} phase={5.0} />
    </group>
  );
}

/* ---------- waterfall (drifting islets) ---------- */

export function Waterfall({ offset }: { offset: [number, number] }) {
  const tex = useMemo(() => makeRadialTexture("rgba(200,230,255,0.9)", "rgba(160,200,255,0)"), []);
  const sprites = useMemo(
    () =>
      Array.from({ length: 12 }, () => new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }))),
    [tex],
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    sprites.forEach((sp, i) => {
      const k = (t * 0.5 + i / 12) % 1;
      sp.position.set(offset[0] + Math.sin((t + i * 3) * 2.2) * 0.07, offset[1] - k * 6.5, Math.cos((t + i) * 1.7) * 0.07);
      sp.scale.setScalar(0.3 - k * 0.12);
      (sp.material as THREE.SpriteMaterial).opacity = (1 - k) * 0.55;
    });
  });
  return (
    <group>
      {sprites.map((sp, i) => (
        <primitive key={i} object={sp} />
      ))}
      {/* soft glow at the base */}
      <sprite position={[offset[0], offset[1] - 6.8, 0]} scale={[1.6, 1.0, 1]}>
        <spriteMaterial map={tex} transparent opacity={0.25} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
    </group>
  );
}

/* ---------- running sparkle trail ---------- */

const TRAIL_COLORS = ["#ffe9b0", "#a5f3e8", "#ff9ec7", "#fff6e0"];

export function SparkleTrail() {
  const tex = useMemo(glowTexture, []);
  const sprites = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => {
        const mat = new THREE.SpriteMaterial({ map: tex, color: TRAIL_COLORS[i % TRAIL_COLORS.length], transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
        const sp = new THREE.Sprite(mat);
        sp.visible = false;
        return sp;
      }),
    [tex],
  );
  const st = useRef({ emit: 0, next: 0 });
  const life = useMemo(() => new Float32Array(18).fill(1), []);
  const start = useMemo(() => new Float32Array(18), []);
  const basePos = useMemo(() => Array.from({ length: 18 }, () => new THREE.Vector3()), []);
  const idx = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const s = st.current;
    // emit while moving; faster stream when running
    const rate = playerState.speed > 5.5 ? 0.035 : 0.085;
    if (playerState.moving && t >= s.next) {
      s.next = t + rate;
      const sp = sprites[idx.current];
      const i = idx.current;
      idx.current = (idx.current + 1) % sprites.length;
      basePos[i].set(
        playerState.pos.x + (Math.random() - 0.5) * 0.5,
        playerState.pos.y + 0.08 + Math.random() * 0.15,
        playerState.pos.z + (Math.random() - 0.5) * 0.5,
      );
      start[i] = t;
      life[i] = 0;
      sp.visible = true;
    }
    sprites.forEach((sp, i) => {
      if (!sp.visible) return;
      const k = (t - start[i]) / 0.75;
      if (k >= 1) {
        sp.visible = false;
        return;
      }
      sp.position.set(basePos[i].x, basePos[i].y + k * 0.45, basePos[i].z);
      sp.scale.setScalar(0.09 + (1 - k) * 0.09);
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.85;
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

/* ---------- birds crossing the sky ---------- */

function Bird({ phase, radius, height, speed }: { phase: number; radius: number; height: number; speed: number }) {
  const group = useRef<THREE.Group>(null);
  const wingL = useRef<THREE.Mesh>(null);
  const wingR = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    const ang = phase + t * speed;
    const x = Math.cos(ang) * radius;
    const z = Math.sin(ang) * radius - 30;
    g.position.set(x, height + Math.sin(t * 0.7 + phase) * 1.5, z);
    g.rotation.y = -ang + (speed > 0 ? Math.PI : 0);
    const flap = Math.sin(t * 6.5 + phase * 3) * 0.5;
    if (wingL.current) wingL.current.rotation.z = flap;
    if (wingR.current) wingR.current.rotation.z = -flap;
  });
  return (
    <group ref={group} scale={2.2}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.03, 0.16, 3, 6]} />
        <meshBasicMaterial color="#15132a" />
      </mesh>
      <mesh ref={wingL} position={[0.12, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.26, 0.1]} />
        <meshBasicMaterial color="#15132a" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={wingR} position={[-0.12, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.26, 0.1]} />
        <meshBasicMaterial color="#15132a" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function Birds() {
  return (
    <group>
      <Bird phase={0.6} radius={62} height={30} speed={0.06} />
      <Bird phase={2.4} radius={70} height={35} speed={0.05} />
      <Bird phase={4.2} radius={66} height={27} speed={-0.055} />
      <Bird phase={5.5} radius={78} height={33} speed={0.045} />
    </group>
  );
}

/* ---------- ground mist — knee-high, drifting, catches the light ---------- */

export function GroundMist() {
  const tex = useMemo(glowTexture, []);
  const refs = useRef<(THREE.Sprite | null)[]>([]);
  const specs = useMemo(() => {
    let s = 311;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    const out: { x: number; z: number; y: number; scale: number; speed: number; phase: number }[] = [];
    let guard = 0;
    while (out.length < 16 && guard < 400) {
      guard++;
      const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * (isl.r - 3);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      out.push({ x, z, y: h + 0.45, scale: 6 + rnd() * 9, speed: 0.1 + rnd() * 0.16, phase: rnd() * 20 });
    }
    return out;
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = specs[i];
      sp.position.x = s.x + Math.sin(t * s.speed + s.phase) * 2.2;
      sp.position.z = s.z + Math.cos(t * s.speed * 0.8 + s.phase) * 1.6;
      const warm = 0.35 + 0.65 * skyState.phase;
      const mat = sp.material as THREE.SpriteMaterial;
      mat.opacity = (0.05 + Math.sin(t * 0.3 + s.phase) * 0.015) * (0.8 + 0.5 * skyState.phase);
      mat.color.setRGB(0.75 + warm * 0.25, 0.78 + warm * 0.14, 0.85 - warm * 0.12);
    });
  });
  return (
    <group>
      {specs.map((s, i) => (
        <sprite
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={[s.x, s.y, s.z]}
          scale={[s.scale, s.scale * 0.32, 1]}
        >
          <spriteMaterial map={tex} transparent opacity={0.05} depthWrite={false} />
        </sprite>
      ))}
    </group>
  );
}

/* ---------- floating pollen motes — faint warm specks ---------- */

const pollenVert = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uDpr;
  varying float vA;
  void main() {
    vec3 p = position;
    p.x += sin(uTime * 0.16 + aSeed * 31.0) * 0.9;
    p.y += sin(uTime * 0.11 + aSeed * 17.0) * 0.45;
    p.z += cos(uTime * 0.13 + aSeed * 23.0) * 0.9;
    vA = 0.35 + 0.3 * sin(uTime * 0.7 + aSeed * 40.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = 3.0 * uDpr * (120.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pollenFrag = /* glsl */ `
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.1, d) * vA;
    gl_FragColor = vec4(1.0, 0.92, 0.75, a);
  }
`;

export function Pollen() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const data = useMemo(() => {
    const pos: number[] = [];
    const seeds: number[] = [];
    let s = 613;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    for (let i = 0; i < 150; i++) {
      const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * (isl.r - 2);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      pos.push(x, h + 0.5 + rnd() * 1.8, z);
      seeds.push(rnd() * 100);
    }
    return { pos: new Float32Array(pos), seeds: new Float32Array(seeds) };
  }, []);
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
        <bufferAttribute attach="attributes-aSeed" args={[data.seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        vertexShader={pollenVert}
        fragmentShader={pollenFrag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
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
