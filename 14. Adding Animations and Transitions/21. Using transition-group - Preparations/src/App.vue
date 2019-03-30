<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <H1>Animations</H1>
        <!--19. Animating Dynamic Components-->
        <button class="btn btn-primary"
                  @click="selectedComponent == 'appSuccessAlert' 
                  ? selectedComponent = 'appDangerAlert' 
                  : selectedComponent = 'appSuccessAlert' ">
          Toggole component</button>
        <br><br>
       <transition name="fade" appear mode="out-in">
            <component :is="selectedComponent"></component>
       </transition>
        <hr>
           <button class="btn btn-primary"
                  @click="addItem">
          Add item </button>
        <h3>list numbers</h3>
        <ul class="list-groub">
            <li class="list-group-item" 
                v-for="(num,index) in numbers.slice().reverse()" :key="index"
                @click="delteItem(index)"
                style="cursor:pointer">{{num}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import dangerAlert from './DangerAlert.vue';
  import successAlert from './SuccessAlert.vue';
  export default {
    data() {
      return {
        load: false,
        elementWidth: 100,
        selectedComponent: 'appSuccessAlert',
        numbers:[1, 2, 3, 4, 5]
      }
    },
    methods: {
        addItem(){
           const pos = Math.floor(Math.random() * this.numbers.length)
           //  this.numbers.splice(pos , 0 , this.numbers.length +1)
            this.numbers.push(this.numbers.length +1)
        },
        delteItem(index){
            this.numbers.splice(index,1);
        }
    },
    components: {
      appDangerAlert: dangerAlert,
      appSuccessAlert: successAlert
    }
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

