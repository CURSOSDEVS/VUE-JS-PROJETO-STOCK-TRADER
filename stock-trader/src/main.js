import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify'

import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value=>{
    return 'R$' + value.toLocaleString()
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
