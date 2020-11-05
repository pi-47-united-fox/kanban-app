<template> 
    <div class="pop-up"  >
        <div class="card pop-up-form" >
            <div class="card-header">
            Add New Task
            </div>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <form class="form ">
                <div class="form-group mx-sm-3 mb-2 ">
                    <label for="form-task-name" class="mr-3">Task Title</label><br>
                    <input type="text" class="form-control" name="form-task-title" v-model="inputTaskTitle" id="">
                </div>
                <div class="form-group mx-sm-3 mb-2 ">
                    <label for="form-task-description" class="mr-3">Task Description</label><br>
                    <textarea type="text" class="form-control" name="form-task-description" v-model="inputTaskDescription" id=""></textarea>
                </div>
                <div class="form-group mx-sm-3 mb-2 ">
                    <label for="form-task-category" class="mr-3">Task Category</label>
                    <select class="form-control" v-model="inputTaskCategory" name="category" id="">
                        <option value=""> Select Category</option>

                        <option v-for="category in categories" :key="category.id" :value="category.id"> {{category.name}} </option> 
                    </select>
                </div> 
                <center>
                    <a href="#" @click="addData()" class="btn btn-primary mr-2">Add Task</a>
                    <a href="#" @click="close()" class="btn btn-danger">Cancel</a>
                </center>  
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"AddFormTask",
    props:['categoryId','categories'],
    data(){
        return {   
            // serverUrl:'http://localhost:3000/',
            serverUrl:'https://kanban-server-porto.herokuapp.com/',
            inputTaskDescription : '',
            inputTaskTitle : '',
            inputTaskCategory : this.categoryId,
        }
    },
    methods:{
        close(){ 
            this.$emit('closeForm',{"form":false})
        },
        addData(){
            axios
              .post(`${this.serverUrl}tasks`,
                {
                    title:this.inputTaskTitle,
                    description:this.inputTaskDescription,
                    CategoryId:this.inputTaskCategory,
                },
                {
                  headers:{
                      access_token:localStorage.access_token
                    },

                })
              .then(({data}) => {
                  console.log(data) 
                  this.$emit('fetchData',{"form":false})
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }


}
</script>

<style>

</style>