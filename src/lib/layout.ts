// Shared layout of The Hearth — single source of truth for positions,
// colliders, interactables and collectibles.
export type V3 = [number, number, number];

export const ISLAND_RADIUS = 13.9;

export const SPAWN: V3 = [0, 0, 9.5];

export const CAMPFIRE: V3 = [0.8, 0, -1.6];
export const SIT_FIRE: V3 = [0.8, 0, 0.2]; // sit in front of the fire, facing it
export const BENCH: V3 = [3.0, 0, 0.9];
export const SIT_BENCH: V3 = [3.0, 0.42, 0.9];

export const COTTAGE: V3 = [-6.0, 0, -4.2];
export const WISH_TREE: V3 = [7.2, 0, -4.6];
export const TELESCOPE: V3 = [-8.6, 0, 3.4];
export const SIGN: V3 = [1.6, 0, 8.0];

export const PIER_START: V3 = [10.2, 0, 6.8];
export const PIER_DIR: V3 = [0.62, 0, 0.784]; // normalized
export const PIER_LENGTH = 6.6;

export const PORTALS = [
  { id: "arcade", label: "Arcade", emoji: "🕹️", pos: [-3.6, 0, -10.2] as V3, color: "#5eead4" },
  { id: "planetarium", label: "Planetarium", emoji: "🌌", pos: [0.2, 0, -11.2] as V3, color: "#a78bfa" },
  { id: "letters", label: "Letters", emoji: "💌", pos: [4.0, 0, -10.0] as V3, color: "#fbbf24" },
];

export const TREES: V3[] = [
  [-10.5, 0, -1.5],
  [-9.0, 0, -7.0],
  [3.5, 0, -8.5],
  [9.5, 0, -1.2],
  [-4.5, 0, 6.5],
  [11.0, 0, 2.5],
];

export const LANTERNS: V3[] = [
  [-2.8, 0, 6.2],
  [4.4, 0, 4.6],
  [-5.2, 0, -0.5],
  [6.0, 0, -8.0],
];

export const COLLIDERS: { pos: V3; r: number }[] = [
  { pos: COTTAGE, r: 2.6 },
  { pos: WISH_TREE, r: 1.0 },
  { pos: TELESCOPE, r: 0.9 },
  { pos: CAMPFIRE, r: 1.35 },
  { pos: BENCH, r: 0.8 },
  { pos: SIGN, r: 0.35 },
  ...PORTALS.map((p) => ({ pos: p.pos, r: 0.95 })),
  ...TREES.map((t) => ({ pos: t, r: 0.5 })),
  ...LANTERNS.map((l) => ({ pos: l, r: 0.28 })),
];

export const STARDUST: V3[] = [
  [-3.2, 1.0, 2.8],
  [5.6, 0.9, 1.4],
  [-8.0, 1.2, -1.0],
  [2.2, 0.8, -5.4],
  [-6.4, 1.0, 5.2],
  [8.2, 1.1, 4.4],
  [13.3, 0.9, 11.8], // at the end of the pier
  [-1.5, 1.0, -9.0],
  [6.5, 1.3, -7.0],
  [-9.6, 1.0, -4.4],
  [0.0, 1.0, -3.2],
  [3.0, 1.0, 7.4],
];

export const INTERACTABLES: { id: string; pos: V3; r: number; label: string }[] = [
  { id: "campfire", pos: CAMPFIRE, r: 2.3, label: "Sit by the fire" },
  { id: "bench", pos: BENCH, r: 1.7, label: "Sit on the bench" },
  { id: "telescope", pos: TELESCOPE, r: 2.1, label: "Look through the telescope" },
  { id: "wishes", pos: WISH_TREE, r: 2.5, label: "Leave a wish" },
  ...PORTALS.map((p) => ({
    id: `portal:${p.id}`,
    pos: p.pos,
    r: 2.1,
    label: `Enter ${p.label}`,
  })),
];

export const FIRESIDE_PROMPTS = [
  "What's one tiny thing today that made you think of me?",
  "If our story were a constellation, which stars would it have so far?",
  "What's a sound or smell that instantly brings back one of our trips?",
  "Describe your perfect slow morning together — in detail.",
  "What's something you're quietly proud of this week?",
  "If we could teleport anywhere for exactly one hour, where would we go?",
  "What song feels like “us” right now?",
  "What's one goal of yours that needs cheering on this month?",
  "Tell me about a moment you'd relive exactly as it happened.",
  "What do you hope our world looks like a year from now?",
];
