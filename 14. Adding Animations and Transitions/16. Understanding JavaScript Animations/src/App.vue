<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <H1>Animations</H1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show"> Shoe Alert</button>
                 <br><br>
                  <!--now i can bind name hee dynamically by
                      exchabging name like an attribute by add : to name
                      to be like :name -->

                      <!-- in mode in-out: New element transitions in first, then when complete, the current element transitions out.
                      out-in: Current element transitions out first, then when complete, the new element transitions in.-->
                  <transition :name="alertAnimation" :type="alertAnimation" mode="out-in">
                     <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                     <!--we can write v-if="!show" or v-else-->
                     <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                  </transition>
            <hr>
            <!--16. Understanding JavaScript Animations-->
             <button class="btn btn-primary" @click="load = !load"> load / remove element</button>
             <br><br>
                 <transition 
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @after-enter="afterEnter"
                            @enter-cancelled="enterCancelled"
                            
                            @before-leave="beforeLeave"
                            @leave="leave"
                            @after-leave="afterLeave"
                            @leave-cancelled="leaveCancelled">
                    <div style="width: 100px; height: 100px; background: lightgreen" v-if="load"></div>
                  </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
               show:false,
               load:false,
               alertAnimation:"fade"
            }
        },
        methods: {
            beforeEnter(el){
                console.log('beforeEnter');
            },
            enter(el, done){
                console.log('enter');
                /*we we execute done here to tell vuejs
                  one this animation finishes when using css animations 
                  well it can detemine this from the timing
                  we set up here on the transition or the animation property
                  but when using js we have no such timing*/
                done();
            },
            afterEnter(el){
                console.log('afterEnter');
            },
            enterCancelled(el){
                console.log('enterCancelled');
                /*
                i cann't see enterCancelled beacuse since all everything
                happens instantly, i can't cancel it 
                */
            },
            beforeLeave(el){
                console.log('beforeLeave');
            },
            leave(el,done){
                console.log('leave');
                done();
            },
            afterLeave(el){
                console.log('afterLeave');
            },
            leaveCancelled(el){
                console.log('leaveCancelled');
            },
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
      transition: opacity 1s;
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


