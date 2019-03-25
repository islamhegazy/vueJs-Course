<template>
<div class="container">
    <appHeader></appHeader>
    <appServers></appServers>
    <appServerDetails></appServerDetails>
   <appFooter></appFooter>
</div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import Footer from './components/Shared/Footer.vue';
    
    export default {
        components : {
            'appHeader': Header,
            'appServers':  Servers,
            'appServerDetails':  ServerDetails,
            'appFooter': Footer
        }
    }
</script>

<style></style>