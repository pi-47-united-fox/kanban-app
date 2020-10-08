<template>
    <div>
        <Navbar></Navbar>
        <LoginForm></LoginForm>
        <RegisterForm></RegisterForm>
        <KanbanBoard
            :allTasks="allTasks"
        ></KanbanBoard>


    </div>
</template>

<script>
import axios from "axios"
import Navbar from "./components/Navbar"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import KanbanBoard from "./components/KanbanBoard"

export default {
    name: "App",
    data() {
        return {
            welcome: "Hello Vue Js",
            allTasks: {}
        }
    },
    components: {
        Navbar,
        LoginForm,
        RegisterForm,
        KanbanBoard
    },
    methods: {
        fetchTasks() {
            axios({
                method: "GET",
                url: "http://localhost:3000/tasks"
            })
            .then(({data}) => {
                console.log(data)
                this.allTasks = data
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.fetchTasks()
    }
   

}
</script>

<style>

</style>