import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'

import dash from './pages/dash/dash.vue'
import styleguide from './pages/styleguide/styleguide.vue'

Vue.use(VueResource)

const routes = {
  '/': dash,
  '/styleguide': styleguide,
}

new Vue({
  el: '#app',
  render: h => h(routes[window.location.pathname])
})
