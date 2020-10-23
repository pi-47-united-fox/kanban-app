<template>
  <div class="card border-success">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        type="button"
        class="btn btn-primary fa fa-info"
        @click.prevent="editForm(task)"
        style="font-size: 20px"
        v-if="task.category == 'backlog'"
      >
      </button>
      <button
        type="button"
        class="btn btn-primary fa fa-arrow-left"
        @click.prevent="moveHandlerLeft(task.id,task.category)"
        style="font-size: 20px"
        v-if="task.category !== 'backlog'"
      >
      </button>
      <button
        type="button"
        class="btn btn-danger fa fa-trash"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      >
      </button>
      <button
        type="button"
        class="btn btn-success fa fa-arrow-right"
        @click.prevent="moveHandlerRight(task.id,task.category)"
        style="font-size: 20px"
        v-if="task.category !== 'done'"
      >
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TaskTitle",
  props: ["task"],
  methods: {
    editForm(task){
     // this.$emit('changePage','editTaskForm')
      this.$emit('editMe',task)
    },
    deleteHandler(param) {
      axios
        .delete(
          `https://kanban-app-projects.herokuapp.com/tasks/${param}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        )
        .then(({ data }) => {
          this.$emit("refetchTask");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    moveHandlerRight(param1,param2){
      if(param2 == 'backlog'){
        param2 = 'todo'
      }
      else if(param2 == 'todo'){
        param2 = 'doing'
      }
       else if(param2 == 'doing'){
         param2 = 'done'
      }
      console.log(param1,param2, 'right')
      axios
        .patch(
          `https://kanban-app-projects.herokuapp.com/tasks/${param1}`,{
          category: param2
        },
        {
        headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        .then(({ data }) => {
          this.$emit("refetchTask");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    moveHandlerLeft(param1,param2){
      if(param2 == 'todo'){
        param2 = 'backlog'
      }
      else if(param2 == 'doing'){
        param2 = 'todo'
      }
       else if(param2 == 'done'){
         param2 = 'doing'
      }
      console.log(param1,param2, 'left')
      axios
        .patch(
          `https://kanban-app-projects.herokuapp.com/tasks/${param1}`,{
          category: param2
        },
        {
        headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        .then(({ data }) => {
          this.$emit("refetchTask");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
</style>