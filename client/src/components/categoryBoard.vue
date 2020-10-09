<template>
  <div class="sub-container">
    <div class="title-box" >
        <h2 class="title">{{categoryName}}</h2>
        <a href="#"><i class="fa fa-edit"></i></a>
        
    </div>
    <div v-if="categoryName === 'backlog'"> 
        <task v-for="task in backlog" :key="task.id" :task="task"></task>
    </div>
    <div v-if="categoryName === 'todo'">
        <task v-for="task in todo" :key="task.id" :task="task"></task>
    </div>
     <div v-if="categoryName === 'onProgress'">
        <task v-for="task in onProgress" :key="task.id" :task="task"></task>
    </div>
     <div v-if="categoryName === 'completed'">
        <task v-for="task in completed" :key="task.id" :task="task"></task>
    </div>
    <div class="addTask-box">
            <a href="#"><h5 class="addTask"><i class="fa fa-plus-square"></i>Add Task</h5></a>
    </div>
</div> 
</template> 

<script>
import task from './task'
export default {
    props:['categoryName', 'dataTask'],
    components: {
        task,
    },
    data() {
      return {
        backlog: [],
        todo:[],
        onProgress:[],
        completed:[]
      }
    }, 
    methods: {
        fTask() {
          this.dataTask.forEach(el=> {
            el.updatedAt = el.updatedAt.slice(0,10)
            if(el.category === 'backlog') {
              this.backlog.push(el) 
            }
            else if(el.category === 'todo') {
            this.todo.push(el)
            } 
            else if(el.category === 'on progress') {
              this.onProgress.push(el)
            }
            else if(el.category === 'completed') {
              this.completed.push(el)
            }
          })
        },
        editCategory(id){
            axios
            .patch(`http://localhost:3000/task/${id}`,{headers: 
            {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask(id){
            axios
            .delete(`http://localhost:3000/task/${id}`,{
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
            })
            .catch(err => {
                console.log(err)
            })
        }
      }, 
    created() {
       this.fTask()
    }
}
</script>

<style>

</style>