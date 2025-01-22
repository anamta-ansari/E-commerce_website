/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'plus.unsplash.com',
              pathname: '/**', // Allow all paths under this domain
          },
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'next-ecommerce-template-4.vercel.app',
              pathname: '/**',
          },
      ],
  },
};

module.exports = nextConfig;
