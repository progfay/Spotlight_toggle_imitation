const withManifest = require('next-manifest')
const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin')

module.exports = withManifest({
  webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
    if (!isServer && !dev) {
      config.plugins.push(new NextWorkboxWebpackPlugin({
        distDir,
        buildId
      }))
    }
    config.node = { fs: 'empty' }
    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  },
  manifest: {
    'name': 'imitate Spotlight',
    'short_name': 'Spotlight',
    'description': 'Imitation of iPhone\'s Spotlight toggle interaction',
    'start_url': '/',
    'display': 'standalone',
    'orientation': 'portrait',
    'background_color': '#FFF',
    'theme_color': '#FFF',
    'icon': {
      'src': './icon/icon.png',
      'cache': true
    }
  }
})
