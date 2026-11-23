import * as THREE from 'three';

export interface LightFuryShaderUniforms {
  uTime: { value: number };
  uIridescentShimmer: { value: number }; // [0, 1] pinpoint stardust crystal glimmer & opal sheen
  uPastelTint: { value: number };        // [0, 1] subtle pale-pink underwing & pale-blue belly undertones
  uRadiantGlow: { value: number };       // [0, 1] partly-glowing radiant skin & shimmer markings
  uBiolumGlow: { value: number };        // [0, 1] Hidden World neon rose-magenta, violet & aqua-cyan bioluminescent patterns!
  uPlasmaGlow: { value: number };        // [0, 1] orchid-cyan plasma throat, nostril & dorsal crest charge
  uThermalCloak: { value: number };      // [0, 1] superheated silicate mirror cloaking
  uSunDir: { value: THREE.Vector3 };
  uSunColor: { value: THREE.Color };
}

export interface LightFuryEyeMaterials {
  irisMaterial: THREE.MeshStandardMaterial;
  corneaMaterial: THREE.MeshPhysicalMaterial;
  uniforms: {
    uPupilDilation: { value: number };
    uLightDir: { value: THREE.Vector3 };
    uBiolumGlow: { value: number };
    uPlasmaGlow: { value: number };
    uThermalCloak: { value: number };
  };
}

export interface LightFuryMaterialSet {
  skinMaterial: THREE.MeshPhysicalMaterial;
  wingMembraneMaterial: THREE.MeshPhysicalMaterial;
  clawMaterial: THREE.MeshPhysicalMaterial;
  teethMaterial: THREE.MeshPhysicalMaterial;
  oralGumMaterial: THREE.MeshPhysicalMaterial;
  tongueMaterial: THREE.MeshPhysicalMaterial;
  hullDepthMaterial: THREE.MeshBasicMaterial;
  doubleSidedHullDepthMaterial: THREE.MeshBasicMaterial;
  eyeMaterials: LightFuryEyeMaterials;
  uniforms: LightFuryShaderUniforms;
  syncCloakTransparency: (cloakAmount: number) => boolean;
}

function fract(x: number): number {
  return x - Math.floor(x);
}

function hash2(x: number, y: number): number {
  return fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
}

let cachedPearlMaps: {
  albedoMap: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
} | null = null;

/**
 * Generates ultra-smooth, porcelain-velvet micro-satin PBR maps for the Light Fury
 * (dramatically smoother than Toothless's bold reptilian scales, matching movie & Sideshow refs!).
 */
function generateLightFuryPearlPBRMaps(size = 512) {
  if (cachedPearlMaps) return cachedPearlMaps;

  const hField = new Float32Array(size * size);
  const cells = 76; // Microscopic silk-fine grain (barely perceptible up close, liquid-smooth from afar)

  for (let y = 0; y < size; y++) {
    const v = (y / size) * cells;
    const iy = Math.floor(v);
    const fy = v - iy;
    for (let x = 0; x < size; x++) {
      const u = (x / size) * cells;
      const ix = Math.floor(u);
      const fx = u - ix;

      let minDist = 10.0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const cx = ((ix + dx) % cells + cells) % cells;
          const cy = ((iy + dy) % cells + cells) % cells;
          const jx = dx + 0.5 + (hash2(cx, cy) - 0.5) * 0.68 - fx;
          const jy = dy + 0.5 + (hash2(cy + 19, cx + 7) - 0.5) * 0.68 - fy;
          const d = Math.sqrt(jx * jx + jy * jy);
          if (d < minDist) minDist = d;
        }
      }
      const dome = Math.max(0, 1.0 - Math.pow(minDist * 1.15, 2.2));
      hField[y * size + x] = dome;
    }
  }

  const aCanvas = document.createElement('canvas');
  const nCanvas = document.createElement('canvas');
  const rCanvas = document.createElement('canvas');
  for (const c of [aCanvas, nCanvas, rCanvas]) {
    c.width = size;
    c.height = size;
  }
  const aCtx = aCanvas.getContext('2d')!;
  const nCtx = nCanvas.getContext('2d')!;
  const rCtx = rCanvas.getContext('2d')!;
  const aImg = aCtx.createImageData(size, size);
  const nImg = nCtx.createImageData(size, size);
  const rImg = rCtx.createImageData(size, size);

  for (let y = 0; y < size; y++) {
    const ym1 = (y - 1 + size) % size;
    const yp1 = (y + 1) % size;
    for (let x = 0; x < size; x++) {
      const xm1 = (x - 1 + size) % size;
      const xp1 = (x + 1) % size;
      const idx = y * size + x;
      const p4 = idx * 4;
      const h = hField[idx];

      // Ultra-gentle slope so surface reads porcelain-velvet smooth
      const dX = (hField[y * size + xp1] - hField[y * size + xm1]) * 0.24;
      const dY = (hField[yp1 * size + x] - hField[ym1 * size + x]) * 0.24;
      const inv = 1.0 / Math.sqrt(dX * dX + dY * dY + 1.0);

      nImg.data[p4] = Math.round((-dX * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 1] = Math.round((-dY * inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 2] = Math.round((inv * 0.5 + 0.5) * 255);
      nImg.data[p4 + 3] = 255;

      // Pure luminous pearl-white base (249..254) without dark scale crevices!
      const lum = 249 + h * 5;
      aImg.data[p4] = Math.min(255, Math.round(lum + 0.8));
      aImg.data[p4 + 1] = Math.round(lum);
      aImg.data[p4 + 2] = Math.min(255, Math.round(lum + 0.6));
      aImg.data[p4 + 3] = 255;

      // Silky uniform porcelain-satin roughness (0.38 .. 0.45)
      const rough = Math.round((0.45 - h * 0.07) * 255);
      rImg.data[p4] = rough;
      rImg.data[p4 + 1] = rough;
      rImg.data[p4 + 2] = rough;
      rImg.data[p4 + 3] = 255;
    }
  }

  aCtx.putImageData(aImg, 0, 0);
  nCtx.putImageData(nImg, 0, 0);
  rCtx.putImageData(rImg, 0, 0);

  const setup = (tex: THREE.CanvasTexture, srgb: boolean) => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 8;
    tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    tex.needsUpdate = true;
    return tex;
  };

  cachedPearlMaps = {
    albedoMap: setup(new THREE.CanvasTexture(aCanvas), true),
    normalMap: setup(new THREE.CanvasTexture(nCanvas), false),
    roughnessMap: setup(new THREE.CanvasTexture(rCanvas), false),
  };
  return cachedPearlMaps;
}

let cachedLFIrisTex: THREE.CanvasTexture | null = null;

function generateLightFurySkyBlueIrisTexture(size = 1024): THREE.CanvasTexture {
  if (cachedLFIrisTex) return cachedLFIrisTex;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  const half = size * 0.5;

  for (let y = 0; y < size; y++) {
    const ny = (y - half) / half;
    for (let x = 0; x < size; x++) {
      const nx = (x - half) / half;
      const r = Math.sqrt(nx * nx + ny * ny);
      const theta = Math.atan2(ny, nx);
      const p4 = (y * size + x) * 4;

      if (r > 0.96) {
        img.data[p4] = 14;
        img.data[p4 + 1] = 24;
        img.data[p4 + 2] = 42;
        img.data[p4 + 3] = 255;
        continue;
      }

      const f1 = Math.sin(theta * 64 + Math.sin(r * 12) * 0.65);
      const f2 = Math.sin(theta * 138 - Math.cos(r * 18) * 0.85);
      const f3 = Math.sin(theta * 250 + r * 22);
      const crypt = Math.sin(theta * 21 + 0.9) * Math.cos(r * 14 - theta * 4);

      const fiberDetail = f1 * 0.42 + f2 * 0.33 + f3 * 0.15 + crypt * 0.24;
      const collarette = Math.exp(-Math.pow((r - 0.36) / 0.13, 2));
      const limbus = Math.max(0, Math.min(1, (0.95 - r) / 0.17));
      const innerMix = Math.max(0, Math.min(1, 1.0 - r * 1.06));
      const detailBoost = 0.86 + 0.28 * fiberDetail;

      let red = (32 + 128 * innerMix + 58 * collarette) * detailBoost * limbus;
      let green = (118 + 114 * innerMix + 36 * collarette) * detailBoost * limbus;
      let blue = (205 + 48 * innerMix + 20 * collarette) * detailBoost * limbus;

      if (crypt < -0.58 && r > 0.25 && r < 0.78) {
        const pocket = Math.min(1, (-crypt - 0.58) * 2.1);
        red *= 1.0 - 0.38 * pocket;
        green *= 1.0 - 0.28 * pocket;
        blue *= 1.0 - 0.16 * pocket;
      }

      img.data[p4] = Math.max(0, Math.min(255, Math.round(red)));
      img.data[p4 + 1] = Math.max(0, Math.min(255, Math.round(green)));
      img.data[p4 + 2] = Math.max(0, Math.min(255, Math.round(blue)));
      img.data[p4 + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  cachedLFIrisTex = new THREE.CanvasTexture(canvas);
  cachedLFIrisTex.colorSpace = THREE.SRGBColorSpace;
  cachedLFIrisTex.anisotropy = 8;
  cachedLFIrisTex.needsUpdate = true;
  return cachedLFIrisTex;
}

function createLightFuryEyeMaterials(): LightFuryEyeMaterials {
  const irisTex = generateLightFurySkyBlueIrisTexture(1024);
  const uniforms = {
    uPupilDilation: { value: 0.78 },
    uLightDir: { value: new THREE.Vector3(0.45, 0.65, 0.6).normalize() },
    uBiolumGlow: { value: 0.0 },
    uPlasmaGlow: { value: 0.0 },
    uThermalCloak: { value: 0.0 },
  };

  const irisMaterial = new THREE.MeshStandardMaterial({
    name: 'LightFury_SkyBlueIris_PBR',
    map: irisTex,
    roughness: 0.48,
    metalness: 0.0,
    envMapIntensity: 0.78,
  });

  irisMaterial.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec2 vIrisUv;`
      )
      .replace(
        '#include <uv_vertex>',
        `#include <uv_vertex>
        vIrisUv = uv;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uPupilDilation;
        uniform vec3 uLightDir;
        uniform float uBiolumGlow;
        uniform float uPlasmaGlow;
        uniform float uThermalCloak;
        varying vec2 vIrisUv;`
      )
      .replace(
        '#include <map_fragment>',
        `
        vec2 p = (vIrisUv - 0.5) * 2.0;
        float rRaw = length(p);

        // Smooth Feline Oval Pupil at ALL dilations: narrow vertical oval (0.0) <-> medium oval (0.5) <-> wide cute oval (1.0)
        // Uses pure C-infinity quadratic y^2 (NEVER abs(y) or rhombus superellipses!), so sides are always smoothly curved!
        float d = clamp(uPupilDilation, 0.0, 1.0);
        float pWidth = mix(0.056, 0.47, pow(d, 0.80));
        float pHeight = mix(0.56, 0.67, d);

        float yNorm = clamp(p.y / pHeight, -1.5, 1.5);
        float yNormSq = clamp(yNorm * yNorm, 0.0, 1.0);
        float slitTipFactor = mix(0.42, 1.0, smoothstep(0.0, 0.40, d));
        float effHalfWidth = max(0.020, pWidth * mix(1.0, slitTipFactor, yNormSq));
        float pupilDist = sqrt((p.x * p.x) / (effHalfWidth * effHalfWidth) + yNorm * yNorm);
        float pupilMask = smoothstep(0.955, 1.025, pupilDist);

        float angle = atan(p.y, p.x);
        float boundaryR = mix(pWidth * 0.85, pHeight * 0.85, abs(sin(angle)));
        float irisT = clamp((rRaw - boundaryR * 0.70) / max(0.12, 0.96 - boundaryR * 0.70), 0.0, 1.0);
        float remappedR = mix(0.16, 0.96, irisT);
        vec2 warpedUv = vec2(0.5) + vec2(cos(angle), sin(angle)) * remappedR * 0.5;

        vec4 sampledIris = texture2D(map, clamp(warpedUv, 0.002, 0.998));
        float caustic = clamp(dot(normalize(vec3(-p.x * 0.65, -p.y * 0.65, 0.75)), normalize(uLightDir)), 0.0, 1.0);
        vec3 irisLit = sampledIris.rgb * (0.98 + 1.05 * pow(caustic, 1.3));

        float ruffEdge = exp(-pow((pupilDist - 1.08) / 0.16, 2.0)) * pupilMask;
        irisLit += vec3(0.22, 0.36, 0.48) * ruffEdge;

        vec2 cp = (p - vec2(-0.20, 0.26)) / vec2(0.084, 0.070);
        float sqDist = pow(abs(cp.x), 3.4) + pow(abs(cp.y), 3.4);
        float catchSpot = 1.0 - smoothstep(0.70, 1.15, sqDist);
        vec2 cp2 = (p - vec2(0.24, -0.26)) / 0.052;
        float catchSpot2 = exp(-dot(cp2, cp2)) * 0.34;

        float glowBoost = clamp(uPlasmaGlow * 0.65 + uBiolumGlow * 0.55, 0.0, 1.0);
        irisLit = mix(irisLit, irisLit * vec3(1.18, 0.98, 1.68) + vec3(0.42, 0.52, 0.95) * (1.0 - irisT), glowBoost);

        diffuseColor.rgb *= mix(vec3(0.003, 0.005, 0.010), irisLit, pupilMask);
        diffuseColor.rgb += vec3(0.96, 0.99, 1.0) * (catchSpot * 0.76 + catchSpot2);
        // Smooth optical mirror cloak blend on visible front iris (internal rear eyeball is 100% culled by outer-hull depth pre-pass!)
        float eyeCloak = smoothstep(0.0, 0.95, uThermalCloak);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.80, 0.88, 0.98), eyeCloak * 0.78);
        diffuseColor.a *= mix(1.0, 0.12, eyeCloak);
        `
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        vec2 ep = (vIrisUv - 0.5) * 2.0;
        float eRadial = clamp(1.0 - length(ep) * 0.92, 0.0, 1.0);
        totalEmissiveRadiance += diffuseColor.rgb * (0.36 + uPlasmaGlow * 0.85 + uBiolumGlow * 0.72) * eRadial * (1.0 - smoothstep(0.0, 0.95, uThermalCloak) * 0.88);`
      );
  };

  const corneaMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_Cornea_WetCoat',
    color: new THREE.Color(0xffffff),
    transparent: true,
    opacity: 0.15,
    roughness: 0.012,
    metalness: 0.0,
    ior: 1.376,
    reflectivity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.01,
    envMapIntensity: 2.8,
    depthWrite: false,
  });

  return { irisMaterial, corneaMaterial, uniforms };
}

function injectLightFuryShader(
  material: THREE.MeshPhysicalMaterial,
  uniforms: LightFuryShaderUniforms,
  isWingMembrane: boolean
): void {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;
        varying vec3 vWorldNormalCustom;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vAnatomyData = aAnatomyData;
        vObjPos = position;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vec4 lfWp = vec4(transformed, 1.0);
        vWorldPositionCustom = (modelMatrix * lfWp).xyz;
        vWorldNormalCustom = normalize(mat3(modelMatrix) * objectNormal);`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;
        uniform float uIridescentShimmer;
        uniform float uPastelTint;
        uniform float uRadiantGlow;
        uniform float uBiolumGlow;
        uniform float uPlasmaGlow;
        uniform float uThermalCloak;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;
        varying vec3 vWorldNormalCustom;

        float lfHash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float lfNoise3D(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(
              mix(lfHash31(i + vec3(0,0,0)), lfHash31(i + vec3(1,0,0)), f.x),
              mix(lfHash31(i + vec3(0,1,0)), lfHash31(i + vec3(1,1,0)), f.x),
              f.y
            ),
            mix(
              mix(lfHash31(i + vec3(0,0,1)), lfHash31(i + vec3(1,0,1)), f.x),
              mix(lfHash31(i + vec3(0,1,1)), lfHash31(i + vec3(1,1,1)), f.x),
              f.y
            ),
            f.z
          );
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        float patternMask = clamp(vAnatomyData.y, 0.0, 1.0);
        float iceBlueMask = clamp(vAnatomyData.z, 0.0, 1.0);
        float blushAndThin = clamp(vAnatomyData.w, 0.0, 1.0);

        vec3 viewDirM = normalize(cameraPosition - vWorldPositionCustom);
        vec3 sunDirM = normalize(uSunDir);
        vec3 wNorm = normalize(vWorldNormalCustom);
        #ifdef DOUBLE_SIDED
          wNorm *= gl_FrontFacing ? 1.0 : -1.0;
        #endif

        // 1. Restrained, Living Mother-of-Pearl Base:
        // Predominantly pure, very-pale warm blush-white (NOT plain grey-white, and NEVER overdone!),
        // subtly shifting with lighting direction, view angle, and anatomy!
        vec3 basePearlWhite = diffuseColor.rgb * vec3(0.997, 0.989, 0.992);
        vec3 whisperIceBlue = vec3(0.885, 0.942, 0.996);
        vec3 whisperRosePink = vec3(0.994, 0.918, 0.946);
        vec3 whisperLavender = vec3(0.955, 0.928, 0.992);

        // Subtle pale sky-ice countershading on throat, underbelly & ventral tail (kept delicate ~22% max!)
        vec3 subtleHide = mix(basePearlWhite, whisperIceBlue, iceBlueMask * 0.24 * uPastelTint);

        // Subtle pale rose-lavender along shimmer bands & forehead hearts (~14% delicate tint)
        subtleHide = mix(subtleHide, whisperLavender, patternMask * 0.16 * uPastelTint);

        ${
          isWingMembrane
            ? `
        // Under-the-wings specialty: ventral wing surface (facing downward or !gl_FrontFacing)
        // radiates a soft, delicate very-pale rose-pink blush, shifting gently with lighting!
        float isUnderWing = gl_FrontFacing ? clamp(-wNorm.y * 0.55 + 0.15, 0.0, 1.0) : 1.0;
        float underWingPinkAmt = (0.14 + 0.16 * isUnderWing) * blushAndThin * uPastelTint;
        subtleHide = mix(subtleHide, whisperRosePink, clamp(underWingPinkAmt, 0.0, 0.28));
        `
            : `
        // Delicate rosy warmth on nostril rim, ear tips, and axillary under-wing flanks (~16% max)
        subtleHide = mix(subtleHide, whisperRosePink, clamp(blushAndThin, 0.0, 0.65) * 0.22 * uPastelTint);
        `
        }

        // Subtle lighting-reactive pearlescent shift (warm champagne-blush toward sun, cool moonstone in sky shadow)
        float sunFacing = 0.5 + 0.5 * dot(wNorm, sunDirM);
        float grazing = pow(1.0 - clamp(abs(dot(wNorm, viewDirM)), 0.0, 1.0), 2.2);
        vec3 lightShiftTint = mix(vec3(0.968, 0.976, 1.00), vec3(1.00, 0.968, 0.980), sunFacing);
        subtleHide *= mix(vec3(1.0), lightShiftTint, (0.28 + 0.45 * grazing) * uPastelTint);

        diffuseColor.rgb = subtleHide;

        // Thermal-Mirror Silicate Cloaking: scales turn chrome-silver & optically translucent at ALL cloak values!
        if (uThermalCloak > 0.001) {
          float cloakT = smoothstep(0.0, 0.96, uThermalCloak);
          float fresC = pow(1.0 - clamp(abs(dot(wNorm, viewDirM)), 0.0, 1.0), 2.4);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.78, 0.87, 0.98), cloakT * 0.86);
          diffuseColor.a *= mix(1.0, clamp(0.10 + 0.40 * fresC, 0.10, 0.58), cloakT);
        }`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        // Porcelain-velvet smoothness (much smoother than Toothless!) -> mirror crystal when cloaking
        roughnessFactor = mix(roughnessFactor * 0.86, 0.022, uThermalCloak * 0.95);
        roughnessFactor = clamp(roughnessFactor, 0.02, 0.65);`
      )
      .replace(
        '#include <metalnessmap_fragment>',
        `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.94, uThermalCloak * 0.92);`
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        float pStripe = clamp(vAnatomyData.y, 0.0, 1.0);
        float pBlue = clamp(vAnatomyData.z, 0.0, 1.0);
        float pZone = clamp(vAnatomyData.w, 0.0, 1.0);
        vec3 viewW = normalize(cameraPosition - vWorldPositionCustom);
        vec3 sunN = normalize(uSunDir);

        // 1. Pinpoint Stardust Crystal Glimmer & Subtle Pearlescent Sheen (movie stills refs 13 & 16!)
        if (uIridescentShimmer > 0.001) {
          // Tier A: Tiny, crisp pinpoint diamond stardust specks (twinkling gently as view/breath shifts!)
          vec3 fineCell = floor(vObjPos * 285.0);
          vec3 randDirA = normalize(vec3(
            lfHash31(fineCell) - 0.5,
            lfHash31(fineCell + 19.7) - 0.5,
            lfHash31(fineCell + 47.3) - 0.5
          ));
          vec3 halfV = normalize(viewW + sunN);
          float twinkle = 0.78 + 0.22 * sin(uTime * 2.4 + lfHash31(fineCell + 7.7) * 6.283);
          float pinpoint = pow(clamp(dot(normalize(normal + randDirA * 0.48), halfV), 0.0, 1.0), 88.0);
          float sparseStars = smoothstep(0.76, 0.985, lfHash31(fineCell + 91.7));
          float zoneDensity = 0.28 + 0.92 * pStripe; // Concentrated on forehead hearts, neck/shoulders & wing bands!
          vec3 starColor = mix(vec3(1.0, 0.88, 0.96), vec3(0.84, 0.94, 1.0), lfHash31(fineCell + 5.1));
          totalEmissiveRadiance += starColor * pinpoint * sparseStars * zoneDensity * twinkle * uIridescentShimmer * 3.1;

          // Tier B: Ultra-soft silk-pearl grazing sheen (kept restrained so she stays luminous white!)
          float rimOpal = pow(1.0 - clamp(abs(dot(normal, viewW)), 0.0, 1.0), 3.6);
          vec3 rimTint = mix(vec3(0.82, 0.90, 1.0), vec3(1.0, 0.84, 0.93), 0.5 + 0.5 * sin(vObjPos.z * 2.8 + vObjPos.x * 2.0));
          totalEmissiveRadiance += rimTint * rimOpal * uIridescentShimmer * 0.075;
        }

        // 2. Partly-Glowing Radiant Skin & Translucent Underwing Rose-Pearl Luminescence!
        if (uRadiantGlow > 0.001) {
          float gentleBreath = 0.92 + 0.08 * sin(uTime * 1.9 - vObjPos.z * 1.4);
          // Soft dermal wrap glow across smooth pearl hide + luminous shimmer markings (hearts, wing bands, dorsal ridge)
          float radiantMask = 0.08 + 0.46 * pStripe + 0.14 * pBlue + ${isWingMembrane ? '0.22 * pZone' : '0.28 * pZone'};
          vec3 radiantHue = mix(
            vec3(0.98, 0.88, 0.94), // Soft warm pearl-rose
            vec3(0.78, 0.91, 1.00), // Ethereal pastel sky-periwinkle
            0.45 + 0.35 * sin(vObjPos.z * 2.2)
          );
          totalEmissiveRadiance += radiantHue * radiantMask * uRadiantGlow * 0.42 * gentleBreath;
        }

        ${
          isWingMembrane
            ? `
        // Warm very-pale rose-pink subsurface translucency glowing softly under the wings when lit!
        float backSun = pow(clamp(dot(viewW, -sunN), 0.0, 1.0), 2.1);
        float ambientTrans = 0.18 + 0.82 * backSun;
        totalEmissiveRadiance += uSunColor * vec3(0.32, 0.21, 0.26) * ambientTrans * pZone * (0.35 + 0.45 * uPastelTint);
        `
            : ''
        }

        // 2B. Hidden World Neon Bioluminescence FX (uBiolumGlow):
        // Radiating neon rose-pink, electric orchid-magenta, and cavern aqua-cyan meandering filigree patterns!
        if (uBiolumGlow > 0.001) {
          float absX = abs(vObjPos.x);
          float symPhase = sin(vObjPos.z * 7.2 - absX * 4.8 + lfNoise3D(vec3(absX * 3.5, vObjPos.y * 3.5, vObjPos.z * 3.5)) * 2.2);
          float fineFiligree = pow(clamp(0.5 + 0.5 * sin(absX * 15.0 + vObjPos.z * 9.5 + sin(vObjPos.z * 4.2) * 1.8), 0.0, 1.0), 5.0);
          ${
            isWingMembrane
              ? `
          // Meandering Hidden World bioluminescent wing & heart-tail ribbons!
          float spanRibbonA = pow(clamp(0.5 + 0.5 * symPhase, 0.0, 1.0), 3.6);
          float spanRibbonB = pow(clamp(0.5 + 0.5 * cos(absX * 6.4 - vObjPos.z * 5.2), 0.0, 1.0), 4.5);
          float heartTailGlow = smoothstep(-3.35, -3.95, vObjPos.z) * (0.45 + 0.55 * pStripe);
          float biolumPattern = clamp(pStripe * 0.95 + (spanRibbonA * 0.72 + spanRibbonB * 0.48 + fineFiligree * 0.42) * (0.35 + 0.65 * pZone) + heartTailGlow, 0.0, 1.35);
          `
              : `
          // Forehead double-hearts, dorsal spine crest, flank scroll bands, ear rims & limb-fin neon bands!
          float earTipMask = smoothstep(1.62, 1.83, vObjPos.y) * smoothstep(1.52, 1.26, vObjPos.z);
          float bodySwirl = pow(clamp(0.5 + 0.5 * symPhase, 0.0, 1.0), 5.5) * smoothstep(-0.15, 0.65, vObjPos.y - 0.55) * 0.48;
          float biolumPattern = clamp(pStripe * 1.25 + earTipMask * 0.85 + bodySwirl + fineFiligree * pStripe * 0.45, 0.0, 1.45);
          `
          }
          // Traveling Hidden World bioluminescent wave from crown to heart-tail +翼tips!
          float energyPulse = 0.82 + 0.28 * sin(uTime * 2.8 - vObjPos.z * 1.9 - absX * 1.4);
          float colorWave = 0.5 + 0.5 * sin(vObjPos.z * 2.1 + absX * 2.6 - uTime * 0.85);
          vec3 neonRosePink = vec3(1.00, 0.18, 0.76);
          vec3 neonOrchidViolet = vec3(0.68, 0.22, 1.00);
          vec3 neonCavernCyan = vec3(0.16, 0.92, 1.00);
          vec3 biolumColor = mix(mix(neonRosePink, neonOrchidViolet, colorWave), neonCavernCyan, clamp(pBlue * 0.65 + fineFiligree * 0.55, 0.0, 0.82));
          // Soft ambient dermal subsurface bloom + crisp intense neon filigree markings!
          float ambientDermal = 0.10 + 0.14 * pow(1.0 - clamp(abs(dot(normal, viewW)), 0.0, 1.0), 2.2);
          totalEmissiveRadiance += biolumColor * (ambientDermal + biolumPattern * 1.95) * uBiolumGlow * energyPulse;
        }

        // 3. Orchid-Rose & Ice-Cyan Plasma Charge Glow (nostrils, throat & smooth dorsal crest!)
        if (uPlasmaGlow > 0.001 && !${isWingMembrane ? 'true' : 'false'}) {
          float pulse = 0.86 + 0.14 * sin(uTime * 4.2 - vObjPos.z * 2.6);
          vec3 plasmaCol = mix(vec3(0.92, 0.44, 0.96), vec3(0.42, 0.90, 1.0), 0.5 + 0.5 * sin(vObjPos.z * 3.0));
          totalEmissiveRadiance += plasmaCol * pZone * uPlasmaGlow * 2.4 * pulse;
        }

        // 4. Superheated Plasma-Mirror Cloaking Transition Shimmer Wave!
        if (uThermalCloak > 0.005 && uThermalCloak < 0.98) {
          float wavePos = mix(2.3, -4.4, uThermalCloak);
          float heatBand = exp(-pow((vObjPos.z - wavePos + (lfNoise3D(vObjPos * 5.0 + uTime) - 0.5) * 0.45) / 0.36, 2.0));
          vec3 cloakPlasma = mix(vec3(0.95, 0.54, 0.92), vec3(0.48, 0.92, 1.0), lfNoise3D(vObjPos * 6.0));
          totalEmissiveRadiance += cloakPlasma * heatBand * sin(uThermalCloak * 3.14159) * 2.4;
        }`
      );
  };
}

export function createLightFuryMaterialSet(): LightFuryMaterialSet {
  const maps = generateLightFuryPearlPBRMaps(512);
  const eyeMaterials = createLightFuryEyeMaterials();

  const uniforms: LightFuryShaderUniforms = {
    uTime: { value: 0 },
    uIridescentShimmer: { value: 0.76 },
    uPastelTint: { value: 0.78 },
    uRadiantGlow: { value: 0.34 },
    uBiolumGlow: { value: 0.0 },
    uPlasmaGlow: { value: 0.04 },
    uThermalCloak: { value: 0.0 },
    uSunDir: { value: new THREE.Vector3(-0.55, 0.38, -0.74).normalize() },
    uSunColor: { value: new THREE.Color(0xffd2a1) },
  };

  // Porcelain-smooth pearl skin (normalScale = 0.05 vs Toothless's coarse reptilian scales!)
  const skinMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_SnowPearlHide_PBR',
    color: new THREE.Color(0xffffff),
    map: maps.albedoMap,
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.05, 0.05),
    roughnessMap: maps.roughnessMap,
    roughness: 0.46,
    metalness: 0.02,
    iridescence: 0.42,
    iridescenceIOR: 1.38,
    iridescenceThicknessRange: [320, 520],
    clearcoat: 0.34,
    clearcoatRoughness: 0.22,
    sheen: 0.28,
    sheenRoughness: 0.42,
    sheenColor: new THREE.Color(0xfff0f6),
    envMapIntensity: 1.22,
  });
  injectLightFuryShader(skinMaterial, uniforms, false);

  const wingMaps = {
    albedo: maps.albedoMap.clone(),
    normal: maps.normalMap.clone(),
    rough: maps.roughnessMap.clone(),
  };
  for (const t of [wingMaps.albedo, wingMaps.normal, wingMaps.rough]) {
    t.repeat.set(3.0, 3.0);
    t.needsUpdate = true;
  }

  const wingMembraneMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_IridescentWingPatagium_PBR',
    color: new THREE.Color(0xfffcfd),
    map: wingMaps.albedo,
    normalMap: wingMaps.normal,
    normalScale: new THREE.Vector2(0.028, 0.028),
    roughnessMap: wingMaps.rough,
    roughness: 0.42,
    metalness: 0.02,
    iridescence: 0.52,
    iridescenceIOR: 1.40,
    iridescenceThicknessRange: [310, 540],
    clearcoat: 0.28,
    clearcoatRoughness: 0.24,
    side: THREE.DoubleSide,
    envMapIntensity: 1.28,
  });
  injectLightFuryShader(wingMembraneMaterial, uniforms, true);

  const clawMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_SlatePearlClaws_PBR',
    color: new THREE.Color(0x282d38),
    roughness: 0.24,
    metalness: 0.08,
    clearcoat: 0.84,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.5,
  });

  const teethMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_PearlyTeeth_PBR',
    color: new THREE.Color(0xfaf6f2),
    roughness: 0.14,
    metalness: 0.0,
    clearcoat: 0.92,
    clearcoatRoughness: 0.08,
  });

  const oralGumMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_RoseGums_PBR',
    color: new THREE.Color(0xb86478),
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.08, 0.08),
    roughness: 0.32,
    clearcoat: 0.82,
    clearcoatRoughness: 0.12,
    side: THREE.DoubleSide,
  });

  const tongueMaterial = new THREE.MeshPhysicalMaterial({
    name: 'LightFury_PinkTongue_PBR',
    color: new THREE.Color(0xd4788e),
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.10, 0.10),
    roughness: 0.26,
    clearcoat: 0.88,
    clearcoatRoughness: 0.10,
  });

  // Invisible outer-hull depth pre-pass materials: write ONLY the frontmost exterior silhouette into Z-buffer
  // during cloak so internal eyeballs, teeth, gums, tongue & back-limbs NEVER bleed through like a skull!
  const hullDepthMaterial = new THREE.MeshBasicMaterial({
    name: 'LightFury_OuterHullDepthPrePass',
    colorWrite: false,
    depthWrite: true,
    depthTest: true,
    transparent: true,
    opacity: 0.0,
  });

  const doubleSidedHullDepthMaterial = new THREE.MeshBasicMaterial({
    name: 'LightFury_WingHullDepthPrePass',
    colorWrite: false,
    depthWrite: true,
    depthTest: true,
    transparent: true,
    opacity: 0.0,
    side: THREE.DoubleSide,
  });

  const exteriorCloakMats = [skinMaterial, wingMembraneMaterial, clawMaterial];
  const internalCloakMats = [
    teethMaterial,
    oralGumMaterial,
    tongueMaterial,
    eyeMaterials.irisMaterial,
  ];

  let wasCloaking = false;
  const syncCloakTransparency = (cloakAmount: number): boolean => {
    const active = cloakAmount > 0.001;
    if (active !== wasCloaking) {
      wasCloaking = active;
      for (const m of exteriorCloakMats) {
        m.transparent = active;
        m.depthWrite = !active;
        m.depthFunc = active ? THREE.LessEqualDepth : THREE.LessEqualDepth;
        m.polygonOffset = active;
        m.polygonOffsetFactor = active ? -1 : 0;
        m.polygonOffsetUnits = active ? -2 : 0;
        m.needsUpdate = true;
      }
      for (const m of internalCloakMats) {
        m.transparent = active;
        m.depthWrite = !active;
        m.depthTest = true;
        m.depthFunc = THREE.LessEqualDepth;
        m.needsUpdate = true;
      }
    }
    const cloakFade = THREE.MathUtils.smoothstep(cloakAmount, 0.0, 0.96);
    clawMaterial.opacity = 1.0 - cloakFade * 0.86;
    teethMaterial.opacity = 1.0 - cloakFade * 0.90;
    oralGumMaterial.opacity = 1.0 - cloakFade * 0.90;
    tongueMaterial.opacity = 1.0 - cloakFade * 0.90;
    eyeMaterials.corneaMaterial.opacity = THREE.MathUtils.lerp(0.15, 0.03, cloakFade);
    return active;
  };

  return {
    skinMaterial,
    wingMembraneMaterial,
    clawMaterial,
    teethMaterial,
    oralGumMaterial,
    tongueMaterial,
    hullDepthMaterial,
    doubleSidedHullDepthMaterial,
    eyeMaterials,
    uniforms,
    syncCloakTransparency,
  };
}
