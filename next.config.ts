import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "http", hostname: "0.0.0.0" },
      { protocol: "https", hostname: "dev-blog-images.codebase.stream" },
    ],
  },
};

export default nextConfig;
