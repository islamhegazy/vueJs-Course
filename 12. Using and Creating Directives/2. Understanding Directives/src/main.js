import Vue from 'vue'
import App from './App.vue'
 //global directive used like v-highlight
Vue.directive('highlight' ,{

})


new Vue({
  el: '#app',
  render: h => h(App)
})
