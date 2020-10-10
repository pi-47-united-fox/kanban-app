<template>
  <div>
    <b-modal id="m2" title="edit Title" hide-footer="true">
      <div class="input">
        <label for="" class="label">Edit Project Title</label>
        <input class="text" placeholder="Your Project" v-model="title" />
      </div>
      <br />
      <button class="add-btn" @click.prevent="editTask(task.id)">Submit</button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditModal",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    editTask(id) {
      console.log(id,`<------ini di dalam edit modal`);
      axios({
        method: "PUT",
        url: "http://localhost:4000/tasks/${id}",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: this.title,
        },
      })
        .then(({ data }) => {
          this.$emit("emitEditTitle");
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