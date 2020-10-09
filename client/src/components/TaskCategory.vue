<template>
  
    <div class="card category-container"> 
        <div class="card-header">
            {{category.name}}
            <a class="btn btn-outline-primary float-right" @click="addTask(category.id)">Add Task +</a>
        </div> 

        <div class="card-body" id="task-container">  
            <card-task
                v-for="task in filteredTasks" 
                :key="task.id" 
                :task="task"
                @openCard="openCard(task.id)"
                >

            </card-task>
            
        </div> 
    </div>
</template>

<script>
import CardTask from './TaskCard' 

export default {
    name:"TaskCategoryContainer",
    props:['category','tasks','addTaskForm'],
    data(){
        return { 
            // addCategoryForm :"false",
        }
    },
    components:{
        'card-task':CardTask,  
    },
    methods:{
        addTask(id){
            this.$emit('openForm',{"form":true,"catId":id}) 
            // this.addTaskForm = !this.addTaskForm
        },
        closeForm(){ 
            // this.addTaskForm = !this.addTaskForm
        },
        openCard(id){ 
            this.$emit('openCard',id)
        }
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