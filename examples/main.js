import Vue from 'vue'
import App from './App.vue'
// import vResize from '@theshy/v-resize'
import vResize from '../src/index'
Vue.use(vResize)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
