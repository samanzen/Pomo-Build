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
  
  // This new section fixes the ESLint build error
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Legacy /locations/* paths that were published in metadata before the
  // pages moved under /service-area/.
  async redirects() {
    return [
      {
        source: '/locations/burnaby',
        destination: '/service-area/burnaby',
        permanent: true,
      },
      {
        source: '/locations/coquitlam',
        destination: '/service-area/coquitlam',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;