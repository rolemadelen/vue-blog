const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },

    entry: {
        app: path.join(__dirname, 'main.js'),
    },

    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.md$/,
            use: [
                {
                    loader: 'vue-loader'
                },
                {
                    loader: 'vue-markdown-loader/lib/markdown-compiler',
                    options: {
                        raw: true,
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader'],
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 2,
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'chunk.bundle.js',
        publicPath: '/dist/',
    },

}