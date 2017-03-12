// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'

import storeConfig from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Mainpage',
      path: '/',
      component: resolve => require(['./components/views/mainpage.vue'], resolve)
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      component: resolve => require(['./components/views/portfolio.vue'], resolve)
    }
    // {
    //   name: 'Hire',
    //   path: '/hire',
    //   component: resolve => require(['./components/views/hire.vue'], resolve)
    // }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
