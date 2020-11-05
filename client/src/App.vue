<template>
<div> 
    <form-add-category 
        v-if="addCategoryForm == true"
        @addFormCategory="closeForm" 
        :addFormCategory="addCategoryForm"
        @fetchData="fetchData" 
        >

    </form-add-category> 
    <nav-bar
    :page="page"
        @catForm="categoryForm"
        @changePage="changePage"
        v-if="page==`home`"  
    >

    </nav-bar>

    <tasks-board 
        v-if="page==`home`"  
        :categories="categories"
        :tasks="tasks"
        :users="users" 
        @fetchData="fetchData" 
    >

    </tasks-board> 
    <form-register  
        @changePage="changePage"
        v-if="page==`register`"
        class="login-page">

    </form-register>
    <form-login  
        @changePage="changePage"
        v-if="page==`login`"  class="login-page">

    </form-login>
</div>
</template>

<script>
import axios from 'axios'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import NavBar from './components/Navbar'
import AddFormCategory from './components/FormAddCategory'
import TasksBoard from './components/Board'

export default {
    name: 'App',
    components:{
        'form-login':LoginForm,
        'form-register':RegisterForm,
        'nav-bar':NavBar,
        'form-add-category':AddFormCategory,
        'tasks-board':TasksBoard
    },
    data() {
        return { 
            serverUrl:'http://localhost:3000/',
            // serverUrl:'https://kanban-server-porto.herokuapp.com/',
            page: 'home', 
            addCategoryForm:false,
            categories: [],
            tasks:[],
            users:[]
        }
    }, 
    methods:{
        closeForm(){
            this.addCategoryForm = !this.addCategoryForm
        },
        changePage(payload){
            console.log(payload);
            // this.fetchData()
            this.page = payload
        },
        categoryForm(payload){
            this.addCategoryForm = !this.addCategoryForm
        },
        fetchData(){
            console.log("fetching data!");
            this.tasks = []
            this.users = []
            this.categories = []
            axios
              .get(`${this.serverUrl}tasks`,
              {
                  headers:{
                      access_token:localStorage.access_token
                    }
                })
              .then(({data}) => {
                  data.categories.forEach(ele => {
                    //   console.log(ele);
                      this.categories.push({id:ele.id,name:ele.name})
                      ele.tasks.forEach(el=>{
                        this.tasks.push(el)
                      })
                  })
                  data.users.forEach(user=>{
                      this.users.push(user)
                      
                  })

                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }   ,
    created(){
        if(localStorage.access_token){
            this.page = 'home' 
        }else{ 
            this.page = 'login'
        }
    }
}
</script>

<style>

</style>