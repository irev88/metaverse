// The Hearth archipelago — single source of truth for the expanded world.
export type V3 = [number, number, number];

export const SPAWN: V3 = [0, 0, 10.5];

export interface IslandDef {
  id: string;
  name: string;
  tag: string;
  c: [number, number]; // center x,z
  r: number; // radius
  grass: string; // top color
}

export const ISLANDS: IslandDef[] = [
  { id: "hearth", name: "The Hearth", tag: "✨ The Hearth", c: [0, 0], r: 14, grass: "#2f7a5e" },
  { id: "everbloom", name: "Everbloom Isle", tag: "🌸 Everbloom Isle", c: [27, -2], r: 10.5, grass: "#3c8a64" },
  { id: "starfall", name: "Starfall Isle", tag: "🔭 Starfall Isle", c: [-25, 6], r: 9.5, grass: "#41707a" },
];

export interface BridgeDef {
  a: [number, number];
  b: [number, number];
  w: number;
}

export const BRIDGES: BridgeDef[] = [
  { a: [12.4, -0.9], b: [17.8, -1.5], w: 1.9 }, // hearth -> everbloom
  { a: [-12.4, 3.6], b: [-16.9, 4.05], w: 1.9 }, // hearth -> starfall
];

/* ----- the hearth ----- */
export const CAMPFIRE: V3 = [0.8, 0, -1.6];
export const SIT_FIRE: V3 = [0.8, 0, 0.2];
export const BENCH: V3 = [3.0, 0, 0.9];
export const SIT_BENCH: V3 = [3.0, 0.42, 0.9];
export const COTTAGE: V3 = [-6.0, 0, -4.2];
export const WISH_TREE: V3 = [7.2, 0, -4.6];
export const TELESCOPE: V3 = [-8.6, 0, 3.4];
export const SIGN: V3 = [1.6, 0, 8.0];
export const PIER_START: V3 = [10.2, 0, 6.8];
export const PIER_DIR: V3 = [0.62, 0, 0.784];
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

export const BLOSSOM_TREES: V3[] = [
  [22.5, 0, -8.5],
  [31.0, 0, 2.8],
  [29.8, 0, -9.2],
  [24.8, 0, 4.6],
  [-29.0, 0, 2.2],
  [-20.5, 0, 11.0],
  [-28.6, 0, 10.4],
];

export const LANTERNS: V3[] = [
  [-2.8, 0, 6.2],
  [4.4, 0, 4.6],
  [-5.2, 0, -0.5],
  [6.0, 0, -8.0],
  [23.6, 0, -3.6],
  [29.6, 0, 0.6],
  [-22.0, 0, 6.6],
  [-27.0, 0, 3.4],
];

/* ----- everbloom isle ----- */
export const POND = { c: [28.5, -4.5] as [number, number], r: 3.1 };
export const SWING: V3 = [24.3, 0, -6.8];
export const ARCH: V3 = [22.6, 0, -1.6];
export const FLOWER_FIELDS: { c: [number, number]; r: number }[] = [
  { c: [26.5, -1.0], r: 3.4 },
  { c: [30.5, -1.5], r: 2.6 },
  { c: [24.0, -3.5], r: 2.4 },
  { c: [31.0, -7.5], r: 2.2 },
  { c: [2.5, 4.5], r: 1.8 }, // small patch on the hearth too
  { c: [-3.0, 3.0], r: 1.5 },
];

/* ----- starfall isle ----- */
export const OBSERVATORY: V3 = [-25.5, 0, 7.5];
export const ORRERY: V3 = [-21.0, 0, 9.8];
export const CHART: V3 = [-23.2, 0, 3.2];

/* ----- drifting islets ----- */
export const MINI_ISLANDS: { c: [number, number]; y: number; r: number; waterfall?: boolean; tree?: boolean }[] = [
  { c: [8, -16], y: -6.5, r: 2.2, waterfall: true, tree: true },
  { c: [-14, 16], y: -7.5, r: 1.7, tree: true },
  { c: [37, 7], y: -8.5, r: 2.6, waterfall: true, tree: true },
  { c: [-4, -22], y: -9, r: 1.9, tree: false },
];

export const STARDUST: V3[] = [
  // hearth (7)
  [-3.2, 1.0, 2.8],
  [5.6, 0.9, 1.4],
  [-8.0, 1.2, -1.0],
  [2.2, 0.8, -5.4],
  [-6.4, 1.0, 5.2],
  [0.0, 1.0, -3.2],
  [13.3, 0.9, 11.8], // end of the pier
  // bridge east (1)
  [15.1, 1.0, -1.2],
  // everbloom (6)
  [20.0, 1.0, 0.2],
  [27.2, 1.0, -1.2],
  [30.8, 1.0, -6.2],
  [23.0, 1.0, -8.2],
  [33.5, 1.0, -3.0],
  [26.0, 1.0, -9.5],
  // bridge west (1)
  [-14.7, 1.0, 3.85],
  // starfall (5)
  [-19.0, 1.0, 7.0],
  [-25.5, 1.0, 2.6],
  [-28.8, 1.0, 8.5],
  [-21.0, 1.0, 10.6],
  [-30.2, 1.0, 5.4],
];

export const INTERACTABLES: { id: string; pos: V3; r: number; label: string }[] = [
  { id: "campfire", pos: CAMPFIRE, r: 2.3, label: "Sit by the fire" },
  { id: "bench", pos: BENCH, r: 1.7, label: "Sit on the bench" },
  { id: "telescope", pos: TELESCOPE, r: 2.1, label: "Look through the telescope" },
  { id: "wishes", pos: WISH_TREE, r: 2.5, label: "Leave a wish" },
  { id: "pond", pos: [POND.c[0], 0, POND.c[1]], r: 4.4, label: "Gaze into the pond" },
  { id: "arch", pos: ARCH, r: 2.3, label: "Meet me beneath the arch" },
  { id: "orrery", pos: ORRERY, r: 2.5, label: "Wind the orrery" },
  { id: "observatory", pos: OBSERVATORY, r: 4.6, label: "Enter the observatory" },
  ...PORTALS.map((p) => ({ id: `portal:${p.id}`, pos: p.pos, r: 2.1, label: `Enter ${p.label}` })),
];

export const COLLIDERS: { pos: V3; r: number }[] = [
  { pos: COTTAGE, r: 2.6 },
  { pos: WISH_TREE, r: 1.0 },
  { pos: TELESCOPE, r: 0.9 },
  { pos: CAMPFIRE, r: 1.35 },
  { pos: BENCH, r: 0.8 },
  { pos: SIGN, r: 0.35 },
  { pos: [POND.c[0], 0, POND.c[1]], r: 2.3 },
  { pos: SWING, r: 1.0 },
  { pos: [ARCH[0] - 0.9, 0, ARCH[2] + 0.35], r: 0.3 },
  { pos: [ARCH[0] + 0.9, 0, ARCH[2] - 0.35], r: 0.3 },
  { pos: OBSERVATORY, r: 3.5 },
  { pos: ORRERY, r: 1.3 },
  { pos: CHART, r: 0.45 },
  ...PORTALS.map((p) => ({ pos: p.pos, r: 0.95 })),
  ...TREES.map((t) => ({ pos: t, r: 0.5 })),
  ...BLOSSOM_TREES.map((t) => ({ pos: t, r: 0.5 })),
  ...LANTERNS.map((l) => ({ pos: l, r: 0.28 })),
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

export const POND_LINES = [
  "The pond keeps our reflections safe until we're together again.",
  "Some nights the water forgets which sky it's holding — yours or mine.",
  "Throw a moment in; it becomes a ripple, then a memory.",
  "Every ripple here is a thought of you, looping softly.",
];

export const ARCH_LINES = [
  "Meet me here at midnight. I'll bring the stars. 🌹",
  "One day, no screens — just us, beneath this arch.",
  "Someday I'll kiss you right here, and the flowers will pretend not to look.",
  "This arch is saving our spot. Forever.",
];

export const ORRERY_LINES = [
  "The planets hurry for you — even Saturn is impressed.",
  "Wound! The little worlds spin a little faster for love.",
  "Somewhere out there, our real Saturn just did the same.",
];
