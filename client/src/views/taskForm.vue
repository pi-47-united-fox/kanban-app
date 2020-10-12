<template>
<!-- <div class="form-popup" id="form"> -->
<div class="form-container">
    <div  class="title-box">
        <h2 class="title">Add Task</h2>
    </div>
      <form @submit.prevent="addTask">
        <label for="title" class="title-form">title</label>
        <input class="form-content" name="title" v-model="title">
        <div class="title-box">
          <button type="submit" class="title-form" @click="submitForm">Submit</button>
          <button
            type="button"
            class="title-form"
            @click="closeForm">
            Cancel
          </button>
        </div>
      </form>
    </div>
<!-- </div> -->
</template>

<script>
import axios from 'axios'
export default {
  props: ['categoryName'],
  name: 'addTask',
  data() {
    return{
      title: '',
      category: this.categoryName
    }
  },
  methods: {
    addTask() {
      axios 
      .post('http://localhost:3000/task', {
        title:this.title,
        category:this.category
        },
      { 
        headers:{
          access_token: localStorage.access_token
          },
      })
      .then(({data}) => {
        this.$emit('changePage', 'home')
       })
      .catch(err => {
          console.log(err)
      })
    },
    closeForm() {
      this.title = ''
      this.category = ''
      this.$emit('closeForm')
    },
    submitForm() {
      this.$emit('submitForm')
    }
  }
}
</script>

<style>

</style>