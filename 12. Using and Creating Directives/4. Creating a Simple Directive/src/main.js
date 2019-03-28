import Vue from 'vue'
import App from './App.vue'
 //global directive used like v-highlight
Vue.directive('highlight' ,{
  bind(el,binding, vnode){
    el.style.backgroundColor = 'green';
    el.style.color = '#fff'
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
