<template>
    <div class="mt-5">
        <h1>Please Login Before Continue</h1>
        <div class="login-form mt-5">
            <form @submit.prevent="login" >
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
                <center class="mt-3">
                <GoogleButton
                @googlesuccess="googlesuccess"
                ></GoogleButton>
            </form>
            <div class="alert alert-danger mt-3" role="alert" v-show="loginFalse">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import GoogleButton from './googleSignButton'

export default {
    name:'LoginForm',
    components:{
        GoogleButton
    },
    data(){
        return{
            email:'',
            password:'',
            loginFalse:false,
            errorMessage:''
        }
    },
    methods:{
        googlesuccess(){
            this.$emit('changePage', 'home')
            this.$emit('afterLogin', 'afterlogin')
            this.loginFalse=false
            this.$toast.success('Login Success',{
                    position:'bottom',
                    duration:1000
                })
        },
        login(){
            axios.post('https://kanban-idham.herokuapp.com/login',{
                email:this.email,
                password:this.password
            })
            .then(({data})=>{
                localStorage.setItem('access_token', data.access_token)
                this.$emit('changePage', 'home')
                this.$emit('afterLogin', 'afterlogin')
                this.loginFalse=false
                this.$toast.success('Login Success',{
                    position:'bottom',
                    duration:1000
                })
            })
            .catch(err=>{
                console.log(err.response)
               this.loginFalse=true,
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