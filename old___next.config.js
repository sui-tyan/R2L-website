/** @type {import('next').NextConfig} */

/** For github pages */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: false,

  /** For github pages */
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    loader: 'imgix',
    path: 'r2l.imgix.net',
  },
  plugins: ['autoprefixer']
};

module.exports = nextConfig;
