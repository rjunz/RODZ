import type { NextConfig } from "next";

const API = process.env.API_BASE_URL ?? "https://ar.rjunz.com";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API}/:path*`,
      },
    ];
  },
  images: { unoptimized: true }, // ajuda no build/infra
};

export default nextConfig;
