import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* 1 - below attributes added explicitly added here for github pages */
  output: 'export',
  images: {
    unoptimized: true // REQUIRED for GitHub Pages
  },
  basePath: '/buttr.io',
  assetPrefix: '/buttr.io'
  /* end 1 */
};

export default nextConfig;
