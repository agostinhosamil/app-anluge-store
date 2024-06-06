/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost'
      },
      {
        hostname: 'cdn.anluge.com'
      }
    ]
  }
}
module.exports = nextConfig
