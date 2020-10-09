<template>
  <div id="mainpage">
    <div class="container-fluid">
        <div class="d-flex flex-row-reverse mt-3 mr-3 bd-highlight">
            <button type="button" class="btn btn-success" @click.prevent="AddTask">New Task</button><br>
            <div class="row">
                <TaskHead
                v-for="(stage, i) in stages"
                :key='i'
                :stage="stage"
                :fetchedTasks='fetchedTasks'>
                </TaskHead>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import TaskHead from '../components/TaskHead'

export default {
    name: 'HomePage',
    components: {
        TaskHead
    },
    props: ['stages'],
    data() {
        return {
            fetchedTasks : []
        }
    },
    methods: {
        fetchTasks(){
            axios({
                method: 'GET',
                url: 'http://localhost:3000/tasks',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(({data}) => {
                this.fetchedTasks = data
                console.log(data, '<<< fetch data')
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created(){
        this.fetchTasks()
    }
}
</script>

<style>

</style>