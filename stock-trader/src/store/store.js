import Vue from 'vue'
import Vuex from 'vuex'

import stocksModule from '../store/modulos/stocksModulo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{ stocksModule }
})
