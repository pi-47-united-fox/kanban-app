<template>
  <div id="mainpage">
    <div class="container-fluid">
        <div class="button-newtask mt-3">
            <button type="button" class="btn btn-success" @click="addTaskForm">New Task</button><br>
            <div class="row">
                <TaskHead
                v-for="(stage, i) in stages"
                :key='i'
                :stage="stage"
                :fetchedTasks="fetchedTasks"
                @editForm="editForm"
                @deleteTask="deleteTask">
                </TaskHead>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import TaskHead from '../components/TaskHead'

export default {
    name: 'HomePage',
    components: {
        TaskHead
    },
    props: ['stages', 'fetchedTasks'], //penerima dari app
    methods: {
        addTaskForm(){
            this.$emit('changePage', 'add-task')
        },
        fetchTasks(payload){
            this.$emit('fetchTasks', payload)
        },
        editForm(payload){
            this.$emit('editForm', payload)
        },
        deleteTask(payload){
            this.$emit('deleteTask', payload)
      }
    },
}
</script>

<style>

</style>