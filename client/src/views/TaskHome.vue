<template>
  <section class="main-page container">
    <div class="containers">
      <!-- backlog -->
      <categoryCard
        v-for="(category, i) in categories"
        :key="i"
        :categoryName="category"
        :tasks="tasks"
        @updateTask="updateTask"
        @deleteTask="deleteTask"
      ></categoryCard>
      <!-- todo -->
    </div>
  </section>
</template>

<script>
import categoryCard from "../components/Category";
export default {
  props: ["tasks"],
  components: {
    categoryCard,
  },

  data() {
    return {
      categories: [
        {
          name: "backlog",
          icon: "fa fa-book-dead",
          color: "card-header bg-danger sticky-top",
        },
        {
          name: "todo",
          icon: "fa fa-book-open",
          color: "card-header bg-warning sticky-top",
        },
        {
          name: "doing",
          icon: "fa fa-paper-plane",
          color: "card-header bg-primary sticky-top",
        },
        {
          name: "done",
          icon: "fa fa-check-circle",
          color: "card-header bg-success sticky-top",
        },
      ],
    };
  },
  methods: {
    updateTask(value) {
      this.$emit = ("updateTask", value);
    },
    deleteTask(value) {
      this.$emit = ("deleteTask", value);
    },
  },
};
</script>

<style>
</style>