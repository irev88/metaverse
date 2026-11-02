"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ARCH, CAMPFIRE, CHART, OBSERVATORY, ORRERY, POND, PORTALS, SWING, TELESCOPE, WISH_TREE } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm } from "@/lib/noise";
import { useStore } from "@/lib/store";
import { treeFx } from "@/lib/fx";
import { sfx } from "@/lib/audio";
import { NearTag } from "./NearTag";
import { EmberParticles, WishMotes, Smoke, glowTexture } from "./Particles";

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
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            flames.current[i] = el;
          }}
          position={[CAMPFIRE[0], 0.62, CAMPFIRE[2]]}
          rotation={[0, (i * Math.PI) / 3, 0]}
        >
          <planeGeometry args={[i === 2 ? 0.8 : 1.15, i === 2 ? 1.05 : 1.5]} />
          <meshBasicMaterial map={tex} transparent depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <mesh position={[CAMPFIRE[0], 0.3, CAMPFIRE[2]]}>
        <sphereGeometry args={[0.3, 10, 10]} />
        <meshStandardMaterial color="#ffb066" emissive="#ff7c30" emissiveIntensity={3} />
      </mesh>
      {/* white-hot core */}
      <mesh position={[CAMPFIRE[0], 0.42, CAMPFIRE[2]]}>
        <sphereGeometry args={[0.13, 10, 10]} />
        <meshStandardMaterial color="#fff3d0" emissive="#ffe9b8" emissiveIntensity={4} />
      </mesh>
      <pointLight ref={light} position={[CAMPFIRE[0], 1.15, CAMPFIRE[2]]} color="#ff9d4d" intensity={13} distance={11} decay={2} />
      <EmberParticles position={[CAMPFIRE[0], 0.4, CAMPFIRE[2]]} />
      <Smoke offset={[CAMPFIRE[0], 1.4, CAMPFIRE[2]]} />
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

/** Radial bark ridges on a trunk segment. */
function displaceBark(geo: THREE.BufferGeometry, amp: number, seed: number) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ang = Math.atan2(z, x);
    const ridge = (fbm(ang * 1.9 + seed, y * 2.6 + seed * 2.1, 3) - 0.5) * 2 * amp;
    const len = Math.hypot(x, z) || 1;
    pos.setX(i, x + (x / len) * ridge);
    pos.setZ(i, z + (z / len) * ridge);
  }
  geo.computeVertexNormals();
  return geo;
}

function makeLeafTexture(color: string): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  g.translate(32, 32);
  g.rotate(0.6);
  g.fillStyle = color;
  g.shadowColor = color;
  g.shadowBlur = 10;
  g.beginPath();
  g.ellipse(0, 0, 9, 17, 0, 0, Math.PI * 2);
  g.fill();
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

const POKE_LINES = [
  "The tree hums — it liked that. ✦",
  "A leaf of light lets go, just for you.",
  "Somewhere far away, she feels a little shimmer.",
  "The old tree keeps every wish safe.",
  "It whispers: soon.",
];

// wish-burst colours (pale)
const LEAF_TINTS = ["#ffcf7a", "#ffab6e", "#ffe0a0", "#ff9e62"];

export function WishTree() {
  const wishCount = useStore((s) => s.wishes.length);
  const toast = useStore((s) => s.toast);
  const pokeIdx = useRef(0);

  /* ----- geometry (built once) ----- */

  // twisted, bark-displaced trunk segments
  const trunkGeos = useMemo(() => {
    const segs: { pos: [number, number, number]; rot: number; tilt: number }[] = [];
    let x = 0;
    let z = 0;
    const geos: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 5; i++) {
      const k = i / 4;
      const sway = Math.sin(i * 1.9 + 0.6) * 0.22;
      x += sway * 0.45;
      z += Math.cos(i * 1.4) * 0.12;
      segs.push({ pos: [WISH_TREE[0] + x, 0.35 + i * 0.72, WISH_TREE[2] + z], rot: i * 0.9, tilt: sway * 0.4 });
      const r0 = 0.62 - k * 0.34;
      const r1 = 0.52 - k * 0.34;
      const g = displaceBark(new THREE.CylinderGeometry(r1, r0, 0.9, 14, 6), 0.05, i * 7 + 3);
      geos.push(g);
    }
    return { segs, geos };
  }, []);

  // glowing spiral, tight to the trunk profile
  const spiralGeo = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const k = i / 160;
      const a = k * Math.PI * 6.5 + 0.4;
      const y = 0.25 + k * 3.55;
      const r = 0.55 * (1 - k * 0.5) + 0.035;
      const x = 0.112 * Math.sin(Math.max(0, (y - 0.35) / 0.72) * 1.9 + 0.6) * Math.min(1, y / 3.9) * 0.45 * 2.2;
      pts.push(new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * r + x * 0.5, y, WISH_TREE[2] + Math.sin(a) * r));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 180, 0.022, 6, false);
  }, []);

  // curved branches reaching into the canopy
  const branchGeos = useMemo(() => {
    return [0, 1, 2, 3, 4].map((i) => {
      const a = (i / 5) * Math.PI * 2 + 0.6;
      const pts = [
        new THREE.Vector3(WISH_TREE[0], 3.35, WISH_TREE[2]),
        new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * 0.9, 3.8, WISH_TREE[2] + Math.sin(a) * 0.9),
        new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * 1.8, 4.15, WISH_TREE[2] + Math.sin(a) * 1.8),
        new THREE.Vector3(WISH_TREE[0] + Math.cos(a) * 2.62, 4.05, WISH_TREE[2] + Math.sin(a) * 2.62),
      ];
      return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.055, 6, false);
    });
  }, []);

  // high-detail canopy, pale moonlit palette, kept within r<=2.35
  const blobs = useMemo(() => {
    const configs: { pos: [number, number, number]; r: number; detail: number; amp: number; seed: number; c: string }[] = [];
    const ring = ["#ffb85c", "#ff9e5e", "#ffd06e", "#ff8a6a", "#ffc257", "#ffab52", "#ffb85c"];
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.3;
      configs.push({
        pos: [WISH_TREE[0] + Math.cos(a) * 1.32, 4.3 + (i % 2) * 0.38, WISH_TREE[2] + Math.sin(a) * 1.32],
        r: 0.78 + (i % 3) * 0.14,
        detail: 3,
        amp: 0.34,
        seed: 31 + i * 13,
        c: ring[i],
      });
    }
    configs.push({ pos: [WISH_TREE[0], 5.05, WISH_TREE[2]], r: 1.28, detail: 3, amp: 0.3, seed: 111, c: "#ffcf6e" });
    configs.push({ pos: [WISH_TREE[0] + 0.45, 5.75, WISH_TREE[2] - 0.28], r: 0.78, detail: 3, amp: 0.34, seed: 131, c: "#ffa45e" });
    configs.push({ pos: [WISH_TREE[0] - 0.52, 5.62, WISH_TREE[2] + 0.32], r: 0.7, detail: 3, amp: 0.34, seed: 141, c: "#ff8f6e" });
    configs.push({ pos: [WISH_TREE[0] + 0.05, 4.0, WISH_TREE[2] - 0.1], r: 0.62, detail: 2, amp: 0.3, seed: 151, c: "#ffbc59" });
    return configs.map((cfg) => {
      const geo = displaceBlob(new THREE.IcosahedronGeometry(cfg.r, cfg.detail), cfg.amp * cfg.r, cfg.seed);
      return { ...cfg, geo };
    });
  }, []);

  // lanterns hang from twig knobs on the canopy underside
  const lanterns = useMemo(() => {
    const out: { knob: [number, number, number]; cord: number }[] = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.85;
      const rr = 2.55 + (i % 2) * 0.2;
      out.push({
        knob: [WISH_TREE[0] + Math.cos(a) * rr, 3.85 + (i % 3) * 0.42, WISH_TREE[2] + Math.sin(a) * rr],
        cord: 0.5 + (i % 3) * 0.16,
      });
    }
    return out;
  }, []);

  // rune stones + rotating glyph ring
  const runes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2 + 0.25;
        const rr = 2.75 + (i % 2) * 0.3;
        return { pos: [WISH_TREE[0] + Math.cos(a) * rr, 0.28, WISH_TREE[2] + Math.sin(a) * rr] as [number, number, number], h: 0.5 + (i % 3) * 0.2, rot: a * 2 };
      }),
    [],
  );
  const glyphs = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => {
        const a = (i / 4) * Math.PI * 2;
        return { pos: [Math.cos(a) * 2.15, 0.05, Math.sin(a) * 2.15] as [number, number, number], rot: -a };
      }),
    [],
  );

  /* ----- sprites: leaves, burst, wisps, crown fireflies ----- */

  const leafTex = useMemo(() => LEAF_TINTS.map((c) => makeLeafTexture(c)), []);
  const glow = useMemo(glowTexture, []);

  const leafRefs = useRef<(THREE.Sprite | null)[]>([]);
  const leafSpecs = useRef(
    Array.from({ length: 14 }, (_, i) => ({
      t0: -Math.random() * 8,
      dur: 4.5 + Math.random() * 2.5,
      a: Math.random() * Math.PI * 2,
      r: 1.7 + Math.random() * 0.7,
      y0: 4.5 + Math.random() * 0.9,
      sway: 0.6 + Math.random() * 0.5,
      spin: (Math.random() - 0.5) * 2.4,
      tex: i % LEAF_TINTS.length,
    })),
  );

  const burstRefs = useRef<(THREE.Sprite | null)[]>([]);

  const wispRefs = useRef<(THREE.Sprite | null)[]>([]);
  const wispSpecs = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        phase: i * 1.73,
        cycle: 0.055 + (i % 3) * 0.012,
        spin: 0.5 + (i % 4) * 0.24,
        rise: 4.4 + (i % 3) * 0.5,
        h0: 0.9 + (i % 4) * 0.5,
      })),
    [],
  );

  const fireflyRefs = useRef<(THREE.Sprite | null)[]>([]);
  const fireflySpecs = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        r: 0.6 + (i % 3) * 0.25,
        speed: 0.5 + (i % 4) * 0.2,
        phase: i * 2.1,
        y: 3.95 + (i % 4) * 0.45,
      })),
    [],
  );

  /* ----- refs for animated materials ----- */

  const canopyMats = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const canopyGroup = useRef<THREE.Group>(null);
  const spiralMat = useRef<THREE.MeshStandardMaterial>(null);
  const runeMat = useRef<THREE.MeshStandardMaterial>(null);
  const crystal = useRef<THREE.Mesh>(null);
  const crystalHalo = useRef<THREE.Sprite>(null);
  const crystalMat = useRef<THREE.MeshStandardMaterial>(null);
  const glyphRing = useRef<THREE.Group>(null);
  const lanternPivots = useRef<(THREE.Group | null)[]>([]);

  /* ----- interaction ----- */

  const poke = () => {
    treeFx.pokeAt = performance.now();
    toast(POKE_LINES[pokeIdx.current++ % POKE_LINES.length]);
    sfx.wish();
    // shake loose a small flurry
    const t = performance.now() / 1000;
    leafSpecs.current.forEach((s, i) => {
      if (i < 6) s.t0 = t + i * 0.12;
    });
  };

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const nowMs = performance.now();
    const focus = treeFx.focus;

    const sinceBurst = (nowMs - treeFx.burstAt) / 1000;
    const burstK = sinceBurst >= 0 && sinceBurst < 4.2 ? sinceBurst / 4.2 : -1;
    const sincePoke = (nowMs - treeFx.pokeAt) / 1000;
    const pokeK = sincePoke >= 0 && sincePoke < 1.4 ? sincePoke / 1.4 : -1;

    const boost = 1 + focus * 0.7 + (burstK >= 0 ? Math.sin(burstK * Math.PI) * 1.15 : 0) + (pokeK >= 0 ? Math.sin(pokeK * Math.PI) * 0.5 : 0);
    const base = (0.74 + Math.min(wishCount * 0.09, 1.1)) * boost;

    canopyMats.current.forEach((m, i) => {
      if (!m) return;
      m.emissiveIntensity = base * (0.85 + 0.22 * Math.sin(t * 0.9 + i * 1.4));
    });
    if (canopyGroup.current) {
      canopyGroup.current.scale.setScalar(1 + (burstK >= 0 ? Math.sin(burstK * Math.PI) * 0.03 : 0) + (pokeK >= 0 ? Math.sin(pokeK * Math.PI) * 0.018 : 0));
    }
    if (spiralMat.current) spiralMat.current.emissiveIntensity = (1.0 + Math.sin(t * 1.3) * 0.35 + wishCount * 0.08) * boost;
    if (runeMat.current) runeMat.current.emissiveIntensity = (0.9 + Math.sin(t * 1.1) * 0.3) * (1 + focus * 0.6);
    if (glyphRing.current) glyphRing.current.rotation.y = t * 0.16;

    // crystal topper
    if (crystal.current) {
      crystal.current.rotation.y = t * 0.5;
      crystal.current.position.y = 6.72 + Math.sin(t * 1.2) * 0.08;
    }
    if (crystalMat.current) crystalMat.current.emissiveIntensity = 1.4 + focus * 1.2 + (burstK >= 0 ? Math.sin(burstK * Math.PI) * 1.6 : 0);
    if (crystalHalo.current) {
      (crystalHalo.current.material as THREE.SpriteMaterial).opacity = 0.16 + focus * 0.2 + Math.sin(t * 2) * 0.04;
    }

    // lantern pendulums
    lanternPivots.current.forEach((g, i) => {
      if (!g) return;
      g.rotation.z = Math.sin(t * 0.9 + i * 1.7) * 0.07;
      g.rotation.x = Math.cos(t * 0.7 + i * 1.3) * 0.05;
      const bulb = g.children[1] as THREE.Mesh | undefined;
      if (bulb) {
        const mat = bulb.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = (i < wishCount ? 2.6 + Math.sin(t * 2 + i) * 0.5 : 0.22) * (1 + focus * 0.5);
      }
    });

    // crown fireflies
    fireflyRefs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = fireflySpecs[i];
      sp.position.set(
        WISH_TREE[0] + Math.cos(t * s.speed + s.phase) * s.r,
        s.y + Math.sin(t * 0.9 + s.phase * 2) * 0.18,
        WISH_TREE[2] + Math.sin(t * s.speed + s.phase) * s.r,
      );
      (sp.material as THREE.SpriteMaterial).opacity = (0.35 + 0.3 * Math.sin(t * 2.2 + i * 2.4)) * (0.7 + focus * 0.5);
    });

    // falling leaves
    leafRefs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = leafSpecs.current[i];
      let k = (t - s.t0) / s.dur;
      if (k >= 1 || k < 0) {
        if (k >= 1) {
          // respawn after a pause
          s.t0 = t + 1.5 + Math.random() * 4;
          s.a = Math.random() * Math.PI * 2;
          s.r = 1.7 + Math.random() * 0.7;
          s.y0 = 4.5 + Math.random() * 0.9;
          s.dur = 4.5 + Math.random() * 2.5;
        }
        sp.visible = false;
        return;
      }
      sp.visible = true;
      const drift = Math.sin(t * s.sway + s.a * 3) * 0.32;
      sp.position.set(
        WISH_TREE[0] + Math.cos(s.a) * s.r + drift,
        s.y0 - k * 2.7,
        WISH_TREE[2] + Math.sin(s.a) * s.r + Math.cos(t * s.sway * 0.8 + s.a) * 0.25,
      );
      sp.material.rotation = s.spin * t;
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.8;
    });

    // wish burst — a column of light spiraling up
    burstRefs.current.forEach((sp, i) => {
      if (!sp) return;
      if (burstK < 0 || sinceBurst > 9) {
        sp.visible = false;
        return;
      }
      const k = THREE.MathUtils.clamp((sinceBurst - i * 0.07) / 3.4, 0, 1);
      if (k <= 0 || k >= 1) {
        sp.visible = false;
        return;
      }
      const a = i * 2.4 + k * 5.2;
      const rad = 0.45 + k * 1.15;
      sp.visible = true;
      sp.position.set(WISH_TREE[0] + Math.cos(a) * rad, 1.1 + k * 5.2, WISH_TREE[2] + Math.sin(a) * rad);
      sp.scale.setScalar(0.1 + k * 0.09);
      (sp.material as THREE.SpriteMaterial).opacity = Math.sin(k * Math.PI) * 0.85;
    });

    // wisps rising from the roots through the crown
    wispRefs.current.forEach((sp, i) => {
      if (!sp) return;
      const s = wispSpecs[i];
      const k = (t * s.cycle + s.phase * 0.13) % 1;
      const rad = 0.3 + k * 0.95;
      const ang = s.phase + t * s.spin;
      sp.position.set(WISH_TREE[0] + Math.cos(ang) * rad, s.h0 + k * s.rise, WISH_TREE[2] + Math.sin(ang) * rad);
      const mat = sp.material as THREE.SpriteMaterial;
      mat.opacity = Math.sin(k * Math.PI) * (0.32 + focus * 0.3);
      sp.scale.setScalar(0.15 + k * 0.08);
    });
  });

  return (
    <group>
      {/* ground: pale rune circle + rotating glyph ring */}
      <mesh position={[WISH_TREE[0], 0.02, WISH_TREE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.15, 48]} />
        <meshBasicMaterial color="#e8a860" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh position={[WISH_TREE[0], 0.03, WISH_TREE[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.95, 3.1, 56]} />
        <meshBasicMaterial color="#ffb864" transparent opacity={0.32} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <group ref={glyphRing} position={[WISH_TREE[0], 0, WISH_TREE[2]]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.05, 2.13, 48]} />
          <meshBasicMaterial color="#f0b060" transparent opacity={0.26} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        {glyphs.map((g, i) => (
          <mesh key={i} position={[g.pos[0], g.pos[1] + 0.01, g.pos[2]]} rotation={[-Math.PI / 2, 0, g.rot]}>
            <planeGeometry args={[0.3, 0.09]} />
            <meshBasicMaterial color="#ffd98e" transparent opacity={0.55} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        ))}
      </group>

      {/* rune stones */}
      {runes.map((r, i) => (
        <group key={i} position={r.pos} rotation={[0, r.rot, (i % 2 ? 1 : -1) * 0.06]}>
          <mesh castShadow>
            <boxGeometry args={[0.22, r.h, 0.14]} />
            <meshStandardMaterial color="#4a4468" flatShading roughness={1} />
          </mesh>
          <mesh position={[0, r.h * 0.2, 0.075]}>
            <sphereGeometry args={[0.028, 6, 6]} />
            <meshStandardMaterial color="#ffe2ae" emissive="#ffb85c" emissiveIntensity={1.25} ref={i === 0 ? runeMat : undefined} />
          </mesh>
        </group>
      ))}

      {/* trunk (clickable) */}
      <group
        onClick={poke}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "")}
      >
        {trunkGeos.segs.map((s, i) => (
          <mesh key={i} geometry={trunkGeos.geos[i]} position={s.pos} rotation={[s.tilt, s.rot, s.tilt * 0.6]} castShadow>
            <meshStandardMaterial color={i % 2 ? "#3f3450" : "#463a5e"} flatShading roughness={0.95} />
          </mesh>
        ))}
      </group>
      {/* root flares */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i / 5) * Math.PI * 2 + 0.5;
        return (
          <mesh key={i} position={[WISH_TREE[0] + Math.cos(a) * 0.62, 0.14, WISH_TREE[2] + Math.sin(a) * 0.62]} rotation={[0, -a, 0.55]}>
            <coneGeometry args={[0.2, 0.9, 5]} />
            <meshStandardMaterial color="#3c3150" flatShading roughness={1} />
          </mesh>
        );
      })}
      {/* glowing spiral — pale gold */}
      <mesh geometry={spiralGeo}>
        <meshStandardMaterial ref={spiralMat} color="#ffcf7a" emissive="#ffab3e" emissiveIntensity={1.25} roughness={0.4} />
      </mesh>

      {/* branches */}
      <group
        onClick={poke}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "")}
      >
        {branchGeos.map((geo, i) => (
          <mesh key={i} geometry={geo} castShadow>
            <meshStandardMaterial color="#423758" flatShading roughness={1} />
          </mesh>
        ))}
      </group>

      {/* canopy (clickable) */}
      <group ref={canopyGroup}>
        {blobs.map((b, i) => (
          <mesh
            key={i}
            geometry={b.geo}
            position={b.pos}
            castShadow
            onClick={poke}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "")}
          >
            <meshStandardMaterial
              ref={(el) => {
                canopyMats.current[i] = el;
              }}
              color="#241a12"
              emissive={b.c}
              emissiveIntensity={0.55}
              flatShading
              roughness={0.85}
            />
          </mesh>
        ))}
        {/* fireflies inside the crown */}
        {fireflySpecs.map((_, i) => (
          <sprite
            key={`ff${i}`}
            ref={(el) => {
              fireflyRefs.current[i] = el;
            }}
            scale={[0.09, 0.09, 1]}
          >
            <spriteMaterial map={glow} color="#ffcf7a" transparent opacity={0.45} depthWrite={false} blending={THREE.AdditiveBlending} />
          </sprite>
        ))}
      </group>

      {/* crystal topper */}
      <mesh ref={crystal} position={[WISH_TREE[0], 6.72, WISH_TREE[2]]}>
        <octahedronGeometry args={[0.17, 0]} />
        <meshStandardMaterial ref={crystalMat} color="#ffe6b0" emissive="#ffb545" emissiveIntensity={1.7} roughness={0.2} metalness={0.2} flatShading />
      </mesh>
      <sprite ref={crystalHalo} position={[WISH_TREE[0], 6.72, WISH_TREE[2]]} scale={[1.1, 1.1, 1]}>
        <spriteMaterial map={glow} color="#ffc46a" transparent opacity={0.18} depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>

      {/* hanging lanterns — knobs on the canopy edge, pendulum sway */}
      {lanterns.map((l, i) => (
        <group key={i} position={l.knob}>
          {/* twig knob */}
          <mesh>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#423758" flatShading roughness={1} />
          </mesh>
          <group
            ref={(el) => {
              lanternPivots.current[i] = el;
            }}
          >
            <mesh position={[0, -l.cord / 2, 0]}>
              <cylinderGeometry args={[0.008, 0.008, l.cord, 4]} />
              <meshStandardMaterial color="#2a2438" />
            </mesh>
            <mesh position={[0, -l.cord - 0.09, 0]} scale={[1, 1.35, 1]}>
              <sphereGeometry args={[0.09, 12, 12]} />
              <meshStandardMaterial color="#f5ecd9" emissive="#ffe9c0" emissiveIntensity={0.22} />
            </mesh>
            {i < wishCount && (
              <sprite position={[0, -l.cord - 0.09, 0]} scale={[0.5, 0.5, 1]}>
                <spriteMaterial map={glow} color="#ffe9c0" transparent opacity={0.3} depthWrite={false} blending={THREE.AdditiveBlending} />
              </sprite>
            )}
          </group>
        </group>
      ))}

      {/* falling luminous leaves */}
      {leafSpecs.current.map((s, i) => (
        <sprite
          key={`lf${i}`}
          ref={(el) => {
            leafRefs.current[i] = el;
          }}
          visible={false}
          scale={[0.14, 0.14, 1]}
        >
          <spriteMaterial map={leafTex[s.tex]} transparent opacity={0} depthWrite={false} />
        </sprite>
      ))}

      {/* wish-burst column */}
      {Array.from({ length: 16 }, (_, i) => (
        <sprite
          key={`bs${i}`}
          ref={(el) => {
            burstRefs.current[i] = el;
          }}
          visible={false}
          scale={[0.12, 0.12, 1]}
        >
          <spriteMaterial map={glow} color="#ffd88e" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </sprite>
      ))}

      {/* wisps rising from the roots */}
      {wispSpecs.map((_, i) => (
        <sprite
          key={`w${i}`}
          ref={(el) => {
            wispRefs.current[i] = el;
          }}
          scale={[0.16, 0.16, 1]}
        >
          <spriteMaterial map={glow} color="#f5d9a8" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </sprite>
      ))}

      <NearTag position={[WISH_TREE[0], 7.6, WISH_TREE[2]]} radius={6}>
        ✦ the wishing tree
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
    gl_FragColor = vec4(col, 0.86);
  }
`;

export function Pond() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const koi = useRef<(THREE.Group | null)[]>([]);
  const tailL = useRef<(THREE.Mesh | null)[]>([]);
  const tailR = useRef<(THREE.Mesh | null)[]>([]);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    // koi swimming lazy circles just beneath the surface
    koi.current.forEach((g, i) => {
      if (!g) return;
      const r = [1.6, 2.1, 1.15][i];
      const speed = [0.34, -0.27, 0.44][i];
      const phase = [0, 2.3, 4.2][i];
      const ang = phase + t * speed;
      g.position.set(POND.c[0] + Math.cos(ang) * r, 0.028, POND.c[1] + Math.sin(ang) * r);
      g.rotation.y = -ang + (speed > 0 ? Math.PI : 0);
      const wag = Math.sin(t * 7 + i * 2.4) * 0.4;
      if (tailL.current[i]) tailL.current[i].rotation.y = wag;
      if (tailR.current[i]) tailR.current[i].rotation.y = wag * 0.8;
    });
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
      <mesh position={[POND.c[0], 0.055, POND.c[1]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[POND.r, 40]} />
        <shaderMaterial ref={mat} vertexShader={pondVert} fragmentShader={pondFrag} uniforms={uniforms} transparent depthWrite={false} />
      </mesh>
      {/* koi — visible through the water */}
      {[0, 1, 2].map((i) => (
        <group
          key={i}
          ref={(el) => {
            koi.current[i] = el;
          }}
        >
          <mesh scale={[0.42, 0.34, 1]}>
            <sphereGeometry args={[0.085, 10, 10]} />
            <meshStandardMaterial color={i === 1 ? "#f3ede1" : "#e8ecf5"} roughness={0.6} />
          </mesh>
          <mesh position={[0.03, 0.015, 0.02]} scale={[0.5, 0.4, 0.7]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#ff8c5a" roughness={0.6} />
          </mesh>
          <mesh
            ref={(el) => {
              tailR.current[i] = el;
            }}
            position={[-0.1, 0, 0]}
            rotation={[0, 0.5, 0]}
          >
            <coneGeometry args={[0.035, 0.1, 6]} />
            <meshStandardMaterial color={i === 1 ? "#f3ede1" : "#ffd9c9"} roughness={0.7} transparent opacity={0.9} />
          </mesh>
          <mesh
            ref={(el) => {
              tailL.current[i] = el;
            }}
            position={[-0.1, 0, 0]}
            rotation={[0, -0.5, 0]}
          >
            <coneGeometry args={[0.035, 0.1, 6]} />
            <meshStandardMaterial color={i === 1 ? "#f3ede1" : "#ffd9c9"} roughness={0.7} transparent opacity={0.9} />
          </mesh>
        </group>
      ))}
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
        <mesh key={i} position={[x, 0.09, z]} rotation={[-Math.PI / 2, 0, i * 1.3]}>
          <circleGeometry args={[0.32, 8, 0.5, 5.6]} />
          <meshStandardMaterial color="#2f8a5c" roughness={0.9} />
        </mesh>
      ))}
      <mesh position={[POND.c[0] - 1.4, 0.17, POND.c[1] + 0.9]}>
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
