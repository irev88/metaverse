"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { FLOWER_FIELDS, FLOWER_HEART, ISLANDS } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { useStore } from "@/lib/store";

/* ============================================================
   Instanced grass with vertex-shader wind
   ============================================================ */

function makeBladeGeometry(): THREE.BufferGeometry {
  const a = new THREE.PlaneGeometry(0.085, 0.56, 1, 4);
  a.translate(0, 0.28, 0);
  const b = a.clone();
  b.rotateY(Math.PI / 2);
  // normalize index state before merging (defensive; both are indexed today)
  const merged = mergeGeometries([a.index ? a.toNonIndexed() : a, b.index ? b.toNonIndexed() : b], false)!;
  merged.computeBoundingSphere();
  return merged;
}

const grassVert = /* glsl */ `
  uniform float uTime;
  varying float vH;
  varying vec3 vTint;
  void main() {
    vH = uv.y;
    #ifdef USE_INSTANCING
      #ifdef USE_INSTANCING_COLOR
        vTint = instanceColor.xyz;
      #else
        vTint = vec3(1.0);
      #endif
      vec4 wp = instanceMatrix * vec4(position, 1.0);
    #else
      vTint = vec3(1.0);
      vec4 wp = vec4(position, 1.0);
    #endif
    float phase = wp.x * 2.1 + wp.z * 1.7;
    float sway = (sin(uTime * 1.7 + phase) + sin(uTime * 2.9 + phase * 1.7) * 0.4) * 0.11;
    wp.x += sway * pow(uv.y, 1.6);
    wp.z += sway * 0.6 * pow(uv.y, 1.6);
    gl_Position = projectionMatrix * modelViewMatrix * wp;
  }
`;

const grassFrag = /* glsl */ `
  varying float vH;
  varying vec3 vTint;
  void main() {
    vec3 root = vec3(0.09, 0.26, 0.17);
    vec3 tip = vec3(0.33, 0.68, 0.43);
    vec3 col = mix(root, tip, vH) * vTint;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function Grass() {
  const quality = useStore((s) => s.quality);
  const count = quality === "rich" ? 7000 : 2800;
  const geo = useMemo(makeBladeGeometry, []);
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: grassVert,
        fragmentShader: grassFrag,
        uniforms: { uTime: { value: 0 } },
        side: THREE.DoubleSide,
      }),
    [],
  );
  const ref = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(() => {
    let seed = 9;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const out: { x: number; z: number; y: number; s: number; rot: number; tint: THREE.Color }[] = [];
    const tint = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
      const a = rnd() * Math.PI * 2;
      const r = 1.5 + Math.sqrt(rnd()) * (isl.r - 2.2);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      tint.setHSL(0.35 + rnd() * 0.07, 0.42 + rnd() * 0.2, 0.72 + rnd() * 0.34);
      out.push({ x, z, y: h, s: 0.65 + rnd() * 0.9, rot: rnd() * Math.PI, tint });
    }
    return out;
  }, [count]);

  useLayoutEffect(() => {
    const m = ref.current;
    if (!m) return;
    const d = new THREE.Object3D();
    data.forEach((g, i) => {
      d.position.set(g.x, g.y - 0.02, g.z);
      d.rotation.set(0, g.rot, 0);
      d.scale.set(g.s, g.s * (0.8 + g.tint.g * 0.4), g.s);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
      m.setColorAt(i, g.tint);
    });
    m.count = data.length;
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [data]);

  useFrame((state) => {
    mat.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <instancedMesh
      key={count}
      ref={ref}
      args={[geo, mat, Math.max(1, data.length)]}
    />
  );
}

/* ============================================================
   Flowers on stems + the flower heart
   ============================================================ */

const FLOWER_PALETTE = ["#ff8fb3", "#ffd27a", "#b9a5ff", "#fff3f5", "#7ee8d8", "#ff9ec7"].map((c) => new THREE.Color(c));
const HEART_PALETTE = ["#ff8fb3", "#ff6f9e", "#fff3f5"].map((c) => new THREE.Color(c));

export function Flowers() {
  const quality = useStore((s) => s.quality);
  const headRef = useRef<THREE.InstancedMesh>(null);
  const stemRef = useRef<THREE.InstancedMesh>(null);

  const data = useMemo(() => {
    let seed = 21;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    const out: { x: number; z: number; y: number; s: number; color: THREE.Color }[] = [];
    const perField = quality === "rich" ? 34 : 18;
    for (const f of FLOWER_FIELDS) {
      for (let i = 0; i < perField; i++) {
        const a = rnd() * Math.PI * 2;
        const r = Math.sqrt(rnd()) * f.r;
        const x = f.c[0] + Math.cos(a) * r;
        const z = f.c[1] + Math.sin(a) * r;
        const h = terrainHeight(x, z);
        if (h === -Infinity) continue;
        out.push({ x, z, y: h, s: 0.7 + rnd() * 0.7, color: FLOWER_PALETTE[Math.floor(rnd() * FLOWER_PALETTE.length)] });
      }
    }
    // the flower heart — petals along a classic heart curve
    const { c, scale } = FLOWER_HEART;
    const n = 46;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      const x = c[0] + hx * scale;
      const z = c[1] + hy * scale;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      out.push({ x, z, y: h, s: 0.85 + rnd() * 0.5, color: HEART_PALETTE[i % HEART_PALETTE.length] });
    }
    // a few inside the heart
    for (let i = 0; i < 8; i++) {
      const t = rnd() * Math.PI * 2;
      const k = rnd() * 0.45;
      const hx = 16 * Math.pow(Math.sin(t), 3) * k;
      const hy = (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * k;
      const x = c[0] + hx * scale;
      const z = c[1] + hy * scale;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      out.push({ x, z, y: h, s: 0.7 + rnd() * 0.5, color: HEART_PALETTE[Math.floor(rnd() * 2)] });
    }
    return out;
  }, [quality]);

  const stemGeo = useMemo(() => {
    const g = new THREE.CylinderGeometry(0.014, 0.02, 0.26, 5);
    g.translate(0, 0.13, 0);
    return g;
  }, []);
  const headGeo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(0.075, 0);
    g.translate(0, 0.3, 0);
    return g;
  }, []);

  useLayoutEffect(() => {
    const hm = headRef.current;
    const sm = stemRef.current;
    if (!hm || !sm) return;
    const d = new THREE.Object3D();
    data.forEach((f, i) => {
      d.position.set(f.x, f.y, f.z);
      d.rotation.set(0, 0, 0);
      d.scale.setScalar(f.s);
      d.updateMatrix();
      hm.setMatrixAt(i, d.matrix);
      sm.setMatrixAt(i, d.matrix);
      hm.setColorAt(i, f.color);
    });
    hm.count = data.length;
    sm.count = data.length;
    hm.instanceMatrix.needsUpdate = true;
    sm.instanceMatrix.needsUpdate = true;
    if (hm.instanceColor) hm.instanceColor.needsUpdate = true;
  }, [data]);

  return (
    <group>
      <instancedMesh key={`s-${quality}`} ref={stemRef} args={[stemGeo, undefined as unknown as THREE.Material, Math.max(1, data.length)]}>
        <meshStandardMaterial color="#3f8a5c" roughness={1} />
      </instancedMesh>
      <instancedMesh key={`h-${quality}`} ref={headRef} args={[headGeo, undefined as unknown as THREE.Material, Math.max(1, data.length)]} castShadow>
        <meshStandardMaterial roughness={0.7} flatShading />
      </instancedMesh>
    </group>
  );
}
