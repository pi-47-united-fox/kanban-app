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
                <button type="submit" class="btn btn-primary mb-1" style="width: 100%;" v-on:click.prevent="login">Login</button>
            </form>
                <GoogleLogin
                    :params="params"
                    :renderParams="renderParams"
                    :onSuccess="onSuccess"
                    :onFailure="onFailure">Google Login</GoogleLogin>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login';
export default {
    name: "LoginForm",
    props: {
        onFailure: Function,
    },
    data(){
        return{
            page: 'login',
            email: '',
            password: '',
            params:{
                client_id: "411524848726-8596p4ossfobk8fd2c3sv0acalu7mpvj.apps.googleusercontent.com"
            },
            renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
        }
    },
    components: {
        GoogleLogin
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
        },
        onSuccess(googleUser) {
            var google_access_token = googleUser.getAuthResponse().id_token;
            // console.log(google_access_token);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/googleLogin',
                headers:{
                    google_access_token
                }
            })
                .then(({ data }) => {
                    localStorage.setItem("access_token", data.access_token)
                    this.$emit('changePage', 'home')
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