const { dependencies } = require('./package.json')

module.exports = {
  name: 'host',
  remotes: {
    remote:
      process.env.NODE_ENV === 'development'
        ? 'remote@http://localhost:3001/remoteEntry.js'
        : process.env.NODE_ENV === 'production' &&
          'remote@https://common.vipsace.org/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
}
