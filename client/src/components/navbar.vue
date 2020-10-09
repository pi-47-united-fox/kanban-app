<template>
<div class="navbar">
    <ul class="left-navbar">
        <li>KANBAN</li>
        <li class="bar" v-show="isPage === 'home'"><a href="#" @click.prevent="home">Home</a></li>
    </ul>
    <ul class="left-navbar">
        <li class="bar" v-show="isPage !== 'home'"><a href="#" @click.prevent="register">Register</a></li>
        <li class="bar" v-show="isPage !== 'home'"><a href="#" @click.prevent="login">Login</a></li>
        <li class="bar" v-show="isPage === 'home'"><a href="#" @click.prevent="logout">Logout</a></li>
    </ul>
</div>  
</template>

<script>
export default {
    name: 'navbar',
    props: ['isPage'],
    methods:{
        login() {
            this.$emit('changePage','login')
        },
        register() {
            this.$emit('changePage','register')
        },
        home() {
            this.$emit('changePage','home')
        },
        logout() {
            localStorage.clear()
            this.$emit('changePage','login')
        }

    }
}
</script>

<style>

</style>