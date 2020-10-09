<template>
    <div class="container my-5 py-3 border border-dark" style="width: 35%;">
        <div class="container" id="login">
            <form id="loginForm" v-on:submit.prevent="login">
                <div class="container">
                    <h3 class="text-center">Login to Kanban</h3>
                </div>
                <div class="form-group">
                    <label for="input_email">Email address</label>
                    <input type="email" class="form-control" id="input_email" aria-describedby="emailHelp" placeholder="Email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="input_password">Password</label>
                    <input type="password" class="form-control" id="input_password" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;" v-on:click.prevent="login">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LoginForm",
    data(){
        return{
            page: 'login',
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            axios.post('http://localhost:3000/login', {
                    email: this.email,
                    password: this.password
                })
                .then(({ data }) => {
                    this.$emit('changePage', 'home')
                    localStorage.setItem('access_token', data.access_token)
                    // fungsi untuk fetchAll Task dibawah line ini
                })
                .catch(err => {
                    console.log(err)
                })
                .then(() => {
                    this.email = ''
                    this.password = ''
                })
        }
    }
  
}
</script>

<style>

</style>