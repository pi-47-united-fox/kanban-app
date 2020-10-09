<template>
  <div class="card cards category">
    <div class="headsot" :class="`${categoryName.color}`">
      <i :class="`${categoryName.icon}`"> {{ categoryName.name }} </i>
    </div>
    <!-- main card backlog-->

    <div class="content">
      <Task
        v-for="task in taskPerCategory"
        :key="task.id"
        :task="task"
        @deleteTask="deleteTask"
        @updateTask="updateTask"
      >
      </Task>
    </div>
  </div>
</template>

<script>
import Task from "../components/TaskCard";
export default {
  name: "CategoryCard",
  props: ["categoryName", "tasks"],
  components: {
    Task,
  },
  methods: {
    updateTask(value) {
      this.$emit("updateTask", value);
    },

    deleteTask(value) {
      this.$emit("deleteTask", value);
    },
  },
  computed: {
    taskPerCategory() {
      return this.tasks.filter(
        (task) => task.category === this.categoryName.name
      );
    },
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.headsot {
  display: flex;
  justify-content: space-between;
}
.category {
  padding: 0;
}
</style>