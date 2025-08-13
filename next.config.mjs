/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // This is the corrected configuration to fix the build error
  serverExternalPackages: ['sanity'],
};

export default nextConfig;
