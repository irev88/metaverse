export interface UserExperienceHUDCallbacks {
  onCaptureSnapshot: () => void;
  onResetView: () => void;
  onToggleAudioMute: () => boolean;
}

export interface UserExperienceHUDController {
  showToast: (msg: string) => void;
  triggerShutterFlash: () => void;
}

/**
 * Pure, Distraction-Free, Accessible Viewer UI for the Public User Interface:
 * - Zero world/weather/posture/flight controls and zero top-left text/telemetry.
 * - Provides only essential viewer utilities: Snapshot, Fullscreen, Reset View, Sound, and Navigation Guide.
 * - Includes an accessible Pan / Zoom / Rotate / Free-Roam coach bar & keyboard-accessible guide modal.
 */
export function createUserExperienceHUD(
  rootEl: HTMLElement,
  callbacks: UserExperienceHUDCallbacks
): UserExperienceHUDController {
  rootEl.innerHTML = '';
  rootEl.classList.add('ux-viewer-mode');

  // Camera Shutter Flash & Polite Toast Notification
  const shutterEl = document.createElement('div');
  shutterEl.className = 'shutter-flash';
  shutterEl.setAttribute('aria-hidden', 'true');
  rootEl.appendChild(shutterEl);

  const toastEl = document.createElement('div');
  toastEl.className = 'hud-toast';
  toastEl.setAttribute('role', 'status');
  toastEl.setAttribute('aria-live', 'polite');
  rootEl.appendChild(toastEl);

  let toastTimer = 0;
  function showToast(msg: string): void {
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2400);
  }

  function triggerShutterFlash(): void {
    shutterEl.classList.remove('is-flashing');
    void shutterEl.offsetWidth;
    shutterEl.classList.add('is-flashing');
  }

  // Minimal Top-Right Accessible Utility Toolbar
  const toolbar = document.createElement('nav');
  toolbar.className = 'ux-utility-bar';
  toolbar.setAttribute('aria-label', 'Viewer tools');
  toolbar.innerHTML = `
    <button type="button" class="ux-pill-btn" id="ux-btn-snapshot" aria-label="Capture Snapshot (Shortcut P)" title="Capture Snapshot [P]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h2l1.1-1.5h3.8L13 5h2a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 15 15.5H5A1.5 1.5 0 0 1 3.5 14V6.5Z" stroke="currentColor" stroke-width="1.35" />
        <circle cx="10" cy="10.25" r="2.6" stroke="currentColor" stroke-width="1.35" />
      </svg>
      <span>Snapshot</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-reset" aria-label="Reset Camera View (Shortcut R)" title="Reset Camera View [R]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4.5 10a5.5 5.5 0 1 1 1.4 3.65M4.5 6.2V10h3.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Reset View</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-sound" aria-pressed="true" aria-label="Toggle Ambient Thunder Audio (Shortcut M)" title="Toggle Ambient Sound [M]">
      <svg class="ux-pill-icon" id="ux-sound-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
        <path d="M13 7.6a3.4 3.4 0 0 1 0 4.8M15 5.6a6.2 6.2 0 0 1 0 8.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
      </svg>
      <span id="ux-sound-label">Sound</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-fullscreen" aria-pressed="false" aria-label="Toggle Fullscreen (Shortcut F)" title="Toggle Fullscreen [F]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 7.5V4h3.5M16 7.5V4h-3.5M4 12.5V16h3.5M16 12.5V16h-3.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Fullscreen</span>
    </button>
    <button type="button" class="ux-pill-btn" id="ux-btn-guide" aria-expanded="false" aria-controls="ux-guide-dialog" aria-label="Navigation Controls Guide (Shortcut ?)" title="Navigation Guide [?]">
      <svg class="ux-pill-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" stroke-width="1.35" />
        <path d="M8.4 8.1a1.75 1.75 0 1 1 2.4 1.62c-.55.25-.8.6-.8 1.18M10 13.5h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
      <span>Guide</span>
    </button>
  `;
  rootEl.appendChild(toolbar);

  // Non-intrusive Bottom Onboarding Navigation Coach Bar (auto-tucks gently, reopenable via Guide)
  const coachBar = document.createElement('aside');
  coachBar.className = 'ux-nav-coach';
  coachBar.setAttribute('aria-label', 'Quick camera navigation tips');
  coachBar.innerHTML = `
    <div class="ux-coach-items">
      <div class="ux-coach-item">
        <span class="ux-coach-key">Drag</span>
        <span class="ux-coach-desc">Rotate</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Right-Drag / 2-Finger</span>
        <span class="ux-coach-desc">Pan</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Scroll / Pinch</span>
        <span class="ux-coach-desc">Zoom</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">WASD / Arrows</span>
        <span class="ux-coach-desc">Move</span>
      </div>
      <span class="ux-coach-sep" aria-hidden="true"></span>
      <div class="ux-coach-item">
        <span class="ux-coach-key">Double-Click</span>
        <span class="ux-coach-desc">Glide Closer</span>
      </div>
    </div>
    <button type="button" class="ux-coach-dismiss" aria-label="Dismiss navigation hint" title="Dismiss">&times;</button>
  `;
  rootEl.appendChild(coachBar);

  let coachTimeout = window.setTimeout(() => {
    coachBar.classList.add('is-hidden');
  }, 13000);

  coachBar.addEventListener('pointerenter', () => {
    window.clearTimeout(coachTimeout);
  });
  coachBar.addEventListener('pointerleave', () => {
    coachTimeout = window.setTimeout(() => {
      coachBar.classList.add('is-hidden');
    }, 5500);
  });
  (coachBar.querySelector('.ux-coach-dismiss') as HTMLButtonElement).addEventListener('click', () => {
    window.clearTimeout(coachTimeout);
    coachBar.classList.add('is-hidden');
  });

  // Accessible Full Navigation Guide Modal
  const guideBackdrop = document.createElement('div');
  guideBackdrop.className = 'help-backdrop';
  guideBackdrop.id = 'ux-guide-dialog';
  guideBackdrop.innerHTML = `
    <div class="help-modal" role="dialog" aria-modal="true" aria-labelledby="ux-guide-title">
      <div class="help-modal-header">
        <div>
          <div class="brand-eyebrow">EXPLORING THE WORLD</div>
          <h2 class="help-modal-title" id="ux-guide-title">Camera Navigation &amp; Accessibility Guide</h2>
        </div>
        <button type="button" class="drawer-collapse-btn" id="ux-guide-close" aria-label="Close navigation guide" title="Close [Esc]">&times;</button>
      </div>
      <div class="help-grid">
        <div class="help-row"><span>Rotate View</span><kbd>Left-Drag / 1-Finger</kbd></div>
        <div class="help-row"><span>Pan Smoothly</span><kbd>Right-Drag / Shift+Drag</kbd></div>
        <div class="help-row"><span>Touch Pan &amp; Zoom</span><kbd>2-Finger Drag &amp; Pinch</kbd></div>
        <div class="help-row"><span>Zoom In / Out</span><kbd>Mouse Wheel / Trackpad</kbd></div>
        <div class="help-row"><span>Roam Forward / Side</span><kbd>W A S D / Arrow Keys</kbd></div>
        <div class="help-row"><span>Rise / Descend</span><kbd>E / Q</kbd></div>
        <div class="help-row"><span>Faster Roam</span><kbd>Hold Shift</kbd></div>
        <div class="help-row"><span>Glide to Any Point</span><kbd>Double-Click</kbd></div>
        <div class="help-row"><span>Reset Camera View</span><kbd>R</kbd></div>
        <div class="help-row"><span>Save HD Snapshot</span><kbd>P</kbd></div>
        <div class="help-row"><span>Toggle Fullscreen</span><kbd>F</kbd></div>
        <div class="help-row"><span>Toggle Sound</span><kbd>M</kbd></div>
      </div>
      <p class="help-footer-tip">
        Pan and zoom speeds automatically adapt to your distance for comfortable, effortless exploration while the living world unfolds around you.
      </p>
    </div>
  `;
  rootEl.appendChild(guideBackdrop);

  const snapshotBtn = toolbar.querySelector('#ux-btn-snapshot') as HTMLButtonElement;
  const resetBtn = toolbar.querySelector('#ux-btn-reset') as HTMLButtonElement;
  const soundBtn = toolbar.querySelector('#ux-btn-sound') as HTMLButtonElement;
  const soundLabel = toolbar.querySelector('#ux-sound-label') as HTMLElement;
  const soundIcon = toolbar.querySelector('#ux-sound-icon') as SVGElement;
  const fullscreenBtn = toolbar.querySelector('#ux-btn-fullscreen') as HTMLButtonElement;
  const guideBtn = toolbar.querySelector('#ux-btn-guide') as HTMLButtonElement;
  const guideCloseBtn = guideBackdrop.querySelector('#ux-guide-close') as HTMLButtonElement;

  let guideOpen = false;
  const setGuideOpen = (open: boolean) => {
    guideOpen = open;
    guideBackdrop.classList.toggle('visible', guideOpen);
    guideBtn.setAttribute('aria-expanded', String(guideOpen));
    guideBtn.classList.toggle('is-active', guideOpen);
    if (guideOpen) {
      coachBar.classList.add('is-hidden');
      guideCloseBtn.focus();
    } else {
      guideBtn.focus();
    }
  };

  guideBtn.addEventListener('click', () => setGuideOpen(!guideOpen));
  guideCloseBtn.addEventListener('click', () => setGuideOpen(false));
  guideBackdrop.addEventListener('click', (ev) => {
    if (ev.target === guideBackdrop) setGuideOpen(false);
  });

  snapshotBtn.addEventListener('click', () => {
    callbacks.onCaptureSnapshot();
  });

  const handleResetView = () => {
    callbacks.onResetView();
    showToast('Camera smoothly returned to default view');
  };
  resetBtn.addEventListener('click', handleResetView);

  const handleToggleSound = () => {
    const muted = callbacks.onToggleAudioMute();
    soundBtn.setAttribute('aria-pressed', String(!muted));
    soundBtn.classList.toggle('is-muted', muted);
    soundLabel.textContent = muted ? 'Muted' : 'Sound';
    soundIcon.innerHTML = muted
      ? `<path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
         <path d="M13 8l4 4M17 8l-4 4" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />`
      : `<path d="M4.2 8.2h2.6l3.4-2.8v9.2l-3.4-2.8H4.2V8.2Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
         <path d="M13 7.6a3.4 3.4 0 0 1 0 4.8M15 5.6a6.2 6.2 0 0 1 0 8.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />`;
    showToast(muted ? 'Ambient audio muted' : 'Ambient audio enabled');
  };
  soundBtn.addEventListener('click', handleToggleSound);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };
  fullscreenBtn.addEventListener('click', handleToggleFullscreen);
  document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenBtn.classList.toggle('is-active', active);
    fullscreenBtn.setAttribute('aria-pressed', String(active));
  });

  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (e.code === 'Escape' && guideOpen) {
      e.preventDefault();
      setGuideOpen(false);
      return;
    }
    if (e.key === '?' || (e.code === 'Slash' && e.shiftKey)) {
      e.preventDefault();
      setGuideOpen(!guideOpen);
    } else if (e.code === 'KeyP' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      callbacks.onCaptureSnapshot();
    } else if (e.code === 'KeyF' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      handleToggleFullscreen();
    } else if (e.code === 'KeyR' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      handleResetView();
    } else if (e.code === 'KeyM' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      handleToggleSound();
    }
  });

  return {
    showToast,
    triggerShutterFlash,
  };
}
