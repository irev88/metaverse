import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export type QualityStageId = 1 | 2 | 3 | 4 | 5;

export interface QualityStageSpec {
  stage: QualityStageId;
  roman: string;
  label: string;
  subtitle: string;
  msaaSamples: number;
  shadowMapSize: number;
  bloomScale: number;
  anisotropy: number;
  computeScale: (nativeDpr: number) => number;
}

export const QUALITY_STAGES: readonly QualityStageSpec[] = [
  {
    stage: 1,
    roman: 'I',
    label: 'Whisper',
    subtitle: 'Featherlight 60 FPS',
    msaaSamples: 0,
    shadowMapSize: 1024,
    bloomScale: 0.55,
    anisotropy: 2,
    computeScale: (dpr) => Math.max(0.68, Math.min(dpr * 0.72, 0.95)),
  },
  {
    stage: 2,
    roman: 'II',
    label: 'Silk',
    subtitle: 'Balanced Native',
    msaaSamples: 2,
    shadowMapSize: 1536,
    bloomScale: 0.75,
    anisotropy: 4,
    computeScale: (dpr) => Math.min(Math.max(dpr * 0.95, 1.0), 1.30),
  },
  {
    stage: 3,
    roman: 'III',
    label: 'Clarity',
    subtitle: 'Enhanced HD',
    msaaSamples: 4,
    shadowMapSize: 2048,
    bloomScale: 0.92,
    anisotropy: 8,
    computeScale: (dpr) => Math.min(Math.max(dpr * 1.25, 1.42), 1.75),
  },
  {
    stage: 4,
    roman: 'IV',
    label: 'Cinema',
    subtitle: 'High-Fidelity 2K+',
    msaaSamples: 4,
    shadowMapSize: 3072,
    bloomScale: 1.0,
    anisotropy: 16,
    computeScale: (dpr) => Math.min(Math.max(dpr * 1.60, 2.0), 2.18),
  },
  {
    stage: 5,
    roman: 'V',
    label: 'Masterpiece',
    subtitle: 'Ultra SSAA + 8× MSAA',
    msaaSamples: 8,
    shadowMapSize: 4096,
    bloomScale: 1.25,
    anisotropy: 16,
    // Strictly exceeds the previous 2.0x maximum via true hardware + SSAA supersampling!
    computeScale: (dpr) => Math.min(Math.max(dpr * 2.0, 2.65), 3.0),
  },
];

export interface AppliedQualityMetrics {
  stage: QualityStageId;
  spec: QualityStageSpec;
  pixelRatio: number;
  renderWidth: number;
  renderHeight: number;
  msaaSamples: number;
  shadowMapSize: number;
}

export interface RenderQualityController {
  getCurrentStage: () => QualityStageId;
  getMetrics: () => AppliedQualityMetrics;
  setStage: (stage: QualityStageId) => AppliedQualityMetrics;
  handleResize: (cssWidth: number, cssHeight: number) => AppliedQualityMetrics;
  onChange: (listener: (metrics: AppliedQualityMetrics) => void) => void;
}

const STORAGE_KEY = 'our-world-quality-stage-v1';

export function getInitialQualityStage(): QualityStageId {
  try {
    const saved = window.localStorage?.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = Number(saved);
      if (parsed >= 1 && parsed <= 5) return parsed as QualityStageId;
    }
  } catch {
    // Ignore storage access errors in restricted iframes
  }
  return typeof window !== 'undefined' && window.innerWidth <= 780 ? 3 : 4;
}

export function createRenderQualityManager(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  composer: EffectComposer,
  bloomPass: UnrealBloomPass,
  sunLight: THREE.DirectionalLight,
  initialStage: QualityStageId = getInitialQualityStage()
): RenderQualityController {
  let currentStage: QualityStageId = initialStage;
  const listeners: Array<(m: AppliedQualityMetrics) => void> = [];

  const maxHwSamples = Math.max(0, renderer.capabilities.maxSamples || 4);
  const maxHwAniso = Math.max(1, renderer.capabilities.getMaxAnisotropy() || 4);
  const maxHwTexSize = Math.min(renderer.capabilities.maxTextureSize || 8192, 7680);

  const applyAnisotropyToScene = (targetAniso: number) => {
    const clampedAniso = Math.min(targetAniso, maxHwAniso);
    const seen = new Set<THREE.Texture>();
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.material) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const mat of mats) {
        const rec = mat as unknown as Record<string, unknown>;
        for (const key of [
          'map',
          'normalMap',
          'roughnessMap',
          'aoMap',
          'iridescenceThicknessMap',
          'emissiveMap',
        ]) {
          const tex = rec[key];
          if (tex instanceof THREE.Texture && !seen.has(tex)) {
            seen.add(tex);
            if (tex.anisotropy !== clampedAniso) {
              tex.anisotropy = clampedAniso;
              tex.needsUpdate = true;
            }
          }
        }
      }
    });
  };

  let latestMetrics: AppliedQualityMetrics = {
    stage: currentStage,
    spec: QUALITY_STAGES[currentStage - 1],
    pixelRatio: 1,
    renderWidth: 1920,
    renderHeight: 1080,
    msaaSamples: 4,
    shadowMapSize: 2048,
  };

  const applyInternal = (
    stage: QualityStageId,
    cssWidth: number,
    cssHeight: number,
    stageChanged: boolean
  ): AppliedQualityMetrics => {
    const spec = QUALITY_STAGES[stage - 1];
    const w = Math.max(1, Math.floor(cssWidth));
    const h = Math.max(1, Math.floor(cssHeight));
    const nativeDpr = Math.max(1, window.devicePixelRatio || 1);

    const rawScale = spec.computeScale(nativeDpr);
    const safeMaxScale = Math.min(maxHwTexSize / w, maxHwTexSize / h);
    const pixelRatio = Math.max(0.5, Math.min(rawScale, safeMaxScale));

    const rw = Math.max(1, Math.floor(w * pixelRatio));
    const rh = Math.max(1, Math.floor(h * pixelRatio));
    const samples = Math.min(spec.msaaSamples, maxHwSamples);

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(w, h);

    if (stageChanged || latestMetrics.msaaSamples !== samples) {
      const nextRT = new THREE.WebGLRenderTarget(rw, rh, {
        type: THREE.HalfFloatType,
        samples,
      });
      composer.reset(nextRT);
    }
    composer.setPixelRatio(pixelRatio);
    composer.setSize(w, h);

    const bloomW = Math.max(64, Math.floor(w * pixelRatio * spec.bloomScale * 0.5));
    const bloomH = Math.max(64, Math.floor(h * pixelRatio * spec.bloomScale * 0.5));
    bloomPass.resolution.set(bloomW, bloomH);

    if (
      sunLight.shadow.mapSize.width !== spec.shadowMapSize ||
      sunLight.shadow.mapSize.height !== spec.shadowMapSize
    ) {
      sunLight.shadow.mapSize.set(spec.shadowMapSize, spec.shadowMapSize);
      if (sunLight.shadow.map) {
        sunLight.shadow.map.dispose();
        sunLight.shadow.map = null;
      }
    }

    if (stageChanged) {
      applyAnisotropyToScene(spec.anisotropy);
    }

    latestMetrics = {
      stage,
      spec,
      pixelRatio,
      renderWidth: rw,
      renderHeight: rh,
      msaaSamples: samples,
      shadowMapSize: spec.shadowMapSize,
    };

    for (const fn of listeners) fn(latestMetrics);
    return latestMetrics;
  };

  // Apply initial stage immediately
  applyInternal(currentStage, window.innerWidth, window.innerHeight, true);

  return {
    getCurrentStage: () => currentStage,
    getMetrics: () => latestMetrics,
    setStage(stage: QualityStageId): AppliedQualityMetrics {
      const clamped = Math.max(1, Math.min(5, Math.round(stage))) as QualityStageId;
      const changed = clamped !== currentStage;
      currentStage = clamped;
      try {
        window.localStorage?.setItem(STORAGE_KEY, String(currentStage));
      } catch {
        // Ignore storage errors
      }
      return applyInternal(currentStage, window.innerWidth, window.innerHeight, changed || true);
    },
    handleResize(cssWidth: number, cssHeight: number): AppliedQualityMetrics {
      return applyInternal(currentStage, cssWidth, cssHeight, false);
    },
    onChange(listener: (metrics: AppliedQualityMetrics) => void): void {
      listeners.push(listener);
    },
  };
}
