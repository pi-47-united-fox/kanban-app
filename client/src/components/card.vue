<template>
  <div>
    <div class="card">
      <div>
        <h5>
          {{ task.title }}
        </h5>
      </div>
      <div style="margin-top: 10px">
        <div class="info">Created by {{ task.User.email.split('@')[0] }}</div>
        <div class="info">
          <span>{{ conDate(task.createdAt) }}</span>
        </div>
        <div class="icon">
          <img class="icon-btn" src="../assets/edit.svg" v-b-modal.m2 />
          <img
            class="icon-btn"
            src="../assets/delete.svg"
            alt=""
            @click.prevent="deletedTask(task.id)"
          />
          <select
            v-model="selected"
            id="v-select"
            @change="editCategory(task.id)"
          >
            <option disabled value="">Action</option>
            <option>BackLog</option>
            <option>Todo</option>
            <option>Doing</option>
            <option>Done</option>
          </select>
        </div>
      </div>
    </div>
    <EditModal
    @emitEditTitle="refresh"></EditModal>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";
import EditModal from "../components/edit-modal"
export default {
  props: ["task"],
  name: "Card",
  components: {
    EditModal
  },
  data() {
    return {
      selected: "",
    };
  },
  created() {},
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
    editCategory(id) {
      console.log("ini di edit category", id, this.selected);
      axios({
        method: "Patch",
        url: `http://localhost:4000/tasks/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          category: this.selected,
        },
      })
        .then(({ data }) => {
          this.$emit("emitEditCategory");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editTitle(id) {
      console.log("ini di edit title", id, this.selected);
      axios({
        method: "PUT",
        url: `http://localhost:4000/tasks/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: this.selected,
        },
      })
        .then(({ data }) => {
          this.$emit("emitEditCategory");
        })
        .catch((err) => {
          console.log(err);
        });
    },
      refreshData() {
      this.$emit("refresh");
    },
    conDate(date){
      return moment(date).startOf('hour').fromNow()
    }
    
  },
};
</script>

<style>
</style>