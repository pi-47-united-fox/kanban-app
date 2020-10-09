<template>
  <section class="container is-widescreen">
            <section id="header-home">
                <div>
                    <h1 class="title">
                        Welcome Back!
                    </h1>
                    <p class="subtitle">
                        Don't <em>mben-mben.</em> <strong>Do it now!</strong>
                    </p>
                </div>
            </section>
            <section id="kanban-board">
                <div class="columns">
                    <!--- Backlog -->
                    <div class="column" id="board-group">
                        <div class="panel is-warning">
                            <div id="kanban-title">
                                <p class="panel-heading">
                                    <i class="fas fa-thumbtack"></i>
                                    Backlog
                                </p>
                            </div>
                            <div class="kanban-tasks">
                                <!--- EMPTY TASK-->
                                <div v-if="allTasks.backlog.length === 0" class="kanban-task">
                                    <div class="panel-block">
                                        <div class="notification">
                                            <div class="content">
                                                <i class="fas fa-bed"></i>
                                                <strong>This task is empty.</strong> Start adding a new task!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--- END OF EMPTY TASK-->

                                <TaskBacklog 
                                    v-else
                                    v-for="backlog in allTasks.backlog"
                                    :key="backlog.id"
                                    :backlog="backlog"
                                    v-on="$listeners"
                                    @editForm="editForm"
                                ></TaskBacklog>
                                
                            </div>
                            <div @click="addBacklog" id="btn-add-task">
                                <div class="panel-block">
                                    <button class="button is-warning is-outlined is-fullwidth">
                                        <i class="fas fa-plus-circle"> </i>
                                        Add new Task
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- Backlog End  -->
                    <!--- Todo -->
                    <div class="column" id="board-group">
                        <div class="panel is-success">
                            <div id="kanban-title">
                                <p class="panel-heading">
                                    <i class="fas fa-check-double"></i>
                                    Todo
                                </p>
                            </div>
                            <div class="kanban-tasks">
                                <!--- EMPTY TASK-->
                                <div v-if="allTasks.todo.length === 0" class="kanban-task">
                                    <div class="panel-block">
                                        <div class="notification">
                                            <div class="content">
                                                <i class="fas fa-bed"></i>
                                                <strong>This task is empty.</strong> Start adding a new task!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--- END OF EMPTY TASK-->
                                <TaskTodo
                                    v-else
                                    v-for="todo in allTasks.todo"
                                    :key="todo.id"
                                    :todo="todo"
                                    v-on="$listeners"
                                ></TaskTodo>
                            </div>
                            <div @click="addTodo" id="btn-add-task">
                                <div class="panel-block">
                                    <button class="button is-success is-outlined is-fullwidth">
                                        <i class="fas fa-plus-circle"> </i>
                                        Add new Task
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- Todo End  -->
                    <!--- Doing -->
                    <div class="column" id="board-group">
                        <div class="panel is-link">
                            <div id="kanban-title">
                                <p class="panel-heading">
                                    <i class="fas fa-rocket"></i>
                                    Doing
                                </p>
                            </div>
                            <div class="kanban-tasks">
                                <!--- EMPTY TASK-->
                                <div v-if="allTasks.doing.length === 0" class="kanban-task">
                                    <div class="panel-block">
                                        <div class="notification">
                                            <div class="content">
                                                <i class="fas fa-bed"></i>
                                                <strong>This task is empty.</strong> Start adding a new task!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--- END OF EMPTY TASK-->
                                <TaskDoing 
                                    v-else
                                    v-for="doing in allTasks.doing"
                                    :key="doing.id"
                                    :doing="doing"
                                    v-on="$listeners"
                                ></TaskDoing>
                                
                            </div>
                            <div @click="addDoing" id="btn-add-task">
                                <div class="panel-block">
                                    <button class="button is-link is-outlined is-fullwidth">
                                        <i class="fas fa-plus-circle"> </i>
                                        <p> Add new Task</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- Doing End  -->
                    <!--- Completed -->
                    <div class="column" id="board-group">
                        <div class="panel is-primary">
                            <div id="kanban-title">
                                <p class="panel-heading">
                                    <i class="fas fa-award"></i>
                                    Completed
                                </p>
                            </div>
                            <div class="kanban-tasks">
                                <!--- EMPTY TASK-->
                                <div v-if="allTasks.completed.length === 0" class="kanban-task">
                                    <div class="panel-block">
                                        <div class="notification">
                                            <div class="content">
                                                <i class="fas fa-bed"></i>
                                                <strong>This task is empty.</strong> Start adding a new task!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--- END OF EMPTY TASK-->
                                <TaskCompleted 
                                    v-else
                                    v-for="completed in allTasks.completed"
                                    :key="completed.id"
                                    :completed="completed"
                                    v-on="$listeners"
                                ></TaskCompleted>
                                
                            </div>
                            <div @click="addCompleted" id="btn-add-task">
                                <div class="panel-block">
                                    <button class="button is-primary is-outlined is-fullwidth">
                                        <i class="fas fa-plus-circle"> </i>
                                        <p> Add new Task</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- Completed End  -->
                </div>
            </section>
            <!---END OF BOARD-->                   
        </section>
</template>
<script>
import TaskBacklog from "../components/TaskBacklog"
import TaskTodo from "../components/TaskTodo"
import TaskDoing from "../components/TaskDoing"
import TaskCompleted from  "../components/TaskCompleted"

export default {
    name: 'KanbanBoard',
    props: ['allTasks'],
    components: {
        TaskBacklog,
        TaskTodo,
        TaskDoing,
        TaskCompleted
    },
    data() {
        return {
            newTask: ''

        }
    },
    methods: {
       addBacklog() {
           this.$emit('addTask', 'Backlog')
       },

       addTodo() {
           this.$emit('addTask', 'Todo')
       },

       addDoing() {
           this.$emit('addTask', 'Doing')
       },

       addCompleted() {
           this.$emit('addTask', 'Completed')
       },

       editForm(task) {
           this.$emit('editForm', task)
       }
    }
};
</script>

<style>
</style>