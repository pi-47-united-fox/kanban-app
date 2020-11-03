<template>
<div class="container">
        <categoryBoard
        v-for="(category,i) in categories" 
        :key="i" 
        :categoryName="category" 
        :dataTask="tasks"
        @changePage="changePage"
        @changeAddForm="changeAddForm"
        ></categoryBoard>
</div>
</template>
 
<script>
import axios from 'axios'
import categoryBoard from '../components/categoryBoard'
import taskForm from './TaskForm'
export default {
  name: 'home',
   components: {
       categoryBoard,
       
   },
  data() {
    return {
      categories:['Backlog', 'Todo', 'On Progress', 'Completed'],
      tasks: [],
      page: false
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
      changePage() {
        this.$emit('changePage', 'home')
      },
      changeAddForm() {

      }
  },
   created() {
     this.fetchTasks()
  }
};
</script>

<style>

</style>