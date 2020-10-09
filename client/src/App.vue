<template>
<div>
    <Navigation 
    @changePage="changePage"
    v-bind:isPage="isPage"
    ></Navigation>

    <LoginForm 
    v-if="isPage === 'login'"
    @changePage="changePage"
    @afterLogin="afterLogin"
    ></LoginForm>

    <RegisterForm 
    v-else-if="isPage === 'register'"
    @changePage="changePage"
    ></RegisterForm>

    <Home 
    v-else-if="isPage === 'home'"
    :dataTasks="dataTasks"
    @addTask="addTask"
    @editCategory="editCategory"
    @deleteTask="deleteTask"
    ></Home>

</div>
</template>

<script>
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Home from './Home'
import axios from 'axios'




export default {
    name:'App',
    components:{
        Navigation,
        LoginForm,
        RegisterForm,
        Home
    },
    data(){
        return{
            isPage:'login',
            dataTasks:[]
        }
    },
    methods:{
        changePage(payload){
            this.isPage = payload
        },
        afterLogin(payload){
            this.getDataTasks()
        },
        getDataTasks(){
            axios.get('http://localhost:3000/tasks',{
                headers:{
                    access_token:localStorage.access_token
                }
            })
                .then((result)=>{
                    this.dataTasks = result.data
                })
                .catch(err=>{
                    console.log(err.response)
                })
        },
        addTask(value){
            console.log('masuk adtask app.vue')
            this.isPage='home'
            this.getDataTasks()
        },
        editCategory(value){
            this.isPage='home'
            this.getDataTasks()
        },
         deleteTask(value){
            this.isPage='home'
            this.getDataTasks()
        }
    },
    created(){
        console.log('masuk',localStorage.access_token)
        if(localStorage.access_token){
            this.isPage='home'
            this.getDataTasks()
        }else{
            this.isPage='login'
        }
    }
}
</script>

<style>
    *{
        font-family: 'Fredoka One', cursive;
    }
</style>