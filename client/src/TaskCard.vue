<template>
  <div class="task-card mt-3">
        <p style="color:green">{{task.title}}</p>
        <p>By {{task.email}}</p>
        <p>Organization {{task.organization}}</p>
        <div class="d-flex action" >
            <a href="#" 
            style="text-decoration:none; color:black;"
            @click.prevent="backHandler"
            ><i class="fas fa-arrow-left"></i></a>
            <a href="#" 
            style=" text-decoration:none; color:black;"
            @click.prevent="deleteHandler"
            ><i class="fas fa-trash"></i></a>
            <a href="#" 
            style="text-decoration:none; color:black;"
            @click.prevent="editHandler"
            ><i class="fas fa-arrow-right"></i></a>
         </div>
         <p v-show="authorizedError" style="color:red">Not Authorized</p>
    </div>  
</template>

<script>
import axios from 'axios'
export default {
    name:'TaskCard',
    props:['task'],
    data(){
        return{
            authorizedError:false
        }
    },
    methods:{
        backHandler(){
            axios.patch(`http://localhost:3000/tasks/${this.task.id}?category=${this.task.category==='done'?'doing':this.task.category==='doing'?'todo':'backlog'}`,{},{
                headers:{
                    access_token:localStorage.access_token
                }
            })
            .then(result=>{
                this.$emit('editCategory','editcategory')
            })
            .catch(err=>{
                console.log(err.response)
                this.authorizedError = true
            })
        },
        editHandler(){
            axios.patch(`http://localhost:3000/tasks/${this.task.id}?category=${this.task.category==='backlog'?'todo':this.task.category==='todo'?'doing':'done'}`,{},{
                headers:{
                    access_token:localStorage.access_token
                }
            })
            .then(result=>{
                this.$emit('editCategory','editcategory')
            })
            .catch(err=>{
                console.log(err.response)
                 this.authorizedError = true
            })
        },
        deleteHandler(){
            axios.delete(`http://localhost:3000/tasks/${this.task.id}`,{
                headers:{
                    access_token:localStorage.access_token
                }
            })
            .then(result=>{
                this.$emit('deleteTask','deleteTask')
            })
            .catch(err=>{
                console.log(err.response)
                 this.authorizedError = true
            })
        }
    }
}
</script>

<style>
.action{
    justify-content:space-between;
    margin: 10px;
}
 .task-card{
        border: 1px silver solid;
        height: 20vh;
        margin: 10px;
        -webkit-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
    }

    p{
        font-size: 16px;
        margin: 0 5px;
    }
</style>