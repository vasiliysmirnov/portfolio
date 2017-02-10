// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/',
      component: resolve => require(['./components/views/main.vue'], resolve)
    },
    {
      name: 'portfolio',
      path: '/portfolio',
      component: resolve => require(['./components/views/portfolio.vue'], resolve)
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
