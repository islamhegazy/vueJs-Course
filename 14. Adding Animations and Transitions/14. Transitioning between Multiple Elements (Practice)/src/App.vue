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
            
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
               show:true,
               alertAnimation:"fade"
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


