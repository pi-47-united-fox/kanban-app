<template>
 <div class="form-container" v-if="isPage === 'login'">
    <div  class="title-box">
        <h2 class="title">Login</h2>
    </div>
        <div >
            <form @submit.prevent="succesLogin">
                <label for="loginEmail" class="title-form">Email Address</label>
                <input id="loginEmail" class="form-content" name="email" type="email" v-model="email">
                <label for="loginPassword" class="title-form">Password</label>
                <input id="loginPassword"  class="form-content" name="password" type="password" v-model="password">
                <button type="submit" class="title-form">Submit</button>
            </form>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'login',
    data() {
        return {
            isPage: 'login',
            email: '',
            password: ''
        }
    },
    methods: {
        succesLogin() {
            axios
            .post('http://localhost:3000/login',{
                email: this.email,
                password: this.password
            })
            .then(({data})=> {
                this.$emit('changePage', 'home')
                localStorage.setItem('access_token', data.access_token)
                this.fetchTask()
            })
            .catch(err=> {
                console.log(err)
            })
            .then(()=> {
                this.email = ''
                this.password = ''
            })
        }
    }
}

</script>

<style>

</style>