<template>
  <div>
    <Auth v-if="page === 'Auth'" @emitChangeHomePage="changePage"></Auth>
    <Home
      v-if="page === 'Home'"
      @emitChangeHomePage="changePage"
      :tasks="tasks"
      :taskCategorys="taskCategorys"
      :fetchData="fetchData"
      @reloadTask="fetchData"
    ></Home>
  </div>
</template>

<script>
import axios from "axios";
import Auth from "./views/Auth";
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Auth,
    Home,
  },
  data() {
    return {
      page: "Auth",
      tasks: [],
      taskCategorys: [
        {
          category: "backlog",
        },
        {
          category: "todo",
        },
        {
          category: "done",
        },
        {
          category: "compleate",
        },
      ],
    };
  },

  methods: {
    changePage(page) {
      this.page = page;
    },
    fetchData() {
      axios
        .get("http://localhost:3000/tasks", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          this.tasks = data;
          console.log(`hit`);
        })
        .catch((err) => {
          console.log(err);
          console.log(`masuk error`);
        });
    },
  },
  created() {
    if (localStorage.access_token) {
      this.page = "Home";
      this.fetchData();
      console.log(`test created!`);
    } else {
      this.page = "Auth";
    }
  },
};
</script>

<style>
body {
  margin: 0 auto;
}
</style>
