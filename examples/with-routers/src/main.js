import Vue from 'vue'
import app from './app.vue'
import { install } from 'vue-auto'
import router from './router'

install(Vue)
new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
