<template>
  <div class="grid-task">
    <div class="task-title">{{ categoryName }}</div>
    <div class="scroll">
      <div v-if="categoryName == 'BackLog'">
        <Card
          v-for="task in backlog"
          :key="task.id"
          :task="task"
          @emitDelete="refreshData"
          @emitEditCategory="refreshData"
        >
        </Card>
      </div>
      <div v-if="categoryName == 'Todo'">
        <Card
          v-for="task in todo"
          :key="task.id"
          :task="task"
          @emitDelete="refreshData"
          @emitEditCategory="refreshData"
        >
        </Card>
      </div>
      <div v-if="categoryName == 'Doing'">
        <Card
          v-for="task in doing"
          :key="task.id"
          :task="task"
          @emitDelete="refreshData"
          @emitEditCategory="refreshData"
        >
        </Card>
      </div>
      <div v-if="categoryName == 'Done'">
        <Card
          v-for="task in done"
          :key="task.id"
          :task="task"
          @emitDelete="refreshData"
          @emitEditCategory="refreshData"
        >
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
name: "Category";
import Card from "./card";
export default {
  props: ["categoryName", "task"],
  components: {
    Card,
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.tasks);
    console.log(this.task, "<------------ini line 34---");
  },
  methods: {
    refreshData() {
      this.$emit("refresh");
    },
  },
  computed: {
    backlog: function () {
      // console.log(this.tasks.title);
      return this.task.filter((el) => el.category === "BackLog");
    },
    todo: function () {
      return this.task.filter((el) => el.category === "Todo");
    },
    doing: function () {
      return this.task.filter((el) => el.category === "Doing");
    },
    done: function () {
      return this.task.filter((el) => el.category === "Done");
    },
  },
};
</script>

<style>
</style>