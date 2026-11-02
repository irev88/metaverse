"use client";

import { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { playerState } from "@/lib/input";

/**
 * A little astronaut, procedurally built and animated.
 * Model faces +Z. All animation is code-driven (no external assets).
 */
export function Avatar({ name = "You ✦" }: { name?: string }) {
  const body = useRef<THREE.Group>(null);
  const legL = useRef<THREE.Group>(null);
  const legR = useRef<THREE.Group>(null);
  const armL = useRef<THREE.Group>(null);
  const armR = useRef<THREE.Group>(null);
  const antennaTip = useRef<THREE.Mesh>(null);
  const [tagVisible, setTagVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lastMove = useRef(-10);
  const lastOver = useRef(0);
  const outTimer = useRef<number | null>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const moving = playerState.moving && !playerState.sitting;
    const sitting = playerState.sitting;
    const emote = playerState.emoteName;
    const emoteActive = emote && t < playerState.emoteUntil;

    if (moving) lastMove.current = t;
    const wantTag = hovered || t - lastMove.current < 1.8;
    if (wantTag !== tagVisible) setTagVisible(wantTag);

    // reset targets each frame (computed absolutely)
    let legLx = 0,
      legRx = 0,
      armLx = 0,
      armRx = 0,
      armLz = 0.09,
      armRz = -0.09,
      bob = 0,
      twistY = 0;

    if (moving) {
      const f = Math.min(playerState.speed / 4, 1.6);
      const swing = Math.sin(t * 9.5) * 0.62 * f;
      legLx = swing;
      legRx = -swing;
      armLx = -swing * 0.75;
      armRx = swing * 0.75;
      bob = Math.abs(Math.sin(t * 9.5)) * 0.045 * f;
    } else if (!sitting) {
      bob = Math.sin(t * 2.1) * 0.022;
      armLz = 0.09 + Math.sin(t * 1.8) * 0.035;
      armRz = -0.09 - Math.sin(t * 1.8 + 0.4) * 0.035;
    }

    if (sitting) {
      legLx = -1.45;
      legRx = -1.35;
      armLz = 0.18;
      armRz = -0.18;
      bob = Math.sin(t * 1.8) * 0.012;
    }

    if (emoteActive && emote === "wave") {
      armRz = -2.35 + Math.sin(t * 11) * 0.35;
      armRx = 0.2;
      bob = Math.abs(Math.sin(t * 5.5)) * 0.02;
    } else if (emoteActive && emote === "dance") {
      twistY = Math.sin(t * 6.5) * 0.45;
      bob = Math.abs(Math.sin(t * 6.5)) * 0.09;
      armLz = 2.2 + Math.sin(t * 6.5) * 0.5;
      armRz = -2.2 + Math.sin(t * 6.5 + Math.PI) * 0.5;
      legLx = Math.sin(t * 6.5) * 0.28;
      legRx = -legLx;
    } else if (emoteActive && emote === "heart") {
      armLz = 2.5;
      armRz = -2.5;
      armLx = -0.5;
      armRx = -0.5;
      bob = Math.sin(t * 3) * 0.02;
    }

    const damp = 1 - Math.exp(-14 * 0.016);
    if (legL.current) legL.current.rotation.x += (legLx - legL.current.rotation.x) * damp;
    if (legR.current) legR.current.rotation.x += (legRx - legR.current.rotation.x) * damp;
    if (armL.current) {
      armL.current.rotation.x += (armLx - armL.current.rotation.x) * damp;
      armL.current.rotation.z += (armLz - armL.current.rotation.z) * damp;
    }
    if (armR.current) {
      armR.current.rotation.x += (armRx - armR.current.rotation.x) * damp;
      armR.current.rotation.z += (armRz - armR.current.rotation.z) * damp;
    }
    if (body.current) {
      body.current.position.y = 0.05 + bob;
      body.current.rotation.y += (twistY - body.current.rotation.y) * damp;
    }
    if (antennaTip.current) {
      const m = antennaTip.current.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = 1.6 + Math.sin(t * 3.2) * 1.4;
    }
  });

  const hoverIn = () => {
    if (outTimer.current) {
      window.clearTimeout(outTimer.current);
      outTimer.current = null;
    }
    lastOver.current = performance.now();
    setHovered(true);
  };
  const hoverOut = () => {
    if (outTimer.current) window.clearTimeout(outTimer.current);
    outTimer.current = window.setTimeout(() => {
      if (performance.now() - lastOver.current > 60) setHovered(false);
    }, 80);
  };

  return (
    <group>
      <group
        ref={body}
        onPointerOver={hoverIn}
        onPointerOut={hoverOut}
      >
        {/* legs */}
        <group ref={legL} position={[-0.14, 0.62, 0]}>
          <mesh position={[0, -0.26, 0]} castShadow>
            <capsuleGeometry args={[0.095, 0.3, 4, 10]} />
            <meshStandardMaterial color="#e9e5f6" roughness={0.65} />
          </mesh>
          <mesh position={[0, -0.5, 0.05]} castShadow>
            <sphereGeometry args={[0.115, 10, 10]} />
            <meshStandardMaterial color="#f2c94c" roughness={0.5} />
          </mesh>
        </group>
        <group ref={legR} position={[0.14, 0.62, 0]}>
          <mesh position={[0, -0.26, 0]} castShadow>
            <capsuleGeometry args={[0.095, 0.3, 4, 10]} />
            <meshStandardMaterial color="#e9e5f6" roughness={0.65} />
          </mesh>
          <mesh position={[0, -0.5, 0.05]} castShadow>
            <sphereGeometry args={[0.115, 10, 10]} />
            <meshStandardMaterial color="#f2c94c" roughness={0.5} />
          </mesh>
        </group>

        {/* torso */}
        <mesh position={[0, 0.98, 0]} castShadow>
          <capsuleGeometry args={[0.26, 0.4, 6, 14]} />
          <meshStandardMaterial color="#f1eefb" roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.0, 0.24]}>
          <boxGeometry args={[0.22, 0.26, 0.05]} />
          <meshStandardMaterial color="#cfc9e6" roughness={0.5} />
        </mesh>

        {/* arms */}
        <group ref={armL} position={[-0.36, 1.18, 0]}>
          <mesh position={[0, -0.22, 0]} castShadow>
            <capsuleGeometry args={[0.075, 0.28, 4, 10]} />
            <meshStandardMaterial color="#e9e5f6" roughness={0.65} />
          </mesh>
          <mesh position={[0, -0.43, 0]}>
            <sphereGeometry args={[0.095, 10, 10]} />
            <meshStandardMaterial color="#f2c94c" roughness={0.5} />
          </mesh>
        </group>
        <group ref={armR} position={[0.36, 1.18, 0]}>
          <mesh position={[0, -0.22, 0]} castShadow>
            <capsuleGeometry args={[0.075, 0.28, 4, 10]} />
            <meshStandardMaterial color="#e9e5f6" roughness={0.65} />
          </mesh>
          <mesh position={[0, -0.43, 0]}>
            <sphereGeometry args={[0.095, 10, 10]} />
            <meshStandardMaterial color="#f2c94c" roughness={0.5} />
          </mesh>
        </group>

        {/* backpack */}
        <mesh position={[0, 1.05, -0.29]} castShadow>
          <boxGeometry args={[0.4, 0.46, 0.2]} />
          <meshStandardMaterial color="#cfc9e6" roughness={0.6} />
        </mesh>

        {/* helmet */}
        <group position={[0, 1.55, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.3, 18, 18]} />
            <meshStandardMaterial color="#f6f4fd" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.0, 0.11]} scale={[1, 1, 0.72]}>
            <sphereGeometry args={[0.24, 16, 16]} />
            <meshStandardMaterial color="#18223f" metalness={0.7} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.3, 0.022, 8, 24]} />
            <meshStandardMaterial color="#d9d6ea" roughness={0.4} />
          </mesh>
          {/* antenna */}
          <mesh position={[0.16, 0.32, -0.06]} rotation={[0, 0, -0.35]}>
            <cylinderGeometry args={[0.011, 0.011, 0.24, 6]} />
            <meshStandardMaterial color="#cfc9e6" />
          </mesh>
          <mesh ref={antennaTip} position={[0.2, 0.45, -0.06]}>
            <sphereGeometry args={[0.032, 8, 8]} />
            <meshStandardMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={2} />
          </mesh>
        </group>
      </group>

      {tagVisible && (
        <Html position={[0, 2.25, 0]} center style={{ pointerEvents: "none" }} zIndexRange={[9, 0]}>
          <div className="tag3d anim-fade-up">{name}</div>
        </Html>
      )}
    </group>
  );
}
