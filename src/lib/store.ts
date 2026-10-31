"use client";

import { create } from "zustand";
import { setSound } from "./audio";
import type { EmoteName } from "./input";

export type Overlay = null | "telescope" | "wishes" | "fire" | "observatory";
export type Quality = "rich" | "lite";

export interface Wish {
  text: string;
  at: number;
}

interface Toast {
  id: number;
  text: string;
}

let toastId = 0;

function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* noop */
  }
}

function initialQuality(): Quality {
  if (typeof window === "undefined") return "rich";
  const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  return coarse || cores <= 4 || mem <= 4 ? "lite" : "rich";
}

interface WorldState {
  quality: Quality;
  setQuality: (q: Quality) => void;
  loaded: boolean;
  setLoaded: (v: boolean) => void;
  stardust: number;
  collected: Set<number>;
  collectStardust: (i: number) => void;
  wishes: Wish[];
  addWish: (text: string) => void;
  overlay: Overlay;
  setOverlay: (o: Overlay) => void;
  prompt: string | null;
  setPrompt: (p: string | null) => void;
  sitting: boolean;
  setSitting: (v: boolean) => void;
  toasts: Toast[];
  toast: (text: string) => void;
  audio: boolean;
  toggleAudio: () => void;
  flash: number;
  flashNow: () => void;
  hintDismissed: boolean;
  dismissHint: () => void;
  orreryKick: number;
  kickOrrery: () => void;
}

export const useStore = create<WorldState>((set, get) => ({
  quality: initialQuality(),
  setQuality: (q) => set({ quality: q }),
  loaded: false,
  setLoaded: (v) => set({ loaded: v }),
  stardust: 0,
  collected: new Set<number>(),
  collectStardust: (i) =>
    set((s) => {
      if (s.collected.has(i)) return s;
      const collected = new Set(s.collected);
      collected.add(i);
      return { collected, stardust: collected.size };
    }),
  wishes: loadJSON<Wish[]>("orbit.wishes", []),
  addWish: (text) => {
    const wishes = [...get().wishes, { text, at: Date.now() }];
    saveJSON("orbit.wishes", wishes);
    set({ wishes });
  },
  overlay: null,
  setOverlay: (o) => set({ overlay: o }),
  prompt: null,
  setPrompt: (p) =>
    set((s) => {
      if (s.prompt === p) return s;
      return { prompt: p };
    }),
  sitting: false,
  setSitting: (v) => set({ sitting: v }),
  toasts: [],
  toast: (text) => {
    const id = ++toastId;
    set((s) => ({ toasts: [...s.toasts.slice(-2), { id, text }] }));
    window.setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, 3000);
  },
  audio: false,
  toggleAudio: () => {
    const next = !get().audio;
    setSound(next);
    set({ audio: next });
  },
  flash: 0,
  flashNow: () => set((s) => ({ flash: s.flash + 1 })),
  hintDismissed: loadJSON<boolean>("orbit.hintDismissed", false),
  dismissHint: () => {
    saveJSON("orbit.hintDismissed", true);
    set({ hintDismissed: true });
  },
  orreryKick: 0,
  kickOrrery: () => set({ orreryKick: Date.now() }),
}));

// Re-export so HUD buttons can raise one-shot emotes without importing input deeply.
export type { EmoteName };
