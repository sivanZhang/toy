import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import vueCookie from 'vue-cookie'
import $ from 'jquery'
import App from './App'
import router from './router'
import '../static/js/jquery.message.js'
import '../static/bootstrap-3.3.7/js/bootstrap.min.js'
import '../static/bootstrap-3.3.7/css/bootstrap.min.css'
import '../static/css/base.css'

Vue.use(VueAxios, axios, vueCookie, $)
Vue.prototype.$cookie = vueCookie
Vue.prototype.$qs = qs
Vue.config.productionTip = false

import footeMenu from './components/footeMenu'
Vue.component('foote-menu', footeMenu)//注册全局组件

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
