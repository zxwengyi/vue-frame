import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'

Vue.use(Vuex)

const ms = require.context('./modules', false, /\.js$/)
const modules = {}
ms.keys().forEach(k => {
  const n = k.substring(2, k.length - 3)
  modules[n] = ms(k).default
});

const store = new Vuex.Store({
  namespaced: true,
  modules,
  getters
})
export default store
