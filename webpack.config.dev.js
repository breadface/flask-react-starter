const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILD_DIR = "./app/static"

const sassOptions = JSON.stringify({
  includePaths: [ path.resolve(__dirname, "frontend/src/assets")],
  sourceMap: true,
  outputStyle: "expanded",
});

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './frontend/src/app/index.js'
  ],
  output: {
    path: path.resolve(BUILD_DIR),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
        path.resolve(__dirname,  "frontend/src/app"),
        path.resolve(__dirname , "frontend/src/assets"),
        "node_modules"
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'frontend/src/app'),
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader!autoprefixer-loader!sass-loader?" + sassOptions,
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("bundle.css")
  ],
  target: 'web'
};

module.exports = config;
