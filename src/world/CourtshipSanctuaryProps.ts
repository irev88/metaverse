import * as THREE from 'three';
import { sampleHeroCliffHeight } from './NordicCliffWorld';

export interface CourtshipSanctuaryController {
  group: THREE.Group;
  setEtchProgress: (progress: number) => void;
  setAcceptanceGlow: (glow: number) => void;
  setWildflowerBloom: (bloom: number) => void;
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
  // 1. TERRAIN-CONFORMING ETCHABLE VOLCANIC SAND-HEART SIGIL (Center: 0, -0.55)
  // ==========================================================================
  const sandGeo = new THREE.PlaneGeometry(2.55, 2.35, 36, 36);
  sandGeo.rotateX(-Math.PI * 0.5);
  const sPos = sandGeo.attributes.position as THREE.BufferAttribute;
  const centerZ = -0.55;
  for (let i = 0; i < sPos.count; i++) {
    const lx = sPos.getX(i);
    const lz = sPos.getZ(i) + centerZ;
    const gy = sampleHeroCliffHeight(lx, lz);
    sPos.setXYZ(i, lx, gy + 0.018, lz);
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

      // Parametric heart point for t in [0, PI] (mirrored left & right lobes)
      vec2 heartHalf(float t, float side) {
        float s = sin(t);
        float x = side * 0.62 * pow(s, 3.0);
        float y = 0.50 * cos(t) - 0.19 * cos(2.0 * t) - 0.08 * cos(3.0 * t) - 0.03 * cos(4.0 * t);
        return vec2(x, y + 0.06);
      }

      void main() {
        if (uEtchProgress <= 0.001 || uFade <= 0.001) discard;

        vec2 p = (vUv - 0.5) * 2.0;
        p.y = -p.y; // Orient heart tip toward viewer/Light Fury gracefully

        float minDist = 99.0;
        float bestParam = 0.0;

        const int STEPS = 44;
        for (int i = 0; i <= STEPS; i++) {
          float f = float(i) / float(STEPS);
          float t = f * 3.14159265;
          vec2 qR = heartHalf(t, 1.0);
          vec2 qL = heartHalf(t, -1.0);
          float dR = length(p - qR);
          if (dR < minDist) {
            minDist = dR;
            bestParam = f;
          }
          float dL = length(p - qL);
          if (dL < minDist) {
            minDist = dL;
            bestParam = f;
          }
        }

        // Progressive twin-stroke reveal from top cleft (f=0) down to heart cusp (f=1)
        float revealMask = 1.0 - smoothstep(uEtchProgress - 0.03, uEtchProgress + 0.02, bestParam);
        if (revealMask <= 0.001) discard;

        // Subtle volcanic sand grain modulation
        float grain = 0.82 + 0.18 * sin(p.x * 95.0 + sin(p.y * 85.0) * 2.0);
        float coreLine = smoothstep(0.034, 0.006, minDist) * grain;
        float softHalo = smoothstep(0.145, 0.0, minDist) * (0.28 + 0.45 * uAcceptanceGlow);

        // Sparkling leading tip while Toothless is actively etching
        float tipSpark = 0.0;
        if (uEtchProgress < 0.995) {
          float paramDist = abs(bestParam - uEtchProgress);
          tipSpark = smoothstep(0.055, 0.0, paramDist) * smoothstep(0.08, 0.0, minDist) * 2.4;
        }

        float heartbeat = 0.88 + 0.12 * sin(uTime * 3.6);
        vec3 cyanCol = vec3(0.16, 0.72, 1.0);
        vec3 roseGold = vec3(1.0, 0.66, 0.80);
        vec3 warmChampagne = vec3(1.0, 0.86, 0.68);

        vec3 baseTint = mix(
          mix(cyanCol, warmChampagne, 0.42),
          mix(cyanCol, roseGold, smoothstep(-0.35, 0.35, -p.x)),
          uAcceptanceGlow
        );

        float intensity = (coreLine * (1.15 + 1.1 * uAcceptanceGlow) + softHalo + tipSpark)
          * revealMask * heartbeat * uFade;
        vec3 col = min(baseTint * intensity, vec3(6.5));
        gl_FragColor = vec4(col, clamp(intensity, 0.0, 1.0));
      }
    `,
  });

  const sandMesh = new THREE.Mesh(sandGeo, sandMat);
  sandMesh.frustumCulled = false;
  sandMesh.userData.excludeFromExport = true;
  group.add(sandMesh);

  // ==========================================================================
  // 2. BIOLUMINESCENT COASTAL WILDFLOWER & SEA-PINK SANCTUARY RING
  // ==========================================================================
  const FLOWER_COUNT = 240;
  const petalGeo = new THREE.ConeGeometry(0.052, 0.075, 5, 1, true);
  petalGeo.rotateX(Math.PI);
  petalGeo.translate(0, 0.055, 0);

  const flowerUniforms = {
    uTime: { value: 0 },
    uWind: { value: 0.45 },
    uBloom: { value: 0.08 },
    uFade: { value: 1.0 },
  };

  const flowerMat = new THREE.ShaderMaterial({
    uniforms: flowerUniforms,
    side: THREE.DoubleSide,
    vertexShader: /* glsl */ `
      attribute vec3 aColor;
      attribute float aPhase;
      uniform float uTime;
      uniform float uWind;
      varying vec3 vColor;
      varying vec2 vUv;
      varying float vPhase;

      void main() {
        vColor = aColor;
        vUv = uv;
        vPhase = aPhase;

        vec4 instPos = instanceMatrix * vec4(position, 1.0);
        float heightMask = smoothstep(0.0, 0.09, position.y);
        float sway = sin(uTime * (2.1 + uWind * 2.2) + aPhase) * (0.018 + 0.038 * uWind) * heightMask;
        instPos.x += sway;
        instPos.z += sway * 0.6;

        gl_Position = projectionMatrix * modelViewMatrix * instPos;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uBloom;
      uniform float uFade;
      varying vec3 vColor;
      varying vec2 vUv;
      varying float vPhase;

      void main() {
        float centerGlow = smoothstep(0.0, 0.85, vUv.y);
        float twinkle = 0.82 + 0.18 * sin(uTime * 2.8 + vPhase * 1.7);
        vec3 dayPetal = vColor * (0.52 + 0.35 * centerGlow);
        vec3 bioPetal = vColor * (1.35 + 1.65 * centerGlow) * twinkle;
        vec3 finalCol = min(mix(dayPetal, bioPetal, uBloom) * uFade, vec3(4.8));
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `,
  });

  const flowerInst = new THREE.InstancedMesh(petalGeo, flowerMat, FLOWER_COUNT);
  flowerInst.userData.excludeFromExport = true;
  const fColors = new Float32Array(FLOWER_COUNT * 3);
  const fPhases = new Float32Array(FLOWER_COUNT);
  const dummy = new THREE.Object3D();
  const palette = [
    new THREE.Color(0xf6b8d0), // Rose sea-pink
    new THREE.Color(0xfbe3cf), // Warm pearl-champagne
    new THREE.Color(0x9ce2ff), // Hidden-World cyan-bell
    new THREE.Color(0xd9b8ff), // Soft orchid heather
  ];

  let rng = 918273;
  const rand = () => {
    rng = (rng * 1664525 + 1013904223) >>> 0;
    return rng / 4294967296;
  };

  for (let i = 0; i < FLOWER_COUNT; i++) {
    const theta = (i / FLOWER_COUNT) * Math.PI * 2 + (rand() - 0.5) * 0.22;
    const rad = 2.85 + Math.pow(rand(), 0.75) * 3.85;
    const fx = Math.cos(theta) * rad * 1.24;
    const fz = -0.55 + Math.sin(theta) * rad * 0.78;
    const fy = sampleHeroCliffHeight(fx, fz);

    dummy.position.set(fx, fy - 0.005, fz);
    dummy.rotation.set((rand() - 0.5) * 0.25, rand() * Math.PI * 2, (rand() - 0.5) * 0.25);
    const sc = 0.65 + rand() * 0.85;
    dummy.scale.setScalar(sc);
    dummy.updateMatrix();
    flowerInst.setMatrixAt(i, dummy.matrix);

    const c = palette[i % palette.length];
    fColors[i * 3] = c.r;
    fColors[i * 3 + 1] = c.g;
    fColors[i * 3 + 2] = c.b;
    fPhases[i] = rand() * Math.PI * 2;
  }
  petalGeo.setAttribute('aColor', new THREE.InstancedBufferAttribute(fColors, 3));
  petalGeo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(fPhases, 1));
  flowerInst.instanceMatrix.needsUpdate = true;
  group.add(flowerInst);

  // ==========================================================================
  // 3. ACCEPTANCE RESONANCE SHOCKWAVE RING
  // ==========================================================================
  const waveGeo = new THREE.RingGeometry(0.82, 1.0, 72);
  waveGeo.rotateX(-Math.PI * 0.5);
  const waveMat = new THREE.MeshBasicMaterial({
    color: 0xffd2e6,
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const waveMesh = new THREE.Mesh(waveGeo, waveMat);
  waveMesh.visible = false;
  waveMesh.userData.excludeFromExport = true;
  group.add(waveMesh);

  let waveAge = -1;

  // ==========================================================================
  // 4. FLOATING LANTERN-SPORES, SHIMMER BURSTS & WINGTIP MIST WAKES
  // ==========================================================================
  const MAX_MOTES = 520;
  const motePositions = new Float32Array(MAX_MOTES * 3);
  const moteColors = new Float32Array(MAX_MOTES * 3);
  const moteSizes = new Float32Array(MAX_MOTES);
  const moteVel = new Float32Array(MAX_MOTES * 3);
  const moteLife = new Float32Array(MAX_MOTES);
  const moteMaxLife = new Float32Array(MAX_MOTES);

  const moteGeo = new THREE.BufferGeometry();
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePositions, 3));
  moteGeo.setAttribute('aColor', new THREE.BufferAttribute(moteColors, 3));
  moteGeo.setAttribute('aSize', new THREE.BufferAttribute(moteSizes, 1));

  const moteMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec3 aColor;
      attribute float aSize;
      varying vec3 vColor;
      void main() {
        vColor = aColor;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPos;
        gl_PointSize = clamp(aSize * (280.0 / max(1.0, -mvPos.z)), 0.0, 42.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        if (r > 1.0) discard;
        float glow = pow(1.0 - r, 2.2);
        vec3 col = min(vColor * glow, vec3(6.0));
        gl_FragColor = vec4(col, glow);
      }
    `,
  });

  const motePoints = new THREE.Points(moteGeo, moteMat);
  motePoints.frustumCulled = false;
  motePoints.userData.excludeFromExport = true;
  group.add(motePoints);

  let moteCursor = 0;
  const emitMote = (
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
    ttl: number
  ) => {
    const idx = moteCursor;
    moteCursor = (moteCursor + 1) % MAX_MOTES;
    motePositions[idx * 3] = x;
    motePositions[idx * 3 + 1] = y;
    motePositions[idx * 3 + 2] = z;
    moteVel[idx * 3] = vx;
    moteVel[idx * 3 + 1] = vy;
    moteVel[idx * 3 + 2] = vz;
    moteColors[idx * 3] = r;
    moteColors[idx * 3 + 1] = g;
    moteColors[idx * 3 + 2] = b;
    moteSizes[idx] = size;
    moteLife[idx] = ttl;
    moteMaxLife[idx] = ttl;
  };

  let lanternAmbientActive = false;
  const tmpCol = new THREE.Color();

  return {
    group,

    setEtchProgress(progress: number) {
      sandUniforms.uEtchProgress.value = THREE.MathUtils.clamp(progress, 0, 1);
    },

    setAcceptanceGlow(glow: number) {
      sandUniforms.uAcceptanceGlow.value = THREE.MathUtils.clamp(glow, 0, 1);
      if (glow > 0.4) lanternAmbientActive = true;
    },

    setWildflowerBloom(bloom: number) {
      flowerUniforms.uBloom.value = THREE.MathUtils.clamp(bloom, 0, 1);
    },

    setFadeOut(fade: number) {
      const f = THREE.MathUtils.clamp(fade, 0, 1);
      sandUniforms.uFade.value = f;
      flowerUniforms.uFade.value = f;
    },

    triggerResonanceWave(origin = new THREE.Vector3(0, 0.12, -0.55)) {
      waveMesh.position.copy(origin);
      waveMesh.scale.setScalar(0.35);
      waveMesh.visible = true;
      waveAge = 0.0;
      lanternAmbientActive = true;

      // Immediate halo of rising golden-rose & cyan sanctuary lantern spores
      for (let i = 0; i < 120; i++) {
        const a = rand() * Math.PI * 2;
        const rad = 0.6 + rand() * 5.8;
        const px = origin.x + Math.cos(a) * rad;
        const pz = origin.z + Math.sin(a) * rad * 0.8;
        const py = sampleHeroCliffHeight(px, pz) + 0.08 + rand() * 0.35;
        const isCyan = i % 3 === 0;
        emitMote(
          px,
          py,
          pz,
          Math.cos(a) * (0.25 + rand() * 0.55),
          0.55 + rand() * 1.15,
          Math.sin(a) * (0.25 + rand() * 0.55),
          isCyan ? 0.32 : 1.35,
          isCyan ? 1.05 : 0.78,
          isCyan ? 1.55 : 0.98,
          0.16 + rand() * 0.18,
          4.2 + rand() * 3.8
        );
      }
    },

    spawnShimmerBurst(worldPos: THREE.Vector3, warmRose = true, count = 68) {
      for (let i = 0; i < count; i++) {
        const theta = rand() * Math.PI * 2;
        const phi = Math.acos(2 * rand() - 1);
        const spd = 1.2 + rand() * 3.8;
        const vx = Math.sin(phi) * Math.cos(theta) * spd;
        const vy = Math.cos(phi) * spd * 0.85 + 0.4;
        const vz = Math.sin(phi) * Math.sin(theta) * spd;
        const r = warmRose ? 1.45 : 0.85;
        const g = warmRose ? 1.05 : 1.25;
        const b = 1.55;
        emitMote(
          worldPos.x + (rand() - 0.5) * 0.5,
          worldPos.y + (rand() - 0.5) * 0.5,
          worldPos.z + (rand() - 0.5) * 0.5,
          vx,
          vy,
          vz,
          r,
          g,
          b,
          0.20 + rand() * 0.22,
          1.35 + rand() * 1.1
        );
      }
    },

    emitWingWake(posA: THREE.Vector3, posB: THREE.Vector3, colorHex = 0xdbeeff) {
      tmpCol.setHex(colorHex);
      for (const p of [posA, posB]) {
        emitMote(
          p.x + (rand() - 0.5) * 0.35,
          p.y + (rand() - 0.5) * 0.25,
          p.z + (rand() - 0.5) * 0.35,
          (rand() - 0.5) * 0.6,
          0.15 + rand() * 0.35,
          (rand() - 0.5) * 0.6,
          tmpCol.r * 1.25,
          tmpCol.g * 1.25,
          tmpCol.b * 1.25,
          0.22 + rand() * 0.16,
          0.95 + rand() * 0.65
        );
      }
    },

    update(dt: number, elapsedSec: number, windStrength = 0.45) {
      sandUniforms.uTime.value = elapsedSec;
      flowerUniforms.uTime.value = elapsedSec;
      flowerUniforms.uWind.value = windStrength;

      if (waveAge >= 0) {
        waveAge += dt;
        const dur = 2.65;
        if (waveAge >= dur) {
          waveMesh.visible = false;
          waveAge = -1;
        } else {
          const u = waveAge / dur;
          const ease = 1.0 - Math.pow(1.0 - u, 2.4);
          waveMesh.scale.setScalar(0.5 + ease * 26.0);
          waveMat.opacity = (1.0 - u) * (1.0 - u) * 0.85;
        }
      }

      if (lanternAmbientActive && rand() < Math.min(0.85, dt * 18.0)) {
        const a = rand() * Math.PI * 2;
        const rad = 1.8 + rand() * 6.5;
        const px = Math.cos(a) * rad * 1.2;
        const pz = -0.55 + Math.sin(a) * rad * 0.85;
        const py = sampleHeroCliffHeight(px, pz) + 0.06;
        const rose = rand() > 0.38;
        emitMote(
          px,
          py,
          pz,
          (rand() - 0.5) * 0.28,
          0.35 + rand() * 0.55,
          (rand() - 0.5) * 0.28,
          rose ? 1.35 : 0.38,
          rose ? 0.82 : 1.08,
          rose ? 1.02 : 1.50,
          0.13 + rand() * 0.14,
          4.5 + rand() * 3.5
        );
      }

      let anyAlive = false;
      for (let i = 0; i < MAX_MOTES; i++) {
        let life = moteLife[i];
        if (life <= 0) {
          moteSizes[i] = 0;
          continue;
        }
        anyAlive = true;
        life -= dt;
        moteLife[i] = life;
        if (life <= 0) {
          moteSizes[i] = 0;
          continue;
        }
        const drag = Math.exp(-0.9 * dt);
        moteVel[i * 3] *= drag;
        moteVel[i * 3 + 1] *= Math.exp(-0.35 * dt);
        moteVel[i * 3 + 2] *= drag;

        motePositions[i * 3] += (moteVel[i * 3] + Math.sin(elapsedSec * 1.7 + i) * 0.12) * dt;
        motePositions[i * 3 + 1] += moteVel[i * 3 + 1] * dt;
        motePositions[i * 3 + 2] += moteVel[i * 3 + 2] * dt;

        const u = life / Math.max(0.01, moteMaxLife[i]);
        const fade = Math.sin(Math.min(1, u) * Math.PI);
        moteSizes[i] = Math.max(0.02, fade * 0.24);
      }

      if (anyAlive) {
        moteGeo.attributes.position.needsUpdate = true;
        moteGeo.attributes.aSize.needsUpdate = true;
        moteGeo.attributes.aColor.needsUpdate = true;
      }
    },
  };
}
