const path = require("path")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  devServer: {
    allowedHosts: "all",
    client: {
      overlay: true,
      progress: false,
      webSocketURL: "auto://0.0.0.0:0/ws"
    },
    devMiddleware: {
      publicPath: "/",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: {
      index: "index.html",
    },
    hot: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
    static: ["./static"],
  },
  entry: "./index.tsx",
  // TODO: 
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: true,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "out"),
  },
  target: "web",
}
