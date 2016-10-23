/* eslint-disable */

var cssnext = require('postcss-cssnext');
var variables = require("./src/variables");
var forLoop =  require('postcss-for');
var CarteBlanche = require('carte-blanche');
var ReactPlugin = require('carte-blanche-react-plugin');
// var SourcePlugin = require('carte-blanche-source-plugin');
var HtmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test:   /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: __dirname + '/src/html/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CarteBlanche({
            componentRoot: './src/components',
            filter: /.*\.jsx$/,
            plugins: [
                new ReactPlugin()
            ]
        }),
    ],
    postcss: function () {
        return [
            forLoop,
            cssnext({
                features: {
                    customProperties:{
                        variables: variables
                    }
                }
            })
        ];
    }
}
