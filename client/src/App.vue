<template>
  <div>
    <Navbar 
    @changePage="changePage"
    :isPage="isPage">
    </Navbar>

    <HomePage
    v-if="isPage === 'home-page'"
    @changePage="changePage"
    @editForm="editForm"
    @deleteTask="deleteTask"
    :fetchedTasks="fetchedTasks"
    :stages="stages">
    </HomePage>

    <LoginForm 
      v-else-if="isPage === 'login'"
      @changePage="changePage"
      :fetchTasks="fetchTasks">
    </LoginForm>

    <RegisterForm
      v-else-if="isPage === 'register'"
      @changePage="changePage">
    </RegisterForm>

    <AddTask
      v-else-if="isPage === 'add-task'"
      @addTask="addTask"
      @changePage="changePage">
    </AddTask>

    <EditTask
    v-else-if="isPage === 'edit-page'"
    :taskDetail="taskDetail"
    @editTask="editTask"
    >
    </EditTask>

  </div>
</template>

<script>
import axios from 'axios'

import AddTask from './views/AddTask'
import HomePage from './views/HomePage'
import LoginForm from './views/LoginForm'
import RegisterForm from './views/RegisterForm'
import EditTask from './views/EditTask'

import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    HomePage,
    LoginForm,
    RegisterForm,
    Navbar,
    AddTask,
    EditTask
  },
  data() {
    return {
      isPage: "login",
      stages: [
        {
          stage: 'Back-Log'
        },
        {
          stage: 'To-Do'
        },
        {
          stage: 'Doing'
        },
        {
          stage: 'Done'
        }
      ],
      taskDetail: {},
      fetchedTasks : [],
    }
  },
  methods: {
    changePage(payload){
      this.isPage = payload
    },
    editForm(task){
     this.changePage('edit-page')
     this.taskDetail = task
    },
    fetchTasks(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/tasks',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then(({data}) => {
          // console.log(data, '<<< fetch data')
            this.fetchedTasks = data
        })
        .catch(err => {
            console.log(err)
        })
    },
    addTask(payload){
      axios({
          method: 'POST',
          url: 'http://localhost:3000/tasks',
          data: {
            title: payload.title,
            description: payload.description,
            category: payload.category
          },
          headers: {
              access_token: localStorage.getItem('access_token')
          }
      })
      .then(({data}) => {
        this.fetchedTasks.push(data)
        this.changePage('home-page')
      })
      .catch(err => {
          console.log(err)
      })
    },
    editTask(payload){
      axios({
          method: 'PATCH',
          url: `http://localhost:3000/tasks/${payload.id}`,
          data: {
            title: payload.title,
            description: payload.description,
            category: payload.category
          },
          headers: {
              access_token: localStorage.getItem('access_token')
          }
      })
      .then(({data}) => {
        // console.log(data)
        this.fetchTasks()
        this.isPage = 'home-page'
      })
      .catch(err => {
          console.log(err)
      })
    },
    deleteTask(payload){
      axios({
          method: 'DELETE',
          url: `http://localhost:3000/tasks/${payload.id}`,
          headers: {
              access_token: localStorage.getItem('access_token')
          }
      })
      .then(({data}) => {
        let index = this.fetchedTasks.findIndex(el => el.id == payload.id)
        this.fetchedTasks.splice(index, 1, data)
        this.isPage = 'home-page'
      })
      .catch(err => {
          console.log(err)
      })
    }
  },
  created(){
    if(localStorage.getItem('access_token')){
      this.fetchTasks()
      this.changePage('home-page')
    } else {
      this.changePage('login')
    }
  }
}

</script>

<style>

</style>