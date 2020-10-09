<template>
    
    <!-- <div class="card task-container mb-2"> -->
        <div class="card task-container mb-2" @click="openCard(task.id)">    
            <div  class="card-header text-center">
                <b> {{task.title}} </b>
            </div>  
            <div class="card-body">  
                <p>{{task.description}}</p>   
            </div>
        </div> 
</template>

<script>
export default {
    name:"taskCard",
    props:['task'],
    methods:{
        openCard(){ 
            this.$emit('openCard')
        }
    }

}
</script>

<style>

</style>