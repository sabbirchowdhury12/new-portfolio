/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.sabbir-chowdhury.pro.bd",
          },
        ],
        destination: "https://sabbir-chowdhury.pro.bd/:path*",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/public/:path*",
        destination: "https://personal-editor.vercel.app/api/public/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
