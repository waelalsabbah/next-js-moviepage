/** @type {import('next').NextConfig} */
/* const nextConfig = {
  VideoPlayer: {
    domains: ['video.youtube.com'],
  },
};

module.exports = nextConfig; */

const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;

/* module.exports = {
  env: { apiKey: process.env.API_KEY },
  serverRuntimeConfig: { apiKey: process.env.API_KEY },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.API_KEY,
  },
};
 */
