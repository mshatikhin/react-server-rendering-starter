const path = require("path");
const webpack = require('webpack');

module.exports = [
    {
        entry: "./src/server.js",
        output: {
            path: "./dist",
            filename: "server.js",
            libraryTarget: "commonjs2",
            publicPath: "/"
        },
        target: 'node',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }
            ]
        }
    },
    {
        context: path.resolve(__dirname, "src"),
        entry: "./app/browser.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "",
            filename: "assets/bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }
            ]
        }
    }]