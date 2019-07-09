import Vue from 'vue'
import app from './app.vue'
import { install } from 'vue-auto'

install(Vue, {
  autoRouter: false,
})

new Vue({
  render: h => h(app)
}).$mount('#app')
