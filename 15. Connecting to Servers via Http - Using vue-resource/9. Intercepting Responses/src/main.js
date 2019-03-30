import Vue from 'vue'
import App from './App.vue'

import VueResourse from 'vue-resource';
Vue.use(VueResourse);
//7. Configuring vue-resource Globally
Vue.http.options.root = 'https://vuejs-bd479.firebaseio.com/data.json';

//8. Intercepting Requests
Vue.http.interceptors.push((request, next) =>{
  console.log(request)
 if(request.method == 'POST'){
  request.method = 'PUT'; // ovride old data no id
 }

 next( res =>{
   res.json = () => {return {messsages: res.body}}
 });

})
new Vue({
  el: '#app',
  render: h => h(App)
})
