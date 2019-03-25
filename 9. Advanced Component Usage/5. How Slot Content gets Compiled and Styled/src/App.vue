<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <appQuote>
                   <!--The html we pass here can be styled 
                   in the component where we passed to it-->
                   <h2>{{quoteTitle}}</h2>
                   <p>A wonderful Quote</p>
               </appQuote>
            
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
    export default {
        data() {
            return {
                quoteTitle: 'The Quote'
            }
        },
        components:{
            appQuote:Quote
        }
    }
</script>

<style scoped>

/*
this style not run because this is scoped here only and h2 is slot
so we can style it only in the component where h2 passed
h2{
    color: red
}
*/
</style>
