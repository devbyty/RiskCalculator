/** @type {import('next').NextConfig} */
const repo = "real-cost"; // <-- CHANGE THIS to your repo name

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

export default nextConfig;