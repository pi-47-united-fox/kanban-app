<template>
<div class="popup">
  <div class="form-container-popup">
    <div  class="title-box-popup">
        <h2 class="titleForm-popup">Edit Title</h2>
    </div>
      <form @submit.prevent="editFormTitle">
           <label for="title" class="title-form-popup">Title</label><br>
            <input class="form-content-popup" name="title" v-model="title"> 
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
      title: ''
    }
  },
    methods: {
      editFormTitle() {
        console.log(this.title)
        this.$emit('changeTitle',this.title)
      },
      closePageTask() {
        this.$emit('closePageTask')
      }
    }

}
</script>

<style>

</style>