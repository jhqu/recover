import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import About from '../pages/about.vue'
import Login from '../pages/login.vue'
import Vue  from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
           path:'/',
           component:home
        },
        {
            path:'/about',
            component:About
         },
         {
            path:'/login',
            component:Login
         }
    ]
})
export default router   