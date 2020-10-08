<template>
  
    <div class="board-container"> 
        <div class="board ">
            <container-category 
                v-for="category in categories" 
                :key="category.id"
                :category="category"
                :tasks="tasks"
                >


            </container-category>
        </div>
    </div> 
</template>

<script>
import TaskCategory from './TaskCategory'
export default {
    name:"taskBoard",
    props:['categories','tasks'],
    data(){
        return{
            newTaskList : []
        }
    },
    components:{
        'container-category' : TaskCategory
    },
    computed:{ 
        filteredTasks: function (tasks,cat) {
            // tasks.forEach(ele=>{
                // if(tasks.)
            // })
            
        }
    }

}
</script>

<style>

</style>