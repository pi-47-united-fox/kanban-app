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
                        <p class="control">
                            <a class="button is-light">
                                Cancel
                            </a>
                        </p>
                        <!-- button google sign in -->
                        <div class="g-signin2" data-onsuccess="onSignIn"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'LoginForm',
    data() {
        return {
            displayPage: 'LoginForm',
            emailLogin: '',
            passwordLogin: ''

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
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                this.emailLogin = ''
                this.passwordLogin = ''
            })
        }
    }

}
</script>

<style>

</style>