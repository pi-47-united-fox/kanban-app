<template> 
    <div class="pop-up" v-if="addFormCategory" >
        <div class="card pop-up-form" >
            <div class="card-header">
            Add New Task
            </div>
            <div class="card-body">
            <h5 class="card-title"></h5>
            <form class="form ">
                <div class="form-row mx-sm-3 mb-2 ">
                    <label for="form-category-name" class="mr-3">New Category Name</label>
                    <input type="text" name="form-category-name" id="">
                </div><br>
                <div class=""> 
                    <a href="#" class="btn btn-primary mr-2">Add Category</a>
                    <a href="#" @click="close" class="btn btn-danger">Cancel</a>
                </div>
            </form> 
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name:"AddFormCategory",
    props:['addFormCategory'],
    data(){
        return { 
            addCategoryform : this.addFormCategory
        }
    },
    methods:{
        close(){
            this.$emit('addFormCategory',false)
        }
    }


}
</script>

<style>

</style>