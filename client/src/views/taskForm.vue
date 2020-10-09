<template>
<div class="form-container">
    <div  class="title-box">
        <h2 class="title">Add Task</h2>
    </div>
      <form @submit.prevent="addTask">
          <label for="products_name"  class="title-form">your doing</label>
          <input type="name" v-model="title" class="form-content">
          <label for=""  class="title-form"> Status</label>
          <select v-model="category" class="form-content ">
            <option value="">----Select ----</option>
            <option value="backlog">backlog</option>
            <option value="todo">Todo</option>
            <option value="doing">On Progress</option>
            <option value="done">Completed</option>
          </select>
        <div class="title-form">
          <input type="submit" value="input" class="btn btn-lg btn-light">
          <button
            type="button"
            @click.prevent="home">
            Cancel
          </button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  methods: { 
         methods: {
        addTask() {
            axios({
                method: "POST",
                url: "http://localhost:3000/task",
                headers: {'access_token': localStorage.access_token},
                data: {
                    title: this.taskText,
                    category: this.addWhat
                }
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                this.$emit('changePage', 'home')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
        
    }
    
}
</script>

<style>

</style>