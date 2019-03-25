<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <appQuote>
                   <h1>The Quote</h1>
                   <p>A wonderful Quote</p>
               </appQuote>
            
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
    export default {
        components:{
            appQuote:Quote
        }
    }
</script>

<style>
</style>
