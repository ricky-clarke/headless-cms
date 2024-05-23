/** @type {import('next').NextConfig} */
// const path = require('path')

const nextConfig = {

  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },

    images: {
        loader: 'default',
        deviceSizes: [395, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backend.granite5.com',
            port: '',
          //  pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'https://ricky-react-app-headless.vercel.app',
            port: '',
          //  pathname: '/account123/**',
          },
        ],
      },
    
}

module.exports = nextConfig
