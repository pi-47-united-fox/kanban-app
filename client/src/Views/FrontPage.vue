<template>
  <div class="body">
    <div
      :class="{ containerForm: true, right_panel_active: switchPanel }"
      id="containerForm"
    >
      <div class="form-container sign-in-container">
        <!-- Sign In form code goes here -->
        <form @submit.prevent="signMeIn">
          <h1>Sign in</h1>
          <br /><br />
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="form-container sign-up-container">
        <!-- Sign Up form code goes here -->
        <form @submit.prevent="registerMe">
          <h1>Create Account</h1>
          <br><br>
          <!-- <input type="text" placeholder="Name" /> -->
          <input type="email" placeholder="Email" v-model="email"/>
          <input type="password" placeholder="Password" v-model="password"/>
          <button>Sign Up</button>
        </form>
      </div>
      <div class="overlay-container">
        <!-- The overlay code goes here -->
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signIn" @click.prevent="showSignIn">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>To use our app please login with your personal account</p>
            <button class="ghost" id="signUp" @click.prevent="showSignUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FrontPage",
  props: [
  ],
  data() {
    return {
      switchPanel: "",
      email: "",
      password: "",
      errMessage: "",
    };
  },
  methods: {
    showSignUp() {
      this.switchPanel = true;
    },
    showSignIn() {
      this.switchPanel = false;
    },
    signMeIn() {
      // console.log ('masuk')
      axios
        .post('http://localhost:3000' + "/login", {
          email: this.email,
          password: this.password
        }).then(({data}) => {
          console.log(data);
          this.$emit('emitWhichPage', 'HomePage')
          localStorage.setItem('access_token', data.access_token)
        })
        .catch((err) => {
          console.error(err);
        });
    },
    registerMe() {
      axios
        .post('http://localhost:3000' + "/register", {
          email: this.email,
          password: this.password
        }).then((res) => {
          this.showSignIn()
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.body {
  color: white;
  font-family: "Montserat", sans-serif;
  /* background: #f6f5f7; */
  background-image: url("../assets/img/bg.jpg");
  /* backdrop-filter: blur(4px); */
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
}

h1 {
  font-weight: bold;
  margin: 0;
  text-shadow: 0px 0px 26px rgba(150, 150, 150, 0.62);
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.header {
  z-index: 10;
  /* position: relative;
    background-color: #E94057;
    flex: content; */
}

.containerForm {
  /* background-color: rgba(0,0,0, 0.4); */
  backdrop-filter: blur(10px);
  border: 0.01em solid rgba(0, 0, 0, 0.08);
  border-radius: 30px;

  -webkit-box-shadow: 0px 0px 164px -43px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 0px 164px -43px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 164px -43px rgba(0, 0, 0, 0.32);

  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  z-index: 2;
  right: 10%;
}

.form-container form {
  /* backdrop-filter: blur(8px); */
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  border-radius: 0.5rem;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
}

button {
  border-radius: 20px;
  background-color: #3a5678;
  border: 0.01em solid rgba(0, 0, 0, 0.08);

  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border: 0.01em solid rgba(255, 255, 255, 0.301);
}

/* buat pisahin jadi kanan kiri ketutup */
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.65s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  transition: transform 0.6s ease-in-out;
}

.overlay {
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.overlay-left {
  transform: translateX(-20%);
}

/* Animation */

/* Move signin to the right */
.containerForm.right_panel_active .sign-in-container {
  opacity: 0;
  transform: translateX(100%);
}

/* Move overlay to left */
.containerForm.right_panel_active .overlay-container {
  transform: translateX(-100%);
}

.containerForm.right_panel_active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to the right */
.containerForm.right_panel_active .overlay {
  transform: translateX(50%);
}

.containerForm.right_panel_active .overlay-left {
  transform: translateX(0);
}

.containerForm.right_panel_active .overlay-right {
  transform: translateX(20%);
}
</style>
