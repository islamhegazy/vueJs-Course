<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <AnotherResult></AnotherResult>
        <hr>
        <app-counter></app-counter>
        <hr>
        <appAnotherCounter></appAnotherCounter>
        <hr>
        <!--
                <input type="text" :value="value">
                -->
        <!--display value and the problem we want to set it using
                v-model but it not work because value a computed property
                -->
        <!--
               <input type="text" v-model="value">
               {{value}}
                   -->
        <!-- we fix that by setup method -->
       <!--
        <input type="text" v-model="value" @input="updateValue">
        {{value}}
       -->
       <!--using short way v-model only by using seter and geter-->
        <input type="text" v-model="value">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from './components/AnotherCounter.vue';
  import Result from './components/Result.vue';
  import AnotherResult from './components/AnotherResult.vue';

  import {
    mapGetters
  } from 'vuex';
  export default {
    computed: {
     /*
      value() {
        return this.$store.getters.value;
      }
     */
    value:{
        get(){
            return this.$store.getters.value;
        },
        set(value){
            this.$store.dispatch('updateValue', value);
        }
    }
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value);
      }
    },
    components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      AnotherResult: AnotherResult
    }
  }

</script>
