<template> 
    <div id="login" > 
        <h3 class="text-center text-white pt-5">Kanban - Project Management</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form"  @submit.prevent=""  class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="email" class="text-info">Username:</label><br>
                                <input v-model="emailFormLogin" type="email" name="email" id="email-login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input v-model="passwordFormLogin" type="text" name="password" id="password-login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <input type="submit" class="btn btn-info btn-md" @click="login" value="Login">
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios  = require("axios")
export default {
    name: 'LoginForm',
    data(){
        return{ 
            emailFormLogin :"",
            passwordFormLogin : "",
        }
    },
    methods:{  
        login(){
            console.log(this.emailFormLogin,this.passwordFormLogin);
            axios
                .post('http://localhost:3000/login',{ 
                    email:this.emailFormLogin,
                    password:this.passwordFormLogin,
                })
                .then(({data})=>{
                    localStorage.setItem('access_token',data.access_token) 
                    // this.page = 'home'
                    // this.fetchData()
                    this.$emit('loginProcess','home')
                })
                .catch(err=>{
                    console.log(err);
                })

        }, 
    }

}
</script>

<style>

</style>