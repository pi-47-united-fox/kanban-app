<template>
    <div class="container my-5 py-3 border border-dark" style="width: 35%;">
        <div class="container" id="register">
            <form id="registerForm" v-on:submit.prevent="registerUser">
                <div class="container">
                    <h3 class="text-center">Register to Kanban</h3>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-dark" style="width: 100%;">Register</button>
            </form>
        </div>
    </div>  
</template>

<script>
import axios from 'axios'
export default {
    name: "RegisterForm",
    data(){
        return{
            page: 'register',
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        registerUser(){
            axios
                .post('http://localhost:3000/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    // this.page = 'login'
                    this.$emit('changePage', 'login')
                    this.name = ''
                    this.email = ''
                    this.password = ''
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>