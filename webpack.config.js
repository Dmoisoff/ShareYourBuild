const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, "frontend", "share_your_build.jsx"),
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};
