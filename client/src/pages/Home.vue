<template>
  <div class="container">
    <div class="bgc">
      <div class="board">
        <div class="header">
          <div class="he-l"></div>
          <div class="he-r">
            <button class="add-btn" v-b-modal.modal-1>Add Project</button>
          </div>
        </div>
      </div>
    </div>

    <div class="category">
      <Category
        v-for="(category, i) in categories"
        :key="i"
        :categoryName="category"
        :task="tasks"
        @refresh="fetchTask"
      ></Category>
    </div>
    <AddModal @emitAdd = 'fetchTask'></AddModal>
  </div>
</template>

<script>
import Category from "../components/category";
import Card from "../components/card";
import axios from "axios";
import AddModal from "../components/add-modal";
export default {
  name: "Home",
  components: {
    Card,
    Category,
    AddModal,
  },
  data() {
    return {
      isAddModalVisible: false,
      tasks: [],
      categories: ["BackLog", "Todo", "Doing", "Done"],
    };
  },

  methods: {
    fetchTask() {
      // console.log(localStorage.access_token);
      axios({
        method: "GET",
        url: "http://localhost:4000/tasks",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          // console.log(data, '<----ini line 62');
          this.tasks = data;
          // console.log(this.tasks ,'<-----ini line 65');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    console.log(this.categories);
    this.fetchTask();
    console.log(this.tasks, "<---ini line 47");
  },
};
</script>

<style>
</style>