


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    SENDGRID_API_KEY: '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'
  }
}





module.exports = {

    reactStrictMode: false,
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    },
    env: {
        NEXTAUTH_URL: 'luxuryspot.vercel.app',
        NEXT_PUBLIC_URL: 'luxuryspot.vercel.app'
    },
    images: {
        domains: ['a0.muscache.com', 'res.cloudinary.com'],
    }
}
