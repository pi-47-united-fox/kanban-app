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
      </p>
      <!-- gsign in -->
      <g-signin-button
        :params="googleSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError"
      >
        Sign in with Google
      </g-signin-button>
    </div>
  </div>
</template>

<script>
import GSignInButton from "vue-google-signin-button";

import axios from "axios";
export default {
  name: "login",
  components: {
    GSignInButton,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      id_token: "",
      googleSignInParams: {
        client_id:
          "473073932556-kf6cbck6k8v5do2nqu2974i1uemoutno.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("https://kanban-hacktiv8.herokuapp.com/login", {
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
    registerForm() {
      this.$emit("emitChangePage", "registerPage");
    },

    onSignInSuccess(googleUser) {
      // const profile = googleUser.getBasicProfile(); // etc etc
      var google_access_token = googleUser.getAuthResponse().id_token;
      console.log(google_access_token);
      axios({
        method: "POST",
        url: "https://kanban-hacktiv8.herokuapp.com/googleSign",
        headers: {
          google_access_token,
        },
      })
        .then((result) => {
          console.log(result, "INI RESULT");
          localStorage.setItem("access_token", result.data.access_token);
          this.$emit("emitChangePage", "Home");
        })
        .catch((err) => {
          console.log(err, "ERR G-SIGN");
        });
    },
    onSignInError(error) {
      console.log("OH NOES", error);
    },
  },
};
</script>

<style scoped>
/* gsignin */

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  cursor: pointer;
}

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
