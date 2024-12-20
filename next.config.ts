import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [];
  },
  images: {
    domains: ["vetmart.com.ua"],
  },
};

export default nextConfig;
