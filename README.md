# 🌌 ORBIT — a private metaverse portal for two

A dreamy, cosmic private world where two people can be together across the distance:
a 3D hub island with avatars, chat, journals, memory constellations, countdowns, and mini games.
Runs in the browser (desktop + mobile). Two accounts. No one else. Ever.

**Current status: Phase 1 — The Hearth, a walkable 3D world (solo).**
Play it: `https://irev88.github.io/metaverse/` (once Pages is enabled — see below).

## 🎮 What's in the world right now

- **The Hearth** — a floating island in space: cottage, campfire, glowing wish tree,
  telescope, pier, three warp portals (Arcade · Planetarium · Letters — arriving in future phases)
- **Your astronaut avatar** — walk, run, jump, wave 👋 dance 💃 send hearts ❤️
- **Interactions** — sit by the fire (fireside conversation prompts), stargaze (real time +
  moon phase), leave wishes on the tree (they become glowing fruit), collect 12 pieces of stardust
- **Dreamy atmosphere** — aurora shaders, shooting stars, a ringed planet, fireflies,
  drifting sky lanterns, ambient synth pad (toggle 🔊 top-right)
- **Desktop:** WASD/arrows move · Shift run · Space jump · drag to look · scroll zoom · E interact · 1/2/3 emotes
- **Mobile:** joystick + drag + on-screen buttons · auto-reduced graphics if needed

## 🚀 Getting the public link (one-time, ~30 seconds)

The site builds automatically from this branch into `docs/` — GitHub just needs Pages switched on:

1. Open **https://github.com/irev88/metaverse/settings/pages**
2. Under **Build and deployment → Source**, pick **Deploy from a branch**
3. Branch: **`arena/32f3fd07-metaverse`**, folder: **`/docs`** → **Save**
4. In ~1 minute the world is live at **https://irev88.github.io/metaverse/** 🎉

Every push to this branch redeploys the site automatically.

*(Alternative: reconnect Vercel in Arena with full permissions and this deploys there instead —
the current Vercel token is read-only, so project creation was denied.)*

## 🛠 Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # server build
STATIC_EXPORT=1 npm run build   # static export → ./out (what Pages serves, under /metaverse)
node scripts/preview-static.mjs # serve ./out exactly like Pages does
```

## 📐 Documentation

- **[BLUEPRINT.md](BLUEPRINT.md)** — full design & plan: vision, features, architecture,
  data model, netcode, art direction, roadmap, costs.
- **[design/concept/](design/concept/)** — concept art for the Hub, Memory Planetarium, game arena.

## 🧱 Stack

Next.js 15 · React Three Fiber · drei · postprocessing · Tailwind 4 · Zustand · WebAudio.
Next up (per blueprint): Supabase-powered co-presence so you both appear in the same sky.
