<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <div class="form-group">
                    <label>Quote</label>
                    <textarea class="form-control" :disabled="quoteCount === maxQuotes ? true : false" rows="3" ref="textarea" v-model="quote" v-on:keyup.enter="createNew" autofocus></textarea>
                </div>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <div class="form-group">
                    <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import Qoute from './Quote';
    export default {
        props: ['quoteCount', 'maxQuotes'],
        data() {
            return {
                quote: '',
                initmaxQuote: this.maxQuotes
                }
        },
        methods: {
            createNew(){
               if(this.quoteCount === this.maxQuotes){
                   alert("done")
               }else{
                    this.$emit('quoteAdded' ,this.quote);
                    this.quote='';
                    this.$refs.textarea.focus();
               }
                
            }
        },
    }
</script>
<style lang="sass" scoped></style>