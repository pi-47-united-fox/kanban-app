<template>
   <div class="col-3 home-content ">
          <div class="tasks">
            <div class="content-title" :id="`${data.name}`">
                {{data.name}}
            </div>
            <a href="#" 
            style="text-decoration:none; color:black;"
            @click.prevent="showAddForm"
            ><i class="fas fa-plus-square"> Add Task</i></a>

            <AddForm
             v-show="addFormShow"
             :category="data.name"
            @addTask="addTask"
            ></AddForm>
            <TaskCard 
            v-for="task in taskFilter"
            :key="task.id"
            :task="task"
            @editCategory="editCategory"
            @deleteTask="deleteTask"
            ></TaskCard>
          </div>
    </div>
</template>

<script>

import TaskCard from './TaskCard'
import AddForm from './AddForm'

export default {
    name:'Task',
    props:['data', 'dataTasks'],
    components:{
        TaskCard,
        AddForm
    },
    computed:{
        taskFilter (){
            return this.dataTasks.filter(val=>{
                return val.category === this.data.name
            })
        }
    },
    data(){
        return{
            addFormShow:false
        }
    },
    methods:{
        showAddForm(){
            this.addFormShow = !this.addFormShow
        },
        addTask(value){
            this.addFormShow = !this.addFormShow
            this.$emit('addTask',value)
        },
        editCategory(value){
            this.$emit('editCategory',value)
        },
         deleteTask(value){
            this.$emit('deleteTask',value)
        }
    }

}
</script>

<style scoped>
    .home-content{
        /* border: 1px black solid; */
        height: 100px;
        width: 50px;
        margin: 0 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .content-title{
       width: 300px;
       height: 40px;
       text-align: center;
       padding-top: 5px;
    }

    .tasks{
        border: 1px solid silver;
        height: 70vh;
        padding:3px;
        overflow-y: scroll;
    }
    .tasks::-webkit-scrollbar {
    display: none;
    }

    #backlog{
        border: 1px solid #cc3300;
        color:#cc3300 ;
        position: sticky;
        top: 0;
    }
    #backlog:hover{
        color:white ;
        background:#cc3300;
    }

     #todo{
        border: 1px solid pink;
        color:pink ;
    }
    #todo:hover{
        color:white ;
        background:pink;
    }

     #doing{
        border: 1px solid #ffcc99;
        color:#ffcc99 ;
    }
    #doing:hover{
        color:white ;
        background:#ffcc99;
    }

     #done{
        border: 1px solid green;
        color:green ;
    }
    #done:hover{
        color:white ;
        background:green;
    }

</style>