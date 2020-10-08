<template>
  <div>
    <Navbar @emitChangePage="navbarPage" :page="page"></Navbar>
    <Login v-if="page === 'login'" @emitAfterLogin="afterLogin"></Login>
    <Register v-else-if="page === 'register'"></Register>
    <TaskHome
      v-else-if="page === 'home'"
      :tasks="tasks"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
    ></TaskHome>
    <TaskForm
      v-else-if="page === 'addForm'"
      @backToHome="backToHome"
      @dataTask="addTask"
    ></TaskForm>

    <Footer
      v-if="page === 'login' || page === 'register' || page === 'addForm'"
    ></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Login from "./views/LoginForm";
import Register from "./views/RegisterForm";
import TaskHome from "./views/TaskHome";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Fotter";
import axios from "./config/axios";
export default {
  name: "app",
  components: {
    Navbar,
    Login,
    Register,
    TaskHome,
    TaskForm,
    Footer,
  },
  data() {
    return {
      page: "",
      tasks: [],
    };
  },

  methods: {
    navbarPage(value) {
      this.page = value;
    },
    afterLogin(value) {
      this.page = value;
    },
    backToHome(value) {
      this.page = value;
    },
    fecthTask() {
      axios({
        method: "GET",
        url: "/task",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.tasks = data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addTask(value) {
      axios({
        method: "POST",
        url: "/task",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          title: value.title,
          category: value.status,
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.tasks.push(data);
          this.afterLogin("home");
          console.log(this.tasks);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },

  created() {
    if (localStorage.access_token) {
      this.page = "home";
      this.fecthTask();
    } else {
      this.page = "login";
    }
  },
};
</script>

<style>
</style>