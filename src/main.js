import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import SimpleUI from '@/framework'

Vue.config.productionTip = false
Vue.use(SimpleUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
