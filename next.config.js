const webpack = require('webpack');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'localhost', ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }))
    return config;
  }
}
