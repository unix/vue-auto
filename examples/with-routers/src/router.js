import Vue from 'vue'
import Router from 'vue-router'
import { withRouters } from '../../../index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: withRouters([
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
  ])
})
