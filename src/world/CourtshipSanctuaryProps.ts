import * as THREE from 'three';
import { sampleHeroCliffHeight } from './NordicCliffWorld';

export const SANCTUARY_CENTER_Z = -1.85;

export interface CourtshipSanctuaryController {
  group: THREE.Group;
  setEtchProgress: (progress: number) => void;
  setAcceptanceGlow: (glow: number) => void;
  setWildflowerBloom: (bloom: number) => void;
  setCelebrationFlowerWave: (wave: number) => void;
  setFadeOut: (fade: number) => void;
  triggerResonanceWave: (origin?: THREE.Vector3) => void;
  spawnShimmerBurst: (worldPos: THREE.Vector3, warmRose?: boolean, count?: number) => void;
  emitWingWake: (posA: THREE.Vector3, posB: THREE.Vector3, colorHex?: number) => void;
  update: (dt: number, elapsedSec: number, windStrength?: number) => void;
}

export function createCourtshipSanctuaryProps(): CourtshipSanctuaryController {
  const group = new THREE.Group();
  group.name = 'CourtshipSanctuaryProps';

  // ==========================================================================
  // 1. ORGANIC CIRCULAR TERRAIN-CONFORMING SAND-HEART & FAIRY-RING DISC
  //    (Uses a radially subdivided circular mesh + soft organic radial fade
  //     so there is NEVER any artificial rectangular boundary!)
  // ==========================================================================
  const DISC_RADIUS = 3.15;
  const RADIAL_SEGS = 84;
  const RING_SEGS = 28;
  const discPositions: number[] = [];
  const discUvs: number[] = [];
  const discIndices: number[] = [];

  for (let r = 0; r <= RING_SEGS; r++) {
    const rFrac = r / RING_SEGS;
    const rad = rFrac * DISC_RADIUS;
    for (let s = 0; s <= RADIAL_SEGS; s++) {
      const theta = (s / RADIAL_SEGS) * Math.PI * 2;
      const lx = Math.cos(theta) * rad;
      const lzLocal = Math.sin(theta) * rad;
      const wz = lzLocal + SANCTUARY_CENTER_Z;
      const gy = sampleHeroCliffHeight(lx, wz);
      discPositions.push(lx, gy + 0.022, wz);
      discUvs.push(0.5 + (lx / (DISC_RADIUS * 2.0)), 0.5 + (lzLocal / (DISC_RADIUS * 2.0)));
    }
  }

  const stride = RADIAL_SEGS + 1;
  for (let r = 0; r < RING_SEGS; r++) {
    for (let s = 0; s < RADIAL_SEGS; s++) {
      const a = r * stride + s;
      const b = a + stride;
      const c = a + 1;
      const d = b + 1;
      discIndices.push(a, b, c, c, b, d);
    }
  }

  const sandGeo = new THREE.BufferGeometry();
  sandGeo.setAttribute('position', new THREE.Float32BufferAttribute(discPositions, 3));
  sandGeo.setAttribute('uv', new THREE.Float32BufferAttribute(discUvs, 2));
  sandGeo.setIndex(discIndices);
  sandGeo.computeVertexNormals();

  const sandUniforms = {
    uTime: { value: 0 },
    uEtchProgress: { value: 0 },
    uAcceptanceGlow: { value: 0 },
    uFade: { value: 1 },
  };

  const sandMat = new THREE.ShaderMaterial({
    uniforms: sandUniforms,
    transparent: true,
    depthWrite: false,
    fog: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uEtchProgress;
      uniform float uAcceptanceGlow;
      uniform float uFade;
      varying vec2 vUv;

      float hash21(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float valueNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash21(i);
        float b = hash21(i + vec2(1.0, 0.0));
        float c = hash21(i + vec2(0.0, 1.0));
        float d = hash21(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        if (uEtchProgress <= 0.001) discard;

        // Normalized disc space (-1 .. +1), guaranteed circular fade to exact 0 well inside rim!
        vec2 centered = (vUv - 0.5) * 2.0;
        float rNorm = length(centered);
        if (rNorm >= 0.96) discard;

        float nWarp = (valueNoise(centered * 4.5 + uTime * 0.08) - 0.5) * 0.14;
        float circularFeather = smoothstep(0.95, 0.46, rNorm + nWarp);

        // Heart coordinates scaled gracefully inside the center of the circular glade
        vec2 p = centered * vec2(2.35, -2.25);
        p.y += 0.16;

        float minDist = 99.0;
        float bestFrac = 0.0;
        const int STEPS = 76;
        for (int i = 0; i < STEPS; i++) {
          float frac = float(i) / float(STEPS - 1);
          if (frac > uEtchProgress) break;
          float a = frac * 6.2831853 - 1.5707963;
          float sa = sin(a);
          float hx = 16.0 * sa * sa * sa;
          float hy = 13.0 * cos(a) - 5.0 * cos(2.0 * a) - 2.0 * cos(3.0 * a) - cos(4.0 * a);
          vec2 hp = vec2(hx, hy) * 0.056;
          hp.x += sin(a * 5.0) * 0.012;
          hp.y += cos(a * 4.0) * 0.011;
          float d = length(p - hp);
          if (d < minDist) {
            minDist = d;
            bestFrac = frac;
          }
        }

        float grooveCore = smoothstep(0.058, 0.010, minDist);
        float grooveHalo = smoothstep(0.20, 0.0, minDist) * (0.32 + 0.68 * uAcceptanceGlow);
        float tipSpark = smoothstep(0.08, 0.0, abs(bestFrac - uEtchProgress)) * smoothstep(0.12, 0.0, minDist);

        // Soft organic circular fairy-ring stardust wreath around the heart
        float wreathRing = exp(-pow((rNorm - 0.62 + nWarp * 0.45) * 7.5, 2.0)) * valueNoise(centered * 9.0 - uTime * 0.2);
        float wreathGlow = wreathRing * 0.28 * (0.35 + 0.65 * uAcceptanceGlow) * smoothstep(0.2, 1.0, uEtchProgress);

        float pulse = 0.86 + 0.14 * sin(uTime * 2.5 - bestFrac * 12.56);

        vec3 etchCyan = vec3(0.28, 0.82, 1.0);
        vec3 warmRoseGold = mix(
          vec3(1.0, 0.36, 0.66),
          vec3(1.0, 0.86, 0.48),
          0.5 + 0.5 * sin(bestFrac * 6.283 + uTime * 1.4)
        );
        vec3 col = mix(etchCyan, warmRoseGold, uAcceptanceGlow);
        col += vec3(0.88, 0.97, 1.0) * tipSpark * (1.0 - smoothstep(0.96, 1.0, uEtchProgress)) * 1.45;

        float alpha = (grooveCore * (0.76 + 0.44 * uAcceptanceGlow) + grooveHalo * 0.55 + tipSpark * 0.88 + wreathGlow)
          * pulse * circularFeather * uFade;
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(col * alpha, alpha);
      }
    `,
  });

  const sandMesh = new THREE.Mesh(sandGeo, sandMat);
  sandMesh.renderOrder = 4;
  group.add(sandMesh);

  // ==========================================================================
  // 2. 560 ORGANIC CIRCULAR FAIRY-RING & WILDFLOWER CLUSTERS
  //    (Golden-angle phyllotaxis + natural wavy circular lobes — ZERO rectangular clamping!)
  // ==========================================================================
  const AMBIENT_FLOWERS = 200;
  const CELEBRATION_FLOWERS = 360;
  const FLOWER_COUNT = AMBIENT_FLOWERS + CELEBRATION_FLOWERS;

  const petalParts: THREE.BufferGeometry[] = [];
  const stemGeo = new THREE.CylinderGeometry(0.007, 0.011, 0.13, 5);
  stemGeo.translate(0, -0.06, 0);
  petalParts.push(stemGeo);

  for (let p = 0; p < 6; p++) {
    const pGeo = new THREE.ConeGeometry(0.050, 0.112, 4);
    pGeo.scale(1.0, 0.34, 0.62);
    pGeo.rotateX(Math.PI * 0.36);
    pGeo.translate(0, 0.025, 0.046);
    pGeo.rotateY((p / 6) * Math.PI * 2);
    petalParts.push(pGeo);
  }
  const coreGeo = new THREE.OctahedronGeometry(0.030, 0);
  coreGeo.translate(0, 0.028, 0);
  petalParts.push(coreGeo);

  let totalVerts = 0;
  for (const g of petalParts) {
    const nonIdx = g.index ? g.toNonIndexed() : g;
    totalVerts += nonIdx.attributes.position.count;
  }
  const mergedPos = new Float32Array(totalVerts * 3);
  const mergedNorm = new Float32Array(totalVerts * 3);
  let vCursor = 0;
  for (const g of petalParts) {
    const nonIdx = g.index ? g.toNonIndexed() : g;
    const posAttr = nonIdx.attributes.position;
    nonIdx.computeVertexNormals();
    const normAttr = nonIdx.attributes.normal;
    mergedPos.set(posAttr.array as Float32Array, vCursor * 3);
    mergedNorm.set(normAttr.array as Float32Array, vCursor * 3);
    vCursor += posAttr.count;
    if (nonIdx !== g) nonIdx.dispose();
    g.dispose();
  }
  const blossomGeo = new THREE.BufferGeometry();
  blossomGeo.setAttribute('position', new THREE.BufferAttribute(mergedPos, 3));
  blossomGeo.setAttribute('normal', new THREE.BufferAttribute(mergedNorm, 3));

  const flowerMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffddee,
    emissiveIntensity: 0.68,
    roughness: 0.34,
    metalness: 0.04,
    transparent: true,
    opacity: 0.98,
  });

  const flowerMesh = new THREE.InstancedMesh(blossomGeo, flowerMat, FLOWER_COUNT);
  flowerMesh.castShadow = false;
  flowerMesh.receiveShadow = false;

  interface FlowerSeed {
    x: number;
    y: number;
    z: number;
    distFromHeart: number;
    scale: number;
    phase: number;
    yaw: number;
    isCelebrationOnly: boolean;
  }
  const flowerSeeds: FlowerSeed[] = [];
  const palette = [
    new THREE.Color(0xff4d8d), // Vivid wild rose-pink
    new THREE.Color(0xff92c2), // Soft cherry petal
    new THREE.Color(0xffe082), // Golden buttercup-lotus
    new THREE.Color(0x8ae8ff), // Aurora forget-me-not cyan
    new THREE.Color(0xd2a8ff), // Starlight orchid
    new THREE.Color(0xff2e63), // Shocking crimson-ruby blossom
    new THREE.Color(0x9fffe0), // Seafoam starflower
  ];

  let rng = 27927;
  const rand = () => {
    rng = (rng * 16807) % 2147483647;
    return (rng - 1) / 2147483646;
  };

  // Organic circular & botanical clump placement (guaranteed circular/petal contour, ZERO straight edges!)
  const GOLDEN_ANGLE = 2.39996323;
  for (let i = 0; i < FLOWER_COUNT; i++) {
    const isCelebrationOnly = i >= AMBIENT_FLOWERS;
    const idxNorm = isCelebrationOnly
      ? (i - AMBIENT_FLOWERS) / CELEBRATION_FLOWERS
      : i / AMBIENT_FLOWERS;

    // Combine golden-angle spiral with organic angular clustering so flowers form natural meadow tufts
    const baseAngle = i * GOLDEN_ANGLE + (rand() - 0.5) * 0.42;
    // Wavy natural circular meadow contour (radius varies organically by angle, max ~2.80m so z stays <= +0.95m!)
    const organicRimMod =
      1.0 +
      0.13 * Math.sin(baseAngle * 3.0 + 0.7) +
      0.09 * Math.cos(baseAngle * 5.0 - 1.2) +
      0.06 * Math.sin(baseAngle * 7.0 + 2.1);

    let r: number;
    if (!isCelebrationOnly) {
      // Soft circular fairy-ring wreath framing the clearing (r = 1.15m .. 2.72m) with feathered outer fringe
      const ringBias = rand() < 0.55
        ? 1.18 + Math.pow(rand(), 0.75) * 0.95
        : 1.55 + Math.sqrt(idxNorm) * 1.18;
      r = ringBias * organicRimMod;
    } else {
      // Lush post-"Yes" celebration blossoms filling the circular glade & outer meadow tufts (r = 0.78m .. 2.85m)
      r = (0.78 + Math.pow(rand(), 0.68) * 1.98) * organicRimMod;
    }

    const fx = Math.cos(baseAngle) * r * 1.08;
    const fz = SANCTUARY_CENTER_Z + Math.sin(baseAngle) * r * 0.92;
    const fy = sampleHeroCliffHeight(fx, fz);
    const distFromHeart = Math.hypot(fx, fz - SANCTUARY_CENTER_Z);

    // Taper scale slightly near the outermost circular feather so the meadow edge blends seamlessly into grass!
    const edgeFeather = 1.0 - THREE.MathUtils.smoothstep(r, 2.35, 3.15) * 0.42;

    flowerSeeds.push({
      x: fx,
      y: fy + 0.052,
      z: fz,
      distFromHeart,
      scale: (isCelebrationOnly ? 0.88 + rand() * 0.82 : 0.62 + rand() * 0.56) * edgeFeather,
      phase: rand() * Math.PI * 2,
      yaw: rand() * Math.PI * 2,
      isCelebrationOnly,
    });

    const colIdx = isCelebrationOnly ? i % palette.length : (i * 3) % palette.length;
    flowerMesh.setColorAt(i, palette[colIdx]);
  }
  if (flowerMesh.instanceColor) flowerMesh.instanceColor.needsUpdate = true;
  group.add(flowerMesh);

  let wildflowerBloom = 0.15;
  let celebrationFlowerWave = 0.0;
  let fadeFactor = 1.0;

  // ==========================================================================
  // 3. SHOCKING MULTI-LAYER RESONANCE HALO: 58m AURORA DOME + 3 SHOCKWAVE RINGS
  //    + SKY LIGHT PILLAR + SANCTUARY RADIANCE LIGHT
  // ==========================================================================
  let waveActive = false;
  let waveElapsed = 0;
  const waveOrigin = new THREE.Vector3(0, 1.1, SANCTUARY_CENTER_Z);

  const resonanceLight = new THREE.PointLight(0xff98d0, 0, 44, 1.35);
  resonanceLight.position.set(0, 2.2, SANCTUARY_CENTER_Z);
  group.add(resonanceLight);

  const domeUniforms = {
    uProgress: { value: 0 },
    uOpacity: { value: 0 },
    uTime: { value: 0 },
  };
  const domeGeo = new THREE.SphereGeometry(1.0, 40, 28);
  const domeMat = new THREE.ShaderMaterial({
    uniforms: domeUniforms,
    transparent: true,
    depthWrite: false,
    fog: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      varying vec3 vWorldNormal;
      varying vec3 vViewDir;
      varying vec3 vLocalPos;
      void main() {
        vLocalPos = position;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uProgress;
      uniform float uOpacity;
      uniform float uTime;
      varying vec3 vWorldNormal;
      varying vec3 vViewDir;
      varying vec3 vLocalPos;

      void main() {
        if (uOpacity <= 0.002) discard;
        float ndv = abs(dot(normalize(vWorldNormal), normalize(vViewDir)));
        float fresnelRim = pow(1.0 - ndv, 2.15);
        float latBand = sin(vLocalPos.y * 14.0 - uTime * 5.0) * 0.5 + 0.5;
        float equatorGlow = exp(-abs(vLocalPos.y) * 3.8);

        vec3 cyanCol = vec3(0.32, 0.90, 1.0);
        vec3 roseCol = vec3(1.0, 0.30, 0.68);
        vec3 goldCol = vec3(1.0, 0.88, 0.52);

        vec3 col = mix(cyanCol, roseCol, clamp(vLocalPos.y * 0.8 + 0.5, 0.0, 1.0));
        col = mix(col, goldCol, equatorGlow * 0.65 + latBand * 0.25);

        float alpha = (fresnelRim * 0.88 + equatorGlow * 0.42 + latBand * fresnelRim * 0.35) * uOpacity;
        alpha *= smoothstep(-0.35, 0.05, vLocalPos.y);
        if (alpha <= 0.003) discard;
        gl_FragColor = vec4(col * alpha * 1.45, alpha);
      }
    `,
  });
  const resonanceDome = new THREE.Mesh(domeGeo, domeMat);
  resonanceDome.visible = false;
  resonanceDome.renderOrder = 7;
  group.add(resonanceDome);

  const ringColors = [0xff3b8d, 0x7ceeff, 0xffe28a];
  const haloRings: THREE.Mesh[] = [];
  const haloMats: THREE.MeshBasicMaterial[] = [];
  const ringBaseGeo = new THREE.RingGeometry(0.84, 1.0, 72);
  ringBaseGeo.rotateX(-Math.PI * 0.5);

  for (let r = 0; r < 3; r++) {
    const rMat = new THREE.MeshBasicMaterial({
      color: ringColors[r],
      transparent: true,
      opacity: 0,
      fog: false,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const rMesh = new THREE.Mesh(ringBaseGeo, rMat);
    rMesh.visible = false;
    rMesh.renderOrder = 6;
    group.add(rMesh);
    haloRings.push(rMesh);
    haloMats.push(rMat);
  }

  const pillarGeo = new THREE.CylinderGeometry(0.18, 1.35, 28.0, 28, 1, true);
  pillarGeo.translate(0, 14.0, 0);
  const pillarUniforms = {
    uOpacity: { value: 0 },
    uTime: { value: 0 },
  };
  const pillarMat = new THREE.ShaderMaterial({
    uniforms: pillarUniforms,
    transparent: true,
    depthWrite: false,
    fog: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        if (uOpacity <= 0.002) discard;
        float vFade = (1.0 - smoothstep(0.15, 1.0, vUv.y)) * smoothstep(0.0, 0.08, vUv.y);
        float ribbons = 0.65 + 0.35 * sin(vUv.x * 37.699 + uTime * 4.5 - vUv.y * 8.0);
        vec3 col = mix(vec3(1.0, 0.48, 0.78), vec3(0.45, 0.92, 1.0), vUv.y);
        float a = vFade * ribbons * uOpacity;
        gl_FragColor = vec4(col * a * 1.35, a);
      }
    `,
  });
  const skyPillar = new THREE.Mesh(pillarGeo, pillarMat);
  skyPillar.visible = false;
  skyPillar.renderOrder = 6;
  group.add(skyPillar);

  // ==========================================================================
  // 4. FLOATING LANTERN SPORES & CELEBRATION POLLEN SWIRL (560 GPU Particles)
  // ==========================================================================
  const MAX_SPORES = 560;
  const sporePos = new Float32Array(MAX_SPORES * 3);
  const sporeVel = new Float32Array(MAX_SPORES * 3);
  const sporeCol = new Float32Array(MAX_SPORES * 3);
  const sporeLife = new Float32Array(MAX_SPORES);
  const sporeMaxLife = new Float32Array(MAX_SPORES);
  const sporeSize = new Float32Array(MAX_SPORES);

  const sporeGeo = new THREE.BufferGeometry();
  sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3));
  sporeGeo.setAttribute('color', new THREE.BufferAttribute(sporeCol, 3));
  sporeGeo.setAttribute('aSize', new THREE.BufferAttribute(sporeSize, 1));

  const sporeMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    fog: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    vertexShader: /* glsl */ `
      attribute float aSize;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * (280.0 / max(1.0, -mvPosition.z)), 2.0, 56.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        if (d > 1.0) discard;
        float core = exp(-d * d * 3.8);
        gl_FragColor = vec4(vColor * core * 1.35, core);
      }
    `,
  });

  const sporePoints = new THREE.Points(sporeGeo, sporeMat);
  sporePoints.frustumCulled = false;
  sporePoints.renderOrder = 6;
  group.add(sporePoints);

  let sporeCursor = 0;
  function emitSpore(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    r: number,
    g: number,
    b: number,
    size: number,
    life: number
  ): void {
    const idx = sporeCursor % MAX_SPORES;
    sporeCursor++;
    sporePos[idx * 3] = x;
    sporePos[idx * 3 + 1] = y;
    sporePos[idx * 3 + 2] = z;
    sporeVel[idx * 3] = vx;
    sporeVel[idx * 3 + 1] = vy;
    sporeVel[idx * 3 + 2] = vz;
    sporeCol[idx * 3] = r;
    sporeCol[idx * 3 + 1] = g;
    sporeCol[idx * 3 + 2] = b;
    sporeSize[idx] = size;
    sporeLife[idx] = life;
    sporeMaxLife[idx] = life;
  }

  for (let i = 0; i < 120; i++) {
    const a = rand() * Math.PI * 2;
    const rad = 0.8 + rand() * 3.8;
    const sx = Math.cos(a) * rad;
    const sz = SANCTUARY_CENTER_Z + Math.sin(a) * rad;
    const sy = sampleHeroCliffHeight(sx, sz) + 0.18 + rand() * 2.4;
    emitSpore(sx, sy, sz, (rand() - 0.5) * 0.16, 0.14 + rand() * 0.22, (rand() - 0.5) * 0.16, 0.55, 0.88, 1.0, 0.16, 3.0 + rand() * 4.0);
  }

  const dummyObj = new THREE.Object3D();

  return {
    group,
    setEtchProgress: (progress: number) => {
      sandUniforms.uEtchProgress.value = THREE.MathUtils.clamp(progress, 0, 1);
    },
    setAcceptanceGlow: (glow: number) => {
      sandUniforms.uAcceptanceGlow.value = THREE.MathUtils.clamp(glow, 0, 1);
    },
    setWildflowerBloom: (bloom: number) => {
      wildflowerBloom = THREE.MathUtils.clamp(bloom, 0, 1);
    },
    setCelebrationFlowerWave: (wave: number) => {
      celebrationFlowerWave = THREE.MathUtils.clamp(wave, 0, 1);
    },
    setFadeOut: (fade: number) => {
      fadeFactor = THREE.MathUtils.clamp(fade, 0, 1);
      sandUniforms.uFade.value = fadeFactor;
      flowerMat.opacity = 0.98 * fadeFactor;
    },
    triggerResonanceWave: (origin?: THREE.Vector3) => {
      waveActive = true;
      waveElapsed = 0;
      if (origin) waveOrigin.copy(origin);
      else waveOrigin.set(0, 1.15, SANCTUARY_CENTER_Z);

      resonanceDome.position.copy(waveOrigin);
      resonanceDome.visible = true;
      skyPillar.position.set(waveOrigin.x, waveOrigin.y - 0.8, waveOrigin.z);
      skyPillar.visible = true;
      resonanceLight.position.set(waveOrigin.x, waveOrigin.y + 1.1, waveOrigin.z);

      for (let r = 0; r < haloRings.length; r++) {
        haloRings[r].position.set(waveOrigin.x, waveOrigin.y - 0.75 + r * 0.18, waveOrigin.z);
        haloRings[r].visible = true;
      }

      for (let i = 0; i < 190; i++) {
        const a = (i / 190) * Math.PI * 10.0;
        const speed = 1.6 + Math.random() * 5.8;
        const isWarm = i % 2 === 0;
        emitSpore(
          waveOrigin.x + Math.cos(a) * 0.25,
          waveOrigin.y + (Math.random() - 0.3) * 0.4,
          waveOrigin.z + Math.sin(a) * 0.25,
          Math.cos(a) * speed,
          0.9 + Math.random() * 3.8,
          Math.sin(a) * speed,
          isWarm ? 1.0 : 0.45,
          isWarm ? 0.48 : 0.92,
          isWarm ? 0.78 : 1.0,
          0.28 + Math.random() * 0.28,
          2.2 + Math.random() * 2.4
        );
      }
    },
    spawnShimmerBurst: (worldPos: THREE.Vector3, warmRose = true, count = 42) => {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const spd = 0.6 + Math.random() * 2.4;
        emitSpore(
          worldPos.x,
          worldPos.y,
          worldPos.z,
          Math.sin(phi) * Math.cos(theta) * spd,
          Math.abs(Math.cos(phi)) * spd + 0.5,
          Math.sin(phi) * Math.sin(theta) * spd,
          warmRose ? 1.0 : 0.48,
          warmRose ? 0.62 : 0.90,
          warmRose ? 0.85 : 1.0,
          0.22 + Math.random() * 0.20,
          1.4 + Math.random() * 1.5
        );
      }
    },
    emitWingWake: (posA: THREE.Vector3, posB: THREE.Vector3, colorHex = 0x8be8ff) => {
      const c = new THREE.Color(colorHex);
      for (const p of [posA, posB]) {
        emitSpore(
          p.x + (Math.random() - 0.5) * 0.3,
          p.y + (Math.random() - 0.5) * 0.3,
          p.z + (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.5,
          0.16 + Math.random() * 0.35,
          (Math.random() - 0.5) * 0.5,
          c.r,
          c.g,
          c.b,
          0.20,
          1.1 + Math.random() * 0.8
        );
      }
    },
    update: (dt: number, elapsedSec: number, windStrength = 0.25) => {
      sandUniforms.uTime.value = elapsedSec;
      domeUniforms.uTime.value = elapsedSec;
      pillarUniforms.uTime.value = elapsedSec;

      const waveRadius = celebrationFlowerWave * 4.2;
      flowerMat.emissiveIntensity = (0.42 + 0.88 * Math.max(wildflowerBloom, celebrationFlowerWave)) * fadeFactor;

      for (let i = 0; i < FLOWER_COUNT; i++) {
        const s = flowerSeeds[i];
        let localScale = 0;

        if (s.isCelebrationOnly) {
          if (celebrationFlowerWave > 0.005) {
            const sproutT = THREE.MathUtils.clamp((waveRadius - s.distFromHeart + 0.55) / 1.05, 0, 1);
            const springPop = sproutT < 1.0
              ? Math.sin(sproutT * Math.PI * 0.5) + Math.sin(sproutT * Math.PI) * 0.24
              : 1.0 + 0.05 * Math.sin(elapsedSec * 2.4 + s.phase);
            localScale = s.scale * springPop * fadeFactor;
          }
        } else {
          const baseScale = s.scale * (0.24 + 0.76 * wildflowerBloom);
          const boost = celebrationFlowerWave * 0.42 * s.scale;
          localScale = (baseScale + boost) * fadeFactor;
        }

        if (localScale <= 0.004) {
          dummyObj.position.set(s.x, s.y - 0.2, s.z);
          dummyObj.scale.setScalar(0.0001);
        } else {
          const swayX = Math.sin(elapsedSec * (1.5 + windStrength * 2.0) + s.phase) * (0.06 + windStrength * 0.16);
          const swayZ = Math.cos(elapsedSec * 1.2 + s.phase * 1.3) * (0.04 + windStrength * 0.12);
          dummyObj.position.set(s.x, s.y, s.z);
          dummyObj.rotation.set(swayX, s.yaw, swayZ);
          dummyObj.scale.set(localScale, localScale * 1.08, localScale);
        }
        dummyObj.updateMatrix();
        flowerMesh.setMatrixAt(i, dummyObj.matrix);
      }
      flowerMesh.instanceMatrix.needsUpdate = true;

      if (waveActive) {
        waveElapsed += dt;
        const duration = 4.4;
        const t = waveElapsed / duration;

        if (t >= 1.0) {
          waveActive = false;
          resonanceDome.visible = false;
          skyPillar.visible = false;
          resonanceLight.intensity = 0;
          for (const rMesh of haloRings) rMesh.visible = false;
        } else {
          const domeEase = 1.0 - Math.pow(1.0 - t, 2.6);
          const domeRadius = 0.6 + domeEase * 58.0;
          resonanceDome.scale.setScalar(domeRadius);
          domeUniforms.uProgress.value = t;
          domeUniforms.uOpacity.value = Math.pow(1.0 - t, 1.55) * 0.92 * fadeFactor;

          const pillarT = THREE.MathUtils.clamp(t / 0.62, 0, 1);
          const pillarExpand = 0.55 + Math.sin(Math.min(1, pillarT * 1.8) * Math.PI * 0.5) * 1.65;
          skyPillar.scale.set(pillarExpand, 1.0 + t * 0.6, pillarExpand);
          pillarUniforms.uOpacity.value = (1.0 - pillarT) * (1.0 - pillarT) * 0.85 * fadeFactor;

          resonanceLight.intensity = Math.sin(Math.pow(1.0 - t, 1.8) * Math.PI * 0.5) * 14.5 * fadeFactor;

          for (let r = 0; r < haloRings.length; r++) {
            const delay = r * 0.11;
            const rt = THREE.MathUtils.clamp((t - delay) / (1.0 - delay), 0, 1);
            if (rt <= 0) {
              haloRings[r].visible = false;
            } else {
              haloRings[r].visible = true;
              const ringEase = 1.0 - Math.pow(1.0 - rt, 2.4);
              haloRings[r].scale.setScalar(0.5 + ringEase * (46.0 - r * 7.0));
              haloMats[r].opacity = Math.pow(1.0 - rt, 1.65) * 0.95 * fadeFactor;
            }
          }
        }
      }

      if (Math.random() < (0.35 + celebrationFlowerWave * 0.55) * fadeFactor) {
        const a = Math.random() * Math.PI * 2;
        const rad = 0.6 + Math.random() * 2.8;
        const sx = Math.cos(a) * rad;
        const sz = SANCTUARY_CENTER_Z + Math.sin(a) * rad;
        const sy = sampleHeroCliffHeight(sx, sz) + 0.12;
        const warm = sandUniforms.uAcceptanceGlow.value > 0.4 || celebrationFlowerWave > 0.1;
        emitSpore(
          sx,
          sy,
          sz,
          (Math.random() - 0.5) * 0.25,
          0.24 + Math.random() * 0.45,
          (Math.random() - 0.5) * 0.25,
          warm ? 1.0 : 0.52,
          warm ? 0.62 : 0.90,
          warm ? 0.84 : 1.0,
          0.18 + Math.random() * 0.16,
          2.8 + Math.random() * 2.6
        );
      }

      for (let i = 0; i < MAX_SPORES; i++) {
        if (sporeLife[i] <= 0) {
          sporeSize[i] = 0;
          continue;
        }
        sporeLife[i] -= dt;
        if (sporeLife[i] <= 0) {
          sporeSize[i] = 0;
          continue;
        }
        const i3 = i * 3;
        sporePos[i3] += (sporeVel[i3] + Math.sin(elapsedSec * 1.4 + i) * 0.09) * dt;
        sporePos[i3 + 1] += sporeVel[i3 + 1] * dt;
        sporePos[i3 + 2] += (sporeVel[i3 + 2] + Math.cos(elapsedSec * 1.2 + i) * 0.09) * dt;
        sporeVel[i3] *= 0.985;
        sporeVel[i3 + 2] *= 0.985;

        const lifeFrac = sporeLife[i] / Math.max(0.01, sporeMaxLife[i]);
        const env = Math.sin(Math.min(1, lifeFrac) * Math.PI);
        sporeSize[i] = (0.16 + 0.20 * env) * fadeFactor;
      }

      (sporeGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (sporeGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      (sporeGeo.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;
    },
  };
}
