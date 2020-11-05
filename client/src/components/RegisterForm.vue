<template> 
    <div id="login" > 
        <h3 class="text-center text-white pt-5">Kanban - Project Management</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                <div class="alert alert-warning alert-dismissible fade show" v-if="this.errMessage.length>1" role="alert">
                    {{errMessage}}
                    <button type="button" class="close" @click="closeAlert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div id="login-box" class="col-md-12">
                        <form id="login-form"  @submit.prevent=""  class="form" action="" method="post">
                            <h3 class="text-center text-info">Register</h3>
                            <div class="form-group">
                                <label for="email" class="text-info">Username:</label><br>
                                <input v-model="emailFormLogin" type="email" name="email" id="email-login" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input v-model="passwordFormLogin" type="password" name="password" id="password-login" class="form-control">
                            </div>
                            <div class="form-group"> 
                                <input type="submit" class="btn btn-info btn-md" @click="login" value="Register"> 
                                <input type="submit" class="btn btn-outline-danger btn-md" @click="changePage" value="Cancel"> 
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
    name: 'RegisterForm',
    data(){
        return{ 
            // serverUrl:'http://localhost:3000/',
            serverUrl:'https://kanban-server-porto.herokuapp.com/',
            emailFormLogin :"",
            passwordFormLogin : "",
            errMessage:""
        }
    },
    methods:{  
        changePage(){
            this.$emit('changePage','login')
        },
        closeAlert(){
            this.errMessage =""
        },
        login(){
            console.log(this.emailFormLogin,this.passwordFormLogin);
            axios
                .post(`${this.serverUrl}register`,{ 
                    email:this.emailFormLogin,
                    password:this.passwordFormLogin,
                })
                .then(({data})=>{ 
                    this.$emit('changePage','login')
                })
                .catch(err=>{ 
                    console.log(err);
                    if(err.response){
                        let errors = err.response.data.errors
                        console.log(errors);
                        this.errMessage = errors[0].message
                    }

                })

        }, 
    }

}
</script>

<style>

</style>