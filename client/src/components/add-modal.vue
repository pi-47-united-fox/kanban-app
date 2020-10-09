<template>
  <div>
    <b-modal id="modal-1" title="Project Title" hide-footer="true">
      <div class="input">
        <label for="" class="label">Project</label>
        <input class="text" placeholder="Your Project" v-model="title" />
      </div>
      <br />
      <button class="add-btn" @click.prevent="onSubmit">Submit</button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MOdal",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.title);
      axios({
        method: "POST",
        url: "http://localhost:4000/tasks",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: this.title,
          category: "BackLog",
        },
      })
        .then(({ data }) => {
          this.$emit("emitAdd");
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