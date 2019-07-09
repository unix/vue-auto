import Vue from 'vue'
import app from './app.vue'
import { install } from 'vue-auto'

const router = install(Vue)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
