<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container "> 
            <a class="navbar-brand" href="#">Kanban</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto"> 
                </ul> 
                <!-- <button class="btn btn-primary my-2 my-sm-0 mr-4" @click="fetchData()">Reload Data</button> -->
                <button class="btn btn-outline-success my-2 mr-3 my-sm-0" @click="addCategoryForm" type="submit">Add Category</button>
                <button class="btn btn-danger my-2 my-sm-0" @click="logout()">logout</button>
            </div> 
        </div>
    </nav> 
</template>

<script>
export default {
    name:'Navbar',
    props:['page'],
    data(){
        return {

        }
    },
    methods:{
        logout(){
            localStorage.clear()
            this.$emit('changePage','login')
        },
        addCategoryForm(){
            // localStorage.clear()
            this.$emit('catForm',true)
        }
    }

}
</script>

<style>

</style>