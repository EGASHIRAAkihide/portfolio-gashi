/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  experimental: { images: { allowFutureImage: true } },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
