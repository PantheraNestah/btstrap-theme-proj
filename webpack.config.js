"use strict"

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require("autoprefixer")
const miniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: "/src/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/js")
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "src/html/template1.html",
                filename: "../html/home.html"
            }
        ),
        new miniCssExtractPlugin(
            {
                filename: "../css/style.css"
            }
        )
    ],
    module: {
        rules: [
            {
                test: [/\.(scss)$/,/\.css$/],
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
        ]
    },
}
