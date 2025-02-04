import type { NextConfig } from "next";

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

export default nextConfig;
