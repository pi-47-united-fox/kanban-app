<template>
    
    <!-- <div class="card task-container mb-2"> -->
        <div class="card task-container mb-2">    
            <div  class="card-header text-center">
                <b> {{task.title}} </b>
            </div>  
            <div class="card-body">  
                <p>{{task.description}}</p> 
                <!-- <p>{{ users[users.findIndex(el => el.id === task.UserId)].email }}</p> -->
                
            </div>
        </div> 
</template>

<script>
export default {
    name:"taskCard",
    props:['task']

}
</script>

<style>

</style>