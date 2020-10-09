<template>
  <div>
    <div class="card">
      <div>
        <h5>
          {{ task.title }}
        </h5>
      </div>
      <div style="margin-top: 10px">
        <div class="info">{{ task.User.email }}</div>
        <div class="info">
          <span>{{ task.createdAt }}</span>
        </div>
        <div class="icon">
          <img class="icon-btn" src="../assets/edit.svg" />
          <img
            class="icon-btn"
            src="../assets/delete.svg"
            alt=""
            @click.prevent="deletedTask(task.id)"
          />
        </div>
      </div>
    </div>
    <AddModal></AddModal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";
import Moadl from "./add-modal";
export default {
  props: ["task"],
  name: "Card",
  data() {
    return {};
  },
  components: {
    Modal,
  },
  created() {
    console.log(this.task, "<------ini this.task di card");
  },
  methods: {
    deletedTask(id) {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "purple",
        cancelButtonColor: " #7453b8;",
        confirmButtonText: "Yes, deleted it!",
      }).then((res) => {
        if (res.isConfirmed) {
          axios({
            method: "DELETE",
            url: `http://localhost:4000/tasks/${id}`,
            headers: {
              access_token: localStorage.access_token,
            },
          })
            .then(({ data }) => {
              this.$emit("emitDelete");
              Swal.fire("Deleted!", "Your file has been deleted.", "Succedd");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
};
</script>

<style>
</style>