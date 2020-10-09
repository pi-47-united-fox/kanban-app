<template>
  <div class="home-container mt-5 row">
      <Task 
      v-for="(category,i) in categories"
      :key="i"
      :data="category"
      :dataTasks="dataTasks"
      @addTask="addTask"
      @editCategory="editCategory"
      @deleteTask="deleteTask"
      ></Task>
  </div>
</template>

<script>
import Task from './Task'

export default {
    name:'Home',
    components:{
        Task
    },
    props:['dataTasks'],
    data(){
        return{
            categories:[
                {
                    name:'backlog',
                },
                {
                    name:'todo',
                },
                {
                    name:'doing',
                },
                 {
                    name:'done', 
                }
                
            ]
        }
    },
    methods:{
        addTask(value){
            console.log('masuk adtask Home.vue')
            this.$emit("addTask",value)
        },
        editCategory(value){
            this.$emit("editCategory",value)
        },
         deleteTask(value){
            this.$emit('deleteTask',value)
        }
    }

}
</script>

<style scoped>
   .home-container{
       justify-content: center;
   }
</style>