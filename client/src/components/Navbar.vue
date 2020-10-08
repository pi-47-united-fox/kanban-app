<template>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container "> 
            <a class="navbar-brand" href="#">Kanban</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
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