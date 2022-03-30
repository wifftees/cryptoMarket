/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src', 'index.tsx'),
        css: path.resolve(__dirname, 'src/styles', 'main.css'),
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
    optimization: {
        runtimeChunk: 'all',
    },
}
