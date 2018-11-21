const WebpackMerge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = WebpackMerge(common,{
    mode:'development',
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',
        port:8888,
        historyApiFallback:true
    }
})