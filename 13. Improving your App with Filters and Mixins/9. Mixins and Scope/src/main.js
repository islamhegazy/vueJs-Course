import Vue from 'vue'
import App from './App.vue'
Vue.filter('to-lowercase' ,function(value){
  return value.toLowerCase();
});
Vue.mixin({
  created(){
    console.log('Global Mixin - created Hook')
    /*
    it will show 3 times 

    1- because new Vue()
    2- because App.vue renderd
    3- because List.vue
    */
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
