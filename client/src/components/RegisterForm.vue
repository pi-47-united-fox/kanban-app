<template>
      <div class="container add-form">
        <h1>Register Account</h1>
        <form id="btn-add" @submit.prevent="registerHandler">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" id="email" v-model="email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" id="password" rows="3" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary btn-save">Save</button>
          <button class="btn btn-danger btn-back" @click.prevent="loginPage">Back</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "RegisterForm",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        loginPage(){
            this.$emit('changePage','login')
        },
        registerHandler(){
            axios
                .post('https://kanban-app-projects.herokuapp.com/register',{
                    email: this.email,
                    password: this.password
                })
                .then(({data})=>{
                    this.loginPage()
                })
                .catch(err=>{
                    console.log(err)
                })
                .then(()=>{
                    this.email = ''
                    this.password = ''
                })
        }
    }
}
</script>

<style>

</style>