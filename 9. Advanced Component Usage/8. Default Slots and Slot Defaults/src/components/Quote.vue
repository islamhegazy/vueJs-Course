<template>
    <div>
       <div class="title">
        <slot name="title"></slot>
        <span style="color:#ccc">
            <!--the data we passed between slot tag it will 
                be render  because the name and default not 
                found-->
            <slot name="subTitle">The SubTitle</slot>
        </span>
       </div>
       <hr>
       <div>
           <slot></slot> <!-- the default slot will be renderd 
                               here because it hasn't name-->
       </div>
    </div>
</template>

<script>
    export default {
        props:['Quote']
    }
</script>

<style scoped>
div{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}
h2{
    color: red;
}
.title{
    font-style: italic
}
</style>