<template>
    <div class="container">
        <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
        <appNewQuote @quoteAdded="newQoute" :quoteCount="quotes.length" :maxQuotes="maxQuotes">></appNewQuote>
        <appQuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></appQuoteGrid>
        <div class="row">
            <div class="col-xs-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>
<script>
 import QouteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';
    export default {
        data() {
            return {
                quotes: ['Just a Qoute to see something'],
                maxQuotes: 10}
        },
        methods: {
            newQoute(quote){
                if(this.quotes.length < this.maxQuotes ){
                    if(quote ===''){
                        alert('Please write Quote first');
                    }else{
                        this.quotes.push(quote)
                    }
                }else{
                    return;
                }
            },
            deleteQuote(index){
               this.quotes.splice(index,1);
                 
            }
        }, 
        components : {
            appQuoteGrid: QouteGrid,
            appNewQuote:NewQuote,
            appHeader:Header
        }
    }
</script>

<style></style>