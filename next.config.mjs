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
  // This is the corrected configuration, moved out of 'experimental'
  serverExternalPackages: ['sanity'],
};

export default nextConfig;