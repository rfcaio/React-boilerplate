const ErrorOverlayWebpackPlugin = require('error-overlay-webpack-plugin')

exports.devServer = (options = {}) => ({
  devServer: Object.assign({ stats: 'errors-only' }, options)
})

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})

exports.useErrorOverlay = () => ({
  plugins: [new ErrorOverlayWebpackPlugin()]
})
