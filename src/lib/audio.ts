// Tiny WebAudio synth — ambient pad, wind, fire crackle + UI chimes. No audio files needed.
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let pad: { stop: () => void } | null = null;
let enabled = false;

/* ----- ambience: wind + fire crackle ----- */
let noiseBuf: AudioBuffer | null = null;
let windNodes: { stop: () => void } | null = null;
let fireGain: GainNode | null = null;
let crackleTimer: number | null = null;

function makeNoiseBuffer(c: AudioContext): AudioBuffer {
  const buf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function startWind() {
  if (!ctx || !master || windNodes) return;
  const c = ctx;
  const src = c.createBufferSource();
  src.buffer = noiseBuf!;
  src.loop = true;
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 320;
  lp.Q.value = 0.4;
  const g = c.createGain();
  g.gain.value = 0.016;
  const lfo = c.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoG = c.createGain();
  lfoG.gain.value = 110;
  lfo.connect(lfoG);
  lfoG.connect(lp.frequency);
  src.connect(lp);
  lp.connect(g);
  g.connect(master);
  src.start();
  lfo.start();
  windNodes = {
    stop: () => {
      try {
        g.gain.setTargetAtTime(0, c.currentTime, 0.4);
        window.setTimeout(() => {
          try {
            src.stop();
            lfo.stop();
          } catch {
            /* noop */
          }
        }, 1500);
      } catch {
        /* noop */
      }
    },
  };
}

function startCrackle() {
  if (!ctx || !master || crackleTimer !== null) return;
  fireGain = ctx.createGain();
  fireGain.gain.value = 0;
  fireGain.connect(master);
  crackleTimer = window.setInterval(() => {
    if (!ctx || !fireGain || !enabled) return;
    if (Math.random() > 0.6) return;
    const c = ctx;
    const src = c.createBufferSource();
    src.buffer = noiseBuf!;
    const off = Math.random() * 1.5;
    const dur = 0.015 + Math.random() * 0.04;
    const bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1400 + Math.random() * 2800;
    bp.Q.value = 1.2;
    const g = c.createGain();
    const peak = (0.15 + Math.random() * 0.5) * (0.25 + Math.random() * 0.75);
    g.gain.setValueAtTime(0, c.currentTime);
    g.gain.linearRampToValueAtTime(peak, c.currentTime + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur + 0.03);
    src.connect(bp);
    bp.connect(g);
    g.connect(fireGain);
    src.start(c.currentTime, off, dur + 0.05);
  }, 95);
}

function stopCrackle() {
  if (crackleTimer !== null) {
    window.clearInterval(crackleTimer);
    crackleTimer = null;
  }
  if (fireGain && ctx) {
    fireGain.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
  }
}

/** 0 = far from the fire, 1 = right next to it. Called from the player loop. */
export function setFireProximity(v: number) {
  if (!fireGain || !ctx) return;
  fireGain.gain.setTargetAtTime(Math.max(0, Math.min(1, v)) * 0.5, ctx.currentTime, 0.3);
}

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
    if (!noiseBuf && ctx) noiseBuf = makeNoiseBuffer(ctx);
    startPad();
    startWind();
    startCrackle();
  } else {
    stopPad();
    if (windNodes) {
      windNodes.stop();
      windNodes = null;
    }
    stopCrackle();
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
