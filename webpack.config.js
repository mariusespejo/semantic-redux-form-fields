const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'lib');
const APP_DIR = path.resolve(__dirname, 'src');

const WebpackConfig = {
  entry: APP_DIR + '/index.js',

  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'SemanticReduxFormFields'
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.js$/,
        exclude: /node_modules/,
        include: APP_DIR
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  WebpackConfig.externals = {
    react: 'react',
    'react-dom': 'react-dom'
  };

  WebpackConfig.plugins = [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    })
  ];
}

module.exports = WebpackConfig;
