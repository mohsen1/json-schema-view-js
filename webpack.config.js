var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

var libraryName = 'json-schema-view-js';

var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                enforce: 'pre',
                use: [
                    { loader: require.resolve('eslint-loader') }
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    },
    plugins: []
};

module.exports = config;