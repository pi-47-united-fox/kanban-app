<template>
  <div id="login" >
    <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                    <form id="login-form" @submit.prevent="successLogin">
                        <h3 class="text-center text-info">Login</h3>
                        <div class="form-group">
                            <label for="username" class="text-info">Username:</label><br>
                            <input type="text" name="email" id="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password" class="text-info">Password:</label><br>
                            <input type="text" name="password" id="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <br>
                            <input type="submit" class="btn btn-info btn-md" value="login">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods : {
        successLogin(){
            axios({
                method: "POST",
                url: `http://localhost:3000/users/login`,
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(({data}) => {
                this.isPage = "home"
                localStorage.setItem('access_token', data.access_token)
                //   this.fetchTask()
            })
            .catch(err=> {
                console.log(err)
            })
            .then(() =>{
                this.email = ''
                this.password = ''
            })
        },
    }
}
</script>

<style>

</style>