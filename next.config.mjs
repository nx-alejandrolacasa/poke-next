/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
}

export default nextConfig
