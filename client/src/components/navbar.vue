<template>
  <div>
    <div class="container">
      <div class="navbar">
        <div>
          <img class="logo" src="../assets/logo.svg" alt="" />
        </div>
        <button class="logout-btn" @click="logOut">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logOut() {
      localStorage.clear();
      this.$emit("emitLogout");


    },
  },
};
</script>

<style scope>
.container {
  position: sticky;
}
</style>