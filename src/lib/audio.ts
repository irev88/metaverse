// Tiny WebAudio synth — ambient pad + UI chimes. No audio files needed.
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let pad: { stop: () => void } | null = null;
let enabled = false;

function ensureCtx() {
  if (!ctx) {
    const AC: typeof AudioContext | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
}

function startPad() {
  if (pad || !ctx || !master) return;
  const c = ctx;
  const g = c.createGain();
  g.gain.value = 0;
  g.connect(master);

  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 520;
  lp.connect(g);

  const o1 = c.createOscillator();
  o1.type = "sine";
  o1.frequency.value = 98;
  const o2 = c.createOscillator();
  o2.type = "sine";
  o2.frequency.value = 147.2;
  const o3 = c.createOscillator();
  o3.type = "triangle";
  o3.frequency.value = 196.5;
  const g3 = c.createGain();
  g3.gain.value = 0.22;

  o1.connect(lp);
  o2.connect(lp);
  o3.connect(g3);
  g3.connect(lp);

  const lfo = c.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoG = c.createGain();
  lfoG.gain.value = 0.02;
  lfo.connect(lfoG);
  lfoG.connect(g.gain);

  g.gain.setTargetAtTime(0.045, c.currentTime, 2.5);
  o1.start();
  o2.start();
  o3.start();
  lfo.start();

  pad = {
    stop: () => {
      try {
        g.gain.setTargetAtTime(0, c.currentTime, 0.3);
        window.setTimeout(() => {
          [o1, o2, o3, lfo].forEach((o) => {
            try {
              o.stop();
            } catch {
              /* noop */
            }
          });
          g.disconnect();
        }, 1200);
      } catch {
        /* noop */
      }
    },
  };
}

function stopPad() {
  pad?.stop();
  pad = null;
}

export function setSound(on: boolean) {
  enabled = on;
  if (on) {
    ensureCtx();
    startPad();
  } else {
    stopPad();
  }
}

export function isSoundOn() {
  return enabled;
}

export function chime(freq = 880, dur = 0.5, vol = 0.1, type: OscillatorType = "sine") {
  if (!enabled || !ctx || !master) return;
  const c = ctx;
  const o = c.createOscillator();
  o.type = type;
  o.frequency.value = freq;
  const g = c.createGain();
  g.gain.setValueAtTime(0, c.currentTime);
  g.gain.linearRampToValueAtTime(vol, c.currentTime + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  o.connect(g);
  g.connect(master);
  o.start();
  o.stop(c.currentTime + dur + 0.05);
}

export const sfx = {
  collect() {
    chime(1046.5, 0.5, 0.09);
    window.setTimeout(() => chime(1568, 0.6, 0.07), 90);
  },
  emote() {
    chime(660, 0.25, 0.07, "triangle");
  },
  ui() {
    chime(520, 0.18, 0.05, "triangle");
  },
  wish() {
    chime(784, 0.7, 0.09);
    window.setTimeout(() => chime(1174.7, 0.9, 0.07), 140);
  },
  portal() {
    chime(220, 0.9, 0.08, "sawtooth");
    window.setTimeout(() => chime(330, 0.7, 0.05, "sawtooth"), 120);
  },
  jump() {
    chime(440, 0.15, 0.04, "triangle");
  },
};
