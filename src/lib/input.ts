// Global (non-reactive) mutable input state — written by HUD/keyboard,
// consumed + reset by the player controller every frame.
import * as THREE from "three";

export type EmoteName = "wave" | "dance" | "heart";

export const input = {
  move: { x: 0, y: 0 }, // keyboard contribution (-1..1, y = forward)
  run: false,
  camDX: 0,
  camDY: 0,
  zoom: 0,
  jump: false, // one-shot
  interact: false, // one-shot
  emote: null as EmoteName | null, // one-shot
};

// Virtual joystick contribution (mobile)
export const joyMove = { x: 0, y: 0 };

// Live player state shared with avatar/particles (mutated every frame)
export const playerState = {
  pos: new THREE.Vector3(0, 0, 9.5),
  moving: false,
  speed: 0,
  sitting: false,
  emoteName: null as EmoteName | null,
  emoteUntil: 0,
};

// One-shot particle triggers
export const fx = {
  heartAt: 0,
};

const keys = new Set<string>();

function syncKeyMove() {
  const y = (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) - (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0);
  const x = (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) - (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0);
  input.move.x = x;
  input.move.y = y;
  input.run = keys.has("ShiftLeft") || keys.has("ShiftRight");
}

export function bindKeyboard(): () => void {
  const down = (e: KeyboardEvent) => {
    if (e.repeat) return;
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
    keys.add(e.code);
    syncKeyMove();
    if (e.code === "Space") {
      input.jump = true;
      e.preventDefault();
    }
    if (e.code === "KeyE") input.interact = true;
    if (e.code === "Digit1") input.emote = "wave";
    if (e.code === "Digit2") input.emote = "dance";
    if (e.code === "Digit3") input.emote = "heart";
  };
  const up = (e: KeyboardEvent) => {
    keys.delete(e.code);
    syncKeyMove();
  };
  const blur = () => {
    keys.clear();
    syncKeyMove();
  };
  window.addEventListener("keydown", down);
  window.addEventListener("keyup", up);
  window.addEventListener("blur", blur);
  return () => {
    window.removeEventListener("keydown", down);
    window.removeEventListener("keyup", up);
    window.removeEventListener("blur", blur);
  };
}
