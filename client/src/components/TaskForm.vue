<template>
  <div class="container2 addTask">
    <h1>ToDo Whats ?</h1>
    <form @submit.prevent="addTask">
      <div class="Formlogin">
        <label for="products_name">your doing</label>
        <input type="name" v-model="title" class="inputlogin" />
      </div>

      <div class="Formlogin">
        <label for=""> Status</label><br />
        <select v-model="status" class="select inputlogin">
          <option value="">Select ----</option>
          <option value="backlog">backlog</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div class="Formlogin">
        <input type="submit" value="Do !" class="btn btn-lg btn-light" />
        <button
          type="button"
          class="btn btn-lg btn-light"
          @click.prevent="backToHome"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "addTask",
  data() {
    return {
      title: "",
      status: "",
    };
  },
  methods: {
    backToHome() {
      this.$emit("backToHome", "home");
    },
    addTask() {
      let data = {
        title: this.title,
        status: this.status,
      };
      this.$emit("dataTask", data);
    },
  },
};
</script>

<style scoped>
/* .addTask {
} */
.select {
  width: 240px;
}
</style>

