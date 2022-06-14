


module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  },
  images: {
    domains: ['res.cloudinary.com']
  },
}



