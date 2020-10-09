<template>
  <div class="jumbotron container" id="addTask">
    <h2><b>Add new Task</b></h2>
    <form @submit="AddTask">
      <div class="form-group">
        
        <label for="titletodos">Title Task</label>
        <input type="text" class="form-control" placeholder="e.g: Belajar Coding" v-model="title">
      </div>
      <div class="form-group">
        <label for="descriptiontodos">Description</label>
        <input type="text" class="form-control" placeholder="e.g: Dengerin musik hits sambil melakukan kegiatan belajar" id="description" v-model="description">
      </div>
      <div class="form-group">
        <label for="duedatetodos">Date</label>
        <input type="date" class="form-control" v-model="date">
      </div>
      <div class="form-group">
        <label for="inputState">Category</label>
        <select id="inputState" class="form-control" v-model="category">
          <option selected>Choose...</option>
          <option>Backlog</option>
          <option>Product</option>
          <option>Development</option>
          <option>Done</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
    </div>

</template>

<script>
export default {
    name: 'AddTask'
}
</script>

<style>

</style>