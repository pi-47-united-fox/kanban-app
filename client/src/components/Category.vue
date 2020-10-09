<template>
  <!--Kanban Task Container-->
  <!-- satu components card task -->
  <div class="container-kanban">
    <div class="kanban-header">
      <h4>{{ taskCategorys.category }}</h4>
      <h3><i class="fa fa-plus" @click="showPopAdd"></i></h3>
    </div>
    <!-- {{ categoryFilter }} -->
    <!-- by category -->
    <div class="kanban-task">
      <!-- data task -->
      <TaskCard
        v-for="(task, index) in categoryFilter"
        :key="index + 1"
        :task="task"
        @emitShowPopEdit="showPopEdit"
        @emitShowPopMove="showPopMove"
        @editTask="editTask"
        @moveTask="moveTask"
        @emitDeleteTask="emitDeleteTask"
      ></TaskCard>
    </div>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard";

export default {
  name: "Category",
  props: ["tasks", "taskCategorys"],
  components: {
    TaskCard,
  },
  methods: {
    showPopAdd() {
      this.$emit("emitShowPop", true);
      console.log(`keklik kann! pop up add`);
    },
    showPopEdit() {
      this.$emit("emitShowPopEdit", true);
      console.log(`keklik kann! pop up edit`);
    },
    showPopMove() {
      this.$emit("emitShowPopMove", true);
      console.log(`keklik kann! pop up move`);
    },
    editTask(payload) {
      this.$emit("editTask", payload);
    },
    moveTask(payload) {
      this.$emit("moveTask", payload);
    },
    emitDeleteTask() {
      this.$emit("emitDeleteTask");
    },
  },
  // let longWords = words.filter(word => word.length > 6);
  computed: {
    categoryFilter() {
      return this.tasks.filter(
        (task) => task.category == this.taskCategorys.category
      );
    },
  },
};
</script>

<style>
/* Kanban */
.container-kanban {
  margin: 0 auto;
  padding: 0px;
  width: 300px;
  height: auto;
  background-color: rgb(235, 235, 235);
  color: white;
  border-radius: 10px;
  overflow: hidden;
}

.kanban-header {
  width: 100%;
  height: 80px;
  background-color: rgb(1, 0, 44);
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.kanban-header i {
  cursor: pointer;
}
.kanban-task {
  align-self: start;
  height: 600px;
  padding: 20px;
  background-color: rgb(230, 227, 227);
  overflow: scroll;
}
</style>
