<template>
  <div>
    <Navbar 
    @changePage="changePage"
    :isPage="isPage">
    </Navbar>

    <HomePage
    v-if="isPage === 'home-page'"
    :stages="stages">
    </HomePage>

    <LoginForm 
      v-else-if="isPage === 'login'">
    </LoginForm>

    <RegisterForm
      v-else-if="isPage === 'register'">
    </RegisterForm>

    <AddTask
      v-else-if="isPage === 'add-task'">
    </AddTask>

  </div>
</template>

<script>
import axios from 'axios'

import AddTask from './views/AddTask'
import HomePage from './views/HomePage'
import LoginForm from './views/LoginForm'
import RegisterForm from './views/RegisterForm'

import Navbar from './components/Navbar'

export default {
  name: "App",
  components: {
    HomePage,
    LoginForm,
    RegisterForm,
    Navbar,
    AddTask
  },
  data() {
    return {
      isPage: "home-page",
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
      ]
    }
  },
  methods: {
    changePage(payload){
      this.isPage = payload
    },
  }
}

</script>

<style>

</style>