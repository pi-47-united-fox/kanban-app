<template>
  <div>
    <Navbar @emitChangePage="logout"></Navbar>
    <div class="wall">
      <Category
        v-for="(taskCategorys, index) in taskCategorys"
        :key="index"
        @emitShowPop="popStatus"
        @emitShowPopEdit="popEdit"
        @emitShowPopMove="popMove"
        :taskCategorys="taskCategorys"
        :tasks="tasks"
        @editTask="editTask"
        @moveTask="moveTask"
        @emitDeleteTask="reloadTask"
      >
      </Category>
      <PopUpAdd
        v-if="showPop === true"
        @emitShowPop="popStatus"
        @reloadTask="reloadTask"
      ></PopUpAdd>
      <PopUpEdit
        v-if="showPopEdit === true"
        @emitPopEdit="popEdit"
        :taskEdit="taskEdit"
        @reloadTask="reloadTask"
      ></PopUpEdit>
      <PopUpMove
        v-if="showPopMove === true"
        @emitPopMove="popMove"
        @reloadTask="reloadTask"
        :moveTask="moveTask"
      ></PopUpMove>
    </div>
    {{ username }}
  </div>
</template>

<script>
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import PopUpAdd from "../components/PopUpAdd";
import TaskCard from "../components/TaskCard";
import PopUpEdit from "../components/PopUpEdit";
import PopUpMove from "../components/popUpMove";

export default {
  name: "Home",
  props: ["tasks", "taskCategorys", "fetchData"],
  components: {
    Navbar,
    Category,
    PopUpAdd,
    TaskCard,
    PopUpEdit,
    PopUpMove,
  },
  data() {
    return {
      showPop: false,
      showPopEdit: false,
      showPopMove: false,
      username: localStorage.email,
      taskEdit: "",
      taskMove: "",
    };
  },

  methods: {
    logout(page) {
      this.$emit("emitChangeHomePage", "Auth");
    },
    popStatus(status) {
      this.showPop = status;
    },
    popEdit(status) {
      this.showPopEdit = status;
    },
    popMove(status) {
      this.showPopMove = status;
    },
    editTask(payload) {
      this.taskEdit = payload;
      this.showPopEdit = true;
    },
    moveTask(payload) {
      console.log(`masuk move task dari Home`);
      this.moveTask = payload;
      console.log(this.moveTask, "ini dari Homee Task Move ");
      this.showPopMove = false;
    },
    reloadTask() {
      this.$emit("reloadTask");
      console.log(this.reloadTask);
      this.showPop = false;
      this.showPopEdit = false;
      this.showPopMove = false;
    },
  },
  created() {
    if (localStorage.access_token) {
      this.page = "Home";
      this.fetchData();
      console.log(`test created!`);
    } else {
      this.page = "Auth";
    }
  },
};
</script>

<style>
body {
  margin: 0 auto;
}
/* Wall */
.wall {
  margin: 0 auto;
  width: 70%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>