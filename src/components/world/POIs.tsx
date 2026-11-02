"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ARCH, CAMPFIRE, CHART, OBSERVATORY, ORRERY, POND, PORTALS, SWING, TELESCOPE, WISH_TREE } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm } from "@/lib/noise";
import { useStore } from "@/lib/store";
import { NearTag } from "./NearTag";
import { EmberParticles, WishMotes } from "./Particles";

/* ================= campfire ================= */

function flameTexture() {
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
  return new THREE.CanvasTexture(c);
}

export function Campfire() {
  const flames = useRef<(THREE.Mesh | null)[]>([]);
  const light = useRef<THREE.PointLight>(null);
  const tex = useMemo(flameTexture, []);
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
      {/* log seats */}
      {[
        [2.35, 1.35, 0.7],
        [-0.7, 2.15, 2.4],
        [-0.85, -0.7, -0.6],
      ].map(([dx, dz, ry], i) => (
        <mesh key={i} position={[CAMPFIRE[0] + dx, 0.22, CAMPFIRE[2] + dz]} rotation={[Math.PI / 2, 0, ry]} castShadow>
          <cylinderGeometry args={[0.22, 0.22, 1.1, 8]} />
          <meshStandardMaterial color="#6b4b34" flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[CAMPFIRE[0], 0.015, CAMPFIRE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.1, 24]} />
        <meshBasicMaterial color="#ff8c4a" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

/* ================= telescope (hearth) ================= */

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
      <NearTag position={[0, 2.2, 0]} radius={4}>
        ✧ stargazer
      </NearTag>
    </group>
  );
}

/* ================= the wishing tree — the heart of the hearth ================= */

function displaceBlob(geo: THREE.BufferGeometry, amp: number, seed: number) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = fbm(v.x * 1.5 + seed, v.y * 1.9 + v.z * 1.5 + seed * 1.7, 3) - 0.5;
    const len = v.length() || 1;
    v.addScaledVector(v.clone().divideScalar(len), n * 2 * amp);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export function WishTree() {
  const wishCount = useStore((s) => s.wishes.length);
  const canopyMats = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const lanternRefs = useRef<(THREE.Group | null)[]>([]);
  const spiralMat = useRef<THREE.MeshStandardMaterial>(null);
  const runeMat = useRef<THREE.MeshStandardMaterial>(null);

  // twisted trunk segments
  const trunk = useMemo(() => {
    const segs: { pos: [number, number, number]; r0: number; r1: number; rot: number; tilt: number }[] = [];
    let x = 0;
    let z = 0;
    for (let i = 0; i < 5; i++) {
      const k = i / 4;
      const sway = Math.sin(i * 1.9 + 0.6) * 0.22;
      x += sway * 0.45;
      z += Math.cos(i * 1.4) * 0.12;
      segs.push({
        pos: [WISH_TREE[0] + x, 0.35 + i * 0.72, WISH_TREE[2] + z],
        r0: 0.62 - k * 0.34,
        r1: 0.52 - k * 0.34,
        rot: i * 0.9,
        tilt: sway * 0.4,
      });
    }
    return segs;
  }, []);

  // glowing spiral around the trunk
  const spiralGeo = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 140; i++) {
      const k = i / 140;
      const a = k * Math.PI * 6.5 + 0.4;
      const y = 0.25 + k * 3.6;
      const r = 0.66 * (1 - k * 0.5) + 0.05;
      pts.push(new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * r, y, WISH_TREE[2] + Math.sin(a) * r));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.026, 6, false);
  }, []);

  // organic canopy — displaced blobs layered as a crown
  const blobs = useMemo(() => {
    const configs: { pos: [number, number, number]; r: number; detail: number; amp: number; seed: number; c: string }[] = [];
    const crown: [string, number][] = [
      ["#8b6cf0", 0],
      ["#a78bfa", 1],
      ["#6ee7d8", 2],
      ["#b18cff", 3],
      ["#8b6cf0", 4],
    ];
    // big lower ring
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.3;
      configs.push({
        pos: [WISH_TREE[0] + Math.cos(a) * 1.55, 4.05 + (i % 2) * 0.4, WISH_TREE[2] + Math.sin(a) * 1.55],
        r: 1.05 + (i % 3) * 0.22,
        detail: 2,
        amp: 0.3,
        seed: 31 + i * 13,
        c: crown[i % crown.length][0],
      });
    }
    // crown core
    configs.push({ pos: [WISH_TREE[0], 4.9, WISH_TREE[2]], r: 1.6, detail: 3, amp: 0.26, seed: 111, c: "#9d7bf5" });
    configs.push({ pos: [WISH_TREE[0] + 0.5, 5.7, WISH_TREE[2] - 0.3], r: 1.0, detail: 2, amp: 0.3, seed: 131, c: "#6ee7d8" });
    configs.push({ pos: [WISH_TREE[0] - 0.6, 5.55, WISH_TREE[2] + 0.35], r: 0.9, detail: 2, amp: 0.3, seed: 141, c: "#b18cff" });
    return configs.map((cfg) => {
      const geo = displaceBlob(new THREE.IcosahedronGeometry(cfg.r, cfg.detail), cfg.amp * cfg.r, cfg.seed);
      return { ...cfg, geo };
    });
  }, []);

  // branches
  const branchGeos = useMemo(() => {
    return [0, 1, 2].map((i) => {
      const a = (i / 3) * Math.PI * 2 + 1.1;
      const pts = [
        new THREE.Vector3(WISH_TREE[0], 3.4, WISH_TREE[2]),
        new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * 0.8, 3.75, WISH_TREE[2] + Math.sin(a) * 0.8),
        new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * 1.5, 4.05, WISH_TREE[2] + Math.sin(a) * 1.5),
      ];
      return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.07, 6, false);
    });
  }, []);

  // hanging wish lanterns — dim buds until wished upon
  const lanterns = useMemo(() => {
    const out: { pos: [number, number, number]; stem: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.55;
      const rr = 1.7 + (i % 3) * 0.4;
      out.push({
        pos: [WISH_TREE[0] + Math.cos(a) * rr, 3.4 + (i % 4) * 0.55, WISH_TREE[2] + Math.sin(a) * rr],
        stem: 0.5 + (i % 3) * 0.35,
      });
    }
    return out;
  }, []);

  // rune stones around the base
  const runes = useMemo(() => {
    void terrainHeight(WISH_TREE[0], WISH_TREE[2]);
    return Array.from({ length: 6 }, (_, i) => {
      const a = (i / 6) * Math.PI * 2 + 0.25;
      const rr = 2.7 + (i % 2) * 0.35;
      return { pos: [WISH_TREE[0] + Math.cos(a) * rr, 0.28, WISH_TREE[2] + Math.sin(a) * rr] as [number, number, number], h: 0.5 + (i % 3) * 0.2, rot: a * 2 };
    });
  }, []);

  const wisps = useRef<(THREE.Sprite | null)[]>([]);
  const wispSpecs = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        r: 1.6 + (i % 3) * 0.6,
        speed: 0.4 + (i % 4) * 0.18,
        phase: i * 1.3,
        y: 1.2 + (i % 5) * 0.8,
      })),
    [],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const base = 0.55 + Math.min(wishCount * 0.14, 1.4);
    canopyMats.current.forEach((m, i) => {
      if (!m) return;
      m.emissiveIntensity = base * (0.8 + 0.25 * Math.sin(t * 0.9 + i * 1.4));
    });
    if (spiralMat.current) spiralMat.current.emissiveIntensity = 1.6 + Math.sin(t * 1.3) * 0.6 + wishCount * 0.1;
    if (runeMat.current) runeMat.current.emissiveIntensity = 1.4 + Math.sin(t * 1.1) * 0.5;
    lanternRefs.current.forEach((g, i) => {
      if (!g) return;
      g.rotation.y = Math.sin(t * 0.7 + i * 2.1) * 0.22;
      const bulb = g.children[1] as THREE.Mesh | undefined;
      if (bulb) {
        const mat = bulb.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = i < wishCount ? 2.8 + Math.sin(t * 2 + i) * 0.6 : 0.25;
      }
    });
    wisps.current.forEach((sp, i) => {
      if (!sp) return;
      const s = wispSpecs[i];
      sp.position.set(
        WISH_TREE[0] + Math.cos(t * s.speed + s.phase) * s.r,
        s.y + Math.sin(t * 0.7 + s.phase) * 0.3,
        WISH_TREE[2] + Math.sin(t * s.speed + s.phase) * s.r,
      );
    });
  });

  return (
    <group>
      {/* ground: glowing rune circle */}
      <mesh position={[WISH_TREE[0], 0.02, WISH_TREE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.1, 40]} />
        <meshBasicMaterial color="#8b6cf0" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh position={[WISH_TREE[0], 0.03, WISH_TREE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.95, 3.1, 48]} />
        <meshBasicMaterial color="#b18cff" transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {/* rune stones */}
      {runes.map((r, i) => (
        <group key={i} position={r.pos} rotation={[0, r.rot, (i % 2 ? 1 : -1) * 0.06]}>
          <mesh castShadow>
            <boxGeometry args={[0.22, r.h, 0.14]} />
            <meshStandardMaterial color="#4a4468" flatShading roughness={1} />
          </mesh>
          <mesh position={[0, r.h * 0.2, 0.075]}>
            <sphereGeometry args={[0.028, 6, 6]} />
            <meshStandardMaterial color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={1.5} ref={i === 0 ? runeMat : undefined} />
          </mesh>
        </group>
      ))}

      {/* twisted trunk */}
      {trunk.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={[s.tilt, s.rot, s.tilt * 0.6]} castShadow>
          <cylinderGeometry args={[s.r1, s.r0, 0.86, 10, 3]} />
          <meshStandardMaterial color={i % 2 ? "#4a3860" : "#54406b"} flatShading roughness={0.95} />
        </mesh>
      ))}
      {/* root flares */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i / 5) * Math.PI * 2 + 0.5;
        return (
          <mesh key={i} position={[WISH_TREE[0] + Math.cos(a) * 0.62, 0.14, WISH_TREE[2] + Math.sin(a) * 0.62]} rotation={[0, -a, 0.55]}>
            <coneGeometry args={[0.2, 0.9, 5]} />
            <meshStandardMaterial color="#463458" flatShading roughness={1} />
          </mesh>
        );
      })}
      {/* glowing spiral */}
      <mesh geometry={spiralGeo}>
        <meshStandardMaterial ref={spiralMat} color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={1.6} roughness={0.4} />
      </mesh>
      {/* branches */}
      {branchGeos.map((geo, i) => (
        <mesh key={i} geometry={geo}>
          <meshStandardMaterial color="#4a3860" flatShading roughness={1} />
        </mesh>
      ))}
      {/* canopy */}
      {blobs.map((b, i) => (
        <mesh key={i} geometry={b.geo} position={b.pos} castShadow>
          <meshStandardMaterial
            ref={(el) => {
              canopyMats.current[i] = el;
            }}
            color="#241c44"
            emissive={b.c}
            emissiveIntensity={0.7}
            flatShading
            roughness={0.85}
          />
        </mesh>
      ))}
      {/* hanging wish lanterns */}
      {lanterns.map((l, i) => (
        <group
          key={i}
          ref={(el) => {
            lanternRefs.current[i] = el;
          }}
        >
          <mesh position={[l.pos[0], l.pos[1] - l.stem / 2, l.pos[2]]}>
            <cylinderGeometry args={[0.008, 0.008, l.stem, 4]} />
            <meshStandardMaterial color="#2a2438" />
          </mesh>
          <mesh position={[l.pos[0], l.pos[1] - l.stem - 0.09, l.pos[2]]} scale={[1, 1.35, 1]}>
            <sphereGeometry args={[0.09, 10, 10]} />
            <meshStandardMaterial color="#ffe9c4" emissive="#ffd27a" emissiveIntensity={0.25} />
          </mesh>
          {i < wishCount && (
            <sprite position={[l.pos[0], l.pos[1] - l.stem - 0.09, l.pos[2]]} scale={[0.7, 0.7, 1]}>
              <spriteMaterial color="#ffd27a" transparent opacity={0.28} depthWrite={false} blending={THREE.AdditiveBlending} />
            </sprite>
          )}
        </group>
      ))}
      <WishMotes position={[WISH_TREE[0], 3.2, WISH_TREE[2]]} />
      {wispSpecs.map((_, i) => (
        <sprite
          key={i}
          ref={(el) => {
            wisps.current[i] = el;
          }}
          scale={[0.32, 0.32, 1]}
        >
          <spriteMaterial color="#c4b5fd" transparent opacity={0.5} depthWrite={false} blending={THREE.AdditiveBlending} />
        </sprite>
      ))}
      <NearTag position={[WISH_TREE[0], 6.8, WISH_TREE[2]]} radius={6}>
        ✦ wishing tree · {wishCount} wish{wishCount === 1 ? "" : "es"}
      </NearTag>
    </group>
  );
}

/* ================= portals ================= */

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

function Portal({ label, emoji, pos, color }: { label: string; emoji: string; pos: [number, number, number]; color: string }) {
  const ring = useRef<THREE.Mesh>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);
  const orbit = useRef<THREE.Group>(null);
  const yaw = Math.atan2(-pos[0], -pos[2]);
  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uColor: { value: new THREE.Color(color) } }),
    [color],
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mat.current) mat.current.uniforms.uTime.value = t;
    if (ring.current) ring.current.position.y = 1.75 + Math.sin(t * 1.4 + pos[0]) * 0.07;
    if (orbit.current) orbit.current.rotation.y = t * 0.9;
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
      <group ref={orbit} position={[0, 1.75, 0]}>
        {[0, 1, 2].map((i) => {
          const a = (i / 3) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.05, Math.sin(a) * 1.05, 0]}>
              <sphereGeometry args={[0.045, 6, 6]} />
              <meshBasicMaterial color={color} />
            </mesh>
          );
        })}
      </group>
      <NearTag position={[0, 3.3, 0]} radius={3.5}>
        {emoji} {label} · soon
      </NearTag>
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

/* ================= pond (everbloom) ================= */

const pondVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const pondFrag = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    if (r > 1.0) discard;
    float ripple = sin(r * 22.0 - uTime * 2.1) * 0.5 + 0.5;
    ripple *= smoothstep(1.0, 0.15, r);
    float sparkle = smoothstep(0.82, 1.0, sin(r * 40.0 - uTime * 3.2) * 0.5 + 0.5) * smoothstep(0.9, 0.2, r);
    vec3 deep = vec3(0.07, 0.14, 0.32);
    vec3 shal = vec3(0.13, 0.34, 0.48);
    vec3 col = mix(deep, shal, smoothstep(1.0, 0.2, r));
    col += vec3(0.35, 0.75, 0.7) * ripple * 0.16;
    col += vec3(0.9, 0.95, 1.0) * sparkle * 0.35;
    gl_FragColor = vec4(col, 0.94);
  }
`;

export function Pond() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
  });
  const rim = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return { pos: [POND.c[0] + Math.cos(a) * (POND.r + 0.25), 0.07, POND.c[1] + Math.sin(a) * (POND.r + 0.25)] as [number, number, number], rot: a * 2.3 };
      }),
    [],
  );
  return (
    <group>
      <mesh position={[POND.c[0], 0.03, POND.c[1]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[POND.r, 40]} />
        <shaderMaterial ref={mat} vertexShader={pondVert} fragmentShader={pondFrag} uniforms={uniforms} transparent depthWrite={false} />
      </mesh>
      {rim.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={[0.2, s.rot, 0.12]} castShadow>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#5f5878" flatShading roughness={1} />
        </mesh>
      ))}
      {[
        [POND.c[0] - 1.4, POND.c[1] + 0.9],
        [POND.c[0] + 1.1, POND.c[1] + 1.3],
        [POND.c[0] + 1.6, POND.c[1] - 0.8],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.075, z]} rotation={[-Math.PI / 2, 0, i * 1.3]}>
          <circleGeometry args={[0.32, 8, 0.5, 5.6]} />
          <meshStandardMaterial color="#2f8a5c" roughness={0.9} />
        </mesh>
      ))}
      <mesh position={[POND.c[0] - 1.4, 0.16, POND.c[1] + 0.9]}>
        <coneGeometry args={[0.14, 0.2, 8]} />
        <meshStandardMaterial color="#ffb3cd" emissive="#ff8fb3" emissiveIntensity={1.6} roughness={0.7} />
      </mesh>
      <NearTag position={[POND.c[0], 1.5, POND.c[1]]} radius={5}>
        ✧ the reflection pond
      </NearTag>
    </group>
  );
}

/* ================= swing (everbloom) ================= */

export function Swing() {
  const seat = useRef<THREE.Group>(null);
  const yaw = Math.atan2(POND.c[0] - SWING[0], POND.c[1] - SWING[1]);
  useFrame((state) => {
    if (seat.current) seat.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.85) * 0.14;
  });
  return (
    <group position={SWING} rotation={[0, yaw, 0]}>
      {[-0.85, 0.85].map((x) => (
        <group key={x} position={[x, 0, 0]}>
          <mesh position={[0, 1.05, 0.32]} rotation={[0.28, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.06, 2.3, 6]} />
            <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
          </mesh>
          <mesh position={[0, 1.05, -0.32]} rotation={[-0.28, 0, 0]} castShadow>
            <cylinderGeometry args={[0.05, 0.06, 2.3, 6]} />
            <meshStandardMaterial color="#6b4b3a" flatShading roughness={1} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 2.25, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 2.1, 8]} />
        <meshStandardMaterial color="#5d4534" flatShading roughness={1} />
      </mesh>
      <group ref={seat} position={[0, 2.22, 0]}>
        {[-0.32, 0.32].map((x) => (
          <mesh key={x} position={[x, -0.8, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 1.6, 5]} />
            <meshStandardMaterial color="#d9cba8" roughness={0.8} />
          </mesh>
        ))}
        <mesh position={[0, -1.66, 0]} castShadow>
          <boxGeometry args={[0.85, 0.07, 0.34]} />
          <meshStandardMaterial color="#8a6a4a" flatShading roughness={1} />
        </mesh>
      </group>
      <NearTag position={[0, 3.1, 0]} radius={4}>
        🕊 save me a spot
      </NearTag>
    </group>
  );
}

/* ================= rose arch (everbloom) ================= */

export function RoseArch() {
  const yaw = 1.55;
  const blooms = useMemo(() => {
    const rng = (i: number) => Math.abs(Math.sin(i * 91.7) * 43758.55 % 1);
    const cols = ["#ff8fb3", "#e5487c", "#ffb37a", "#fff3f5"];
    return Array.from({ length: 16 }, (_, i) => {
      const a = Math.PI * (0.12 + (i / 15) * 0.76);
      const x = Math.cos(a) * 1.15;
      const y = 2.15 + Math.sin(a) * 1.15;
      return { pos: [x, y, (rng(i + 3) - 0.5) * 0.24] as [number, number, number], c: cols[Math.floor(rng(i + 11) * 4)], s: 0.5 + rng(i + 5) * 0.5 };
    });
  }, []);
  return (
    <group position={ARCH} rotation={[0, yaw, 0]}>
      {[-1.15, 1.15].map((x) => (
        <mesh key={x} position={[x, 1.1, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.08, 2.2, 7]} />
          <meshStandardMaterial color="#5d6b52" flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 2.15, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[1.15, 0.055, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#5d6b52" flatShading roughness={1} />
      </mesh>
      {blooms.map((b, i) => (
        <mesh key={i} position={b.pos} scale={b.s}>
          <icosahedronGeometry args={[0.11, 0]} />
          <meshStandardMaterial color={b.c} roughness={0.65} flatShading emissive={b.c} emissiveIntensity={0.12} />
        </mesh>
      ))}
      <NearTag position={[0, 2.75, 0]} radius={4}>
        🌹 our arch
      </NearTag>
    </group>
  );
}

/* ================= observatory (starfall) ================= */

export function Observatory() {
  const dome = useRef<THREE.Group>(null);
  const yaw = Math.atan2(-OBSERVATORY[0] + 5, -OBSERVATORY[2] + 6);
  useFrame((_, dt) => {
    if (dome.current) dome.current.rotation.y += dt * 0.07;
  });
  return (
    <group position={OBSERVATORY} rotation={[0, yaw, 0]}>
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[3.1, 3.4, 2.2, 12]} />
        <meshStandardMaterial color="#565070" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 0.9, 3.15]}>
        <boxGeometry args={[1.1, 1.8, 0.2]} />
        <meshStandardMaterial color="#241a30" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.85, 3.15]}>
        <cylinderGeometry args={[0.55, 0.55, 0.2, 12, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#241a30" roughness={0.9} />
      </mesh>
      <mesh position={[2.2, 1.5, 2.2]} rotation={[0, -0.6, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.08]} />
        <meshStandardMaterial color="#ffdca0" emissive="#ffcf7d" emissiveIntensity={2.2} />
      </mesh>
      <group ref={dome} position={[0, 2.2, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[3.0, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#6a628e" flatShading roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.35, 1.15]} rotation={[-0.7, 0, 0]}>
          <boxGeometry args={[0.7, 2.6, 0.12]} />
          <meshStandardMaterial color="#1c1832" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.15, 0.9]} rotation={[-1.0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.42, 3.2, 12]} />
          <meshStandardMaterial color="#d4b078" metalness={0.55} roughness={0.35} />
        </mesh>
        <mesh position={[0, 2.6, -0.15]} rotation={[0.35, 0, 0]}>
          <cylinderGeometry args={[0.44, 0.44, 0.16, 12]} />
          <meshStandardMaterial color="#3d3560" emissive="#8b7cf6" emissiveIntensity={0.5} metalness={0.4} roughness={0.4} />
        </mesh>
      </group>
      <pointLight position={[0, 1.4, 3.6]} color="#ffbf78" intensity={9} distance={8} decay={2} />
      {[0, 1].map((i) => (
        <mesh key={i} position={[0, 0.08 + i * 0.14, 3.9 - i * 0.35]} receiveShadow>
          <boxGeometry args={[1.6 - i * 0.2, 0.14, 0.5]} />
          <meshStandardMaterial color="#4c4570" flatShading />
        </mesh>
      ))}
      <NearTag position={[0, 6.2, 0]} radius={8}>
        ✦ starfall observatory
      </NearTag>
    </group>
  );
}

/* ================= orrery (starfall) ================= */

export function Orrery() {
  const arm1 = useRef<THREE.Group>(null);
  const arm2 = useRef<THREE.Group>(null);
  const arm3 = useRef<THREE.Group>(null);
  const moon2 = useRef<THREE.Group>(null);
  const kick = useRef(0);
  useFrame((state, dt) => {
    const s = useStore.getState();
    if (s.orreryKick && Date.now() - s.orreryKick < 5000) kick.current = Math.min(kick.current + dt * 2, 5);
    else kick.current = Math.max(kick.current - dt * 0.7, 0);
    const b = 1 + kick.current;
    if (arm1.current) arm1.current.rotation.y += dt * 0.9 * b;
    if (arm2.current) arm2.current.rotation.y += dt * 0.55 * b;
    if (arm3.current) arm3.current.rotation.y += dt * 0.32 * b;
    if (moon2.current) moon2.current.rotation.y += dt * 2.2 * b;
  });
  return (
    <group position={ORRERY}>
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.25, 1.45, 0.24, 10]} />
        <meshStandardMaterial color="#3d3560" flatShading roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.5, 0.62, 32]} />
        <meshBasicMaterial color="#8b7cf6" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.3, 14, 14]} />
        <meshStandardMaterial color="#ffd27a" emissive="#ffb35e" emissiveIntensity={2.4} />
      </mesh>
      <pointLight position={[0, 0.8, 0]} color="#ffd9a0" intensity={5} distance={5} decay={2} />
      <group ref={arm1} position={[0, 0.75, 0]}>
        <mesh position={[0.55, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.55, 5]} />
          <meshStandardMaterial color="#8b7cf6" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0.55, 0, 0]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#b0a6c4" roughness={0.8} />
        </mesh>
      </group>
      <group ref={arm2} position={[0, 0.75, 0]}>
        <mesh position={[0.95, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.95, 5]} />
          <meshStandardMaterial color="#8b7cf6" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0.95, 0, 0]}>
          <sphereGeometry args={[0.13, 10, 10]} />
          <meshStandardMaterial color="#5b8fd4" emissive="#2d4f8a" emissiveIntensity={0.4} roughness={0.7} />
        </mesh>
        <group ref={moon2} position={[0.95, 0, 0]}>
          <mesh position={[0.26, 0, 0]}>
            <sphereGeometry args={[0.045, 6, 6]} />
            <meshStandardMaterial color="#d5d5e0" roughness={1} />
          </mesh>
        </group>
      </group>
      <group ref={arm3} position={[0, 0.75, 0]}>
        <mesh position={[1.4, 0, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 1.4, 5]} />
          <meshStandardMaterial color="#8b7cf6" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[1.4, 0, 0]}>
          <sphereGeometry args={[0.16, 10, 10]} />
          <meshStandardMaterial color="#d9c8a0" emissive="#8a744a" emissiveIntensity={0.35} roughness={0.85} />
        </mesh>
        <mesh position={[1.4, 0, 0]} rotation={[Math.PI / 2.4, 0, 0.3]}>
          <ringGeometry args={[0.22, 0.34, 28]} />
          <meshBasicMaterial color="#e8dcc0" transparent opacity={0.75} side={THREE.DoubleSide} />
        </mesh>
      </group>
      <NearTag position={[0, 1.9, 0]} radius={4.5}>
        ✧ orrery of us
      </NearTag>
    </group>
  );
}

/* ================= star chart stand ================= */

function makeChartTexture(): THREE.CanvasTexture {
  const w = 256;
  const h = 192;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  g.fillStyle = "#0d1128";
  g.fillRect(0, 0, w, h);
  const pts: [number, number][] = [
    [70, 60],
    [95, 45],
    [128, 55],
    [150, 80],
    [128, 108],
    [95, 118],
    [78, 95],
  ];
  g.strokeStyle = "rgba(167,139,250,0.6)";
  g.lineWidth = 1.2;
  g.beginPath();
  pts.forEach(([x, y], i) => (i === 0 ? g.moveTo(x, y) : g.lineTo(x, y)));
  g.closePath();
  g.stroke();
  pts.forEach(([x, y]) => {
    g.fillStyle = "#ffe9b0";
    g.beginPath();
    g.arc(x, y, 2.6, 0, Math.PI * 2);
    g.fill();
  });
  g.fillStyle = "rgba(255,233,176,0.5)";
  for (let i = 0; i < 60; i++) {
    g.fillRect(Math.random() * w, Math.random() * h, 1.2, 1.2);
  }
  g.fillStyle = "#e8e6ff";
  g.font = "italic 15px Georgia, serif";
  g.textAlign = "center";
  g.fillText("carpe noctem", w / 2, h - 16);
  g.font = "11px Georgia, serif";
  g.fillStyle = "#a5b4fc";
  g.fillText("— the constellation of us —", w / 2, h - 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function StarChart() {
  const tex = useMemo(makeChartTexture, []);
  return (
    <group position={CHART} rotation={[0, 0.7, 0]}>
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.1, 6]} />
          <meshStandardMaterial color="#4a3a2c" flatShading />
        </mesh>
      ))}
      <mesh position={[0, 1.15, 0]} rotation={[-0.25, 0, 0]} castShadow>
        <boxGeometry args={[1.35, 1.0, 0.06]} />
        <meshStandardMaterial map={tex} roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.65, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.12, 0.3, 4]} />
        <meshStandardMaterial color="#d4b078" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}
