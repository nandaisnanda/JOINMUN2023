/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/reveal',
          destination: '/404',
          permanent: true,
        },
      ]
    },
}

module.exports = nextConfig
