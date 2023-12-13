/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'headless.granite5.com',
            port: '',
          //  pathname: '/account123/**',
          },
        ],
      },
    
}

module.exports = nextConfig
