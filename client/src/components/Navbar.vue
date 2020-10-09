<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top">
        <a class="navbar-brand text-white" href="#">Kanban</a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#" id="HomeNav" @click.prevent="home" v-show="page === 'home' || page === 'add-page' | page === 'edit-page'">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#" id="LoginNav" @click.prevent="loginForm" v-show="page === 'login' || page === 'register'">Login</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#" id="RegisterNav" @click.prevent="registerForm" v-show="page === 'login' || page === 'register'">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#" id="logout" @click.prevent="logout" v-show="page === 'home'|| page === 'add-page' | page === 'edit-page'">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ['page'],
    methods:{
        loginForm(){
            this.$emit('changePage', 'login')
        },
        registerForm(){
            this.$emit('changePage', 'register')
        },
        home(){
            this.$emit('changePage', 'home')
        },
        logout(){
            localStorage.removeItem('access_token')
            this.$emit('changePage', 'login')
        }
    }
}
</script>

<style>

</style>