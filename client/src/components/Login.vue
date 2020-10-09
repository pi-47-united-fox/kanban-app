<template>
  <!--signin-->
  <div>
    <div class="container-login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
      <p>
        dont have any account?..<a @click.prevent="registerForm">Register</a>
        <div class="g-signin2" data-onsuccess="onSignIn" @click="onSignIn"></div>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      id_token: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          console.log(`login`);
          localStorage.setItem(`access_token`, data.access_token);
          localStorage.setItem(`account_name`, data.email);
          this.$emit("emitChangePage", "Home");
        })
        .catch((err) => {
          console.log(err);
          this.errors = `Cant login to App, Invalid Email or Password`;
        })
        .then(() => {
          this.email = "";
          this.password = "";
          this.errors = "";
        });
    },
    onSignIn(googleUser) {
      this.id_token = googleUser.getAuthResponse().id_token;
      console.log(google_access_token);
      axios({
        method: "POST",
        url: "http://localhost:3000/googleSign",
        data: { token: id_token },
        success: function (response) {
          localStorage.setItem("access_token", response.access_token);
          console.log(localStorage.getItem("access_token"));
        },
      })
        .then((data) => {
          localStorage.setItem("access_token", data.access_token);
          this.$emit("emitChangePage");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    registerForm() {
      this.$emit("emitChangePage", "registerPage");
    },
  },
};
</script>

<style scoped>
/* Login */
.container-login {
  margin: 0 auto;
  margin-top: 200px;
  padding: 50px;
  width: 22%;
  height: 500px;
  background-color: rgb(1, 0, 44);
  color: white;
  border-radius: 10px;
}
.container-login p {
  display: flex;
  margin-top: 10px;
  text-decoration: none;
}
.account {
  display: flex;
  align-items: baseline;
  margin-right: 10px;
}
</style>