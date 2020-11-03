<template>
<div class="form-container" v-if="isPage === 'register'">
    <div div class="title-box">
        <h2 class="title">Register</h2>
    </div>
        <div >
            <form @submit.prevent="succesRegister">
                <label for="email" class="title-form">Email Address</label>
                <input class="form-content" name="email" type="email" v-model="email">
                <label for="password" class="title-form">Password</label>
                <input class="form-content" name="password" type="password" v-model="password">
                <button type="submit" class="title-form">Submit</button>
            </form>
        </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'register',
    data() {
        return {
            isPage: 'register',
            email: '',
            password: ''
        }
    },
    methods: {
        succesRegister() {
            axios
            .post('http://localhost:3000/register',{
                email: this.email,
                password: this.password
            })
            .then(({data})=> {
                this.$emit('changePage', 'login')
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