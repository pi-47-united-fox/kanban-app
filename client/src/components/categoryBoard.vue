<template>
<div>
  <div class="sub-container">
    <div class="title-box">
        <h2 class="title">{{categoryName}}</h2> 
    </div>
    <div v-if="categoryName === 'Backlog'">  
        <task
        v-for="task in backlog" 
        :key="task.id" 
        :task="task" 
        @delTask="delTask"></task>
    </div>
    <div v-if="categoryName === 'Todo'"> 
        <task
        v-for="task in todo" 
        :key="task.id"
        :task="task"
        @delTask="delTask"></task>
    </div> 
     <div v-if="categoryName === 'On Progress'">
        <task 
        v-for="task in onProgress" 
        :key="task.id" 
        :task="task" 
        @delTask="delTask"></task> 
    </div>
     <div v-if="categoryName === 'Completed'">
        <task
        v-for="task in completed" 
        :key="task.id"
        :task="task" 
        @delTask="delTask"></task>
    </div>
    <div class="addTask-box" @click="taskForm" v-show="page === false">
            <a href="#"><h5 class="addTask"><i class="fa fa-plus-square"></i>Add Task</h5></a>
    </div>
            <TaskForm v-show="page === true" :categoryName="categoryName" @closeForm="closeForm"></TaskForm>
</div>
</div>
</template>  
<script>
import task from './Task'
import TaskForm from '../views/TaskForm' 
export default { 
    props:['categoryName', 'dataTask'], 
    components: { 
        task,
        TaskForm 
    },
    data() {
      return {
        backlog: [],
        todo:[],
        onProgress:[],
        completed:[],
        page: false,
      }
    },
    methods: {  
      delTask() {
        this.page = false
      },
      fTask() {
        this.dataTask.forEach(el=> {
          el.updatedAt = el.updatedAt.slice(0,10)
          if(el.category === 'Backlog') {
            this.backlog.push(el) 
          } 
          else if(el.category === 'Todo') {
          this.todo.push(el) 
          } 
          else if(el.category === 'On Progress') {
            this.onProgress.push(el)
          }
          else if(el.category === 'Completed') {
            this.completed.push(el)
          } 
        })
      },
      taskForm() {
        this.page = true
      },
      closeForm() {
        this.page = false
      }, 
      submitForm(){
        this.page = false
      } 
      },
    created() {
       this.fTask()
    }
} 
</script>

<style>

</style>