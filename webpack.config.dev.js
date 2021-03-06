const path = require('path');
const webpack = require('webpack');

export default {
  entry : [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot-loader', 'babel-loader'],
        
      }
    ],
  }
}