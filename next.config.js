/** @type {import('next').NextConfig} */

/** For github pages */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: false,

  /** For github pages */
  basePath: basePath,
  assetPrefix: assetPrefix,
};

module.exports = nextConfig;
