<template>
    <div class="mt-5">
        <h1>Register Your Account Here</h1>
        <div class="login-form mt-5">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                </div>
                <center><button type="submit" class="btn btn-primary">Submit</button></center>
            </form>
             <div class="alert alert-danger mt-3" role="alert" v-show="registerFalse">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name:'RegisterForm',
    data(){
        return{
            email:'',
            password:'',
            registerFalse:false,
            errorMessage:''
        }
    },
    methods:{
    register(){
        axios.post('https://kanban-idham.herokuapp.com/register',{
                email:this.email,
                password:this.password
            })
            .then(({data})=>{
                this.$emit('changePage', 'login')
                this.registerFalse=false
                 this.$toast.success('Register Success',{
                    position:'bottom',
                    duration:1000
                })
            })
            .catch(err=>{
                console.log(err.response)
               this.registerFalse=true,
               this.errorMessage=err.response.data.message
            })
            .then(()=>{
                this.email=''
                this.password=''
            })
    }
    }
}
</script>

<style scoped>
    h1{
        margin: auto auto auto 32%;  
    }
    .login-form{
        padding:40px 30px; 
        margin: auto auto auto 36%;
        width: 20%;
        height: 55vh;
        max-height: 70vh;
        -webkit-box-shadow: 1px 4px 10px -2px rgba(0,0,0,0.24);
        -moz-box-shadow: 1px 4px 10px -2px rgba(0,0,0,0.24);
        box-shadow: 1px 4px 10px -2px rgba(0,0,0,0.24);
    }
</style>