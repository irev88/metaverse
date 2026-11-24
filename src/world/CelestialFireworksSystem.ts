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

  // Real-time warm firework sky-illumination light casting festive glow onto dragons & cliff!
  const skyFlashLight = new THREE.PointLight(0xffcbe0, 0, 180, 1.3);
  skyFlashLight.position.set(0, 18, -22);
  group.add(skyFlashLight);
  let flashIntensity = 0;
  const flashColor = new THREE.Color(0xffd4e6);

  // ==========================================================================
  // HIGH-CAPACITY GPU POINT-SPARK & TRAIL BUFFER
  // ==========================================================================
  const MAX_SPARKS = 6400;
  const positions = new Float32Array(MAX_SPARKS * 3);
  const velocities = new Float32Array(MAX_SPARKS * 3);
  const colors = new Float32Array(MAX_SPARKS * 3);
  const sizes = new Float32Array(MAX_SPARKS);
  const baseSizes = new Float32Array(MAX_SPARKS);
  const drags = new Float32Array(MAX_SPARKS);
  const gravities = new Float32Array(MAX_SPARKS);
  const lives = new Float32Array(MAX_SPARKS);
  const maxLives = new Float32Array(MAX_SPARKS);
  const twinkles = new Float32Array(MAX_SPARKS);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  const mat = new THREE.ShaderMaterial({
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
        gl_PointSize = clamp(aSize * (340.0 / max(1.5, -mvPos.z)), 0.0, 56.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vColor;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float r = length(p) * 2.0;
        if (r > 1.0) discard;
        float core = smoothstep(0.45, 0.0, r);
        float halo = pow(1.0 - r, 2.35);
        vec3 col = min(vColor * (halo * 0.95 + core * 0.85), vec3(9.5));
        gl_FragColor = vec4(col, clamp(halo, 0.0, 1.0));
      }
    `,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.userData.excludeFromExport = true;
  group.add(points);

  let cursor = 0;
  const emitSpark = (
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
    ttl: number,
    drag = 1.35,
    gravity = 3.2,
    twinkle = 0.0
  ) => {
    const i = cursor;
    cursor = (cursor + 1) % MAX_SPARKS;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    velocities[i * 3] = vx;
    velocities[i * 3 + 1] = vy;
    velocities[i * 3 + 2] = vz;
    colors[i * 3] = r;
    colors[i * 3 + 1] = g;
    colors[i * 3 + 2] = b;
    baseSizes[i] = size;
    sizes[i] = size;
    drags[i] = drag;
    gravities[i] = gravity;
    lives[i] = ttl;
    maxLives[i] = ttl;
    twinkles[i] = twinkle;
  };

  // ==========================================================================
  // GENTLE PROCEDURAL WEB AUDIO FIREWORK BLOOM & SPARKLE SYNTHESIS
  // ==========================================================================
  let audioCtx: AudioContext | null = null;
  const playBurstAudio = (isGrandHeart: boolean, isMuted: boolean) => {
    if (isMuted) return;
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') {
        void audioCtx.resume().catch(() => {});
      }
      if (audioCtx.state !== 'running') return;

      const now = audioCtx.currentTime;

      // Soft warm distant firework thump
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isGrandHeart ? 118 : 138, now);
      osc.frequency.exponentialRampToValueAtTime(34, now + 0.42);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(isGrandHeart ? 0.16 : 0.09, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.58);

      // Crystalline harmonic chime-shimmer
      const freqs = isGrandHeart ? [523.25, 659.25, 783.99, 1046.5] : [659.25, 987.77];
      freqs.forEach((f, idx) => {
        if (!audioCtx) return;
        const cOsc = audioCtx.createOscillator();
        const cGain = audioCtx.createGain();
        cOsc.type = 'triangle';
        const t0 = now + 0.04 + idx * 0.055;
        cOsc.frequency.setValueAtTime(f, t0);
        cGain.gain.setValueAtTime(0.0001, t0);
        cGain.gain.linearRampToValueAtTime(0.024, t0 + 0.03);
        cGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.25);
        cOsc.connect(cGain).connect(audioCtx.destination);
        cOsc.start(t0);
        cOsc.stop(t0 + 1.3);
      });
    } catch {
      // Ignore WebAudio restrictions if user hasn't interacted yet
    }
  };

  const rockets: RisingRocket[] = [];
  const tmpDir = new THREE.Vector3();
  const tmpRight = new THREE.Vector3();
  const tmpUp = new THREE.Vector3();

  const detonateShell = (
    pos: THREE.Vector3,
    kind: FireworkShellKind,
    colA: THREE.Color,
    colB: THREE.Color,
    scale: number,
    cameraPos: THREE.Vector3,
    isMuted: boolean
  ) => {
    skyFlashLight.position.copy(pos);
    flashColor.copy(colA).lerp(colB, 0.5);
    skyFlashLight.color.copy(flashColor);
    flashIntensity = Math.min(24.0, flashIntensity + (kind === 'heart' ? 16.0 : 9.5) * scale);

    playBurstAudio(kind === 'heart' && scale > 1.15, isMuted);

    // Build camera-facing basis so 3D heart & Saturn ring shells face the viewer majestically!
    tmpDir.copy(cameraPos).sub(pos);
    tmpDir.y *= 0.25;
    if (tmpDir.lengthSq() < 1e-4) tmpDir.set(0, 0, 1);
    tmpDir.normalize();
    tmpRight.crossVectors(new THREE.Vector3(0, 1, 0), tmpDir).normalize();
    tmpUp.crossVectors(tmpDir, tmpRight).normalize();

    if (kind === 'heart') {
      const count = 280;
      for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        const hx = 16.0 * Math.pow(Math.sin(t), 3);
        const hy =
          13.0 * Math.cos(t) -
          5.0 * Math.cos(2 * t) -
          2.0 * Math.cos(3 * t) -
          Math.cos(4 * t);
        const speed = 0.56 * scale * (0.94 + Math.random() * 0.12);
        const vx =
          (tmpRight.x * hx + tmpUp.x * hy) * speed + (Math.random() - 0.5) * 0.65;
        const vy =
          (tmpRight.y * hx + tmpUp.y * hy) * speed + (Math.random() - 0.5) * 0.65;
        const vz =
          (tmpRight.z * hx + tmpUp.z * hy) * speed + (Math.random() - 0.5) * 0.65;

        const c = hx >= 0 ? colA : colB;
        emitSpark(
          pos.x,
          pos.y,
          pos.z,
          vx,
          vy,
          vz,
          c.r * 2.2,
          c.g * 2.2,
          c.b * 2.2,
          0.34 * scale,
          2.8 + Math.random() * 0.9,
          1.28,
          1.45,
          1.0
        );
      }
      // Inner warm champagne starburst core
      for (let j = 0; j < 95; j++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const spd = (2.2 + Math.random() * 4.6) * scale;
        emitSpark(
          pos.x,
          pos.y,
          pos.z,
          Math.sin(phi) * Math.cos(theta) * spd,
          Math.cos(phi) * spd,
          Math.sin(phi) * Math.sin(theta) * spd,
          2.2,
          1.85,
          1.45,
          0.24 * scale,
          2.2 + Math.random() * 0.8,
          1.45,
          2.2,
          1.0
        );
      }
      return;
    }

    if (kind === 'willow') {
      const count = 240;
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const spd = (3.8 + Math.random() * 6.8) * scale;
        const c = Math.random() < 0.72 ? colA : colB;
        emitSpark(
          pos.x,
          pos.y,
          pos.z,
          Math.sin(phi) * Math.cos(theta) * spd,
          Math.cos(phi) * spd + 1.4,
          Math.sin(phi) * Math.sin(theta) * spd,
          c.r * 2.0,
          c.g * 2.0,
          c.b * 2.0,
          0.30 * scale,
          3.4 + Math.random() * 1.3,
          0.88,
          3.85,
          1.0
        );
      }
      return;
    }

    if (kind === 'saturn') {
      // Tilted ring
      const ringCount = 130;
      for (let i = 0; i < ringCount; i++) {
        const a = (i / ringCount) * Math.PI * 2;
        const rx = Math.cos(a) * 8.8 * scale;
        const ry = Math.sin(a) * 3.2 * scale;
        const rz = Math.sin(a) * 7.2 * scale;
        emitSpark(
          pos.x,
          pos.y,
          pos.z,
          rx,
          ry,
          rz,
          colB.r * 2.2,
          colB.g * 2.2,
          colB.b * 2.2,
          0.28 * scale,
          2.5 + Math.random() * 0.6,
          1.25,
          1.8,
          0.8
        );
      }
    }

    // Spherical peony burst (also inner core of Saturn)
    const count = kind === 'saturn' ? 130 : 230;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const layer = i % 2 === 0 ? 1.0 : 0.62;
      const spd = (5.8 + Math.random() * 3.2) * layer * scale;
      const c = i % 2 === 0 ? colA : colB;
      emitSpark(
        pos.x,
        pos.y,
        pos.z,
        Math.sin(phi) * Math.cos(theta) * spd,
        Math.cos(phi) * spd,
        Math.sin(phi) * Math.sin(theta) * spd,
        c.r * 2.15,
        c.g * 2.15,
        c.b * 2.15,
        0.29 * scale,
        2.3 + Math.random() * 0.85,
        1.32,
        2.6,
        1.0
      );
    }
  };

  let clockSec = 0;

  return {
    group,

    launchTwinDragonComets(nfMouthWorld, lfMouthWorld, apexWorld) {
      // Toothless royal-cyan plasma comet (+1 helix phase)
      rockets.push({
        kind: 'heart',
        isHelixPair: true,
        helixSign: 1,
        startPos: nfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: nfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0xff8ec6),
        secondaryColor: new THREE.Color(0x42c6ff),
        scale: 1.38,
      });
      // Light Fury rose-orchid plasma comet (-1 helix phase, merges at apex)
      rockets.push({
        kind: 'peony',
        isHelixPair: true,
        helixSign: -1,
        startPos: lfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: lfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0xffb8de),
        secondaryColor: new THREE.Color(0x8ee2ff),
        scale: 0.95,
      });
    },

    launchShell(
      origin,
      target,
      kind,
      primaryHex,
      secondaryHex,
      scale = 1.0,
      flightDuration = 1.15
    ) {
      rockets.push({
        kind,
        startPos: origin.clone(),
        targetPos: target.clone(),
        currentPos: origin.clone(),
        elapsed: 0,
        duration: flightDuration,
        primaryColor: new THREE.Color(primaryHex),
        secondaryColor: new THREE.Color(secondaryHex),
        scale,
      });
    },

    spawnShootingStar(start, velocity) {
      for (let k = 0; k < 18; k++) {
        const lag = k * 0.018;
        emitSpark(
          start.x - velocity.x * lag,
          start.y - velocity.y * lag,
          start.z - velocity.z * lag,
          velocity.x,
          velocity.y,
          velocity.z,
          1.9,
          1.95,
          2.35,
          0.34 * (1 - k / 22),
          0.95 - k * 0.03,
          0.08,
          0.4,
          0.0
        );
      }
    },

    update(dt, cameraPos, isMuted) {
      clockSec += dt;

      // Update rising rockets & helical dragon plasma comets
      for (let r = rockets.length - 1; r >= 0; r--) {
        const rk = rockets[r];
        rk.elapsed += dt;
        const u = Math.min(1, rk.elapsed / Math.max(0.05, rk.duration));
        const ease = 1.0 - Math.pow(1.0 - u, 1.65);

        rk.currentPos.lerpVectors(rk.startPos, rk.targetPos, ease);
        if (rk.isHelixPair && rk.helixSign) {
          const env = Math.sin(u * Math.PI);
          const angle = u * Math.PI * 5.0 + (rk.helixSign > 0 ? 0 : Math.PI);
          rk.currentPos.x += Math.cos(angle) * 2.2 * env;
          rk.currentPos.z += Math.sin(angle) * 1.6 * env;
          rk.currentPos.y += Math.sin(u * Math.PI) * 2.4;
        } else {
          rk.currentPos.y += Math.sin(u * Math.PI) * 1.8;
        }

        const c = rk.helixSign === 1 ? rk.secondaryColor : rk.primaryColor;
        for (let s = 0; s < 4; s++) {
          emitSpark(
            rk.currentPos.x + (Math.random() - 0.5) * 0.22,
            rk.currentPos.y + (Math.random() - 0.5) * 0.22,
            rk.currentPos.z + (Math.random() - 0.5) * 0.22,
            (Math.random() - 0.5) * 1.2,
            -1.4 - Math.random() * 1.5,
            (Math.random() - 0.5) * 1.2,
            c.r * 2.3,
            c.g * 2.3,
            c.b * 2.3,
            rk.isHelixPair ? 0.36 : 0.24,
            0.42 + Math.random() * 0.28,
            1.6,
            2.0,
            0.0
          );
        }

        if (u >= 1.0) {
          // For helix pair, rk with helixSign===1 spawns the giant Heart shell and rk===-1 adds shimmering inner peony!
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

      // Decay sky illumination flash smoothly
      flashIntensity *= Math.exp(-3.4 * dt);
      skyFlashLight.intensity = flashIntensity > 0.02 ? flashIntensity : 0;

      // Integrate active firework sparks + leave delicate golden willow micro-trails
      let anyAlive = false;
      for (let i = 0; i < MAX_SPARKS; i++) {
        let life = lives[i];
        if (life <= 0) {
          sizes[i] = 0;
          continue;
        }
        anyAlive = true;
        life -= dt;
        lives[i] = life;
        if (life <= 0) {
          sizes[i] = 0;
          continue;
        }

        const damp = Math.exp(-drags[i] * dt);
        velocities[i * 3] *= damp;
        velocities[i * 3 + 1] = velocities[i * 3 + 1] * damp - gravities[i] * dt;
        velocities[i * 3 + 2] *= damp;

        positions[i * 3] += velocities[i * 3] * dt;
        positions[i * 3 + 1] += velocities[i * 3 + 1] * dt;
        positions[i * 3 + 2] += velocities[i * 3 + 2] * dt;

        const lifeRatio = life / Math.max(0.01, maxLives[i]);
        const shimmer =
          twinkles[i] > 0.5 && lifeRatio < 0.55
            ? 0.58 + 0.42 * Math.sin(clockSec * 28.0 + i * 3.1)
            : 1.0;
        sizes[i] = baseSizes[i] * Math.pow(lifeRatio, 0.55) * shimmer;
      }

      if (anyAlive) {
        geo.attributes.position.needsUpdate = true;
        geo.attributes.aSize.needsUpdate = true;
        geo.attributes.aColor.needsUpdate = true;
      }
    },
  };
}
