import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/:path',
        destination: '/:path/home',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
