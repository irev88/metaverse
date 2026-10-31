// The Hearth archipelago — single source of truth for the expanded world.
// Islands are large rolling meadows; terrain height comes from lib/terrain.
export type V3 = [number, number, number];

export const SPAWN: V3 = [0, 0, 12.5];

export interface IslandDef {
  id: string;
  name: string;
  tag: string;
  c: [number, number]; // center x,z
  r: number; // radius
  grass: string; // top color
}

export const ISLANDS: IslandDef[] = [
  { id: "hearth", name: "The Hearth", tag: "✨ The Hearth", c: [0, 0], r: 19, grass: "#2f7a5e" },
  { id: "everbloom", name: "Everbloom Isle", tag: "🌸 Everbloom Isle", c: [42, -4], r: 15, grass: "#3c8a64" },
  { id: "starfall", name: "Starfall Isle", tag: "🔭 Starfall Isle", c: [-36, 9], r: 13, grass: "#41707a" },
];

export interface BridgeDef {
  a: [number, number];
  b: [number, number];
  w: number;
}

export const BRIDGES: BridgeDef[] = [
  { a: [18.7, -1.77], b: [27.3, -2.62], w: 2.0 }, // hearth -> everbloom
  { a: [-18.2, 4.55], b: [-23.2, 5.82], w: 2.0 }, // hearth -> starfall
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
export const WELL: V3 = [9.2, 0, 6.8];
export const MAILBOX: V3 = [3.4, 0, 7.0];
export const PICNIC: V3 = [-2.2, 0, 14.2];
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
  // new meadows of the larger hearth
  [13.8, 0, -9.2],
  [-14.6, 0, -6.0],
  [4.6, 0, 13.6],
  [-13.2, 0, 11.4],
  [15.4, 0, 4.2],
];

export const BLOSSOM_TREES: V3[] = [
  // everbloom
  [36.5, 0, -12.5],
  [46.0, 0, 0.2],
  [44.8, 0, -13.2],
  [39.8, 0, 2.6],
  [34.2, 0, 1.4],
  [47.6, 0, -8.2],
  // starfall
  [-42.5, 0, 13.5],
  [-29.5, 0, 15.0],
];

export const PINE_TREES: V3[] = [
  [-40.0, 0, 3.2],
  [-34.2, 0, 12.2],
  [-26.2, 0, 13.6],
  [-42.2, 0, 8.4],
  [-30.2, 0, 1.2],
  [-44.0, 0, 5.8],
];

export const LANTERNS: V3[] = [
  [-2.8, 0, 6.2],
  [4.4, 0, 4.6],
  [-5.2, 0, -0.5],
  [6.0, 0, -8.0],
  // everbloom
  [29.6, 0, -3.6],
  [35.6, 0, 0.6],
  [40.5, 0, -7.5],
  // starfall
  [-26.0, 0, 6.6],
  [-31.5, 0, 3.4],
  [-33.0, 0, 10.5],
];

/* ----- everbloom isle ----- */
export const POND = { c: [32.5, -5.5] as [number, number], r: 3.4 };
export const SWING: V3 = [28.3, 0, -7.8];
export const ARCH: V3 = [28.9, 0, -2.3];
export const FLOWER_HEART = { c: [38.5, -9.5] as [number, number], scale: 0.22 };

export const FLOWER_FIELDS: { c: [number, number]; r: number }[] = [
  { c: [35.5, -4.0], r: 4.2 },
  { c: [41.5, -6.0], r: 3.4 },
  { c: [33.0, -8.5], r: 2.8 },
  { c: [44.0, -10.5], r: 2.6 },
  { c: [2.5, 4.5], r: 2.2 },
  { c: [-3.0, 3.0], r: 1.8 },
  { c: [-12.0, 7.0], r: 2.4 }, // starfall meadow patch
];

/* ----- starfall isle ----- */
export const OBSERVATORY: V3 = [-29.5, 0, 8.5];
export const ORRERY: V3 = [-25.0, 0, 10.8];
export const CHART: V3 = [-27.2, 0, 4.2];

/* ----- drifting islets ----- */
export const MINI_ISLANDS: { c: [number, number]; y: number; r: number; waterfall?: boolean; tree?: boolean }[] = [
  { c: [10, -20], y: -6.5, r: 2.4, waterfall: true, tree: true },
  { c: [-16, 20], y: -7.5, r: 1.8, tree: true },
  { c: [52, 10], y: -8.5, r: 2.8, waterfall: true, tree: true },
  { c: [-6, -26], y: -9, r: 2.0, tree: false },
  { c: [30, -24], y: -7, r: 1.9, tree: true },
];

/* ----- wildlife zones ----- */
export const RABBIT_ZONES: { c: [number, number]; r: number }[] = [
  { c: [-4, 9], r: 6.5 }, // hearth south meadow
  { c: [36, -3], r: 6 }, // everbloom flower meadow
  { c: [12, -6], r: 5.5 }, // hearth east
];

export const SHEEP_ZONES: { c: [number, number]; r: number }[] = [
  { c: [-10, 12.5], r: 5.5 }, // hearth NW meadow
  { c: [-34, 11.5], r: 5 }, // starfall grove
];

export const STARDUST: V3[] = [
  // hearth (10)
  [-3.2, 1.0, 2.8],
  [5.6, 0.9, 1.4],
  [-8.0, 1.2, -1.0],
  [2.2, 0.8, -5.4],
  [-6.4, 1.0, 5.2],
  [0.0, 1.0, -3.2],
  [13.3, 0.9, 11.8], // end of the pier
  [9.2, 1.0, 8.6], // by the well
  [-2.2, 1.0, 16.2], // the picnic
  [16.5, 1.0, -8.0],
  // bridge east (1)
  [23.0, 1.0, -2.2],
  // everbloom (6)
  [30.0, 1.0, 0.2],
  [32.5, 1.0, -1.8],
  [38.5, 1.0, -9.5], // heart of the flower heart
  [28.3, 1.0, -9.4], // swing
  [44.0, 1.0, -3.0],
  [35.0, 1.0, -12.0],
  // bridge west (1)
  [-20.7, 1.0, 5.2],
  // starfall (6)
  [-23.5, 1.0, 7.4],
  [-29.5, 1.0, 3.4],
  [-38.5, 1.0, 8.8],
  [-25.0, 1.0, 11.6],
  [-41.5, 1.0, 5.6],
  [-33.5, 1.0, 13.0],
];

export const INTERACTABLES: { id: string; pos: V3; r: number; label: string }[] = [
  { id: "campfire", pos: CAMPFIRE, r: 2.3, label: "Sit by the fire" },
  { id: "bench", pos: BENCH, r: 1.7, label: "Sit on the bench" },
  { id: "telescope", pos: TELESCOPE, r: 2.1, label: "Look through the telescope" },
  { id: "wishes", pos: WISH_TREE, r: 2.5, label: "Leave a wish" },
  { id: "pond", pos: [POND.c[0], 0, POND.c[1]], r: 4.6, label: "Gaze into the pond" },
  { id: "arch", pos: ARCH, r: 2.3, label: "Meet me beneath the arch" },
  { id: "orrery", pos: ORRERY, r: 2.5, label: "Wind the orrery" },
  { id: "observatory", pos: OBSERVATORY, r: 4.6, label: "Enter the observatory" },
  { id: "well", pos: WELL, r: 2.3, label: "Make a wish in the well" },
  { id: "mailbox", pos: MAILBOX, r: 1.8, label: "Check the mailbox" },
  { id: "picnic", pos: PICNIC, r: 2.6, label: "Sit for a picnic" },
  ...PORTALS.map((p) => ({ id: `portal:${p.id}`, pos: p.pos, r: 2.1, label: `Enter ${p.label}` })),
];

export const COLLIDERS: { pos: V3; r: number }[] = [
  { pos: COTTAGE, r: 2.6 },
  { pos: WISH_TREE, r: 1.0 },
  { pos: TELESCOPE, r: 0.9 },
  { pos: CAMPFIRE, r: 1.35 },
  { pos: BENCH, r: 0.8 },
  { pos: SIGN, r: 0.35 },
  { pos: [POND.c[0], 0, POND.c[1]], r: 2.5 },
  { pos: SWING, r: 1.0 },
  { pos: [ARCH[0] - 0.9, 0, ARCH[2] + 0.35], r: 0.3 },
  { pos: [ARCH[0] + 0.9, 0, ARCH[2] - 0.35], r: 0.3 },
  { pos: OBSERVATORY, r: 3.5 },
  { pos: ORRERY, r: 1.3 },
  { pos: CHART, r: 0.45 },
  { pos: WELL, r: 1.35 },
  { pos: MAILBOX, r: 0.3 },
  { pos: PICNIC, r: 1.0 },
  ...PORTALS.map((p) => ({ pos: p.pos, r: 0.95 })),
  ...TREES.map((t) => ({ pos: t, r: 0.55 })),
  ...BLOSSOM_TREES.map((t) => ({ pos: t, r: 0.55 })),
  ...PINE_TREES.map((t) => ({ pos: t, r: 0.55 })),
  ...LANTERNS.map((l) => ({ pos: l, r: 0.28 })),
];

// Spots where the rolling terrain is gently flattened to y≈0 so structures sit true.
export const FLATTEN: { x: number; z: number; s: number }[] = [
  { x: COTTAGE[0], z: COTTAGE[2], s: 3.6 },
  { x: WISH_TREE[0], z: WISH_TREE[2], s: 2.6 },
  { x: TELESCOPE[0], z: TELESCOPE[2], s: 2.2 },
  { x: CAMPFIRE[0], z: CAMPFIRE[2], s: 3.0 },
  { x: BENCH[0], z: BENCH[2], s: 2.0 },
  { x: SIGN[0], z: SIGN[2], s: 1.6 },
  { x: SPAWN[0], z: SPAWN[2], s: 3.0 },
  { x: WELL[0], z: WELL[2], s: 2.4 },
  { x: MAILBOX[0], z: MAILBOX[2], s: 1.6 },
  { x: PICNIC[0], z: PICNIC[2], s: 3.0 },
  { x: POND.c[0], z: POND.c[1], s: 4.6 },
  { x: SWING[0], z: SWING[2], s: 2.4 },
  { x: ARCH[0], z: ARCH[2], s: 2.2 },
  { x: OBSERVATORY[0], z: OBSERVATORY[2], s: 5.0 },
  { x: ORRERY[0], z: ORRERY[2], s: 2.6 },
  { x: CHART[0], z: CHART[2], s: 1.8 },
  ...PORTALS.map((p) => ({ x: p.pos[0], z: p.pos[2], s: 2.2 })),
  ...BRIDGES.flatMap((b) => [
    { x: b.a[0], z: b.a[1], s: 3.4 },
    { x: b.b[0], z: b.b[1], s: 3.4 },
  ]),
  ...LANTERNS.map((l) => ({ x: l[0], z: l[2], s: 1.2 })),
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

export const WELL_LINES = [
  "You threw in a coin. Somewhere, a wish just grew legs. 🪙",
  "The well says: she's thinking about you right now.",
  "Deep below, the water is counting the days until you meet.",
];

export const MAIL_LINES = [
  "A letter that hasn't been written yet waits in here. 💌",
  "Empty today — but the postmaster owl is expecting something.",
  "One day this box will fill with letters only we can read.",
];

export const PICNIC_LINES = [
  "The blanket is set for two. One seat is always yours. 🧺",
  "Imagine: her laugh, warm bread, and no distance at all.",
  "Saved for a sunny afternoon that hasn't happened yet.",
];
