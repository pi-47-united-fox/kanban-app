<template>
  <!--Add task pop up-->
  <div class="edit-task">
    <h2>Move Task To?</h2>
    <form @submit.prevent="changeCategory">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Category</label>
        <select class="form-control" id="category" v-model="category">
          <option value="backlog">Backlog</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
          <option value="compleate">Compleate</option>
        </select>
      </div>
      <button class="btn btn-primary">Move Task</button>
    </form>
    <button @click="closePopMove" class="btn btn-danger">cancel</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PopUpMove",
  props: ["moveTask"],
  data() {
    return {
      category: this.moveTask.category,
    };
  },
  methods: {
    closePopMove() {
      this.$emit("emitPopMove", false);
      console.log(`keklik kann! pop up move`);
    },
    changeCategory(task) {
      console.log(`move`);
      axios({
        method: "PATCH",
        url: `https://kanban-hacktiv8.herokuapp.com/tasks/${this.moveTask.id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          category: this.category,
        },
      })
        .then(({ data }) => {
          console.log(`success move task`);
          this.$emit("reloadTask");
        })
        .catch((err) => {
          console.log(`error while change category`);
          console.log(err);
        })
        .then(() => {
          this.category = "";
        });
    },
  },
};
</script>

<style>
.edit-task {
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