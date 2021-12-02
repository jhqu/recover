const {resolve} = require('path');
const {VueLoaderPlugin}=require('vue-loader');
module.exports ={
    entry:'./src/main.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'dist')
    },
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
            {
                test:/.(png|jpe?g|gif|svg|webp)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        esModule:false
                    }
                }
            },
            {
                test:/.(png|jpe?g|gif|svg|webp)$/,
                type:'asset/resouce'
            }
        ]
    },
    plugins:[
     new VueLoaderPlugin()
    ]
}