"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { ISLANDS, LANTERNS, TREES, type V3 } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm } from "@/lib/noise";
import { scatterData, type ScatterPoint } from "@/lib/scatter";

/* ============================================================
   Organic rocks — noise-displaced meshes with procedural moss
   and lichen, plus river stones, pebble clusters and twigs.
   ============================================================ */

function displace(geo: THREE.BufferGeometry, amp: number, freq: number, seed: number) {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = fbm(v.x * freq + seed, v.y * freq * 1.3 + v.z * freq + seed * 1.7, 4) - 0.5;
    const len = v.length() || 1;
    v.addScaledVector(v.clone().divideScalar(len), n * 2 * amp);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
}

/** Boulder with mossy top + lichen flecks baked as vertex colors. */
function makeBoulderGeometry(seed: number, rough: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  displace(geo, 0.26, 1.1, seed); // big shape lobes
  displace(geo, rough, 3.4, seed + 31); // surface roughness
  geo.scale(1.18, 0.82, 1);
  geo.computeVertexNormals();

  const pos = geo.attributes.position as THREE.BufferAttribute;
  const nrm = geo.attributes.normal as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const gray = new THREE.Color("#6e6a7c");
  const grayDark = new THREE.Color("#4e4a5c");
  const moss = new THREE.Color("#4c7a46");
  const mossDark = new THREE.Color("#3a5f38");
  const lichen = new THREE.Color("#b0ac92");
  const c = new THREE.Color();
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const up = Math.max(0, nrm.getY(i));
    const mossMask = Math.pow(up, 1.6) * Math.max(0, fbm(v.x * 1.3 + seed, v.z * 1.3 - v.y + seed, 3) * 1.6 - 0.35);
    c.copy(gray).lerp(grayDark, Math.max(0, fbm(v.x * 2 + seed, v.y * 2 + seed, 2) - 0.35));
    c.lerp(mossDark, Math.min(1, mossMask * 1.1));
    c.lerp(moss, Math.min(1, mossMask * 1.6));
    const lich = Math.max(0, fbm(v.x * 4.2 + seed * 3, v.z * 4.2 + seed, 2) - 0.62) * 2.2 * (0.4 + up);
    c.lerp(lichen, Math.min(0.45, lich));
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.computeBoundingSphere();
  return geo;
}

/** Smooth river stone. */
function makeRiverStoneGeometry(seed: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(1, 3);
  displace(geo, 0.07, 1.8, seed);
  geo.scale(1.25, 0.55, 0.9);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const warm = new THREE.Color("#8a8494");
  const cool = new THREE.Color("#726e82");
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    c.copy(warm).lerp(cool, fbm(pos.getX(i) * 1.5 + seed, pos.getZ(i) * 1.5 + seed, 2));
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geo.computeBoundingSphere();
  return geo;
}

let boulderGeos: THREE.BufferGeometry[] | null = null;
export function boulderVariants(): THREE.BufferGeometry[] {
  if (!boulderGeos) {
    boulderGeos = [makeBoulderGeometry(11, 0.05), makeBoulderGeometry(29, 0.09), makeBoulderGeometry(47, 0.07)];
  }
  return boulderGeos;
}

let riverGeos: THREE.BufferGeometry[] | null = null;
function riverVariants(): THREE.BufferGeometry[] {
  if (!riverGeos) {
    riverGeos = [makeRiverStoneGeometry(61), makeRiverStoneGeometry(83)];
  }
  return riverGeos;
}

function placeMeshes(list: ScatterPoint[], variants: THREE.BufferGeometry[], keyPrefix: string, rough = 0.95) {
  return list.map((p, i) => (
    <mesh
      key={`${keyPrefix}${i}`}
      geometry={variants[p.v % variants.length]}
      position={[p.x, p.y - 0.06 * p.s, p.z]}
      rotation={[0, p.rot, 0]}
      scale={p.s}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial vertexColors roughness={rough} flatShading />
    </mesh>
  ));
}

export function Rocks() {
  const data = scatterData();
  const boulders = boulderVariants();
  const rivers = riverVariants();

  const pebbleGeo = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(1, 1);
    displace(g, 0.16, 2.4, 71);
    g.scale(1.2, 0.7, 1);
    return g;
  }, []);

  const twigGeos = useMemo(
    () =>
      [0, 1, 2].map((i) => {
        const t = new THREE.CylinderGeometry(0.016, 0.024, 1, 5);
        t.rotateZ(Math.PI / 2);
        t.rotateY(i * 0.7);
        const bark = new THREE.CylinderGeometry(0.03, 0.03, 0.22, 5);
        bark.rotateZ(Math.PI / 2);
        bark.translate(0.2 * (i - 1), 0.02, 0);
        const merged = mergeGeometries([t.toNonIndexed(), bark.toNonIndexed()], false)!;
        merged.computeVertexNormals();
        return merged;
      }),
    [],
  );

  const pebbleColor = useMemo(() => new THREE.Color("#7c7888"), []);

  return (
    <group>
      {placeMeshes(data.boulders, boulders, "b")}
      {placeMeshes(data.riverStones, rivers, "r", 0.55)}
      {data.pebbles.map((p, i) => (
        <mesh key={`p${i}`} geometry={pebbleGeo} position={[p.x, p.y, p.z]} rotation={[0, p.rot, 0]} scale={p.s} castShadow>
          <meshStandardMaterial color={pebbleColor} roughness={0.9} flatShading />
        </mesh>
      ))}
      {data.twigs.map((t, i) => (
        <mesh key={`t${i}`} geometry={twigGeos[i % 3]} position={[t.x, t.y + 0.02, t.z]} rotation={[0, t.rot, 0]} scale={t.s} castShadow>
          <meshStandardMaterial color="#5b4634" roughness={1} flatShading />
        </mesh>
      ))}
    </group>
  );
}

/* ============================================================
   Bushes & ferns — ferns now cluster near boulders and dips
   ============================================================ */

function makeBushGeometry(seed: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const dark = new THREE.Color("#22563e");
  const light = new THREE.Color("#3f9a68");
  for (let i = 0; i < 3; i++) {
    const blob = new THREE.IcosahedronGeometry(0.42 + (i % 2) * 0.14, 2);
    displace(blob, 0.12, 2.0, seed + i * 7);
    blob.translate((Math.sin(seed + i) - 0.5) * 0.6, 0.32 + (i % 2) * 0.22, (Math.cos(seed * 1.3 + i) - 0.5) * 0.6);
    const pos = blob.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let k = 0; k < pos.count; k++) {
      const h = (pos.getY(k) - 0.1) / 0.9;
      c.copy(dark).lerp(light, Math.max(0, Math.min(1, h))).offsetHSL(0, 0, (i % 2) * 0.02);
      colors[k * 3] = c.r;
      colors[k * 3 + 1] = c.g;
      colors[k * 3 + 2] = c.b;
    }
    blob.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    parts.push(blob);
  }
  const merged = mergeGeometries(parts, false)!;
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
    for (let i = 0; i < 32; i++) {
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
    const pos = leaf.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let k = 0; k < pos.count; k++) {
      c.copy(dark).lerp(light, Math.min(1, Math.max(0, pos.getY(k) / 0.62)));
      colors[k * 3] = c.r;
      colors[k * 3 + 1] = c.g;
      colors[k * 3 + 2] = c.b;
    }
    leaf.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    parts.push(leaf);
  }
  const merged = mergeGeometries(parts, false)!;
  return merged;
}

export function Ferns() {
  const data = useMemo(() => {
    const rocks = scatterData().boulders;
    const out: { pos: V3; s: number; rot: number }[] = [];
    let seed = 71;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    // ferns hugging the boulders
    rocks.forEach((r) => {
      const n = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++) {
        const a = rnd() * Math.PI * 2;
        const d = 0.7 + rnd() * 0.9;
        const x = r.x + Math.cos(a) * d;
        const zz = r.z + Math.sin(a) * d;
        const h = terrainHeight(x, zz);
        if (h === -Infinity) continue;
        out.push({ pos: [x, h, zz], s: 0.7 + rnd() * 0.8, rot: rnd() * Math.PI * 2 });
      }
    });
    // plus a few near lanterns & trees
    [...LANTERNS, ...TREES.slice(0, 6)].forEach((z) => {
      const n = 1 + Math.floor(rnd() * 2);
      for (let i = 0; i < n; i++) {
        const x = z[0] + (rnd() - 0.5) * 3.2;
        const zz = z[2] + (rnd() - 0.5) * 3.2;
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

/* ============================================================
   Clover patches — tiny three-leaf clusters in low areas
   ============================================================ */

function makeCloverGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const leaf = new THREE.CircleGeometry(0.045, 6, 0, Math.PI * 2);
    leaf.rotateX(-Math.PI / 2 + 0.35);
    const a = (i / 3) * Math.PI * 2;
    leaf.rotateY(a);
    leaf.translate(Math.cos(a) * 0.045, 0.035, Math.sin(a) * 0.045);
    parts.push(leaf.toNonIndexed());
  }
  const merged = mergeGeometries(parts, false)!;
  return merged;
}

export function Clover() {
  const zones = scatterData().cloverZones;
  const geo = useMemo(makeCloverGeometry, []);
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = zones.length * 22;
  useLayoutEffect(() => {
    const m = ref.current;
    if (!m) return;
    const d = new THREE.Object3D();
    let s = 9;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    let i = 0;
    zones.forEach((z) => {
      for (let k = 0; k < 22; k++) {
        const a = rnd() * Math.PI * 2;
        const r = Math.sqrt(rnd()) * z.r;
        const x = z.x + Math.cos(a) * r;
        const zz = z.z + Math.sin(a) * r;
        const h = terrainHeight(x, zz);
        if (h === -Infinity) continue;
        d.position.set(x, h + 0.005, zz);
        d.rotation.set(0, rnd() * Math.PI * 2, 0);
        d.scale.setScalar(0.7 + rnd() * 0.7);
        d.updateMatrix();
        m.setMatrixAt(i++, d.matrix);
      }
    });
    m.count = i;
    m.instanceMatrix.needsUpdate = true;
  }, [zones]);
  return (
    <instancedMesh ref={ref} args={[geo, undefined as unknown as THREE.Material, Math.max(1, count)]}>
      <meshStandardMaterial color="#2f8a4e" roughness={0.9} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}
