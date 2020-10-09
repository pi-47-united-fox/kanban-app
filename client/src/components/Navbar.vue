<template>
  <!--Navbar-->
  <div class="navbar">
    <div class="logo">
      <h1>Kanban</h1>
    </div>
    <div class="account">
      <i class="far fa-user-circle"></i>
      <h5>{{ user }}</h5>
      <i v-on:click="logout" class="fa fa-sign-out-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: localStorage.account_name,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$emit("emitChangePage", "loginPage");
      console.log(`test logout`);
    },
  },
};
</script>

<style>
/* Navbar */
.navbar {
  height: 80px;
  background-color: rgb(1, 0, 44);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.navbar i {
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
}

.account {
  display: flex;
  align-items: baseline;
  margin-right: 10px;
}
</style>
