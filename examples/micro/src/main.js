import Vue from 'vue'
import app from './app.vue'
import { install } from '../../../index'

install(Vue)
new Vue({
  render: h => h(app)
}).$mount('#app')
