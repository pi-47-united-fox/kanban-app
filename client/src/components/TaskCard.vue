<template>
  <div class="card mt-2 bg-transparent text-dark mb-3" style="max-width: 18rem">
    <div class="card-body">
      <p>{{ task.title }}</p>

      <p>status : {{ task.category }}</p>
      <div class="reedit">
        <i @click="deleteTask" class="fa fa-trash-alt"></i>

        <i @click="updateTask" class="fa fa-edit"></i>
      </div>

      <p>{{ task.User.name }}</p>
      <p class="date-task">{{ task.createdAt.substring(0, 10) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["task"],
  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.task);
    },

    updateTask() {
      this.$emit("updateTask", this.task);
    },
  },
};
</script>

<style scoped>
.reedit a {
  text-decoration: none;
}
</style>