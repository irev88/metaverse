"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Avatar } from "./Avatar";
import { fx, input, joyMove, playerState } from "@/lib/input";
import { sfx, setFireProximity } from "@/lib/audio";
import { treeFx } from "@/lib/fx";
import { useStore } from "@/lib/store";
import { groundHeight } from "@/lib/terrain";
import { ISLANDS, WISH_TREE } from "@/lib/layout";
import {
  ARCH_LINES,
  BENCH,
  CAMPFIRE,
  COLLIDERS,
  INTERACTABLES,
  MAIL_LINES,
  ORRERY_LINES,
  PICNIC_LINES,
  POND_LINES,
  SIT_BENCH,
  SIT_FIRE,
  SPAWN,
  STARDUST,
  WELL_LINES,
} from "@/lib/layout";

const tmpTarget = new THREE.Vector3();
const cineTarget = new THREE.Vector3();

const ISLE_META: Record<string, { title: string; sub: string }> = {
  hearth: { title: "The Hearth", sub: "where our fire keeps the night warm" },
  everbloom: { title: "Everbloom Isle", sub: "the isle of promises" },
  starfall: { title: "Starfall Isle", sub: "where the sky leans closer" },
};

function dampAngle(a: number, b: number, lambda: number, dt: number): number {
  const d = (((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return a + d * (1 - Math.exp(-lambda * dt));
}

function smooth01(k: number): number {
  const x = THREE.MathUtils.clamp(k, 0, 1);
  return x * x * (3 - 2 * x);
}

export function Player() {
  const root = useRef<THREE.Group>(null);
  const pos = useRef(new THREE.Vector3(...SPAWN));
  const velY = useRef(0);
  const grounded = useRef(true);
  const heading = useRef(Math.PI);
  const camYaw = useRef(Math.PI);
  const camPitch = useRef(0.3);
  const camDist = useRef(7.5);
  const camPos = useRef(new THREE.Vector3(22, 14, 34));
  const sitTarget = useRef<{ spot: THREE.Vector3; face: number } | null>(null);
  const emoteUntil = useRef(0);
  const heartFired = useRef(true);
  const nearestId = useRef<string | null>(null);
  const startedAt = useRef(performance.now());
  const touchedCamera = useRef(false);
  const lastIsle = useRef<string | null>(null);
  const lineIdx = useRef({ pond: 0, arch: 0, orrery: 0, well: 0, mail: 0, picnic: 0 });

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const s = useStore.getState();
    const t = state.clock.elapsedTime;

    /* ----- emotes ----- */
    if (input.emote) {
      playerState.emoteName = input.emote;
      playerState.emoteUntil = t + 2.3;
      emoteUntil.current = t + 2.3;
      heartFired.current = input.emote !== "heart";
      if (input.emote !== "heart") sfx.emote();
      input.emote = null;
    }
    if (t > emoteUntil.current) playerState.emoteName = null;
    if (playerState.emoteName === "heart" && !heartFired.current && t > playerState.emoteUntil - 1.9) {
      heartFired.current = true;
      fx.heartAt = performance.now();
    }

    /* ----- movement input ----- */
    const mx = THREE.MathUtils.clamp(input.move.x + joyMove.x, -1, 1);
    const mz = THREE.MathUtils.clamp(input.move.y + joyMove.y, -1, 1);
    let mag = Math.hypot(mx, mz);
    const wantsMove = mag > 0.18;

    if (s.sitting && wantsMove) {
      s.setSitting(false);
      if (s.overlay === "fire") s.setOverlay(null);
      sitTarget.current = null;
      playerState.sitting = false;
    }

    if (wantsMove && !s.sitting) {
      const nx = mx / mag;
      const nz = mz / mag;
      const fx = Math.sin(camYaw.current);
      const fz = Math.cos(camYaw.current);
      const rx = -fz;
      const rz = fx;
      const wx = fx * nz + rx * nx;
      const wz = fz * nz + rz * nx;
      const running = input.run || mag > 0.95;
      const speed = running ? 8.4 : 4.8;
      pos.current.x += wx * speed * dt;
      pos.current.z += wz * speed * dt;
      heading.current = dampAngle(heading.current, Math.atan2(wx, wz), 11, dt);
      playerState.moving = true;
      playerState.speed = speed * mag;
    } else {
      playerState.moving = false;
      playerState.speed = 0;
    }

    /* ----- jump & gravity ----- */
    if (input.jump) {
      input.jump = false;
      if (grounded.current && !s.sitting) {
        velY.current = 8.2;
        sfx.jump();
      }
    }
    velY.current -= 21 * dt;
    pos.current.y += velY.current * dt;
    const g = groundHeight(pos.current.x, pos.current.z);
    if (pos.current.y <= g) {
      pos.current.y = g;
      velY.current = 0;
      grounded.current = true;
    } else {
      grounded.current = false;
    }

    /* ----- fell off the world ----- */
    if (pos.current.y < -34) {
      pos.current.set(...SPAWN);
      velY.current = 0;
      heading.current = Math.PI;
      grounded.current = true;
      s.flashNow();
      s.toast("The void carried you home ✨");
    }

    /* ----- prop collisions ----- */
    for (const c of COLLIDERS) {
      const dx = pos.current.x - c.pos[0];
      const dz = pos.current.z - c.pos[2];
      const rr = c.r + 0.42;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-8) {
        const d = Math.sqrt(d2);
        const push = (rr - d) / d;
        pos.current.x += dx * push;
        pos.current.z += dz * push;
      }
    }

    /* ----- sitting targets ----- */
    if (sitTarget.current) {
      pos.current.x += (sitTarget.current.spot.x - pos.current.x) * Math.min(1, 10 * dt);
      pos.current.z += (sitTarget.current.spot.z - pos.current.z) * Math.min(1, 10 * dt);
      pos.current.y = sitTarget.current.spot.y;
      velY.current = 0;
      grounded.current = true;
      heading.current = dampAngle(heading.current, sitTarget.current.face, 10, dt);
    }

    /* ----- interactions ----- */
    if (!s.sitting) {
      let bestId: string | null = null;
      let bestLabel: string | null = null;
      let bestD = Infinity;
      for (const it of INTERACTABLES) {
        const d = Math.hypot(pos.current.x - it.pos[0], pos.current.z - it.pos[2]);
        if (d < it.r && d < bestD) {
          bestD = d;
          bestId = it.id;
          bestLabel = it.label;
        }
      }
      if (bestId !== nearestId.current) {
        nearestId.current = bestId;
        s.setPrompt(bestLabel);
      }
      if (input.interact) {
        input.interact = false;
        if (bestId) activate(bestId, s);
      }
    } else {
      if (nearestId.current !== "__sitting") {
        nearestId.current = "__sitting";
        s.setPrompt("Stand up");
      }
      if (input.interact) {
        input.interact = false;
        s.setSitting(false);
        if (s.overlay === "fire") s.setOverlay(null);
        sitTarget.current = null;
        playerState.sitting = false;
      }
    }

    /* ----- stardust collection ----- */
    for (let i = 0; i < STARDUST.length; i++) {
      if (s.collected.has(i)) continue;
      const p = STARDUST[i];
      if (Math.hypot(pos.current.x - p[0], pos.current.z - p[2]) < 1.2) {
        s.collectStardust(i);
        sfx.collect();
        const n = s.stardust + 1;
        if (n === STARDUST.length) {
          window.setTimeout(() => s.toast("Every last star found — you light up all three isles ✨"), 400);
        }
      }
    }

    /* ----- camera ----- */
    if (input.camDX !== 0 || input.camDY !== 0) touchedCamera.current = true;
    camYaw.current -= input.camDX * 0.0042;
    camPitch.current = THREE.MathUtils.clamp(camPitch.current + input.camDY * 0.0028, 0.05, 1.15);
    input.camDX = 0;
    input.camDY = 0;
    if (input.zoom !== 0) {
      camDist.current = THREE.MathUtils.clamp(camDist.current + input.zoom, 3.2, 14);
      input.zoom = 0;
      touchedCamera.current = true;
    }

    const cp = Math.cos(camPitch.current);
    const sp = Math.sin(camPitch.current);
    const bx = -Math.sin(camYaw.current);
    const bz = -Math.cos(camYaw.current);
    tmpTarget.set(
      pos.current.x + bx * camDist.current * cp,
      pos.current.y + 1.5 + camDist.current * sp,
      pos.current.z + bz * camDist.current * cp,
    );

    const elapsed = (performance.now() - startedAt.current) / 1000;
    if (elapsed < 4.2 && !touchedCamera.current) {
      const k = smooth01(elapsed / 4.2);
      cineTarget.set(pos.current.x + 19, pos.current.y + 11, pos.current.z + 25);
      tmpTarget.lerpVectors(cineTarget, tmpTarget, k);
      camPos.current.lerp(tmpTarget, 1 - Math.exp(-6 * dt));
    } else {
      camPos.current.lerp(tmpTarget, 1 - Math.exp(-9 * dt));
    }

    state.camera.position.copy(camPos.current);
    if (state.camera.position.y < 0.35) state.camera.position.y = 0.35;
    state.camera.lookAt(pos.current.x, pos.current.y + 1.45, pos.current.z);

    /* ----- apply to avatar root ----- */
    if (root.current) {
      root.current.position.copy(pos.current);
      root.current.rotation.y = heading.current;
    }
    playerState.pos.copy(pos.current);

    /* ----- ambience: fire crackle proximity + isle banners ----- */
    const dFire = Math.hypot(pos.current.x - CAMPFIRE[0], pos.current.z - CAMPFIRE[2]);
    setFireProximity(Math.max(0, 1 - dFire / 9));
    let isle: string | null = null;
    for (const isl of ISLANDS) {
      if (Math.hypot(pos.current.x - isl.c[0], pos.current.z - isl.c[1]) < isl.r * 0.95) {
        isle = isl.id;
        break;
      }
    }
    if (isle !== lastIsle.current) {
      lastIsle.current = isle;
      const m = isle ? ISLE_META[isle] : null;
      if (m && t > 1.5) s.showBanner(m.title, m.sub);
    }
  });

  function activate(id: string, s: ReturnType<typeof useStore.getState>) {
    if (id === "campfire") {
      sitTarget.current = { spot: new THREE.Vector3(...SIT_FIRE), face: Math.atan2(CAMPFIRE[0] - SIT_FIRE[0], CAMPFIRE[2] - SIT_FIRE[2]) };
      s.setSitting(true);
      playerState.sitting = true;
      s.setOverlay("fire");
      sfx.ui();
    } else if (id === "bench") {
      sitTarget.current = { spot: new THREE.Vector3(...SIT_BENCH), face: Math.atan2(CAMPFIRE[0] - SIT_BENCH[0], CAMPFIRE[2] - SIT_BENCH[2]) };
      s.setSitting(true);
      playerState.sitting = true;
      sfx.ui();
    } else if (id === "telescope") {
      s.setOverlay("telescope");
      sfx.ui();
    } else if (id === "wishes") {
      s.setOverlay("wishes");
      sfx.ui();
    } else if (id === "observatory") {
      s.setOverlay("observatory");
      sfx.ui();
    } else if (id === "pond") {
      const i = lineIdx.current.pond++ % POND_LINES.length;
      s.toast(POND_LINES[i]);
      sfx.wish();
    } else if (id === "arch") {
      const i = lineIdx.current.arch++ % ARCH_LINES.length;
      s.toast(ARCH_LINES[i]);
      fx.heartAt = performance.now();
      sfx.wish();
    } else if (id === "orrery") {
      s.kickOrrery();
      const i = lineIdx.current.orrery++ % ORRERY_LINES.length;
      s.toast(ORRERY_LINES[i]);
      sfx.portal();
    } else if (id === "well") {
      const i = lineIdx.current.well++ % WELL_LINES.length;
      s.toast(WELL_LINES[i]);
      sfx.wish();
    } else if (id === "mailbox") {
      const i = lineIdx.current.mail++ % MAIL_LINES.length;
      s.toast(MAIL_LINES[i]);
      sfx.ui();
    } else if (id === "picnic") {
      const i = lineIdx.current.picnic++ % PICNIC_LINES.length;
      s.toast(PICNIC_LINES[i]);
      sfx.wish();
    } else if (id.startsWith("portal:")) {
      const key = id.slice(7);
      const names: Record<string, string> = { arcade: "Arcade", planetarium: "Planetarium", letters: "Letters" };
      s.toast(`The ${names[key] ?? key} portal hums softly — it opens in a future update 🚧`);
      sfx.portal();
    }
  }

  return (
    <group ref={root}>
      <Avatar />
    </group>
  );
}
