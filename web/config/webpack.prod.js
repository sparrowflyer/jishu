const merge = require('webpack-merge'),
    webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    commonConfig = require('./webpack.common.js'),
    publicConfig = {
        mode: 'production',
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }]
        },
        plugins: [
            new UglifyJSPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:5].css',
                allChunks: true
            })
        ]
    };

module.exports = merge(commonConfig, publicConfig);
