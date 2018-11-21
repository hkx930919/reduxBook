const WebpackMerge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = WebpackMerge(common,{
    mode:'production',
    plugins:[
        new UglifyJSPlugin({sourceMap: true}),
        new webpack.DefinePlugin({
           'process.env.NODE_ENV':JSON.stringify('production')
        })
    ]
})