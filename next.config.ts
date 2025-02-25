import type { NextConfig } from "next";

const { withContentlayer } = require('next-contentlayer')

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