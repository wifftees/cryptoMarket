const prod = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMockServer = require("webpack-mock-server")
const path = require('path')

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: {
        'app': path.resolve(__dirname, 'src', 'index.tsx'),
        'css': path.resolve(__dirname, 'src/styles', 'main.css'),
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
        publicPath: '/'
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
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude:  /\.module\.scss$/,
            },
        ],
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
    devServer: {
        open: true,
        historyApiFallback: true,
        hot: true,
        onBeforeSetupMiddleware: (devServer) => 
            webpackMockServer.use(devServer.app, {
                entry: [
                    './webpack.mock.ts'
                ],
                before: (req, res, next) => { // you can use this for custom-logging instead of logResponses: true, logRequests: true
                    console.log(`Got request: ${req.method} ${req.url}`);
                    res.once("finish", () => {
                        console.log(`Sent response: ${req.method} ${req.url}`);
                    })
                    next();
                }
            })
    },
    optimization: {
        runtimeChunk: 'single'
    }
}
