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
            <button class="btn-login" @click.prevent="register">
              Register
            </button>
          </div>
          <div class="container" style="margin-top: 30px">
            <a @click.prevent="mlp" style="color: white"
              >I have account !</a
            >
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios({
        method: "POST",
        url: "http://localhost:4000/register",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          this.$emit("emitRegister");
        })
        .catch(err => {
          console.log(err);
        });
    },
    mlp() {
      console.log("ini di register page");
      this.$emit("emitMovePageLogin");
    },
  },
};
</script>

<style>
</style>