const {resolve} = require('path');
const {VueLoaderPlugin}=require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
module.exports ={
    entry:'./src/main.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'dist')
    },
   // devtool:'source-map',
    //devtool:'cheap-module-eval-source-map', //用于开发环境
    //devtool:'hidden-source-map', //用于生产环境
    module:{
        rules:[
            {
             test:/\.css$/,
             use:['style-loader','css-loader']
            },
            {
                test:/.vue$/,
                use:['vue-loader']
            },
            {
             test:/\.m?js$/,
             use:{
                 loader:'babel-loader',
                 options:{
                     presets:['@babel/preset-env']
                 }
             }
            },
            //老的写法
            // {
            //     test:/.(png|jpe?g|gif|svg|webp)$/,
            //     use:{
            //         loader:'file-loader',
            //         options:{
            //             esModule:false
            //         }
            //     } 
            // },
            {
                test:/.(png|jpe?g|gif|svg|webp)$/,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
     new VueLoaderPlugin(),
     new HtmlWebpackPlugin({
         template:'./index.html'
     }),
    //  new webpack.DefinePlugin({
    //     "process.env.NODE_ENV" : (JSON.stringify(process.env.NODE_ENV+'_aaaaa'))
    //  })
    ]
}