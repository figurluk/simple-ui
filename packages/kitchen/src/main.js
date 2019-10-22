import Vue from 'vue'
import App from './App.vue'
import SimpleUI from 'ui-simple'

Vue.config.productionTip = false
Vue.use(SimpleUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
