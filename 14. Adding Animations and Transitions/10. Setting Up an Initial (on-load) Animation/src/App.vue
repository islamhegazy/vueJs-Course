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
                 <transition name="slide" type="animation">
                <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <!--If you also want to apply a transition on the initial render of 
                    a node or on page load, you can add the appear attribute:-->
                 <transition name="fade" appear>
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
     opacity:0;
    }
    .slide-enter-active{
     animation: slide-in 1s ease-out forwards;
     transition: opacity 0.5s;
    }
     .slide-leave{

    }
     .slide-leave-active{
      animation: slide-out 1s ease-out forwards;
      transition: opacity 3s;
      opacity: 0;
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

    /*
    if you mix animation and transition, make sure ot set up which one 
    dictates the length by use type ="animation or transition"
    */
</style>

