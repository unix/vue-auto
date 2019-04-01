import Vue from 'vue'
import app from './app.vue'
import { install } from '../../../index'
import router from './router'

install(Vue)
new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
