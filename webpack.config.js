const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.argv.includes('development')
const isProd = process.argv.includes('production')
const devServerPort = 4444
const devtool = isDev ? 'source-map' : false

module.exports = {
    cache: false,
    devtool,
    context: path.resolve(__dirname),
    entry: { app: `./src/index.ts` },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true,
        publicPath: isDev ? '/' : '',
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.vue', 'scss', 'css'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev ? true : false } },
                    { loader: 'sass-loader', options: { sourceMap: isDev ? true : false } },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new webpack.WatchIgnorePlugin({
            paths: [/\.js$/],
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/assets/svg-sprite.svg', to: '' }],
        }),
    ],
    devServer: {
        client: {
            overlay: true,
            progress: true,
        },
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: devServerPort,
        compress: true,
        historyApiFallback: true,
    },
    experiments: {
        topLevelAwait: true,
    },
}
