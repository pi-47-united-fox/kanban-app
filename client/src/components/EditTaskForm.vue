<template>
  <div class="container">
    <h1>Edit Task</h1>
    <form id="btn-add" @submit.prevent="editHandler(tampEdit.id)">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="tampEdit.title"
        />
      </div>
      <fieldset disabled>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            type="text"
            id="category"
            disabled
            class="form-control"
            placeholder="Backlog"
            v-model="tampEdit.category"
          />
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Save</button>
      <button class="btn btn-danger" @click.prevent="changePage">Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditTaskForm",
  props: ["tampEdit"],
  methods: {
    changePage() {
      this.$emit("changePage", "home");
    },
    editHandler(id) {
      let obj = {
        id: id,
        title: this.tampEdit.title,
        category: this.tampEdit.category
      }
      axios
        .put(
          `https://kanban-app-projects.herokuapp.com/tasks/${obj.id}`,
          {
            title: obj.title,
            category: obj.category,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        )
        .then(({ data }) => {
          console.log(data, 'put sukses')
          this.$emit("refetchTask");
          this.changePage()
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>