<template>
    <div class="mx-auto my-0 px-0" id="board" style="width: 90%;">
        <!-- header of kanban board -->
        <div class="container d-flex flex-row justify-content-between my-3 mx-0 px-0 mw-100">
            <h3 class="mr-3">Kanban Board</h3>
            <button type="button" class="btn btn-secondary" @click.prevent="changePage">New Task</button>
        </div>
        <!-- content of the kanban board -->
        <div class="container justify-content-xl-between px-0 mw-100">
            <div class="row">
                <TaskCategory
                v-for="(task, i) in tasks" :key="i"
                :task="task"
                @refetchTasks="refetchTasks"
                @updateTask="updateTask"
                @deleteTask="deleteTask"
                @editStatusToLeft="editStatusToLeft"
                @editStatusToRight="editStatusToRight">
                </TaskCategory>
            </div>
        </div>
    </div>
</template>

<script>
import TaskCategory from '../components/TaskCategory'

export default {
    name: 'HomePage',
    props: ['tasks'],
    data(){
        return{
            page: 'home'
        }
    },
    components: {
        TaskCategory
    },
    methods: {
        changePage(){
            // console.log('Masuk ke method changepage')
            this.$emit('changePage', 'add-page')
        },
        refetchTasks(){
            this.$emit("refetchTasks")
        },
        updateTask(payload){
            this.$emit('updateTask',payload)
        },
        deleteTask(payload){
            this.$emit('deleteTask',payload)
        },
        editStatusToRight(payload){
            this.$emit('editStatusToRight', payload)
        },
        editStatusToLeft(payload){
            this.$emit('editStatusToLeft', payload)
        }
    }
}
</script>

<style>

</style>