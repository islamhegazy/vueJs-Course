<template>
  <div>
    <appIndvStock v-for="stock in stocks" :stock="stock" :key="stock.id"></appIndvStock>
  </div>
</template>

<script>
    import indvStock  from './indvStock.vue'
  export default {
    components:{
        appIndvStock: indvStock
    }
  }

</script>
<style></style>
