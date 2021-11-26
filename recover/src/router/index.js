import Vue from "vue";
import Router from "vue-router"
import hellword from '../components/HelloWorld'
import foo from '../components/food'
import login from '../views/login'
Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/',
            name:'login',
            component:login
        },
        {
            path:'/hello',
            name:'hello',
            component:hellword
        },
        {
            path:'/food',
            name:'food',
            component:foo
        }
    ]
})

export default router;