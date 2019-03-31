import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  //4. Understanding Routing Modes (Hash vs History)
  mode:'history', //use to remove # from url
  //22. Controlling the Scroll Behavior
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
       return  {selector: to.hash}
    }
    return {x:0, y:0}; //default
  }
});
//24. Using the beforeEnter Guard
router.beforeEach((to, form, next) =>{
  console.log('global beforeEach');
  next(); //next(false); //next({path:});
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
