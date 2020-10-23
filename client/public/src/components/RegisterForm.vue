<template>
    <!---REGISTER -->
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <div class="logo-form">
                    <img src="../img/benban.png" alt="">
                </div>
                <h1 class="title">Sign Up</h1>
                <form>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="registerEmail" class="input" type="email" placeholder="Email">
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
                            <input v-model="registerPassword" class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <a @click="register" class="button is-primary">
                                Sign Up
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
    name: 'RegisterForm',
    data() {
        return {
            registerEmail: '',
            registerPassword: ''
        }
    },
    methods: {
        register() {
            axios({
                method: "POST",
                url: "https://benban.herokuapp.com/register",
                data: {
                    email: this.registerEmail,
                    password: this.registerPassword
                }
            })
            .then(({data}) => {
                console.log(data)
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