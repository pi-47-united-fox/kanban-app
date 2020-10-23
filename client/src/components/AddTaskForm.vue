<template>
  <!---ADD TASK -->
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <h1 class="title">Add a new task</h1>
                <form>
                    <div class="field">
                        <div class="select">
                            <select v-model="addWhat">
                                <option value="Backlog">Backlog</option>
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <textarea v-model="taskText" class="textarea" placeholder="Start a new mission here.."></textarea>
                        </p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <a @click="addTask" class="button is-primary">
                                Save
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "AddTaskForm",
    props: ['addWhat'],
    data() {
        return {
            taskText: ''
        }
    },
    methods: {
        addTask() {
            axios({
                method: "POST",
                url: "https://benban.herokuapp.com/tasks",
                headers: {'access_token': localStorage.access_token},
                data: {
                    title: this.taskText,
                    category: this.addWhat
                }
            })
            .then(({data}) => {
                this.$emit('changePage', 'home')
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

}
</script>

<style>

</style>