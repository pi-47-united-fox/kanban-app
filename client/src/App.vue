<template>
    <div>
        <Navbar
            @changePage="changePage"
            @changePage2="changePage"
            :displayPage="displayPage"
        ></Navbar>

        <LoginForm
            v-if="displayPage === 'login'"
            @changePage="changePage"
            @changePage2="changePage"
            @refetchTasks="fetchTasks"
        ></LoginForm>

        <RegisterForm
            v-if="displayPage === 'register'"
            @changePage="changePage"
        ></RegisterForm>

        <KanbanBoard
            v-if="displayPage === 'home'"
            :allTasks="allTasks"
            @refetchTasks="fetchTasks"
            @addTask="addTaskType"
            @editForm="editForm"
        ></KanbanBoard>

        <AddTaskForm
            v-if="displayPage === 'addTaskForm'"
            @refetchTasks="fetchTasks"
            @changePage="changePage"
            :addWhat="addWhat"
        ></AddTaskForm>
         

        <EditTaskForm
            v-if="displayPage === 'editTaskForm'"
            :editWhat="editWhat"
            @changePage="changePage"
            @refetchTasks="fetchTasks"

        
        ></EditTaskForm>


    </div>
</template>

<script>
import axios from "axios"
import Navbar from "./components/Navbar"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import KanbanBoard from "./components/KanbanBoard"
import AddTaskForm from "./components/AddTaskForm"
import EditTaskForm from "./components/EditTaskForm"

export default {
    name: "App",
    data() {
        return {
            displayPage: 'login',
            allTasks: {},
            addWhat: '',
            editWhat: {}
        }
    },
    components: {
        Navbar,
        LoginForm,
        RegisterForm,
        KanbanBoard,
        AddTaskForm,
        EditTaskForm
    },
    methods: {
        fetchTasks() {
            axios({
                method: "GET",
                url: "https://benban.herokuapp.com/tasks"
            })
            .then(({data}) => {
                console.log(data)
                this.allTasks = data
            })
            .catch(err => {
                console.log(err)
            })
        },

        changePage(page) {
            this.displayPage = page
        },

        addTaskType(category) {
            this.addWhat = category
            this.displayPage = 'addTaskForm'
        },

        editForm(task) {
            this.editWhat = task
            this.displayPage = 'editTaskForm'
        }
    },
    created() {
        if(localStorage.getItem('access_token')) {
            this.displayPage = 'home'
            this.fetchTasks()
            this.displayPage = 'home'
        }
    }
   

}
</script>

<style>

</style>