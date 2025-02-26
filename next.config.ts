import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }
    // Prevent webpack from resolving the 'canvas' module
    config.resolve.fallback["canvas"] = false;
    return config;
  },
};

module.exports = withContentlayer(nextConfig)