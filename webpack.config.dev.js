const path = require('path');
const base = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({},base,{
  mode: 'development',
  devServer: {
    port: 10001,
    contentBase: path.join(__dirname, "build"),
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ]
})