<template>
<div> 
    <form-add-category @addFormCategory="closeForm" :addFormCategory="addCategoryForm">

    </form-add-category> 
    <nav-bar
    :page="page"
        @catForm="categoryForm"
        @changePage="changePage"
        v-if="page==`home`"  
    >

    </nav-bar>

    <tasks-board 
        :categories="categories"
        :tasks="tasks"
    >

    </tasks-board>

    <form-login  
        @loginProcess="changePage"
        v-if="page==`login`"  class="login-page">

    </form-login>
</div>
</template>

<script>
import axios from 'axios'
import LoginForm from './components/LoginForm'
import NavBar from './components/Navbar'
import AddFormCategory from './components/FormAddCategory'
import TasksBoard from './components/Board'

export default {
    name: 'App',
    components:{
        'form-login':LoginForm,
        'nav-bar':NavBar,
        'form-add-category':AddFormCategory,
        'tasks-board':TasksBoard
    },
    data() {
        return { 
            page: 'login',
            text:"testing",
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
            this.page = payload
        },
        categoryForm(payload){
            this.addCategoryForm = !this.addCategoryForm
        },
        fetchData(){
            console.log("fetching data!");
            axios
              .get('http://localhost:3000/tasks',
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
            this.fetchData()
        }else{ 
            this.page = 'login'
        }
    }
}
</script>

<style>

</style>