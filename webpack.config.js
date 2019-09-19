const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

require('dotenv/config')

const commonConfig = merge([
  {
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { exclude: /node_modules/, test: /\.js$/, use: ['babel-loader'] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
])

const developmentConfig = merge([
  {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      inline: true,
      port: process.env.PORT || 8001
    }
  }
])

const productionConfig = merge([])

module.exports = mode => {
  const envConfig = mode === 'development' ? developmentConfig : productionConfig
  return merge(commonConfig, envConfig, { mode })
}
