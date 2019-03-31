<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{$route.params.id}}</p>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //id: this.$route.params.id
        }
    },
}
</script>
