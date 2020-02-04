const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    usedExports: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    filename: "./main.js"
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "md4",
      hashDigest: "base64",
      hashDigestLength: 4
    }),
    new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/)
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  }
};
