<template>
  <div class="col-md-3" >
    <div class="bg-primary rounded shadow p-3 text-left text-white" >
      <h3>{{stage.stage}}</h3>
    </div>
    <div class="card bg-white shadow p-3 mt-3" >
      {{fetchedTasksPerCategory}}
      <TaskBox
      :fetchedTasks="fetchedTasks">
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
    }
}
</script>

<style>

</style>