<template>
    <ul class="nav nav-pills">
        <li role="presentation" >
          <router-link to="/">Home</router-link>
        </li>
        <li role="presentation">
           <router-link to="/user">User</router-link>
        </li>
    </ul>
</template>
<style>
.router-link-exact-active,
.nav>li>a:focus, 
.nav>li>a:hover{
    background: #080;
    color: #fff
}
</style>
