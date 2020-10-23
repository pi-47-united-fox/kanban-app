<template>
  <div>

    <div class="container contain">
      <TaskCard
        v-for="(category, i) in categories"
        :key="i"
        :tasks="tasks"
        :category="category"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskCard>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import TaskCard from "./TaskCard";
export default {
  name: "HomePage",
  props: ["tasks", "categories"],
  components: {
    Navbar,
    TaskCard,
  },
  data() {
    return {
      isPage: "home",
    };
  },
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$emit("changePage", "login");
    },
    refetchTask() {
      this.$emit("refetchTask");
    },
    changePage(data){
      
      this.$emit("changePage",data)
    },
    editMe(data){
      this.$emit('editMe',data)
    }
  },
};
</script>

<style>
</style>