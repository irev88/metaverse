"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { playerState } from "@/lib/input";
import { RABBIT_ZONES, SHEEP_ZONES } from "@/lib/layout";
import { terrainHeight } from "@/lib/terrain";

interface Wanderer {
  x: number;
  z: number;
  tx: number;
  tz: number;
  heading: number;
  timer: number;
  idle: number;
  speed: number;
  zone: { c: [number, number]; r: number };
}

function pickTarget(zone: { c: [number, number]; r: number }): [number, number] {
  const a = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random()) * (zone.r - 1);
  return [zone.c[0] + Math.cos(a) * r, zone.c[1] + Math.sin(a) * r];
}

function dampAngle(a: number, b: number, lambda: number, dt: number): number {
  const d = (((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return a + d * (1 - Math.exp(-lambda * dt));
}

/* ================= rabbit ================= */

function Rabbit({ zone, seed }: { zone: { c: [number, number]; r: number }; seed: number }) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const earL = useRef<THREE.Group>(null);
  const earR = useRef<THREE.Group>(null);
  const w = useRef<Wanderer>({
    x: zone.c[0] + (seed % 3) - 1,
    z: zone.c[1] + (seed % 5) - 2,
    tx: zone.c[0],
    tz: zone.c[1],
    heading: Math.random() * Math.PI * 2,
    timer: 0,
    idle: 1 + Math.random() * 2,
    speed: 2.6 + Math.random() * 0.8,
    zone,
  });
  const hopPhase = useRef(0);
  const fur = useMemo(() => (seed % 2 === 0 ? "#d9c8b8" : "#cbb6a4"), [seed]);

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    const b = w.current;

    b.timer -= dt;
    if (b.timer <= 0) {
      // flee if the player is close, otherwise wander
      const pd = Math.hypot(playerState.pos.x - b.x, playerState.pos.z - b.z);
      if (pd < 2.6) {
        const away = Math.atan2(b.x - playerState.pos.x, b.z - playerState.pos.z);
        b.tx = THREE.MathUtils.clamp(b.x + Math.sin(away) * 5, b.zone.c[0] - b.zone.r, b.zone.c[0] + b.zone.r);
        b.tz = THREE.MathUtils.clamp(b.z + Math.cos(away) * 5, b.zone.c[1] - b.zone.r, b.zone.c[1] + b.zone.r);
        b.idle = 0;
        b.timer = 2.2;
        b.speed = 3.6;
      } else {
        [b.tx, b.tz] = pickTarget(b.zone);
        b.idle = Math.random() < 0.45 ? 1 + Math.random() * 2.5 : 0;
        b.timer = 3 + Math.random() * 4;
        b.speed = 2.4 + Math.random() * 0.9;
      }
    }

    const dx = b.tx - b.x;
    const dz = b.tz - b.z;
    const dist = Math.hypot(dx, dz);
    let moving = false;
    if (dist > 0.15 && b.idle <= 0) {
      b.heading = dampAngle(b.heading, Math.atan2(dx, dz), 9, dt);
      const step = Math.min(b.speed * dt, dist);
      b.x += (dx / dist) * step;
      b.z += (dz / dist) * step;
      moving = true;
      hopPhase.current += dt * 9;
    } else if (b.idle > 0) {
      b.idle -= dt;
    }

    const gy = terrainHeight(b.x, b.z);
    const hop = moving ? Math.abs(Math.sin(hopPhase.current)) * 0.24 : 0;
    g.position.set(b.x, (gy === -Infinity ? 0 : gy) + hop, b.z);
    g.rotation.y = b.heading;
    if (body.current) {
      body.current.rotation.x = moving ? Math.sin(hopPhase.current) * 0.16 - 0.08 : Math.sin(t * 1.4 + seed) * 0.03;
      // sniffing when idle
      body.current.rotation.x -= b.idle > 0 ? Math.abs(Math.sin(t * 7)) * 0.12 : 0;
    }
    const earWobble = Math.sin(t * 2.2 + seed * 2) * 0.1 + (moving ? Math.sin(hopPhase.current) * 0.18 : 0);
    if (earL.current) earL.current.rotation.x = -0.15 + earWobble;
    if (earR.current) earR.current.rotation.x = -0.15 - earWobble;
  });

  return (
    <group ref={group}>
      <group ref={body}>
        {/* body */}
        <mesh position={[0, 0.2, -0.02]} rotation={[0.5, 0, 0]} scale={[1, 1, 1.32]} castShadow>
          <sphereGeometry args={[0.16, 14, 14]} />
          <meshStandardMaterial color={fur} roughness={0.95} />
        </mesh>
        {/* head */}
        <mesh position={[0, 0.34, 0.2]} castShadow>
          <sphereGeometry args={[0.115, 14, 14]} />
          <meshStandardMaterial color={fur} roughness={0.95} />
        </mesh>
        {/* muzzle + nose */}
        <mesh position={[0, 0.31, 0.3]}>
          <sphereGeometry args={[0.055, 10, 10]} />
          <meshStandardMaterial color="#f2ece4" roughness={1} />
        </mesh>
        <mesh position={[0, 0.325, 0.345]}>
          <sphereGeometry args={[0.018, 6, 6]} />
          <meshStandardMaterial color="#c9737e" roughness={0.6} />
        </mesh>
        {/* eyes */}
        {[-0.075, 0.075].map((x) => (
          <mesh key={x} position={[x, 0.375, 0.27]}>
            <sphereGeometry args={[0.016, 6, 6]} />
            <meshStandardMaterial color="#241a20" roughness={0.3} />
          </mesh>
        ))}
        {/* ears */}
        <group ref={earL} position={[-0.05, 0.45, 0.14]}>
          <mesh position={[0, 0.12, 0]} rotation={[0, 0, 0.12]}>
            <capsuleGeometry args={[0.032, 0.16, 4, 8]} />
            <meshStandardMaterial color={fur} roughness={0.95} />
          </mesh>
          <mesh position={[0, 0.12, 0.018]} rotation={[0, 0, 0.12]}>
            <capsuleGeometry args={[0.018, 0.12, 3, 6]} />
            <meshStandardMaterial color="#f0c9cc" roughness={1} />
          </mesh>
        </group>
        <group ref={earR} position={[0.05, 0.45, 0.14]}>
          <mesh position={[0, 0.12, 0]} rotation={[0, 0, -0.12]}>
            <capsuleGeometry args={[0.032, 0.16, 4, 8]} />
            <meshStandardMaterial color={fur} roughness={0.95} />
          </mesh>
          <mesh position={[0, 0.12, 0.018]} rotation={[0, 0, -0.12]}>
            <capsuleGeometry args={[0.018, 0.12, 3, 6]} />
            <meshStandardMaterial color="#f0c9cc" roughness={1} />
          </mesh>
        </group>
        {/* tail */}
        <mesh position={[0, 0.28, -0.26]}>
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshStandardMaterial color="#f6f2ec" roughness={1} />
        </mesh>
      </group>
    </group>
  );
}

export function Rabbits() {
  return (
    <group>
      {RABBIT_ZONES.map((z, i) => (
        <Rabbit key={`r${i}`} zone={z} seed={i * 7 + 1} />
      ))}
      <Rabbit zone={RABBIT_ZONES[0]} seed={4} />
      <Rabbit zone={RABBIT_ZONES[1]} seed={11} />
    </group>
  );
}

/* ================= sheep ================= */

function Sheep({ zone, seed }: { zone: { c: [number, number]; r: number }; seed: number }) {
  const group = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const tail = useRef<THREE.Mesh>(null);
  const w = useRef<Wanderer>({
    x: zone.c[0] + (seed % 4) - 2,
    z: zone.c[1] + (seed % 3) - 1,
    tx: zone.c[0],
    tz: zone.c[1],
    heading: Math.random() * Math.PI * 2,
    timer: 0,
    idle: 2,
    speed: 0.55,
    zone,
  });
  const gait = useRef(0);

  useFrame((state, rawDt) => {
    const dt = Math.min(rawDt, 0.05);
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    const b = w.current;

    b.timer -= dt;
    if (b.timer <= 0) {
      [b.tx, b.tz] = pickTarget(b.zone);
      b.idle = Math.random() < 0.6 ? 2.5 + Math.random() * 4 : 0;
      b.timer = 6 + Math.random() * 7;
    }

    const dx = b.tx - b.x;
    const dz = b.tz - b.z;
    const dist = Math.hypot(dx, dz);
    let moving = false;
    if (dist > 0.2 && b.idle <= 0) {
      b.heading = dampAngle(b.heading, Math.atan2(dx, dz), 5, dt);
      const step = Math.min(b.speed * dt, dist);
      b.x += (dx / dist) * step;
      b.z += (dz / dist) * step;
      moving = true;
      gait.current += dt * 4.4;
    } else if (b.idle > 0) {
      b.idle -= dt;
    }

    const gy = terrainHeight(b.x, b.z);
    g.position.set(b.x, gy === -Infinity ? 0 : gy, b.z);
    g.rotation.y = b.heading;

    const bob = moving ? Math.abs(Math.sin(gait.current)) * 0.03 : Math.sin(t * 1.1 + seed) * 0.008;
    if (body.current) {
      body.current.position.y = 0.55 + bob;
      body.current.rotation.z = moving ? Math.sin(gait.current) * 0.02 : 0;
    }
    // grazing head dip while idle
    if (head.current) {
      const graze = b.idle > 0 ? Math.max(0, Math.sin(t * 0.5 + seed)) : 0;
      const target = graze > 0.4 ? -0.8 : moving ? -0.1 : -0.22 + Math.sin(t * 1.3 + seed) * 0.05;
      head.current.rotation.x += (target - head.current.rotation.x) * Math.min(1, 6 * dt);
    }
    if (tail.current) tail.current.rotation.x = Math.sin(t * 2.6 + seed * 3) * 0.2 - 0.15;
  });

  return (
    <group ref={group}>
      <group ref={body} position={[0, 0.55, 0]}>
        {/* soft single-piece body */}
        <mesh scale={[1, 0.84, 1.28]} castShadow>
          <sphereGeometry args={[0.34, 18, 16]} />
          <meshStandardMaterial color="#efece4" roughness={1} />
        </mesh>
        {/* wool crown — gentle bumps along the back */}
        {[
          [0, 0.2, -0.14, 0.17],
          [0, 0.24, 0.02, 0.19],
          [0, 0.19, 0.17, 0.15],
        ].map(([x, y, z, r], i) => (
          <mesh key={i} position={[x, y, z]} scale={[1.15, 0.7, 1]}>
            <sphereGeometry args={[r, 12, 10]} />
            <meshStandardMaterial color="#f2efe8" roughness={1} />
          </mesh>
        ))}
        {/* legs — symmetric, slightly thicker */}
        {[
          [-0.15, 0.22],
          [0.15, 0.22],
          [-0.15, -0.22],
          [0.15, -0.22],
        ].map(([x, z], i) => (
          <mesh key={i} position={[x, -0.37, z]} castShadow>
            <cylinderGeometry args={[0.05, 0.055, 0.4, 8]} />
            <meshStandardMaterial color="#57503f" roughness={1} />
          </mesh>
        ))}
        {/* head — proportioned, forward of the body */}
        <group ref={head} position={[0, 0.1, 0.42]}>
          <mesh position={[0, 0.02, 0.05]} scale={[0.92, 1, 1.12]} castShadow>
            <sphereGeometry args={[0.135, 14, 14]} />
            <meshStandardMaterial color="#5c5148" roughness={1} />
          </mesh>
          {/* muzzle */}
          <mesh position={[0, -0.03, 0.17]} scale={[0.82, 0.72, 1]}>
            <sphereGeometry args={[0.075, 12, 10]} />
            <meshStandardMaterial color="#6d6053" roughness={1} />
          </mesh>
          <mesh position={[0, -0.03, 0.24]}>
            <sphereGeometry args={[0.014, 6, 6]} />
            <meshStandardMaterial color="#2a211c" roughness={0.5} />
          </mesh>
          {/* eyes */}
          {[-0.062, 0.062].map((x) => (
            <mesh key={x} position={[x, 0.05, 0.14]}>
              <sphereGeometry args={[0.016, 8, 8]} />
              <meshStandardMaterial color="#1c1418" roughness={0.3} />
            </mesh>
          ))}
          {/* droopy ears */}
          {[-0.13, 0.13].map((x) => (
            <mesh key={x} position={[x, 0.05, 0.02]} rotation={[0, 0, x > 0 ? -1.15 : 1.15]}>
              <capsuleGeometry args={[0.03, 0.1, 4, 8]} />
              <meshStandardMaterial color="#4c4238" roughness={1} />
            </mesh>
          ))}
          {/* wool tuft on the crown */}
          <mesh position={[0, 0.15, -0.02]} scale={[1.1, 0.8, 1]}>
            <sphereGeometry args={[0.1, 12, 10]} />
            <meshStandardMaterial color="#f2efe8" roughness={1} />
          </mesh>
        </group>
        {/* tail */}
        <mesh ref={tail} position={[0, 0.14, -0.46]}>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial color="#f2efe8" roughness={1} />
        </mesh>
      </group>
    </group>
  );
}

export function SheepFlock() {
  return (
    <group>
      {SHEEP_ZONES.map((z, i) => (
        <Sheep key={`s${i}`} zone={z} seed={i * 5 + 2} />
      ))}
      <Sheep zone={SHEEP_ZONES[0]} seed={7} />
      <Sheep zone={SHEEP_ZONES[1]} seed={12} />
    </group>
  );
}
