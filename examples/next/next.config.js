/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// This feature enables importing the Codat package from a URL
module.exports = {
  experimental: {
    urlImports: ["https://link-sdk.codat.io"],
  },
};
