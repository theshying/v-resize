import Vue from 'vue'
import App from './App.vue'
import vResize from '@theshy/v-resize'
Vue.use(vResize)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
