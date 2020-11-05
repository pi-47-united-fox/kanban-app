<template>
  <!--Register-->
  <div>
    <div class="container-register">
      <h1>Register</h1>
      <form @submit.prevent="register">
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
        <div class="form-group">
          <label for="organization">Organizaion</label>
          <input
            v-model="organization"
            type="text"
            class="form-control"
            id="organization"
          />
        </div>
        <br />
        <button class="btn btn-primary">Register</button>
        <button @click="showLoginPage" class="btn btn-danger">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      organization: "",
    };
  },
  methods: {
    register() {
      axios
        .post("https://kanban-hacktiv8.herokuapp.com/register", {
          email: this.email,
          password: this.password,
          organization: this.organization,
        })
        .then(({ data }) => {
          console.log(`success register`);
          this.$emit("showLoginPage", "loginPage");
        })
        .catch((err) => {
          console.log(`error register`);
          console.log(err);
        })
        .then(() => {
          this.email = "";
          this.password = "";
          this.errors = "";
        });
    },
    showLoginPage() {
      this.$emit("showLoginPage", "loginPage");
    },
  },
};
</script>

<style >
/* Register */
.container-register {
  margin: 0 auto;
  margin-top: 200px;
  padding: 50px;
  width: 22%;
  height: 500px;
  background-color: rgb(1, 0, 44);
  color: white;
  border-radius: 10px;
}
</style>