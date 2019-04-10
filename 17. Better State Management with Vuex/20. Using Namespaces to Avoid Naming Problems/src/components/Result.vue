<template>
    <div>
    <p>Result Counter is: {{ doubleCounter }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types'
    export default {
    /*
       computed: mapGetters([
            'doubleCounter',
            'stringCounter',
       ])
    */
   //or
      computed: {
      ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
            })
      }
    }
</script> 