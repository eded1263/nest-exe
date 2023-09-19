const path = require('path');
const webpack = require('webpack');
const ignorePlugin = new webpack.IgnorePlugin({
  checkResource(resource) {
    const lazyImports = [
      '@nestjs/microservices',
      // ADD THIS
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets',
      // AND THIS
      '@nestjs/websockets/socket-module',
      '@nestjs/platform-express',
      'cache-manager',
      'class-validator',
      'class-transformer'
    ];

    if (!lazyImports.includes(resource)) {
      return false;
    }
    try {
      require.resolve(resource);
    } catch (err) {
      return true;
    }
    return false;
  }
});
module.exports = {
  mode: 'production',
  entry: ['regenerator-runtime/runtime.js', './build/main.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  stats: {
    errorDetails: true
  },
  plugins: [ignorePlugin]
};
