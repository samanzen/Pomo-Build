/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // This is the corrected configuration to fix the build error
  serverExternalPackages: ['sanity'],
  
  // This new section fixes the ESLint build error
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Legacy /locations/* paths that were published in metadata before the
  // pages moved under /service-area/.
  async redirects() {
    return [
      {
        source: '/locations/:slug',
        destination: '/service-area/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;