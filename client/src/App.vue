<template>
  <div>
    <Navbar 
    v-show="isPage == 'home'" 
    @changePage="changePage"> </Navbar>
    <LoginForm 
    v-if="isPage == 'login'" 
    @changePage="changePage"> </LoginForm>
    <RegisterForm 
    v-else-if="isPage == 'register'" 
    @changePage="changePage">
    </RegisterForm>
    <HomePage
    v-else-if="isPage == 'home'"
    @changePage="changePage"
    :tasks="tasks"
    :categories="categories"
    @refetchTask="fetchCard"
    @editMe="editMe"
    >
    </HomePage>
    <AddTaskForm 
    v-show="isPage == 'home'" 
    @refetchTask="fetchCard">
    </AddTaskForm>
    <EditTaskForm
    v-show="isPage == 'editTaskForm'"
    @changePage="changePage"
    :tampEdit="tampEdit"
    @refetchTask = 'fetchCard'>
    </EditTaskForm>
  </div>
</template>

<script>
import axios from "axios";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/Task";
import Navbar from "./components/Navbar";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from './components/EditTaskForm'

export default {
    name: "App",
  components: {
    RegisterForm,
    LoginForm,
    HomePage,
    Navbar,
    AddTaskForm,
    EditTaskForm
  },
  data() {
    return {
      isPage: "login",
      showMe: false,
      tasks: [],
      tampEdit:[],
      categories: ["backlog", "todo", "doing", "done"],
    };
  },
  methods: {
    changePage(data) {
      console.log(data);
      this.isPage = data;
    },
    fetchCard() {
      axios
        .get("https://kanban-app-projects.herokuapp.com/tasks", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        .then(({ data }) => {
          this.tasks = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editMe(data){
        //console.log('app',data)
        this.isPage = 'editTaskForm'
        this.tampEdit = data
    }
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isPage = "home";
      this.fetchCard();
    }
  },
};
</script>

<style>
</style>