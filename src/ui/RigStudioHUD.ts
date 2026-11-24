import * as THREE from 'three';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import {
  FlightSubjectMode,
  ToothlessFlightChoreographer,
} from '../character/FlightChoreographer';
import {
  TOOTHLESS_VIBE_PRESETS,
  ToothlessRigController,
  ToothlessRigState,
} from '../character/ToothlessRigController';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import {
  LIGHT_FURY_VIBE_PRESETS,
  LightFuryRigController,
  LightFuryRigState,
} from '../character/lightfury/LightFuryRigController';
import { LODLevel } from '../character/geometry/BodyAndHeadBuilder';
import {
  exportLightFuryAsGLB,
  exportToothlessAsGLB,
} from '../export/GlbAssetExporter';
import { WEATHER_PRESETS, WeatherPresetId } from '../world/NordicAtmosphere';
import { DEFAULT_OCEAN_PARAMS, OceanWaveParams } from '../world/NorthSeaOcean';
import {
  AppliedQualityMetrics,
  QUALITY_STAGES,
  QualityStageId,
  RenderQualityController,
} from '../world/RenderQualityManager';

export type ActiveDragonId = 'light-fury' | 'toothless';

export interface CameraBookmark {
  id: string;
  label: string;
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export const CAMERA_BOOKMARKS: CameraBookmark[] = [
  {
    id: 'twin-pair',
    label: 'Twin Furies Perch',
    position: new THREE.Vector3(0.05, 2.75, 11.40),
    target: new THREE.Vector3(0.0, 0.98, -0.12),
  },
  {
    id: 'light-fury-hero',
    label: 'Light Fury 3/4',
    position: new THREE.Vector3(-6.85, 1.68, 3.15),
    target: new THREE.Vector3(-4.42, 1.00, 0.25),
  },
  {
    id: 'light-fury-face',
    label: 'Light Fury Portrait',
    position: new THREE.Vector3(-3.65, 1.64, 2.38),
    target: new THREE.Vector3(-4.22, 1.50, 1.55),
  },
  {
    id: 'toothless-hero',
    label: 'Toothless 3/4',
    position: new THREE.Vector3(7.15, 1.82, 3.68),
    target: new THREE.Vector3(4.42, 1.06, 0.55),
  },
  {
    id: 'toothless-paws-scales',
    label: 'Scales & Claws Study',
    position: new THREE.Vector3(6.15, 0.96, 2.95),
    target: new THREE.Vector3(4.52, 0.62, 1.25),
  },
  {
    id: 'waterfall-islands',
    label: 'Waterfall Double-Isle',
    position: new THREE.Vector3(14.5, 8.2, 16.0),
    target: new THREE.Vector3(-56.0, -1.5, -28.0),
  },
  {
    id: 'sea-arch-drangar',
    label: 'Sea-Arch & Clett',
    position: new THREE.Vector3(28.0, 5.4, 2.5),
    target: new THREE.Vector3(54.5, -1.8, 20.5),
  },
  {
    id: 'crescent-lagoon',
    label: 'Crescent Lagoon',
    position: new THREE.Vector3(24.0, 38.0, -12.0),
    target: new THREE.Vector3(84.0, -6.0, 34.0),
  },
  {
    id: 'archipelago-aerial',
    label: 'Archipelago Panorama',
    position: new THREE.Vector3(18.0, 68.0, 108.0),
    target: new THREE.Vector3(-4.0, -4.0, -24.0),
  },
];

export interface RigStudioHUDCallbacks {
  quality: RenderQualityController;
  onSelectCameraBookmark: (bookmark: CameraBookmark) => void;
  onSelectWeatherPreset: (presetId: WeatherPresetId) => void;
  onSunElevationChange: (elevDeg: number) => void;
  onMistDensityChange: (mist: number) => void;
  onRainIntensityChange: (rain: number) => void;
  onWindStrengthChange: (wind: number) => void;
  onLightningFrequencyChange: (freq: number) => void;
  onTriggerLightningStrike: () => void;
  onOceanParamsChange: (patch: Partial<OceanWaveParams>) => void;
  onFlightResetCamera: () => void;
  onFlightSpeedChange: (speedMultiplier: number) => void;
  onToggleCursorGaze: (enabled: boolean) => void;
  onCaptureSnapshot: () => void;
  initialWeatherPreset: WeatherPresetId;
}

export interface RigStudioHUDInstance {
  updateTelemetry: (fps: number, activeLod: LODLevel) => void;
  updateFlightUI: () => void;
  syncControlsFromRig: () => void;
  showToast: (message: string) => void;
  triggerShutterFlash: () => void;
  clearActiveCameraBookmark: () => void;
}

function syncSliderFill(input: HTMLInputElement): void {
  const min = parseFloat(input.min || '0');
  const max = parseFloat(input.max || '1');
  const val = parseFloat(input.value || '0');
  const pct = max > min ? ((val - min) / (max - min)) * 100 : 50;
  input.style.setProperty('--fill-pct', `${Math.max(0, Math.min(100, pct)).toFixed(1)}%`);
}

export function createRigStudioHUD(
  rootEl: HTMLElement,
  toothlessAsset: ToothlessCharacterAsset,
  toothlessController: ToothlessRigController,
  lightFuryAsset: LightFuryCharacterAsset,
  lightFuryController: LightFuryRigController,
  flightChoreographer: ToothlessFlightChoreographer,
  callbacks: RigStudioHUDCallbacks
): RigStudioHUDInstance {
  let hudHidden = false;
  let drawerCollapsed = window.innerWidth <= 780;
  let cursorGazeEnabled = true;
  let flightSpeed = 1.0;
  let activeDragon: ActiveDragonId = 'light-fury';
  let toastTimer: number | null = null;

  rootEl.classList.toggle('drawer-collapsed', drawerCollapsed);

  const totalBones = toothlessAsset.rig.bones.length + lightFuryAsset.rig.bones.length;

  // Subtle Editorial Toast + Camera Shutter Flash
  const toastEl = document.createElement('div');
  toastEl.className = 'hud-toast';
  rootEl.appendChild(toastEl);

  const shutterEl = document.createElement('div');
  shutterEl.className = 'shutter-flash';
  rootEl.appendChild(shutterEl);

  const showToast = (msg: string) => {
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    if (toastTimer !== null) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2200);
  };

  const triggerShutterFlash = () => {
    shutterEl.classList.add('flash');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        shutterEl.classList.remove('flash');
      });
    });
  };

  // Editorial Masthead + Studio Utility Bar
  const initQM = callbacks.quality.getMetrics();
  const header = document.createElement('div');
  header.className = 'hud-header';
  header.innerHTML = `
    <div class="brand-card hud-collapsible">
      <div class="brand-eyebrow">Night Fury &#9825; Light Fury &middot; 62&deg;N</div>
      <div class="brand-title-row">
        <span class="brand-dot"></span>
        <span class="brand-title">Our <em>World</em></span>
      </div>
      <div class="brand-subtitle">Sanctuary &amp; Atelier &middot; ${totalBones} Bones</div>
    </div>
    <div class="telemetry-row">
      <div class="telemetry-pill hud-collapsible" id="tel-fps"><strong>60</strong> FPS</div>
      <div class="telemetry-pill hud-collapsible" id="tel-lod"><strong>LOD0</strong> &middot; 0 tris</div>
      <button class="telemetry-pill hud-collapsible is-active" id="btn-studio-quality" title="Cycle 5-Stage Render Resolution (I Whisper → V Masterpiece SSAA)">
        Clarity <strong id="tel-quality-roman">${initQM.spec.roman}</strong> &middot; <span id="tel-quality-res">${initQM.renderWidth}&times;${initQM.renderHeight}</span>
      </button>
      <button class="telemetry-pill hud-collapsible is-active" id="btn-cursor-gaze" title="Dragons Curiously Track Pointer When Perched [C]">
        Cursor Gaze <span class="kbd-hint">C</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-lightning-top" title="Summon Forked Sky-to-Sea Lightning &amp; Rolling Thunder [L]">
        &#9889; Thunder <span class="kbd-hint">L</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-photo" title="Capture UI-Free High-Resolution PNG Snapshot [P]">
        Snapshot <span class="kbd-hint">P</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-fullscreen" title="Toggle Immersive Fullscreen [F]">
        Fullscreen <span class="kbd-hint">F</span>
      </button>
      <button class="telemetry-pill hud-collapsible" id="btn-help" title="Navigation &amp; Keyboard Shortcuts [?]">
        Controls <span class="kbd-hint">?</span>
      </button>
      <button class="telemetry-pill hud-toggle-pill" id="btn-toggle-hud" title="Toggle Minimal Cinema View [H]">
        Cinema <span class="kbd-hint">H</span>
      </button>
    </div>
  `;
  rootEl.appendChild(header);

  const fpsEl = header.querySelector('#tel-fps') as HTMLElement;
  const lodEl = header.querySelector('#tel-lod') as HTMLElement;
  const studioQualityBtn = header.querySelector('#btn-studio-quality') as HTMLButtonElement;
  const telQualityRoman = header.querySelector('#tel-quality-roman') as HTMLElement;
  const telQualityRes = header.querySelector('#tel-quality-res') as HTMLElement;
  const gazeBtn = header.querySelector('#btn-cursor-gaze') as HTMLButtonElement;
  const lightningTopBtn = header.querySelector('#btn-lightning-top') as HTMLButtonElement;
  const photoBtn = header.querySelector('#btn-photo') as HTMLButtonElement;
  const fullscreenBtn = header.querySelector('#btn-fullscreen') as HTMLButtonElement;
  const helpBtn = header.querySelector('#btn-help') as HTMLButtonElement;
  const toggleBtn = header.querySelector('#btn-toggle-hud') as HTMLButtonElement;

  const fireManualLightning = () => {
    callbacks.onTriggerLightningStrike();
    showToast('⚡ Forked Lightning Strike & Rolling Thunder');
  };
  lightningTopBtn.addEventListener('click', fireManualLightning);

  // Floating Reopen Pill when Right Atelier Drawer is Collapsed
  const reopenDrawerBtn = document.createElement('button');
  reopenDrawerBtn.className = 'drawer-reopen-btn hud-collapsible';
  reopenDrawerBtn.title = 'Open Character & Atmosphere Atelier [Tab]';
  reopenDrawerBtn.innerHTML = `<span>Open Atelier</span><span class="kbd-hint">Tab</span>`;
  rootEl.appendChild(reopenDrawerBtn);

  const setDrawerCollapsed = (collapsed: boolean) => {
    drawerCollapsed = collapsed;
    rootEl.classList.toggle('drawer-collapsed', drawerCollapsed);
  };

  reopenDrawerBtn.addEventListener('click', () => setDrawerCollapsed(false));

  const toggleHUD = () => {
    hudHidden = !hudHidden;
    rootEl.classList.toggle('hud-hidden', hudHidden);
    toggleBtn.innerHTML = hudHidden
      ? 'Show UI <span class="kbd-hint">H</span>'
      : 'Cinema <span class="kbd-hint">H</span>';
  };
  toggleBtn.addEventListener('click', toggleHUD);

  const toggleCursorGaze = () => {
    cursorGazeEnabled = !cursorGazeEnabled;
    gazeBtn.classList.toggle('is-active', cursorGazeEnabled);
    callbacks.onToggleCursorGaze(cursorGazeEnabled);
    showToast(cursorGazeEnabled ? 'Interactive Cursor Gaze enabled' : 'Sculpted Manual Gaze locked');
  };
  gazeBtn.addEventListener('click', toggleCursorGaze);

  photoBtn.addEventListener('click', () => {
    callbacks.onCaptureSnapshot();
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };
  fullscreenBtn.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', () => {
    fullscreenBtn.classList.toggle('is-active', Boolean(document.fullscreenElement));
  });

  // Minimalist Controls & Keyboard Shortcuts Guide Modal
  const helpBackdrop = document.createElement('div');
  helpBackdrop.className = 'help-backdrop';
  helpBackdrop.innerHTML = `
    <div class="help-modal" role="dialog" aria-modal="true" aria-label="Controls and Shortcuts">
      <div class="help-modal-header">
        <div>
          <div class="help-modal-title">Portal Navigation &amp; Studio Shortcuts</div>
          <div class="help-modal-sub">Explore the archipelago, sculpt expressions, or launch twin flight</div>
        </div>
        <button class="help-close-btn" id="btn-help-close">Close [Esc]</button>
      </div>
      <div class="help-grid">
        <div class="help-item"><span>Orbit Camera</span><span class="help-keys"><span class="help-key">Left Drag</span></span></div>
        <div class="help-item"><span>Pan / Zoom</span><span class="help-keys"><span class="help-key">Right Drag</span><span class="help-key">Scroll</span></span></div>
        <div class="help-item"><span>Focus Any Point</span><span class="help-keys"><span class="help-key">Double-Click</span></span></div>
        <div class="help-item"><span>Free-Roam Fly</span><span class="help-keys"><span class="help-key">W A S D</span><span class="help-key">Q / E</span></span></div>
        <div class="help-item"><span>Fast Soar Boost</span><span class="help-keys"><span class="help-key">Shift</span></span></div>
        <div class="help-item"><span>Courtship Flight</span><span class="help-keys"><span class="help-key">Space</span></span></div>
        <div class="help-item"><span>Camera Views 1&ndash;9</span><span class="help-keys"><span class="help-key">1</span>&ndash;<span class="help-key">9</span></span></div>
        <div class="help-item"><span>Toggle Atelier Panel</span><span class="help-keys"><span class="help-key">Tab</span></span></div>
        <div class="help-item"><span>Cursor Gaze Follow</span><span class="help-keys"><span class="help-key">C</span></span></div>
        <div class="help-item"><span>Strike Lightning &amp; Thunder</span><span class="help-keys"><span class="help-key">L</span></span></div>
        <div class="help-item"><span>HD Photo Snapshot</span><span class="help-keys"><span class="help-key">P</span></span></div>
        <div class="help-item"><span>Fullscreen / Cinema</span><span class="help-keys"><span class="help-key">F</span><span class="help-key">H</span></span></div>
        <div class="help-item"><span>Reset Any Slider</span><span class="help-keys"><span class="help-key">Double-Click</span></span></div>
      </div>
      <div class="help-footer-tip">Touchscreens: 1-finger drag to orbit &middot; 2-finger pinch &amp; drag to zoom and pan &middot; double-tap to focus</div>
    </div>
  `;
  rootEl.appendChild(helpBackdrop);

  const toggleHelp = (force?: boolean) => {
    const next = force ?? !helpBackdrop.classList.contains('open');
    helpBackdrop.classList.toggle('open', next);
    helpBtn.classList.toggle('is-active', next);
  };
  helpBtn.addEventListener('click', () => toggleHelp());
  helpBackdrop.querySelector('#btn-help-close')!.addEventListener('click', () => toggleHelp(false));
  helpBackdrop.addEventListener('click', (e) => {
    if (e.target === helpBackdrop) toggleHelp(false);
  });

  // Full-Cycle Flight Showcase Transport Bar (with Slow-Motion 0.5x / 1.0x Toggle!)
  const flightBar = document.createElement('div');
  flightBar.className = 'flight-bar hud-collapsible';
  flightBar.innerHTML = `
    <button class="flight-play-btn" id="btn-flight-play" title="Play/Pause Courtship Flight [Space]">
      <span id="flight-play-icon">&#9654;</span>
      <span id="flight-play-text">Begin Courtship Flight</span>
    </button>
    <div class="flight-mode-pills" title="Choose Pair Duet or Solo Dragon Flight">
      <button class="flight-mode-pill active" data-fmode="duet">Pair Duet</button>
      <button class="flight-mode-pill" data-fmode="light-fury">Light Fury</button>
      <button class="flight-mode-pill" data-fmode="toothless">Toothless</button>
    </div>
    <button class="flight-sub-btn" id="btn-flight-reset" title="Return Both Dragons to Cliff Perch">
      &#8634; Perch
    </button>
    <div class="flight-timeline-col">
      <div class="flight-phase-row">
        <span class="flight-phase-label" id="flight-phase-label">Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown</span>
        <span class="flight-time-label" id="flight-time-label">0.0s / 25.0s</span>
      </div>
      <input type="range" id="flight-scrubber" min="0" max="1" step="0.002" value="0" />
    </div>
    <button class="flight-sub-btn" id="btn-flight-speed" title="Toggle 0.5x Slow-Motion Wingbeat Study vs. 1.0x Real-Time">
      1.0&times;
    </button>
    <button class="flight-sub-btn active" id="btn-flight-cam" title="Track Dragons Across the Sky (Orbit Remains Active)">
      Follow Cam
    </button>
    <button class="flight-sub-btn" id="btn-flight-loop" title="Loop Continuous Flight Cycles">
      Loop
    </button>
  `;
  rootEl.appendChild(flightBar);

  const playBtn = flightBar.querySelector('#btn-flight-play') as HTMLButtonElement;
  const playIcon = flightBar.querySelector('#flight-play-icon') as HTMLElement;
  const playText = flightBar.querySelector('#flight-play-text') as HTMLElement;
  const resetFlightBtn = flightBar.querySelector('#btn-flight-reset') as HTMLButtonElement;
  const phaseLabelEl = flightBar.querySelector('#flight-phase-label') as HTMLElement;
  const timeLabelEl = flightBar.querySelector('#flight-time-label') as HTMLElement;
  const scrubber = flightBar.querySelector('#flight-scrubber') as HTMLInputElement;
  const speedBtn = flightBar.querySelector('#btn-flight-speed') as HTMLButtonElement;
  const followCamBtn = flightBar.querySelector('#btn-flight-cam') as HTMLButtonElement;
  const loopBtn = flightBar.querySelector('#btn-flight-loop') as HTMLButtonElement;
  const flightModeBtns = Array.from(
    flightBar.querySelectorAll('.flight-mode-pill')
  ) as HTMLButtonElement[];

  let isScrubbing = false;

  const refreshFlightUI = () => {
    const info = flightChoreographer.getPhaseInfo();
    const activeRun = info.isPlaying && !info.isPaused;
    flightBar.classList.toggle('playing', activeRun);

    const idlePlayLabel =
      info.subjectMode === 'duet'
        ? 'Begin Courtship Flight'
        : info.subjectMode === 'light-fury'
          ? 'Fly Light Fury'
          : 'Fly Toothless';

    if (!info.isPlaying) {
      playIcon.innerHTML = '&#9654;';
      playText.textContent = idlePlayLabel;
      phaseLabelEl.innerHTML =
        info.subjectMode === 'duet'
          ? 'Twin Perch Ready &mdash; Takeoff, Sea Soar &amp; Touchdown'
          : 'Perched Ready &mdash; Solo Takeoff, Sea Soar &amp; Landing';
    } else if (info.isPaused) {
      playIcon.innerHTML = '&#9654;';
      playText.textContent = 'Resume Flight';
      phaseLabelEl.textContent = `${info.phaseLabel} (Paused)`;
    } else {
      playIcon.innerHTML = '&#10074;&#10074;';
      playText.textContent = 'Pause Flight';
      phaseLabelEl.textContent = info.phaseLabel;
    }

    timeLabelEl.textContent = `${info.elapsedSec.toFixed(1)}s / ${info.durationSec.toFixed(1)}s`;
    if (!isScrubbing) {
      scrubber.value = String(info.progress);
      syncSliderFill(scrubber);
    }
    followCamBtn.classList.toggle('active', info.followCamera);
    loopBtn.classList.toggle('active', info.loop);
    speedBtn.classList.toggle('active', flightSpeed < 0.99);
    speedBtn.innerHTML = `${flightSpeed.toFixed(1)}&times;`;
    flightModeBtns.forEach((b) =>
      b.classList.toggle('active', b.dataset.fmode === info.subjectMode)
    );
  };

  speedBtn.addEventListener('click', () => {
    flightSpeed = flightSpeed > 0.75 ? 0.5 : 1.0;
    callbacks.onFlightSpeedChange(flightSpeed);
    refreshFlightUI();
    showToast(flightSpeed < 0.75 ? '0.5× Slow-Motion Wingbeat Study' : '1.0× Natural Flight Speed');
  });

  flightModeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.fmode as FlightSubjectMode;
      flightChoreographer.setSubjectMode(mode);
      refreshFlightUI();
      syncAll();
    });
  });

  playBtn.addEventListener('click', () => {
    flightChoreographer.togglePlayPause();
    refreshFlightUI();
    syncAll();
  });

  resetFlightBtn.addEventListener('click', () => {
    flightChoreographer.stopAndResetToPerch();
    callbacks.onFlightResetCamera();
    refreshFlightUI();
    syncAll();
  });

  scrubber.addEventListener('pointerdown', () => {
    isScrubbing = true;
  });
  window.addEventListener('pointerup', () => {
    isScrubbing = false;
  });
  scrubber.addEventListener('input', () => {
    syncSliderFill(scrubber);
    flightChoreographer.scrubToProgress(parseFloat(scrubber.value));
    toothlessController.applyRigState(0);
    lightFuryController.applyRigState(0);
    refreshFlightUI();
    syncAll();
  });

  followCamBtn.addEventListener('click', () => {
    flightChoreographer.followCamera = !flightChoreographer.followCamera;
    refreshFlightUI();
  });

  loopBtn.addEventListener('click', () => {
    flightChoreographer.loop = !flightChoreographer.loop;
    refreshFlightUI();
  });

  // Curated Camera Bookmarks Carousel Bar ([1] - [9])
  const camBar = document.createElement('div');
  camBar.className = 'camera-bar hud-collapsible';
  const camButtons: HTMLButtonElement[] = [];

  const selectBookmarkByIndex = (idx: number) => {
    const bm = CAMERA_BOOKMARKS[idx];
    if (!bm) return;
    if (flightChoreographer.isPlaying) {
      flightChoreographer.stopAndResetToPerch();
      refreshFlightUI();
      syncAll();
    }
    camButtons.forEach((b, i) => b.classList.toggle('active', i === idx));
    camButtons[idx]?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    if (bm.id.startsWith('light-fury')) {
      setActiveDragonTab('light-fury');
    } else if (bm.id.startsWith('toothless')) {
      setActiveDragonTab('toothless');
    }
    callbacks.onSelectCameraBookmark(bm);
  };

  CAMERA_BOOKMARKS.forEach((bm, idx) => {
    const btn = document.createElement('button');
    btn.className = `cam-btn${idx === 0 ? ' active' : ''}`;
    btn.title = `${bm.label} [Hotkey ${idx + 1}]`;
    btn.innerHTML = `<span class="cam-btn-idx">${idx + 1}</span><span>${bm.label}</span>`;
    btn.addEventListener('click', () => selectBookmarkByIndex(idx));
    camButtons.push(btn);
    camBar.appendChild(btn);
  });
  rootEl.appendChild(camBar);

  // Global Portal Keyboard Shortcuts
  window.addEventListener('keydown', (ev) => {
    const activeTag = document.activeElement?.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

    if (ev.key === 'Escape' && helpBackdrop.classList.contains('open')) {
      toggleHelp(false);
      return;
    }
    if (ev.key === '?' || (ev.key === '/' && ev.shiftKey)) {
      ev.preventDefault();
      toggleHelp();
      return;
    }
    if (ev.key === 'Tab') {
      ev.preventDefault();
      setDrawerCollapsed(!drawerCollapsed);
      return;
    }
    if (ev.key === 'h' || ev.key === 'H') {
      toggleHUD();
    } else if (ev.key === 'c' || ev.key === 'C') {
      toggleCursorGaze();
    } else if (ev.key === 'l' || ev.key === 'L') {
      fireManualLightning();
    } else if (ev.key === 'p' || ev.key === 'P') {
      callbacks.onCaptureSnapshot();
    } else if (ev.key === 'f' || ev.key === 'F') {
      toggleFullscreen();
    } else if (ev.code === 'Space') {
      ev.preventDefault();
      flightChoreographer.togglePlayPause();
      refreshFlightUI();
      syncAll();
    } else if (ev.key >= '1' && ev.key <= '9' && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
      const idx = parseInt(ev.key, 10) - 1;
      if (idx >= 0 && idx < CAMERA_BOOKMARKS.length) {
        selectBookmarkByIndex(idx);
      }
    }
  });

  // Right Editorial Collapsible Atelier Drawer
  const drawer = document.createElement('aside');
  drawer.className = 'rig-drawer hud-collapsible';
  drawer.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-title-group">
        <span class="drawer-eyebrow">Sculpt &amp; Atmosphere</span>
        <span class="drawer-title">Character Atelier</span>
      </div>
      <div class="drawer-header-actions">
        <button class="drawer-reset-btn" id="btn-reset-pose" title="Reset Both Dragons &amp; Camera">Reset</button>
        <button class="drawer-collapse-btn" id="btn-collapse-drawer" title="Collapse Atelier Panel [Tab]">Hide &#10095;</button>
      </div>
    </div>
    <div class="moments-strip">
      <div class="moments-strip-label">Curated Scene Moments</div>
      <div class="moments-grid" id="moments-grid"></div>
    </div>
    <div class="dragon-switcher">
      <button class="dragon-tab-btn light-fury active" id="tab-light-fury">
        <span class="dragon-tab-dot lf"></span>
        <span>Light Fury</span>
      </button>
      <button class="dragon-tab-btn toothless" id="tab-toothless">
        <span class="dragon-tab-dot nf"></span>
        <span>Toothless</span>
      </button>
    </div>
    <div class="drawer-scroll" id="drawer-scroll">
      <div id="panel-light-fury"></div>
      <div id="panel-toothless" style="display: none;"></div>
      <div id="panel-shared-world"></div>
    </div>
  `;
  rootEl.appendChild(drawer);

  drawer.querySelector('#btn-collapse-drawer')!.addEventListener('click', () => {
    setDrawerCollapsed(true);
  });

  const momentsGrid = drawer.querySelector('#moments-grid') as HTMLElement;
  const tabLightFury = drawer.querySelector('#tab-light-fury') as HTMLButtonElement;
  const tabToothless = drawer.querySelector('#tab-toothless') as HTMLButtonElement;
  const panelLightFury = drawer.querySelector('#panel-light-fury') as HTMLElement;
  const panelToothless = drawer.querySelector('#panel-toothless') as HTMLElement;
  const panelSharedWorld = drawer.querySelector('#panel-shared-world') as HTMLElement;

  function setActiveDragonTab(which: ActiveDragonId): void {
    activeDragon = which;
    tabLightFury.classList.toggle('active', which === 'light-fury');
    tabToothless.classList.toggle('active', which === 'toothless');
    panelLightFury.style.display = which === 'light-fury' ? 'block' : 'none';
    panelToothless.style.display = which === 'toothless' ? 'block' : 'none';
  }

  tabLightFury.addEventListener('click', () => setActiveDragonTab('light-fury'));
  tabToothless.addEventListener('click', () => setActiveDragonTab('toothless'));

  const sliderRegistry: Array<() => void> = [];

  function createSectionIn(
    container: HTMLElement,
    title: string,
    initiallyOpen = false
  ): HTMLElement {
    const sec = document.createElement('div');
    sec.className = `accordion-section${initiallyOpen ? ' open' : ''}`;
    const hdr = document.createElement('button');
    hdr.className = 'accordion-header';
    hdr.innerHTML = `<span>${title}</span><span class="accordion-chevron">&#9662;</span>`;

    const collapseWrap = document.createElement('div');
    collapseWrap.className = 'accordion-collapse';
    const collapseInner = document.createElement('div');
    collapseInner.className = 'accordion-collapse-inner';
    const body = document.createElement('div');
    body.className = 'accordion-body';

    collapseInner.appendChild(body);
    collapseWrap.appendChild(collapseInner);

    hdr.addEventListener('click', () => {
      sec.classList.toggle('open');
    });
    sec.appendChild(hdr);
    sec.appendChild(collapseWrap);
    container.appendChild(sec);
    return body;
  }

  function addGenericSlider<T extends object>(
    parent: HTMLElement,
    label: string,
    stateObj: T,
    applyPatch: (patch: Partial<T>) => void,
    key: keyof T,
    min: number,
    max: number,
    step = 0.01,
    syncOnChange = false
  ): void {
    const defaultVal = Number(stateObj[key]);
    const row = document.createElement('div');
    row.className = 'control-row';
    row.title = 'Double-click slider to reset';
    const valSpan = document.createElement('span');
    valSpan.className = 'control-val';
    const labelLine = document.createElement('div');
    labelLine.className = 'control-label-line';
    const titleSpan = document.createElement('span');
    titleSpan.textContent = label;
    labelLine.appendChild(titleSpan);
    labelLine.appendChild(valSpan);

    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(min);
    input.max = String(max);
    input.step = String(step);

    const refresh = () => {
      const v = Number(stateObj[key]);
      input.value = String(v);
      valSpan.textContent = v.toFixed(2);
      syncSliderFill(input);
    };
    refresh();
    sliderRegistry.push(refresh);

    input.addEventListener('input', () => {
      if (flightChoreographer.isPlaying && !flightChoreographer.isPaused) {
        flightChoreographer.isPaused = true;
        refreshFlightUI();
      }
      const num = parseFloat(input.value);
      applyPatch({ [key]: num } as unknown as Partial<T>);
      valSpan.textContent = num.toFixed(2);
      syncSliderFill(input);
      if (syncOnChange) {
        syncAll();
      }
    });

    input.addEventListener('dblclick', () => {
      applyPatch({ [key]: defaultVal } as unknown as Partial<T>);
      refresh();
      if (syncOnChange) syncAll();
      showToast(`Reset ${label}`);
    });

    row.appendChild(labelLine);
    row.appendChild(input);
    parent.appendChild(row);
  }

  function addGenericToggle<T extends object>(
    parent: HTMLElement,
    label: string,
    stateObj: T,
    applyPatch: (patch: Partial<T>) => void,
    key: keyof T
  ): void {
    const row = document.createElement('label');
    row.className = 'toggle-row';
    const span = document.createElement('span');
    span.textContent = label;
    const chk = document.createElement('input');
    chk.type = 'checkbox';

    const refresh = () => {
      chk.checked = Boolean(stateObj[key]);
    };
    refresh();
    sliderRegistry.push(refresh);

    chk.addEventListener('change', () => {
      applyPatch({ [key]: chk.checked } as unknown as Partial<T>);
      syncAll();
    });

    row.appendChild(span);
    row.appendChild(chk);
    parent.appendChild(row);
  }

  // ============================================================================
  // A. LIGHT FURY CUSTOMIZER PANEL
  // ============================================================================
  const lfVibesSec = createSectionIn(panelLightFury, 'Light Fury Moods & Expressions', true);
  const lfVibeGrid = document.createElement('div');
  lfVibeGrid.className = 'weather-grid';
  const lfVibeBtns: HTMLButtonElement[] = [];

  LIGHT_FURY_VIBE_PRESETS.forEach((vp, idx) => {
    const btn = document.createElement('button');
    btn.className = `weather-btn${idx === 0 ? ' active' : ''}`;
    btn.innerHTML = `
      <span class="weather-btn-title">${vp.label}</span>
      <span class="weather-btn-sub">${vp.subtitle}</span>
    `;
    btn.addEventListener('click', () => {
      if (flightChoreographer.isPlaying) {
        flightChoreographer.stopAndResetToPerch();
        refreshFlightUI();
      }
      lfVibeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      lightFuryController.setState(vp.patch);
      syncAll();
    });
    lfVibeBtns.push(btn);
    lfVibeGrid.appendChild(btn);
  });
  lfVibesSec.appendChild(lfVibeGrid);

  const addLFSlider = (
    parent: HTMLElement,
    label: string,
    key: keyof LightFuryRigState,
    min: number,
    max: number,
    step = 0.01,
    syncOnChange = false
  ) =>
    addGenericSlider(
      parent,
      label,
      lightFuryController.state,
      (p) => lightFuryController.setState(p),
      key,
      min,
      max,
      step,
      syncOnChange
    );

  const addLFToggle = (parent: HTMLElement, label: string, key: keyof LightFuryRigState) =>
    addGenericToggle(
      parent,
      label,
      lightFuryController.state,
      (p) => lightFuryController.setState(p),
      key
    );

  const lfSecFX = createSectionIn(panelLightFury, 'I. Bioluminescence, Shimmer & Cloak', true);
  addLFSlider(lfSecFX, 'Hidden World Neon Bioluminescence', 'biolumGlow', 0, 1);
  addLFSlider(lfSecFX, 'Thermal-Mirror Optical Cloak', 'thermalCloak', 0, 1);
  addLFSlider(lfSecFX, 'Stardust Glimmer & Opal Sheen', 'iridescentShimmer', 0, 1);
  addLFSlider(lfSecFX, 'Radiant Partly-Glowing Skin', 'radiantGlow', 0, 1);
  addLFSlider(lfSecFX, 'Underwing Rose & Ice Countershade', 'pastelTint', 0, 1);
  addLFSlider(lfSecFX, 'Orchid-Cyan Plasma Charge', 'plasmaGlow', 0, 1);

  const lfSecHead = createSectionIn(panelLightFury, 'II. Gaze, Ears & Expression', false);
  addLFSlider(lfSecHead, 'Pupil Dilation (Slit ↔ Wide)', 'pupilDilation', 0, 1);
  addLFSlider(lfSecHead, 'Curious Head-Tilt (Roll)', 'headRoll', -1, 1);
  addLFSlider(lfSecHead, 'Head Yaw (Swan-Neck Coupled)', 'headYaw', -1, 1);
  addLFSlider(lfSecHead, 'Head Pitch', 'headPitch', -1, 1);
  addLFSlider(lfSecHead, 'Eye Gaze Horizontal', 'eyeYaw', -1, 1);
  addLFSlider(lfSecHead, 'Eye Gaze Vertical', 'eyePitch', -1, 1);
  addLFSlider(lfSecHead, 'Affectionate Squint-Smile', 'squint', 0, 1);
  addLFSlider(lfSecHead, 'Almond Eyelid Blink', 'blink', 0, 1);
  addLFSlider(lfSecHead, 'Rounded Ear-Nubs Perk', 'earPerk', 0, 1);
  addLFSlider(lfSecHead, 'Ear Asymmetry', 'earAsymmetry', -1, 1);
  addLFSlider(lfSecHead, 'Temple Cheek Nubs', 'cheekNubFlare', 0, 1);

  const lfSecJaw = createSectionIn(panelLightFury, 'III. Smile, Retractable Fangs & Tongue', false);
  addLFSlider(lfSecJaw, 'Jaw Open', 'jawOpen', 0, 1);
  addLFSlider(lfSecJaw, 'Retractable Teeth (Gums ↔ Fangs)', 'teethExtension', 0, 1);
  addLFSlider(lfSecJaw, 'Pink Tongue Extend', 'tongueExtend', 0, 1);
  addLFSlider(lfSecJaw, 'Tongue Curl', 'tongueCurl', -1, 1);

  const lfQuickFangBtn = document.createElement('button');
  lfQuickFangBtn.className = 'action-btn secondary';
  lfQuickFangBtn.textContent = 'Toggle Soft Gums vs. Strike Fangs';
  let lfFangActive = false;
  lfQuickFangBtn.addEventListener('click', () => {
    lfFangActive = !lfFangActive;
    if (lfFangActive) {
      lightFuryController.setState({
        jawOpen: 0.68,
        teethExtension: 1.0,
        pupilDilation: 0.10,
        squint: 0.36,
        earPerk: 0.14,
      });
    } else {
      lightFuryController.setState({
        jawOpen: 0.26,
        teethExtension: 0.0,
        pupilDilation: 0.92,
        squint: 0.24,
        earPerk: 0.90,
      });
    }
    syncAll();
  });
  lfSecJaw.appendChild(lfQuickFangBtn);

  const lfSecWings = createSectionIn(panelLightFury, 'IV. Scalloped Wings, Veil & Sail', false);
  addLFSlider(lfSecWings, 'Coy Wing-Veil Drape', 'coyWingVeil', 0, 1);
  addLFSlider(lfSecWings, 'Wing Unfurl (Cape ↔ 7.80m Span)', 'wingUnfurl', 0, 1);
  addLFSlider(lfSecWings, 'Wing Flap Elevation', 'wingFlap', -1, 1);
  addLFSlider(lfSecWings, 'Wing Forward/Dive Sweep', 'wingSweep', -1, 1);
  addLFSlider(lfSecWings, 'Airfoil Camber', 'wingCamber', 0, 1);
  addLFSlider(lfSecWings, 'Pelvic Glide Flukes', 'pelvicFinFlare', 0, 1);
  addLFSlider(lfSecWings, 'Continuous Dorsal Sail Flex', 'dorsalSailFlex', 0, 1);

  const lfSecTail = createSectionIn(panelLightFury, 'V. Symmetrical Heart-Tail Flukes', false);
  addLFToggle(lfSecTail, 'Sync Heart-Tail Lobes', 'syncHeartTailFlukes');
  addLFSlider(lfSecTail, 'Right Heart-Lobe Fold', 'rightHeartFinFlare', -1, 1, 0.01, true);
  addLFSlider(lfSecTail, 'Left Heart-Lobe Fold', 'leftHeartFinFlare', -1, 1, 0.01, true);
  addLFSlider(lfSecTail, 'Tail Horizontal Sweep', 'tailYaw', -1, 1);
  addLFSlider(lfSecTail, 'Tail Vertical Lift', 'tailPitch', -1, 1);
  addLFSlider(lfSecTail, 'Feline Tail Curl', 'tailCurl', -1, 1);

  const lfSecBody = createSectionIn(panelLightFury, 'VI. Stance, 4-Paw IK & Flight Legs', false);
  addLFSlider(lfSecBody, 'Foreleg Crouch ↔ Proud Lift', 'forelegStance', -1, 1);
  addLFSlider(lfSecBody, 'Hindleg Crouch ↔ Tall Haunches', 'hindlegStance', -1, 1);
  addLFSlider(lfSecBody, 'Crawl / Prowl Stride (4-Paw IK)', 'limbStride', -1, 1);
  addLFSlider(lfSecBody, 'Flight Leg Posture (Reach ↔ Swept)', 'legFlightTuck', -1, 1);
  addLFSlider(lfSecBody, 'Swan Neck Arch', 'neckArch', -1, 1);
  addLFSlider(lfSecBody, 'Neck Turn', 'neckYaw', -1, 1);
  addLFSlider(lfSecBody, 'Spine Arch', 'spineArch', -1, 1);
  addLFSlider(lfSecBody, 'Spine Twist', 'spineTwist', -1, 1);
  addLFToggle(lfSecBody, 'Living Idle (Purr & Natural Blinks)', 'subtleBreathing');

  // ============================================================================
  // B. TOOTHLESS CUSTOMIZER PANEL
  // ============================================================================
  const nfVibesSec = createSectionIn(panelToothless, 'Toothless Moods & Expressions', true);
  const nfVibeGrid = document.createElement('div');
  nfVibeGrid.className = 'weather-grid';
  const nfVibeBtns: HTMLButtonElement[] = [];

  TOOTHLESS_VIBE_PRESETS.forEach((vp, idx) => {
    const btn = document.createElement('button');
    btn.className = `weather-btn${idx === 0 ? ' active' : ''}`;
    btn.innerHTML = `
      <span class="weather-btn-title">${vp.label}</span>
      <span class="weather-btn-sub">${vp.subtitle}</span>
    `;
    btn.addEventListener('click', () => {
      if (flightChoreographer.isPlaying) {
        flightChoreographer.stopAndResetToPerch();
        refreshFlightUI();
      }
      nfVibeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      toothlessController.setState(vp.patch);
      syncAll();
    });
    nfVibeBtns.push(btn);
    nfVibeGrid.appendChild(btn);
  });
  nfVibesSec.appendChild(nfVibeGrid);

  const addNFSlider = (
    parent: HTMLElement,
    label: string,
    key: keyof ToothlessRigState,
    min: number,
    max: number,
    step = 0.01,
    syncOnChange = false
  ) =>
    addGenericSlider(
      parent,
      label,
      toothlessController.state,
      (p) => toothlessController.setState(p),
      key,
      min,
      max,
      step,
      syncOnChange
    );

  const addNFToggle = (parent: HTMLElement, label: string, key: keyof ToothlessRigState) =>
    addGenericToggle(
      parent,
      label,
      toothlessController.state,
      (p) => toothlessController.setState(p),
      key
    );

  const secFX = createSectionIn(panelToothless, 'I. Alpha Bioluminescence & Lightning', true);
  addNFSlider(secFX, 'Alpha Blue Plasma Glow', 'alphaGlow', 0, 1);
  addNFSlider(secFX, 'Cavern Bioluminescent Markings', 'biolumGlow', 0, 1);
  addNFSlider(secFX, 'Lightning-Cloak Mirror Arcs', 'lightningCloak', 0, 1);

  const secHead = createSectionIn(panelToothless, 'II. Head, Ear-Plates & Emerald Eyes', false);
  addNFSlider(secHead, 'Pupil Dilation (Slit ↔ Wide)', 'pupilDilation', 0, 1);
  addNFSlider(secHead, 'Head Yaw (Cervical Coupled)', 'headYaw', -1, 1);
  addNFSlider(secHead, 'Head Pitch', 'headPitch', -1, 1);
  addNFSlider(secHead, 'Curious Head Roll', 'headRoll', -1, 1);
  addNFSlider(secHead, 'Eye Gaze Horizontal', 'eyeYaw', -1, 1);
  addNFSlider(secHead, 'Eye Gaze Vertical', 'eyePitch', -1, 1);
  addNFSlider(secHead, 'Palpebral Eyelid Blink', 'blink', 0, 1);
  addNFSlider(secHead, 'Focus Squint', 'squint', 0, 1);
  addNFSlider(secHead, 'Primary Ear-Plates Perk', 'earPerk', 0, 1);
  addNFSlider(secHead, 'Ear-Plate Asymmetry', 'earAsymmetry', -1, 1);
  addNFSlider(secHead, 'Secondary Cheek Nubs', 'cheekNubFlare', 0, 1);

  const secJaw = createSectionIn(panelToothless, 'III. Jaw, Retractable Teeth & Tongue', false);
  addNFSlider(secJaw, 'Jaw Open', 'jawOpen', 0, 1);
  addNFSlider(secJaw, 'Retractable Teeth (Gums ↔ Fangs)', 'teethExtension', 0, 1);
  addNFSlider(secJaw, 'Tongue Extend', 'tongueExtend', 0, 1);
  addNFSlider(secJaw, 'Tongue Curl', 'tongueCurl', -1, 1);

  const quickFangBtn = document.createElement('button');
  quickFangBtn.className = 'action-btn secondary';
  quickFangBtn.textContent = 'Toggle "Toothless" Gums vs. Fangs';
  let fangDemoActive = false;
  quickFangBtn.addEventListener('click', () => {
    fangDemoActive = !fangDemoActive;
    if (fangDemoActive) {
      toothlessController.setState({ jawOpen: 0.72, teethExtension: 1.0, pupilDilation: 0.14, squint: 0.32 });
    } else {
      toothlessController.setState({ jawOpen: 0.36, teethExtension: 0.0, pupilDilation: 0.85, squint: 0.0 });
    }
    syncAll();
  });
  secJaw.appendChild(quickFangBtn);

  const secWings = createSectionIn(panelToothless, 'IV. Wings, Fins & Flush V-Spines', false);
  addNFSlider(secWings, 'Wing Unfurl (Cape ↔ 8.56m Span)', 'wingUnfurl', 0, 1);
  addNFSlider(secWings, 'Wing Flap Elevation', 'wingFlap', -1, 1);
  addNFSlider(secWings, 'Wing Forward/Dive Sweep', 'wingSweep', -1, 1);
  addNFSlider(secWings, 'Phalangeal Airfoil Camber', 'wingCamber', 0, 1);
  addNFSlider(secWings, 'Pelvic 3-Spar Glide Fins', 'pelvicFinFlare', 0, 1);
  addNFSlider(secWings, 'Dorsal V-Spine Split', 'dorsalSpineSplit', 0, 1);

  const secTail = createSectionIn(panelToothless, 'V. Prosthetic Tail & Mechanics', false);
  addNFToggle(secTail, 'Auto-Sync Left Prosthetic Linkage', 'autoSyncProstheticTail');
  addNFSlider(secTail, 'Left Prosthetic Fin Fold', 'leftProstheticFinFlare', -1, 1, 0.01, true);
  addNFSlider(secTail, 'Right Biological Fin Fold', 'rightTailFinFlare', -1, 1, 0.01, true);
  addNFSlider(secTail, 'Tail Horizontal Sweep', 'tailYaw', -1, 1);
  addNFSlider(secTail, 'Tail Vertical Lift', 'tailPitch', -1, 1);
  addNFSlider(secTail, 'Distal Tail Whip Curl', 'tailCurl', -1, 1);

  const secBody = createSectionIn(panelToothless, 'VI. Stance, 4-Paw IK & Flight Legs', false);
  addNFSlider(secBody, 'Foreleg Crouch ↔ Proud Lift', 'forelegStance', -1, 1);
  addNFSlider(secBody, 'Hindleg Crouch ↔ Tall Haunches', 'hindlegStance', -1, 1);
  addNFSlider(secBody, 'Crawl / Prowl Stride (4-Paw IK)', 'limbStride', -1, 1);
  addNFSlider(secBody, 'Flight Leg Posture (Reach ↔ Swept)', 'legFlightTuck', -1, 1);
  addNFSlider(secBody, 'Neck Arch', 'neckArch', -1, 1);
  addNFSlider(secBody, 'Neck Turn', 'neckYaw', -1, 1);
  addNFSlider(secBody, 'Spine Arch', 'spineArch', -1, 1);
  addNFSlider(secBody, 'Spine Twist', 'spineTwist', -1, 1);
  addNFToggle(secBody, 'Living Idle (Breath, Blinks & Twitches)', 'subtleBreathing');

  // ============================================================================
  // C. SHARED WORLD, WEATHER, OCEAN SWELLS & DUAL .GLB EXPORT
  // ============================================================================
  const secWorld = createSectionIn(panelSharedWorld, 'Archipelago, Sky & North Sea', true);

  const weatherHeader = document.createElement('div');
  weatherHeader.className = 'control-label-line';
  const initPresetObj = WEATHER_PRESETS[callbacks.initialWeatherPreset] ?? WEATHER_PRESETS['golden-hour'];
  weatherHeader.innerHTML = `<span>Coastal Atmosphere</span><span class="control-val" id="weather-preset-desc">${initPresetObj.subtitle}</span>`;
  secWorld.appendChild(weatherHeader);
  const weatherDescSpan = weatherHeader.querySelector('#weather-preset-desc') as HTMLElement;

  const weatherGrid = document.createElement('div');
  weatherGrid.className = 'weather-grid';
  const weatherBtns: Array<{ id: WeatherPresetId; btn: HTMLButtonElement }> = [];

  const curOcean: OceanWaveParams = { ...DEFAULT_OCEAN_PARAMS };
  const oceanUIRefreshers: Array<() => void> = [];
  const seaBtns: HTMLButtonElement[] = [];

  const elevRow = document.createElement('div');
  elevRow.className = 'control-row';
  elevRow.innerHTML = `
    <div class="control-label-line">
      <span>Sun / Moon Elevation</span>
      <span class="control-val" id="elev-val">${initPresetObj.sunElevationDeg.toFixed(1)}&deg;</span>
    </div>
    <input type="range" id="elev-slider" min="2" max="55" step="0.5" value="${initPresetObj.sunElevationDeg}" />
  `;
  const elevSlider = elevRow.querySelector('#elev-slider') as HTMLInputElement;
  const elevVal = elevRow.querySelector('#elev-val') as HTMLElement;
  syncSliderFill(elevSlider);
  elevSlider.addEventListener('input', () => {
    const v = parseFloat(elevSlider.value);
    elevVal.textContent = `${v.toFixed(1)}°`;
    syncSliderFill(elevSlider);
    callbacks.onSunElevationChange(v);
  });

  const mistRow = document.createElement('div');
  mistRow.className = 'control-row';
  const toMistSlider = (d: number) => Math.min(1, Math.max(0, (d - 0.0006) / 0.0044));
  const fromMistSlider = (s: number) => 0.0006 + s * 0.0044;
  const initMistSlider = toMistSlider(initPresetObj.mistDensity);
  mistRow.innerHTML = `
    <div class="control-label-line">
      <span>Coastal Mist &amp; Horizon Veil</span>
      <span class="control-val" id="mist-val">${initMistSlider.toFixed(2)}</span>
    </div>
    <input type="range" id="mist-slider" min="0" max="1" step="0.01" value="${initMistSlider.toFixed(2)}" />
  `;
  const mistSlider = mistRow.querySelector('#mist-slider') as HTMLInputElement;
  const mistVal = mistRow.querySelector('#mist-val') as HTMLElement;
  syncSliderFill(mistSlider);
  mistSlider.addEventListener('input', () => {
    const s = parseFloat(mistSlider.value);
    mistVal.textContent = s.toFixed(2);
    syncSliderFill(mistSlider);
    callbacks.onMistDensityChange(fromMistSlider(s));
  });

  const initRainVal = initPresetObj.rainIntensity;
  const rainRow = document.createElement('div');
  rainRow.className = 'control-row';
  rainRow.innerHTML = `
    <div class="control-label-line">
      <span>Coastal Rain &amp; Splash Physics</span>
      <span class="control-val" id="rain-val">${initRainVal.toFixed(2)}</span>
    </div>
    <input type="range" id="rain-slider" min="0" max="1" step="0.01" value="${initRainVal.toFixed(2)}" />
  `;
  const rainSlider = rainRow.querySelector('#rain-slider') as HTMLInputElement;
  const rainVal = rainRow.querySelector('#rain-val') as HTMLElement;
  syncSliderFill(rainSlider);
  rainSlider.addEventListener('input', () => {
    const r = parseFloat(rainSlider.value);
    rainVal.textContent = r.toFixed(2);
    syncSliderFill(rainSlider);
    callbacks.onRainIntensityChange(r);
  });

  const initWindVal = initPresetObj.windStrength;
  const windRow = document.createElement('div');
  windRow.className = 'control-row';
  windRow.innerHTML = `
    <div class="control-label-line">
      <span>Coastal Wind (Ferns, Grass &amp; Sea)</span>
      <span class="control-val" id="wind-val">${initWindVal.toFixed(2)}</span>
    </div>
    <input type="range" id="wind-slider" min="0.05" max="1.25" step="0.01" value="${initWindVal.toFixed(2)}" />
  `;
  const windSlider = windRow.querySelector('#wind-slider') as HTMLInputElement;
  const windVal = windRow.querySelector('#wind-val') as HTMLElement;
  syncSliderFill(windSlider);
  windSlider.addEventListener('input', () => {
    const w = parseFloat(windSlider.value);
    windVal.textContent = w.toFixed(2);
    syncSliderFill(windSlider);
    callbacks.onWindStrengthChange(w);
  });

  const initBoltFreq = initPresetObj.lightningFrequency;
  const lightningRow = document.createElement('div');
  lightningRow.className = 'control-row';
  lightningRow.innerHTML = `
    <div class="control-label-line">
      <span>Thunder &amp; Lightning Storm Rate</span>
      <span class="control-val" id="bolt-val">${initBoltFreq.toFixed(2)}</span>
    </div>
    <input type="range" id="bolt-slider" min="0" max="1" step="0.01" value="${initBoltFreq.toFixed(2)}" />
  `;
  const boltSlider = lightningRow.querySelector('#bolt-slider') as HTMLInputElement;
  const boltVal = lightningRow.querySelector('#bolt-val') as HTMLElement;
  syncSliderFill(boltSlider);
  boltSlider.addEventListener('input', () => {
    const f = parseFloat(boltSlider.value);
    boltVal.textContent = f.toFixed(2);
    syncSliderFill(boltSlider);
    callbacks.onLightningFrequencyChange(f);
  });

  const strikeActionBtn = document.createElement('button');
  strikeActionBtn.className = 'action-btn';
  strikeActionBtn.style.width = '100%';
  strikeActionBtn.style.marginTop = '6px';
  strikeActionBtn.innerHTML = `&#9889; Strike Forked Lightning &amp; Thunder [L]`;
  strikeActionBtn.addEventListener('click', fireManualLightning);

  let seaPresetDescEl: HTMLElement | null = null;

  const applyWeatherPresetUI = (presetId: WeatherPresetId) => {
    const wp = WEATHER_PRESETS[presetId];
    if (!wp) return;
    weatherBtns.forEach(({ id, btn }) => btn.classList.toggle('active', id === presetId));
    weatherDescSpan.textContent = wp.subtitle;
    elevSlider.value = String(wp.sunElevationDeg);
    elevVal.textContent = `${wp.sunElevationDeg.toFixed(1)}°`;
    syncSliderFill(elevSlider);
    const ms = toMistSlider(wp.mistDensity);
    mistSlider.value = ms.toFixed(2);
    mistVal.textContent = ms.toFixed(2);
    syncSliderFill(mistSlider);
    rainSlider.value = wp.rainIntensity.toFixed(2);
    rainVal.textContent = wp.rainIntensity.toFixed(2);
    syncSliderFill(rainSlider);
    windSlider.value = wp.windStrength.toFixed(2);
    windVal.textContent = wp.windStrength.toFixed(2);
    syncSliderFill(windSlider);
    boltSlider.value = wp.lightningFrequency.toFixed(2);
    boltVal.textContent = wp.lightningFrequency.toFixed(2);
    syncSliderFill(boltSlider);
    callbacks.onSelectWeatherPreset(wp.id);

    let pairedSea: { idx: number; desc: string; params: OceanWaveParams } | null = null;
    if (wp.id === 'stormy-squall') {
      pairedSea = { idx: 3, desc: 'Rogue Storm', params: { waveAmplitude: 1.65, waveSpeed: 1.68, seaChoppiness: 0.92 } };
      callbacks.onTriggerLightningStrike();
    } else if (wp.id === 'starlit-night' || wp.id === 'dawn-dusk') {
      pairedSea = { idx: 0, desc: 'Calm Fjord', params: { waveAmplitude: 0.30, waveSpeed: 0.72, seaChoppiness: 0.24 } };
    } else {
      pairedSea = { idx: 1, desc: 'Nordic Swell', params: { ...DEFAULT_OCEAN_PARAMS } };
    }
    if (pairedSea) {
      seaBtns.forEach((sb, i) => sb.classList.toggle('active', i === pairedSea!.idx));
      if (seaPresetDescEl) seaPresetDescEl.textContent = pairedSea.desc;
      Object.assign(curOcean, pairedSea.params);
      oceanUIRefreshers.forEach((fn) => fn());
      callbacks.onOceanParamsChange(pairedSea.params);
    }
  };

  Object.values(WEATHER_PRESETS).forEach((wp) => {
    const btn = document.createElement('button');
    btn.className = `weather-btn${wp.id === callbacks.initialWeatherPreset ? ' active' : ''}`;
    btn.innerHTML = `
      <span class="weather-btn-title">${wp.label}</span>
      <span class="weather-btn-sub">${wp.subtitle}</span>
    `;
    btn.addEventListener('click', () => {
      momentChips.forEach((c) => c.classList.remove('active'));
      applyWeatherPresetUI(wp.id);
    });
    weatherBtns.push({ id: wp.id, btn });
    weatherGrid.appendChild(btn);
  });
  secWorld.appendChild(weatherGrid);
  secWorld.appendChild(elevRow);
  secWorld.appendChild(mistRow);
  secWorld.appendChild(rainRow);
  secWorld.appendChild(windRow);
  secWorld.appendChild(lightningRow);
  secWorld.appendChild(strikeActionBtn);

  // Curated One-Click Scene Moments (Syncs Sky + Ocean + Both Dragons!)
  const momentChips: HTMLButtonElement[] = [];
  const sceneMoments: Array<{
    label: string;
    toast: string;
    weather: WeatherPresetId;
    lfPatch: Partial<LightFuryRigState>;
    nfPatch: Partial<ToothlessRigState>;
  }> = [
    {
      label: 'Golden Dusk',
      toast: 'Scene Moment — Golden Dusk Courtship',
      weather: 'golden-hour',
      lfPatch: { biolumGlow: 0.12, thermalCloak: 0.0, iridescentShimmer: 0.68, radiantGlow: 0.30, plasmaGlow: 0.0 },
      nfPatch: { alphaGlow: 0.0, biolumGlow: 0.08, lightningCloak: 0.0 },
    },
    {
      label: 'Biolum Night',
      toast: 'Scene Moment — Hidden World Bioluminescence',
      weather: 'starlit-night',
      lfPatch: { biolumGlow: 0.96, thermalCloak: 0.0, iridescentShimmer: 0.85, radiantGlow: 0.72, plasmaGlow: 0.58 },
      nfPatch: { alphaGlow: 0.92, biolumGlow: 0.95, lightningCloak: 0.24 },
    },
    {
      label: 'Mirror Cloak',
      toast: 'Scene Moment — Light Fury Optical Cloak',
      weather: 'dawn-dusk',
      lfPatch: { thermalCloak: 0.88, iridescentShimmer: 0.96, biolumGlow: 0.42, plasmaGlow: 0.32 },
      nfPatch: { alphaGlow: 0.18, biolumGlow: 0.22, lightningCloak: 0.0 },
    },
    {
      label: 'Storm Gale',
      toast: 'Scene Moment — North Sea Lightning Squall',
      weather: 'stormy-squall',
      lfPatch: { biolumGlow: 0.54, thermalCloak: 0.0, plasmaGlow: 0.65, wingUnfurl: 0.58 },
      nfPatch: { alphaGlow: 0.86, biolumGlow: 0.78, lightningCloak: 0.88, wingUnfurl: 0.62 },
    },
  ];

  sceneMoments.forEach((sm, idx) => {
    const chip = document.createElement('button');
    chip.className = `moment-chip${idx === 0 ? ' active' : ''}`;
    chip.textContent = sm.label;
    chip.addEventListener('click', () => {
      momentChips.forEach((c, i) => c.classList.toggle('active', i === idx));
      applyWeatherPresetUI(sm.weather);
      lightFuryController.setState(sm.lfPatch);
      toothlessController.setState(sm.nfPatch);
      syncAll();
      showToast(sm.toast);
    });
    momentChips.push(chip);
    momentsGrid.appendChild(chip);
  });

  const seaPresetHeader = document.createElement('div');
  seaPresetHeader.className = 'control-label-line';
  seaPresetHeader.style.marginTop = '11px';
  seaPresetHeader.innerHTML = `<span>Irregular North Sea Swells</span><span class="control-val" id="sea-preset-desc">Nordic Swell</span>`;
  secWorld.appendChild(seaPresetHeader);
  const seaPresetDesc = seaPresetHeader.querySelector('#sea-preset-desc') as HTMLElement;
  seaPresetDescEl = seaPresetDesc;

  const seaSegRow = document.createElement('div');
  seaSegRow.className = 'segmented-row';
  const seaPresets: Array<{ label: string; desc: string; params: OceanWaveParams }> = [
    { label: 'Quiet', desc: 'Glassy Fjord', params: { waveAmplitude: 0.14, waveSpeed: 0.52, seaChoppiness: 0.08 } },
    { label: 'Swell', desc: 'Nordic Swell', params: { ...DEFAULT_OCEAN_PARAMS } },
    { label: 'Rough', desc: 'Crossed Sea', params: { waveAmplitude: 1.18, waveSpeed: 1.38, seaChoppiness: 0.80 } },
    { label: 'Storm', desc: 'Rogue Storm', params: { waveAmplitude: 1.72, waveSpeed: 1.75, seaChoppiness: 0.96 } },
  ];

  function addOceanSlider(
    label: string,
    key: keyof OceanWaveParams,
    min: number,
    max: number,
    step = 0.01
  ): void {
    const defaultOceanVal = DEFAULT_OCEAN_PARAMS[key];
    const row = document.createElement('div');
    row.className = 'control-row';
    row.title = 'Double-click slider to reset';
    row.innerHTML = `
      <div class="control-label-line">
        <span>${label}</span>
        <span class="control-val">${curOcean[key].toFixed(2)}</span>
      </div>
      <input type="range" min="${min}" max="${max}" step="${step}" value="${curOcean[key]}" />
    `;
    const valEl = row.querySelector('.control-val') as HTMLElement;
    const inp = row.querySelector('input') as HTMLInputElement;
    syncSliderFill(inp);
    oceanUIRefreshers.push(() => {
      inp.value = String(curOcean[key]);
      valEl.textContent = curOcean[key].toFixed(2);
      syncSliderFill(inp);
    });
    inp.addEventListener('input', () => {
      const v = parseFloat(inp.value);
      curOcean[key] = v;
      valEl.textContent = v.toFixed(2);
      syncSliderFill(inp);
      seaBtns.forEach((b) => b.classList.remove('active'));
      seaPresetDesc.textContent = 'Custom Swell';
      callbacks.onOceanParamsChange({ [key]: v });
    });
    inp.addEventListener('dblclick', () => {
      curOcean[key] = defaultOceanVal;
      inp.value = String(defaultOceanVal);
      valEl.textContent = defaultOceanVal.toFixed(2);
      syncSliderFill(inp);
      callbacks.onOceanParamsChange({ [key]: defaultOceanVal });
      showToast(`Reset ${label}`);
    });
    secWorld.appendChild(row);
  }

  seaPresets.forEach((sp, idx) => {
    const btn = document.createElement('button');
    btn.className = `seg-btn${idx === 1 ? ' active' : ''}`;
    btn.textContent = sp.label;
    btn.addEventListener('click', () => {
      seaBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      seaPresetDesc.textContent = sp.desc;
      Object.assign(curOcean, sp.params);
      oceanUIRefreshers.forEach((fn) => fn());
      callbacks.onOceanParamsChange(sp.params);
    });
    seaBtns.push(btn);
    seaSegRow.appendChild(btn);
  });
  secWorld.appendChild(seaSegRow);

  addOceanSlider('Swell & Rogue Wave Height', 'waveAmplitude', 0.05, 3.20, 0.01);
  addOceanSlider('Current & Swell Velocity', 'waveSpeed', 0.15, 2.50, 0.01);
  addOceanSlider('Cross-Chop & Whitecap Foam', 'seaChoppiness', 0.0, 1.0, 0.01);

  const lodLabel = document.createElement('div');
  lodLabel.className = 'control-label-line';
  lodLabel.style.marginTop = '11px';
  lodLabel.innerHTML = `<span>Render Resolution (5 Stages)</span><span class="control-val" id="res-stage-label">${initQM.spec.label} (${initQM.renderWidth}&times;${initQM.renderHeight})</span>`;
  secWorld.appendChild(lodLabel);
  const resStageSpan = lodLabel.querySelector('#res-stage-label') as HTMLElement;

  const resSegRow = document.createElement('div');
  resSegRow.className = 'segmented-row';
  const resButtons: HTMLButtonElement[] = [];

  const syncStudioQualityUI = (m: AppliedQualityMetrics) => {
    telQualityRoman.textContent = m.spec.roman;
    telQualityRes.textContent = `${m.renderWidth}×${m.renderHeight}`;
    resStageSpan.textContent = `${m.spec.label} (${m.renderWidth}×${m.renderHeight})`;
    resButtons.forEach((rb) => {
      const st = Number(rb.dataset.stage) as QualityStageId;
      rb.classList.toggle('active', st === m.stage);
    });
  };

  QUALITY_STAGES.forEach((st) => {
    const b = document.createElement('button');
    b.className = `seg-btn${st.stage === initQM.stage ? ' active' : ''}`;
    b.dataset.stage = String(st.stage);
    b.title = `Stage ${st.roman} · ${st.label} — ${st.subtitle}`;
    b.textContent = st.roman;
    b.addEventListener('click', () => {
      const applied = callbacks.quality.setStage(st.stage);
      syncStudioQualityUI(applied);
      showToast(`Resolution Stage ${applied.spec.roman} · ${applied.spec.label} (${applied.renderWidth}×${applied.renderHeight})`);
    });
    resButtons.push(b);
    resSegRow.appendChild(b);
  });
  secWorld.appendChild(resSegRow);

  studioQualityBtn.addEventListener('click', () => {
    const cur = callbacks.quality.getCurrentStage();
    const next = ((cur % 5) + 1) as QualityStageId;
    const applied = callbacks.quality.setStage(next);
    syncStudioQualityUI(applied);
    showToast(`Resolution Stage ${applied.spec.roman} · ${applied.spec.label} (${applied.renderWidth}×${applied.renderHeight})`);
  });
  callbacks.quality.onChange(syncStudioQualityUI);

  const meshLodLabel = document.createElement('div');
  meshLodLabel.className = 'control-label-line';
  meshLodLabel.style.marginTop = '11px';
  meshLodLabel.innerHTML = `<span>Mesh Level-of-Detail</span><span class="control-val" id="lod-mode-label">LOD0 Hero</span>`;
  secWorld.appendChild(meshLodLabel);
  const lodModeSpan = meshLodLabel.querySelector('#lod-mode-label') as HTMLElement;

  const segRow = document.createElement('div');
  segRow.className = 'segmented-row';
  const lodOptions: Array<{ label: string; mode: '0' | '1' | '2' | 'auto'; desc: string }> = [
    { label: 'LOD0', mode: '0', desc: 'LOD0 Hero' },
    { label: 'LOD1', mode: '1', desc: 'LOD1 Mid' },
    { label: 'LOD2', mode: '2', desc: 'LOD2 Far' },
    { label: 'Auto', mode: 'auto', desc: 'Auto Distance' },
  ];
  const segButtons: HTMLButtonElement[] = [];

  lodOptions.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = `seg-btn${i === 0 ? ' active' : ''}`;
    b.textContent = opt.label;
    b.addEventListener('click', () => {
      segButtons.forEach((sb) => sb.classList.remove('active'));
      b.classList.add('active');
      lodModeSpan.textContent = opt.desc;
      if (opt.mode === 'auto') {
        toothlessAsset.autoLOD = true;
        lightFuryAsset.autoLOD = true;
      } else {
        const lv = Number(opt.mode) as LODLevel;
        toothlessAsset.autoLOD = false;
        lightFuryAsset.autoLOD = false;
        toothlessAsset.setActiveLOD(lv);
        lightFuryAsset.setActiveLOD(lv);
      }
    });
    segButtons.push(b);
    segRow.appendChild(b);
  });
  secWorld.appendChild(segRow);

  // Dual Binary .GLB Export Grid (Light Fury + Toothless)
  const exportGrid = document.createElement('div');
  exportGrid.className = 'export-btn-grid';
  const exportLFBtn = document.createElement('button');
  exportLFBtn.className = 'action-btn';
  exportLFBtn.textContent = 'Light Fury .GLB';
  const exportNFBtn = document.createElement('button');
  exportNFBtn.className = 'action-btn';
  exportNFBtn.textContent = 'Toothless .GLB';
  exportGrid.appendChild(exportLFBtn);
  exportGrid.appendChild(exportNFBtn);

  const exportStatus = document.createElement('div');
  exportStatus.className = 'export-status';

  const handleExport = async (which: ActiveDragonId) => {
    exportLFBtn.disabled = true;
    exportNFBtn.disabled = true;
    exportStatus.style.color = '';
    exportStatus.textContent = 'Packaging binary .GLB asset…';
    try {
      const res =
        which === 'light-fury'
          ? await exportLightFuryAsGLB(lightFuryAsset, lightFuryAsset.activeLOD)
          : await exportToothlessAsGLB(toothlessAsset, toothlessAsset.activeLOD);
      exportStatus.textContent = `Saved ${res.filename} (${res.sizeMB.toFixed(2)} MB)`;
      showToast(`Exported ${res.filename}`);
    } catch (err) {
      exportStatus.style.color = '#f09898';
      exportStatus.textContent = `Export failed: ${(err as Error).message}`;
    } finally {
      exportLFBtn.disabled = false;
      exportNFBtn.disabled = false;
    }
  };

  exportLFBtn.addEventListener('click', () => handleExport('light-fury'));
  exportNFBtn.addEventListener('click', () => handleExport('toothless'));
  secWorld.appendChild(exportGrid);
  secWorld.appendChild(exportStatus);

  function syncAll(): void {
    for (const fn of sliderRegistry) fn();
  }

  const resetBtn = drawer.querySelector('#btn-reset-pose') as HTMLButtonElement;
  resetBtn.addEventListener('click', () => {
    flightChoreographer.stopAndResetToPerch();
    callbacks.onFlightResetCamera();
    lfVibeBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
    nfVibeBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
    momentChips.forEach((c, i) => c.classList.toggle('active', i === 0));
    refreshFlightUI();
    syncAll();
    showToast('Reset Twin Furies to Hero Perch');
  });

  // Expose activeDragon sync if needed
  void activeDragon;

  refreshFlightUI();

  return {
    updateTelemetry(fps: number, activeLod: LODLevel) {
      fpsEl.innerHTML = `<strong>${Math.round(fps)}</strong> FPS`;
      const totalTris =
        toothlessAsset.lodStats[activeLod].triangles +
        lightFuryAsset.lodStats[activeLod].triangles;
      lodEl.innerHTML = `<strong>LOD${activeLod}</strong> &middot; ${totalTris.toLocaleString()} tris`;
    },
    updateFlightUI: refreshFlightUI,
    syncControlsFromRig: syncAll,
    showToast,
    triggerShutterFlash,
    clearActiveCameraBookmark() {
      camButtons.forEach((b) => b.classList.remove('active'));
    },
  };
}
