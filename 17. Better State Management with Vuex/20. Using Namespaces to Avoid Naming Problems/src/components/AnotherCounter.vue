<template>
    <div>
        <h3>AnotherCounter</h3>
        <button class="btn btn-primary" @click="asynIncrement({by: 50, duration:1000})">asynIncrement</button>
        <button class="btn btn-primary" @click="asynDecrement({by: 50, duration:1000})">asyDecrement by 100</button>
    </div>
</template>

<script>
 import {mapActions} from 'vuex';
    export default {
        methods: {
       ...mapActions([
        'asynIncrement',
        'asynDecrement'   
       ]),
     /*  increment(by){
           this.$store.dispatch('increment', by)
       } */
        }
    }
</script>