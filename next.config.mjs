/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js

  images: {
    domains: ['example.com', 'www.google.com', "i.ibb.co"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
