import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue ({
  methods:{
    changeAge(age){
      this.$emit('ageWasEdited', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

//11. Using an Event Bus for Communication

