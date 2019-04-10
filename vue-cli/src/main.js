import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store/store';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history' //use to remove # from url
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
