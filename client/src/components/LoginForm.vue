<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center" style="font-size: 40px">
            Sign In
          </h5>
          <form class="form-signin" @submit.prevent="loginHandler">
            <div class="form-label-group">
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                v-model="email"
              />
              <label for="inputEmail">Email address</label>
            </div>

            <div class="form-label-group">
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <label for="inputPassword">Password</label>
            </div>

            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1"
                >Remember password</label
              >
            </div>
            <button
              class="btn btn-lg btn-primary btn-block text-uppercase"
              type="submit"
            >
              Sign in
            </button>
            <hr class="my-4" />
            <p>Dont have Account ?</p>
            <button
              class="btn btn-lg btn-success btn-block text-uppercase"
              type="submit"
              @click.prevent="registerPage"
            >
              Register
            </button>
          </form>
          <form class="form-signin">
            <hr class="my-4" />
            <p>Or</p>
            <GoogleLogin
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            ></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GoogleLogin from "vue-google-login";
export default {
  name: "LoginForm",
  props:{
    onFailure:Function,

  },
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "321191066324-10iavk72tkhqsovavovuuucnt823u6np.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  methods: {
    loginHandler() {
      axios
        .post("https://kanban-app-projects.herokuapp.com/login", {
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          this.$emit("changePage", "home");
          localStorage.setItem("access_token", data.access_token);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.email = "";
          this.password = "";
        });
    },
    registerPage() {
      this.$emit("changePage", "register");
    },
    onSuccess(googleUser) {
      var google_access_token = googleUser.getAuthResponse().id_token;
      console.log(google_access_token);
      axios
        .post("https://kanban-app-projects.herokuapp.com/googleLogin", {
            google_access_token,
        })
        .then(({data}) => {
          //console.log(data)
          localStorage.setItem("access_token", data.access_token);
          this.$emit("changePage", "home");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>