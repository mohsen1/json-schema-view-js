var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {

    var cssFilename = 'style.css';
    var jsFilename = 'bundle.js';

    if (env && env.production) {
        cssFilename = 'style.min.css';
        jsFilename = 'bundle.min.js';
    }

    const extractLess = new ExtractTextPlugin({
        filename: cssFilename
    });

    var config = {
        entry: __dirname + '/src/index.js',
        devtool: 'source-map',
        output: {
            path: __dirname + '/dist',
            filename: jsFilename,
            library: 'json-schema-view-js',
            libraryTarget: 'umd'
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    enforce: 'pre',
                    use: [
                        { loader: require.resolve('eslint-loader') }
                    ],
                    include: path.resolve('./src')
                },
                {
                    test: /(\.jsx|\.js)$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.less$/,
                    use: extractLess.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "less-loader" // compiles Less to CSS
                        }]
                    })
                }
            ]
        },
        resolve: {
            modules: [path.resolve('./node_modules'), path.resolve('./src')],
            extensions: ['.json', '.js']
        },
        plugins: [
            extractLess,
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve('./demo/index.html'),
            }),
        ],
        devServer: {
            compress: true,
            contentBase: path.resolve('./dist'),
            watchContentBase: true,
            hot: false,
            watchOptions: {
                ignored: /node_modules/,
            }
        }
    };

    if (env && env.production) {
        config.plugins = config.plugins.concat([
            new UglifyJSPlugin({
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ])
    }

    return config;

}