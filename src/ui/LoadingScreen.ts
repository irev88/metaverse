export interface LoadingScreenController {
  advanceTo: (targetPct: number, stageCaption?: string) => Promise<void>;
  completeAndDissolve: (hudRoot: HTMLElement) => Promise<void>;
}

declare global {
  interface Window {
    __bloomLoadingComplete?: () => void;
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
  const leftArc = document.getElementById('lc-heart-left') as SVGPathElement | null;
  const rightArc = document.getElementById('lc-heart-right') as SVGPathElement | null;

  let goalPct = 8;
  let displayedPct = 6;
  let tickerRaf = 0;

  const syncHeartArcs = (pct: number) => {
    const clamped = Math.max(0, Math.min(100, pct));
    const dashOffset = (100 - clamped).toFixed(2);
    if (leftArc) leftArc.style.strokeDashoffset = dashOffset;
    if (rightArc) rightArc.style.strokeDashoffset = dashOffset;
  };

  const stepCounter = () => {
    const diff = goalPct - displayedPct;
    if (Math.abs(diff) > 0.12) {
      displayedPct += diff * 0.22;
    } else {
      displayedPct = goalPct;
    }
    syncHeartArcs(displayedPct);
    if (displayedPct < 99.9 || goalPct < 100) {
      tickerRaf = requestAnimationFrame(stepCounter);
    }
  };
  tickerRaf = requestAnimationFrame(stepCounter);

  syncHeartArcs(8);

  return {
    async advanceTo(targetPct: number): Promise<void> {
      goalPct = Math.max(goalPct, Math.min(100, targetPct));
      await nextPaint();
    },

    async completeAndDissolve(hudRoot: HTMLElement): Promise<void> {
      goalPct = 100;
      displayedPct = 100;
      syncHeartArcs(100);
      if (curtain) {
        curtain.classList.add('is-completing');
      }
      window.__bloomLoadingComplete?.();
      await nextPaint();
      await new Promise((r) => setTimeout(r, 380));
      if (curtain) {
        curtain.classList.add('is-dissolving');
        setTimeout(() => {
          if (tickerRaf) cancelAnimationFrame(tickerRaf);
          window.__stopLoadingAmbient?.();
          curtain.remove();
        }, 1320);
      }
      hudRoot.classList.remove('hud-entering');
    },
  };
}
