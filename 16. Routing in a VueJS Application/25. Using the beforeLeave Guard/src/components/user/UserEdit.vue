<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{$route.query.locale}}</p>
         <p>Analytics: {{$route.query.q}}</p>
         <hr>
         <button class="btn btn-primary" @click="confirmed = true">Confirm to leave</button>
         <div style="height:700px"></div>
         <p id="data">Some extra Data</p>
    </div>
</template>


<script>
//25. Using the beforeLeave Guard
export default {
    data() {
        return {
            confirmed:false
        }
    },
beforeRouteLeave (to, from, next) {
   if(this.confirmed){
    next();
   }else{
       if(confirm('Are you sure?')){
            next()
       }else{
            next(false)
       }
   }
  
}
}
</script>

<style>

</style>
