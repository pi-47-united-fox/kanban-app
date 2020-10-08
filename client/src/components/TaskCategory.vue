<template>
  
    <div class="card category-container"> 
            <div class="card-header">
                {{category.name}}
                <a class="btn btn-primary float-right">+</a>
            </div> 

            <div class="card-body" id="task-container">  
                <card-task
                    v-for="task in filteredTasks" 
                    :key="task.id" 
                    :task="task"
                    >

                </card-task>
                <!-- <card-task :tasks="tasks">
                    
                </card-task> -->
            </div> 
    </div>
</template>

<script>
import CardTask from './TaskCard'

export default {
    name:"TaskCategoryContainer",
    props:['category','tasks'],
    components:{
        'card-task':CardTask, 
    },
    method:{
        // filteredTasks
    },
    computed:{
        filteredTasks:function(){
            let newTask =[]
            this.tasks.forEach(ele=>{
                if(ele.CategoryId == this.category.id){
                    newTask.push(ele)
                }
            })
            return newTask
        }
    }

}
</script>

<style>

</style>