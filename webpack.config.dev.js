var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/dev-server',
    path.join(__dirname, 'app')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react-hmre']
        }
      },
      {
        test: /^((?!\.local).)*\.css$/,
        loaders: ['style', 'css', 'cssnext']
      },
      {
        test: /\.local.css$/,
        loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']
      },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.webpack.js', '.web.js']
  },

  devServer: {
    inline: true,
    hot: true,
    port: 3030,
    contentBase: path.join(__dirname, 'public')
  }
};
