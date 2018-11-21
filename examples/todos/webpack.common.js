const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { app: "./index.js" },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [
           
            {
                test: /\.js|jsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    }
};
