<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <router-link class="btn btn-danger" tag="button" :to="{name: 'userEdit', params: {id:$route.params.id }}">Edit User</router-link>
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
