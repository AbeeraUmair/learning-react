import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Unsplash domain
        port: '',  // Leave empty
        pathname: '/**',  // Allow all paths
      },
    ],
  },
};

export default nextConfig;
