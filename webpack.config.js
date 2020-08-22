const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },

    entry: {
        app: path.join(__dirname, 'src/main.js'),
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: ['vue-loader'],
            }, {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: {
                            raw: true
                        }
                    }
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    }
}