<template>
    <div class="kanban-task">
        <div class="panel-block">
            <div class="notification is-warning is-light">
                <div class="content">
                    <div class="post-references">
                        <div>
                            <p><i class="fas fa-user"> </i>
                                <strong>{{backlog.User.email}}</strong></p>
                        </div>
                        <div>
                            <p><i class="far fa-calendar-alt"> </i>{{backlog.createdAt}}</p>
                        </div>
                    </div>
                    <div>
                        {{backlog.title}}
                    </div>
                </div>
                <div class="actions">
                    <span class="icon has-text-info">
                        <i class="fas fa-edit"></i>
                    </span>
                    <span @click="upgradeTask(backlog.id)" class="icon has-text-success">
                        <i class="fas fa-thumbs-up"></i>
                    </span>
                    <span @click="downgradeTask(backlog.id)" class="icon has-text-warning">
                        <i class="fas fa-thumbs-down"></i>
                    </span>
                    <span @click="deleteTask(backlog.id)" class="icon has-text-danger">
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
    name: "TaskBacklog",
    props: ['backlog'],
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