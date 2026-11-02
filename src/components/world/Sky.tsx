"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "@/lib/store";

/* ================= helpers ================= */

/** Shared time-of-day phase (0 = deep night, 1 = dreamy dawn). Slow 5-min drift. */
export const skyState = { phase: 0 };

let seedState = 77;
function srand() {
  seedState = (seedState * 16807) % 2147483647;
  return (seedState - 1) / 2147483646;
}
function gauss() {
  return (srand() + srand() + srand() - 1.5) / 1.5;
}

/* ================= sky dome ================= */

const domeVert = /* glsl */ `
  varying float vH;
  void main() {
    vH = normalize(position).y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const domeFrag = /* glsl */ `
  uniform float uPhase;
  varying float vH;
  void main() {
    vec3 zenith  = mix(vec3(0.008, 0.011, 0.042), vec3(0.055, 0.045, 0.135), uPhase);
    vec3 mid     = mix(vec3(0.035, 0.045, 0.120), vec3(0.115, 0.085, 0.215), uPhase);
    vec3 horizon = mix(vec3(0.070, 0.085, 0.205), vec3(0.29, 0.19, 0.29), uPhase);
    vec3 glow    = mix(vec3(0.075, 0.115, 0.185), vec3(0.33, 0.21, 0.23), uPhase);
    vec3 c = mix(mid, zenith, smoothstep(0.05, 0.72, vH));
    c = mix(horizon, c, smoothstep(-0.02, 0.26, vH));
    c += glow * smoothstep(0.22, 0.0, abs(vH - 0.045)) * 0.55;
    gl_FragColor = vec4(c, 1.0);
  }
`;

function SkyDome() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uPhase: { value: 0 } }), []);
  useFrame(() => {
    if (mat.current) mat.current.uniforms.uPhase.value = skyState.phase;
  });
  return (
    <mesh renderOrder={-30}>
      <sphereGeometry args={[420, 32, 20]} />
      <shaderMaterial ref={mat} vertexShader={domeVert} fragmentShader={domeFrag} uniforms={uniforms} side={THREE.BackSide} depthWrite={false} fog={false} />
    </mesh>
  );
}

/* ================= milky way ================= */

function makeGalaxyTexture(): THREE.CanvasTexture {
  const w = 2048;
  const h = 1024;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  seedState = 4242;

  const bandAt = (u: number) => 0.5 + 0.1 * Math.sin(u * Math.PI * 2 + 0.7) + 0.045 * Math.sin(u * Math.PI * 4.6 + 2.0);

  // nebula blobs along the band
  const blob = (x: number, y: number, r: number, color: string, alpha: number) => {
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, color);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.globalAlpha = alpha;
    g.fillStyle = grad;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  };
  const tints = ["255,255,255", "207,224,255", "230,217,255", "255,217,232", "217,255,242", "255,231,200"];
  for (let i = 0; i < 900; i++) {
    const u = srand();
    const v = bandAt(u) + gauss() * 0.075;
    const coreBoost = u > 0.16 && u < 0.42 ? 1.6 : 1;
    blob(
      u * w,
      v * h,
      (18 + srand() * 85) * coreBoost,
      `rgba(${tints[Math.floor(srand() * tints.length)]},1)`,
      (0.012 + srand() * 0.05) * coreBoost,
    );
  }
  // dust lanes — dark silhouettes inside the band
  for (let i = 0; i < 260; i++) {
    const u = srand();
    const v = bandAt(u) + gauss() * 0.028;
    blob(u * w, v * h, 12 + srand() * 46, "rgba(16,10,34,1)", 0.1 + srand() * 0.14);
  }
  // stars, dense near the band + sparse field
  for (let i = 0; i < 2600; i++) {
    const nearBand = srand() < 0.72;
    const u = srand();
    const v = nearBand ? bandAt(u) + gauss() * 0.16 : srand();
    const size = nearBand ? 0.5 + srand() * 1.5 : 0.4 + srand() * 1.1;
    const a = 0.25 + srand() * 0.65;
    const tint = srand();
    const col = tint < 0.6 ? "255,255,255" : tint < 0.82 ? "200,218,255" : "255,232,190";
    g.globalAlpha = a;
    g.fillStyle = `rgb(${col})`;
    g.fillRect(u * w, v * h, size, size);
  }
  // a few bright cluster stars with glow
  for (let i = 0; i < 26; i++) {
    const u = srand();
    const v = bandAt(u) + gauss() * 0.1;
    blob(u * w, v * h, 5 + srand() * 7, "rgba(235,242,255,1)", 0.85);
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function Galaxy() {
  const tex = useMemo(makeGalaxyTexture, []);
  const ref = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.0016;
    if (matRef.current) matRef.current.opacity = 0.92 - skyState.phase * 0.52;
  });
  return (
    <mesh ref={ref} renderOrder={-20} rotation={[0.16, 0, 0.5]}>
      <sphereGeometry args={[380, 48, 32]} />
      <meshBasicMaterial ref={matRef} map={tex} transparent side={THREE.BackSide} depthWrite={false} fog={false} opacity={0.92} />
    </mesh>
  );
}

/* ================= flare stars (diffraction spikes) ================= */

function makeFlareTexture(): THREE.CanvasTexture {
  const s = 128;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.18, "rgba(255,255,255,0.55)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.08)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  g.globalCompositeOperation = "lighter";
  for (const [dx, dy, lw] of [
    [1, 0, 2.2],
    [0, 1, 2.2],
    [0.72, 0.72, 1.1],
    [-0.72, 0.72, 1.1],
  ] as const) {
    const lg = g.createLinearGradient(s / 2 - dx * s * 0.5, s / 2 - dy * s * 0.5, s / 2 + dx * s * 0.5, s / 2 + dy * s * 0.5);
    lg.addColorStop(0, "rgba(255,255,255,0)");
    lg.addColorStop(0.5, "rgba(255,255,255,0.85)");
    lg.addColorStop(1, "rgba(255,255,255,0)");
    g.strokeStyle = lg;
    g.lineWidth = lw;
    g.beginPath();
    g.moveTo(s / 2 - dx * s * 0.5, s / 2 - dy * s * 0.5);
    g.lineTo(s / 2 + dx * s * 0.5, s / 2 + dy * s * 0.5);
    g.stroke();
  }
  return new THREE.CanvasTexture(c);
}

function FlareStars() {
  const tex = useMemo(makeFlareTexture, []);
  const sprites = useRef<(THREE.Sprite | null)[]>([]);
  const specs = useMemo(() => {
    seedState = 999;
    const cols = ["#cfe0ff", "#fff3d9", "#ffd9d9", "#d9ffef", "#e6dbff"];
    return Array.from({ length: 9 }, () => {
      const az = srand() * Math.PI * 2;
      const el = 0.18 + srand() * 0.55;
      const r = 340;
      return {
        pos: [Math.cos(az) * Math.cos(el) * r, Math.sin(el) * r, Math.sin(az) * Math.cos(el) * r] as [number, number, number],
        size: 9 + srand() * 12,
        color: cols[Math.floor(srand() * cols.length)],
        f: 0.4 + srand() * 1.2,
        p: srand() * 10,
      };
    });
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    sprites.current.forEach((sp, i) => {
      if (!sp) return;
      const s = specs[i];
      const k = 0.55 + 0.45 * Math.sin(t * s.f + s.p);
      sp.scale.setScalar(s.size * (0.85 + 0.3 * k));
      (sp.material as THREE.SpriteMaterial).opacity = 0.35 + 0.6 * k;
    });
  });
  return (
    <group>
      {specs.map((s, i) => (
        <sprite
          key={i}
          ref={(el) => {
            sprites.current[i] = el;
          }}
          position={s.pos}
        >
          <spriteMaterial map={tex} color={s.color} transparent depthWrite={false} blending={THREE.AdditiveBlending} fog={false} />
        </sprite>
      ))}
    </group>
  );
}

/* ================= Saturn ================= */

function makeSaturnTexture(): THREE.CanvasTexture {
  const w = 512;
  const h = 256;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  seedState = 611;
  const palette = ["#d9c8a0", "#ccb386", "#e4d6b2", "#c2a97e", "#dcccaa", "#cbb489"];
  for (let y = 0; y < h; y++) {
    const k = y / h;
    const idx = Math.floor(k * 14 + 2.4 * Math.sin(k * 9)) % palette.length;
    g.fillStyle = palette[(idx + palette.length) % palette.length];
    g.fillRect(0, y, w, 1);
  }
  // soft band streaks
  for (let i = 0; i < 140; i++) {
    const y = srand() * h;
    g.globalAlpha = 0.05 + srand() * 0.09;
    g.fillStyle = srand() < 0.5 ? "#b89a6d" : "#efe3c2";
    g.fillRect(0, y, w, 1 + srand() * 3);
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeRingTexture(): THREE.CanvasTexture {
  const s = 1024;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const cx = s / 2;
  seedState = 733;
  const inner = 205;
  const outer = 505;
  for (let r = inner; r < outer; r += 1.5) {
    const k = (r - inner) / (outer - inner);
    let a = 0.16 + 0.5 * Math.abs(Math.sin(k * 26 + 1.2) * Math.sin(k * 9.2));
    if (k > 0.555 && k < 0.60) a *= 0.08; // Cassini division
    if (k > 0.82 && k < 0.845) a *= 0.25; // Encke-ish gap
    if (k < 0.06) a *= 0.35;
    if (k > 0.96) a *= 0.5 * (1 - (k - 0.96) / 0.04);
    const shade = 205 + Math.floor(35 * Math.sin(k * 18));
    g.strokeStyle = `rgba(${shade},${shade - 22},${shade - 58},${Math.min(a, 0.75)})`;
    g.lineWidth = 1.6;
    g.beginPath();
    g.arc(cx, cx, r, 0, Math.PI * 2);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function Saturn() {
  const planet = useRef<THREE.Mesh>(null);
  const moonPivot = useRef<THREE.Group>(null);
  const tex = useMemo(makeSaturnTexture, []);
  const ring = useMemo(makeRingTexture, []);
  useFrame((state, dt) => {
    if (planet.current) planet.current.rotation.y += dt * 0.02;
    if (moonPivot.current) moonPivot.current.rotation.y = state.clock.elapsedTime * 0.06;
  });
  return (
    <group position={[-150, 82, -300]}>
      <mesh ref={planet}>
        <sphereGeometry args={[30, 48, 48]} />
        <meshStandardMaterial map={tex} emissive="#7a6844" emissiveIntensity={0.32} roughness={0.95} fog={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[40, 66, 160]} />
        <meshBasicMaterial map={ring} transparent side={THREE.DoubleSide} depthWrite={false} fog={false} />
      </mesh>
      <group ref={moonPivot}>
        <mesh position={[84, 6, 0]}>
          <sphereGeometry args={[2.2, 12, 12]} />
          <meshStandardMaterial color="#cfd6e4" emissive="#9aa6c0" emissiveIntensity={0.5} fog={false} />
        </mesh>
      </group>
    </group>
  );
}

/* ================= the Moon ================= */

function makeMoonTexture(): THREE.CanvasTexture {
  const w = 1024;
  const h = 512;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  seedState = 1969;
  g.fillStyle = "#d3d4de";
  g.fillRect(0, 0, w, h);
  // maria — dark seas
  const blob = (x: number, y: number, r: number, col: string, a: number) => {
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, col);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.globalAlpha = a;
    g.fillStyle = grad;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  };
  const maria = [
    [300, 170, 120],
    [430, 130, 90],
    [360, 250, 100],
    [520, 200, 80],
    [250, 260, 70],
    [610, 150, 60],
    [470, 300, 66],
  ];
  maria.forEach(([x, y, r]) => blob(x, y, r, "#9d9eb0", 0.6));
  // craters with rim light
  for (let i = 0; i < 110; i++) {
    const x = srand() * w;
    const y = srand() * h;
    const r = 3 + srand() * 20;
    g.globalAlpha = 0.55;
    g.strokeStyle = "#e6e7ef";
    g.lineWidth = 1.6;
    g.beginPath();
    g.arc(x, y, r, Math.PI * 0.9, Math.PI * 1.9);
    g.stroke();
    g.strokeStyle = "#8f90a2";
    g.beginPath();
    g.arc(x, y, r, Math.PI * -0.1, Math.PI * 0.9);
    g.stroke();
    g.globalAlpha = 0.3;
    g.fillStyle = "#b9bac8";
    g.beginPath();
    g.arc(x, y, r * 0.55, 0, Math.PI * 2);
    g.fill();
  }
  // fine speckle
  for (let i = 0; i < 420; i++) {
    g.globalAlpha = 0.08 + srand() * 0.1;
    g.fillStyle = srand() < 0.5 ? "#ffffff" : "#7c7d92";
    g.fillRect(srand() * w, srand() * h, 1.6, 1.6);
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeHaloTexture(): THREE.CanvasTexture {
  const s = 256;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grad.addColorStop(0, "rgba(230,235,255,0.5)");
  grad.addColorStop(0.4, "rgba(210,220,255,0.16)");
  grad.addColorStop(1, "rgba(200,210,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

function Moon() {
  const tex = useMemo(makeMoonTexture, []);
  const halo = useMemo(makeHaloTexture, []);
  const haloRef = useRef<THREE.Sprite>(null);
  useFrame((state) => {
    if (haloRef.current) {
      const k = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      haloRef.current.scale.setScalar(64 * k);
    }
  });
  return (
    <group position={[185, 112, -250]}>
      <mesh>
        <sphereGeometry args={[14, 48, 48]} />
        <meshBasicMaterial map={tex} fog={false} />
      </mesh>
      <sprite ref={haloRef} scale={[64, 64, 1]}>
        <spriteMaterial map={halo} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.6} fog={false} />
      </sprite>
    </group>
  );
}

/* ================= comet ================= */

function makeCometTailTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 32;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 0, 256, 0);
  grad.addColorStop(0, "rgba(235,245,255,0.95)");
  grad.addColorStop(0.35, "rgba(190,210,255,0.4)");
  grad.addColorStop(1, "rgba(160,190,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 32);
  return new THREE.CanvasTexture(c);
}

function Comet() {
  const group = useRef<THREE.Group>(null);
  const tailA = useRef<THREE.Mesh>(null);
  const tailB = useRef<THREE.Mesh>(null);
  const head = useRef<THREE.Sprite>(null);
  const tex = useMemo(makeCometTailTexture, []);
  const halo = useMemo(makeHaloTexture, []);
  const st = useRef({ active: false, nextAt: 14, t: 0 });
  const A = useMemo(() => new THREE.Vector3(-280, 150, -310), []);
  const B = useMemo(() => new THREE.Vector3(270, 60, -90), []);
  const dir = useMemo(() => new THREE.Vector3().subVectors(B, A).normalize(), [A, B]);

  useFrame((state, dt) => {
    const s = st.current;
    const g = group.current;
    if (!g) return;
    const time = state.clock.elapsedTime;
    if (!s.active) {
      if (time >= s.nextAt) {
        s.active = true;
        s.t = 0;
        g.visible = true;
      }
      return;
    }
    s.t += dt;
    const k = s.t / 26;
    if (k >= 1) {
      s.active = false;
      g.visible = false;
      s.nextAt = time + 55 + Math.random() * 60;
      return;
    }
    g.position.lerpVectors(A, B, k);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    const fade = Math.sin(k * Math.PI);
    if (head.current) (head.current.material as THREE.SpriteMaterial).opacity = fade;
    if (tailA.current) (tailA.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.85;
    if (tailB.current) (tailB.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.4;
  });

  return (
    <group ref={group} visible={false}>
      <sprite ref={head} scale={[10, 10, 1]}>
        <spriteMaterial map={halo} transparent depthWrite={false} blending={THREE.AdditiveBlending} fog={false} />
      </sprite>
      <mesh ref={tailA} position={[0, 0, -34]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 68]} />
        <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} opacity={0.8} fog={false} />
      </mesh>
      <mesh ref={tailB} position={[0, 0, -55]} rotation={[Math.PI / 2, 0, 0.12]}>
        <planeGeometry args={[13, 110]} />
        <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} opacity={0.35} fog={false} />
      </mesh>
    </group>
  );
}

/* ================= horizon wisps (soft clouds) ================= */

function makeCloudTexture(): THREE.CanvasTexture {
  const w = 512;
  const h = 256;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  seedState = 55;
  for (let i = 0; i < 26; i++) {
    const x = 60 + srand() * (w - 120);
    const y = h / 2 + gauss() * 34;
    const r = 34 + srand() * 60;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, "rgba(190,200,235,0.16)");
    grad.addColorStop(1, "rgba(190,200,235,0)");
    g.fillStyle = grad;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  return new THREE.CanvasTexture(c);
}

function CloudWisps() {
  const tex = useMemo(makeCloudTexture, []);
  const refs = useRef<(THREE.Sprite | null)[]>([]);
  const specs = useMemo(() => {
    seedState = 91;
    return Array.from({ length: 6 }, (_, i) => ({
      x: -160 + i * 62 + srand() * 30,
      y: 16 + srand() * 22,
      z: -230 + srand() * 90,
      sx: 90 + srand() * 70,
      speed: 0.5 + srand() * 0.7,
    }));
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = specs[i];
      sp.position.x = s.x + ((t * s.speed) % 90);
      if (sp.position.x > 200) sp.position.x = -200;
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
          scale={[s.sx, s.sx * 0.28, 1]}
        >
          <spriteMaterial map={tex} transparent depthWrite={false} opacity={0.5} fog={false} />
        </sprite>
      ))}
    </group>
  );
}

/* ================= aurora ================= */

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
  uniform float uSeed;
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
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float t = uTime * 0.05 + uSeed;
    float sway = fbm(vec2(vUv.x * 3.2 + t, vUv.y * 1.3 - t * 0.45));
    float band = smoothstep(0.30, 0.66, sway + 0.20 * vUv.y);
    float rays = fbm(vec2(vUv.x * 24.0 - t * 2.2, vUv.y * 1.6 + uSeed));
    rays = pow(rays, 1.7);
    band *= 0.35 + 1.05 * rays;
    band *= smoothstep(0.0, 0.14, vUv.y) * smoothstep(1.0, 0.42, vUv.y);
    float pulse = 0.85 + 0.15 * sin(uTime * 0.35 + uSeed * 3.0);
    vec3 teal = vec3(0.32, 0.95, 0.78);
    vec3 green = vec3(0.55, 0.98, 0.60);
    vec3 violet = vec3(0.62, 0.50, 0.98);
    vec3 rose = vec3(0.98, 0.55, 0.72);
    float g = clamp(vUv.y * 1.6 - 0.1, 0.0, 1.0);
    vec3 col = mix(mix(rose, teal, g), green, 0.25 * sin(t * 3.0 + vUv.x * 5.0) + 0.25);
    col = mix(col, violet, smoothstep(0.55, 1.0, vUv.y) * 0.7);
    gl_FragColor = vec4(col * band * uIntensity * pulse, band * uIntensity * pulse);
  }
`;

function Aurora({
  position,
  rotation,
  scale,
  intensity,
  seed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  intensity: number;
  seed: number;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const base = useRef(intensity);
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uIntensity: { value: intensity }, uSeed: { value: seed } }),
    [intensity, seed],
  );
  useFrame((state) => {
    if (mat.current) {
      mat.current.uniforms.uTime.value = state.clock.elapsedTime;
      mat.current.uniforms.uIntensity.value = base.current * (0.85 + 0.45 * skyState.phase);
    }
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

/* ================= moonbeams (fake volumetric light) ================= */

function makeBeamTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, "rgba(215,225,255,0.5)");
  grad.addColorStop(0.55, "rgba(205,215,255,0.16)");
  grad.addColorStop(1, "rgba(200,210,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 256);
  // soften the left/right edges
  const fade = g.createLinearGradient(0, 0, 64, 0);
  fade.addColorStop(0, "rgba(0,0,0,1)");
  fade.addColorStop(0.25, "rgba(0,0,0,0)");
  fade.addColorStop(0.75, "rgba(0,0,0,0)");
  fade.addColorStop(1, "rgba(0,0,0,1)");
  g.globalCompositeOperation = "destination-out";
  g.fillStyle = fade;
  g.fillRect(0, 0, 64, 256);
  return new THREE.CanvasTexture(c);
}

function Moonbeams() {
  const tex = useMemo(makeBeamTexture, []);
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const specs = useMemo(
    () => [
      { pos: [26, 62, -38] as [number, number, number], w: 16, f: 0.11, p: 0 },
      { pos: [58, 58, -66] as [number, number, number], w: 11, f: 0.09, p: 2.1 },
      { pos: [-6, 66, -80] as [number, number, number], w: 13, f: 0.13, p: 4.2 },
    ],
    [],
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((m, i) => {
      if (!m) return;
      const s = specs[i];
      (m.material as THREE.MeshBasicMaterial).opacity = (0.05 + Math.sin(t * s.f + s.p) * 0.025) * (0.7 + 0.5 * skyState.phase);
    });
  });
  return (
    <group>
      {specs.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={s.pos}
          rotation={[0.1 * i, 0.15 - i * 0.1, -0.52]}
        >
          <planeGeometry args={[s.w, 170]} />
          <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} opacity={0.05} fog={false} />
        </mesh>
      ))}
    </group>
  );
}

/* ================= shooting stars ================= */

function ShootingStar({ firstDelay, period }: { firstDelay: number; period: number }) {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const state = useRef({ active: false, nextAt: firstDelay, t: 0, from: new THREE.Vector3(), dir: new THREE.Vector3() });

  useFrame((clock, dt) => {
    const s = state.current;
    const g = group.current;
    if (!g) return;
    const time = clock.clock.elapsedTime;

    if (!s.active) {
      if (time >= s.nextAt) {
        s.active = true;
        s.t = 0;
        s.from.set(-140 + Math.random() * 80, 95 + Math.random() * 55, -180 + Math.random() * 90);
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
      s.nextAt = time + period * (0.6 + Math.random() * 0.9);
      return;
    }
    g.position.copy(s.from).addScaledVector(s.dir, s.t * 95);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), s.dir);
    if (mat.current) mat.current.opacity = Math.sin(k * Math.PI) * 0.95;
  });

  return (
    <group ref={group} visible={false}>
      <mesh>
        <boxGeometry args={[8, 0.14, 0.14]} />
        <meshBasicMaterial ref={mat} color="#ffffff" transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} fog={false} />
      </mesh>
      <mesh position={[-7, 0, 0]}>
        <boxGeometry args={[11, 0.05, 0.05]} />
        <meshBasicMaterial color="#a5b4fc" transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} fog={false} />
      </mesh>
    </group>
  );
}

/* ================= exported sky ================= */

export function Sky() {
  const quality = useStore((s) => s.quality);
  const rich = quality === "rich";

  useFrame((state, dt) => {
    // advance the slow dusk⇄dawn cycle (5-minute loop)
    skyState.phase = 0.5 + 0.5 * Math.sin((state.clock.elapsedTime * Math.PI * 2) / 300 - Math.PI / 2);
  });

  return (
    <>
      <SkyDome />
      <Galaxy />
      <Stars radius={300} depth={70} count={rich ? 8000 : 3800} factor={5.2} saturation={0.4} fade speed={0.5} />
      <FlareStars />
      <Saturn />
      <Moon />
      <Comet />
      <CloudWisps />
      {rich && <Moonbeams />}
      <Aurora position={[0, 105, -165]} rotation={[-0.28, 0, 0.1]} scale={[350, 115, 1]} intensity={0.5} seed={0} />
      <Aurora position={[-95, 82, -225]} rotation={[-0.2, 0.3, -0.15]} scale={[265, 92, 1]} intensity={0.32} seed={2.4} />
      <Aurora position={[130, 92, -200]} rotation={[-0.24, -0.35, 0.18]} scale={[240, 88, 1]} intensity={0.26} seed={4.1} />
      <ShootingStar firstDelay={3} period={11} />
      <ShootingStar firstDelay={7.5} period={17} />
      {rich && <Sparkles count={130} scale={[70, 16, 50]} size={2.4} speed={0.22} color="#a78bfa" opacity={0.45} position={[0, 7, 0]} />}
    </>
  );
}
