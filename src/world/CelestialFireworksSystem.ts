import * as THREE from 'three';

export type FireworkShellKind = 'heart' | 'willow' | 'peony' | 'saturn';

interface RisingRocket {
  kind: FireworkShellKind;
  isHelixPair?: boolean;
  helixSign?: number;
  startPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  currentPos: THREE.Vector3;
  elapsed: number;
  duration: number;
  primaryColor: THREE.Color;
  secondaryColor: THREE.Color;
  scale: number;
}

interface BurstHalo {
  mesh: THREE.Mesh;
  mat: THREE.ShaderMaterial;
  life: number;
  maxLife: number;
  maxRadius: number;
}

export interface CelestialFireworksController {
  group: THREE.Group;
  launchTwinDragonComets: (
    nfMouthWorld: THREE.Vector3,
    lfMouthWorld: THREE.Vector3,
    apexWorld: THREE.Vector3
  ) => void;
  launchShell: (
    origin: THREE.Vector3,
    target: THREE.Vector3,
    kind: FireworkShellKind,
    primaryHex: number,
    secondaryHex: number,
    scale?: number,
    flightDuration?: number
  ) => void;
  spawnShootingStar: (start: THREE.Vector3, velocity: THREE.Vector3) => void;
  update: (dt: number, cameraPos: THREE.Vector3, isMuted: boolean) => void;
}

export function createCelestialFireworksSystem(): CelestialFireworksController {
  const group = new THREE.Group();
  group.name = 'CelestialFireworksSystem';

  // High-reach sky-flash illumination casting vivid color onto the dragons, grass & ocean!
  const skyFlashLight = new THREE.PointLight(0xffcbe0, 0, 260, 1.15);
  skyFlashLight.position.set(0, 20, -20);
  group.add(skyFlashLight);
  let flashIntensity = 0;
  const flashColor = new THREE.Color(0xffd4e6);

  // ==========================================================================
  // 1. LARGE STARBURST SPRITES + VELOCITY-STRETCHED BLAZING RIBBON STREAKS!
  // ==========================================================================
  const MAX_SPARKS = 4200;
  const positions = new Float32Array(MAX_SPARKS * 3);
  const prevPositions = new Float32Array(MAX_SPARKS * 3);
  const velocities = new Float32Array(MAX_SPARKS * 3);
  const colors = new Float32Array(MAX_SPARKS * 3);
  const sizes = new Float32Array(MAX_SPARKS);
  const baseSizes = new Float32Array(MAX_SPARKS);
  const drags = new Float32Array(MAX_SPARKS);
  const gravities = new Float32Array(MAX_SPARKS);
  const lives = new Float32Array(MAX_SPARKS);
  const maxLives = new Float32Array(MAX_SPARKS);
  const twinkles = new Float32Array(MAX_SPARKS);
  const trailLengths = new Float32Array(MAX_SPARKS);

  // LineSegments buffer: 2 vertices (head + glowing stretched tail) per active firework star!
  const streakPositions = new Float32Array(MAX_SPARKS * 6);
  const streakColors = new Float32Array(MAX_SPARKS * 6);

  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  sparkGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  sparkGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  // Crisp 4-point diffraction starburst + wide HDR bloom halo!
  const sparkMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    vertexShader: /* glsl */ `
      attribute float aSize;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * (560.0 / max(1.0, -mvPos.z)), 0.0, 145.0);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        vec2 uv = (gl_PointCoord - 0.5) * 2.0;
        float d = length(uv);
        if (d > 1.0) discard;
        float hotCore = exp(-d * d * 12.0);
        float softHalo = exp(-d * d * 2.8) * 0.58;
        // Crisp 4-point star flare spikes so bursts read as dramatic luminous pyrotechnics!
        float crossSpike = (exp(-abs(uv.x) * 14.0) * exp(-abs(uv.y) * 2.2) +
                            exp(-abs(uv.y) * 14.0) * exp(-abs(uv.x) * 2.2)) * 0.45 * (1.0 - d);
        float lum = hotCore + softHalo + crossSpike;
        vec3 col = mix(vColor, vec3(1.0, 0.99, 0.96), clamp(hotCore * 0.88, 0.0, 1.0));
        gl_FragColor = vec4(col * lum * 1.45, clamp(lum, 0.0, 1.0));
      }
    `,
  });

  const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
  sparkPoints.frustumCulled = false;
  sparkPoints.renderOrder = 9;
  group.add(sparkPoints);

  // Velocity-stretched glowing firework streamer ribbons!
  const streakGeo = new THREE.BufferGeometry();
  streakGeo.setAttribute('position', new THREE.BufferAttribute(streakPositions, 3));
  streakGeo.setAttribute('color', new THREE.BufferAttribute(streakColors, 3));

  const streakMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const streakLines = new THREE.LineSegments(streakGeo, streakMat);
  streakLines.frustumCulled = false;
  streakLines.renderOrder = 8;
  group.add(streakLines);

  // ==========================================================================
  // 2. POOLED VOLUMETRIC SKY-BURST HALO FLASHES (18m - 34m wide!)
  // ==========================================================================
  const burstHalos: BurstHalo[] = [];
  const haloPlaneGeo = new THREE.PlaneGeometry(2.0, 2.0);
  for (let i = 0; i < 10; i++) {
    const hMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xff9ad5) },
        uOpacity: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = (uv - 0.5) * 2.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float d = length(vUv);
          if (d > 1.0 || uOpacity <= 0.002) discard;
          float glow = exp(-d * d * 3.4);
          float shockRing = exp(-pow((d - 0.68) * 6.5, 2.0)) * 0.45;
          float a = (glow + shockRing) * uOpacity;
          vec3 c = mix(uColor, vec3(1.0, 0.98, 0.94), glow * 0.55);
          gl_FragColor = vec4(c * a * 1.35, a);
        }
      `,
    });
    const hMesh = new THREE.Mesh(haloPlaneGeo, hMat);
    hMesh.visible = false;
    hMesh.renderOrder = 7;
    group.add(hMesh);
    burstHalos.push({ mesh: hMesh, mat: hMat, life: 0, maxLife: 1.0, maxRadius: 20 });
  }

  let haloCursor = 0;
  function triggerBurstHalo(center: THREE.Vector3, color: THREE.Color, radius: number): void {
    const h = burstHalos[haloCursor % burstHalos.length];
    haloCursor++;
    h.mesh.position.copy(center);
    h.mesh.visible = true;
    h.mat.uniforms.uColor.value.copy(color);
    h.maxLife = 1.15;
    h.life = h.maxLife;
    h.maxRadius = radius;
  }

  let cursor = 0;
  function spawnSpark(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    color: THREE.Color,
    size: number,
    life: number,
    drag = 1.35,
    gravity = 3.2,
    twinkle = 0.25,
    trailMult = 0.22
  ): void {
    const i = cursor % MAX_SPARKS;
    cursor++;
    const i3 = i * 3;
    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;
    prevPositions[i3] = x;
    prevPositions[i3 + 1] = y;
    prevPositions[i3 + 2] = z;
    velocities[i3] = vx;
    velocities[i3 + 1] = vy;
    velocities[i3 + 2] = vz;
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
    baseSizes[i] = size;
    sizes[i] = size;
    drags[i] = drag;
    gravities[i] = gravity;
    lives[i] = life;
    maxLives[i] = life;
    twinkles[i] = twinkle;
    trailLengths[i] = trailMult;
  }

  // ==========================================================================
  // PROCEDURAL WEB AUDIO CHIME & DEEP PYROTECHNIC BOOM SYNTHESIZER
  // ==========================================================================
  let audioCtx: AudioContext | null = null;
  function ensureAudio(isMuted: boolean): AudioContext | null {
    if (isMuted) return null;
    if (!audioCtx && typeof window !== 'undefined') {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (Ctx) {
        try {
          audioCtx = new Ctx();
        } catch {
          audioCtx = null;
        }
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playBurstSound(scale: number, isHeart: boolean, isMuted: boolean): void {
    const ctx = ensureAudio(isMuted);
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const bufferSize = Math.floor(ctx.sampleRate * 0.55);
      const noiseBuf = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.14));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240 + scale * 90, now);
      filter.frequency.exponentialRampToValueAtTime(52, now + 0.50);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(Math.min(0.22, 0.10 * scale), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.52);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      if (isHeart) {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        for (let n = 0; n < notes.length; n++) {
          const osc = ctx.createOscillator();
          const cGain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(notes[n], now + n * 0.045);
          cGain.gain.setValueAtTime(0.028, now + n * 0.045);
          cGain.gain.exponentialRampToValueAtTime(0.0008, now + 0.95 + n * 0.06);
          osc.connect(cGain);
          cGain.connect(ctx.destination);
          osc.start(now + n * 0.045);
          osc.stop(now + 1.1 + n * 0.06);
        }
      }
    } catch {
      // Non-fatal audio fallback
    }
  }

  // ==========================================================================
  // COLOSSAL SKY-FILLING SHELL DETONATION PATTERNS (3x - 4x LARGER SCALE!)
  // ==========================================================================
  const rockets: RisingRocket[] = [];
  const tmpCol = new THREE.Color();
  const whiteGold = new THREE.Color(0xfff4d8);

  function detonateShell(
    center: THREE.Vector3,
    kind: FireworkShellKind,
    primary: THREE.Color,
    secondary: THREE.Color,
    scale: number,
    cameraPos: THREE.Vector3,
    isMuted: boolean
  ): void {
    // Dramatic sky illumination & huge volumetric flash halo!
    skyFlashLight.position.copy(center);
    flashColor.copy(primary).lerp(secondary, 0.45);
    flashIntensity = Math.min(38.0, flashIntensity + 18.0 * scale);
    triggerBurstHalo(center, flashColor, (16.0 + 7.5 * scale));
    playBurstSound(scale, kind === 'heart', isMuted);

    // Orient hearts & rings perpendicular to camera sightline so they frame dramatically!
    const toCam = new THREE.Vector3().subVectors(cameraPos, center).normalize();
    const worldUp = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(worldUp, toCam).normalize();
    const up = new THREE.Vector3().crossVectors(toCam, right).normalize();

    // Central white-gold core flash stars
    for (let c = 0; c < 36; c++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * Math.PI * 2;
      const phi = Math.acos(2 * v - 1);
      const spd = (3.0 + Math.random() * 8.0) * scale;
      spawnSpark(
        center.x,
        center.y,
        center.z,
        Math.sin(phi) * Math.cos(theta) * spd,
        Math.cos(phi) * spd,
        Math.sin(phi) * Math.sin(theta) * spd,
        whiteGold,
        2.1 * scale,
        0.85 + Math.random() * 0.45,
        2.4,
        1.2,
        0.15,
        0.18
      );
    }

    if (kind === 'heart') {
      // COLOSSAL DOUBLE-CONCENTRIC 3D HEART BURST (24m - 36m across the sky!)
      const outerCount = 220;
      for (let i = 0; i < outerCount; i++) {
        const t = (i / outerCount) * Math.PI * 2;
        const st = Math.sin(t);
        const hx = 16 * st * st * st;
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const speed = 1.18 * scale * (0.94 + Math.random() * 0.12);

        const vx = (right.x * hx + up.x * hy) * speed + (Math.random() - 0.5) * 1.4;
        const vy = (right.y * hx + up.y * hy) * speed + (Math.random() - 0.5) * 1.4;
        const vz = (right.z * hx + up.z * hy) * speed + (Math.random() - 0.5) * 1.4;

        tmpCol.copy(i % 2 === 0 ? primary : secondary);
        spawnSpark(
          center.x,
          center.y,
          center.z,
          vx,
          vy,
          vz,
          tmpCol,
          2.05 * scale,
          2.8 + Math.random() * 0.9,
          1.28,
          1.85,
          0.35,
          0.26
        );
      }

      // Inner shimmering golden-cyan companion heart
      const innerCount = 110;
      for (let i = 0; i < innerCount; i++) {
        const t = (i / innerCount) * Math.PI * 2;
        const st = Math.sin(t);
        const hx = 16 * st * st * st;
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const speed = 0.64 * scale;
        const vx = (right.x * hx + up.x * hy) * speed;
        const vy = (right.y * hx + up.y * hy) * speed;
        const vz = (right.z * hx + up.z * hy) * speed;
        tmpCol.copy(secondary).lerp(whiteGold, 0.45);
        spawnSpark(
          center.x,
          center.y,
          center.z,
          vx,
          vy,
          vz,
          tmpCol,
          1.75 * scale,
          2.5 + Math.random() * 0.7,
          1.35,
          1.6,
          0.45,
          0.22
        );
      }
    } else if (kind === 'willow') {
      // GIANT WEEPING GOLDEN BROCADE CROWN (up to 44m wide with long cascading trails!)
      const count = 300;
      for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2 * v - 1);
        const speed = (14.5 + Math.random() * 11.5) * scale;
        const vx = Math.sin(phi) * Math.cos(theta) * speed;
        const vy = Math.cos(phi) * speed + 3.2 * scale;
        const vz = Math.sin(phi) * Math.sin(theta) * speed;
        tmpCol.copy(primary).lerp(secondary, Math.random() * 0.55);
        spawnSpark(
          center.x,
          center.y,
          center.z,
          vx,
          vy,
          vz,
          tmpCol,
          1.95 * scale,
          3.4 + Math.random() * 1.4,
          0.95,
          4.2,
          0.42,
          0.32
        );
      }
    } else if (kind === 'saturn') {
      // COLOSSAL CELESTIAL CROWN SPHERE + WIDE TILTED SATURN HALO RING
      for (let i = 0; i < 160; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const speed = (11.5 + Math.random() * 5.5) * scale;
        spawnSpark(
          center.x,
          center.y,
          center.z,
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.cos(phi) * speed,
          Math.sin(phi) * Math.sin(theta) * speed,
          primary,
          1.85 * scale,
          2.5 + Math.random() * 0.8,
          1.30,
          2.6,
          0.28,
          0.24
        );
      }
      const ringTilt = (Math.random() - 0.5) * 0.65;
      const ringUp = up.clone().multiplyScalar(Math.sin(ringTilt)).addScaledVector(toCam, Math.cos(ringTilt)).normalize();
      for (let i = 0; i < 150; i++) {
        const a = (i / 150) * Math.PI * 2;
        const speed = 22.0 * scale * (0.95 + Math.random() * 0.10);
        const dir = right.clone().multiplyScalar(Math.cos(a)).addScaledVector(ringUp, Math.sin(a));
        spawnSpark(
          center.x,
          center.y,
          center.z,
          dir.x * speed,
          dir.y * speed,
          dir.z * speed,
          secondary,
          2.10 * scale,
          2.8 + Math.random() * 0.7,
          1.18,
          2.1,
          0.45,
          0.28
        );
      }
    } else {
      // MASSIVE MULTI-LAYER CHRYSANTHEMUM / PEONY STARBURST
      const count = 280;
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const isOuter = i < 190;
        const speed = (isOuter ? 16.5 + Math.random() * 9.5 : 8.5 + Math.random() * 5.5) * scale;
        tmpCol.copy(isOuter ? primary : secondary);
        spawnSpark(
          center.x,
          center.y,
          center.z,
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.cos(phi) * speed,
          Math.sin(phi) * Math.sin(theta) * speed,
          tmpCol,
          (isOuter ? 2.0 : 1.7) * scale,
          2.4 + Math.random() * 1.0,
          1.22,
          2.9,
          0.38,
          0.26
        );
      }
    }
  }

  return {
    group,
    launchTwinDragonComets: (
      nfMouthWorld: THREE.Vector3,
      lfMouthWorld: THREE.Vector3,
      apexWorld: THREE.Vector3
    ) => {
      rockets.push({
        kind: 'heart',
        isHelixPair: true,
        helixSign: 1,
        startPos: nfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: nfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0x38d8ff),
        secondaryColor: new THREE.Color(0xff7ac8),
        scale: 1.75,
      });
      rockets.push({
        kind: 'willow',
        isHelixPair: true,
        helixSign: -1,
        startPos: lfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: lfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0xff92d4),
        secondaryColor: new THREE.Color(0xffe08a),
        scale: 1.55,
      });
    },
    launchShell: (
      origin: THREE.Vector3,
      target: THREE.Vector3,
      kind: FireworkShellKind,
      primaryHex: number,
      secondaryHex: number,
      scale = 1.35,
      flightDuration = 1.2
    ) => {
      rockets.push({
        kind,
        startPos: origin.clone(),
        targetPos: target.clone(),
        currentPos: origin.clone(),
        elapsed: 0,
        duration: flightDuration,
        primaryColor: new THREE.Color(primaryHex),
        secondaryColor: new THREE.Color(secondaryHex),
        scale: scale * 1.28, // Boost overall scale so every shell commands the sky!
      });
    },
    spawnShootingStar: (start: THREE.Vector3, velocity: THREE.Vector3) => {
      const starCol = new THREE.Color(0xe8f6ff);
      for (let i = 0; i < 28; i++) {
        const lag = i * 0.022;
        spawnSpark(
          start.x - velocity.x * lag,
          start.y - velocity.y * lag,
          start.z - velocity.z * lag,
          velocity.x * (0.94 + Math.random() * 0.06),
          velocity.y * (0.94 + Math.random() * 0.06),
          velocity.z * (0.94 + Math.random() * 0.06),
          starCol,
          Math.max(0.45, 1.85 - i * 0.05),
          0.95 + Math.random() * 0.35,
          0.18,
          0.35,
          0.12,
          0.16
        );
      }
    },
    update: (dt: number, cameraPos: THREE.Vector3, isMuted: boolean) => {
      const safeDt = Math.min(dt, 0.05);

      // 1. Advance Rising Rockets & Twin Helical Dragon Plasma Comets
      for (let r = rockets.length - 1; r >= 0; r--) {
        const rk = rockets[r];
        rk.elapsed += safeDt;
        const u = Math.min(1, rk.elapsed / Math.max(0.05, rk.duration));
        const ease = 1 - Math.pow(1 - u, 1.55);

        const prev = rk.currentPos.clone();
        rk.currentPos.lerpVectors(rk.startPos, rk.targetPos, ease);

        if (rk.isHelixPair && rk.helixSign) {
          const helixEnv = Math.sin(u * Math.PI);
          const angle = u * Math.PI * 5.0 + (rk.helixSign > 0 ? 0 : Math.PI);
          const radius = 1.95 * helixEnv;
          rk.currentPos.x += Math.cos(angle) * radius;
          rk.currentPos.z += Math.sin(angle) * radius * 0.65;
        } else {
          rk.currentPos.y += Math.sin(u * Math.PI) * 2.2;
        }

        // Thick blazing comet tail while ascending!
        const steps = rk.isHelixPair ? 10 : 6;
        for (let s = 0; s < steps; s++) {
          const f = s / steps;
          const px = THREE.MathUtils.lerp(prev.x, rk.currentPos.x, f);
          const py = THREE.MathUtils.lerp(prev.y, rk.currentPos.y, f);
          const pz = THREE.MathUtils.lerp(prev.z, rk.currentPos.z, f);
          spawnSpark(
            px + (Math.random() - 0.5) * 0.16,
            py + (Math.random() - 0.5) * 0.16,
            pz + (Math.random() - 0.5) * 0.16,
            (Math.random() - 0.5) * 1.8,
            -1.2 - Math.random() * 1.8,
            (Math.random() - 0.5) * 1.8,
            rk.primaryColor,
            rk.isHelixPair ? 2.4 : 1.65,
            0.55 + Math.random() * 0.35,
            2.1,
            1.6,
            0.22,
            0.16
          );
        }

        if (u >= 1) {
          detonateShell(
            rk.targetPos,
            rk.kind,
            rk.primaryColor,
            rk.secondaryColor,
            rk.scale,
            cameraPos,
            isMuted
          );
          rockets.splice(r, 1);
        }
      }

      // 2. Update Volumetric Sky-Burst Halo Billboards
      for (const h of burstHalos) {
        if (h.life <= 0) {
          h.mesh.visible = false;
          continue;
        }
        h.life -= safeDt;
        if (h.life <= 0) {
          h.mesh.visible = false;
          continue;
        }
        const prog = 1.0 - h.life / h.maxLife;
        const rad = h.maxRadius * (0.25 + 0.75 * (1.0 - Math.pow(1.0 - prog, 2.5)));
        h.mesh.scale.setScalar(rad);
        h.mesh.lookAt(cameraPos);
        h.mat.uniforms.uOpacity.value = Math.pow(1.0 - prog, 2.1) * 0.78;
      }

      // 3. Integrate Firework Stars + Velocity-Stretched Blazing Streamer Ribbons!
      for (let i = 0; i < MAX_SPARKS; i++) {
        const i3 = i * 3;
        const i6 = i * 6;
        if (lives[i] <= 0) {
          sizes[i] = 0;
          streakPositions[i6] = 0;
          streakPositions[i6 + 1] = -9999;
          streakPositions[i6 + 2] = 0;
          streakPositions[i6 + 3] = 0;
          streakPositions[i6 + 4] = -9999;
          streakPositions[i6 + 5] = 0;
          continue;
        }
        lives[i] -= safeDt;
        if (lives[i] <= 0) {
          sizes[i] = 0;
          streakPositions[i6 + 1] = -9999;
          streakPositions[i6 + 4] = -9999;
          continue;
        }

        const damp = Math.exp(-drags[i] * safeDt);
        velocities[i3] *= damp;
        velocities[i3 + 1] = velocities[i3 + 1] * damp - gravities[i] * safeDt;
        velocities[i3 + 2] *= damp;

        positions[i3] += velocities[i3] * safeDt;
        positions[i3 + 1] += velocities[i3 + 1] * safeDt;
        positions[i3 + 2] += velocities[i3 + 2] * safeDt;

        const lifeFrac = lives[i] / Math.max(0.01, maxLives[i]);
        const twinkleMod =
          lifeFrac < 0.42
            ? 1.0 - twinkles[i] + twinkles[i] * (0.5 + 0.5 * Math.sin(lives[i] * 42.0 + i))
            : 1.0;
        const fade = Math.pow(lifeFrac, 0.52) * twinkleMod;
        sizes[i] = baseSizes[i] * fade;

        // Compute stretched glowing streamer tail opposite current velocity!
        const tailDt = trailLengths[i] * (0.45 + 0.55 * lifeFrac);
        const hx = positions[i3];
        const hy = positions[i3 + 1];
        const hz = positions[i3 + 2];
        const tx = hx - velocities[i3] * tailDt;
        const ty = hy - velocities[i3 + 1] * tailDt;
        const tz = hz - velocities[i3 + 2] * tailDt;

        streakPositions[i6] = hx;
        streakPositions[i6 + 1] = hy;
        streakPositions[i6 + 2] = hz;
        streakPositions[i6 + 3] = tx;
        streakPositions[i6 + 4] = ty;
        streakPositions[i6 + 5] = tz;

        // Bright white-tinted head -> rich colored fading tail!
        const rCol = colors[i3];
        const gCol = colors[i3 + 1];
        const bCol = colors[i3 + 2];
        streakColors[i6] = Math.min(1.5, (rCol * 0.7 + 0.45) * fade);
        streakColors[i6 + 1] = Math.min(1.5, (gCol * 0.7 + 0.45) * fade);
        streakColors[i6 + 2] = Math.min(1.5, (bCol * 0.7 + 0.45) * fade);
        streakColors[i6 + 3] = rCol * fade * 0.12;
        streakColors[i6 + 4] = gCol * fade * 0.12;
        streakColors[i6 + 5] = bCol * fade * 0.12;
      }

      (sparkGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (sparkGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      (sparkGeo.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;
      (streakGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (streakGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      flashIntensity *= Math.exp(-3.1 * safeDt);
      skyFlashLight.intensity = flashIntensity;
      skyFlashLight.color.copy(flashColor);
    },
  };
}
