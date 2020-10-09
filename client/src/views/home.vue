<template>
<div class="container">
        <categoryBoard v-for="(category,i) in categories" :key="i" :categoryName="category" :dataTask="tasks"></categoryBoard>
        <taskForm @addTask="addTask"></taskForm>
</div>
</template>

<script>
import axios from 'axios'
import categoryBoard from '../components/categoryBoard'
import taskForm from './taskForm'
export default {
  name: 'home',
   components: {
       categoryBoard,
       taskForm
   },
  data() {
    return {
      categories:['backlog', 'todo', 'onProgress', 'completed'],
     
      tasks: []
    };
  },
  methods: {
     fetchTasks() {
      axios
      .get('http://localhost:3000/task',{
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data})=> {
          this.tasks = data
          
      })
      .catch(err=> {
          console.log(err)
      })
      },
      
  },
   created() {
     this.fetchTasks()
  }
};
</script>

<style>

</style>