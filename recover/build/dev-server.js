const {resolve} =require('path');

module.exports = {
    entry:'../src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__filename,'built')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
           
        ]
    },
    plugins:[

    ],
    mode:'development'
}