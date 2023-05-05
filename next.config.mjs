/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: "imgix",
    path: 'r2l.imgix.net',
  },
  assetPrefix: './',
};

export default nextConfig;
