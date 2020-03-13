import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './icons/index'
import './utils/plugins'
import './utils/custom'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
