<template>
  <div class="jumbotron container" id="addTask">
    <h2><b>Add new Task</b></h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="titletodos">Title Task</label>
        <input type="text" class="form-control" placeholder="e.g: Membuat Halaman Client" v-model="title">
      </div>
      <div class="form-group">
        <label for="descriptiontodos">Description</label>
        <input type="text" class="form-control" placeholder="e.g: Gunakan cara yang paling efektif dan efisien" id="description" v-model="description">
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" class="form-control" v-model="category">
          <option>Back-Log</option>
          <option>To-Do</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'AddTask',
    data(){
      return {
        tasks: [],
        title: '',
        description: '',
        category: ''
      }
    },
    methods: {
      addTask(){
        let payload = {
          title: this.title,
          description: this.description,
          category: this.category
        }
        this.$emit('addTask', payload)
      }
    }
}
</script>

<style>

</style>