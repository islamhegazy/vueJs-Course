import Vue from 'vue'
import App from './App.vue'
 //global directive used like v-highlight
Vue.directive('highlight' ,{
  bind(el,binding, vnode){
    if(binding.arg =='background'){
      el.style.backgroundColor = binding.value;
    }else{
      el.style.color = binding.value;
    }
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
