var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client',
    //__dirname + '/app/'
    path.join(__dirname, 'app')
  ],
  output: {
    path: path.join(__dirname, 'dis'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
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
  }
};
