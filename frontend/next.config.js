/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    proxyTimeout: 6000000,
  },
};

module.exports = nextConfig;
