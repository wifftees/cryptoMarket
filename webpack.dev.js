/* eslint-disable @typescript-eslint/no-var-requires */

const webpackMockServer = require('webpack-mock-server')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        clean: true, // keeping dist folder from file duplicating
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,
        onBeforeSetupMiddleware: (devServer) =>
            webpackMockServer.use(devServer.app, {
                tsConfigFileName: 'tsconfig.json',
                entry: ['./webpack.mock.ts'],
            }),
    },
    optimization: {
        runtimeChunk: 'single',
    },
})
