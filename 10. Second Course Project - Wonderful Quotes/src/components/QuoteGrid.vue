<template>
    <div class="row">
        <appQoute v-for="(quote , index) in quotes" :key="index" @click.native="deleteQuote(index)">{{quote}}</appQoute>
    </div>
</template>
<script>
    import Qoute from './Quote';
    export default {
        props : ['quotes'],
        components : {
            appQoute: Qoute
        },
        methods: {
            deleteQuote(index){
                this.$emit('quoteDeleted',index )
            }
        },
    }
</script>
<style lang="sass" scoped></style>