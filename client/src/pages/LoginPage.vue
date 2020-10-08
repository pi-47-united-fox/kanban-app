<template>
  <div>
    <center>
      <div id="login" class="login">
        <img class="logo" src="../assets/logo-white.svg" alt="" />
        <div id="login-box" class="login-box">
          <div class="input">
            <label for="" class="label">Email</label>
            <input
              type="email"
              class="text"
              placeholder="Your Email"
              v-model="email"
            />
          </div>
          <div class="input">
            <label for="" class="label">Password</label>
            <input
              type="password"
              class="text"
              placeholder="*******"
              v-model="password"
            />
          </div>

          <div>
            <button class="btn-login" @click.prevent="login">login</button>
          </div>
          <div class="container" style="margin-top: 30px">
            <a @click.prevent="movePageRegister" style="color: white"
              >I don't have account ?</a
            >
          </div>
          <br />
          <img
            class="sm-btn"
            src="../assets/google-plus-logo-on-black-background.svg"
            alt=""
            @click.prevent="googleLogin"
          />
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: [],
    };
  },
  methods: {
    // googleLogin(googleUsers) {
    //   let id_token = googleUsers.getAuthResponse().id_token;
    //   axios({
    //     method: "POST",
    //     url: "${URL}api/googleLogin",
    //     data: {
    //       id_token,
    //     },
    //   })
    //     .then(({ data }) => {
    //       localStorage.access_token = data.access_token;
    //       localStorage.setItem("access_token", data.access_token); //set token di client
    //       this.$emit("emitLogin");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    login() {
      axios({
        method: "POST",
        url: "http://localhost:4000/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token;
          this.$emit("emitLogin");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    movePageRegister() {
      console.log("ini di login page");
      this.$emit("emitMovePageRegister");
    },
  },
};
</script>

<style>
</style>