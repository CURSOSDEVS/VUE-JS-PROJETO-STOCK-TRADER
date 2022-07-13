import Vue from 'vue'
import Vuex from 'vuex'

import stocksModule from '../store/modulos/stocksModulo'
import portfolioModule from '../store/modulos/portfolioModulo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{ stocksModule, portfolioModule }
})
