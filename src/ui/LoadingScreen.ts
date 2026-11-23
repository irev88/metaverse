export interface LoadingScreenController {
  advanceTo: (targetPct: number, stageCaption: string) => Promise<void>;
  completeAndDissolve: (hudRoot: HTMLElement) => Promise<void>;
}

declare global {
  interface Window {
    __stopLoadingAmbient?: () => void;
  }
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
  const pillEls = Array.from(document.querySelectorAll<HTMLElement>('#lc-stage-pills .lc-stage-pill'));

  let goalPct = 4;
  let displayedPct = 2;
  let tickerRaf = 0;

  const syncStagePills = (pct: number) => {
    // 4 stages: [0..38], [38..62], [62..86], [86..100]
    const activeIdx = pct >= 100 ? 4 : pct >= 84 ? 3 : pct >= 60 ? 2 : pct >= 36 ? 1 : 0;
    pillEls.forEach((el, idx) => {
      el.classList.toggle('is-done', idx < activeIdx);
      el.classList.toggle('is-active', idx === activeIdx);
    });
  };

  const stepCounter = () => {
    const diff = goalPct - displayedPct;
    if (Math.abs(diff) > 0.15) {
      displayedPct += diff * 0.24;
    } else {
      displayedPct = goalPct;
    }
    if (fillEl) {
      fillEl.style.width = `${displayedPct.toFixed(1)}%`;
    }
    if (pctEl) {
      pctEl.textContent = `${String(Math.round(displayedPct)).padStart(2, '0')}%`;
    }
    syncStagePills(displayedPct);
    if (displayedPct < 99.9 || goalPct < 100) {
      tickerRaf = requestAnimationFrame(stepCounter);
    }
  };
  tickerRaf = requestAnimationFrame(stepCounter);

  const setCaptionSmooth = (caption?: string) => {
    if (!caption || !stageEl || stageEl.textContent === caption) return;
    stageEl.classList.add('is-switching');
    window.setTimeout(() => {
      stageEl.textContent = caption;
      stageEl.classList.remove('is-switching');
    }, 95);
  };

  const renderProgress = (pct: number, caption?: string) => {
    goalPct = Math.max(goalPct, Math.min(100, pct));
    if (fillEl) {
      fillEl.style.width = `${goalPct.toFixed(1)}%`;
    }
    syncStagePills(goalPct);
    setCaptionSmooth(caption);
  };

  renderProgress(6, 'Preparing WebGL2 twilight canvas…');

  return {
    async advanceTo(targetPct: number, stageCaption: string): Promise<void> {
      renderProgress(targetPct, stageCaption);
      await nextPaint();
    },

    async completeAndDissolve(hudRoot: HTMLElement): Promise<void> {
      goalPct = 100;
      displayedPct = 100;
      if (fillEl) fillEl.style.width = '100%';
      if (pctEl) pctEl.textContent = '100%';
      syncStagePills(100);
      setCaptionSmooth('The horizon is ready.');
      await nextPaint();
      await new Promise((r) => setTimeout(r, 320));
      if (curtain) {
        curtain.classList.add('is-dissolving');
        setTimeout(() => {
          if (tickerRaf) cancelAnimationFrame(tickerRaf);
          window.__stopLoadingAmbient?.();
          curtain.remove();
        }, 1280);
      }
      hudRoot.classList.remove('hud-entering');
    },
  };
}
