import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/portafolio.html" },
      ],
    };
  },
};

export default nextConfig;
