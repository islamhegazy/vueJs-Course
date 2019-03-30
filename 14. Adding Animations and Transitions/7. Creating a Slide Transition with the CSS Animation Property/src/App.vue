<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <H1>Animations</H1>
                <hr>
                <button class="btn btn-primary" @click="show = !show"> Shoe Alert</button>
                 <br><br>
                <transition name="fade">
                <div class="alert alert-info" v-if="show">This is some Info</div>
                </transition>
                 <transition name="slide">
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
               show:false
            }
        },
        methods: {
            
        },
    }
</script>

<style>
    .fade-enter{
       opacity: 0; /*it removed automatically*/
    }
     .fade-enter-active{
        transition: opacity 1s ease-in;
        border: 1px solid #f00
    }
     .fade-leave{
        /* opacity: 1; */ /* it default so we cann't write it*/
    }
     .fade-leave-active{
         transition: opacity 1s ease-out;
         opacity: 0;
         border: 1px solid #080
    }

    .slide-enter{

    }
    .slide-enter-active{
     animation: slide-in 1s ease-out forwards;
    }
     .slide-leave{

    }
     .slide-leave-active{
      animation: slide-out 1s ease-out forwards;
     
    }
    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }
</style>
