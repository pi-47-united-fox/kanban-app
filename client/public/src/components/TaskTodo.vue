<template>
  <div class="kanban-task">
        <div class="panel-block">
            <div class="notification is-success is-light">
                <div class="content">
                    <div class="post-references">
                        <div>
                            <p><i class="fas fa-user"> </i>
                                <strong>{{todo.User.email}}</strong></p>
                        </div>
                        <div>
                            <p><i class="far fa-calendar-alt"> </i>{{todo.createdAt}}</p>
                        </div>
                    </div>
                    <div>
                        {{todo.title}}
                    </div>
                </div>
                <div class="actions">
                    <span @click="editTaskForm(todo)" class="icon has-text-info">
                        <i class="fas fa-edit"></i>
                    </span>
                    <span @click="upgradeTask(todo.id)" class="icon has-text-success">
                        <i class="fas fa-thumbs-up"></i>
                    </span>
                    <span @click="downgradeTask(todo.id)" class="icon has-text-warning">
                        <i class="fas fa-thumbs-down"></i>
                    </span>
                    <span @click="deleteTask(todo.id)" class="icon has-text-danger">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "TaskTodo",
    props: ['todo'],
    methods: {
        upgradeTask(id){
            axios({
                method: "PATCH",
                url: `http://localhost:3000/tasks/up/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        },

        downgradeTask(id){
            axios({
                method: "PATCH",
                url: `http://localhost:3000/tasks/down/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        },

        deleteTask(id){
            axios({
                method: "DELETE",
                url: `http://localhost:3000/tasks/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        },

        editTaskForm(task) {
            this.$emit('editForm', task)

        }

    }
}
</script>

<style>

</style>