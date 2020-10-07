<template>
  <div>
    <center>
      <div id="login" class="login">
        <img class="logo" src="../assets/logo-white.svg" alt="" />
        <div id="login-box" class="login-box">
          <div class="input">
            <label for="" class="label">Email</label>
            <input type="email" class="text" placeholder="Your Email" />
          </div>
          <div class="input">
            <label for="" class="label">Password</label>
            <input type="email" class="text" placeholder="*******" />
          </div>
          <div>
            <button class="btn-login">login</button>
          </div>
          <div class="container" style="margin-top :30px">
            <a href="" style="color: white">don't have account ?</a>
          </div>
          <br>
          <img class="sm-btn"  src="../assets/google-plus-logo-on-black-background.svg" alt="" />

        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
</style>