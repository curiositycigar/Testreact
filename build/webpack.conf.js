/**
 * Created by YOU on 2017/8/1.
 */
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(tsx|ts)?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          tsConfigFile: path.resolve(__dirname, '../tsconfig.json')
        }
      },
      {
        test: /\.styl?$/,
        loader: 'stylus-loader'
      }
    ]
  }
}