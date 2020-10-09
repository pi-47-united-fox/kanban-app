<template>
  <div class="container2 addTask">
    <div v-if="messageEdit" class="alert alert-danger" role="alert">
      {{ messageEdit }}
      <i class="fa fa-window-close" @click="closeAlert"></i>
    </div>
    <h1>Edit Whats ?</h1>
    <form @submit.prevent="inputEdit">
      <div class="Formlogin">
        <label for="products_name">your doing</label>
        <input type="name" v-model="title" class="inputlogin" />
      </div>

      <div class="Formlogin">
        <label for=""> Status</label><br />
        <select v-model="status" class="select inputlogin">
          <option value="">Select ----</option>
          <option value="backlog">backlog &#128478;</option>
          <option value="todo">Todo &#128276;</option>
          <option value="doing">Doing &#128394;</option>
          <option value="done">Done ✔</option>
        </select>
      </div>
      <div class="Formlogin">
        <input type="submit" value="Edit !" class="btn btn-lg btn-light" />
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
  name: "editTask",
  props: ["editTask", "messageEdit"],
  data() {
    return {
      title: this.editTask.title,
      status: this.editTask.category,
    };
  },
  methods: {
    backToHome() {
      this.$emit("emitBackHome", "home");
    },
    inputEdit() {
      let data = {
        id: this.editTask.id,
        title: this.title,
        status: this.status,
      };
      this.$emit("inputEdit", data);
    },
    closeAlert() {
      this.messageEdit = "";
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

