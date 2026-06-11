import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/places/**",
      },
      {
        protocol: "https",
        hostname: "imagesx.practo.com",
        pathname: "/providers/**",
      },
    ],
  },
};

export default nextConfig;
