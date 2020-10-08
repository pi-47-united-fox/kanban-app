<template>
  <div>
    <!-- <div style="background: #f9f9f9"></div> -->
    <div class="container">
      <div class="bgc">
        <div class="board">
          <div class="header">
            <div class="he-l"></div>
            <div class="he-r">
              <button type="button" class="add-btn" @click="showModal">
                Add Project
              </button>
            </div>
          </div>
        </div>
        <!-- --------------------------------------->
        <div class="info"></div>
        <div>
          <div class="grid">
            <div class="grid-task">
              <div class="task-title">Backlog</div>
              <div class="scroll"></div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Todo</div>
              <div class="scroll"></div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Doing</div>
              <div class="scroll"></div>
            </div>
            <!-- ------------------- -->
            <div class="grid-task">
              <div class="task-title">Done</div>
              <div class="scroll">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Category from "../components/category";
import Card from "../components/card";
export default {
  name: "Home",
  components: {
    Card,
    // Category,
  },
  data() {
    return {
      isAddModalVisible: false,
      task: [],
      // category: [BackLog, Todo, Doing, Done],
    };
  },
  created() {
    console.log(`Masuk created home`);
  },
  methods: {
    showModal() {
      this.isAddModalVisible = true;
    },
    closeModal() {
      this.isAddModalVisible = false;
    },
    fetchTask() {
      axios({
        method: "GET",
        url: "http://localhost:4000/tasks",
      })
        .then(({ data }) => {
          this.task = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>