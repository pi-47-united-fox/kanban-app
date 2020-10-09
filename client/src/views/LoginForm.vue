<template>
  <div class="container2 containerVue">
    <h1>Login</h1>

    <form @submit.prevent="loginapp">
      <div class="Formlogin">
        <label for="products_name">email</label>
        <input
          type="email"
          name="products_name"
          v-model="email"
          class="inputlogin"
        />
      </div>

      <div class="Formlogin">
        <label for="quantity"> Password :</label>
        <input type="password" v-model="password" class="inputlogin" />
      </div>
      <div class="Formlogin">
        <input type="submit" value="login" class="loginSubmit submitVue" />
      </div>
    </form>
    <!-- <button> -->
    <div>
      <g-signin-button :params="googleSignInParams" @success="onSignInSuccess">
        Sign in with Google
      </g-signin-button>
    </div>
    <!-- </button> -->
    <p v-text="errorMessage"><strong></strong></p>
  </div>
</template>

<script>
import axios from "../config/axios";
import GSignInButton from "vue-google-signin-button";

export default {
  name: "Formlogin",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      googleSignInParams: {
        client_id:
          "379987411201-un86kpg4lnojsmu350g89mf3ji4hdubf.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    loginapp() {
      axios({
        method: "POST",
        url: "/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.errorMessage = "";
          this.$emit("emitAfterLogin", "home");
        })
        .catch((err) => {
          let msg = err.response.data.errors;
          msg.forEach((el) => {
            this.errorMessage = el;
          });
        })
        .then(() => {
          this.email = "";
          this.password = "";
        });
    },
    onSignInSuccess(googleUser) {
      var google_access_token = googleUser.getAuthResponse().id_token;
      axios({
        method: "POST",
        url: "/googlelogin",
        headers: {
          google_access_token,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$emit("emitAfterLogin", "home");
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: gray;
  color: #fff;
  box-shadow: 0 3px 0 gray;
  margin-left: 70px;
}
p {
  text-align: center;
  color: red;
  font-family: "Courier New", Courier, monospace;
}
.submitVue {
  margin-top: 23px;
  outline: none;
}
.google {
  margin: auto;
}
.containerVue {
  height: 25em;
}
</style>>
