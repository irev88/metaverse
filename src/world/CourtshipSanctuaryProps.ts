import * as THREE from 'three';
import { sampleHeroCliffHeight } from './NordicCliffWorld';

export const SANCTUARY_CENTER_Z = -2.25;

export interface CourtshipSanctuaryController {
  group: THREE.Group;
  setEtchProgress: (progress: number) => void;
  setAcceptanceGlow: (glow: number) => void;
  setWildflowerBloom: (bloom: number) => void;
  /** 0..1 post-"Yes" radial wave spawning hundreds of brand-new celebration blossoms near the dragons! */
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
  // 1. TERRAIN-CONFORMING ETCHABLE VOLCANIC SAND-HEART SIGIL (Safe Plateau z=-2.25)
  // ==========================================================================
  const sandGeo = new THREE.PlaneGeometry(2.75, 2.50, 40, 40);
  sandGeo.rotateX(-Math.PI * 0.5);
  const sPos = sandGeo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < sPos.count; i++) {
    const lx = sPos.getX(i);
    const lz = sPos.getZ(i) + SANCTUARY_CENTER_Z;
    const gy = sampleHeroCliffHeight(lx, lz);
    sPos.setXYZ(i, lx, gy + 0.022, lz);
  }
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

      void main() {
        if (uEtchProgress <= 0.001) discard;

        vec2 p = (vUv - 0.5) * vec2(2.8, -2.7);
        p.y += 0.18;

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
          vec2 hp = vec2(hx, hy) * 0.064;
          hp.x += sin(a * 5.0) * 0.015;
          hp.y += cos(a * 4.0) * 0.013;
          float d = length(p - hp);
          if (d < minDist) {
            minDist = d;
            bestFrac = frac;
          }
        }

        float grooveCore = smoothstep(0.068, 0.012, minDist);
        float grooveHalo = smoothstep(0.24, 0.0, minDist) * (0.36 + 0.64 * uAcceptanceGlow);
        float tipSpark = smoothstep(0.08, 0.0, abs(bestFrac - uEtchProgress)) * smoothstep(0.13, 0.0, minDist);
        float pulse = 0.85 + 0.15 * sin(uTime * 2.6 - bestFrac * 12.56);

        vec3 etchCyan = vec3(0.26, 0.80, 1.0);
        vec3 warmRoseGold = mix(vec3(1.0, 0.56, 0.78), vec3(1.0, 0.86, 0.50), 0.5 + 0.5 * sin(bestFrac * 6.283 + uTime * 1.4));
        vec3 col = mix(etchCyan, warmRoseGold, uAcceptanceGlow);
        col += vec3(0.85, 0.96, 1.0) * tipSpark * (1.0 - smoothstep(0.96, 1.0, uEtchProgress)) * 1.5;

        float alpha = (grooveCore * (0.72 + 0.48 * uAcceptanceGlow) + grooveHalo * 0.60 + tipSpark * 0.9) * pulse * uFade;
        if (alpha < 0.004) discard;
        gl_FragColor = vec4(col * alpha, alpha);
      }
    `,
  });

  const sandMesh = new THREE.Mesh(sandGeo, sandMat);
  sandMesh.renderOrder = 4;
  group.add(sandMesh);

  // ==========================================================================
  // 2. 520 BIOLUMINESCENT CLIFF FLOWERS (180 Ambient + 340 NEW Post-"Yes" Blossoms!)
  // ==========================================================================
  const AMBIENT_FLOWERS = 180;
  const CELEBRATION_FLOWERS = 340;
  const FLOWER_COUNT = AMBIENT_FLOWERS + CELEBRATION_FLOWERS;

  // Multi-petal star-cup blossom geometry with stem & twin leaves!
  const petalParts: THREE.BufferGeometry[] = [];
  const stemGeo = new THREE.CylinderGeometry(0.008, 0.012, 0.14, 5);
  stemGeo.translate(0, -0.065, 0);
  petalParts.push(stemGeo);

  for (let p = 0; p < 6; p++) {
    const pGeo = new THREE.ConeGeometry(0.052, 0.115, 4);
    pGeo.scale(1.0, 0.35, 0.62);
    pGeo.rotateX(Math.PI * 0.36);
    pGeo.translate(0, 0.025, 0.048);
    pGeo.rotateY((p / 6) * Math.PI * 2);
    petalParts.push(pGeo);
  }
  const coreGeo = new THREE.OctahedronGeometry(0.032, 0);
  coreGeo.translate(0, 0.028, 0);
  petalParts.push(coreGeo);

  // Merge lightweight sub-parts into one single draw-call geometry!
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
    emissive: 0xffe4f2,
    emissiveIntensity: 0.72,
    roughness: 0.32,
    metalness: 0.05,
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
    new THREE.Color(0x8ae8ff), // Aurora cyan
    new THREE.Color(0xff92c2), // Wild rose-pink
    new THREE.Color(0xffe082), // Golden lotus
    new THREE.Color(0xd2a8ff), // Starlight orchid
    new THREE.Color(0xffb8d9), // Dawn cherry blossom
    new THREE.Color(0x9fffe0), // Seafoam starflower
  ];

  let rng = 1337;
  const rand = () => {
    rng = (rng * 16807) % 2147483647;
    return (rng - 1) / 2147483646;
  };

  for (let i = 0; i < FLOWER_COUNT; i++) {
    const isCelebrationOnly = i >= AMBIENT_FLOWERS;
    const angle = rand() * Math.PI * 2;
    // Celebration flowers cluster richly right around the dragons & sand-heart (r = 0.85m .. 4.35m)!
    const radius = isCelebrationOnly
      ? 0.82 + Math.pow(rand(), 0.72) * 3.55
      : 1.45 + Math.pow(rand(), 0.80) * 3.90;

    const fx = Math.cos(angle) * radius * 1.15;
    const fz = SANCTUARY_CENTER_Z + Math.sin(angle) * radius * 0.85;

    // Keep strictly on safe cliff turf away from the +1.05m drop-off
    const clampedX = THREE.MathUtils.clamp(fx, -4.6, 4.6);
    const clampedZ = THREE.MathUtils.clamp(fz, -5.1, 0.55);
    const fy = sampleHeroCliffHeight(clampedX, clampedZ);
    const distFromHeart = Math.hypot(clampedX, clampedZ - SANCTUARY_CENTER_Z);

    flowerSeeds.push({
      x: clampedX,
      y: fy + 0.055,
      z: clampedZ,
      distFromHeart,
      scale: isCelebrationOnly ? 0.95 + rand() * 0.85 : 0.65 + rand() * 0.58,
      phase: rand() * Math.PI * 2,
      yaw: rand() * Math.PI * 2,
      isCelebrationOnly,
    });

    const colIdx = isCelebrationOnly ? 1 + (i % (palette.length - 1)) : i % palette.length;
    flowerMesh.setColorAt(i, palette[colIdx]);
  }
  if (flowerMesh.instanceColor) flowerMesh.instanceColor.needsUpdate = true;
  group.add(flowerMesh);

  let wildflowerBloom = 0.25;
  let celebrationFlowerWave = 0.0;
  let fadeFactor = 1.0;

  // ==========================================================================
  // 3. SHOCKING MULTI-LAYER RESONANCE HALO: AURORA DOME + 3 SHOCKWAVE RINGS
  //    + SKY LIGHT PILLAR + DYNAMIC SANCTUARY RADIANCE LIGHT (FIXES ISSUE #10!)
  // ==========================================================================
  let waveActive = false;
  let waveElapsed = 0;
  const waveOrigin = new THREE.Vector3(0, 1.1, SANCTUARY_CENTER_Z);

  // 3A. Dynamic HDR PointLight illuminating dragons, flowers & cliff during the Resonance Wave!
  const resonanceLight = new THREE.PointLight(0xffb8e2, 0, 42, 1.35);
  resonanceLight.position.set(0, 2.2, SANCTUARY_CENTER_Z);
  group.add(resonanceLight);

  // 3B. Expanding 3D Iridescent Aurora Resonance Dome
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
        // Crisp shockwave rim via Fresnel + equatorial & latitude aurora ripples
        float ndv = abs(dot(normalize(vWorldNormal), normalize(vViewDir)));
        float fresnelRim = pow(1.0 - ndv, 2.15);
        float latBand = sin(vLocalPos.y * 14.0 - uTime * 5.0) * 0.5 + 0.5;
        float equatorGlow = exp(-abs(vLocalPos.y) * 3.8);

        vec3 cyanCol = vec3(0.32, 0.90, 1.0);
        vec3 roseCol = vec3(1.0, 0.52, 0.82);
        vec3 goldCol = vec3(1.0, 0.88, 0.52);

        vec3 col = mix(cyanCol, roseCol, clamp(vLocalPos.y * 0.8 + 0.5, 0.0, 1.0));
        col = mix(col, goldCol, equatorGlow * 0.65 + latBand * 0.25);

        float alpha = (fresnelRim * 0.88 + equatorGlow * 0.42 + latBand * fresnelRim * 0.35) * uOpacity;
        // Fade cleanly below cliff ground
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

  // 3C. Three Staggered Ground & Air Shockwave Halo Rings (Cyan, Rose-Gold, Starlight-Gold)
  const ringColors = [0x7ceeff, 0xff85c8, 0xffe28a];
  const haloRings: THREE.Mesh[] = [];
  const haloMats: THREE.MeshBasicMaterial[] = [];
  const ringBaseGeo = new THREE.RingGeometry(0.84, 1.0, 72);
  ringBaseGeo.rotateX(-Math.PI * 0.5);

  for (let r = 0; r < 3; r++) {
    const rMat = new THREE.MeshBasicMaterial({
      color: ringColors[r],
      transparent: true,
      opacity: 0,
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

  // 3D. Towering Celestial Sky-Pillar Beam shooting straight upward from their nuzzle!
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
        vec3 col = mix(vec3(1.0, 0.72, 0.88), vec3(0.45, 0.92, 1.0), vUv.y);
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
    const rad = 0.8 + rand() * 5.2;
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

      // Massive spiraling golden-rose & plasma-cyan celebration vortex!
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
          isWarm ? 0.68 : 0.92,
          isWarm ? 0.88 : 1.0,
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
          warmRose ? 0.72 : 0.90,
          warmRose ? 0.88 : 1.0,
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

      // 1. Animate 520 Wildflowers + Radial Post-"Yes" Celebration Flower Blooming Wave!
      const waveRadius = celebrationFlowerWave * 6.2; // Expands 0 -> 6.2m outward from heart!
      flowerMat.emissiveIntensity = (0.45 + 0.85 * Math.max(wildflowerBloom, celebrationFlowerWave)) * fadeFactor;

      for (let i = 0; i < FLOWER_COUNT; i++) {
        const s = flowerSeeds[i];
        let localScale = 0;

        if (s.isCelebrationOnly) {
          // Brand-new post-"Yes" blossoms sprout dynamically as the resonance wave passes over them!
          if (celebrationFlowerWave > 0.005) {
            const sproutT = THREE.MathUtils.clamp((waveRadius - s.distFromHeart + 0.65) / 1.15, 0, 1);
            // Elastic spring overshoot so blossoms visibly pop open with life!
            const springPop = sproutT < 1.0
              ? Math.sin(sproutT * Math.PI * 0.5) + Math.sin(sproutT * Math.PI) * 0.24
              : 1.0 + 0.05 * Math.sin(elapsedSec * 2.4 + s.phase);
            localScale = s.scale * springPop * fadeFactor;
          }
        } else {
          const baseScale = s.scale * (0.28 + 0.72 * wildflowerBloom);
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

      // 2. Shocking Multi-Layer Resonance Halo Expansion (4.4 seconds of dramatic awe!)
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
          // 3D Iridescent Aurora Dome expands from 0.6m -> 58m across the entire cliff & sea!
          const domeEase = 1.0 - Math.pow(1.0 - t, 2.6);
          const domeRadius = 0.6 + domeEase * 58.0;
          resonanceDome.scale.setScalar(domeRadius);
          domeUniforms.uProgress.value = t;
          domeUniforms.uOpacity.value = Math.pow(1.0 - t, 1.55) * 0.92 * fadeFactor;

          // Sky Pillar flares brightly in first 2.6s then dissolves into starlight
          const pillarT = THREE.MathUtils.clamp(t / 0.62, 0, 1);
          const pillarExpand = 0.55 + Math.sin(Math.min(1, pillarT * 1.8) * Math.PI * 0.5) * 1.65;
          skyPillar.scale.set(pillarExpand, 1.0 + t * 0.6, pillarExpand);
          pillarUniforms.uOpacity.value = (1.0 - pillarT) * (1.0 - pillarT) * 0.85 * fadeFactor;

          // Dynamic Sanctuary Radiance Light bathes both dragons & meadow
          resonanceLight.intensity = Math.sin(Math.pow(1.0 - t, 1.8) * Math.PI * 0.5) * 14.5 * fadeFactor;

          // 3 Staggered Concentric Shockwave Rings
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

      // 3. Ambient + Celebration Lantern Spores
      if (Math.random() < (0.35 + celebrationFlowerWave * 0.55) * fadeFactor) {
        const a = Math.random() * Math.PI * 2;
        const rad = 0.7 + Math.random() * 4.5;
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
          warm ? 0.76 : 0.90,
          warm ? 0.88 : 1.0,
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
