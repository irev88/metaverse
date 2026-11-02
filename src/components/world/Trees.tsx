"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { BLOSSOM_TREES, ISLANDS, LANTERNS, PINE_TREES, TREES, type V3 } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm, hash2 } from "@/lib/noise";

/* ============================================================
   Procedural, high-poly vegetation — every tree is a merged,
   vertex-colored mesh: bent tapered trunk + noise-displaced
   organic canopy blobs (or layered pine cones).
   ============================================================ */

function displace(geo: THREE.BufferGeometry, amp: number, freq: number, seed: number) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = fbm(v.x * freq + seed, v.y * freq * 1.3 + v.z * freq + seed * 1.7, 3) - 0.5;
    const len = v.length() || 1;
    v.addScaledVector(v.clone().divideScalar(len), n * 2 * amp);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
}

/**
 * Merge helper that normalizes every part to non-indexed first.
 * Polyhedron geometries (icosahedron etc.) are non-indexed while
 * cylinders/cones are indexed — mergeGeometries() returns null when
 * they are mixed, which would crash the renderer's frustum culler.
 */
function mergeAll(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const normalized = parts.map((p) => (p.index ? p.toNonIndexed() : p));
  const merged = mergeGeometries(normalized, false);
  if (!merged) {
    console.warn("mergeAll failed — falling back to first part");
    return normalized[0];
  }
  merged.computeBoundingSphere();
  return merged;
}

function paintByHeight(geo: THREE.BufferGeometry, bottom: THREE.Color, top: THREE.Color, variance = 0.14, seed = 1) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  geo.computeBoundingBox();
  const bb = geo.boundingBox!;
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const k = (pos.getY(i) - bb.min.y) / Math.max(0.001, bb.max.y - bb.min.y);
    const n = fbm(pos.getX(i) * 2.2 + seed, pos.getZ(i) * 2.2 + pos.getY(i) * 2.2 + seed, 3);
    c.copy(bottom).lerp(top, k).offsetHSL(0, 0, (n - 0.5) * variance);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

function makeBlob(r: number, detail: number, amp: number, seed: number, bottom: THREE.Color, top: THREE.Color): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(r, detail);
  displace(geo, r * amp, 1.6, seed);
  paintByHeight(geo, bottom, top, 0.1, seed);
  return geo;
}

function makeTrunk(h: number, r0: number, r1: number, lean: number, seed: number): THREE.BufferGeometry {
  const geo = new THREE.CylinderGeometry(r1, r0, h, 9, 6);
  geo.translate(0, h / 2, 0);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const k = y / h;
    pos.setX(i, pos.getX(i) + lean * k * k + (fbm(y * 2.0 + seed, 3.3, 2) - 0.5) * 0.07);
    pos.setZ(i, pos.getZ(i) + (fbm(y * 2.3 + seed, 7.7, 2) - 0.5) * 0.07);
  }
  geo.computeVertexNormals();
  paintByHeight(geo, new THREE.Color("#3e2d22"), new THREE.Color("#6b4b3a"), 0.08, seed);
  return geo;
}

type TreeKind = "oak" | "blossom" | "pine";

function buildTree(kind: TreeKind, seed: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  if (kind === "pine") {
    parts.push(makeTrunk(1.3, 0.22, 0.12, 0.08, seed));
    const dark = new THREE.Color("#1c5a44");
    const light = new THREE.Color("#2f8a5e");
    const layers = 5;
    for (let i = 0; i < layers; i++) {
      const k = i / (layers - 1);
      const r = 1.25 * (1 - k * 0.72);
      const h = 1.15 * (1 - k * 0.35);
      const cone = new THREE.ConeGeometry(r, h, 10, 3);
      cone.translate(0, 1.15 + k * 1.5 + h / 2, 0);
      displace(cone, r * 0.22, 3.2, seed + i * 5);
      paintByHeight(cone, dark, light, 0.1, seed + i);
      parts.push(cone);
    }
  } else {
    const blossom = kind === "blossom";
    parts.push(makeTrunk(1.7, 0.26, 0.13, (hash2(seed, 1) - 0.5) * 0.55, seed));
    // a couple of bare branches
    for (let b = 0; b < 2; b++) {
      const branch = new THREE.CylinderGeometry(0.05, 0.09, 0.9, 6, 2);
      branch.translate(0, 0.45, 0);
      branch.rotateZ(0.7 + b * 0.9 + hash2(seed, b) * 0.4);
      branch.rotateY(b * 2.4 + seed);
      branch.translate(0, 1.45, 0);
      paintByHeight(branch, new THREE.Color("#4a3626"), new THREE.Color("#6b4b3a"), 0.05, seed + b * 3);
      parts.push(branch);
    }
    const base = blossom ? new THREE.Color("#8a4a68") : new THREE.Color("#1d5c40");
    const tip = blossom ? new THREE.Color("#f3b1cd") : new THREE.Color("#43a577");
    const blobs = 6;
    for (let i = 0; i < blobs; i++) {
      const a = (i / blobs) * Math.PI * 2 + seed;
      const rad = i < 4 ? 0.95 : 0.7;
      const r = 0.78 + hash2(seed, i * 7) * 0.42;
      const blob = makeBlob(r, 2, 0.24, seed + i * 11, base, tip);
      blob.translate(Math.cos(a) * rad * 0.9, 2.35 + (i % 2) * 0.5 + hash2(seed, i) * 0.4, Math.sin(a) * rad * 0.9);
      parts.push(blob);
    }
    const crown = makeBlob(1.0, 2, 0.22, seed + 99, base, tip);
    crown.translate(0, 3.15, 0);
    parts.push(crown);
  }
  const merged = mergeAll(parts);
  parts.forEach((p) => p.dispose());
  return merged;
}

const treeCache = new Map<string, THREE.BufferGeometry>();
function treeGeometry(kind: TreeKind, seed: number): THREE.BufferGeometry {
  const key = `${kind}-${seed}`;
  let geo = treeCache.get(key);
  if (!geo) {
    geo = buildTree(kind, seed);
    treeCache.set(key, geo);
  }
  return geo;
}

function TreeMesh({ pos, kind, seed, scale = 1 }: { pos: V3; kind: TreeKind; seed: number; scale?: number }) {
  const geo = useMemo(() => treeGeometry(kind, seed), [kind, seed]);
  const y = useMemo(() => (pos[1] || 0) + terrainHeight(pos[0], pos[2]), [pos]);
  const rot = useMemo(() => hash2(seed, 3) * Math.PI * 2, [seed]);
  const phase = useMemo(() => hash2(seed, 9) * 10, [seed]);
  const sway = useRef<THREE.Group>(null);

  // gentle wind sway of the whole crown
  useFrame((state) => {
    const g = sway.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.rotation.z = Math.sin(t * 0.62 + phase) * 0.013;
    g.rotation.x = Math.cos(t * 0.5 + phase * 1.3) * 0.01;
  });

  return (
    <group position={[pos[0], y, pos[2]]} rotation={[0, rot, 0]} scale={scale}>
      <group ref={sway}>
        <mesh geometry={geo} castShadow>
          <meshStandardMaterial vertexColors roughness={0.9} flatShading />
        </mesh>
      </group>
    </group>
  );
}

export function Trees() {
  return (
    <group>
      {TREES.map((p, i) => (
        <TreeMesh key={`o${i}`} pos={p} kind="oak" seed={100 + i * 17} scale={1.05 + ((i * 13) % 5) * 0.09} />
      ))}
      {BLOSSOM_TREES.map((p, i) => (
        <TreeMesh key={`b${i}`} pos={p} kind="blossom" seed={300 + i * 23} scale={0.95 + ((i * 17) % 5) * 0.08} />
      ))}
      {PINE_TREES.map((p, i) => (
        <TreeMesh key={`p${i}`} pos={p} kind="pine" seed={500 + i * 29} scale={1.1 + ((i * 11) % 5) * 0.1} />
      ))}
    </group>
  );
}

/* ============================================================
   Rocks — noise-displaced boulders scattered over the isles
   ============================================================ */

function makeRockGeometry(seed: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(0.6, 2);
  displace(geo, 0.2, 1.4, seed);
  geo.scale(1.25, 0.85, 1);
  paintByHeight(geo, new THREE.Color("#4c4668"), new THREE.Color("#7d769c"), 0.1, seed);
  geo.computeVertexNormals();
  return geo;
}

export function Rocks() {
  const data = useMemo(() => {
    const out: { pos: V3; s: number; rot: number }[] = [];
    let seed = 5;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < 44; i++) {
      const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
      const a = rnd() * Math.PI * 2;
      const r = 2 + Math.sqrt(rnd()) * (isl.r - 3);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      out.push({ pos: [x, h - 0.1, z], s: 0.4 + rnd() * 1.3, rot: rnd() * Math.PI * 2 });
    }
    return out;
  }, []);
  const geo = useMemo(() => makeRockGeometry(3), []);
  const ref = useMemo(() => {
    const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true }), Math.max(1, data.length));
    const d = new THREE.Object3D();
    data.forEach((r, i) => {
      d.position.set(r.pos[0], r.pos[1], r.pos[2]);
      d.rotation.set(r.rot * 0.3, r.rot, r.rot * 0.2);
      d.scale.setScalar(r.s);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
    });
    m.count = data.length;
    m.instanceMatrix.needsUpdate = true;
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }, [geo, data]);
  return <primitive object={ref} />;
}

/* ============================================================
   Bushes & ferns
   ============================================================ */

function makeBushGeometry(seed: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const dark = new THREE.Color("#22563e");
  const light = new THREE.Color("#3f9a68");
  for (let i = 0; i < 3; i++) {
    const blob = makeBlob(0.42 + (i % 2) * 0.14, 2, 0.28, seed + i * 7, dark, light);
    blob.translate((hash2(seed, i) - 0.5) * 0.6, 0.32 + (i % 2) * 0.22, (hash2(i, seed) - 0.5) * 0.6);
    parts.push(blob);
  }
  const merged = mergeAll(parts);
  parts.forEach((p) => p.dispose());
  return merged;
}

export function Bushes() {
  const data = useMemo(() => {
    const out: { pos: V3; s: number; rot: number }[] = [];
    let seed = 17;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < 26; i++) {
      const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
      const a = rnd() * Math.PI * 2;
      const r = 2.5 + Math.sqrt(rnd()) * (isl.r - 4);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity) continue;
      out.push({ pos: [x, h, z], s: 0.7 + rnd() * 0.9, rot: rnd() * Math.PI * 2 });
    }
    return out;
  }, []);
  const geos = useMemo(() => [0, 1, 2].map((i) => makeBushGeometry(50 + i)), []);
  return (
    <group>
      {data.map((b, i) => (
        <mesh key={i} geometry={geos[i % 3]} position={b.pos} rotation={[0, b.rot, 0]} scale={b.s} castShadow>
          <meshStandardMaterial vertexColors roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function makeFernGeometry(seed: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const dark = new THREE.Color("#2a6a48");
  const light = new THREE.Color("#57b57e");
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2 + seed;
    const leaf = new THREE.ConeGeometry(0.09, 0.62, 5, 3);
    leaf.translate(0, 0.31, 0);
    leaf.rotateX(Math.cos(a) * 0.85);
    leaf.rotateZ(Math.sin(a) * 0.85);
    paintByHeight(leaf, dark, light, 0.08, seed + i);
    parts.push(leaf);
  }
  const merged = mergeAll(parts);
  parts.forEach((p) => p.dispose());
  return merged;
}

export function Ferns() {
  const data = useMemo(() => {
    const zones = [...LANTERNS, ...TREES.slice(0, 8)];
    const out: { pos: V3; s: number; rot: number }[] = [];
    let seed = 71;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    zones.forEach((z) => {
      const n = 2 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) {
        const x = z[0] + (rnd() - 0.5) * 3.4;
        const zz = z[2] + (rnd() - 0.5) * 3.4;
        const h = terrainHeight(x, zz);
        if (h === -Infinity) continue;
        out.push({ pos: [x, h, zz], s: 0.7 + rnd() * 0.8, rot: rnd() * Math.PI * 2 });
      }
    });
    return out;
  }, []);
  const geos = useMemo(() => [0, 1].map((i) => makeFernGeometry(80 + i)), []);
  return (
    <group>
      {data.map((b, i) => (
        <mesh key={i} geometry={geos[i % 2]} position={b.pos} rotation={[0, b.rot, 0]} scale={b.s}>
          <meshStandardMaterial vertexColors roughness={0.9} flatShading />
        </mesh>
      ))}
    </group>
  );
}
