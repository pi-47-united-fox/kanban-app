<template>
    <div class="card mb-1" style="width: 100%;">
        <h5 class="card-header bg-dark text-white">{{card.title}}</h5>
        <div class="card-body">
            <h6 class="card-subtitle text-muted">Assigned to: {{card.assigned_to}}</h6>
            <label>Description:</label>
            <p class="card-text">{{card.description}}</p>
            <button type="button" class="btn btn-secondary" v-on:click.prevent="updateTask">Edit</button>
            <button type="button" class="btn btn-info" v-if="card.category==='backlog'"
                v-on:click.prevent="editStatusToRight"><i class="icon-arrow-right"></i></button>
            <button type="button" class="btn btn-info" v-if="card.category==='todo'"
                v-on:click.prevent="editStatusToLeft"><i class="icon-arrow-left"></i></button>
            <button type="button" class="btn btn-info" v-if="card.category==='todo'"
                v-on:click.prevent="editStatusToRight"><i class="icon-arrow-right"></i></button>
            <button type="button" class="btn btn-info" v-if="card.category==='doing'"
                v-on:click.prevent="editStatusToLeft"><i class="icon-arrow-left"></i></button>
            <button type="button" class="btn btn-info" v-if="card.category==='doing'"
                v-on:click.prevent="editStatusToRight"><i class="icon-arrow-right"></i></button>
            <button type="button" class="btn btn-info" v-if="card.category==='done'"
                v-on:click.prevent="editStatusToLeft"><i class="icon-arrow-left"></i></button>
            <button type="button" class="btn btn-danger" v-on:click.prevent="deleteTask">Delete</button>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: "Task",
    props: ['card'],
    methods: {
        updateTask(){
            this.$emit('updateTask', this.card)
        },
        deleteTask(){
            this.$emit('deleteTask', this.card)
        },
        editStatusToRight(){
            this.$emit('editStatusToRight', this.card)
        },
        editStatusToLeft(){
            this.$emit('editStatusToLeft', this.card)
        }
    }
}
</script>

<style>

</style>