<template>
<div class="popup">
  <div class="form-container-popup">
    <div  class="title-box-popup">
        <h2 class="titleForm-popup">Edit Category</h2>
    </div>
      <form @submit.prevent="editFormCategory">
        <label for="category" class="title-form-popup"> category</label> <br>
          <select  class="form-content-popup" name="category" v-model="category">
            <option value="Backlog">Backlog</option>
            <option value="Todo">Todo</option>
            <option value="On Progress">On Progress</option>
            <option value="Completed">Completed</option>
          </select>
        <div class="title-box-popup">
          <button type="submit" @click="closePageTask" class="title-popup">Submit</button>
          <button
            type="button"
            class="title-popup"
            @click="closePageTask"
            >
            Cancel
          </button>
        </div>
      </form>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      category: this.category
    }
  },
    methods: {
      editFormCategory() {
        this.$emit('changeCategory','this.category')
      },
      closePageTask() {
        this.$emit('closePageTask')
      }
    }

}
</script>

<style>

</style>