const path = require("path"); 

module.exports = { 
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }, 
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        use: "html-loader"
    },
    {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
        generator: {
            filename: "images/[name]-[hash][ext]"
        }
    }
    ],
  },
};