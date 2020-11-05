<template>
    <div class="col-3 px-2">
        <div class="card">
            <h5 class="card-header bg-warning text-white">{{ task[0].category}}</h5>
            <div class="card-body px-1">
                <Task
                    v-for="(card, i) in task"
                    :key="i"
                    :card="card"
                    @refetchTasks="refetchTasks"
                    @updateTask="updateTask"
                    @deleteTask="deleteTask"
                    @editStatusToLeft="editStatusToLeft"
                    @editStatusToRight="editStatusToRight"
                    >
                </Task>
            </div>
        </div>
    </div>
</template>

<script>
import Task from './Task'
export default {
    name: "TaskCategory",
    props: ['task'],
    components: {
        Task
    },
    methods:{
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