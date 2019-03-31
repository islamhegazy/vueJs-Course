import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  //4. Understanding Routing Modes (Hash vs History)
  mode:'history' //use to remove # from url
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
