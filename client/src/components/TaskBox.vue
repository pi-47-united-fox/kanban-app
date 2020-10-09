<template>
  <div class="card-body border">
        <div class="card-title">
          <h5>Title</h5>
        </div>
        <div class="card-title">
          <h5>Category</h5>
        </div>
          <div class="card-title">
            <h6>Date</h6>
        </div>
      </div>
</template>

<script>

export default {
    name: 'TaskBox',
    props: ['fetchedTasks']
}
</script>

<style>

</style>