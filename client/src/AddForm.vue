<template>
    <div class="task-add mt-3">
        <!-- <p style="color:green">Title</p>
        <p>By </p>
        <p>Organization </p>
        <div class="d-flex">
            <a href="#" style="margin-left:80%; text-decoration:none; color:black;"><i class="fas fa-trash"></i></a>
            <a href="#" style="margin-left:5%; text-decoration:none; color:black;"><i class="fas fa-arrow-right"></i></a>
        </div> -->
        <form class="m-2" @submit.prevent="addHandler">
            <div class="form-group">
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Add Your Title" v-model="title">
            </div>
            <center><button type="submit" class="btn btn-primary">Add</button></center>
        </form>
        <p v-show="addDataError" style="color:red">please fill title</p>
    </div>  
</template>

<script>
import axios from 'axios'
export default {
    name:'AddForm',
    props:['category'],
    data(){
        return{
            addDataError:false,
            title:''
        }
    },
    methods:{
        addHandler(){
            if(this.title && this.category){
                let newData = {
                    title:this.title,
                    category:this.category
                }
            console.log(localStorage.access_token)
                axios.post('http://localhost:3000/tasks',newData,{
                    headers:{
                        access_token:localStorage.access_token
                    }
                })
                .then(result=>{
                    this.$emit('addTask','addtask')
                    this.addDataError = false
                })
                .catch(err=>{
                    console.log(err.response)
                })
            }else{
                this.addDataError = true
            }
        }
    }

}
</script>

<style>
  .task-add{
        border: 1px silver solid;
        height: 19vh;
        margin: 10px;
        -webkit-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.75);
    }
</style>