<template>
  <div>
    <div class="container">
      <div class="navbar">
        <div>
          <img class="logo" src="../assets/logo.svg" alt="" />
        </div>
        <button class="logout-btn">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scope>
.navbar {
  position: sticky;
}
</style>