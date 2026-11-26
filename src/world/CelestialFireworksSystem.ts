import * as THREE from 'three';

export type FireworkShellKind =
  | 'heart'
  | 'willow'
  | 'peony'
  | 'saturn'
  | 'dahlia'
  | 'spiral'
  | 'crossette'
  | 'digit-9'
  | 'digit-2'
  | 'digit-7';

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
  /** Launches synchronized left-to-right "9"  "2"  "7" pyrotechnic sky-writing triptych! */
  launch927SkyTriptych: (centerSkyTarget: THREE.Vector3) => void;
  spawnShootingStar: (start: THREE.Vector3, velocity: THREE.Vector3) => void;
  update: (dt: number, cameraPos: THREE.Vector3, isMuted: boolean) => void;
}

/**
 * Generates dense 2D glyph points in viewer-facing coordinates (sx in [-1,1] left->right, sy in [-1,1] bottom->top)
 * for crisp pyrotechnic sky-numerals "9", "2", "7".
 */
function sampleDigitGlyphPoints(digit: '9' | '2' | '7'): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  const addSegment = (x0: number, y0: number, x1: number, y1: number, count: number) => {
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      pts.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t]);
    }
  };
  const addCatmullChain = (ctrl: Array<[number, number]>, totalSamples: number) => {
    const curve = new THREE.SplineCurve(ctrl.map(([x, y]) => new THREE.Vector2(x, y)));
    const sampled = curve.getSpacedPoints(totalSamples);
    for (const p of sampled) pts.push([p.x, p.y]);
  };

  if (digit === '9') {
    // Upper closed bowl of '9'
    const loopCount = 92;
    for (let i = 0; i < loopCount; i++) {
      const a = (i / loopCount) * Math.PI * 2;
      pts.push([Math.cos(a) * 0.54, 0.42 + Math.sin(a) * 0.44]);
    }
    // Sweeping right-hand descender & graceful bottom hook
    addCatmullChain(
      [
        [0.54, 0.48],
        [0.54, -0.05],
        [0.42, -0.56],
        [0.10, -0.88],
        [-0.32, -0.92],
        [-0.48, -0.76],
      ],
      88
    );
  } else if (digit === '2') {
    // Graceful swan-arch top & diagonal sweep of '2'
    addCatmullChain(
      [
        [-0.52, 0.48],
        [-0.36, 0.84],
        [0.06, 0.92],
        [0.48, 0.76],
        [0.54, 0.38],
        [0.24, -0.08],
        [-0.22, -0.52],
        [-0.58, -0.90],
      ],
      115
    );
    // Crisp horizontal base bar of '2'
    addSegment(-0.58, -0.90, 0.60, -0.90, 68);
  } else {
    // Crisp top serif + top bar + bold diagonal stem of '7'
    addSegment(-0.56, 0.66, -0.56, 0.90, 18);
    addSegment(-0.56, 0.90, 0.58, 0.90, 72);
    addSegment(0.58, 0.90, -0.16, -0.92, 96);
  }
  return pts;
}

export function createCelestialFireworksSystem(): CelestialFireworksController {
  const group = new THREE.Group();
  group.name = 'CelestialFireworksSystem';

  const skyFlashLight = new THREE.PointLight(0xff4d94, 0, 260, 1.15);
  skyFlashLight.position.set(0, 20, -20);
  group.add(skyFlashLight);
  let flashIntensity = 0;
  const flashColor = new THREE.Color(0xff4d94);

  const MAX_SPARKS = 5400;
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
  const trailLengths = new Float32Array(MAX_SPARKS);

  const streakPositions = new Float32Array(MAX_SPARKS * 6);
  const streakColors = new Float32Array(MAX_SPARKS * 6);

  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  sparkGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  sparkGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  const sparkMat = new THREE.ShaderMaterial({
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
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = clamp(aSize * (560.0 / max(1.0, -mvPos.z)), 0.0, 148.0);
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
        float softHalo = exp(-d * d * 2.8) * 0.62;
        float crossSpike = (exp(-abs(uv.x) * 14.0) * exp(-abs(uv.y) * 2.2) +
                            exp(-abs(uv.y) * 14.0) * exp(-abs(uv.x) * 2.2)) * 0.48 * (1.0 - d);
        float lum = hotCore + softHalo + crossSpike;
        vec3 col = mix(vColor, vec3(1.0, 0.98, 0.96), clamp(hotCore * 0.84, 0.0, 1.0));
        gl_FragColor = vec4(col * lum * 1.48, clamp(lum, 0.0, 1.0));
      }
    `,
  });

  const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
  sparkPoints.frustumCulled = false;
  sparkPoints.renderOrder = 9;
  group.add(sparkPoints);

  const streakGeo = new THREE.BufferGeometry();
  streakGeo.setAttribute('position', new THREE.BufferAttribute(streakPositions, 3));
  streakGeo.setAttribute('color', new THREE.BufferAttribute(streakColors, 3));

  const streakMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    fog: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const streakLines = new THREE.LineSegments(streakGeo, streakMat);
  streakLines.frustumCulled = false;
  streakLines.renderOrder = 8;
  group.add(streakLines);

  const burstHalos: BurstHalo[] = [];
  const haloPlaneGeo = new THREE.PlaneGeometry(2.0, 2.0);
  for (let i = 0; i < 12; i++) {
    const hMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xff2a7a) },
        uOpacity: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      fog: false,
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
          float shockRing = exp(-pow((d - 0.68) * 6.5, 2.0)) * 0.48;
          float a = (glow + shockRing) * uOpacity;
          vec3 c = mix(uColor, vec3(1.0, 0.98, 0.94), glow * 0.52);
          gl_FragColor = vec4(c * a * 1.38, a);
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
    h.maxLife = 1.2;
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

  let audioCtx: AudioContext | null = null;
  function ensureAudio(isMuted: boolean): AudioContext | null {
    if (isMuted) return null;
    if (!audioCtx && typeof window !== 'undefined') {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
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

  function playBurstSound(scale: number, isSpecialChime: boolean, isMuted: boolean): void {
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
      filter.frequency.exponentialRampToValueAtTime(52, now + 0.5);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(Math.min(0.22, 0.10 * scale), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.52);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      if (isSpecialChime) {
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
    const isDigit = kind === 'digit-9' || kind === 'digit-2' || kind === 'digit-7';
    skyFlashLight.position.copy(center);
    flashColor.copy(primary).lerp(secondary, 0.45);
    flashIntensity = Math.min(40.0, flashIntensity + (isDigit ? 14.0 : 18.0) * scale);
    triggerBurstHalo(center, flashColor, (isDigit ? 12.0 : 16.0) + 7.2 * scale);
    playBurstSound(scale, kind === 'heart' || isDigit, isMuted);

    // Viewer-perpendicular basis: screenRight (+left-to-right on screen) & screenUp (+bottom-to-top on screen)
    const viewFwd = new THREE.Vector3().subVectors(center, cameraPos).normalize();
    const worldUp = new THREE.Vector3(0, 1, 0);
    const screenRight = new THREE.Vector3().crossVectors(viewFwd, worldUp).normalize();
    const screenUp = new THREE.Vector3().crossVectors(screenRight, viewFwd).normalize();

    if (isDigit) {
      // CRISP PYROTECHNIC SKY-NUMERAL ("9", "2", or "7")!
      const dChar = kind === 'digit-9' ? '9' : kind === 'digit-2' ? '2' : '7';
      const glyphPts = sampleDigitGlyphPoints(dChar);
      // High drag (3.2) means terminal displacement = v0 / drag ~ (12.8 * scale) / 3.2 = 4.0 * scale meters!
      const expandSpeed = 11.8 * scale;

      for (let i = 0; i < glyphPts.length; i++) {
        const [gx, gy] = glyphPts[i];
        const jitterX = (Math.random() - 0.5) * 0.04;
        const jitterY = (Math.random() - 0.5) * 0.04;
        const vx = (screenRight.x * (gx + jitterX) + screenUp.x * (gy + jitterY)) * expandSpeed;
        const vy = (screenRight.y * (gx + jitterX) + screenUp.y * (gy + jitterY)) * expandSpeed;
        const vz = (screenRight.z * (gx + jitterX) + screenUp.z * (gy + jitterY)) * expandSpeed;

        tmpCol.copy(i % 3 === 0 ? secondary : primary);
        spawnSpark(
          center.x,
          center.y,
          center.z,
          vx,
          vy,
          vz,
          tmpCol,
          2.15 * scale,
          3.95 + Math.random() * 0.55,
          3.2,   // Stops cleanly in sky to hold unmistakable numeral silhouette!
          0.34,  // Very gentle drift so "9  2  7" stays crisp & aligned for ~4 seconds!
          0.32,
          0.14
        );
      }

      // Delicate outer shimmer halo framing each numeral
      for (let k = 0; k < 44; k++) {
        const a = (k / 44) * Math.PI * 2;
        const spd = 15.5 * scale * (0.92 + Math.random() * 0.16);
        const vx = (screenRight.x * Math.cos(a) * 0.95 + screenUp.x * Math.sin(a) * 1.25) * spd;
        const vy = (screenRight.y * Math.cos(a) * 0.95 + screenUp.y * Math.sin(a) * 1.25) * spd;
        const vz = (screenRight.z * Math.cos(a) * 0.95 + screenUp.z * Math.sin(a) * 1.25) * spd;
        spawnSpark(center.x, center.y, center.z, vx, vy, vz, whiteGold, 1.45 * scale, 2.2 + Math.random() * 0.6, 2.2, 1.4, 0.55, 0.20);
      }
      return;
    }

    // Central white-gold core flash stars for floral/aerial shells
    for (let c = 0; c < 34; c++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
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
      const outerCount = 220;
      for (let i = 0; i < outerCount; i++) {
        const t = (i / outerCount) * Math.PI * 2;
        const st = Math.sin(t);
        const hx = 16 * st * st * st;
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const speed = 1.18 * scale * (0.94 + Math.random() * 0.12);

        const vx = (screenRight.x * hx + screenUp.x * hy) * speed + (Math.random() - 0.5) * 1.3;
        const vy = (screenRight.y * hx + screenUp.y * hy) * speed + (Math.random() - 0.5) * 1.3;
        const vz = (screenRight.z * hx + screenUp.z * hy) * speed + (Math.random() - 0.5) * 1.3;

        tmpCol.copy(i % 2 === 0 ? primary : secondary);
        spawnSpark(center.x, center.y, center.z, vx, vy, vz, tmpCol, 2.08 * scale, 2.85 + Math.random() * 0.9, 1.28, 1.85, 0.35, 0.26);
      }
      const innerCount = 105;
      for (let i = 0; i < innerCount; i++) {
        const t = (i / innerCount) * Math.PI * 2;
        const st = Math.sin(t);
        const hx = 16 * st * st * st;
        const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const speed = 0.64 * scale;
        const vx = (screenRight.x * hx + screenUp.x * hy) * speed;
        const vy = (screenRight.y * hx + screenUp.y * hy) * speed;
        const vz = (screenRight.z * hx + screenUp.z * hy) * speed;
        tmpCol.copy(secondary).lerp(whiteGold, 0.42);
        spawnSpark(center.x, center.y, center.z, vx, vy, vz, tmpCol, 1.78 * scale, 2.55 + Math.random() * 0.7, 1.35, 1.6, 0.45, 0.22);
      }
    } else if (kind === 'dahlia') {
      // SHOCKING RUBY-RED / HOT-PINK RAZOR-SPIKE STARFLOWER DAHLIA!
      const rays = 36;
      const ptsPerRay = 8;
      for (let r = 0; r < rays; r++) {
        // Golden-sphere uniform ray direction
        const yDir = 1 - (r / (rays - 1)) * 2;
        const rad = Math.sqrt(Math.max(0, 1 - yDir * yDir));
        const theta = r * 2.39996323;
        const dx = Math.cos(theta) * rad;
        const dz = Math.sin(theta) * rad;

        for (let p = 1; p <= ptsPerRay; p++) {
          const frac = p / ptsPerRay;
          const speed = (6.0 + frac * 22.5) * scale;
          tmpCol.copy(primary).lerp(secondary, 1.0 - frac);
          spawnSpark(
            center.x,
            center.y,
            center.z,
            dx * speed,
            yDir * speed,
            dz * speed,
            tmpCol,
            (1.45 + 0.85 * frac) * scale,
            2.4 + frac * 0.85,
            1.05,
            2.2,
            0.28,
            0.34
          );
        }
      }
    } else if (kind === 'spiral') {
      // SHOCKING PINK & CRIMSON GALAXY TOURBILLON SPIRAL!
      const arms = 4;
      const perArm = 68;
      for (let a = 0; a < arms; a++) {
        const armOffset = (a / arms) * Math.PI * 2;
        for (let j = 0; j < perArm; j++) {
          const u = j / perArm;
          const ang = armOffset + u * Math.PI * 3.2;
          const speed = (3.5 + u * 23.0) * scale;
          const vx = (screenRight.x * Math.cos(ang) + screenUp.x * Math.sin(ang)) * speed;
          const vy = (screenRight.y * Math.cos(ang) + screenUp.y * Math.sin(ang)) * speed;
          const vz = (screenRight.z * Math.cos(ang) + screenUp.z * Math.sin(ang)) * speed + (Math.random() - 0.5) * 3.2;
          tmpCol.copy(a % 2 === 0 ? primary : secondary).lerp(whiteGold, (1 - u) * 0.35);
          spawnSpark(center.x, center.y, center.z, vx, vy, vz, tmpCol, 1.95 * scale, 2.7 + u * 0.9, 1.25, 1.9, 0.48, 0.28);
        }
      }
    } else if (kind === 'crossette') {
      // ELECTRIC CRIMSON & ROSE-PINK STROBE CROSSETTE CROWN!
      const clusters = 24;
      for (let c = 0; c < clusters; c++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const baseVx = Math.sin(phi) * Math.cos(theta) * 18.5 * scale;
        const baseVy = Math.cos(phi) * 18.5 * scale + 2.5 * scale;
        const baseVz = Math.sin(phi) * Math.sin(theta) * 18.5 * scale;

        // 4-way mini crossette split around each comet vector
        for (let sub = 0; sub < 11; sub++) {
          const spread = sub === 0 ? 0 : 4.2 * scale;
          const sa = (sub / 10) * Math.PI * 2;
          tmpCol.copy(sub === 0 ? whiteGold : sub % 2 === 0 ? primary : secondary);
          spawnSpark(
            center.x,
            center.y,
            center.z,
            baseVx + Math.cos(sa) * spread,
            baseVy + Math.sin(sa) * spread,
            baseVz + (Math.random() - 0.5) * spread,
            tmpCol,
            (sub === 0 ? 2.35 : 1.75) * scale,
            2.6 + Math.random() * 1.1,
            1.18,
            2.7,
            0.62, // High strobe sparkle!
            0.28
          );
        }
      }
    } else if (kind === 'willow') {
      const count = 300;
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const speed = (14.5 + Math.random() * 11.5) * scale;
        const vx = Math.sin(phi) * Math.cos(theta) * speed;
        const vy = Math.cos(phi) * speed + 3.2 * scale;
        const vz = Math.sin(phi) * Math.sin(theta) * speed;
        tmpCol.copy(primary).lerp(secondary, Math.random() * 0.55);
        spawnSpark(center.x, center.y, center.z, vx, vy, vz, tmpCol, 1.95 * scale, 3.4 + Math.random() * 1.4, 0.95, 4.2, 0.42, 0.32);
      }
    } else if (kind === 'saturn') {
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
          1.3,
          2.6,
          0.28,
          0.24
        );
      }
      const ringTilt = (Math.random() - 0.5) * 0.55;
      const ringUp = screenUp.clone().multiplyScalar(Math.sin(ringTilt)).addScaledVector(viewFwd, -Math.cos(ringTilt)).normalize();
      for (let i = 0; i < 150; i++) {
        const a = (i / 150) * Math.PI * 2;
        const speed = 22.0 * scale * (0.95 + Math.random() * 0.10);
        const dir = screenRight.clone().multiplyScalar(Math.cos(a)).addScaledVector(ringUp, Math.sin(a));
        spawnSpark(center.x, center.y, center.z, dir.x * speed, dir.y * speed, dir.z * speed, secondary, 2.10 * scale, 2.8 + Math.random() * 0.7, 1.18, 2.1, 0.45, 0.28);
      }
    } else {
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
    launchTwinDragonComets: (nfMouthWorld, lfMouthWorld, apexWorld) => {
      rockets.push({
        kind: 'heart',
        isHelixPair: true,
        helixSign: 1,
        startPos: nfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: nfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0xff1476), // Shocking hot rose-pink!
        secondaryColor: new THREE.Color(0x38d8ff),
        scale: 1.75,
      });
      rockets.push({
        kind: 'dahlia',
        isHelixPair: true,
        helixSign: -1,
        startPos: lfMouthWorld.clone(),
        targetPos: apexWorld.clone(),
        currentPos: lfMouthWorld.clone(),
        elapsed: 0,
        duration: 1.55,
        primaryColor: new THREE.Color(0xff1a4b), // Shocking ruby-crimson!
        secondaryColor: new THREE.Color(0xffe08a),
        scale: 1.55,
      });
    },
    launchShell: (origin, target, kind, primaryHex, secondaryHex, scale = 1.35, flightDuration = 1.2) => {
      rockets.push({
        kind,
        startPos: origin.clone(),
        targetPos: target.clone(),
        currentPos: origin.clone(),
        elapsed: 0,
        duration: flightDuration,
        primaryColor: new THREE.Color(primaryHex),
        secondaryColor: new THREE.Color(secondaryHex),
        scale: scale * 1.25,
      });
    },
    launch927SkyTriptych: (centerSkyTarget: THREE.Vector3) => {
      // Left ("9"), Center ("2"), Right ("7") in viewer X coordinates (-9.8, 0.0, +9.8)
      const spacing = 9.8;
      const specs: Array<[FireworkShellKind, number, number, number]> = [
        ['digit-9', -spacing, 0xff1244, 0xff62b0], // Shocking Crimson-Red & Hot Rose-Pink
        ['digit-2', 0.0, 0xff1488, 0xffe294],      // Electric Hot-Pink & Champagne Gold
        ['digit-7', spacing, 0xff1e56, 0xff94d2],  // Shocking Ruby-Pink & Starlight Rose
      ];
      for (const [kind, dx, c1, c2] of specs) {
        const target = new THREE.Vector3(centerSkyTarget.x + dx, centerSkyTarget.y, centerSkyTarget.z);
        const origin = new THREE.Vector3(target.x * 0.45, -2.5, target.z - 4.0);
        rockets.push({
          kind,
          startPos: origin,
          targetPos: target,
          currentPos: origin.clone(),
          elapsed: 0,
          duration: 1.08,
          primaryColor: new THREE.Color(c1),
          secondaryColor: new THREE.Color(c2),
          scale: 1.32,
        });
      }
    },
    spawnShootingStar: (start, velocity) => {
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
    update: (dt, cameraPos, isMuted) => {
      const safeDt = Math.min(dt, 0.05);

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
          rk.currentPos.y += Math.sin(u * Math.PI) * 2.0;
        }

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
          detonateShell(rk.targetPos, rk.kind, rk.primaryColor, rk.secondaryColor, rk.scale, cameraPos, isMuted);
          rockets.splice(r, 1);
        }
      }

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

      for (let i = 0; i < MAX_SPARKS; i++) {
        const i3 = i * 3;
        const i6 = i * 6;
        if (lives[i] <= 0) {
          sizes[i] = 0;
          streakPositions[i6 + 1] = -9999;
          streakPositions[i6 + 4] = -9999;
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
          lifeFrac < 0.45
            ? 1.0 - twinkles[i] + twinkles[i] * (0.5 + 0.5 * Math.sin(lives[i] * 42.0 + i))
            : 1.0;
        const fade = Math.pow(lifeFrac, 0.52) * twinkleMod;
        sizes[i] = baseSizes[i] * fade;

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

        const rCol = colors[i3];
        const gCol = colors[i3 + 1];
        const bCol = colors[i3 + 2];
        streakColors[i6] = Math.min(1.5, (rCol * 0.72 + 0.42) * fade);
        streakColors[i6 + 1] = Math.min(1.5, (gCol * 0.72 + 0.42) * fade);
        streakColors[i6 + 2] = Math.min(1.5, (bCol * 0.72 + 0.42) * fade);
        streakColors[i6 + 3] = rCol * fade * 0.14;
        streakColors[i6 + 4] = gCol * fade * 0.14;
        streakColors[i6 + 5] = bCol * fade * 0.14;
      }

      (sparkGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (sparkGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      (sparkGeo.attributes.aSize as THREE.BufferAttribute).needsUpdate = true;
      (streakGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (streakGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      flashIntensity *= Math.exp(-3.0 * safeDt);
      skyFlashLight.intensity = flashIntensity;
      skyFlashLight.color.copy(flashColor);
    },
  };
}
