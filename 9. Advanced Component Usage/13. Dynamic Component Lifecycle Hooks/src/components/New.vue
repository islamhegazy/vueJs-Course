<template>
    <div>
        <h3>new Quote</h3>
        <button @click="counter++">Increase</button>
        <P>{{counter}}</P>
    </div>
</template>

<script>
    export default {
        props:['Quote'],
        data() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('destroyed')
        },
        deactivated() {
            console.log('deactivated')
        },
        activated() {
             console.log('activated')
        },
    }
</script>

<style scoped>

</style>