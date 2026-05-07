import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/MyPortfolio" : "",
  assetPrefix: isGitHubPages ? "/MyPortfolio/" : "",
};

export default nextConfig;
