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
  async rewrites() {
    return [
      {
        source: "/api/public/:path*",
        destination: "http://localhost:3000/api/public/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
