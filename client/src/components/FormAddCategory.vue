<template> 
    <div class="pop-up" >
        <div class="card pop-up-form" >
            <div class="card-header">
            Add New Category
            </div>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <form class="form ">
                <div class="form-row mx-sm-3 mb-2 ">
                    <label for="form-category-name" class="mr-3">New Category Name</label>
                    <input type="text" v-model="inputCategoryName" name="form-category-name" id="">
                </div><br>
                <div class=""> 
                    <a href="#" @click="addCategory" class="btn btn-primary mr-2">Add Category</a>
                    <a href="#" @click="close" class="btn btn-danger">Cancel</a>
                </div>
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:"AddFormCategory",
    props:['addFormCategory'],
    data(){
        return { 
            serverUrl:'http://localhost:3000/',
            inputCategoryName : ""
        }
    },
    methods:{
        close(){
            this.$emit('addFormCategory',false)
        },
        addCategory(){
            Axios
                .post(`${this.serverUrl}category`,
                {
                    name:this.inputCategoryName
                },
                {
                    headers:{
                        access_token:localStorage.access_token
                    }
                })
                .then(result=>{
                    console.log(result);
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