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
    <p v-text="errorMessage"><strong></strong></p>
  </div>
</template>

<script>
import axios from "../config/axios";
export default {
  name: "Formlogin",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    loginapp() {
      console.log(this.password);
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
  },
};
</script>

<style scoped>
p {
  text-align: center;
  color: red;
  font-family: "Courier New", Courier, monospace;
}
.submitVue {
  margin-top: 23px;
  outline: none;
}
.containerVue {
  height: 20em;
}
</style>>
