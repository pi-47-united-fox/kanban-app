<template>
  <!---ADD TASK -->
    <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <h1 class="title">Edit Task</h1>
                <form>
                    <div class="field">
                        <div class="select">
                            <select v-model="taskEdit.category">
                                <option value="Backlog">Backlog</option>
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <textarea class="textarea" placeholder="Start a new mission here.." v-model="taskEdit.title"></textarea>
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
    props: ['editWhat'],
    data() {
        return {
            taskEdit: {
                title: '',
                category: ''
            }
        }
    },
    methods: {
        editTask() {
            axios({
                method: "PUT",
                url: `http://localhost:3000/tasks/${this.editWhat.id}`,
                headers: {'access_token': localStorage.access_token},
                data: {
                    title: this.taskEdit.title,
                    category: this.taskEdit.category
                }
            })
            .then(({data}) => {
                console.log(data.message)
                this.$emit('changePage', 'home')
                this.$emit("refetchTasks")
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

    created() {
        this.taskEdit.title = this.editWhat.title
        this.taskEdit.category = this.editWhat.category

    }

}
</script>

<style>

</style>