export interface LoadingScreenController {
  advanceTo: (targetPct: number, stageCaption: string) => Promise<void>;
  completeAndDissolve: (hudRoot: HTMLElement) => Promise<void>;
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export function createLoadingScreenController(): LoadingScreenController {
  const curtain = document.getElementById('loading-curtain');
  const fillEl = document.getElementById('lc-progress-fill');
  const stageEl = document.getElementById('lc-stage-text');
  const pctEl = document.getElementById('lc-pct-text');

  let currentPct = 2;

  const renderProgress = (pct: number, caption?: string) => {
    currentPct = Math.max(currentPct, Math.min(100, pct));
    if (fillEl) {
      fillEl.style.width = `${currentPct.toFixed(1)}%`;
    }
    if (pctEl) {
      pctEl.textContent = `${ String(Math.round(currentPct)).padStart(2, '0') }%`;
    }
    if (caption && stageEl) {
      stageEl.textContent = caption;
    }
  };

  renderProgress(4, 'Preparing WebGL2 twilight canvas…');

  return {
    async advanceTo(targetPct: number, stageCaption: string): Promise<void> {
      renderProgress(targetPct, stageCaption);
      await nextPaint();
    },

    async completeAndDissolve(hudRoot: HTMLElement): Promise<void> {
      renderProgress(100, 'The horizon is ready.');
      await nextPaint();
      await new Promise((r) => setTimeout(r, 260));
      if (curtain) {
        curtain.classList.add('is-dissolving');
        setTimeout(() => {
          curtain.remove();
        }, 1250);
      }
      hudRoot.classList.remove('hud-entering');
    },
  };
}
