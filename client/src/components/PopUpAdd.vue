<template>
  <!--Add task pop up-->
  <div class="add-task">
    <h2>Add Task</h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="task">Task Name</label>
        <input
          v-model="tittle"
          type="text"
          class="form-control"
          id="task"
          placeholder="add task here.."
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Category</label>
        <select class="form-control" id="category" v-model="category">
          <option value="backlog">Backlog</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
          <option value="compleate">Compleate</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Description Task</label>
        <textarea
          v-model="description"
          class="form-control"
          id="description"
          rows="3"
        ></textarea>
      </div>
      <button class="btn btn-primary">Add Task</button>
      <button @click="closePop" class="btn btn-danger">cancel</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PopUpAdd",
  data() {
    return {
      tittle: "",
      category: "",
      description: "",
    };
  },
  methods: {
    closePop() {
      this.$emit("emitShowPop", false);
      console.log(`keklik kann! pop up close`);
    },
    addTask() {
      axios({
        method: "POST",
        url: "http://localhost:3000/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          tittle: this.tittle,
          category: this.category,
          description: this.description,
        },
      })
        .then(({ data }) => {
          console.log(`success add Data`);
          this.$emit("reloadTask");
        })
        .catch((err) => {
          console.log(`error while adding data`);
          console.log(err);
        })
        .then(() => {
          this.tittle = "";
          this.category = "";
          this.description = "";
        });
    },
  },
};
</script>

<style>
.add-task {
  margin: 0 auto;
  width: 40%;
  height: auto;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 10px;
  display: absolute;
  padding: 20px;
  position: absolute;
  -webkit-box-shadow: 1px 4px 33px 9px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 4px 33px 9px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 4px 33px 9px rgba(0, 0, 0, 0.2);
}
</style>