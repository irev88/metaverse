"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, Noise, ToneMapping, Vignette } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import * as THREE from "three";
import { Sky, skyState } from "./Sky";
import { treeFx } from "@/lib/fx";
import { Island } from "./Island";
import { Terrain } from "./Terrain";
import { Trees } from "./Trees";
import { Bushes, Clover, Ferns, Rocks } from "./Rocks";
import { Flowers, Grass, Wildflowers } from "./Grass";
import { Rabbits, SheepFlock } from "./Animals";
import { CottageYard, Mailbox, Picnic, Well } from "./Props";
import { Campfire, Observatory, Orrery, Pond, Portals, RoseArch, StarChart, Swing, Telescope, WishTree } from "./POIs";
import { Butterflies, DriftingLanterns, Fireflies, GroundMist, HeartBurst, Petals, Pollen, SparkleTrail, Birds } from "./Particles";
import { Player } from "./Player";
import { Stardust } from "./Stardust";
import { Hud } from "../hud/Hud";
import { useStore } from "@/lib/store";
import { bindKeyboard, input } from "@/lib/input";

/** Watches fps for the first seconds; downgrades graphics once if struggling. */
function PerfProbe() {
  const acc = useRef({ t: 0, n: 0, done: false });
  useFrame((_, dt) => {
    const a = acc.current;
    if (a.done) return;
    a.t += dt;
    a.n += 1;
    if (a.t >= 5) {
      const fps = a.n / a.t;
      a.done = true;
      const s = useStore.getState();
      if (s.quality === "rich" && fps < 26) {
        s.setQuality("lite");
        s.toast("Lowered graphics a touch to keep things smooth ✨");
      }
    }
  });
  return null;
}

/* Colors for the dusk⇄dawn atmosphere drift */
const C = {
  ambN: new THREE.Color("#8fa3d9"),
  ambD: new THREE.Color("#d4b0a8"),
  keyN: new THREE.Color("#b9c8ff"),
  keyD: new THREE.Color("#ffc478"),
  moonN: new THREE.Color("#aebcff"),
  moonD: new THREE.Color("#e8d8ff"),
  hemiN: new THREE.Color("#3b4a86"),
  hemiD: new THREE.Color("#8fa8ce"),
  fogN: new THREE.Color("#0a0e24"),
  fogD: new THREE.Color("#4a3a58"),
  fogDark: new THREE.Color("#04050c"),
};

/** Drives light/fog colors from the sky cycle + wishing-tree focus. */
function AtmosphereRig({
  amb,
  hemi,
  keyLight,
  moonLight,
}: {
  amb: React.RefObject<THREE.AmbientLight | null>;
  hemi: React.RefObject<THREE.HemisphereLight | null>;
  keyLight: React.RefObject<THREE.DirectionalLight | null>;
  moonLight: React.RefObject<THREE.DirectionalLight | null>;
}) {
  const scene = useThree((s) => s.scene);
  useFrame(() => {
    const p = skyState.phase;
    const dim = 1 - 0.52 * treeFx.focus; // the world dims near the tree
    if (amb.current) {
      amb.current.intensity = (0.34 + p * 0.14) * dim;
      amb.current.color.lerpColors(C.ambN, C.ambD, p);
    }
    if (hemi.current) {
      hemi.current.intensity = (0.38 + p * 0.12) * dim;
      hemi.current.color.lerpColors(C.hemiN, C.hemiD, p);
    }
    if (keyLight.current) {
      keyLight.current.intensity = (0.85 + p * 0.3) * dim;
      keyLight.current.color.lerpColors(C.keyN, C.keyD, p);
    }
    if (moonLight.current) {
      moonLight.current.intensity = (0.5 - p * 0.25) * dim;
      moonLight.current.color.lerpColors(C.moonN, C.moonD, p);
    }
    const fog = scene.fog as THREE.FogExp2 | null;
    if (fog) {
      fog.color.lerpColors(C.fogN, C.fogD, p);
      fog.color.lerp(C.fogDark, treeFx.focus * 0.55);
    }
  });
  return null;
}

export default function World() {
  const quality = useStore((s) => s.quality);
  const setLoaded = useStore((s) => s.setLoaded);
  const wrap = useRef<HTMLDivElement>(null);
  const ambRef = useRef<THREE.AmbientLight>(null);
  const hemiRef = useRef<THREE.HemisphereLight>(null);
  const keyRef = useRef<THREE.DirectionalLight>(null);
  const moonRef = useRef<THREE.DirectionalLight>(null);
  const rich = quality === "rich";

  useEffect(() => {
    setLoaded(true);
    const unbind = bindKeyboard();
    const el = wrap.current;
    if (!el) return unbind;

    const pointers = new Map<number, { x: number; y: number }>();
    let pinch = 0;

    const down = (e: PointerEvent) => {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = Math.hypot(a.x - b.x, a.y - b.y);
      }
    };
    const move = (e: PointerEvent) => {
      const p = pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x;
      const dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      if (pointers.size === 1) {
        input.camDX += dx;
        input.camDY += dy;
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinch > 0) input.zoom += (pinch - d) * 0.02;
        pinch = d;
      }
    };
    const up = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      pinch = 0;
    };
    const wheel = (e: WheelEvent) => {
      input.zoom += e.deltaY * 0.004;
      e.preventDefault();
    };
    const ctx = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("pointerleave", up);
    el.addEventListener("wheel", wheel, { passive: false });
    el.addEventListener("contextmenu", ctx);

    return () => {
      unbind();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("pointerleave", up);
      el.removeEventListener("wheel", wheel);
      el.removeEventListener("contextmenu", ctx);
    };
  }, [setLoaded]);

  return (
    <div className="world-root" ref={wrap}>
      <Canvas
        shadows="soft"
        dpr={[1, rich ? 2 : 1.6]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ fov: 55, near: 0.1, far: 1200, position: [22, 14, 34] }}
      >
        <color attach="background" args={["#070a18"]} />
        <fogExp2 attach="fog" args={["#0a0e24", 0.0042]} />

        <ambientLight ref={ambRef} intensity={0.34} color="#8fa3d9" />
        <hemisphereLight ref={hemiRef} args={["#3b4a86", "#1c1430", 0.42]} />
        {/* starlight key */}
        <directionalLight
          ref={keyRef}
          castShadow={rich}
          position={[40, 14, 20]}
          intensity={0.85}
          color="#b9c8ff"
          shadow-mapSize-width={rich ? 4096 : 2048}
          shadow-mapSize-height={rich ? 4096 : 2048}
          shadow-camera-left={-64}
          shadow-camera-right={64}
          shadow-camera-top={64}
          shadow-camera-bottom={-64}
          shadow-camera-near={1}
          shadow-camera-far={200}
          shadow-bias={-0.0005}
        />
        {/* moonlight, from the moon */}
        <directionalLight ref={moonRef} position={[46, 28, -62]} intensity={0.5} color="#aebcff" />

        <Suspense fallback={null}>
          <Sky />
          <Terrain />
          <Trees />
          <Rocks />
          <Bushes />
          <Ferns />
          <Clover />
          <Grass />
          <Flowers />
          <Wildflowers />
          <Rabbits />
          <SheepFlock />
          <Island />
          <CottageYard />
          <Well />
          <Mailbox />
          <Picnic />
          <Campfire />
          <Telescope />
          <WishTree />
          <Portals />
          <Pond />
          <Swing />
          <RoseArch />
          <Observatory />
          <Orrery />
          <StarChart />
          <Stardust />
          <Fireflies />
          <GroundMist />
          <Pollen />
          <DriftingLanterns />
          <Petals center={[52, -6]} />
          <Butterflies />
          <Birds />
          <SparkleTrail />
          <HeartBurst />
          <Player />
        </Suspense>

        <AtmosphereRig amb={ambRef} hemi={hemiRef} keyLight={keyRef} moonLight={moonRef} />
        <PerfProbe />

        {rich ? (
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.85} luminanceThreshold={0.55} luminanceSmoothing={0.2} mipmapBlur radius={0.7} />
            <DepthOfField focusDistance={0.028} focalLength={0.42} bokehScale={2.4} height={480} />
            <Noise opacity={0.022} />
            <Vignette offset={0.25} darkness={0.62} />
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
          </EffectComposer>
        ) : (
          <EffectComposer multisampling={0}>
            <Bloom intensity={0.7} luminanceThreshold={0.6} luminanceSmoothing={0.2} mipmapBlur radius={0.6} />
            <Vignette offset={0.28} darkness={0.55} />
          </EffectComposer>
        )}
      </Canvas>

      <Hud />
    </div>
  );
}
