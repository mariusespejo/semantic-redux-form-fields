const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'lib');
const APP_DIR = path.resolve(__dirname, 'src');

const WebpackConfig = {
  entry: APP_DIR + '/index.js',
  mode: 'production',
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'SemanticReduxFormFields'
  },
  externals: ['react', 'react-dom', 'semantic-ui-react', 'redux-form', 'react-datepicker', 'react-redux', 'moment'],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.js$/,
        exclude: /node_modules/,
        include: APP_DIR
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};

module.exports = WebpackConfig;
