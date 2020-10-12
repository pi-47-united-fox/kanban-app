<template>
<div>
    <navbar 
    @changePage="changePage"
    :isPage="isPage"></navbar>
    <register v-if="isPage === 'register'" @changePage="changePage"></register>
    <login v-else-if="isPage === 'login'" @changePage="changePage"></login>
    <home v-else-if="isPage === 'home'" @changePage="changePage"></home>
</div>
  

</template>

<script>
import navbar from './components/navbar'
import home from './views/Home'
import register from './views/Register'
import login from './views/Login'
import axios from 'axios'
export default {
   components: {
       navbar,
       home,
       register,
       login
   },
  data() {
    return {
      isPage: 'login'
    };
  },
  methods:{
    changePage(value) {
      this.isPage = value
    },  
    },
  created() {
    if(localStorage.getItem('access_token')){
      this.isPage = 'home'
    }
  }
};
</script>
<style scoped>
@import './style.css';
</style>