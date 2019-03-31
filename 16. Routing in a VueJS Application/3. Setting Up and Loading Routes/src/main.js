import Vue from 'vue';
//npm i vue-router
import VueRouter from 'vue-router';
import App from './App.vue';

import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
