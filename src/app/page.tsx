"use client";

import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/world/World"), {
  ssr: false,
  loading: () => null,
});

export default function Page() {
  return <World />;
}
