<template>
  <div>
    <Navbar v-if="page === 'loginPage'" @emitChangePage="changePage"></Navbar>
    <Login v-if="page === 'loginPage'" @emitChangePage="changePage"></Login>
    <Register
      v-if="page === 'registerPage'"
      @showLoginPage="changePage"
    ></Register>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";

export default {
  name: "Auth",
  components: {
    Navbar,
    Login,
    Register,
  },
  data() {
    return {
      page: "loginPage",
    };
  },
  created() {
    if (localStorage.access_token) {
      this.$emit("emitChangeHomePage", page);
    } else {
      this.page = "loginPage";
    }
  },
  methods: {
    changePage(page) {
      if (page == "registerPage") {
        this.page = page;
      } else if (page == "Home") {
        this.$emit("emitChangeHomePage", "Home");
      } else {
        this.page = page;
      }
    },
    showHomePage(page) {
      this.$emit("emitChangeHomePage", page);
    },
  },
};
</script>

<style>
</style>