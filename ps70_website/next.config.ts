import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/PS70-assignments',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
