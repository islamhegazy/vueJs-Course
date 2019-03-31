<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{id}}</p>
        <button class="btn btn-success" @click="navigateToHome">Go to Home</button>
    
    </div>

</template>

<script>
export default {
    data() {
        return {
            //9. Fetching and Using Route Parameters
            id:this.$route.params.id
        }
    },
methods: {
    navigateToHome(){
        //this.$router.push({path: '/'});
        this.$router.push('/');
    }
},
watch: {
    //10. Reacting to Changes in Route Parameters
    '$route'(to, from){
        this.id = to.params.id;
    }
},
}
</script>

<style>

</style>
