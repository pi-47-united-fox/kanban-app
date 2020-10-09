<template>
  <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <div class="logo-form">
                    <img src="../img/benban.png" alt="">
                </div>
                <h1 class="title">Login</h1>
                <form>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="emailLogin" class="input" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="passwordLogin" class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <a v-on:click="login" class="button is-primary">
                                Sign In
                            </a>
                        </p>
                    
                        <!-- button google sign in -->
                        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import GoogleLogin from 'vue-google-login';

export default {
    name: 'LoginForm',
    components: {
        GoogleLogin
    },
    data() {
        return {
            displayPage: 'LoginForm',
            emailLogin: '',
            passwordLogin: '',
            params: {
                client_id: "639126342145-3cuj7836kqi0gn02md1baqivbkb1hkqd.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 40,
                longtitle: true
            }

        }
    },
    methods: {
        login() {
            axios({
                method: "POST",
                url: "http://localhost:3000/login",
                data: {
                    email: this.emailLogin,
                    password: this.passwordLogin
                }
            })
            .then(({data}) => {
                localStorage.setItem('access_token', data.access_token)
                this.$emit('changePage', 'home')
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                this.emailLogin = ''
                this.passwordLogin = ''
            })
        },
        onSuccess(googleUser) {
            // console.log("masuk on success .,.,<><><><><<>><><><><><><><><><><><><><")
            var google_access_token = googleUser.getAuthResponse().id_token;
            // console.log(google_access_token)

            $.axios({
                method: "POST",
                url: 'http://localhost:3000/google',
                headers : {
                    google_access_token: google_access_token
                }
            })
            .then( data => {
                // console.log("dattatattata")
                localStorage.setItem('access_token', data)
                this.$emit('changePage2', 'home')
            })
            .catch(err => {
                console.log(err)
            })
        },

        onFailure() {

        }
    }

}
</script>

<style>

</style>