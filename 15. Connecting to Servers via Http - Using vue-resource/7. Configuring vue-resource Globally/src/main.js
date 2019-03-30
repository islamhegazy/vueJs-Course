import Vue from 'vue'
import App from './App.vue'

import VueResourse from 'vue-resource';
Vue.use(VueResourse);
//7. Configuring vue-resource Globally
Vue.http.options.root = 'https://vuejs-bd479.firebaseio.com/data.json';
new Vue({
  el: '#app',
  render: h => h(App)
})
