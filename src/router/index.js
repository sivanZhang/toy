import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import chat from '@/components/chat'
import userCenter from '@/components/user-center/userCenter'
import login from '@/components/login/login'
import signUp from '@/components/login/signUp'
import forgot from '@/components/login/forgot'
import details from '@/components/home/details'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/details/:pid',
            name: 'details',
            component: details
        },
        {
            path: '/chat',
            component: chat
        },
        {
            path: '/user-center',
            component: userCenter
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/signup',
            component: signUp
        },
        {
            path: '/forgot',
            component: forgot
        }
    ]
})