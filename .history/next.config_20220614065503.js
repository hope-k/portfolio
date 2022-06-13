
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



