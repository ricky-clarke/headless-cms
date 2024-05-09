/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backend.granite5.com',
            port: '',
          //  pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'ricky-react-app-headless.vercel.app',
            port: '',
          //  pathname: '/account123/**',
          },
        ],
      },
    
}

module.exports = nextConfig
