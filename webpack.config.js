const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  mode: 'development',
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?|\.tsx?|\.js?$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  externals:['react','react-dom'],
  resolve: {
    extensions: ['.js','.jsx','.ts']
  },
  optimization: {
    // sideEffects: false,
    usedExports: true,
    minimize: true,
  },
  plugins:  [
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}