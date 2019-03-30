<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <H1>Animations</H1>
            <!--16. Understanding JavaScript Animations-->
             <button class="btn btn-primary" @click="load = !load"> load / remove element</button>
             <br><br>
             <!-- :css="false" this mean don't look for css classes
             we don't use theme we wiil use js insted of -->
                 <transition 
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @after-enter="afterEnter"
                            @enter-cancelled="enterCancelled"
                            
                            @before-leave="beforeLeave"
                            @leave="leave"
                            @after-leave="afterLeave"
                            @leave-cancelled="leaveCancelled"
                            :css="false">
                    <div style="width: 300px; height: 100px; background: lightgreen" v-if="load"></div>
                  </transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
               load:false,
               elementWidth:100
            }
        },
        methods: {
            beforeEnter(el){
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width=this.elementWidth + 'px';
            },
            enter(el, done){
                console.log('enter');
                let round =1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round >20){
                        clearInterval(interval);
                        /*we we execute done here to tell vuejs
                        one this animation finishes when using css animations 
                        well it can detemine this from the timing
                        we set up here on the transition or the animation property
                        but when using js we have no such timing*/
                        done();
                    }
                }, 20);
  
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
                this.elementWidth = 300;
                el.style.width=this.elementWidth + 'px';
            },
            leave(el,done){
                console.log('leave');
                let round =1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round >20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
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

</style>


