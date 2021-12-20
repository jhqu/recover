const Mock = require('mockjs')
let id = Mock.mock('@id')
    let obj = Mock.mock({
        id:'@id'
    })
    //console.log(obj);

 
    for (let index = 0; index < 10; index++) {
        let name=Mock.mock({
            id: '@id()',
            name: '@cname()',
            date:'@date()',
            sex:'@boolean'
     
         })
         console.log(name);
    }
 