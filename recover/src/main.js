import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api.js'
Vue.prototype.host="/testIp"

Vue.use(ElementUI)

new Vue({
    el:'#app',
    ElementUI,
    router,
    render:h=>h(App),
}) 
