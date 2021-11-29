//resolve 拼接路径方法

const {resolve} = require('path');
const VueloadPlugin = require('vue-loader/lib/plugin');
const htmlPlugin = require('html-webpack-plugin')
console.log(resolve(__dirname));
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'mains.js',
        path:resolve(__dirname,'built')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['vue-style-loader','style-loader','css-loader']
            },
            {
                test: /\.vue$/,
                use:['style-loader','css-loader','vue-loader']
               
            },
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        //presets:['es2015']
                    }
                }
               
            },
        ]
    },
    plugins:[
            new VueloadPlugin(),
            new htmlPlugin({
                template:'./public/index.html',
                filename:'index.html'
            })
    ],
    
    mode:'development'
}