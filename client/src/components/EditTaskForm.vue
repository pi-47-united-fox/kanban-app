<template>
  <!---ADD TASK -->
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <h1 class="title">Edit Task</h1>
                <form>
                    <div class="field">
                        <div class="select">
                            <select v-model="taskCategory">
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
                            <a @click="editTask" class="button is-primary">
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
    name: "EditTaskForm",
    data() {
        return {
            taskCategory: '',
            taskText: ''
        }
    },
    methods: {
        editTask(id) {
            axios({
                method: "PUT",
                url: `http://localhost:3000/tasks/${id}`,
                headers: {'access_token': localStorage.access_token},
                data: {
                    title: this.taskText,
                    category: this.taskCategory
                }
            })
            .then(({data}) => {
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