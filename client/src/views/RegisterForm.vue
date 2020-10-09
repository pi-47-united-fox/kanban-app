<template>
  <div class="container2">
    <h1>Register</h1>
    <form @submit="registerApp">
      <div class="Formlogin">
        <label for="products_name">name</label>
        <input v-model="registName" type="name" class="inputlogin" />
      </div>

      <div class="Formlogin">
        <label for="products_name">email</label>
        <input v-model="registEmail" type="email" class="inputlogin" />
      </div>

      <div class="Formlogin">
        <label for="quantity"> Password :</label>
        <input v-model="registPassword" type="password" class="inputlogin" />
      </div>
      <div class="Formlogin">
        <input type="submit" class="loginSubmit" />
      </div>
    </form>
    <div v-for="item in errorsMessage" :key="item.message">
      <p>{{ item.message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "../config/axios";
export default {
  name: "FormRegister",
  data() {
    return {
      registName: "",
      registEmail: "",
      registPassword: "",
      errorsMessage: [],
    };
  },
  methods: {
    registerApp() {
      axios({
        method: "POST",
        url: "/register",
        data: {
          name: this.registName,
          email: this.registEmail,
          password: this.registPassword,
        },
      })
        .then(({ data }) => {
          this.errorsMessage = "";
          this.$emit("emitAfterLogin", "home");
        })
        .catch((err) => {
          // this.errorsMessage = "";
          //   this.errorsMessage = "";
          let msg = err.response.data.errors;
          msg.forEach((el) => {
            this.errorsMessage.push({ message: el });
          });
        })
        .then(() => {
          this.registEmail = "";
          this.registPassword = "";
          this.registName = "";
        });
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  color: red;
  font-size: 20px;
}
</style>