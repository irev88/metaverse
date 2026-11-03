"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { FLOWER_FIELDS, FLOWER_HEART, ISLANDS } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";
import { fbm } from "@/lib/noise";
import { avoidsPOI, scatterData, soilNoise } from "@/lib/scatter";
import { useStore } from "@/lib/store";

/* ============================================================
   Proper 3D grass blades — tapered, gently curved ribbons with
   randomized height/width/bend/twist. One merged geometry per
   species, instanced thousands of times with per-instance hue
   variation and a translucent, wind-swept shader.
   ============================================================ */

/** Curved, tapered blade ribbon (>= 2*segments+1 triangles). */
function bladeGeometry(
  segments: number,
  height: number,
  width: number,
  bend: number,
  twist: number,
  tipTaper = 1,
): THREE.BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * height;
    const zoff = bend * t * t * height; // gentle forward curve
    const w = Math.max(0.004, width * Math.pow(1 - t * 0.92 * tipTaper, 0.85)) * 0.5;
    const ang = twist * t;
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    // left vertex
    positions.push(-w * ca, y, zoff - w * sa);
    // right vertex
    positions.push(w * ca, y, zoff + w * sa);
    uvs.push(0, t, 1, t);
  }
  // pointed tip
  positions.push(0, height * 1.04, bend * height + width * 0.12);
  uvs.push(0.5, 1);

  for (let i = 0; i < segments; i++) {
    const a = i * 2;
    indices.push(a, a + 1, a + 3);
    indices.push(a, a + 3, a + 2);
  }
  const tip = segments * 2;
  indices.push(tip, tip + 1, tip + 2);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/* ---------- species geometries ---------- */

function turfGeometry(): THREE.BufferGeometry {
  // short ground-cover blade
  return bladeGeometry(4, 0.22, 0.05, 0.5, 0.5);
}

function meadowGeometry(): THREE.BufferGeometry {
  // tall blade + seed head
  const blade = bladeGeometry(6, 0.48, 0.06, 0.62, 0.8);
  const head = new THREE.CapsuleGeometry(0.018, 0.09, 3, 6);
  head.translate(0, 0.05, 0);
  head.rotateX(0.35);
  head.translate(0, 0.5, 0.48 * 0.62 * 0.48);
  const merged = mergeAll([blade, head]);
  return merged;
}

function ornamentalGeometry(): THREE.BufferGeometry {
  // wispy fan of 3 thin blades + a soft cream puff
  const parts: THREE.BufferGeometry[] = [];
  for (let i = 0; i < 3; i++) {
    const b = bladeGeometry(5, 0.52 + (i % 2) * 0.12, 0.028, 0.85, 0.4);
    b.rotateY((i / 3) * Math.PI * 2);
    parts.push(b.index ? b.toNonIndexed() : b);
  }
  const puff = new THREE.IcosahedronGeometry(0.075, 1);
  puff.scale(1, 1.7, 1);
  puff.translate(0, 0.62, 0.14);
  parts.push(puff.toNonIndexed());
  return mergeAll(parts);
}

function paintUniform(geo: THREE.BufferGeometry, c: THREE.Color) {
  const n = geo.attributes.position.count;
  const colors = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
}

/**
 * Safe merge: toNonIndexed every part (three.js can't merge mixed index state)
 * and make vertex attributes uniform — if ANY part has a "color" attribute,
 * fill the ones missing it with white, because mergeGeometries() returns null
 * on mismatched attribute sets (crashes downstream on the null).
 */
function mergeAll(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const normalized = parts.map((p) => (p.index ? p.toNonIndexed() : p));
  if (normalized.some((p) => p.attributes.color)) {
    const white = new THREE.Color(1, 1, 1);
    normalized.forEach((p) => {
      if (!p.attributes.color) paintUniform(p, white);
    });
  }
  const merged = mergeGeometries(normalized, false);
  if (!merged) throw new Error(`mergeAll: ${parts.length} parts have incompatible attributes`);
  merged.computeVertexNormals();
  return merged;
}

/* ---------- shared translucent wind shader ---------- */

const grassVert = /* glsl */ `
  uniform float uTime;
  uniform float uGust;
  uniform float uAmp;
  varying float vH;
  varying vec3 vTint;
  varying vec3 vWorld;
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
    wp = modelMatrix * wp;
    vWorld = wp.xyz;
    // layered wind: rolling wave sweeping the field + soft gust swell
    float wave = sin(dot(wp.xz, vec2(0.32, 0.21)) - uTime * 1.05);
    wave += 0.5 * sin(dot(wp.xz, vec2(-0.18, 0.41)) - uTime * 1.9);
    float gust = 0.55 + 0.45 * uGust;
    float sway = wave * uAmp * gust * pow(uv.y, 1.6);
    wp.x += sway;
    wp.z += sway * 0.55;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const grassFrag = /* glsl */ `
  uniform vec3 uLightDir;
  varying float vH;
  varying vec3 vTint;
  varying vec3 vWorld;
  void main() {
    // deep forest green base -> warm yellow-green tip
    vec3 base = vec3(0.075, 0.21, 0.115);
    vec3 tip = vec3(0.52, 0.72, 0.28);
    vec3 col = mix(base, tip, smoothstep(0.05, 0.95, vH));
    // warm the very tip (sun-kissed)
    col += vec3(0.16, 0.12, 0.03) * smoothstep(0.72, 1.0, vH);
    col *= vTint;
    // fake translucency: glow when the light is behind the blade
    vec3 view = normalize(vWorld - cameraPosition);
    float back = pow(max(dot(normalize(uLightDir), view), 0.0), 3.0);
    col += vec3(0.30, 0.26, 0.10) * back * vH * 0.6;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function useGrassMaterial(amp: number) {
  return useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: grassVert,
        fragmentShader: grassFrag,
        uniforms: {
          uTime: { value: 0 },
          uGust: { value: 0.5 },
          uAmp: { value: amp },
          uLightDir: { value: new THREE.Vector3(0.62, 0.42, 0.66).normalize() },
        },
        side: THREE.DoubleSide,
      }),
    [amp],
  );
}

/* ---------- placement ---------- */

function makePlacement(
  count: number,
  seed: number,
  opts: { hMin: number; hMax: number; clump: number; nearRockBoost: number; avoidBare: boolean },
): { x: number; z: number; y: number; s: number; rot: number; tint: THREE.Color }[] {
  const rnd0 = (s: number) => {
    let a = s >>> 0;
    return () => {
      a = (a * 16807) % 2147483647;
      return (a - 1) / 2147483646;
    };
  };
  const rnd = rnd0(seed);
  const rocks = scatterData().boulders;
  const out: { x: number; z: number; y: number; s: number; rot: number; tint: THREE.Color }[] = [];
  const tint = new THREE.Color();
  let guard = 0;
  while (out.length < count && guard < count * 6) {
    guard++;
    const isl = ISLANDS[Math.floor(rnd() * ISLANDS.length)];
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd()) * (isl.r - 1.6);
    const x = isl.c[0] + Math.cos(a) * r;
    const z = isl.c[1] + Math.sin(a) * r;
    if (avoidsPOI(x, z, 0.2)) continue;
    const y = terrainHeight(x, z);
    if (y === -Infinity) continue;
    // noise clumping — natural patches, denser in low areas
    const clump = fbm(x * 0.24 + 3, z * 0.24 + 8, 3);
    let keep = 0.16 + Math.pow(Math.max(0, clump - 0.28) / 0.72, 1.4) * opts.clump;
    keep *= 1.25 - Math.min(1, y / 1.6) * 0.55; // denser in dips
    if (opts.nearRockBoost > 0) {
      for (const b of rocks) {
        const d = Math.hypot(x - b.x, z - b.z);
        if (d < 2.4) {
          keep += opts.nearRockBoost * (1 - d / 2.4);
          break;
        }
      }
    }
    const soil = soilNoise(x, z);
    if (soil.bare > 0.62) keep *= 0.12; // sparse on exposed soil
    else if (opts.avoidBare && soil.bare > 0.5) keep *= 0.5;
    if (rnd() > Math.min(1, keep)) continue;

    const hueJitter = (rnd() - 0.5) * 0.075; // ± ~13.5°
    tint.setHSL(0.29 + hueJitter, 0.42 + rnd() * 0.16, 0.62 + rnd() * 0.22);
    const s = 0.7 + rnd() * 0.9;
    out.push({ x, z, y, s, rot: rnd() * Math.PI * 2, tint });
  }
  return out;
}

/* ---------- species components ---------- */

function Species({
  count,
  seed,
  geometry,
  material,
  opts,
}: {
  count: number;
  seed: number;
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  opts: { hMin: number; hMax: number; clump: number; nearRockBoost: number; avoidBare: boolean };
}) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(
    () => makePlacement(count, seed, opts),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- opts is an inline literal; deps are its primitives
    [count, seed, opts.hMin, opts.hMax, opts.clump, opts.nearRockBoost, opts.avoidBare],
  );
  useLayoutEffect(() => {
    const m = ref.current;
    if (!m) return;
    const d = new THREE.Object3D();
    data.forEach((g, i) => {
      d.position.set(g.x, g.y - 0.015, g.z);
      d.rotation.set(0, g.rot, 0);
      const sc = g.s;
      d.scale.set(sc * 0.9, sc, sc * 0.9);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
      m.setColorAt(i, g.tint);
    });
    m.count = data.length;
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [data, opts]);
  return <instancedMesh key={count} ref={ref} args={[geometry, material, Math.max(1, data.length)]} />;
}

export function Grass() {
  const quality = useStore((s) => s.quality);
  const rich = quality === "rich";

  const turfGeo = useMemo(turfGeometry, []);
  const meadowGeo = useMemo(meadowGeometry, []);
  const ornGeo = useMemo(ornamentalGeometry, []);

  const turfMat = useGrassMaterial(0.055);
  const meadowMat = useGrassMaterial(0.12);
  const ornMat = useGrassMaterial(0.17);

  const gust = useRef(0);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // slow breathing gust value shared by all species
    const g = 0.5 + 0.5 * Math.sin(t * 0.23) * Math.sin(t * 0.11 + 1.7);
    gust.current += (g - gust.current) * 0.02;
    [turfMat, meadowMat, ornMat].forEach((m) => {
      m.uniforms.uTime.value = t;
      m.uniforms.uGust.value = gust.current;
    });
  });

  return (
    <group>
      <Species
        count={rich ? 9000 : 4200}
        seed={101}
        geometry={turfGeo}
        material={turfMat}
        opts={{ hMin: 0.15, hMax: 0.28, clump: 0.9, nearRockBoost: 0.35, avoidBare: false }}
      />
      <Species
        count={rich ? 2400 : 1100}
        seed={202}
        geometry={meadowGeo}
        material={meadowMat}
        opts={{ hMin: 0.34, hMax: 0.55, clump: 1.15, nearRockBoost: 0.25, avoidBare: true }}
      />
      <Species
        count={rich ? 130 : 60}
        seed={303}
        geometry={ornGeo}
        material={ornMat}
        opts={{ hMin: 0.5, hMax: 0.72, clump: 1.5, nearRockBoost: 0.6, avoidBare: true }}
      />
    </group>
  );
}

/* ============================================================
   Wildflowers — daisies, lavender, poppies, baby's breath
   ============================================================ */

type FlowerKind = "daisy" | "lavender" | "poppy" | "babys";

const FLOWER_HUES: Record<FlowerKind, { head: string; core: string }> = {
  daisy: { head: "#f7f3ea", core: "#f2c94c" },
  lavender: { head: "#9d8cd8", core: "#8a76c8" },
  poppy: { head: "#e8604a", core: "#3a2a28" },
  babys: { head: "#fbf8f2", core: "#f0ead8" },
};

function flowerGeometry(kind: FlowerKind): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  // stem
  const stem = new THREE.CylinderGeometry(0.008, 0.013, 0.34, 5);
  stem.translate(0, 0.17, 0);
  paintUniform(stem, new THREE.Color("#3f7a4e"));
  parts.push(stem.toNonIndexed());
  if (kind === "lavender") {
    // spike of tiny buds
    for (let i = 0; i < 6; i++) {
      const bud = new THREE.IcosahedronGeometry(0.028, 0);
      bud.translate(0, 0.3 + i * 0.045, 0);
      paintUniform(bud, new THREE.Color(FLOWER_HUES.lavender.head));
      parts.push(bud.toNonIndexed());
    }
  } else if (kind === "poppy") {
    const cup = new THREE.IcosahedronGeometry(0.06, 1);
    cup.scale(1, 0.6, 1);
    cup.translate(0, 0.37, 0);
    paintUniform(cup, new THREE.Color(FLOWER_HUES.poppy.head));
    parts.push(cup.toNonIndexed());
    const core = new THREE.IcosahedronGeometry(0.02, 0);
    core.translate(0, 0.4, 0);
    paintUniform(core, new THREE.Color(FLOWER_HUES.poppy.core));
    parts.push(core.toNonIndexed());
  } else if (kind === "babys") {
    for (let i = 0; i < 7; i++) {
      const dot = new THREE.IcosahedronGeometry(0.016, 0);
      const a = i * 2.4;
      dot.translate(Math.cos(a) * 0.045, 0.36 + Math.sin(i * 1.3) * 0.03, Math.sin(a) * 0.045);
      paintUniform(dot, new THREE.Color(FLOWER_HUES.babys.head));
      parts.push(dot.toNonIndexed());
    }
  } else {
    // daisy: ring of petals
    for (let i = 0; i < 8; i++) {
      const petal = new THREE.CapsuleGeometry(0.012, 0.05, 2, 5);
      petal.scale(1, 1, 0.4);
      petal.rotateX(Math.PI / 2);
      petal.translate(0, 0.04, 0);
      petal.rotateX(-0.4);
      petal.rotateY((i / 8) * Math.PI * 2);
      petal.translate(0, 0.36, 0);
      paintUniform(petal, new THREE.Color(FLOWER_HUES.daisy.head));
      parts.push(petal.toNonIndexed());
    }
    const core = new THREE.IcosahedronGeometry(0.024, 0);
    core.translate(0, 0.37, 0);
    paintUniform(core, new THREE.Color(FLOWER_HUES.daisy.core));
    parts.push(core.toNonIndexed());
  }
  return mergeAll(parts);
}

const KINDS: FlowerKind[] = ["daisy", "lavender", "poppy", "babys"];

export function Wildflowers() {
  const quality = useStore((s) => s.quality);
  const data = useMemo(() => {
    let s = 77;
    const rnd = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
    const out: { x: number; z: number; y: number; s: number; rot: number; kind: FlowerKind }[] = [];
    const per = quality === "rich" ? 10 : 5;
    for (const f of FLOWER_FIELDS) {
      for (let i = 0; i < per; i++) {
        const a = rnd() * Math.PI * 2;
        const r = Math.sqrt(rnd()) * f.r;
        const x = f.c[0] + Math.cos(a) * r;
        const z = f.c[1] + Math.sin(a) * r;
        const h = terrainHeight(x, z);
        if (h === -Infinity) continue;
        out.push({ x, z, y: h, s: 0.8 + rnd() * 0.5, rot: rnd() * Math.PI * 2, kind: KINDS[Math.floor(rnd() * KINDS.length)] });
      }
    }
    // a few scattered in the wild via noise, second layer
    let guard = 0;
    const IS = ISLANDS;
    while (out.length < (quality === "rich" ? 130 : 60) && guard < 1200) {
      guard++;
      const isl = IS[Math.floor(rnd() * IS.length)];
      const a = rnd() * Math.PI * 2;
      const r = Math.sqrt(rnd()) * (isl.r - 2);
      const x = isl.c[0] + Math.cos(a) * r;
      const z = isl.c[1] + Math.sin(a) * r;
      const h = terrainHeight(x, z);
      if (h === -Infinity || avoidsPOI(x, z, 0.3)) continue;
      const clump = fbm(x * 0.27 + 55, z * 0.27 + 21, 3);
      if (rnd() > clump * 1.15) continue;
      out.push({ x, z, y: h, s: 0.75 + rnd() * 0.55, rot: rnd() * Math.PI * 2, kind: KINDS[Math.floor(rnd() * KINDS.length)] });
    }
    return out;
  }, [quality]);

  const geos = useMemo(() => {
    const map = {} as Record<FlowerKind, THREE.BufferGeometry>;
    KINDS.forEach((k) => (map[k] = flowerGeometry(k)));
    return map;
  }, []);

  // gentle sway via a group rotation is overkill; use a lightweight shader-free approach:
  // animate the whole group's subtle tilt — flowers also get wind from the grass feel
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.elapsedTime;
      group.current.rotation.z = Math.sin(t * 1.1) * 0.004;
      group.current.rotation.x = Math.cos(t * 0.9) * 0.003;
    }
  });

  return (
    <group ref={group}>
      {data.map((f, i) => (
        <mesh key={i} geometry={geos[f.kind]} position={[f.x, f.y, f.z]} rotation={[0, f.rot, 0]} scale={f.s}>
          <meshStandardMaterial vertexColors roughness={0.8} flatShading />
        </mesh>
      ))}
    </group>
  );
}

/* ============================================================
   Flower heart + field blooms (kept from previous version)
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
    const perField = quality === "rich" ? 26 : 14;
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
