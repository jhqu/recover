const path = require('path')

module.exports ={
    entry: {
       app1:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'built.js'
    },
    module:{
        
    },
    mode:'development'
}
