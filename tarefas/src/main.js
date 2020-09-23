import Vue from 'vue'
import App from './App.vue'
import { install } from 'lib-font-colors'
import 'lib-font-colors/dist/libFontColors.css'

Vue.config.productionTip = false
Vue.use(install)

new Vue({
  render: h => h(App),
}).$mount('#app')
