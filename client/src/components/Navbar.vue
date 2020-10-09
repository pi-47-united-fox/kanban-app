<template>
  <nav class="navbar navbar-light bg-transparant fixed-top">
    <a
      class="navbar-brand"
      href="#"
      @click.prevent="home"
      v-show="page === 'home'"
    >
      <i class="fa fa-check-circle"></i>
      Todo What ?
    </a>

    <div class="d-flex">
      <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
      <a
        class="navbar-brand"
        href="#"
        @click.prevent="register"
        v-show="page === 'login' || page === 'register'"
      >
        <i class="fa fa-registered"></i>
        Register
      </a>
      <a
        class="navbar-brand"
        href="#"
        @click.prevent="login"
        v-show="page === 'login' || page === 'register'"
      >
        <i class="fa fa-sign-in-alt"></i>
        Login
      </a>
      <a class="navbar-brand" href="#" @click="logout" v-show="page === 'home'">
        Logout
        <i class="fa fa-sign-out-alt"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: ["page"],

  methods: {
    home() {
      this.$emit("emitChangePage", "addForm");
    },
    login() {
      this.$emit("emitChangePage", "login");
    },
    register() {
      this.$emit("emitChangePage", "register");
    },
    logout() {
      localStorage.clear();
      this.$emit("emitChangePage", "login");
    },
  },
};
</script>

<style>
</style>