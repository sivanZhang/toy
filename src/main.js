import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import qs from 'qs'
Vue.prototype.$qs = qs
import vueCookie from 'vue-cookie'
Vue.prototype.$cookie = vueCookie
import $ from 'jquery'
import App from './App'
import router from './router'
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'

import footeMenu from '@/components/base/footeMenu';
Vue.component('foote-menu', footeMenu);

import pageHeader from '@/components/base/pageHeader'
Vue.component('page-header', pageHeader) //必须一个引入后面跟一个全局组件不然局部CSS不生效

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})

//api代理和拦截
axios.defaults.baseURL = 'https://www.chidict.com/';
axios.interceptors.request.use(
    config => {
        var token = localStorage.token
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 这里写清除token的代码
                    localStorage.removeItem('token');
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
                    })
            }
        }
        return Promise.reject(error.response.data)
    });