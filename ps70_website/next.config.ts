import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Comment this out for dev work
  basePath: '/PS70-assignments',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
