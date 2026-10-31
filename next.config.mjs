/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 produces a fully static build in ./out for GitHub Pages
// (served under /metaverse). Without it, a normal server build is produced.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  ...(isStaticExport
    ? {
        output: "export",
        basePath: "/metaverse",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
