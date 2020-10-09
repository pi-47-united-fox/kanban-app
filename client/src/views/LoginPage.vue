<template>
  <div>
    <div class="center-content border-radius-task">
      <div v-if="message">
        <ul class="bg-red-600 text-white">
          <div v-html="message"></div>
        </ul>
      </div>

      <div class="w-full max-w-s">
        <form
          class="loginBox shadow-md rounded px-8 pt-6 pb-8 mb-4"
          v-on:submit.prevent="login"
        >
          <div class="text-2xl mb-8 font-bold text-gray-700">Login</div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email-login"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              v-model="email"
              type="email"
              placeholder="example@mail.com"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div class="pt-4 mb-5 mt-5">
            <a
              href="#"
              @click.prevent="changePage('registerPage')"
              class="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"
              >Register or Login using Google Here</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import google from './google.vue'
import swal from "sweetalert";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  props: ["baseUrl"],
  methods: {
    login() {
      axios({
        method: "POST",
        url: this.baseUrl + "/login",
        data: {
          email: this.email,
          password: this.password,
          message: "",
        },
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          this.changePage("dashboard");
        })
        .catch((err) => {
          swal("Anjay", "Wrong password or email!", "error");
        });
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style scoped>
.loginBox {
  background-color: wheat;
  box-shadow: -1px 3px 15px 0px rgba(0, 0, 0, 1);
  border-radius: 25px;
  width: 500px;
  align-items: center;
  align-self: center;
  text-align: center;
}
</style>