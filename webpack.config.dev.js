const webpack = require("webpack");
//allow us to work with paths
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//for babel plug-ins to know mode
process.env.NODE_ENV = "development";

module.exports = {
  //webpack knows to run in dev mode; set node env to dev as well
  mode: "development",
  //webpack bundles code based on this; other choice is node; changes how webpack bundles the code
  target: "web",
  //generate source maps for debugging; allow for viewing of original code
  devtool: "cheap-module-source-map",
  //app entry point; this is also the default value for webpack
  entry: "./src/index",
  //in dev mode, webpack doesnt output code in dev mode - it outputs to memory
  output: {
    //__dirname = current dir name
    path: path.resolve(__dirname, "build"),
    //public url of the output directory when it is referenced in the browser
    publicPath: "/",
    //filename for the generated bundle
    filename: "bundle.js"
  },
  //webpack is user to serve app for development
  devServer: {
    //reduces info writes to command line when running
    stats: "minimal",
    //overlay any errors that occur in brower
    overlay: true,
    //all requests will be sent to index.html to be handled by react routed
    historyApiFallback: true,
    //for chrome related issues with webpack
    disableHostCheck: true,
    //for chrome related issues with webpack
    headers: { "Access-Control-Allow-Origin": "*" },
    //for chrome related issues with webpack
    https: false
  },
  //configure the plugin import above
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  //which files do we want webpack to handle?
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
