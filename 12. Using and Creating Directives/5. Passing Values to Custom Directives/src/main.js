import Vue from 'vue'
import App from './App.vue'
 //global directive used like v-highlight
Vue.directive('highlight' ,{
  bind(el,binding, vnode){
    el.style.backgroundColor = binding.value;
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
