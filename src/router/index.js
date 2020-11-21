import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home')
const Profile = () => import('../views/profile/profile')
const Cart=()=>import('../views/cart/cart')
const Category = ()=>import('../views/category/category')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect:'/home'
    }, {
        path: '/home',
        component:Home
    }, {
        path: '/category',
        component:Category
    }, {
        path: '/profile',
        component:Profile
    }, {
        path: '/cart',
        component:Cart
    }
]

const router = new VueRouter(
    {
routes
    }
)

export default router