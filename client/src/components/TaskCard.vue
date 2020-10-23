<template>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-if="category == 'backlog'">
    <div class="card-header bg-info text-white">{{category}}</div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <TaskTitle
        v-for="task in tasks.backlog"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-else-if="category == 'todo'">
    <div class="card-header bg-info text-white">{{category}}</div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <TaskTitle
        v-for="task in tasks.todo"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-else-if="category == 'doing'">
    <div class="card-header bg-info text-white">{{category}}</div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <TaskTitle
        v-for="task in tasks.doing"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-else-if="category == 'done'">
    <div class="card-header bg-info text-white">{{category}}</div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <TaskTitle
        v-for="task in tasks.done"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
</template>

<script>
import TaskTitle from "./TaskTitle";
export default {
  name: "TaskCard",
  props: ["tasks", "category"],
  components: {
    TaskTitle,
  },
  methods: {
    refetchTask() {
      this.$emit("refetchTask");
    },
    changePage(data){
      this.$emit('changePage',data)
    },
    editMe(data){
      this.$emit('editMe',data)
    }
  },
};
</script>

<style>
</style>