"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { playerState } from "@/lib/input";
import type { V3 } from "@/lib/layout";

/**
 * A name tag that only appears when the player is within `radius`.
 * Used for POIs so the world isn't littered with labels.
 */
export function NearTag({
  position,
  radius = 4,
  children,
}: {
  position: V3;
  radius?: number;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useFrame(() => {
    const d = Math.hypot(playerState.pos.x - position[0], playerState.pos.z - position[2]);
    const v = d < radius;
    if (v !== visible) setVisible(v);
  });

  if (!visible) return null;
  return (
    <Html position={position} center style={{ pointerEvents: "none" }} zIndexRange={[9, 0]}>
      <div className="tag3d font-display anim-fade-up">{children}</div>
    </Html>
  );
}
