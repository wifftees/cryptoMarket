/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
        clean: true, // keeping dist folder from file duplicating
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.css$|\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
                include: /\.module\.scss$/,
            },
            {
                test: /\.css$|\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /\.module\.scss$/,
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
})
