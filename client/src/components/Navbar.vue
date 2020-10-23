<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd">
    <a class="navbar-brand">Kanban App</a>
    <form class="form-inline">
      <button
        class="btn btn-outline-danger my-2 my-sm-0 logout"
        type="submit"
        @click.prevent="logoutHandler"
        :params="params"
        :logoutButton="true"
      >
        Logout
      <!-- </button>
      <GoogleLogin
        class="btn btn-outline-danger my-2 my-sm-0 logout"
        @click.prevent="logoutHandler"
        :params="params"
        :logoutButton="true"
        >Logout</GoogleLogin
      > -->
    </form>
  </nav>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Navbar",
  props: {
    logoutButton: Boolean,
  },
  components: {
    GoogleLogin,
  },
  data() {
    return {
      params: {
        client_id:
          "321191066324-10iavk72tkhqsovavovuuucnt823u6np.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    logoutHandler() {
      // var auth2 = gapi.auth2.getAuthInstance();
      // auth2.signOut().then(function () {
      //   console.log("User signed out.");
      // });
      localStorage.clear();
      //localStorage.setItem("");
      this.$emit("changePage", "login");
    },
  },
};
</script>

<style>
</style>