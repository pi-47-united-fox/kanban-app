<template>
  <div class="col-md-3" >
    <div class="bg-warning rounded shadow p-2 text-center text-black mt-3" >
      <h3>{{stage.stage}}</h3>
    </div>
    <div class="card bg-white shadow p-3" >
      <TaskBox
      v-for="task in fetchedTasksPerCategory"
      :key="task.id"
      :task='task'
      @editForm="editForm"
      @deleteTask="deleteTask">
      </TaskBox>
    </div>
  </div>    
</template>

<script>
import TaskBox from './TaskBox'

export default {
    name: 'TaskHead',
    components: {
      TaskBox
    },
    props: ['stage', 'fetchedTasks'],
    computed: {
      fetchedTasksPerCategory(){
        return this.fetchedTasks.filter(fetchedTask => fetchedTask.category == this.stage.stage)
      }
    },
    methods: {
      editForm(payload){
        this.$emit('editForm', payload)
      },
      deleteTask(payload){
        this.$emit('deleteTask', payload)
      }
    }
}
</script>

<style>

</style>