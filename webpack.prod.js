const path = require ('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const cssMinimizerWebpackPlugin = require ('css-minimizer-webpack-plugin');
const terserWebpackPlugin = require ('terser-webpack-plugin');
const WorkboxPlugin = require ('workbox-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    optimization: {minimizer: [new terserWebpackPlugin({}), new cssMinimizerWebpackPlugin({})]},
    output: {
        libraryTarget: 'var',
        library: 'Fox',
    },
    module: {
        rules: [
            {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        },
            {  test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {  test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]
            }
    ]
    },
    plugins: [
                new HtmlWebPackPlugin({
                    template:"./src/index.html",
                   
                }),
                new MiniCssExtractPlugin({filename: "[name].css"}),
                new WorkboxPlugin.GenerateSW()
    ],
    mode: 'production',
}