<template>
    <p>Counter is: {{ counter }}</p>
</template>
// we has same code in AnotherResult so the solution use getters
<script>
    export default {
       computed: {
           counter(){
               return this.$store.state.counter * 2;
           }
       },
    }
</script>