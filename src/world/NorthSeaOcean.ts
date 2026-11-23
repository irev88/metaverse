import * as THREE from 'three';
import { AtmosphereSharedUniforms, SHARED_SKY_GLSL } from './NordicAtmosphere';

export interface OceanWaveParams {
  waveAmplitude: number;   // [0.05, 2.50] 0.12=Quiet glassy sea, 1.0=Natural swell, 2.2=Rough storm rollers
  waveSpeed: number;       // [0.15, 2.50] Wave propagation speed multiplier
  seaChoppiness: number;   // [0.00, 1.00] Peakiness, capillary chop & whitecap foam intensity
}

export const DEFAULT_OCEAN_PARAMS: OceanWaveParams = {
  waveAmplitude: 1.0,
  waveSpeed: 1.0,
  seaChoppiness: 0.48,
};

export interface NorthSeaOceanController {
  mesh: THREE.Mesh;
  params: OceanWaveParams;
  setOceanParams: (patch: Partial<OceanWaveParams>) => void;
  update: (timeSec: number) => void;
}

const OCEAN_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uWaveAmp;
  uniform float uWaveSpeed;
  uniform float uChoppiness;
  uniform vec4 uStackCenters[24];

  varying vec3 vWorldPos;
  varying vec3 vMacroNormal;
  varying float vWaveHeight;
  varying float vCrestFactor;
  varying float vGroupEnergy;

  float ocHash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float ocNoise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = ocHash21(i);
    float b = ocHash21(i + vec2(1.0, 0.0));
    float c = ocHash21(i + vec2(0.0, 1.0));
    float d = ocHash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float ocFbm2(vec2 p) {
    float s = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      s += a * ocNoise2(p);
      p = p * 2.07 + vec2(13.1, -7.4);
      a *= 0.5;
    }
    return s;
  }

  // Evaluates non-uniform, domain-warped Trochoidal Gerstner wave groups + analytical slope
  void accumTrochoidalWave(
    vec2 pos,
    vec2 dir,
    float steepness,
    float wavelength,
    float speedMul,
    float time,
    float envScale,
    inout vec3 disp,
    inout vec2 slopeXZ
  ) {
    vec2 d = normalize(dir);
    float k = 6.2831853 / wavelength;
    float c = sqrt(9.81 / k) * speedMul;
    float phase = k * (dot(d, pos) - c * time);
    float amp = (steepness / k) * uWaveAmp * envScale;
    float pinch = clamp(uChoppiness * 0.76, 0.0, 0.86);
    float s = sin(phase);
    float co = cos(phase);

    disp.x += d.x * (amp * pinch * co);
    disp.y += amp * s;
    disp.z += d.y * (amp * pinch * co);

    slopeXZ += d * (amp * k * co);
  }

  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    float distFromOrigin = length(wp.xz);
    float distFromCam = length(wp.xz - cameraPosition.xz);
    float effDist = max(distFromOrigin * 0.85, distFromCam);

    // Nyquist-safe per-band damping so short & medium wavelengths fade out cleanly before radial grid spacing coarsens!
    float farDampLong = 1.0 - smoothstep(380.0, 1080.0, effDist);
    float farDampCross = 1.0 - smoothstep(240.0, 680.0, effDist);
    float farDampChop = 1.0 - smoothstep(110.0, 340.0, effDist);
    float t = uTime * uWaveSpeed;

    // 1. Irregular Swell Wave-Packet Envelopes ("Seventh-Wave" swell sets vs calmer lulls!)
    float swellSetA = ocFbm2(wp.xz * 0.011 - vec2(t * 0.042, t * 0.028));
    float swellSetB = ocFbm2(wp.xz * 0.023 + vec2(t * 0.031, -t * 0.048) + 19.4);
    float groupA = mix(0.42, 1.42, smoothstep(0.18, 0.84, swellSetA));
    float groupB = mix(0.38, 1.36, smoothstep(0.20, 0.82, swellSetB));

    // 2. Coastal Shoaling & Island Lee-Shadowing around archipelago islands!
    float coastalShelter = 1.0;
    for (int i = 0; i < 12; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.1) continue;
      float d = length(wp.xz - sc.xy) - sc.z;
      // Gentle shoaling steepening near reefs, slight lee damping inside sheltered coves/lagoons
      coastalShelter *= mix(0.74, 1.0, smoothstep(-6.0, 18.0, d));
    }

    // 3. Domain-warped wave coordinates so crests curve, bend, fork & refract naturally (NEVER straight ruler lines!)
    vec2 swellWarp = vec2(
      ocFbm2(wp.xz * 0.016 + vec2(t * 0.018, -t * 0.014)) - 0.5,
      ocFbm2(wp.xz * 0.016 + vec2(-t * 0.015, t * 0.021) + 31.7) - 0.5
    ) * 22.0;
    vec2 chopWarp = vec2(
      ocNoise2(wp.xz * 0.055 + t * 0.08) - 0.5,
      ocNoise2(wp.xz * 0.055 - t * 0.07 + 11.3) - 0.5
    ) * 6.5;

    vec2 pPrimary = wp.xz + swellWarp;
    vec2 pCross = wp.xz - swellWarp * 0.75 + chopWarp;

    vec3 disp = vec3(0.0);
    vec2 slopeXZ = vec2(0.0);

    float envPrimary = farDampLong * groupA * coastalShelter;
    float envCross = farDampCross * groupB * coastalShelter;
    float envChop = farDampChop * mix(0.55, 1.35, swellSetB) * (0.38 + 0.92 * uChoppiness);

    // Primary North Atlantic irregular long swell train
    accumTrochoidalWave(pPrimary, vec2(0.81, 0.58), 0.19, 48.0, 1.00, t, envPrimary, disp, slopeXZ);
    accumTrochoidalWave(pPrimary, vec2(0.64, 0.77), 0.15, 29.0, 1.06, t + 4.1, envPrimary * 0.92, disp, slopeXZ);
    // Crossed fjord-refraction swell train creating natural diamond/3D interference peaks!
    accumTrochoidalWave(pCross, vec2(-0.52, 0.85), 0.16, 24.5, 1.09, t + 1.7, envCross, disp, slopeXZ);
    accumTrochoidalWave(pCross, vec2(0.28, -0.96), 0.12, 16.2, 1.16, t + 8.3, envCross * 0.88, disp, slopeXZ);
    // Mid-scale irregular wind-waves & turbulent currents
    accumTrochoidalWave(wp.xz + chopWarp, vec2(-0.88, -0.47), 0.10, 10.4, 1.24, t, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz - chopWarp, vec2(0.59, -0.80), 0.08, 6.7, 1.34, t + 2.9, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz + chopWarp * 0.5, vec2(-0.24, 0.97), 0.06, 4.1, 1.44, t + 5.6, envChop, disp, slopeXZ);
    accumTrochoidalWave(wp.xz, vec2(0.93, -0.36), 0.045, 2.7, 1.54, t + 3.2, envChop * 0.85, disp, slopeXZ);

    // Subtle low-frequency tidal surge & irregular ocean current heave
    float currentUndulation = (swellSetA - 0.5) * 0.55 * uWaveAmp * farDampLong;
    disp.y += currentUndulation;

    wp.xyz += disp;
    vMacroNormal = normalize(vec3(-slopeXZ.x, 1.0, -slopeXZ.y));
    vWaveHeight = disp.y;
    vCrestFactor = clamp((disp.y / max(0.24, 1.25 * uWaveAmp)) * 0.5 + 0.5, 0.0, 1.0);
    vGroupEnergy = clamp(0.5 * (groupA + groupB) - 0.35, 0.0, 1.0);
    vWorldPos = wp.xyz;

    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const OCEAN_FRAG = /* glsl */ `
  ${SHARED_SKY_GLSL}

  uniform float uWaveAmp;
  uniform float uWaveSpeed;
  uniform float uChoppiness;
  uniform vec3 uSunColor;
  uniform vec3 uWaterDeepColor;
  uniform vec3 uWaterShallowColor;
  uniform float uGlitterIntensity;
  uniform vec4 uStackCenters[24];

  varying vec3 vWorldPos;
  varying vec3 vMacroNormal;
  varying float vWaveHeight;
  varying float vCrestFactor;
  varying float vGroupEnergy;

  float waterMicroDetail(vec2 p, float distScale) {
    float t = uTime * uWaveSpeed;
    float chop = 0.25 + 1.15 * uChoppiness;
    float amp = (0.22 + 0.74 * clamp(uWaveAmp, 0.05, 2.2)) * distScale;

    // Domain-warped wind streaks & Langmuir current bands so ripples vary across the sea!
    vec2 flow = vec2(
      skyFbm(p * 0.045 + vec2(t * 0.03, -t * 0.02)) - 0.5,
      skyFbm(p * 0.045 - vec2(t * 0.02, t * 0.03) + 7.7) - 0.5
    ) * 4.2;
    vec2 pw = p + flow;

    float h = 0.0;
    h += sin(dot(pw, vec2(0.32, 0.21)) - t * 1.55) * 0.22;
    h += sin(dot(pw, vec2(-0.26, 0.37)) - t * 2.05) * 0.17;
    h += sin(dot(pw, vec2(0.51, -0.44)) - t * 2.65) * 0.11 * chop;
    h += (skyFbm(pw * 0.44 + vec2(t * 0.36, -t * 0.24)) - 0.5) * 0.38 * chop;
    h += (skyNoise2(pw * 2.35 - vec2(t * 0.92, t * 0.68)) - 0.5) * 0.11 * chop;
    h += (skyNoise2(pw * 6.40 + vec2(t * 1.42, -t * 1.05)) - 0.5) * 0.034 * chop * distScale;
    return h * amp;
  }

  void main() {
    vec2 p = vWorldPos.xz;
    vec3 toCam = cameraPosition - vWorldPos;
    float dist = length(toCam);
    vec3 V = toCam / max(dist, 1e-4);
    vec3 L = normalize(uSunDir);

    float detailFade = 1.0 - smoothstep(55.0, 480.0, dist);
    // Irregular wind-catspaw roughness patches (glassy current slicks vs wind-rippled patches!)
    float windCatspaw = mix(0.52, 1.28, smoothstep(0.25, 0.78, skyFbm(p * 0.018 + vec2(uTime * 0.025, -uTime * 0.018))));
    float localDetail = detailFade * windCatspaw;

    float eps = mix(0.14, 1.15, smoothstep(15.0, 420.0, dist));
    float hC = waterMicroDetail(p, localDetail);
    float hX = waterMicroDetail(p + vec2(eps, 0.0), localDetail);
    float hZ = waterMicroDetail(p + vec2(0.0, eps), localDetail);

    vec3 microN = normalize(vec3(hC - hX, eps * 1.92, hC - hZ));
    vec3 combinedN = normalize(vec3(vMacroNormal.x + microN.x * localDetail, vMacroNormal.y, vMacroNormal.z + microN.z * localDetail));
    vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), combinedN, 1.0 - smoothstep(220.0, 820.0, dist)));

    vec3 R = reflect(-V, N);
    // Smooth grazing horizon clamp: NEVER use abs(R.y), which flipped wave back-slopes up into dark overhead zenith sky!
    R.y = mix(0.005, R.y, smoothstep(-0.02, 0.14, R.y));
    R = normalize(R);

    // Grazing wave-slope masking: at distance, wave crests occlude steep front troughs so effective Fresnel follows macro grazing V.y!
    float localCos = clamp(dot(N, V), 0.0, 1.0);
    float macroCos = clamp(V.y, 0.0, 1.0);
    float effectiveCos = mix(localCos, macroCos, smoothstep(130.0, 520.0, dist));
    float fresnel = 0.028 + 0.972 * pow(max(1.0 - effectiveCos, 1e-5), 4.8);

    // Coastal shoaling tint & surf around all 24 archipelago islands, crescents, lagoons & sea-stacks!
    float foamLace = skyFbm(p * 0.88 + vec2(uTime * 0.20 * uWaveSpeed, -uTime * 0.14 * uWaveSpeed));
    float spumeCells = skyNoise2(p * 3.1 - vec2(uTime * 0.42 * uWaveSpeed, 0.0));

    float coastalSurf = 0.0;
    float shoalGlow = 0.0;
    for (int i = 0; i < 24; i++) {
      vec4 sc = uStackCenters[i];
      if (sc.z <= 0.01) continue;
      float d = length(p - sc.xy) - sc.z;
      if (d < 24.0 && d > -12.0) {
        shoalGlow = max(shoalGlow, smoothstep(24.0, -4.0, d));
        if (d < 12.5 && d > -5.0) {
          float warpD = d + (foamLace - 0.5) * 2.8;
          float surge1 = sin(warpD * 1.48 - uTime * (1.65 + uWaveSpeed * 0.82)) * 0.5 + 0.5;
          float surge2 = sin(warpD * 2.85 + uTime * 1.18) * 0.5 + 0.5;
          float collar = smoothstep(9.2, 0.4, warpD) * smoothstep(-3.4, 0.15, warpD);
          float intensityBoost = sc.w > 0.5 ? 1.58 : 1.0;
          coastalSurf += collar * intensityBoost * (0.36 + 0.64 * surge1 * (0.6 + 0.4 * surge2)) * (0.45 + 0.55 * spumeCells) * (0.45 + 0.55 * clamp(uWaveAmp, 0.25, 1.6));
        }
      }
    }

    // Water body + shallow glacial shoal aquamarine shift + backlit wave-crest subsurface scatter!
    vec3 shoalTint = uWaterShallowColor * vec3(0.95, 1.24, 1.18);
    vec3 baseBody = mix(uWaterDeepColor, uWaterShallowColor, vCrestFactor * 0.48);
    vec3 waterBody = mix(baseBody, shoalTint, shoalGlow * 0.55);

    float sunBacklit = pow(max(clamp(dot(V, -vec3(L.x, L.y * 0.35, L.z)), 0.0, 1.0), 1e-5), 2.6);
    float thinCrest = smoothstep(0.46, 0.96, vCrestFactor) * clamp(uWaveAmp, 0.15, 1.9);
    vec3 crestSSS = uWaterShallowColor * 1.68 * thinCrest * (0.28 + 0.85 * sunBacklit) * (1.0 - uNightFactor * 0.55);

    vec3 skyReflect = evalPhysicalSky(R, uTime, false);
    // Softly lift deep-water body shadow at far distances so high-altitude / low-mist views never form a dark band below the horizon!
    vec3 farWaterScatter = mix(waterBody + crestSSS, skyReflect * 0.72, smoothstep(320.0, 1450.0, dist));
    vec3 col = mix(farWaterScatter, skyReflect, fresnel);

    // Dual-lobe solar / lunar glitter path modulated by wind catspaws (NaN-safe anti-sun half-vector!)
    vec3 halfSum = L + V;
    vec3 H = dot(halfSum, halfSum) > 1e-6 ? normalize(halfSum) : vec3(0.0, 1.0, 0.0);
    float ndoth = max(clamp(dot(N, H), 0.0, 1.0), 1e-5);
    float specPowerTight = mix(440.0, 105.0, smoothstep(35.0, 520.0, dist));
    float specTight = pow(ndoth, specPowerTight) * (0.30 + 0.70 * localDetail) * (1.0 - smoothstep(420.0, 1200.0, dist));
    float specBroad = pow(ndoth, 36.0) * (0.35 + 0.65 * localDetail) * (1.0 - smoothstep(420.0, 1550.0, dist));
    col += uSunColor * (specTight * uGlitterIntensity + specBroad * uGlitterIntensity * 0.09);

    // Irregular wave-group whitecaps & wind-driven Langmuir foam streaks!
    float langmuirStreak = smoothstep(0.62, 0.92, skyFbm(vec2(p.x * 0.18 + p.y * 0.06, p.y * 0.28 - p.x * 0.08) + uTime * 0.06));
    float openSeaWhitecap =
      smoothstep(0.72 - uChoppiness * 0.24 - vGroupEnergy * 0.08, 0.97, vCrestFactor + (foamLace - 0.5) * 0.38) *
      uChoppiness *
      (0.55 + 0.65 * vGroupEnergy) *
      clamp(uWaveAmp * 0.84, 0.0, 1.40) *
      (0.42 + 0.58 * spumeCells) +
      langmuirStreak * uChoppiness * clamp(uWaveAmp - 0.4, 0.0, 1.2) * 0.14 * spumeCells;

    float totalFoam = clamp((openSeaWhitecap + coastalSurf) * (1.0 - smoothstep(240.0, 760.0, dist)), 0.0, 0.90);
    vec3 foamAmbient = mix(uHorizonAntiColor, uHorizonSunColor, 0.45) * 1.25 + uSunColor * 0.32;
    col = mix(col, foamAmbient, totalFoam);

    // Gradual aerial perspective convergence to exact horizon sky (100% pixel-identical to skydome at every angle & altitude!)
    vec3 exactHorizonSky = evalHorizonHazeColor(-toCam);
    float aerialExtinction = 1.0 - exp(-pow(max(uMistDensity * dist, 1e-6), 1.24));
    float distRimFeather = smoothstep(1650.0, 5100.0, dist);
    float outerRimFeather = smoothstep(2400.0, 5350.0, length(p));
    float horizonBlend = clamp(max(aerialExtinction, max(distRimFeather, outerRimFeather)), 0.0, 1.0);
    col = mix(col, exactHorizonSky, horizonBlend);

    // Physical coastal water clarity ONLY in shallow near-island reefs (< 165m);
    // mid & far ocean is 100% opaque (alpha = 1.0) so underwater geometry never bleeds through from high viewpoints!
    float nearShoalClarity = shoalGlow * (1.0 - smoothstep(75.0, 165.0, dist)) * (1.0 - fresnel) * (1.0 - totalFoam);
    float waterAlpha = mix(1.0, 0.80, clamp(nearShoalClarity, 0.0, 1.0));
    waterAlpha = mix(waterAlpha, 1.0, horizonBlend);

    gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(24.0)), clamp(waterAlpha, 0.80, 1.0));
  }
`;

function buildRadialOceanGeometry(maxRadius = 5600, radialRings = 300, angularSegs = 256): THREE.BufferGeometry {
  const vCount = (radialRings + 1) * (angularSegs + 1);
  const positions = new Float32Array(vCount * 3);
  const uvs = new Float32Array(vCount * 2);

  for (let ir = 0; ir <= radialRings; ir++) {
    const u = ir / radialRings;
    const r = maxRadius * Math.pow(u, 2.30);
    for (let ia = 0; ia <= angularSegs; ia++) {
      const v = ia / angularSegs;
      const theta = v * Math.PI * 2.0;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      const idx = ir * (angularSegs + 1) + ia;
      positions[idx * 3] = x;
      positions[idx * 3 + 1] = 0;
      positions[idx * 3 + 2] = z;
      uvs[idx * 2] = x * 0.02;
      uvs[idx * 2 + 1] = z * 0.02;
    }
  }

  const indices = new Uint32Array(radialRings * angularSegs * 6);
  let ptr = 0;
  for (let ir = 0; ir < radialRings; ir++) {
    for (let ia = 0; ia < angularSegs; ia++) {
      const a = ir * (angularSegs + 1) + ia;
      const b = (ir + 1) * (angularSegs + 1) + ia;
      const c = (ir + 1) * (angularSegs + 1) + (ia + 1);
      const d = ir * (angularSegs + 1) + (ia + 1);
      indices[ptr++] = a;
      indices[ptr++] = c;
      indices[ptr++] = b;
      indices[ptr++] = a;
      indices[ptr++] = d;
      indices[ptr++] = c;
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geom.setIndex(new THREE.BufferAttribute(indices, 1));
  geom.computeBoundingSphere();
  return geom;
}

export function createNorthSeaOcean(
  seaStacks: Array<{ x: number; z: number; radius: number; boost?: number }>,
  atmosphereUniforms: AtmosphereSharedUniforms,
  initialParams?: Partial<OceanWaveParams>
): NorthSeaOceanController {
  const params: OceanWaveParams = { ...DEFAULT_OCEAN_PARAMS, ...initialParams };

  const stackUniformArray: THREE.Vector4[] = [];
  for (let i = 0; i < 24; i++) {
    const st = seaStacks[i];
    if (st) {
      stackUniformArray.push(new THREE.Vector4(st.x, st.z, st.radius, st.boost ?? 0));
    } else {
      stackUniformArray.push(new THREE.Vector4(9999, 9999, 0, 0));
    }
  }

  const uniforms: Record<string, THREE.IUniform> = {
    ...atmosphereUniforms,
    uWaveAmp: { value: params.waveAmplitude },
    uWaveSpeed: { value: params.waveSpeed },
    uChoppiness: { value: params.seaChoppiness },
    uStackCenters: { value: stackUniformArray },
  };

  const geom = buildRadialOceanGeometry(5600, 300, 256);

  const mat = new THREE.ShaderMaterial({
    name: 'NorthSeaPhysicalOcean',
    vertexShader: OCEAN_VERT,
    fragmentShader: OCEAN_FRAG,
    uniforms,
    transparent: true,
    depthWrite: true,
  });

  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.y = -11.5;
  mesh.renderOrder = 2;
  mesh.frustumCulled = false;
  mesh.name = 'NorthSeaOcean';

  return {
    mesh,
    params,
    setOceanParams(patch: Partial<OceanWaveParams>) {
      Object.assign(params, patch);
      uniforms.uWaveAmp.value = params.waveAmplitude;
      uniforms.uWaveSpeed.value = params.waveSpeed;
      uniforms.uChoppiness.value = params.seaChoppiness;
    },
    update(timeSec: number) {
      uniforms.uTime.value = timeSec;
    },
  };
}
