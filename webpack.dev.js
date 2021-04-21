const path = require ('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
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
          
    ]
    },
    plugins: [
                new HtmlWebPackPlugin({
                    template:"./src/index.html",
                   
                }),
               
    ],
    mode: 'development',
}