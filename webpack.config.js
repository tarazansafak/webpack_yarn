var debug = process.env.NODE_ENV !== "production"; // if the env. is prod, it will run more commands to simplify
var webpack = require('webpack');

module.exports = {

    //base configuration
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js", //entery point
  output: {
    path: __dirname + "/js",
    filename: "bundle.js" //output
  },

    //define module rules here
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

    //plugins
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],


};
