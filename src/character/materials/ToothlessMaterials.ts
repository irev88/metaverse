import * as THREE from 'three';
import { generateToothlessScalePBRMaps, ScalePBRMaps } from './ScalePBRGenerator';
import { createToothlessEyeMaterials, ToothlessEyeMaterials } from './EyeShaderMaterial';

export interface ToothlessShaderUniforms {
  uTime: { value: number };
  uAlphaGlow: { value: number };
  uBiolumGlow: { value: number };
  uLightningCloak: { value: number };
  uSunDir: { value: THREE.Vector3 };
  uSunColor: { value: THREE.Color };
}

export interface ToothlessMaterialSet {
  maps: ScalePBRMaps;
  skinMaterial: THREE.MeshPhysicalMaterial;
  wingMembraneMaterial: THREE.MeshPhysicalMaterial;
  prostheticPasteMaterial: THREE.MeshPhysicalMaterial;
  prostheticBronzeMaterial: THREE.MeshStandardMaterial;
  prostheticIronMaterial: THREE.MeshStandardMaterial;
  clawMaterial: THREE.MeshPhysicalMaterial;
  teethMaterial: THREE.MeshPhysicalMaterial;
  oralGumMaterial: THREE.MeshPhysicalMaterial;
  tongueMaterial: THREE.MeshPhysicalMaterial;
  eyeMaterials: ToothlessEyeMaterials;
  uniforms: ToothlessShaderUniforms;
}

function injectHybridDragonShader(
  material: THREE.MeshPhysicalMaterial,
  uniforms: ToothlessShaderUniforms,
  isWingMembrane: boolean
): void {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uAlphaGlow = uniforms.uAlphaGlow;
    shader.uniforms.uBiolumGlow = uniforms.uBiolumGlow;
    shader.uniforms.uLightningCloak = uniforms.uLightningCloak;
    shader.uniforms.uSunDir = uniforms.uSunDir;
    shader.uniforms.uSunColor = uniforms.uSunColor;

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;`
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
        vWorldPositionCustom = (modelMatrix * vec4(transformed, 1.0)).xyz;`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;
        uniform float uAlphaGlow;
        uniform float uBiolumGlow;
        uniform float uLightningCloak;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec4 vAnatomyData;
        varying vec3 vObjPos;
        varying vec3 vWorldPositionCustom;

        float hash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(
              mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
              mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x),
              f.y
            ),
            mix(
              mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
              mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x),
              f.y
            ),
            f.z
          );
        }

        // Multi-frequency 3D Cellular Voronoi evaluator for smooth, natural reptilian scale gradation:
        // Bridges vaguely from fine body hide -> medium transitional limb scales -> larger distal paw/snout scutes!
        float evalArmorScuteDome3D(vec3 p, float cellFreq) {
          vec3 sp = p * cellFreq;
          vec3 ip = floor(sp);
          vec3 fp = fract(sp);
          float d1 = 8.0;
          float d2 = 8.0;
          for (int dz = -1; dz <= 1; dz++) {
            for (int dy = -1; dy <= 1; dy++) {
              for (int dx = -1; dx <= 1; dx++) {
                vec3 off = vec3(float(dx), float(dy), float(dz));
                vec3 cell = ip + off;
                vec3 jitter = vec3(
                  hash31(cell + vec3(1.7, 9.2, 3.4)),
                  hash31(cell + vec3(8.3, 2.8, 7.1)),
                  hash31(cell + vec3(4.9, 6.1, 5.5))
                ) * 0.72 + 0.14;
                vec3 r = off + jitter - fp;
                float d = length(r);
                if (d < d1) {
                  d2 = d1;
                  d1 = d;
                } else if (d < d2) {
                  d2 = d;
                }
              }
            }
          }
          float border = clamp((d2 - d1) / 0.32, 0.0, 1.0);
          return smoothstep(0.0, 0.48, border) * (1.0 - 0.26 * d1 * d1);
        }

        // Evaluates organically dithered, vague multi-tier scale blending (zero sharp boundary lines!)
        vec2 evalBlendedScuteHierarchy(vec3 p, float rawAnatomyX) {
          float zoneNoise =
            (noise3D(p * 8.5 + vec3(2.1, 0.7, 4.3)) - 0.5) * 0.52 +
            (noise3D(p * 21.0 - vec3(1.4, 3.8, 0.9)) - 0.5) * 0.30;
          float z = rawAnatomyX + zoneNoise;
          float mesoW = smoothstep(0.42, 1.38, z);
          float macroW = smoothstep(0.96, 1.96, z);
          float totalW = clamp(mesoW * 0.55 + macroW * 0.45, 0.0, 1.0);
          if (totalW <= 0.005) return vec2(0.5, 0.0);
          float mesoDome = evalArmorScuteDome3D(p, 64.0);
          float macroDome = macroW > 0.005 ? evalArmorScuteDome3D(p + vec3(0.37, 0.19, 0.53), 35.0) : mesoDome;
          float dome = mix(mesoDome, macroDome, smoothstep(0.0, 1.0, macroW));
          return vec2(dome, totalW);
        }`
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        // Smooth, vaguely blended multi-tier scale hierarchy across body, limbs, paws & head!
        float scaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
        float macroWeight = smoothstep(0.08, 0.96, vAnatomyData.x + scaleDither);
        float scarWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        float thinness = clamp(vAnatomyData.w, 0.0, 1.0);

        #ifdef USE_MAP
          vec4 fineAlbedo = texture2D(map, vMapUv * 2.85);
          diffuseColor.rgb = mix(fineAlbedo.rgb * 0.94, diffuseColor.rgb * 1.08, macroWeight);
        #endif

        if (vAnatomyData.x > 0.18 && !${isWingMembrane ? 'true' : 'false'}) {
          vec2 scute = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scute.y > 0.005) {
            // Subtle, natural obsidian-slate tonal modulation so small & large scales merge seamlessly!
            vec3 plateCrown = diffuseColor.rgb * 1.22 + vec3(0.009, 0.011, 0.015);
            vec3 plateGroove = diffuseColor.rgb * 0.52;
            diffuseColor.rgb = mix(diffuseColor.rgb, mix(plateGroove, plateCrown, scute.x), scute.y * 0.68);
          }
        }

        // Subtle Night Fury manta-ray flank mottling
        float mantaPatch = smoothstep(0.54, 0.76, noise3D(vObjPos * vec3(3.4, 4.2, 2.6) + vec3(0.0, 1.3, 2.1)));
        float flankZone = smoothstep(0.15, 0.55, 1.0 - macroWeight) * (1.0 - thinness * 0.7);
        diffuseColor.rgb += vec3(0.014, 0.019, 0.026) * mantaPatch * flankZone;

        // Battle scar dermis shift (muted weathered slate-ash inside brow/chin scar grooves)
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.042, 0.045, 0.052), scarWeight * 0.68);

        // Lightning-cloak reflective silver-blue scale phase (Hidden World lightning stealth)
        if (uLightningCloak > 0.001) {
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.52, 0.68, 0.88), uLightningCloak * 0.78);
        }`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        float rScaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
        float macroRWeight = smoothstep(0.08, 0.96, vAnatomyData.x + rScaleDither);
        float scarRWeight = clamp(vAnatomyData.y, 0.0, 1.0);
        #ifdef USE_ROUGHNESSMAP
          float fineRough = texture2D(roughnessMap, vRoughnessMapUv * 2.85).g;
          roughnessFactor = mix(fineRough * 1.04, roughnessFactor * 0.88, macroRWeight);
        #endif
        if (vAnatomyData.x > 0.18 && !${isWingMembrane ? 'true' : 'false'}) {
          vec2 scuteR = evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x);
          if (scuteR.y > 0.005) {
            roughnessFactor = mix(roughnessFactor, mix(0.66, 0.30, scuteR.x), scuteR.y * 0.62);
          }
        }
        roughnessFactor = mix(roughnessFactor, 0.44, scarRWeight * 0.75);
        roughnessFactor = mix(roughnessFactor, 0.072, uLightningCloak * 0.88);
        roughnessFactor = clamp(roughnessFactor, 0.068, 0.96);`
      )
      .replace(
        '#include <metalnessmap_fragment>',
        `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.92, uLightningCloak * 0.88);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#ifdef USE_NORMALMAP_OBJECTSPACE
          normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
          #ifdef FLIP_SIDED
            normal = - normal;
          #endif
          #ifdef DOUBLE_SIDED
            normal = normal * faceDirection;
          #endif
          normal = normalize( normalMatrix * normal );
        #elif defined( USE_NORMALMAP_TANGENTSPACE )
          vec3 mapNMacro = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
          vec3 mapNFine = texture2D( normalMap, vNormalMapUv * 2.85 ).xyz * 2.0 - 1.0;
          float nScaleDither = (noise3D(vObjPos * 10.5) - 0.5) * 0.34;
          float mScaleW = smoothstep(0.08, 0.96, vAnatomyData.x + nScaleDither);
          float scarW = clamp(vAnatomyData.y, 0.0, 1.0);
          vec2 scuteN = (vAnatomyData.x > 0.18 && !${isWingMembrane ? 'true' : 'false'})
            ? evalBlendedScuteHierarchy(vObjPos, vAnatomyData.x)
            : vec2(0.5, 0.0);
          vec3 blendedMapN = normalize(mix(
            vec3(mapNFine.xy * 0.90, max(mapNFine.z, 0.15)),
            vec3(mapNMacro.xy * 1.28, max(mapNMacro.z, 0.15)),
            mScaleW
          ));
          blendedMapN.xy *= (1.0 - scarW * 0.72);
          blendedMapN.xy *= normalScale * (1.0 - scuteN.y * 0.38);
          vec3 tbnN = tbn * blendedMapN;
          normal = dot(tbnN, tbnN) > 1e-8 ? normalize(tbnN) : normal;
          if (scuteN.y > 0.005 && !${isWingMembrane ? 'true' : 'false'}) {
            float plateBumpH = scuteN.x * scuteN.y * 0.013 * (1.0 - scarW * 0.8);
            vec3 dPdx = dFdx( -vViewPosition );
            vec3 dPdy = dFdy( -vViewPosition );
            vec3 r1 = cross( dPdy, normal );
            vec3 r2 = cross( normal, dPdx );
            float det = dot( dPdx, r1 );
            float signDet = det < 0.0 ? -1.0 : 1.0;
            vec3 surfGrad = signDet * ( dFdx( plateBumpH ) * r1 + dFdy( plateBumpH ) * r2 );
            vec3 pertPlate = abs( det ) * normal - surfGrad;
            normal = dot( pertPlate, pertPlate ) > 1e-12 ? normalize( pertPlate ) : normal;
          }
        #elif defined( USE_BUMPMAP )
          normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif`
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        float biolumZone = clamp(vAnatomyData.z, 0.0, 1.0);
        float memThin = clamp(vAnatomyData.w, 0.0, 1.0);

        ${
          isWingMembrane
            ? `
        // Subsurface backlighting through thin scalloped wing/fin patagium membranes
        vec3 viewDirW = normalize(cameraPosition - vWorldPositionCustom);
        float backSun = pow(clamp(dot(viewDirW, -normalize(uSunDir)), 0.0, 1.0), 3.2);
        float veinPattern = 0.65 + 0.35 * sin(vObjPos.x * 26.0 + noise3D(vObjPos * 7.0) * 4.5);
        totalEmissiveRadiance += uSunColor * vec3(0.42, 0.16, 0.08) * backSun * memThin * veinPattern * 0.55;
        `
            : ''
        }

        // 1. Alpha Dominance Glow (royal cyan-blue inside nostrils, dorsal spine cores & oral throat)
        if (uAlphaGlow > 0.001) {
          float pulse = 0.86 + 0.14 * sin(uTime * 4.2 - vObjPos.z * 2.4);
          vec3 alphaColor = mix(vec3(0.04, 0.42, 1.0), vec3(0.22, 0.86, 1.0), biolumZone);
          totalEmissiveRadiance += alphaColor * biolumZone * uAlphaGlow * 3.4 * pulse;
        }

        // 2. Hidden World Bioluminescent Cavern Markings (ornate glowing stripes & star-specks)
        if (uBiolumGlow > 0.001) {
          float stripeWave = sin(vObjPos.z * 11.5 + abs(vObjPos.x) * 8.5 + noise3D(vObjPos * 4.2) * 2.6);
          float stripeMask = smoothstep(0.72, 0.95, stripeWave) * smoothstep(0.05, 0.45, abs(vObjPos.x));
          float starSpecks = smoothstep(0.84, 0.96, noise3D(vObjPos * 24.0));
          float bioPattern = clamp(stripeMask * 0.75 + starSpecks * 0.65 + biolumZone * 0.55, 0.0, 1.0);
          vec3 bioCyan = mix(vec3(0.05, 0.38, 0.98), vec3(0.18, 0.92, 0.98), starSpecks);
          totalEmissiveRadiance += bioCyan * bioPattern * uBiolumGlow * 1.9;
        }

        // 3. Lightning-Cloak Branching Electric Arcs
        if (uLightningCloak > 0.001) {
          float arcA = abs(noise3D(vObjPos * 5.8 + vec3(0.0, uTime * 3.6, uTime * 2.1)) - 0.5);
          float arcB = abs(noise3D(vObjPos * 13.5 - vec3(uTime * 4.8, 0.0, uTime * 3.2)) - 0.5);
          float bolt = smoothstep(0.045, 0.004, arcA * 0.7 + arcB * 0.35);
          float flicker = 0.65 + 0.35 * sin(uTime * 31.0 + vObjPos.z * 9.0);
          totalEmissiveRadiance += vec3(0.48, 0.84, 1.85) * bolt * uLightningCloak * 4.2 * flicker;
        }`
      )
      .replace(
        '#include <dithering_fragment>',
        `#include <dithering_fragment>
        gl_FragColor.rgb = clamp(gl_FragColor.rgb, vec3(0.0), vec3(24.0));`
      );
  };
}

export function createToothlessMaterialSet(): ToothlessMaterialSet {
  const maps = generateToothlessScalePBRMaps(1024);
  const eyeMaterials = createToothlessEyeMaterials();

  const uniforms: ToothlessShaderUniforms = {
    uTime: { value: 0 },
    uAlphaGlow: { value: 0.08 }, // Subtle signature blue hint inside nostrils at rest (like 01-macro-face-eyes-scales.jpg)
    uBiolumGlow: { value: 0.0 },
    uLightningCloak: { value: 0.0 },
    uSunDir: { value: new THREE.Vector3(-0.55, 0.38, -0.74).normalize() },
    uSunColor: { value: new THREE.Color(0xffd2a1) },
  };

  // Primary Hybrid MoonRay x Live-Action Obsidian Scale Material
  const skinMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_ObsidianScales_PBR',
    color: new THREE.Color(0xffffff),
    map: maps.albedoMap,
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(1.28, 1.28),
    roughnessMap: maps.roughnessMap,
    roughness: 0.88,
    aoMap: maps.aoMap,
    aoMapIntensity: 0.88,
    metalness: 0.05,
    // Framestore 2025 "freshly-shed snake" blue-teal-violet thin-film iridescence
    iridescence: 0.62,
    iridescenceIOR: 1.40,
    iridescenceThicknessRange: [260, 470],
    iridescenceThicknessMap: maps.iridescenceThicknessMap,
    // Crisp satin keratin clearcoat + grazing midnight-slate sheen for muscular readability
    clearcoat: 0.34,
    clearcoatRoughness: 0.30,
    sheen: 0.44,
    sheenRoughness: 0.48,
    sheenColor: new THREE.Color(0x213f59),
    envMapIntensity: 1.48,
  });
  injectHybridDragonShader(skinMaterial, uniforms, false);

  // Double-sided aerodynamic patagium membrane (wings, pelvic glide fins, natural right tail fin)
  const wingMembraneMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_PatagiumMembrane_PBR',
    color: new THREE.Color(0xeef4fa),
    map: maps.albedoMap,
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.65, 0.65),
    roughnessMap: maps.roughnessMap,
    roughness: 0.96,
    aoMap: maps.aoMap,
    aoMapIntensity: 0.65,
    metalness: 0.02,
    iridescence: 0.38,
    iridescenceIOR: 1.36,
    iridescenceThicknessRange: [250, 430],
    iridescenceThicknessMap: maps.iridescenceThicknessMap,
    clearcoat: 0.18,
    clearcoatRoughness: 0.44,
    sheen: 0.42,
    sheenRoughness: 0.58,
    sheenColor: new THREE.Color(0x1e2e40),
    side: THREE.DoubleSide,
    envMapIntensity: 1.25,
  });
  injectHybridDragonShader(wingMembraneMaterial, uniforms, true);

  // Option A: Hiccup's Hidden World Fireproof Night-Fury-Scale-Paste Prosthetic Fin Material
  const prostheticPasteMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_ProstheticScalePaste_PBR',
    color: new THREE.Color(0x12161c),
    normalMap: maps.prostheticPasteNormalMap,
    normalScale: new THREE.Vector2(0.95, 0.95),
    roughnessMap: maps.prostheticPasteRoughnessMap,
    roughness: 0.46,
    metalness: 0.14,
    iridescence: 0.46,
    iridescenceIOR: 1.4,
    iridescenceThicknessRange: [270, 440],
    clearcoat: 0.42,
    clearcoatRoughness: 0.28,
    side: THREE.DoubleSide,
    envMapIntensity: 1.35,
  });
  injectHybridDragonShader(prostheticPasteMaterial, uniforms, false);

  // Forged Viking Bronze/Brass & Dark Iron for Prosthetic Collar, Push-Rod Linkage & Hinges
  const prostheticBronzeMaterial = new THREE.MeshStandardMaterial({
    name: 'Toothless_VikingBronze_PBR',
    color: new THREE.Color(0xb88b4a),
    metalness: 0.88,
    roughness: 0.33,
    envMapIntensity: 1.45,
  });

  const prostheticIronMaterial = new THREE.MeshStandardMaterial({
    name: 'Toothless_ForgedIron_PBR',
    color: new THREE.Color(0x282c32),
    metalness: 0.82,
    roughness: 0.42,
    envMapIntensity: 1.3,
  });

  // Blunt worn obsidian-keratin dragon claws (4 per paw)
  const clawMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_ObsidianClaws_PBR',
    color: new THREE.Color(0x14171c),
    roughness: 0.24,
    metalness: 0.08,
    clearcoat: 0.65,
    clearcoatRoughness: 0.2,
    envMapIntensity: 1.5,
  });

  // Retractable conical white Night Fury teeth
  const teethMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_RetractableTeeth_PBR',
    color: new THREE.Color(0xeae6dc),
    roughness: 0.16,
    metalness: 0.0,
    clearcoat: 0.85,
    clearcoatRoughness: 0.08,
    sheen: 0.2,
    sheenColor: new THREE.Color(0xd5e6f5),
    envMapIntensity: 1.2,
  });

  // Textured dark slate-plum Night Fury palatal rugae, alveolar gums & plasma-glowing pharynx!
  const oralGumMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_OralGums_PBR',
    color: new THREE.Color(0x281b26),
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.58, 0.58),
    roughnessMap: maps.roughnessMap,
    roughness: 0.42,
    metalness: 0.0,
    clearcoat: 0.68,
    clearcoatRoughness: 0.18,
    side: THREE.DoubleSide,
  });
  oralGumMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uAlphaGlow = uniforms.uAlphaGlow;
    shader.uniforms.uTime = uniforms.uTime;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 aAnatomyData;
        varying vec4 vAnatomyData;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vAnatomyData = aAnatomyData;`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uAlphaGlow;
        uniform float uTime;
        varying vec4 vAnatomyData;`
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        if (uAlphaGlow > 0.001) {
          float throatFire = clamp(vAnatomyData.z, 0.0, 1.0);
          float pulse = 0.84 + 0.16 * sin(uTime * 5.2);
          totalEmissiveRadiance += vec3(0.12, 0.68, 1.5) * throatFire * uAlphaGlow * 2.8 * pulse;
        }`
      );
  };

  // Textured lingual papillae & fleshy rose-slate articulated tongue
  const tongueMaterial = new THREE.MeshPhysicalMaterial({
    name: 'Toothless_Tongue_PBR',
    color: new THREE.Color(0x783e4d),
    normalMap: maps.normalMap,
    normalScale: new THREE.Vector2(0.68, 0.68),
    roughnessMap: maps.roughnessMap,
    roughness: 0.36,
    metalness: 0.0,
    clearcoat: 0.80,
    clearcoatRoughness: 0.14,
    sheen: 0.38,
    sheenColor: new THREE.Color(0xa66475),
  });

  return {
    maps,
    skinMaterial,
    wingMembraneMaterial,
    prostheticPasteMaterial,
    prostheticBronzeMaterial,
    prostheticIronMaterial,
    clawMaterial,
    teethMaterial,
    oralGumMaterial,
    tongueMaterial,
    eyeMaterials,
    uniforms,
  };
}
