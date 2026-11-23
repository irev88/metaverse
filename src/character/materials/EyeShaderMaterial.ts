import * as THREE from 'three';

export interface EyeMaterialRigUniforms {
  uPupilDilation: { value: number };
  uLightDir: { value: THREE.Vector3 };
  uAlphaGlow: { value: number };
}

export interface ToothlessEyeMaterials {
  irisMaterial: THREE.MeshStandardMaterial;
  corneaMaterial: THREE.MeshPhysicalMaterial;
  uniforms: EyeMaterialRigUniforms;
}

let cachedIrisTexture: THREE.CanvasTexture | null = null;

function generateStromalIrisTexture(size = 1024): THREE.CanvasTexture {
  if (cachedIrisTexture) return cachedIrisTexture;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);

  const half = size * 0.5;

  for (let y = 0; y < size; y++) {
    const ny = (y - half) / half; // [-1, 1]
    for (let x = 0; x < size; x++) {
      const nx = (x - half) / half; // [-1, 1]
      const r = Math.sqrt(nx * nx + ny * ny);
      const theta = Math.atan2(ny, nx);
      const p4 = (y * size + x) * 4;

      if (r > 0.96) {
        // Dark pigmented Night Fury sclera margin
        img.data[p4] = 8;
        img.data[p4 + 1] = 12;
        img.data[p4 + 2] = 11;
        img.data[p4 + 3] = 255;
        continue;
      }

      // Multi-frequency radial stromal collagen fibers & crypts
      const f1 = Math.sin(theta * 68 + Math.sin(r * 11) * 0.65);
      const f2 = Math.sin(theta * 142 - Math.cos(r * 19) * 0.85);
      const f3 = Math.sin(theta * 260 + r * 24);
      const crypt = Math.sin(theta * 23 + 1.4) * Math.cos(r * 15 - theta * 5);

      const fiberDetail = f1 * 0.42 + f2 * 0.33 + f3 * 0.15 + crypt * 0.25;
      const concentricFurrow = Math.sin(r * 42 + f1 * 0.6) * 0.08;

      // Collarette ridge around r ~ 0.38
      const collarette = Math.exp(-Math.pow((r - 0.38) / 0.13, 2));
      // Outer dark limbal ring around r ~ 0.86..0.96
      const limbus = Math.max(0, Math.min(1, (0.94 - r) / 0.16));

      // Color gradient matching 01-macro-face-eyes-scales.jpg & 10-live-action-2025-closeup.jpg:
      // Luminous golden-chartreuse inner collarette -> vivid toxic-emerald mid -> rich forest-jade limbus
      const innerMix = Math.max(0, Math.min(1, 1.0 - r * 1.08));
      const detailBoost = 0.84 + 0.30 * fiberDetail + concentricFurrow;

      let red = (38 + 166 * innerMix + 66 * collarette) * detailBoost * limbus;
      let green = (146 + 106 * innerMix + 34 * collarette) * detailBoost * limbus;
      let blue = (64 - 24 * innerMix + 22 * (1.0 - innerMix)) * detailBoost * limbus;

      // Subtle dark radial crypt pockets
      if (crypt < -0.58 && r > 0.25 && r < 0.78) {
        const pocket = Math.min(1, (-crypt - 0.58) * 2.2);
        red *= 1.0 - 0.42 * pocket;
        green *= 1.0 - 0.34 * pocket;
        blue *= 1.0 - 0.28 * pocket;
      }

      img.data[p4] = Math.max(0, Math.min(255, Math.round(red)));
      img.data[p4 + 1] = Math.max(0, Math.min(255, Math.round(green)));
      img.data[p4 + 2] = Math.max(0, Math.min(255, Math.round(blue)));
      img.data[p4 + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  cachedIrisTexture = new THREE.CanvasTexture(canvas);
  cachedIrisTexture.colorSpace = THREE.SRGBColorSpace;
  cachedIrisTexture.anisotropy = 8;
  cachedIrisTexture.needsUpdate = true;
  return cachedIrisTexture;
}

export function createToothlessEyeMaterials(): ToothlessEyeMaterials {
  const irisTex = generateStromalIrisTexture(1024);

  const uniforms: EyeMaterialRigUniforms = {
    uPupilDilation: { value: 0.76 }, // Cute, soulful wide-pupiled Night Fury default (refs 01, 07, 10)
    uLightDir: { value: new THREE.Vector3(0.45, 0.65, 0.6).normalize() },
    uAlphaGlow: { value: 0.0 },
  };

  const irisMaterial = new THREE.MeshStandardMaterial({
    name: 'Toothless_Iris_PBR',
    map: irisTex,
    roughness: 0.55,
    metalness: 0.0,
    envMapIntensity: 0.65,
  });

  irisMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uPupilDilation = uniforms.uPupilDilation;
    shader.uniforms.uLightDir = uniforms.uLightDir;
    shader.uniforms.uAlphaGlow = uniforms.uAlphaGlow;

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec2 vIrisUv;
        varying vec3 vWorldNorm;`
      )
      .replace(
        '#include <uv_vertex>',
        `#include <uv_vertex>
        vIrisUv = uv;
        vWorldNorm = normalize(mat3(modelMatrix) * normal);`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uPupilDilation;
        uniform vec3 uLightDir;
        uniform float uAlphaGlow;
        varying vec2 vIrisUv;
        varying vec3 vWorldNorm;`
      )
      .replace(
        '#include <map_fragment>',
        `
        // Map UV [0,1] -> centered iris coordinates [-1,1] on anterior pole
        vec2 p = (vIrisUv - 0.5) * 2.0;
        float rRaw = length(p);

        // Dynamic Night Fury pupil: narrow vertical oval slit (0.0) <-> medium oval (0.5) <-> wide soulful oval (1.0)
        // Uses pure C-infinity quadratic y^2 (NEVER abs(y) or superExp < 2), guaranteeing smooth rounded oval sides
        // with zero rhombus/diamond corners at every dilation level!
        float d = clamp(uPupilDilation, 0.0, 1.0);
        float pWidth = mix(0.058, 0.48, pow(d, 0.80));
        float pHeight = mix(0.55, 0.67, d);

        float yNorm = clamp(p.y / pHeight, -1.5, 1.5);
        float yNormSq = clamp(yNorm * yNorm, 0.0, 1.0);
        // Gentle quadratic narrowing toward top/bottom tips ONLY when constricted (d < 0.42); pure ellipse above 0.42!
        float slitTipFactor = mix(0.38, 1.0, smoothstep(0.0, 0.42, d));
        float effHalfWidth = max(0.020, pWidth * mix(1.0, slitTipFactor, yNormSq));
        float pupilDist = sqrt((p.x * p.x) / (effHalfWidth * effHalfWidth) + yNorm * yNorm);

        float pupilMask = smoothstep(0.955, 1.025, pupilDist);

        // Elastic radial iris fiber remap outside pupil boundary
        float angle = atan(p.y, p.x);
        float boundaryR = mix(pWidth * 0.85, pHeight * 0.85, abs(sin(angle)));
        float irisT = clamp((rRaw - boundaryR * 0.70) / max(0.12, 0.96 - boundaryR * 0.70), 0.0, 1.0);
        float remappedR = mix(0.16, 0.96, irisT);
        vec2 warpedUv = vec2(0.5) + vec2(cos(angle), sin(angle)) * remappedR * 0.5;

        vec4 sampledIris = texture2D(map, clamp(warpedUv, 0.002, 0.998));

        // Concave iris opposing caustic illumination + warm golden-lime inner ring
        float caustic = clamp(dot(normalize(vec3(-p.x * 0.65, -p.y * 0.65, 0.75)), normalize(uLightDir)), 0.0, 1.0);
        vec3 irisLit = sampledIris.rgb * (0.96 + 1.04 * pow(caustic, 1.3));

        float ruffEdge = exp(-pow((pupilDist - 1.08) / 0.16, 2.0)) * pupilMask;
        irisLit += vec3(0.30, 0.40, 0.05) * ruffEdge;

        // Signature crisp rounded-square sky catchlight (like 01-macro-face-eyes-scales.jpg & 07)
        vec2 cp = (p - vec2(-0.20, 0.26)) / vec2(0.082, 0.068);
        float sqDist = pow(abs(cp.x), 3.4) + pow(abs(cp.y), 3.4);
        float catchSpot = 1.0 - smoothstep(0.70, 1.15, sqDist);

        vec2 cp2 = (p - vec2(0.24, -0.26)) / 0.052;
        float catchSpot2 = exp(-dot(cp2, cp2)) * 0.32;

        // Alpha bioluminescent cyan shift inside stromal fibers when Alpha Glow is active
        irisLit = mix(irisLit, irisLit * vec3(0.45, 1.25, 1.85) + vec3(0.05, 0.42, 0.85) * (1.0 - irisT), uAlphaGlow * 0.78);

        // Deep velvet-black pupil core + lively anime/Pixar/DreamWorks sky catchlight
        diffuseColor.rgb *= mix(vec3(0.002, 0.003, 0.005), irisLit, pupilMask);
        diffuseColor.rgb += vec3(0.95, 0.98, 1.0) * (catchSpot * 0.72 + catchSpot2);
        `
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        // Nocturnal Night Fury tapetum-lucidum eye presence + Alpha glow
        vec2 ep = (vIrisUv - 0.5) * 2.0;
        float eRadial = clamp(1.0 - length(ep) * 0.92, 0.0, 1.0);
        totalEmissiveRadiance += diffuseColor.rgb * (0.34 + uAlphaGlow * 0.92) * eRadial;`
      );
  };

  // Separate glossy refractive outer corneal bulge for crisp sky/sun specular highlights & wet tear sheen
  const corneaMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_Cornea_WetCoat',
    color: new THREE.Color(0xffffff),
    transparent: true,
    opacity: 0.14,
    roughness: 0.012,
    metalness: 0.0,
    ior: 1.376,
    reflectivity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.01,
    envMapIntensity: 2.8,
    depthWrite: false,
  });

  return {
    irisMaterial,
    corneaMaterial,
    uniforms,
  };
}
