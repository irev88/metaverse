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
  cloudCoverage: number;      // [0, 1]
  mistDensity: number;        // aerial perspective density
  rainIntensity: number;      // [0, 1] physical precipitation & splash intensity
  exposure: number;
  nightFactor: number;        // [0, 1] stars & moon disc
  auroraIntensity: number;    // [0, 1] subtle boreal ribbon
  waterDeepColor: number;
  waterShallowColor: number;
  glitterIntensity: number;
}

export const WEATHER_PRESETS: Record<WeatherPresetId, WeatherPresetConfig> = {
  'golden-hour': {
    id: 'golden-hour',
    label: 'Golden Hour',
    subtitle: 'Warm Berk Sunset',
    sunElevationDeg: 11.5,
    sunAzimuthDeg: -140,
    zenithColor: 0x172846,
    horizonSunColor: 0xd9844f,
    horizonAntiSunColor: 0x4b5c78,
    mieHaloColor: 0xffa858,
    mieStrength: 0.62,
    mieExponent: 6.5,
    sunLightColor: 0xffbf7a,
    sunLightIntensity: 3.75,
    rimLightColor: 0x74aae8,
    rimLightIntensity: 1.55,
    hemiSkyColor: 0x95b4dc,
    hemiGroundColor: 0x362d29,
    hemiIntensity: 1.12,
    cloudDarkColor: 0x2a2b3d,
    cloudLitColor: 0xf29a5e,
    cloudCoverage: 0.46,
    mistDensity: 0.0021,
    rainIntensity: 0.36,
    exposure: 1.14,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x05111d,
    waterShallowColor: 0x0b383e,
    glitterIntensity: 4.8,
  },
  'clear-day': {
    id: 'clear-day',
    label: 'Clear Day',
    subtitle: 'Crisp Nordic Sun',
    sunElevationDeg: 44.0,
    sunAzimuthDeg: -124,
    zenithColor: 0x1c4b86,
    horizonSunColor: 0x9bc4e6,
    horizonAntiSunColor: 0x82afd8,
    mieHaloColor: 0xfff3de,
    mieStrength: 0.26,
    mieExponent: 8.0,
    sunLightColor: 0xfff5e6,
    sunLightIntensity: 3.55,
    rimLightColor: 0x9ac8f5,
    rimLightIntensity: 1.65,
    hemiSkyColor: 0xb4d8fa,
    hemiGroundColor: 0x354238,
    hemiIntensity: 1.38,
    cloudDarkColor: 0x6a829e,
    cloudLitColor: 0xffffff,
    cloudCoverage: 0.26,
    mistDensity: 0.0013,
    rainIntensity: 0.0,
    exposure: 1.10,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x041a30,
    waterShallowColor: 0x0c5460,
    glitterIntensity: 3.6,
  },
  'dawn-dusk': {
    id: 'dawn-dusk',
    label: 'Dawn / Dusk',
    subtitle: 'Alpenglow Twilight',
    sunElevationDeg: 4.8,
    sunAzimuthDeg: -148,
    zenithColor: 0x161938,
    horizonSunColor: 0xd86e68,
    horizonAntiSunColor: 0x3e4668,
    mieHaloColor: 0xff9478,
    mieStrength: 0.58,
    mieExponent: 5.8,
    sunLightColor: 0xff9e84,
    sunLightIntensity: 2.85,
    rimLightColor: 0x7e94e2,
    rimLightIntensity: 1.65,
    hemiSkyColor: 0x8c92cc,
    hemiGroundColor: 0x2a2430,
    hemiIntensity: 1.15,
    cloudDarkColor: 0x232038,
    cloudLitColor: 0xea7e78,
    cloudCoverage: 0.42,
    mistDensity: 0.0024,
    rainIntensity: 0.24,
    exposure: 1.18,
    nightFactor: 0.22,
    auroraIntensity: 0.0,
    waterDeepColor: 0x060e1c,
    waterShallowColor: 0x122c3c,
    glitterIntensity: 4.2,
  },
  'misty-overcast': {
    id: 'misty-overcast',
    label: 'Misty Cloud',
    subtitle: 'Nordic Sea Fog',
    sunElevationDeg: 31.0,
    sunAzimuthDeg: -130,
    zenithColor: 0x435160,
    horizonSunColor: 0x8d9aa6,
    horizonAntiSunColor: 0x768594,
    mieHaloColor: 0xc8d4de,
    mieStrength: 0.18,
    mieExponent: 3.5,
    sunLightColor: 0xdce6ef,
    sunLightIntensity: 2.05,
    rimLightColor: 0xa4bed8,
    rimLightIntensity: 1.85,
    hemiSkyColor: 0xb6c6d4,
    hemiGroundColor: 0x2e3738,
    hemiIntensity: 1.55,
    cloudDarkColor: 0x455260,
    cloudLitColor: 0x9aa8b5,
    cloudCoverage: 0.86,
    mistDensity: 0.0042,
    rainIntensity: 0.58,
    exposure: 1.16,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x08161e,
    waterShallowColor: 0x16383c,
    glitterIntensity: 1.25,
  },
  'starlit-night': {
    id: 'starlit-night',
    label: 'Starlit Night',
    subtitle: 'Moon & Boreal Glow',
    sunElevationDeg: 29.0, // Full Moon elevation!
    sunAzimuthDeg: -136,
    zenithColor: 0x050b18,
    horizonSunColor: 0x162a46,
    horizonAntiSunColor: 0x0d1a2e,
    mieHaloColor: 0x6ea2dc,
    mieStrength: 0.30,
    mieExponent: 9.0,
    sunLightColor: 0xa8ccff, // Crisp silvery-blue moonlight
    sunLightIntensity: 2.35,
    rimLightColor: 0x5ca4f2,
    rimLightIntensity: 1.95,
    hemiSkyColor: 0x406494,
    hemiGroundColor: 0x141c26,
    hemiIntensity: 1.08,
    cloudDarkColor: 0x09111f,
    cloudLitColor: 0x2c4668,
    cloudCoverage: 0.24,
    mistDensity: 0.0018,
    rainIntensity: 0.16,
    exposure: 1.26,
    nightFactor: 1.0,
    auroraIntensity: 0.65,
    waterDeepColor: 0x020710,
    waterShallowColor: 0x071e2c,
    glitterIntensity: 3.4,
  },
  'stormy-squall': {
    id: 'stormy-squall',
    label: 'Storm Squall',
    subtitle: 'Dark North Gale',
    sunElevationDeg: 18.0,
    sunAzimuthDeg: -138,
    zenithColor: 0x141c26,
    horizonSunColor: 0x4b5968,
    horizonAntiSunColor: 0x283442,
    mieHaloColor: 0x8ea4b8,
    mieStrength: 0.28,
    mieExponent: 4.5,
    sunLightColor: 0xb6cadc,
    sunLightIntensity: 2.45,
    rimLightColor: 0x6f98c4,
    rimLightIntensity: 1.80,
    hemiSkyColor: 0x6a8098,
    hemiGroundColor: 0x1c2428,
    hemiIntensity: 1.25,
    cloudDarkColor: 0x151d27,
    cloudLitColor: 0x5e7082,
    cloudCoverage: 0.92,
    mistDensity: 0.0036,
    rainIntensity: 1.0,
    exposure: 1.18,
    nightFactor: 0.0,
    auroraIntensity: 0.0,
    waterDeepColor: 0x040d14,
    waterShallowColor: 0x0c2c32,
    glitterIntensity: 2.1,
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
  setMistDensity: (density: number, scene: THREE.Scene) => void;
  setRainIntensity: (intensity: number) => void;
  setSunElevation: (
    elevDeg: number,
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene
  ) => void;
  update: (timeSec: number, focusPos?: THREE.Vector3, cameraPos?: THREE.Vector3) => void;
}

/**
 * Shared GLSL sky & horizon radiance function injected into Sky, Ocean & Distant Archipelago shaders
 * so the sky, sea, and distant fjord mountains share 100% seamless color composition with ZERO horizon seams!
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

  // Evaluates clean, continuous sky + perspective cloud radiance (100% seamless across rawDir.y = 0, ZERO horizon dark strip, NaN-proof at nadir!)
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

    // Smooth azimuthal warm/cool gradient around the 360-deg horizon
    vec2 horizDir = length(dir.xz) > 1e-5 ? normalize(dir.xz) : vec2(0.0, -1.0);
    vec2 horizSun = length(sunN.xz) > 1e-5 ? normalize(sunN.xz) : vec2(0.0, -1.0);
    float azim = dot(horizDir, horizSun) * 0.5 + 0.5;
    vec3 horizBase = mix(uHorizonAntiColor, uHorizonSunColor, smoothstep(0.08, 0.95, azim));

    // Rayleigh vertical gradient from zenith down to horizon
    float horizonCurve = pow(max(1.0 - elev, 1e-5), 3.1);
    vec3 sky = mix(uZenithColor, horizBase, horizonCurve);

    // Anisotropic Mie forward-scattering solar/lunar glow
    sky += uMieColor * pow(max(sunDot, 1e-5), max(uMieExponent, 1.0)) * uMieStrength * (0.35 + 0.65 * pow(max(1.0 - elev, 1e-5), 1.6));

    // Crisp Starfield + Subtle Authentic Aurora Borealis (when uNightFactor > 0)
    if (includeStarsAndDisc && uNightFactor > 0.01 && dir.y > 0.02) {
      float horizonFade = smoothstep(0.02, 0.24, dir.y);
      // 3D-projected seamless star grid
      vec2 starUv = dir.xz / (dir.y + 0.35) * 140.0;
      vec2 starCell = floor(starUv);
      vec2 starFrac = fract(starUv) - 0.5;
      float sSeed = skyHash21(starCell);
      if (sSeed > 0.965) {
        vec2 jitter = vec2(skyHash21(starCell + 7.1), skyHash21(starCell + 13.7)) - 0.5;
        float dStar = length(starFrac - jitter * 0.65);
        float twinkle = 0.72 + 0.28 * sin(timeSec * (1.8 + sSeed * 3.0) + sSeed * 40.0);
        float starBright = smoothstep(0.09, 0.008, dStar) * twinkle * smoothstep(0.965, 0.999, sSeed);
        vec3 starTint = mix(vec3(0.78, 0.88, 1.0), vec3(1.0, 0.92, 0.82), skyHash21(starCell + 3.3));
        sky += starTint * starBright * 1.45 * uNightFactor * horizonFade * (1.0 - uCloudCoverage * 0.85);
      }

      // Delicate, authentic Nordic Aurora Borealis curtain high in the sky
      if (uAuroraIntensity > 0.01) {
        vec2 aurUv = dir.xz / (dir.y + 0.28);
        float curtainWave = aurUv.x * 1.4 + sin(aurUv.y * 1.8 + timeSec * 0.05) * 0.55;
        float band = exp(-pow((curtainWave - 0.35) / 0.42, 2.0));
        float rays = skyFbm(vec2(curtainWave * 4.5 + timeSec * 0.03, aurUv.y * 1.6 - timeSec * 0.02));
        float aurMask = band * smoothstep(0.38, 0.82, rays) * smoothstep(0.10, 0.42, dir.y) * smoothstep(0.92, 0.48, dir.y);
        vec3 aurCol = mix(vec3(0.08, 0.58, 0.42), vec3(0.22, 0.36, 0.68), clamp((dir.y - 0.18) * 2.2, 0.0, 1.0));
        sky += aurCol * aurMask * uAuroraIntensity * 0.52 * (1.0 - uCloudCoverage * 0.7);
      }
    }

    // Continuous Perspective Cloud Deck: naturally foreshortens into delicate horizon strata as dir.y -> 0,
    // fading cleanly into the exact local sky+Mie radiance with ZERO dark/white horizon bands!
    if (dir.y > 0.004 && uCloudCoverage > 0.01) {
      vec2 cUv = dir.xz / (dir.y + 0.14) * 0.92 + vec2(timeSec * 0.0055, timeSec * 0.0028);
      float n1 = skyFbm(cUv);
      float n2 = skyFbm(cUv * 2.35 - vec2(timeSec * 0.003, 0.0));
      float cField = n1 * 0.72 + n2 * 0.28;

      float thresh = mix(0.68, 0.24, uCloudCoverage);
      float cloudHorizonFade = smoothstep(0.008, 0.15, dir.y);
      float cMask = smoothstep(thresh, thresh + 0.34, cField) * cloudHorizonFade;

      float sunLining = pow(max(sunDot, 1e-5), 3.2) * (1.0 - uCloudCoverage * 0.35);
      float thickness = smoothstep(thresh, thresh + 0.42, cField);
      vec3 cCol = mix(uCloudLitColor, uCloudDarkColor, thickness * 0.68);
      cCol += uMieColor * sunLining * 0.35;
      // Blend distant low-angle clouds toward local sky (including Mie glow!) so they never create dark bands above the horizon!
      cCol = mix(sky, cCol, smoothstep(0.015, 0.20, dir.y));
      sky = mix(sky, cCol, cMask * min(0.92, 0.45 + uCloudCoverage * 0.52));
    }

    // Crisp Solar or Lunar Disc (bounded below harsh bloom blowout)
    if (includeStarsAndDisc) {
      float discRadius = mix(0.99935, 0.99945, uNightFactor);
      float disc = smoothstep(discRadius, discRadius + 0.00035, sunDot) * (1.0 - uCloudCoverage * 0.78) * smoothstep(0.0, 0.04, dir.y);
      vec3 discCol = mix(uMieColor * 1.85, vec3(1.15, 1.24, 1.38), uNightFactor);
      sky += discCol * disc;
    }

    // Only during offscreen PMREM cubemap baking (uIsEnvBake > 0.5), gently dim steep downward rays for realistic ocean/ground bounce!
    if (uIsEnvBake > 0.5 && normRaw.y < 0.0) {
      vec3 seaBounce = mix(horizBase * 0.78, uZenithColor * 0.36, clamp(-normRaw.y * 2.4, 0.0, 1.0));
      sky = mix(sky, seaBounce, smoothstep(0.08, 0.42, -normRaw.y));
    }

    return clamp(sky, vec3(0.0), vec3(24.0));
  }

  // Evaluates exact matching sky/horizon radiance along any view ray (100% NaN-safe even looking straight down at nadir!)
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

  // Sculptural Rim / Counter-Fill Light (essential for jet-black scales in both day & moonlit night!)
  const rimLight = new THREE.DirectionalLight(initCfg.rimLightColor, initCfg.rimLightIntensity);
  rimLight.position.set(5.8, 4.4, 5.4);
  scene.add(rimLight);

  // Naturalistic Hemisphere Sky/Ground Bounce
  const hemiLight = new THREE.HemisphereLight(
    initCfg.hemiSkyColor,
    initCfg.hemiGroundColor,
    initCfg.hemiIntensity
  );
  scene.add(hemiLight);

  // Scene fog kept synced for fallback materials
  const fog = new THREE.FogExp2(initCfg.horizonAntiSunColor, initCfg.mistDensity);
  scene.fog = fog;

  // Dedicated mini-scene for fast HDRI PMREM environment baking so scales & water reflect the active preset!
  const envScene = new THREE.Scene();
  const envSkyClone = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 20), skyMat);
  envScene.add(envSkyClone);
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  let currentEnvRT: THREE.WebGLRenderTarget | null = null;

  let currentAzimuthDeg = initCfg.sunAzimuthDeg;

  function bakeEnvironment(targetScene: THREE.Scene): void {
    const nextEnvRT = pmremGenerator.fromScene(envScene, 0.015);
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

    setMistDensity(density: number, _targetScene: THREE.Scene) {
      const dVal = THREE.MathUtils.clamp(density, 0.0005, 0.0075);
      sharedUniforms.uMistDensity.value = dVal;
      fog.density = dVal;
    },

    setRainIntensity(intensity: number) {
      sharedUniforms.uRainIntensity.value = THREE.MathUtils.clamp(intensity, 0.0, 1.0);
    },

    setSunElevation(elevDeg: number, _glRenderer: THREE.WebGLRenderer, targetScene: THREE.Scene) {
      updateSunVector(elevDeg, currentAzimuthDeg);
      bakeEnvironment(targetScene);
    },

    update(timeSec: number, focusPos?: THREE.Vector3, cameraPos?: THREE.Vector3) {
      sharedUniforms.uTime.value = timeSec;
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
