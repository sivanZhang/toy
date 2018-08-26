import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import chat from '@/components/chat'
import userCenter from '@/components/user-center/userCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/user-center',
      component: userCenter
    }
  ]
})
