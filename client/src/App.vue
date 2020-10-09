<template>
    <div>
        <Navbar
            @changePage="changePage"
            v-bind:page="page">
        </Navbar>
        <LoginForm
            @changePage="changePage"
            v-if="page==='login'">
        </LoginForm>
        <RegisterForm
            @changePage="changePage" 
            v-else-if="page==='register'">
        </RegisterForm>
        <HomePage 
            v-else-if="page==='home'"
            v-bind:tasks="tasks"
            @changePage="changePage"
            @refetchTasks="fetchTasks"
            @updateTask="updateTask"
            @deleteTask="deleteTask"
            @editStatusToLeft="editStatusToLeft"
            @editStatusToRight="editStatusToRight">
        </HomePage>
        <AddTaskForm
            v-else-if="page==='add-page'"
            @addTask="addTask"
            @changePage="changePage">
        </AddTaskForm>
        <EditTaskForm
            v-else-if="page==='edit-page'"
            v-bind:taskData="taskData"
            @editTask="editTask"
            @changePage="changePage">
        </EditTaskForm>
    </div>
</template>

<script>
import axios from 'axios';
import HomePage from './views/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Navbar from './components/Navbar';
import AddTaskForm from './components/AddForm';
import EditTaskForm from './components/EditForm';

export default {
    name: "App",
    components: {
        Navbar,
        LoginForm,
        RegisterForm,
        HomePage,
        AddTaskForm,
        EditTaskForm
    },
    data(){
        return{
            welcome: "HELLO VUEJS",
            page: 'login',
            tasks: [],
            taskData: {}
        }
    },
    methods: {
        changePage(payload){
            this.page = payload
        },
        fetchTasks(){
            axios.get('http://localhost:3000/tasks', {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    this.tasks = data
                    // console.log(this.tasks)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addTask(payload){
            axios.post('http://localhost:3000/tasks', {
                    title: payload.title,
                    description: payload.description,
                    category: payload.category,
                    assigned_to: payload.assigned_to
                }, 
                {
                    headers: {
                    access_token: localStorage.getItem('access_token')
                }})
                .then(({ data }) => {
                    // console.log('Sukses tambahin task')
                    this.tasks[data.category].push(data)
                    
                    this.changePage('home')
                })
                .catch(err => {
                    // console.log('Gagal')
                    console.log(err)
                })
        },
        updateTask(task){
            console.log(task)
            this.taskData = task
            this.changePage('edit-page')
        },
        editTask(payload){
            axios({
                method: 'PUT',
                url: `http://localhost:3000/tasks/${payload.id}`,
                data: {
                    category: payload.category
                },
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    console.log(data)
                    this.fetchTasks()
                    this.changePage('home')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteTask(task){
            console.log(task)
            axios({
                method: 'DELETE',
                url: `http://localhost:3000/tasks/${task.id}`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    console.log(data)
                    this.fetchTasks()
                    this.changePage('home')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editStatusToRight(task){
            let status = ''
            if(task.category === 'backlog'){
                status = 'todo'
            }
            else if(task.category === 'todo'){
                status = 'doing'
            }
            else{
                status = 'done'
            }
            axios({
                method: 'PATCH',
                url: `http://localhost:3000/tasks/${task.id}`,
                data: {
                    category: status
                },
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    console.log(data)
                    this.fetchTasks()
                    this.changePage('home')
                })
                .catch(err => {
                    console.log(err)
                })

        },
        editStatusToLeft(task){
            let status = ''
            if(task.category === 'done'){
                status = 'doing'
            }
            else if(task.category === 'doing'){
                status = 'todo'
            }
            else{
                status = 'backlog'
            }
            axios({
                method: 'PATCH',
                url: `http://localhost:3000/tasks/${task.id}`,
                data: {
                    category: status
                },
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    console.log(data)
                    this.fetchTasks()
                    this.changePage('home')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    created(){
        if(localStorage.getItem('access_token')){
            this.page = 'home'
            this.fetchTasks()
        }
    }


}
</script>

<style>

</style>