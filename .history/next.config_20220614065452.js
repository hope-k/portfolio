
const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config()


module.exports = {
  reactStrictMode: true,
      webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    },
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    SENDGRID_API_KEY: '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'
  }
}





module.exports = {

    reactStrictMode: false,

    env: {
        NEXTAUTH_URL: 'luxuryspot.vercel.app',
        NEXT_PUBLIC_URL: 'luxuryspot.vercel.app'
    },
    images: {
        domains: ['a0.muscache.com', 'res.cloudinary.com'],
    }
}
