const { dependencies } = require('./package.json')

module.exports = {
  name: 'remote',
  exposes: {
    './Button': './src/components/Button/Button.tsx',
    './Navbar': './src/components/Navbar/Navbar.tsx',
  },
  filename: 'remoteEntry.js',
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
