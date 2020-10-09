<template>
  <div>
    <Navbar @emitChangePage="navbarPage" :page="page"></Navbar>

    <Login v-if="page === 'login'" @emitAfterLogin="afterLogin"> </Login>

    <Register v-else-if="page === 'register'"> </Register>

    <TaskHome
      v-else-if="page === 'home'"
      :tasks="tasks"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
      :messageDelete="messageDelete"
    >
    </TaskHome>

    <TaskForm
      v-else-if="page === 'addForm'"
      @backToHome="backToHome"
      @dataTask="addTask"
    ></TaskForm>

    <EditTask
      @inputEdit="inputEdit"
      v-else-if="page === 'editTask'"
      :editTask="editTask"
      @emitBackHome="backFromEdit"
      :messageEdit="messageEdit"
    ></EditTask>
    <Footer
      v-if="
        page === 'login' ||
        page === 'register' ||
        (page === 'addForm') | (page === 'editTask')
      "
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
import EditTask from "./views/EditPage";
import axios from "./config/axios";

export default {
  name: "app",
  components: {
    Navbar,
    Login,
    Register,
    EditTask,
    TaskHome,
    TaskForm,
    Footer,
  },
  data() {
    return {
      page: "",
      tasks: [],
      editTask: {},
      messageDelete: "",
      messageEdit: "",
    };
  },

  methods: {
    updateTask(value) {
      this.editTask = value;
      this.afterLogin("editTask");
    },
    deleteTask(value) {
      axios({
        method: "delete",
        url: `/task/${value.id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.fecthTask();
          this.messageDelete = data.message;
        })
        .catch((err) => {
          this.fecthTask();
          let msg = err.response.data.message;
          this.messageDelete = msg;
        });
    },
    backFromEdit(value) {
      this.page = value;
    },
    navbarPage(value) {
      this.page = value;
    },
    afterLogin(value) {
      this.fecthTask();
      this.page = value;
    },
    backToHome(value) {
      this.page = value;
    },

    inputEdit(value) {
      axios({
        method: "PUT",
        url: `/task/${value.id}`,
        data: {
          title: value.title,
          category: value.status,
        },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          this.fecthTask();
          this.backToHome("home");
        })
        .catch((err) => {
          let msg = err.response.data.message;
          this.messageEdit = msg;
          this.fecthTask();
        });
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
          this.tasks.push(data);
          this.afterLogin("home");
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