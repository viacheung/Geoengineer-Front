import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import HomePage from "@/views/HomePage.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录页',
        component: Login
    },
    {
        path: '/homePage',
        name: '主页',
        component: HomePage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
