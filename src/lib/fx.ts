// Cross-component FX channels (mutable, per-frame — no React state).
export const treeFx = {
  /** 0..1 — how strongly the world is focused on the wishing tree */
  focus: 0,
  /** performance.now() of the last wish submission (drives the burst) */
  burstAt: 0,
  /** performance.now() of the last click on the tree */
  pokeAt: 0,
};
