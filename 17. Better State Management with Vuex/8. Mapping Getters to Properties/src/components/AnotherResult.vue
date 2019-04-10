<template>
   <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{stringCounter}}</p>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
    /*
       computed: mapGetters([
            'doubleCounter',
            'stringCounter',
       ])
    */
   //or
      computed: {
          // ... -> allow us to tell js please pull out the properties
          //and methods in the object you have here and create separate key 
          //value pairs for each of them 
    ...mapGetters([ // if there problem we install npm i --save-dev babel-preset-stage-3 and go to .babelrc file and add ["stage-3"]
      'doubleCounter',
      'stringCounter',   
    ])
      }
    }
</script>