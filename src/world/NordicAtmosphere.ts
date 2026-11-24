import * as THREE from 'three';

export type WeatherPresetId =
  | 'golden-hour'
  | 'clear-day'
  | 'dawn-dusk'
  | 'misty-overcast'
  | 'starlit-night'
  | 'stormy-squall';

export interface WeatherPresetConfig {
  id: WeatherPresetId;
  label: string;
  subtitle: string;
  sunElevationDeg: number;
  sunAzimuthDeg: number;
  zenithColor: number;
  horizonSunColor: number;
  horizonAntiSunColor: number;
  mieHaloColor: number;
  mieStrength: number;
  mieExponent: number;
  sunLightColor: number;
  sunLightIntensity: number;
  rimLightColor: number;
  rimLightIntensity: number;
  hemiSkyColor: number;
  hemiGroundColor: number;
  hemiIntensity: number;
  cloudDarkColor: number;
  cloudLitColor: number;
  cloudCoverage: number;       // [0, 1]
  mistDensity: number;         // aerial perspective density
  rainIntensity: number;       // [0, 1] physical precipitation & splash intensity
  windStrength: number;        // [0, 1] traveling wind-gust force blowing ferns, grasses & spray
  lightningFrequency: number;  // [0, 1] forked sky-to-sea lightning & rolling thunder frequency
  exposure: number;
  nightFactor: number;         // [0, 1] stars & moon disc
  auroraIntensity: number;     // [0, 1] boreal emerald/violet ribbons
  waterDeepColor: number;
  waterShallowColor: number;
  glitterIntensity: number;
}

export const WEATHER_PRESETS: Record<WeatherPresetId, WeatherPresetConfig> = {
  'golden-hour': {
    id: 'golden-hour',
    label: 'Golden Hour',
    subtitle: 'Amber & Violet Dusk',
    sunElevationDeg: 10.8,
    sunAzimuthDeg: -140,
    zenithColor: 0x101d3c,
    horizonSunColor: 0xe87b3e,
    horizonAntiSunColor: 0x4b466e,
    mieHaloColor: 0xffa452,
    mieStrength: 0.52,
    mieExponent: 6.8,
    sunLightColor: 0xffba70,
    sunLightIntensity: 4.05,
    rimLightColor: 0x6ba6f0,
    rimLightIntensity: 1.78,
    hemiSkyColor: 0x9ab2e0,
    hemiGroundColor: 0x3b2d26,
    hemiIntensity: 1.16,
    cloudDarkColor: 0x242038,
    cloudLitColor: 0xff9b56,
    cloudCoverage: 0.46,
    mistDensity: 0.0021,
    rainIntensity: 0.0,
    windStrength: 0.48,
    lightningFrequency: 0.0,
    exposure: 1.16,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x040f1e,
    waterShallowColor: 0x0b4c54,
    glitterIntensity: 5.2,
  },
  'clear-day': {
    id: 'clear-day',
    label: 'Clear Day',
    subtitle: 'Emerald & Sapphire Sun',
    sunElevationDeg: 43.0,
    sunAzimuthDeg: -124,
    zenithColor: 0x164482,
    horizonSunColor: 0x98c6ea,
    horizonAntiSunColor: 0x7aaad8,
    mieHaloColor: 0xfff1d8,
    mieStrength: 0.30,
    mieExponent: 7.8,
    sunLightColor: 0xfff4e2,
    sunLightIntensity: 3.75,
    rimLightColor: 0x92c6f8,
    rimLightIntensity: 1.72,
    hemiSkyColor: 0xb2d8fc,
    hemiGroundColor: 0x344436,
    hemiIntensity: 1.40,
    cloudDarkColor: 0x5c7696,
    cloudLitColor: 0xffffff,
    cloudCoverage: 0.28,
    mistDensity: 0.0013,
    rainIntensity: 0.0,
    windStrength: 0.42,
    lightningFrequency: 0.0,
    exposure: 1.12,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x03182e,
    waterShallowColor: 0x0c6470,
    glitterIntensity: 3.9,
  },
  'dawn-dusk': {
    id: 'dawn-dusk',
    label: 'Dawn / Dusk',
    subtitle: 'Crimson & Amethyst Tide',
    sunElevationDeg: 4.6,
    sunAzimuthDeg: -148,
    zenithColor: 0x121436,
    horizonSunColor: 0xe46468,
    horizonAntiSunColor: 0x3a3e68,
    mieHaloColor: 0xff8c72,
    mieStrength: 0.48,
    mieExponent: 6.4,
    sunLightColor: 0xff967c,
    sunLightIntensity: 3.15,
    rimLightColor: 0x7a92ec,
    rimLightIntensity: 1.85,
    hemiSkyColor: 0x8c90d0,
    hemiGroundColor: 0x2c2232,
    hemiIntensity: 1.18,
    cloudDarkColor: 0x201c38,
    cloudLitColor: 0xf47878,
    cloudCoverage: 0.44,
    mistDensity: 0.0024,
    rainIntensity: 0.0,
    windStrength: 0.44,
    lightningFrequency: 0.0,
    exposure: 1.20,
    nightFactor: 0.24,
    auroraIntensity: 0.14,
    waterDeepColor: 0x050c1c,
    waterShallowColor: 0x103c4e,
    glitterIntensity: 4.5,
  },
  'misty-overcast': {
    id: 'misty-overcast',
    label: 'Misty Rain',
    subtitle: 'Coastal Drizzle & Fog',
    sunElevationDeg: 29.0,
    sunAzimuthDeg: -130,
    zenithColor: 0x384858,
    horizonSunColor: 0x889aa8,
    horizonAntiSunColor: 0x687a8c,
    mieHaloColor: 0xc8d8e4,
    mieStrength: 0.20,
    mieExponent: 4.0,
    sunLightColor: 0xd8e6f0,
    sunLightIntensity: 2.25,
    rimLightColor: 0x9ac0de,
    rimLightIntensity: 1.92,
    hemiSkyColor: 0xb0c4d4,
    hemiGroundColor: 0x2a3636,
    hemiIntensity: 1.55,
    cloudDarkColor: 0x3a4858,
    cloudLitColor: 0x9cb0be,
    cloudCoverage: 0.88,
    mistDensity: 0.0042,
    rainIntensity: 0.45,
    windStrength: 0.64,
    lightningFrequency: 0.0,
    exposure: 1.18,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x06151e,
    waterShallowColor: 0x14464c,
    glitterIntensity: 1.45,
  },
  'starlit-night': {
    id: 'starlit-night',
    label: 'Starlit Night',
    subtitle: 'Boreal Emerald & Moon',
    sunElevationDeg: 29.0, // Full Moon elevation!
    sunAzimuthDeg: -136,
    zenithColor: 0x040916,
    horizonSunColor: 0x142a48,
    horizonAntiSunColor: 0x0c182e,
    mieHaloColor: 0x6ca6e4,
    mieStrength: 0.30,
    mieExponent: 9.5,
    sunLightColor: 0xaaccff,
    sunLightIntensity: 2.55,
    rimLightColor: 0x56a4f8,
    rimLightIntensity: 2.10,
    hemiSkyColor: 0x3e669a,
    hemiGroundColor: 0x141d28,
    hemiIntensity: 1.14,
    cloudDarkColor: 0x08101e,
    cloudLitColor: 0x2c4a70,
    cloudCoverage: 0.26,
    mistDensity: 0.0018,
    rainIntensity: 0.0,
    windStrength: 0.36,
    lightningFrequency: 0.0,
    exposure: 1.28,
    nightFactor: 1.0,
    auroraIntensity: 0.88,
    waterDeepColor: 0x020711,
    waterShallowColor: 0x082a3c,
    glitterIntensity: 3.8,
  },
  'stormy-squall': {
    id: 'stormy-squall',
    label: 'Storm Squall',
    subtitle: 'Thunder & Rogue Gale',
    sunElevationDeg: 16.5,
    sunAzimuthDeg: -138,
    zenithColor: 0x0d1522,
    horizonSunColor: 0x46586c,
    horizonAntiSunColor: 0x202c3c,
    mieHaloColor: 0x8aa8c4,
    mieStrength: 0.32,
    mieExponent: 4.5,
    sunLightColor: 0xb4cce2,
    sunLightIntensity: 2.55,
    rimLightColor: 0x6ca0d8,
    rimLightIntensity: 1.98,
    hemiSkyColor: 0x627c98,
    hemiGroundColor: 0x182228,
    hemiIntensity: 1.28,
    cloudDarkColor: 0x101722,
    cloudLitColor: 0x5c7288,
    cloudCoverage: 0.94,
    mistDensity: 0.0037,
    rainIntensity: 1.0,
    windStrength: 1.0,
    lightningFrequency: 0.92,
    exposure: 1.20,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x030c14,
    waterShallowColor: 0x0c3c44,
    glitterIntensity: 2.4,
  },
};

export interface AtmosphereSharedUniforms {
  uSunDir: { value: THREE.Vector3 };
  uSunColor: { value: THREE.Color };
  uZenithColor: { value: THREE.Color };
  uHorizonSunColor: { value: THREE.Color };
  uHorizonAntiColor: { value: THREE.Color };
  uMieColor: { value: THREE.Color };
  uMieStrength: { value: number };
  uMieExponent: { value: number };
  uCloudDarkColor: { value: THREE.Color };
  uCloudLitColor: { value: THREE.Color };
  uCloudCoverage: { value: number };
  uMistDensity: { value: number };
  uRainIntensity: { value: number };
  uWindStrength: { value: number };
  uWindDir: { value: THREE.Vector2 };
  uLightningFlash: { value: number };
  uLightningDir: { value: THREE.Vector3 };
  uNightFactor: { value: number };
  uAuroraIntensity: { value: number };
  uWaterDeepColor: { value: THREE.Color };
  uWaterShallowColor: { value: THREE.Color };
  uGlitterIntensity: { value: number };
  uIsEnvBake: { value: number };
  uTime: { value: number };
}

export interface NordicAtmosphereController {
  skyMesh: THREE.Mesh;
  sunLight: THREE.DirectionalLight;
  rimLight: THREE.DirectionalLight;
  hemiLight: THREE.HemisphereLight;
  sunDirection: THREE.Vector3;
  sunColor: THREE.Color;
  activePreset: WeatherPresetId;
  sharedUniforms: AtmosphereSharedUniforms;
  applyPreset: (
    presetId: WeatherPresetId,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene
  ) => void;
  blendPresets: (
    fromId: WeatherPresetId,
    toId: WeatherPresetId,
    alpha: number,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    sunElevOffsetDeg?: number,
    sunAzimOffsetDeg?: number
  ) => void;
  setAudioMuted: (muted: boolean) => void;
  isAudioMuted: () => boolean;
  setMistDensity: (density: number, scene: THREE.Scene) => void;
  setRainIntensity: (intensity: number) => void;
  setWindStrength: (strength: number) => void;
  setLightningFrequency: (freq: number) => void;
  triggerLightningStrike: (cameraPos?: THREE.Vector3) => void;
  setSunElevation: (
    elevDeg: number,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene
  ) => void;
  update: (timeSec: number, focusPos?: THREE.Vector3, cameraPos?: THREE.Vector3) => void;
}

/**
 * Shared GLSL sky, cloud, aurora & lightning-flash radiance function injected into Sky, Ocean & Archipelago shaders
 * so the sky, storm-lit clouds, sea reflections, and distant fjord mountains share 100% seamless color composition!
 */
export const SHARED_SKY_GLSL = /* glsl */ `
  uniform vec3 uSunDir;
  uniform vec3 uZenithColor;
  uniform vec3 uHorizonSunColor;
  uniform vec3 uHorizonAntiColor;
  uniform vec3 uMieColor;
  uniform float uMieStrength;
  uniform float uMieExponent;
  uniform vec3 uCloudDarkColor;
  uniform vec3 uCloudLitColor;
  uniform float uCloudCoverage;
  uniform float uMistDensity;
  uniform float uWindStrength;
  uniform vec2 uWindDir;
  uniform float uLightningFlash;
  uniform vec3 uLightningDir;
  uniform float uNightFactor;
  uniform float uAuroraIntensity;
  uniform float uIsEnvBake;
  uniform float uTime;

  float skyHash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float skyNoise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(skyHash21(i), skyHash21(i + vec2(1.0, 0.0)), f.x),
      mix(skyHash21(i + vec2(0.0, 1.0)), skyHash21(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float skyFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      v += a * skyNoise2(p);
      p = rot * p * 2.03;
      a *= 0.5;
    }
    return v;
  }

  // Evaluates clean, continuous sky + dramatic storm cloud + aurora + lightning radiance (100% seamless across rawDir.y = 0!)
  vec3 evalPhysicalSky(vec3 rawDir, float timeSec, bool includeStarsAndDisc) {
    float rawLen = max(length(rawDir), 1e-5);
    vec3 normRaw = rawDir / rawLen;
    float xzLen = length(normRaw.xz);
    vec3 safeUpper = xzLen > 1e-5
      ? normalize(vec3(normRaw.x, max(normRaw.y, 0.0), normRaw.z))
      : vec3(0.0, max(normRaw.y, 0.0) > 0.5 ? 1.0 : 0.0, max(normRaw.y, 0.0) > 0.5 ? 0.0 : -1.0);
    vec3 dir = uIsEnvBake > 0.5 ? normRaw : safeUpper;
    vec3 sunN = normalize(uSunDir);
    float elev = clamp(dir.y, 0.0, 1.0);
    float sunDot = clamp(dot(dir, sunN), 0.0, 1.0);

    // Rich cinematic azimuthal warm/cool twilight gradient around the 360-deg horizon
    vec2 horizDir = length(dir.xz) > 1e-5 ? normalize(dir.xz) : vec2(0.0, -1.0);
    vec2 horizSun = length(sunN.xz) > 1e-5 ? normalize(sunN.xz) : vec2(0.0, -1.0);
    float azim = dot(horizDir, horizSun) * 0.5 + 0.5;
    vec3 twilightMid = mix(uHorizonAntiColor, uHorizonSunColor, 0.36) * vec3(1.06, 0.92, 1.14);
    vec3 horizLower = mix(uHorizonAntiColor, twilightMid, smoothstep(0.04, 0.55, azim));
    vec3 horizBase = mix(horizLower, uHorizonSunColor, smoothstep(0.32, 0.96, azim));

    // Rayleigh vertical gradient from zenith down to horizon
    float horizonCurve = pow(max(1.0 - elev, 1e-5), 2.95);
    vec3 sky = mix(uZenithColor, horizBase, horizonCurve);

    // Smooth optical Mie forward-scattering solar/lunar glow (zero artificial radial ray lines!)
    float mieCore = pow(max(sunDot, 1e-5), max(uMieExponent, 1.0));
    sky += uMieColor * mieCore * uMieStrength * (0.36 + 0.64 * pow(max(1.0 - elev, 1e-5), 1.55));

    // Crisp Starfield + Multi-Curtain Emerald & Violet Aurora Borealis
    if (includeStarsAndDisc && uNightFactor > 0.01 && dir.y > 0.02) {
      float horizonFade = smoothstep(0.02, 0.24, dir.y);
      vec2 starUv = dir.xz / (dir.y + 0.35) * 145.0;
      vec2 starCell = floor(starUv);
      vec2 starFrac = fract(starUv) - 0.5;
      float sSeed = skyHash21(starCell);
      if (sSeed > 0.962) {
        vec2 jitter = vec2(skyHash21(starCell + 7.1), skyHash21(starCell + 13.7)) - 0.5;
        float dStar = length(starFrac - jitter * 0.65);
        float twinkle = 0.70 + 0.30 * sin(timeSec * (1.8 + sSeed * 3.2) + sSeed * 40.0);
        float starBright = smoothstep(0.09, 0.008, dStar) * twinkle * smoothstep(0.962, 0.999, sSeed);
        vec3 starTint = mix(vec3(0.76, 0.88, 1.0), vec3(1.0, 0.90, 0.80), skyHash21(starCell + 3.3));
        sky += starTint * starBright * 1.55 * uNightFactor * horizonFade * (1.0 - uCloudCoverage * 0.85);
      }

      if (uAuroraIntensity > 0.01) {
        vec2 aurUv = dir.xz / (dir.y + 0.26);
        float curtainA = aurUv.x * 1.35 + sin(aurUv.y * 1.7 + timeSec * 0.06) * 0.58;
        float curtainB = aurUv.y * 1.15 - cos(aurUv.x * 1.4 - timeSec * 0.045) * 0.52;
        float bandA = exp(-pow((curtainA - 0.32) / 0.44, 2.0));
        float bandB = exp(-pow((curtainB + 0.45) / 0.52, 2.0)) * 0.72;
        float rays = skyFbm(vec2(curtainA * 4.6 + timeSec * 0.035, aurUv.y * 1.8 - timeSec * 0.025));
        float aurMask = (bandA + bandB) * smoothstep(0.34, 0.82, rays) * smoothstep(0.08, 0.38, dir.y) * smoothstep(0.94, 0.46, dir.y);
        vec3 aurEmerald = vec3(0.06, 0.74, 0.48);
        vec3 aurViolet = vec3(0.46, 0.24, 0.78);
        vec3 aurCol = mix(aurEmerald, aurViolet, clamp((dir.y - 0.16) * 2.4 + 0.25 * sin(curtainA * 2.0), 0.0, 1.0));
        sky += aurCol * aurMask * uAuroraIntensity * 0.68 * (1.0 - uCloudCoverage * 0.68);
      }
    }

    // Dramatic Multi-Layered Storm & Sunset Cloud Deck + Internal Lightning Cloud Illumination!
    float cloudWindSpd = 0.0045 + 0.011 * clamp(uWindStrength, 0.0, 1.0);
    vec2 windAdvect = (length(uWindDir) > 1e-4 ? normalize(uWindDir) : vec2(0.82, -0.57)) * (timeSec * cloudWindSpd);
    if (dir.y > 0.004 && uCloudCoverage > 0.01) {
      vec2 cUv = dir.xz / (dir.y + 0.14) * 0.90 + windAdvect;
      float n1 = skyFbm(cUv);
      float n2 = skyFbm(cUv * 2.45 - windAdvect * 0.65);
      float billow = skyNoise2(cUv * 5.2 + windAdvect * 1.2);
      float cField = n1 * 0.64 + n2 * 0.26 + billow * 0.10;

      float thresh = mix(0.68, 0.20, uCloudCoverage);
      float cloudHorizonFade = smoothstep(0.008, 0.15, dir.y);
      float cMask = smoothstep(thresh, thresh + 0.32, cField) * cloudHorizonFade;

      float sunLining = pow(max(sunDot, 1e-5), 2.8) * (1.12 - uCloudCoverage * 0.32);
      float edgeSilver = (1.0 - smoothstep(thresh, thresh + 0.18, cField)) * pow(max(sunDot, 1e-5), 1.6);
      float thickness = smoothstep(thresh, thresh + 0.40, cField);
      vec3 cCol = mix(uCloudLitColor, uCloudDarkColor, thickness * 0.76);
      cCol += uMieColor * (sunLining * 0.42 + edgeSilver * 0.48);

      // Theatrical internal storm-cloud lightning flash illumination (skipped during static PMREM bake!)
      if (uIsEnvBake < 0.5 && uLightningFlash > 0.001) {
        vec3 boltN = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0));
        float boltAlign = clamp(dot(dir, boltN), 0.0, 1.0);
        float cloudEpicenter = pow(boltAlign, 5.5) * 2.4 + pow(boltAlign, 1.8) * 0.55 + 0.12;
        vec3 plasmaCloudGlow = vec3(0.70, 0.85, 1.0) * uLightningFlash * cloudEpicenter * (0.45 + 0.75 * thickness);
        cCol += plasmaCloudGlow * 3.4;
      }

      cCol = mix(sky, cCol, smoothstep(0.015, 0.20, dir.y));
      sky = mix(sky, cCol, cMask * min(0.94, 0.48 + uCloudCoverage * 0.52));
    }

    // Distant atmospheric sheet-lightning glow near the storm epicenter (smoothly tapered above y=0!)
    if (uIsEnvBake < 0.5 && uLightningFlash > 0.001) {
      vec3 boltN2 = normalize(uLightningDir + vec3(0.0, 1e-5, 0.0));
      float sheetGlow = pow(clamp(dot(dir, boltN2), 0.0, 1.0), 3.6) * smoothstep(0.01, 0.16, dir.y);
      sky += vec3(0.62, 0.78, 1.0) * uLightningFlash * sheetGlow * 1.45;
    }

    // Crisp Solar or Lunar Disc
    if (includeStarsAndDisc) {
      float discRadius = mix(0.99935, 0.99945, uNightFactor);
      float disc = smoothstep(discRadius, discRadius + 0.00035, sunDot) * (1.0 - uCloudCoverage * 0.78) * smoothstep(0.0, 0.04, dir.y);
      vec3 discCol = mix(uMieColor * 1.90, vec3(1.18, 1.26, 1.42), uNightFactor);
      sky += discCol * disc;
    }

    if (uIsEnvBake > 0.5 && normRaw.y < 0.0) {
      vec3 seaBounce = mix(horizBase * 0.78, uZenithColor * 0.36, clamp(-normRaw.y * 2.4, 0.0, 1.0));
      sky = mix(sky, seaBounce, smoothstep(0.08, 0.42, -normRaw.y));
    }

    return clamp(sky, vec3(0.0), vec3(24.0));
  }

  vec3 evalHorizonHazeColor(vec3 viewRayDir) {
    vec2 hz = viewRayDir.xz;
    float hzLen = length(hz);
    vec3 rayDir = hzLen > 1e-5 ? vec3(hz.x / hzLen, 0.0, hz.y / hzLen) : vec3(0.0, 0.0, -1.0);
    return evalPhysicalSky(rayDir, uTime, false);
  }
`;

const SKY_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldDir = normalize(position);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const SKY_FRAGMENT_SHADER = /* glsl */ `
  ${SHARED_SKY_GLSL}
  varying vec3 vWorldDir;

  void main() {
    vec3 col = evalPhysicalSky(vWorldDir, uTime, true);
    gl_FragColor = vec4(col, 1.0);
  }
`;

/**
 * Browser-safe Procedural WebAudio Thunder Synthesizer:
 * - Unlocks cleanly on first user gesture (zero autoplay errors, zero external audio assets!).
 * - Generates distance-delayed stereo rolling North Sea thunder with crisp leader crack & deep fjord echoes!
 */
class ProceduralThunderAudio {
  private ctx: AudioContext | null = null;
  private unlocked = false;
  public muted = false;

  constructor() {
    if (typeof window === 'undefined') return;
    const unlock = () => {
      this.unlocked = true;
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  playStrike(distMeters: number, azimuthPan: number, strength = 1.0): void {
    if (typeof window === 'undefined' || !this.unlocked || this.muted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      const ctx = this.ctx;
      const acousticDelay = THREE.MathUtils.clamp((distMeters / 343.0) * 0.45, 0.08, 1.15);
      const t0 = ctx.currentTime + acousticDelay;
      const dur = 3.8;
      const sampleCount = Math.floor(ctx.sampleRate * dur);
      const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Integrate pink/brown storm noise with multi-swell fjord cliff echo envelope!
      let b0 = 0;
      let b1 = 0;
      for (let i = 0; i < sampleCount; i++) {
        const sec = i / ctx.sampleRate;
        const white = Math.random() * 2 - 1;
        b0 = 0.985 * b0 + white * 0.09;
        b1 = 0.92 * b1 + white * 0.18;
        const crackEnv = Math.exp(-sec * 11.5) * 0.85;
        const roll1 = Math.exp(-Math.pow((sec - 0.32) / 0.42, 2.0)) * 0.95;
        const roll2 = Math.exp(-Math.pow((sec - 1.05) / 0.68, 2.0)) * 0.68;
        const roll3 = Math.exp(-Math.pow((sec - 2.05) / 0.95, 2.0)) * 0.42;
        const rumbleFlutter = 0.68 + 0.32 * Math.sin(sec * 23.0 + Math.sin(sec * 7.5) * 2.5);
        data[i] = (b0 * 1.45 + b1 * 0.65 + white * crackEnv * 0.35) * (crackEnv + (roll1 + roll2 + roll3) * rumbleFlutter);
      }

      const src = ctx.createBufferSource();
      src.buffer = buffer;

      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      const closeness = 1.0 - THREE.MathUtils.clamp((distMeters - 220) / 520, 0, 1);
      lowpass.frequency.setValueAtTime(240 + closeness * 460, t0);
      lowpass.frequency.exponentialRampToValueAtTime(62, t0 + dur * 0.88);
      lowpass.Q.value = 1.35;

      const gain = ctx.createGain();
      const peakGain = THREE.MathUtils.clamp((0.20 + 0.24 * closeness) * strength, 0.05, 0.44);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(peakGain, t0 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);

      src.connect(lowpass);
      if (typeof ctx.createStereoPanner === 'function') {
        const panner = ctx.createStereoPanner();
        panner.pan.value = THREE.MathUtils.clamp(azimuthPan, -0.85, 0.85);
        lowpass.connect(panner);
        panner.connect(gain);
      } else {
        lowpass.connect(gain);
      }
      gain.connect(ctx.destination);

      src.start(t0);
      src.stop(t0 + dur + 0.05);
    } catch {
      // Ignore audio errors on restricted devices
    }
  }
}

/**
 * Builds a dynamic 3D Forked Sky-to-Sea Lightning Bolt mesh with recursive midpoint-displacement branches!
 */
function createForkedLightningBoltMesh(): {
  mesh: THREE.Mesh;
  uniforms: { uBoltAlpha: { value: number }; uBoltCoreColor: { value: THREE.Color } };
  regenerateBolt: (topPos: THREE.Vector3, seaHitPos: THREE.Vector3, seed: number) => void;
} {
  // Pre-allocate capacity for up to 140 ribbon segments (main trunk + 5 secondary forks)
  const maxSegs = 140;
  const positions = new Float32Array(maxSegs * 4 * 3);
  const nextPositions = new Float32Array(maxSegs * 4 * 3);
  const sideAndWidth = new Float32Array(maxSegs * 4 * 3); // x: side (-1/+1), y: halfWidth, z: branchBrightness
  const indices: number[] = [];
  for (let i = 0; i < maxSegs; i++) {
    const b = i * 4;
    indices.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }

  const geom = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(positions, 3);
  const nextAttr = new THREE.BufferAttribute(nextPositions, 3);
  const metaAttr = new THREE.BufferAttribute(sideAndWidth, 3);
  geom.setAttribute('position', posAttr);
  geom.setAttribute('aNextPos', nextAttr);
  geom.setAttribute('aBoltMeta', metaAttr);
  geom.setIndex(indices);

  const uniforms = {
    uBoltAlpha: { value: 0.0 },
    uBoltCoreColor: { value: new THREE.Color(0xdcf0ff) },
  };

  const mat = new THREE.ShaderMaterial({
    name: 'NordicForkedLightningBolt',
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms,
    vertexShader: /* glsl */ `
      attribute vec3 aNextPos;
      attribute vec3 aBoltMeta;
      varying float vAcross;
      varying float vIntensity;
      void main() {
        vAcross = aBoltMeta.x;
        vIntensity = aBoltMeta.z;
        vec3 segDir = aNextPos - position;
        float segLen = length(segDir);
        vec3 tang = segLen > 1e-4 ? segDir / segLen : vec3(0.0, -1.0, 0.0);
        vec3 toCam = cameraPosition - position;
        float cLen = length(toCam);
        vec3 camDir = cLen > 1e-4 ? toCam / cLen : vec3(0.0, 0.0, 1.0);
        vec3 perp = cross(camDir, tang);
        float pLen = length(perp);
        perp = pLen > 1e-4 ? perp / pLen : vec3(1.0, 0.0, 0.0);

        vec3 worldPt = position + perp * (aBoltMeta.x * aBoltMeta.y);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPt, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uBoltAlpha;
      uniform vec3 uBoltCoreColor;
      varying float vAcross;
      varying float vIntensity;
      void main() {
        if (uBoltAlpha <= 0.002) discard;
        float d = abs(vAcross);
        // Intense white-cyan plasma filament core + wide electric blue-violet corona!
        float hotCore = exp(-d * d * 26.0);
        float corona = exp(-d * d * 3.8) * 0.55;
        vec3 col = mix(vec3(0.42, 0.62, 1.0), vec3(1.0, 0.98, 1.0), hotCore) * uBoltCoreColor;
        float alpha = clamp((hotCore + corona) * uBoltAlpha * vIntensity, 0.0, 1.0);
        gl_FragColor = vec4(clamp(col * (5.5 * hotCore + 2.2 * corona) * uBoltAlpha * vIntensity, vec3(0.0), vec3(18.0)), alpha);
      }
    `,
  });

  const mesh = new THREE.Mesh(geom, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 8;
  mesh.visible = false;

  const fractHash = (n: number) => {
    const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
  };

  const regenerateBolt = (topPos: THREE.Vector3, seaHitPos: THREE.Vector3, seed: number) => {
    let segPtr = 0;
    const writeSegment = (p0: THREE.Vector3, p1: THREE.Vector3, halfW: number, bright: number) => {
      if (segPtr >= maxSegs) return;
      const b = segPtr * 4;
      const pts = [p0, p0, p1, p1];
      const sides = [-1, 1, 1, -1];
      for (let k = 0; k < 4; k++) {
        const pt = pts[k];
        positions[(b + k) * 3] = pt.x;
        positions[(b + k) * 3 + 1] = pt.y;
        positions[(b + k) * 3 + 2] = pt.z;
        nextPositions[(b + k) * 3] = p1.x;
        nextPositions[(b + k) * 3 + 1] = p1.y;
        nextPositions[(b + k) * 3 + 2] = p1.z;
        sideAndWidth[(b + k) * 3] = sides[k];
        sideAndWidth[(b + k) * 3 + 1] = halfW;
        sideAndWidth[(b + k) * 3 + 2] = bright;
      }
      segPtr++;
    };

    const buildChain = (start: THREE.Vector3, end: THREE.Vector3, steps: number, jitterAmp: number, width: number, bright: number, sOff: number): THREE.Vector3[] => {
      const chain: THREE.Vector3[] = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const env = Math.sin(t * Math.PI);
        const pt = new THREE.Vector3().lerpVectors(start, end, t);
        if (i > 0 && i < steps) {
          pt.x += (fractHash(seed + sOff + i * 3.1) - 0.5) * jitterAmp * env;
          pt.y += (fractHash(seed + sOff + i * 7.7) - 0.5) * jitterAmp * 0.28 * env;
          pt.z += (fractHash(seed + sOff + i * 11.3) - 0.5) * jitterAmp * env;
        }
        chain.push(pt);
      }
      for (let i = 0; i < chain.length - 1; i++) {
        writeSegment(chain[i], chain[i + 1], width, bright);
      }
      return chain;
    };

    // 1. Main high-energy sky-to-sea jagged trunk (34 segments)
    const trunk = buildChain(topPos, seaHitPos, 34, 28.0, 2.65, 1.0, 1.0);

    // 2. 5 jagged forked secondary branches splitting off the main trunk!
    for (let f = 0; f < 5; f++) {
      const idx = 4 + Math.floor(fractHash(seed + f * 19.3) * 20);
      const branchStart = trunk[Math.min(trunk.length - 2, idx)];
      const spreadAng = fractHash(seed + f * 29.7) * Math.PI * 2.0;
      const spreadR = 26.0 + fractHash(seed + f * 41.1) * 48.0;
      const dropY = 34.0 + fractHash(seed + f * 53.9) * 58.0;
      const branchEnd = new THREE.Vector3(
        branchStart.x + Math.cos(spreadAng) * spreadR,
        Math.max(-10.0, branchStart.y - dropY),
        branchStart.z + Math.sin(spreadAng) * spreadR
      );
      const subChain = buildChain(branchStart, branchEnd, 14, 14.0, 1.25, 0.72, 100 + f * 31);
      // Sub-twig fork!
      if (subChain.length > 6) {
        const twigStart = subChain[5];
        const twigEnd = new THREE.Vector3(
          twigStart.x + (fractHash(seed + f * 67.3) - 0.5) * 28.0,
          Math.max(-10.0, twigStart.y - 24.0),
          twigStart.z + (fractHash(seed + f * 79.1) - 0.5) * 28.0
        );
        buildChain(twigStart, twigEnd, 6, 7.0, 0.72, 0.48, 300 + f * 17);
      }
    }

    geom.setDrawRange(0, segPtr * 6);
    posAttr.needsUpdate = true;
    nextAttr.needsUpdate = true;
    metaAttr.needsUpdate = true;
  };

  return { mesh, uniforms, regenerateBolt };
}

export function createNordicAtmosphere(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  initialPreset: WeatherPresetId = 'golden-hour'
): NordicAtmosphereController {
  const sunDirection = new THREE.Vector3();
  const sunColor = new THREE.Color();

  const initCfg = WEATHER_PRESETS[initialPreset];

  const sharedUniforms: AtmosphereSharedUniforms = {
    uSunDir: { value: new THREE.Vector3(-0.52, 0.24, -0.82).normalize() },
    uSunColor: { value: new THREE.Color(initCfg.sunLightColor) },
    uZenithColor: { value: new THREE.Color(initCfg.zenithColor) },
    uHorizonSunColor: { value: new THREE.Color(initCfg.horizonSunColor) },
    uHorizonAntiColor: { value: new THREE.Color(initCfg.horizonAntiSunColor) },
    uMieColor: { value: new THREE.Color(initCfg.mieHaloColor) },
    uMieStrength: { value: initCfg.mieStrength },
    uMieExponent: { value: initCfg.mieExponent },
    uCloudDarkColor: { value: new THREE.Color(initCfg.cloudDarkColor) },
    uCloudLitColor: { value: new THREE.Color(initCfg.cloudLitColor) },
    uCloudCoverage: { value: initCfg.cloudCoverage },
    uMistDensity: { value: initCfg.mistDensity },
    uRainIntensity: { value: initCfg.rainIntensity },
    uWindStrength: { value: initCfg.windStrength },
    uWindDir: { value: new THREE.Vector2(0.84, -0.54).normalize() },
    uLightningFlash: { value: 0.0 },
    uLightningDir: { value: new THREE.Vector3(-0.35, 0.28, -0.89).normalize() },
    uNightFactor: { value: initCfg.nightFactor },
    uAuroraIntensity: { value: initCfg.auroraIntensity },
    uWaterDeepColor: { value: new THREE.Color(initCfg.waterDeepColor) },
    uWaterShallowColor: { value: new THREE.Color(initCfg.waterShallowColor) },
    uGlitterIntensity: { value: initCfg.glitterIntensity },
    uIsEnvBake: { value: 0 },
    uTime: { value: 0 },
  };

  const skyGeom = new THREE.SphereGeometry(3900, 64, 44);
  const skyMat = new THREE.ShaderMaterial({
    name: 'NordicPhysicalSky',
    vertexShader: SKY_VERTEX_SHADER,
    fragmentShader: SKY_FRAGMENT_SHADER,
    uniforms: sharedUniforms as unknown as Record<string, THREE.IUniform>,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
  });
  const skyMesh = new THREE.Mesh(skyGeom, skyMat);
  skyMesh.renderOrder = -100;
  skyMesh.frustumCulled = false;
  scene.add(skyMesh);

  // Primary Directional Sun / Moon Key Light with 2048x2048 soft shadows
  const sunLight = new THREE.DirectionalLight(initCfg.sunLightColor, initCfg.sunLightIntensity);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.near = 1.0;
  sunLight.shadow.camera.far = 54.0;
  const d = 13.8;
  sunLight.shadow.camera.left = -d;
  sunLight.shadow.camera.right = d;
  sunLight.shadow.camera.top = d;
  sunLight.shadow.camera.bottom = -d;
  sunLight.shadow.bias = -0.0004;
  sunLight.shadow.normalBias = 0.018;
  scene.add(sunLight);
  scene.add(sunLight.target);

  // Sculptural Rim / Counter-Fill Light
  const rimLight = new THREE.DirectionalLight(initCfg.rimLightColor, initCfg.rimLightIntensity);
  rimLight.position.set(5.8, 4.4, 5.4);
  scene.add(rimLight);

  // Dynamic Theatrical Lightning Flash Keylight (illuminates dragons, wet basalt cliffs, ferns & ocean crests during strikes!)
  const lightningLight = new THREE.DirectionalLight(0xd6ecff, 0.0);
  lightningLight.position.set(-40, 28, -90);
  scene.add(lightningLight);

  // Forked 3D Sky-to-Sea Lightning Bolt & Rolling Stereo Thunder Engine
  const boltSystem = createForkedLightningBoltMesh();
  scene.add(boltSystem.mesh);
  const thunderAudio = new ProceduralThunderAudio();

  let lightningFreq = initCfg.lightningFrequency;
  let lastTimeSec = 0;
  let nextAutoStrikeIn = 4.2;
  let strikeAge = 99.0;
  let strikeSeedCounter = 1;
  const activeBoltDir = new THREE.Vector3(-0.35, 0.26, -0.90).normalize();

  const spawnLightningBolt = (camPos?: THREE.Vector3, manualBoost = false) => {
    strikeSeedCounter += 13.7;
    strikeAge = 0.0;
    const s1 = Math.sin(strikeSeedCounter * 71.3) * 43758.5453;
    const r1 = s1 - Math.floor(s1);
    const s2 = Math.sin(strikeSeedCounter * 19.7 + 5.1) * 43758.5453;
    const r2 = s2 - Math.floor(s2);

    // Place bolt dramatically across the North Sea horizon (-Z/+X/-X arc visible from the hero cliff!)
    const azim = (-0.78 + r1 * 1.56) * Math.PI; // mostly forward/flanking sea vista
    const dist = 250.0 + r2 * 310.0;
    const anchorX = (camPos ? camPos.x * 0.35 : 0) + Math.sin(azim) * dist;
    const anchorZ = (camPos ? camPos.z * 0.35 : 0) - Math.cos(azim) * dist;
    const topPos = new THREE.Vector3(anchorX + (r1 - 0.5) * 34.0, 165.0 + r2 * 65.0, anchorZ + (r2 - 0.5) * 28.0);
    const seaPos = new THREE.Vector3(anchorX, -11.5, anchorZ);

    boltSystem.regenerateBolt(topPos, seaPos, strikeSeedCounter);
    boltSystem.mesh.visible = true;

    activeBoltDir.set(anchorX, 68.0, anchorZ).normalize();
    sharedUniforms.uLightningDir.value.copy(activeBoltDir);
    lightningLight.position.set(anchorX * 0.25, 32.0, anchorZ * 0.25);

    const pan = THREE.MathUtils.clamp(Math.sin(azim), -0.85, 0.85);
    thunderAudio.playStrike(dist, pan, manualBoost ? 1.0 : 0.65 + 0.35 * lightningFreq);
  };

  // Naturalistic Hemisphere Sky/Ground Bounce
  const hemiLight = new THREE.HemisphereLight(
    initCfg.hemiSkyColor,
    initCfg.hemiGroundColor,
    initCfg.hemiIntensity
  );
  scene.add(hemiLight);

  const fog = new THREE.FogExp2(initCfg.horizonAntiSunColor, initCfg.mistDensity);
  scene.fog = fog;

  // Dedicated mini-scene for fast HDRI PMREM environment baking
  const envScene = new THREE.Scene();
  const envSkyClone = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 20), skyMat);
  envScene.add(envSkyClone);
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  let currentEnvRT: THREE.WebGLRenderTarget | null = null;

  let currentAzimuthDeg = initCfg.sunAzimuthDeg;

  function bakeEnvironment(targetScene: THREE.Scene): void {
    sharedUniforms.uIsEnvBake.value = 1.0;
    const nextEnvRT = pmremGenerator.fromScene(envScene, 0.015);
    sharedUniforms.uIsEnvBake.value = 0.0;
    if (currentEnvRT) currentEnvRT.dispose();
    currentEnvRT = nextEnvRT;
    targetScene.environment = currentEnvRT.texture;
  }

  function updateSunVector(elevDeg: number, azimDeg: number): void {
    const elevRad = THREE.MathUtils.degToRad(THREE.MathUtils.clamp(elevDeg, 1.5, 82.0));
    const azimRad = THREE.MathUtils.degToRad(azimDeg);
    sunDirection
      .set(
        Math.cos(elevRad) * Math.sin(azimRad),
        Math.sin(elevRad),
        Math.cos(elevRad) * Math.cos(azimRad)
      )
      .normalize();
    sharedUniforms.uSunDir.value.copy(sunDirection);
    sunLight.position.copy(sunLight.target.position).addScaledVector(sunDirection, 20.0);
  }

  const controller: NordicAtmosphereController = {
    skyMesh,
    sunLight,
    rimLight,
    hemiLight,
    sunDirection,
    sunColor,
    activePreset: initialPreset,
    sharedUniforms,

    applyPreset(presetId, glRenderer, targetScene) {
      const cfg = WEATHER_PRESETS[presetId];
      controller.activePreset = presetId;
      currentAzimuthDeg = cfg.sunAzimuthDeg;

      sharedUniforms.uZenithColor.value.setHex(cfg.zenithColor);
      sharedUniforms.uHorizonSunColor.value.setHex(cfg.horizonSunColor);
      sharedUniforms.uHorizonAntiColor.value.setHex(cfg.horizonAntiSunColor);
      sharedUniforms.uMieColor.value.setHex(cfg.mieHaloColor);
      sharedUniforms.uMieStrength.value = cfg.mieStrength;
      sharedUniforms.uMieExponent.value = cfg.mieExponent;
      sharedUniforms.uCloudDarkColor.value.setHex(cfg.cloudDarkColor);
      sharedUniforms.uCloudLitColor.value.setHex(cfg.cloudLitColor);
      sharedUniforms.uCloudCoverage.value = cfg.cloudCoverage;
      sharedUniforms.uMistDensity.value = cfg.mistDensity;
      sharedUniforms.uRainIntensity.value = cfg.rainIntensity;
      sharedUniforms.uWindStrength.value = cfg.windStrength;
      lightningFreq = cfg.lightningFrequency;
      nextAutoStrikeIn = presetId === 'stormy-squall' ? 0.65 : 3.2;

      sharedUniforms.uNightFactor.value = cfg.nightFactor;
      sharedUniforms.uAuroraIntensity.value = cfg.auroraIntensity;
      sharedUniforms.uWaterDeepColor.value.setHex(cfg.waterDeepColor);
      sharedUniforms.uWaterShallowColor.value.setHex(cfg.waterShallowColor);
      sharedUniforms.uGlitterIntensity.value = cfg.glitterIntensity;

      sunColor.setHex(cfg.sunLightColor);
      sharedUniforms.uSunColor.value.copy(sunColor);
      sunLight.color.copy(sunColor);
      sunLight.intensity = cfg.sunLightIntensity;

      rimLight.color.setHex(cfg.rimLightColor);
      rimLight.intensity = cfg.rimLightIntensity;

      hemiLight.color.setHex(cfg.hemiSkyColor);
      hemiLight.groundColor.setHex(cfg.hemiGroundColor);
      hemiLight.intensity = cfg.hemiIntensity;

      fog.color.setHex(cfg.horizonAntiSunColor).lerp(new THREE.Color(cfg.horizonSunColor), 0.35);
      fog.density = cfg.mistDensity;

      glRenderer.toneMappingExposure = cfg.exposure;

      updateSunVector(cfg.sunElevationDeg, cfg.sunAzimuthDeg);
      bakeEnvironment(targetScene);
    },

    blendPresets: (() => {
      const colA = new THREE.Color();
      const colB = new THREE.Color();
      const fogSun = new THREE.Color();
      let lastEnvBakeStamp = -10;
      let wasSettled = false;

      const lerpHex = (target: THREE.Color, hexA: number, hexB: number, t: number) => {
        colA.setHex(hexA);
        colB.setHex(hexB);
        target.copy(colA).lerp(colB, t);
      };

      const lerpAzim = (aDeg: number, bDeg: number, t: number) => {
        let diff = ((bDeg - aDeg + 540) % 360) - 180;
        if (diff < -180) diff += 360;
        return aDeg + diff * t;
      };

      return (
        fromId: WeatherPresetId,
        toId: WeatherPresetId,
        alpha: number,
        glRenderer: THREE.WebGLRenderer,
        targetScene: THREE.Scene,
        sunElevOffsetDeg = 0,
        sunAzimOffsetDeg = 0
      ) => {
        const t = THREE.MathUtils.clamp(alpha, 0, 1);
        const a = WEATHER_PRESETS[fromId];
        const b = WEATHER_PRESETS[toId];
        controller.activePreset = t < 0.5 ? fromId : toId;

        lerpHex(sharedUniforms.uZenithColor.value, a.zenithColor, b.zenithColor, t);
        lerpHex(sharedUniforms.uHorizonSunColor.value, a.horizonSunColor, b.horizonSunColor, t);
        lerpHex(sharedUniforms.uHorizonAntiColor.value, a.horizonAntiSunColor, b.horizonAntiSunColor, t);
        lerpHex(sharedUniforms.uMieColor.value, a.mieHaloColor, b.mieHaloColor, t);
        sharedUniforms.uMieStrength.value = THREE.MathUtils.lerp(a.mieStrength, b.mieStrength, t);
        sharedUniforms.uMieExponent.value = THREE.MathUtils.lerp(a.mieExponent, b.mieExponent, t);

        lerpHex(sharedUniforms.uCloudDarkColor.value, a.cloudDarkColor, b.cloudDarkColor, t);
        lerpHex(sharedUniforms.uCloudLitColor.value, a.cloudLitColor, b.cloudLitColor, t);
        sharedUniforms.uCloudCoverage.value = THREE.MathUtils.lerp(a.cloudCoverage, b.cloudCoverage, t);

        const mist = THREE.MathUtils.lerp(a.mistDensity, b.mistDensity, t);
        sharedUniforms.uMistDensity.value = mist;
        sharedUniforms.uRainIntensity.value = THREE.MathUtils.lerp(a.rainIntensity, b.rainIntensity, t);
        sharedUniforms.uWindStrength.value = THREE.MathUtils.lerp(a.windStrength, b.windStrength, t);

        const nextBoltFreq = THREE.MathUtils.lerp(a.lightningFrequency, b.lightningFrequency, t);
        if (nextBoltFreq > 0.12 && lightningFreq <= 0.12 && nextAutoStrikeIn > 2.2) {
          nextAutoStrikeIn = 1.4;
        }
        lightningFreq = nextBoltFreq;

        sharedUniforms.uNightFactor.value = THREE.MathUtils.lerp(a.nightFactor, b.nightFactor, t);
        sharedUniforms.uAuroraIntensity.value = THREE.MathUtils.lerp(a.auroraIntensity, b.auroraIntensity, t);
        lerpHex(sharedUniforms.uWaterDeepColor.value, a.waterDeepColor, b.waterDeepColor, t);
        lerpHex(sharedUniforms.uWaterShallowColor.value, a.waterShallowColor, b.waterShallowColor, t);
        sharedUniforms.uGlitterIntensity.value = THREE.MathUtils.lerp(a.glitterIntensity, b.glitterIntensity, t);

        lerpHex(sunColor, a.sunLightColor, b.sunLightColor, t);
        sharedUniforms.uSunColor.value.copy(sunColor);
        sunLight.color.copy(sunColor);
        sunLight.intensity = THREE.MathUtils.lerp(a.sunLightIntensity, b.sunLightIntensity, t);

        lerpHex(rimLight.color, a.rimLightColor, b.rimLightColor, t);
        rimLight.intensity = THREE.MathUtils.lerp(a.rimLightIntensity, b.rimLightIntensity, t);

        lerpHex(hemiLight.color, a.hemiSkyColor, b.hemiSkyColor, t);
        lerpHex(hemiLight.groundColor, a.hemiGroundColor, b.hemiGroundColor, t);
        hemiLight.intensity = THREE.MathUtils.lerp(a.hemiIntensity, b.hemiIntensity, t);

        lerpHex(fogSun, a.horizonSunColor, b.horizonSunColor, t);
        fog.color.copy(sharedUniforms.uHorizonAntiColor.value).lerp(fogSun, 0.35);
        fog.density = mist;

        glRenderer.toneMappingExposure = THREE.MathUtils.lerp(a.exposure, b.exposure, t);

        const elev = THREE.MathUtils.lerp(a.sunElevationDeg, b.sunElevationDeg, t) + sunElevOffsetDeg;
        const azim = lerpAzim(a.sunAzimuthDeg, b.sunAzimuthDeg, t) + sunAzimOffsetDeg;
        currentAzimuthDeg = azim;
        updateSunVector(elev, azim);

        const nowSec = typeof performance !== 'undefined' ? performance.now() * 0.001 : lastTimeSec;
        const isSettled = (t <= 0.001 || t >= 0.999) && Math.abs(sunElevOffsetDeg) < 0.05;
        if (nowSec - lastEnvBakeStamp > 0.45 || (isSettled && !wasSettled)) {
          lastEnvBakeStamp = nowSec;
          wasSettled = isSettled;
          bakeEnvironment(targetScene);
        } else if (!isSettled) {
          wasSettled = false;
        }
      };
    })(),

    setAudioMuted(muted: boolean) {
      thunderAudio.muted = muted;
    },

    isAudioMuted() {
      return thunderAudio.muted;
    },

    setMistDensity(density: number, _targetScene: THREE.Scene) {
      const dVal = THREE.MathUtils.clamp(density, 0.0005, 0.0075);
      sharedUniforms.uMistDensity.value = dVal;
      fog.density = dVal;
    },

    setRainIntensity(intensity: number) {
      sharedUniforms.uRainIntensity.value = THREE.MathUtils.clamp(intensity, 0.0, 1.0);
    },

    setWindStrength(strength: number) {
      sharedUniforms.uWindStrength.value = THREE.MathUtils.clamp(strength, 0.0, 1.25);
    },

    setLightningFrequency(freq: number) {
      lightningFreq = THREE.MathUtils.clamp(freq, 0.0, 1.0);
      if (lightningFreq > 0.05 && nextAutoStrikeIn > 4.0) {
        nextAutoStrikeIn = 1.1;
      }
    },

    triggerLightningStrike(cameraPos?: THREE.Vector3) {
      spawnLightningBolt(cameraPos, true);
    },

    setSunElevation(elevDeg: number, _glRenderer: THREE.WebGLRenderer, targetScene: THREE.Scene) {
      updateSunVector(elevDeg, currentAzimuthDeg);
      bakeEnvironment(targetScene);
    },

    update(timeSec: number, focusPos?: THREE.Vector3, cameraPos?: THREE.Vector3) {
      const dt = Math.min(0.1, Math.max(0.0, timeSec - lastTimeSec));
      lastTimeSec = timeSec;
      sharedUniforms.uTime.value = timeSec;

      // Slowly veer the prevailing North-Atlantic gale wind direction naturally over time!
      const veerAng = -0.58 + Math.sin(timeSec * 0.085) * 0.16;
      sharedUniforms.uWindDir.value.set(Math.cos(veerAng), Math.sin(veerAng));

      // Schedule automatic atmospheric lightning strikes according to active storm/lightning frequency!
      if (lightningFreq > 0.015) {
        nextAutoStrikeIn -= dt;
        if (nextAutoStrikeIn <= 0.0) {
          spawnLightningBolt(cameraPos, false);
          const minGap = THREE.MathUtils.lerp(13.5, 2.2, lightningFreq);
          const randGap = THREE.MathUtils.lerp(14.0, 3.8, lightningFreq) * Math.abs(Math.sin(timeSec * 19.7 + strikeSeedCounter));
          nextAutoStrikeIn = minGap + randGap;
        }
      }

      // Realistic multi-flicker lightning discharge curve (initial leader -> rapid restrike -> ionized afterglow)
      if (strikeAge < 0.65) {
        strikeAge += dt;
        const leader = Math.exp(-Math.pow((strikeAge - 0.025) / 0.028, 2.0));
        const restrike = Math.exp(-Math.pow((strikeAge - 0.115) / 0.032, 2.0)) * 0.92;
        const flicker3 = Math.exp(-Math.pow((strikeAge - 0.195) / 0.022, 2.0)) * 0.55;
        const afterglow = Math.exp(-strikeAge * 7.2) * 0.34;
        const flashVal = THREE.MathUtils.clamp(Math.max(leader, restrike, flicker3) + afterglow, 0.0, 1.25);

        sharedUniforms.uLightningFlash.value = flashVal;
        boltSystem.uniforms.uBoltAlpha.value = THREE.MathUtils.clamp(flashVal * 1.05, 0.0, 1.0);
        lightningLight.intensity = flashVal * 8.2;
      } else if (boltSystem.mesh.visible) {
        sharedUniforms.uLightningFlash.value = 0.0;
        boltSystem.uniforms.uBoltAlpha.value = 0.0;
        lightningLight.intensity = 0.0;
        boltSystem.mesh.visible = false;
      }

      if (cameraPos) {
        skyMesh.position.copy(cameraPos);
      }
      if (focusPos) {
        sunLight.target.position.copy(focusPos);
        sunLight.position.copy(focusPos).addScaledVector(sunDirection, 20.0);
        sunLight.target.updateMatrixWorld();
      }
    },
  };

  controller.applyPreset(initialPreset, renderer, scene);
  return controller;
}
