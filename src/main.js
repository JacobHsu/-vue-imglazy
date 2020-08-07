import Vue from 'vue'
import App from './App.vue'
// import imgLazy from '@/directive/imgLazy.js'

Vue.config.productionTip = false
// Vue.directive('imgLazy', imgLazy)

new Vue({
  render: h => h(App),
}).$mount('#app')
