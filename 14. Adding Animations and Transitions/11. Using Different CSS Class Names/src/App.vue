<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <H1>Animations</H1>
                <hr>
                <button class="btn btn-primary" @click="show = !show"> Shoe Alert</button>
                 <br><br>
                <transition 
                     appear
                     enter-class=""
                     enter-active-class="animated bounce"
                     leave-active-class="animated shake"
                >
                <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
               show:true
            }
        },
        methods: {
            
        },
    }
</script>

<style>

</style>

