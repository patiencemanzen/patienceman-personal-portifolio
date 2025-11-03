/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Performance optimizations for Next.js 16
  experimental: {
    optimizePackageImports: ["@fortawesome/react-fontawesome", "framer-motion"],
  },

  // Compression
  compress: true,

  env: {
    dir: "/",
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
        pathname: "?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.shields.io",
        pathname: "/badge/**",
      },
      {
        protocol: "https",
        hostname: "**.shields.io",
        pathname: "/github/**",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gdb.voanews.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
