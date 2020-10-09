<template> 
    <div class="pop-up"  >
        <div class="card pop-up-form" >
            <div class="card-header float-left" >
               <h4> {{cardTitle}}
                    <a href="#" @click="close()" class="btn btn-outline-danger float-right">X</a>
               </h4>
            </div>
                <div class="alert alert-warning alert-dismissible fade show" v-if="this.errMessage.length>1" role="alert">
                    {{errMessage}}
                    <button type="button" class="close" @click="closeAlert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div class="card-body p-3" v-if="editForm == false">
                <center>
                    <h3 class="card-title">{{taskTitle}}</h3> <hr>
                </center>
                <p>{{taskDesc}}</p>
                <!-- <p>{{this.categories[getCategory(taskCategory)].name}}</p> -->
                <p>{{getCategory(taskCategory)}}</p>
                <p>{{getUser(taskUser)}}</p>
                <center>
                    <a href="#" @click="openEditForm()" class="btn btn-primary mr-2">Edit Task</a>
                    <a href="#" @click="deleteData()" class="btn btn-danger">Delete Task</a>
                </center>  
            </div>
            <div class="card-body" v-if="editForm == true">
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
                    <a href="#" @click="editData()" class="btn btn-primary mr-2">Save Task</a>
                    <a href="#" @click="closeEditForm()" class="btn btn-danger">Cancel</a>
                </center>  
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"CardDetailTask",
    props:['taskId','categories','users'],
    data(){
        return {
            serverUrl:'http://localhost:3000/',
            errMessage:"",
            cardTitle:"Task Detail",
            taskTitle:"titletest",
            taskDesc:"test title test",
            taskCategory:"backlog",
            taskUser:"asdadad",
            inputTaskDescription : "",
            inputTaskTitle : "",
            inputTaskCategory : "",
            editForm: false
        }
    },
    methods:{
        closeAlert(){
            this.errMessage = ""
        },
        getCategory(id){
            let index = this.categories.findIndex(item => item.id == id)
            if(this.categories[index]){
                return this.categories[index].name
            }
            // return this.categories.findIndex(item => item.id == id)
        },
        getUser(id){
            let index = this.users.findIndex(item => item.id == id)
            if(this.users[index]){
                return this.users[index].email
            }
        },
        close(){ 
            this.$emit('closeCard',{"form":false})
        },
        editData(){
            axios
              .put(`${this.serverUrl}tasks/${this.taskId}`,
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
                  console.log("Updated Successfully",data) 
                //   close()
                  this.$emit('fetchData',{"form":false})
                })
                .catch(err=>{
                    let errors = err.response.data
                    console.log(errors.message);
                    this.errMessage = errors.message
                })
        },
        deleteData(){
            axios
              .delete(`${this.serverUrl}tasks/${this.taskId}`,
                {
                  headers:{
                      access_token:localStorage.access_token
                    },

                })
              .then(({data}) => {
                  console.log(data) 
                //   close()
                  this.$emit('fetchData',{"form":false})
                })
                .catch(err=>{
                    let errors = err.response.data
                    console.log(errors);
                    this.errMessage = errors.message
                })
        },
        openEditForm(){
            this.editForm = true
            this.cardTitle = "Edit Form"
        },
        closeEditForm(){
            this.editForm = false
            this.cardTitle = "Task Detail"
        }
    },
    created(){ 
        axios
            .get(`${this.serverUrl}tasks/${this.taskId}`, 
            {
                headers:{
                    access_token:localStorage.access_token
                },

            })
            .then(({data}) => {
                console.log(data) 
                this.taskTitle = data.title
                this.taskDesc = data.description
                this.taskCategory = data.CategoryId
                this.taskUser = data.UserId 
                this.inputTaskTitle = data.title
                this.inputTaskDescription = data.description
                this.inputTaskCategory = data.CategoryId 
            })
            .catch(err=>{
                console.log(err);
            })
    }


}
</script>

<style>

</style>