const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    resolve: {
        modules: ['node_modules']
    },
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '/dist')
    },
    watch: true,
    watchOptions: {
        ignored: '**/node_modules/'
    },
    module: {
        rules: [
          {
            test: /\.(ttf|woff|eot)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          },
          {
            test: /\.css$/,
            use:['style-loader','css-loader']
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            inject: 'body'
        })
    ]
}