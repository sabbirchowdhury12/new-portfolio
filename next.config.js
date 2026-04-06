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
        destination: "https://personal-editor.vercel.app/api/public/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
