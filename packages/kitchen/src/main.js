import Vue from 'vue'
import App from './App.vue'
import SimpleUI from 'ui-simple'
import '../src/assets/css/tailwind.css'

Vue.config.productionTip = false
Vue.use(SimpleUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
