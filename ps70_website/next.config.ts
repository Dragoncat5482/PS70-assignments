import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Comment this out for dev work
  // HOW TO DEPLOY: DELETE node_modules, run npm i, then run npm deploy
  // basePath: '/PS70-assignments',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
