<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <router-link 
            class="btn btn-danger" 
            tag="button" 
            :to="link">Edit User</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link:{
                name: 'userEdit',
                params: {id:this.$route.params.id }, 
                query: {
                    locale: 'en', 
                    q: 100
                    },
                    hash: '#data'
                }
        
        }
    },
    //24. Using the beforeEnter Guard
    beforeRouteEnter (to, from, next) {
       console.log('beforeRouteEnter')
       if(true){
        next();
       }else{
        next(false);
       }
       
      /*
       next(vm => {
           vm.link;
       });
      */
    }
}
</script> 
