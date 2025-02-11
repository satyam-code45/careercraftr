import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["randomuser.me"], // ✅ Allow external images from randomuser.me
  },
};

export default nextConfig;
