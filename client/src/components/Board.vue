<template>
    <div class="board-container"> 

        <form-add-task 
            @closeForm="closeTaskForm" 
            v-if="addTaskForm == true"
            :categoryId="categoryId"  
            :categories="categories"
            @fetchData="fetchData" 
            > 
        </form-add-task>
        <card-detail-task
            @closeCard="closeTaskForm" 
            v-if="detailCard == true"
            :taskId="taskId"
            :categories="categories"
            @fetchData="fetchData" 
            :users="users"

        
        ></card-detail-task>
        <div class="board ">
            <container-category 
                v-for="category in categories" 
                :key="category.id"
                :category="category"
                :tasks="tasks" 
                @openForm="openTaskForm" 
                @openCard="openCard"
                > 
            </container-category>
        </div>
    </div> 
</template>

<script>
import TaskCategory from './TaskCategory'
import FormAddTask from './FormAddTask'
import DetailCard from './DetailCard'

export default {
    name:"taskBoard",
    props:['categories','tasks','users'],
    data(){
        return{
            open:"",
            newTaskList : [],
            addTaskForm :false,
            detailCard :false,
            categoryId :0,
            taskId:0,
        }
    },
    methods:{
        openTaskForm(data){
            this.categoryId = data.catId
            this.addTaskForm = data.form
            console.log(data);
        },
        closeTaskForm(){
            this.addTaskForm = false 
            this.detailCard = false 
        },
        fetchData(){
            console.log("try fetch");
            this.closeTaskForm()
            this.$emit('fetchData')
        },
        openCard(id){
            this.taskId = id
            this.detailCard = true 
        }
    },
    components:{
        'container-category' : TaskCategory,
        'form-add-task':FormAddTask,
        'card-detail-task':DetailCard
    },
    computed:{ 
        filteredTasks: function (tasks,cat) {
            // tasks.forEach(ele=>{
                // if(tasks.)
            // })
            
        }
    },
    created(){
        this.fetchData()
    }

}
</script>

<style>

</style>