import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // 生产环境也生成 source maps
  webpack(config, { dev, isServer }) {
    if (dev) {
      config.devtool = 'source-map'; // 开发环境启用 Source Maps
    }
    config.resolve.modules.push(path.resolve(__dirname));
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
      crypto: false,
    };
    return config;
  },
};

export default nextConfig;
