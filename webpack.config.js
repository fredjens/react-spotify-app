'use strict'

var cssnext = require('postcss-cssnext');
var variables = require("./src/variables");
var forLoop =  require('postcss-for');

var HtmlWebpack = require('html-webpack-plugin');
var html = new HtmlWebpack({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

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
    plugins: [html],
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
