<template>
    <div class="app-Servers">

        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" :key="index">
               Server #{{ index }}
            </li>

        </ul>
    </div>
</template>

<script></script>

<style scoped>
  div{
    border: 1px solid blue;
    margin: 5px 0
  }
</style>
