/**
 * api.js
 */
import http from '../utils/http'
/**
 * @param request 请求地址 例如 http:192.168.1.2/request/
 * @param '/testIp' 代表vue-cli 中confi,index.js中配置的代理地址
 */

let resquest ="/recover/src/data"

//get 请求
export function getListAPI(params){

    return http.get(`${resquest}/getList.json`,params)
}
//post 请求
export function postFormAPI(params){
    return http.post(`${resquest}/postForm.json`,params)
}
//put 请求
export function putSomeAPI(params){
    return http.put(`${resquest}/putSome.json`,params)
}
//delete请求
export function deleteListAPI(params){
    return http.delete(`${resquest}/deleteList.json`)
}