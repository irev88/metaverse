import {
  AppliedQualityMetrics,
  QUALITY_STAGES,
  QualityStageId,
  RenderQualityController,
} from '../world/RenderQualityManager';

export interface UserExperienceHUDCallbacks {
  quality: RenderQualityController;
  onCaptureSnapshot: () => void;
  onResetView: () => void;
  onToggleAudioMute: () => boolean;
}

export interface UserExperienceHUDController {
  showToast: (msg: string) => void;
  triggerShutterFlash: () => void;
}

/**
 * High-End Romantic Digital-Artwork Viewer Experience ("Our World"):
 * - Zero world/weather/posture/flight mutation controls and zero top-left technical text.
 * - Frames the 3D sanctuary with a museum-grade filigree passe-partout, cursor-reactive
 *   specular glass dock, magnetic jewel buttons, floating heart micro-particles,
 *   5-Stage Resolution & Quality crystal selector (up to Stage V Masterpiece SSAA),
 *   and an accessible illustrated Gesture Carte.
 */
export function createUserExperienceHUD(
  rootEl: HTMLElement,
  callbacks: UserExperienceHUDCallbacks
): UserExperienceHUDController {
  rootEl.innerHTML = '';
  rootEl.classList.add('ux-viewer-mode');

  // 1. Delicate Digital-Artwork Gallery Frame (zero pointer blocking, omitted from canvas PNG snapshots)
  const artFrame = document.createElement('div');
  artFrame.className = 'ux-artwork-frame';
  artFrame.setAttribute('aria-hidden', 'true');
  artFrame.innerHTML = `
    <span class="ux-frame-corner ux-fc-tl"></span>
    <span class="ux-frame-corner ux-fc-tr"></span>
    <span class="ux-frame-corner ux-fc-bl"></span>
    <span class="ux-frame-corner ux-fc-br"></span>
  `;
  rootEl.appendChild(artFrame);

  // 2. Micro-Particle Layer for Romantic Heart Sparkles on UI Interactions
  const fxLayer = document.createElement('div');
  fxLayer.className = 'ux-fx-layer';
  fxLayer.setAttribute('aria-hidden', 'true');
  rootEl.appendChild(fxLayer);

  function spawnHeartSparklesFromElement(el: HTMLElement, count = 6): void {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width * 0.5;
    const cy = rect.top + rect.height * 0.5;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('span');
      heart.className = 'ux-micro-heart';
      heart.innerHTML = '&#10084;';
      const dx = (Math.random() - 0.5) * 64;
      const dy = -26 - Math.random() * 44;
      const rot = (Math.random() - 0.5) * 38;
      const scale = 0.65 + Math.random() * 0.55;
      heart.style.left = `${cx.toFixed(1)}px`;
      heart.style.top = `${cy.toFixed(1)}px`;
      heart.style.setProperty('--hx', `${dx.toFixed(1)}px`);
      heart.style.setProperty('--hy', `${dy.toFixed(1)}px`);
      heart.style.setProperty('--hr', `${rot.toFixed(1)}deg`);
      heart.style.setProperty('--hs', scale.toFixed(2));
      fxLayer.appendChild(heart);
      window.setTimeout(() => heart.remove(), 1100);
    }
  }

  // 3. Soft Rose-Champagne Shutter Bloom & Polite Poetic Toast
  const shutterEl = document.createElement('div');
  shutterEl.className = 'shutter-flash';
  shutterEl.setAttribute('aria-hidden', 'true');
  rootEl.appendChild(shutterEl);

  const toastEl = document.createElement('div');
  toastEl.className = 'hud-toast ux-poetic-toast';
  toastEl.setAttribute('role', 'status');
  toastEl.setAttribute('aria-live', 'polite');
  rootEl.appendChild(toastEl);

  let toastTimer = 0;
  function showToast(msg: string): void {
    toastEl.innerHTML = `<span class="ux-toast-glyph" aria-hidden="true">&#9825;</span><span>${msg}</span>`;
    toastEl.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2500);
  }

  function triggerShutterFlash(): void {
    shutterEl.classList.remove('is-flashing', 'flash');
    void shutterEl.offsetWidth;
    shutterEl.classList.add('flash');
    window.setTimeout(() => shutterEl.classList.remove('flash'), 520);
  }

  // 4. Sculpted Celestial Glass Dock (Top-Right) with Magnetic Micro-Interactions
  const dockWrap = document.createElement('div');
  dockWrap.className = 'ux-dock-wrapper';

  const initMetrics = callbacks.quality.getMetrics();

  dockWrap.innerHTML = `
    <nav class="ux-celestial-dock" aria-label="Experience tools">
      <button type="button" class="ux-jewel-btn" id="ux-btn-snapshot" data-tip="Capture Memory [P]" aria-label="Capture High-Resolution Snapshot (Shortcut P)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="3.2" y="5.6" width="15.6" height="11.8" rx="3.2" stroke="currentColor" stroke-width="1.25" />
          <path d="M8 5.6L9.2 3.9h3.6L14 5.6" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" />
          <path d="M11 14.3s-2.7-1.85-2.7-3.65a1.55 1.55 0 0 1 2.7-1.02 1.55 1.55 0 0 1 2.7 1.02c0 1.8-2.7 3.65-2.7 3.65Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        </svg>
        <span class="ux-jewel-label">Capture</span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-quality" data-tip="Clarity &amp; Resolution [Q]" aria-expanded="false" aria-controls="ux-quality-popover" aria-label="Select Render Resolution Stage (Shortcut Q)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 3.2L13.1 8.4L18.5 9.1L14.4 12.7L15.6 18.1L11 15.2L6.4 18.1L7.6 12.7L3.5 9.1L8.9 8.4L11 3.2Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        </svg>
        <span class="ux-jewel-label">Clarity <em id="ux-quality-roman">${initMetrics.spec.roman}</em></span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-reset" data-tip="Return to Pair [R]" aria-label="Smoothly Return Camera to Default View (Shortcut R)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M5.2 11a5.8 5.8 0 1 1 1.55 3.95M5.2 6.8V11h4.2" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="11" cy="11" r="1.4" fill="currentColor" />
        </svg>
        <span class="ux-jewel-label">Center</span>
      </button>

      <button type="button" class="ux-jewel-btn is-sound-on" id="ux-btn-sound" data-tip="Ambient Sound [M]" aria-pressed="true" aria-label="Toggle Ambient Sound (Shortcut M)">
        <span class="ux-sound-bars" id="ux-sound-bars" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </span>
        <span class="ux-jewel-label" id="ux-sound-text">Sound</span>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-fullscreen" data-tip="Fullscreen Canvas [F]" aria-pressed="false" aria-label="Toggle Fullscreen (Shortcut F)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M4.5 8.2V4.5h3.7M17.5 8.2V4.5h-3.7M4.5 13.8v3.7h3.7M17.5 13.8v3.7h-3.7" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button type="button" class="ux-jewel-btn" id="ux-btn-guide" data-tip="Navigation Guide [?]" aria-expanded="false" aria-controls="ux-guide-dialog" aria-label="Open Navigation &amp; Gesture Guide (Shortcut ?)">
        <svg class="ux-jewel-svg" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.25" />
          <path d="M9.3 8.9a1.85 1.85 0 1 1 2.55 1.72c-.58.26-.85.62-.85 1.22M11 14.6h.01" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <!-- 5-Stage Resolution & Visual Quality Crystal Popover -->
    <div class="ux-quality-popover" id="ux-quality-popover" role="region" aria-label="5-Stage Resolution Selector">
      <div class="ux-qp-header">
        <span class="ux-qp-title">Visual Clarity</span>
        <span class="ux-qp-readout" id="ux-qp-readout">${initMetrics.renderWidth} &times; ${initMetrics.renderHeight}</span>
      </div>
      <div class="ux-qp-stages" role="radiogroup" aria-label="Resolution stages">
        ${QUALITY_STAGES.map(
          (s) => `
          <button
            type="button"
            role="radio"
            aria-checked="${s.stage === initMetrics.stage}"
            class="ux-stage-gem${s.stage === initMetrics.stage ? ' is-active' : ''}"
            data-stage="${s.stage}"
          >
            <span class="ux-gem-roman">${s.roman}</span>
            <span class="ux-gem-meta">
              <strong>${s.label}</strong>
              <small>${s.subtitle}</small>
            </span>
            <span class="ux-gem-heart" aria-hidden="true">&#9825;</span>
          </button>
        `
        ).join('')}
      </div>
    </div>
  `;
  rootEl.appendChild(dockWrap);

  const dockEl = dockWrap.querySelector('.ux-celestial-dock') as HTMLElement;
  dockEl.addEventListener('pointermove', (ev) => {
    const rect = dockEl.getBoundingClientRect();
    dockEl.style.setProperty('--dock-x', `${(ev.clientX - rect.left).toFixed(1)}px`);
    dockEl.style.setProperty('--dock-y', `${(ev.clientY - rect.top).toFixed(1)}px`);
  });

  // Subtle magnetic micro-pull on each jewel button
  dockWrap.querySelectorAll<HTMLButtonElement>('.ux-jewel-btn').forEach((btn) => {
    btn.addEventListener('pointermove', (ev) => {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      const r = btn.getBoundingClientRect();
      const ox = ((ev.clientX - (r.left + r.width * 0.5)) / r.width) * 4.5;
      const oy = ((ev.clientY - (r.top + r.height * 0.5)) / r.height) * 4.5;
      btn.style.transform = `translate3d(${ox.toFixed(2)}px, ${(oy - 1.0).toFixed(2)}px, 0)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });

  // 5. Whisper-Minimal Poetic Gesture Ribbon (auto-dissolves smoothly into pure cinema)
  const coachBar = document.createElement('aside');
  coachBar.className = 'ux-gesture-ribbon';
  coachBar.setAttribute('aria-label', 'Camera gesture hints');
  coachBar.innerHTML = `
    <div class="ux-ribbon-flow">
      <span class="ux-ribbon-pair"><em>Drag</em> Rotate</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Right-Drag / 2-Finger</em> Pan</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Scroll / Pinch</em> Zoom</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>WASD</em> Drift</span>
      <span class="ux-ribbon-heart" aria-hidden="true">&#9825;</span>
      <span class="ux-ribbon-pair"><em>Double-Click</em> Approach</span>
    </div>
    <button type="button" class="ux-coach-dismiss" aria-label="Hide gesture hint" title="Hide">&times;</button>
  `;
  rootEl.appendChild(coachBar);

  let coachTimeout = window.setTimeout(() => {
    coachBar.classList.add('is-hidden');
  }, 12500);

  coachBar.addEventListener('pointerenter', () => window.clearTimeout(coachTimeout));
  coachBar.addEventListener('pointerleave', () => {
    coachTimeout = window.setTimeout(() => coachBar.classList.add('is-hidden'), 5000);
  });
  (coachBar.querySelector('.ux-coach-dismiss') as HTMLButtonElement).addEventListener('click', () => {
    window.clearTimeout(coachTimeout);
    coachBar.classList.add('is-hidden');
  });

  // 6. Illustrated Romantic Gesture & Accessibility Carte Modal
  const guideBackdrop = document.createElement('div');
  guideBackdrop.className = 'help-backdrop ux-carte-backdrop';
  guideBackdrop.id = 'ux-guide-dialog';
  guideBackdrop.innerHTML = `
    <div class="help-modal ux-carte-modal" role="dialog" aria-modal="true" aria-labelledby="ux-guide-title">
      <div class="help-modal-header">
        <div>
          <div class="brand-eyebrow">OUR WORLD &middot; INTERACTIVE SANCTUARY</div>
          <h2 class="help-modal-title" id="ux-guide-title">Moving Through the World</h2>
        </div>
        <button type="button" class="drawer-collapse-btn" id="ux-guide-close" aria-label="Close guide" title="Close [Esc]">&times;</button>
      </div>
      <div class="ux-gesture-cards">
        <div class="ux-gcard">
          <div class="ux-gcard-title">Orbit Around</div>
          <div class="ux-gcard-keys">Left-Drag &middot; 1-Finger Touch</div>
          <p>Circle gently around the cliff, islands, or soaring pair at your own pace.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Velvet Pan</div>
          <div class="ux-gcard-keys">Right-Drag &middot; Shift+Drag &middot; 2-Finger</div>
          <p>Slide smoothly across the horizon in any screen direction.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Depth &amp; Detail</div>
          <div class="ux-gcard-keys">Scroll Wheel &middot; Pinch &middot; Double-Click</div>
          <p>Zoom effortlessly or double-click any island, sea-arch, or dragon to glide closer.</p>
        </div>
        <div class="ux-gcard">
          <div class="ux-gcard-title">Free Drift</div>
          <div class="ux-gcard-keys">W A S D / Arrows &middot; E &amp; Q</div>
          <p>Roam freely through the air; hold Shift to travel faster across the sea.</p>
        </div>
      </div>
      <div class="help-grid" style="margin-top: 12px;">
        <div class="help-row"><span>Capture Snapshot</span><kbd>P</kbd></div>
        <div class="help-row"><span>Clarity Stage (I&ndash;V)</span><kbd>V</kbd></div>
        <div class="help-row"><span>Center Camera</span><kbd>R</kbd></div>
        <div class="help-row"><span>Fullscreen / Sound</span><kbd>F / M</kbd></div>
      </div>
      <p class="help-footer-tip">
        Day, dusk, starlight, rain, and flight unfold on their own &mdash; linger anywhere you wish.
      </p>
    </div>
  `;
  rootEl.appendChild(guideBackdrop);

  // Wire Interactive Controls
  const snapshotBtn = dockWrap.querySelector('#ux-btn-snapshot') as HTMLButtonElement;
  const qualityBtn = dockWrap.querySelector('#ux-btn-quality') as HTMLButtonElement;
  const qualityRomanEl = dockWrap.querySelector('#ux-quality-roman') as HTMLElement;
  const qualityPopover = dockWrap.querySelector('#ux-quality-popover') as HTMLElement;
  const qualityReadout = dockWrap.querySelector('#ux-qp-readout') as HTMLElement;
  const stageGemBtns = Array.from(dockWrap.querySelectorAll<HTMLButtonElement>('.ux-stage-gem'));
  const resetBtn = dockWrap.querySelector('#ux-btn-reset') as HTMLButtonElement;
  const soundBtn = dockWrap.querySelector('#ux-btn-sound') as HTMLButtonElement;
  const soundText = dockWrap.querySelector('#ux-sound-text') as HTMLElement;
  const fullscreenBtn = dockWrap.querySelector('#ux-btn-fullscreen') as HTMLButtonElement;
  const guideBtn = dockWrap.querySelector('#ux-btn-guide') as HTMLButtonElement;
  const guideCloseBtn = guideBackdrop.querySelector('#ux-guide-close') as HTMLButtonElement;

  let qualityOpen = false;
  const setQualityOpen = (open: boolean) => {
    qualityOpen = open;
    qualityPopover.classList.toggle('is-open', qualityOpen);
    qualityBtn.classList.toggle('is-active', qualityOpen);
    qualityBtn.setAttribute('aria-expanded', String(qualityOpen));
  };

  const syncQualityUI = (m: AppliedQualityMetrics) => {
    qualityRomanEl.textContent = m.spec.roman;
    const aaText = m.msaaSamples > 0 ? ` · ${m.msaaSamples}× AA` : '';
    qualityReadout.textContent = `${m.renderWidth} × ${m.renderHeight}${aaText}`;
    stageGemBtns.forEach((b) => {
      const st = Number(b.dataset.stage) as QualityStageId;
      const active = st === m.stage;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-checked', String(active));
    });
  };
  callbacks.quality.onChange(syncQualityUI);

  qualityBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    setQualityOpen(!qualityOpen);
  });

  stageGemBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const st = Number(btn.dataset.stage) as QualityStageId;
      const applied = callbacks.quality.setStage(st);
      syncQualityUI(applied);
      spawnHeartSparklesFromElement(btn, 5);
      showToast(`Clarity ${applied.spec.roman} · ${applied.spec.label} (${applied.renderWidth}×${applied.renderHeight})`);
    });
  });

  window.addEventListener('pointerdown', (ev) => {
    if (qualityOpen && !dockWrap.contains(ev.target as Node)) {
      setQualityOpen(false);
    }
  });

  let guideOpen = false;
  const setGuideOpen = (open: boolean) => {
    guideOpen = open;
    if (guideOpen) setQualityOpen(false);
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
    spawnHeartSparklesFromElement(snapshotBtn, 8);
    callbacks.onCaptureSnapshot();
  });

  const handleResetView = () => {
    spawnHeartSparklesFromElement(resetBtn, 5);
    callbacks.onResetView();
    showToast('Returned gently to center view');
  };
  resetBtn.addEventListener('click', handleResetView);

  const handleToggleSound = () => {
    const muted = callbacks.onToggleAudioMute();
    soundBtn.setAttribute('aria-pressed', String(!muted));
    soundBtn.classList.toggle('is-sound-on', !muted);
    soundBtn.classList.toggle('is-muted', muted);
    soundText.textContent = muted ? 'Quiet' : 'Sound';
    showToast(muted ? 'Ambient thunder hushed' : 'Ambient sound awakened');
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

    if (e.code === 'Escape') {
      if (guideOpen) {
        e.preventDefault();
        setGuideOpen(false);
      } else if (qualityOpen) {
        e.preventDefault();
        setQualityOpen(false);
      }
      return;
    }
    if (e.key === '?' || (e.code === 'Slash' && e.shiftKey)) {
      e.preventDefault();
      setGuideOpen(!guideOpen);
    } else if (e.code === 'KeyP' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      spawnHeartSparklesFromElement(snapshotBtn, 7);
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
    } else if (e.code === 'KeyV' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      setQualityOpen(!qualityOpen);
    }
  });

  return {
    showToast,
    triggerShutterFlash,
  };
}
