import type { NextConfig } from "next";
import withSvgr from '@svgr/webpack';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;