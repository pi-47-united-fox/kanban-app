<template>
  <div>
    <!--task content dalam container -->
    <div class="task">
      <div class="title">
        <p style="font-weight: 600">{{ task.tittle }}</p>
      </div>

      <div class="task-body">
        <p></p>
        <p style="font-weight: 400">description :</p>
        {{ task.description }}

        <div class="author">
          <p><i class="fa fa-user"></i>{{ task.author }}</p>
        </div>
      </div>
      <div class="kanban-action">
        <i class="fa fa-arrows-alt" @click="moveTask"></i>
        <i class="fa fa-trash-alt" @click="deleteTask(task.id)"></i>
        <i class="fa fa-edit" @click="editTask"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "taskCard",
  props: ["task"],
  data() {
    return {
      tittle: "",
      category: "",
      description: "",
    };
  },
  methods: {
    deleteTask(id) {
      console.log(`delete`);
      axios({
        method: "DELETE",
        url: `http://localhost:3000/tasks/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((data) => {
          console.log(`data task deleted`);
          this.$emit("reloadTask");
        })
        .catch((err) => {
          console.log(err);
          console.log(`err while delete data`);
        });
    },

    editTask() {
      this.$emit("editTask", this.task);
      console.log(this.task, "dari taskcard");
      this.$emit("emitShowPopEdit", true);
    },
    moveTask() {
      this.$emit("moveTask", this.task);
      console.log(this.task, "dari TASKCARD MOVE");
      this.$emit("emitShowPopMove", true);
    },


    showPopEdit() {
      console.log(`edit triger taskcard`);
      this.$emit("emitShowPopEdit", true);
    },
    showPopMove() {
      console.log(`move triger taskcard`);
      this.$emit("emitShowPopMove", true);
    },
  },
};
</script>

<style>
.task {
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px;
  color: black;
  margin-bottom: 10px;
}
.title p {
  line-height: 18px;
  font-size: 16px;
}

.task-body {
  font-weight: 8px;
  margin-bottom: 10px;
  line-height: auto;
}

.author {
  background-color: transparent;
  margin-top: 10px;
}
.author i,
p {
  align-items: baseline;
  margin-right: 5px;
  font-size: 12px;
}

.kanban-action i {
  cursor: pointer;
}
</style>
