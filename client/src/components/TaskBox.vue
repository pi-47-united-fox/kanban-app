<template>
  <div class="card-body border">
        <div class="card-title">
          <h5><b>{{task.title}}<b></h5>
        </div>
        <div class="card-description">
          <h5>{{task.description}}</h5>
        </div>
          <div class="card-date">
            <h6>{{task.date}}</h6>
        </div>
        <div class="card-button">
          <i @click="editForm" class="fas fa-pen-square"></i>
          <i @click="deleteTask" class="fas fa-trash"></i>
        </div>
      </div>
</template>

<script>

export default {
    name: 'TaskBox',
    props: ['task'],
    methods: {
      editForm(){
        this.$emit('editForm', this.task)
      },
      deleteTask(){
        this.$emit('deleteTask', this.task)
      }
    }
}
</script>

<style>

</style>