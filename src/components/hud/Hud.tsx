"use client";

import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { input, joyMove, type EmoteName } from "@/lib/input";
import { sfx } from "@/lib/audio";
import { useStore } from "@/lib/store";
import { FIRESIDE_PROMPTS, STARDUST } from "@/lib/layout";

function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return (window.matchMedia?.("(pointer: coarse)")?.matches ?? false) || "ontouchstart" in window;
}

/* ================= top bar, prompt, emotes ================= */

export function Hud() {
  const stardust = useStore((s) => s.stardust);
  const audio = useStore((s) => s.audio);
  const toggleAudio = useStore((s) => s.toggleAudio);
  const prompt = useStore((s) => s.prompt);
  const overlay = useStore((s) => s.overlay);
  const setOverlay = useStore((s) => s.setOverlay);
  const toasts = useStore((s) => s.toasts);
  const flash = useStore((s) => s.flash);
  const hintDismissed = useStore((s) => s.hintDismissed);
  const dismissHint = useStore((s) => s.dismissHint);
  const [coarse] = useState(isCoarsePointer);

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {/* top bar */}
      <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
        <div className="glass pointer-events-auto rounded-2xl px-4 py-2">
          <div className="text-sm font-semibold tracking-wide">🌌 The Hearth</div>
          <div className="text-[11px] text-violet-300/80">a private corner of the cosmos · solo for now</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="glass pointer-events-auto rounded-2xl px-3 py-2 text-sm">
            ✨ {stardust}/{STARDUST.length}
          </div>
          <button
            onClick={toggleAudio}
            className="glass pointer-events-auto rounded-2xl px-3 py-2 text-sm transition active:scale-90"
            aria-label="toggle sound"
          >
            {audio ? "🔊" : "🔇"}
          </button>
        </div>
      </div>

      {/* interact prompt */}
      {prompt && !overlay && (
        <div className="absolute bottom-44 left-1/2 -translate-x-1/2 md:bottom-24">
          <button
            className="glass pointer-events-auto anim-fade-up rounded-full px-5 py-2.5 text-sm font-medium text-amber-200 transition active:scale-95"
            onClick={() => {
              input.interact = true;
              sfx.ui();
            }}
          >
            {prompt}
            {!coarse && <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[10px]">E</kbd>}
          </button>
        </div>
      )}

      {/* emotes + jump */}
      <div className="absolute bottom-3 right-3 flex flex-col items-end gap-2">
        {!coarse && (
          <div className="glass rounded-xl px-3 py-1.5 text-[11px] text-slate-300/80">
            WASD move · drag to look · Space jump · 1/2/3 emotes
          </div>
        )}
        <div className="flex gap-2">
          {coarse && (
            <button
              className="glass pointer-events-auto h-12 w-12 rounded-full text-xl transition active:scale-90"
              onClick={() => {
                input.jump = true;
              }}
            >
              ⬆️
            </button>
          )}
          {(
            [
              ["👋", "wave"],
              ["💃", "dance"],
              ["❤️", "heart"],
            ] as [string, EmoteName][]
          ).map(([emoji, name]) => (
            <button
              key={name}
              className="glass pointer-events-auto h-12 w-12 rounded-full text-xl transition active:scale-90"
              onClick={() => {
                input.emote = name;
              }}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* mobile joystick */}
      {coarse && <Joystick />}

      {/* overlays */}
      {overlay === "telescope" && <TelescopeOverlay onClose={() => setOverlay(null)} />}
      {overlay === "wishes" && <WishesOverlay onClose={() => setOverlay(null)} />}
      {overlay === "fire" && <FireOverlay onClose={() => setOverlay(null)} />}

      {/* first-visit hint */}
      {!hintDismissed && !overlay && <HintCard onDismiss={dismissHint} coarse={coarse} />}

      {/* toasts */}
      <div className="absolute bottom-60 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-36">
        {toasts.map((t) => (
          <div key={t.id} className="glass anim-toast rounded-full px-4 py-2 text-xs text-slate-100">
            {t.text}
          </div>
        ))}
      </div>

      {/* respawn flash */}
      {flash > 0 && <div key={flash} className="respawn-flash absolute inset-0 bg-[#05060f]" />}

      <LoadingScreen />
    </div>
  );
}

/* ================= joystick ================= */

function Joystick() {
  const base = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const active = useRef<number | null>(null);
  const center = useRef({ x: 0, y: 0 });

  const update = (e: React.PointerEvent) => {
    if (active.current !== e.pointerId) return;
    const dx = e.clientX - center.current.x;
    const dy = e.clientY - center.current.y;
    const max = 44;
    const d = Math.hypot(dx, dy);
    const cl = d > max ? max / d : 1;
    const kx = dx * cl;
    const ky = dy * cl;
    if (knob.current) knob.current.style.transform = `translate(${kx}px, ${ky}px)`;
    joyMove.x = kx / max;
    joyMove.y = -ky / max;
  };
  const start = (e: React.PointerEvent) => {
    active.current = e.pointerId;
    const r = base.current!.getBoundingClientRect();
    center.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e);
  };
  const end = (e: React.PointerEvent) => {
    if (active.current !== e.pointerId) return;
    active.current = null;
    joyMove.x = 0;
    joyMove.y = 0;
    if (knob.current) knob.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={base}
      className="glass pointer-events-auto absolute bottom-6 left-6 h-28 w-28 rounded-full"
      onPointerDown={start}
      onPointerMove={update}
      onPointerUp={end}
      onPointerCancel={end}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] text-slate-400/70">move</div>
      <div ref={knob} className="pointer-events-none absolute left-1/2 top-1/2 -ml-7 -mt-7 h-14 w-14 rounded-full border border-violet-300/40 bg-violet-400/30 backdrop-blur" />
    </div>
  );
}

/* ================= loading screen ================= */

function LoadingScreen() {
  const loaded = useStore((s) => s.loaded);
  const progress = useProgress();
  const [elapsed, setElapsed] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t0 = performance.now();
    const iv = window.setInterval(() => setElapsed((performance.now() - t0) / 1000), 150);
    return () => window.clearInterval(iv);
  }, []);

  // The world is fully procedural (no external assets), so the loading
  // manager may never report progress — treat "no assets" as done, and
  // force-dismiss after 8 s no matter what.
  const assetsDone = progress.total === 0 || progress.progress >= 100;
  const minShowover = elapsed > 1.4;
  const done = loaded && minShowover && (assetsDone || elapsed > 8);

  useEffect(() => {
    if (done) {
      const t = window.setTimeout(() => setGone(true), 650);
      return () => window.clearTimeout(t);
    }
  }, [done]);

  if (gone) return null;
  return (
    <div
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,#141b40_0%,#070a18_72%)] transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="anim-floaty text-5xl">🌌</div>
      <div className="shimmer-text mt-4 text-2xl font-bold tracking-[0.35em]">THE HEARTH</div>
      <div className="mt-2 text-xs text-violet-300/80">a private corner of the cosmos, for two</div>
      <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-violet-400 to-teal-300" />
      </div>
    </div>
  );
}

/* ================= hint card ================= */

function HintCard({ onDismiss, coarse }: { onDismiss: () => void; coarse: boolean }) {
  return (
    <div className="absolute bottom-24 left-1/2 w-[92%] max-w-md -translate-x-1/2 md:bottom-20">
      <div className="glass pointer-events-auto anim-fade-up rounded-2xl p-4 text-sm leading-relaxed">
        <div className="mb-1 font-semibold text-violet-200">Welcome home ✨</div>
        <p className="text-slate-300">
          {coarse ? (
            <>Drag anywhere to look around · joystick to walk · walk into glowing ✨ to collect stardust · tap prompts to interact.</>
          ) : (
            <>
              <b>WASD</b> to walk · <b>drag</b> to look · <b>Space</b> to jump · walk into glowing ✨ stardust · <b>E</b> or the button to
              interact.
            </>
          )}
        </p>
        <button
          onClick={onDismiss}
          className="mt-3 rounded-full bg-violet-500/80 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-400 active:scale-95"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

/* ================= modal shell ================= */

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <div className="pointer-events-auto absolute inset-0 bg-black/55" onClick={onClose} />
      <div className="glass pointer-events-auto anim-fade-up relative w-full max-w-sm rounded-3xl p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-base font-semibold">{title}</div>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-white/10 text-sm transition active:scale-90">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ================= telescope ================= */

function moonPhase(d: Date) {
  const synodic = 29.53058867;
  const known = Date.UTC(2000, 0, 6, 18, 14);
  let p = ((d.getTime() - known) / 86400000 / synodic) % 1;
  if (p < 0) p += 1;
  const names = ["New Moon 🌑", "Waxing Crescent 🌒", "First Quarter 🌓", "Waxing Gibbous 🌔", "Full Moon 🌕", "Waning Gibbous 🌖", "Last Quarter 🌗", "Waning Crescent 🌘"];
  return { p, name: names[Math.round(p * 8) % 8] };
}

function TelescopeOverlay({ onClose }: { onClose: () => void }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const moon = moonPhase(now);
  return (
    <Modal title="🔭 Tonight's sky — over you" onClose={onClose}>
      <div className="space-y-2.5 text-sm text-slate-300">
        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
          <span>Local time</span>
          <span className="font-mono text-amber-200">{now.toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
          <span>Your timezone</span>
          <span className="text-teal-200">{tz}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
          <span>Moon</span>
          <span>
            {moon.name} <span className="text-slate-400">({Math.round(moon.p * 100)}%)</span>
          </span>
        </div>
        <p className="pt-1 text-xs leading-relaxed text-violet-300/90">
          Soon, when this becomes a portal for two, you'll see <i>her sky</i> here too — her local time, her moon, her weather. The
          telescope is waiting. 🌙
        </p>
      </div>
    </Modal>
  );
}

/* ================= wishes ================= */

function WishesOverlay({ onClose }: { onClose: () => void }) {
  const wishes = useStore((s) => s.wishes);
  const addWish = useStore((s) => s.addWish);
  const [text, setText] = useState("");

  const submit = () => {
    const t = text.trim();
    if (!t) return;
    addWish(t);
    setText("");
    sfx.wish();
  };

  return (
    <Modal title="🌟 Leave a wish" onClose={onClose}>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          placeholder="I wish…"
          maxLength={140}
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-violet-400/60"
        />
        <button onClick={submit} className="rounded-xl bg-violet-500/80 px-4 py-2 text-sm font-semibold transition hover:bg-violet-400 active:scale-95">
          Wish
        </button>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        Every wish becomes glowing fruit on the tree. (Synced between you two in a future phase.)
      </p>
      <div className="mt-3 max-h-52 space-y-2 overflow-y-auto pr-1">
        {wishes.length === 0 && <div className="rounded-xl bg-white/5 px-3 py-4 text-center text-xs text-slate-500">No wishes yet — be the first star.</div>}
        {[...wishes].reverse().map((w, i) => (
          <div key={wishes.length - i} className="rounded-xl bg-white/5 px-3 py-2 text-sm">
            <span className="mr-1.5">💫</span>
            {w.text}
            <div className="mt-0.5 text-[10px] text-slate-500">{new Date(w.at).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
}

/* ================= fireside prompts ================= */

function FireOverlay({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * FIRESIDE_PROMPTS.length));
  return (
    <Modal title="🔥 Fireside prompts" onClose={onClose}>
      <div className="rounded-2xl bg-gradient-to-br from-orange-500/15 to-violet-500/15 px-4 py-5 text-center text-[15px] leading-relaxed text-amber-100">
        “{FIRESIDE_PROMPTS[idx]}”
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => setIdx((i) => (i + 1 + Math.floor(Math.random() * (FIRESIDE_PROMPTS.length - 1))) % FIRESIDE_PROMPTS.length)}
          className="rounded-full bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20 active:scale-95"
        >
          Another ✨
        </button>
        <span className="text-[11px] text-slate-400">best enjoyed on a voice call, fire between you</span>
      </div>
    </Modal>
  );
}
