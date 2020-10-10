<template>
  <div>
    <Navbar v-if="isLogin" @emitLogout="logout"></Navbar>
    <Home v-if="isLogin"></Home>
    <LoginPage
      v-if="!isLogin && !isRegister"
      @emitLogin="login"
      @emitMovePageRegister="mrp"
    >
    </LoginPage>
    <RegisterPage
      v-if="!isLogin && isRegister"
      @emitRegister="register"
      @emitMovePageLogin="mlp"
    >
    </RegisterPage>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
export default {
  name: "Kanban",
  components: {
    Navbar,
    Home,
    LoginPage,
    RegisterPage,
  },
  data() {
    return {
      isLogin: false,
      isRegister: false,
    };
  },
  methods: {
    mlp(){
      console.log('ini mlp');
      this.isLogin = false;
      this.isRegister = false;
    },
    logout() {
      this.isLogin = false;
    },
    login() {
      this.isLogin = true;
    },
    register() {
      this.isLogin = false;
      this.isRegister = false;
    },
    mrp() {
      console.log("ini di App MTR page");
      this.isRegister = true;
      this.isLogin = false;
    },
  },
  created() {
    console.log("jalanin created");
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
}

#v-select{
  border-color: #6039ac;
  
}


.category{
  display: flex;
  justify-content: space-around;
}
.logo {
  height: 50px;
  padding: 10px;
}
.navbar {
  display: flex;
  flex-direction: row;
  position: -webkit-sticky;
}
.board {
  display: flex;
  flex-direction: column;
}
.header {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  height: 10%;
}
.he-l {
  width: 90%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}
.title-1 {
  font-size: 20px;
  font-weight: 600;
  color: #898989;
  margin-top: 15px;
  margin-bottom: 15px;
}
.title-1 {
  font-size: 20px;
  font-weight: 600;
  color: #898989;
}
.task-title {
  background-color: #7453b8;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.he-r {
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  cursor: pointer;
}
.icon-btn {
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
}
.logout-btn {
  border-radius: 10px;
  border-color: #6039ac;
  background-color: #f9f9f9;
  transition: all 0.5s;
}
.logout-btn:hover {
  background-color: #917fb4;
  color: white;
}
.add-btn {
  background-color: #6039ac;
  color: white;
  border-width: 0;
  margin: auto;
  padding: 5px;
  width: 150px;
  border-radius: 5px;
  margin: 20px;
  transition: all 0.5s;
  cursor: pointer;
}
.sm-btn {
  cursor: pointer;
  height: 30px;
}
.add-btn:hover {
  background-color: #917fb4;
}
.grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.grid-task {
  /* background: rgb(175, 175, 175); */
  width: 22%;
  height: 100vh;
}
.card {
  font-size: large;
  margin-top: 10px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 15px;
  /* box-shadow: 5px 7px 36px -4px rgba(184, 184, 184, 1); */
}
.info {
  font-size: small;
  color: #898989;
}
.icon {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  margin-top: 20px;
}
.login {
  margin-top: 80px;
  background-color: #7453b8;
  display: flex;
  width: 350px;
  height: 500px;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 10px 14px 36px -4px rgba(184, 184, 184, 1);
}
.text {
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  border-width: 1px;
}
.label {
  color: white;
  font-size: large;
}
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.btn-login {
  margin-top: 45px;
  background-color: white;
  width: 50%;
  height: 40px;
  border-radius: 10px;
  border-width: 0;
  cursor: pointer;
}
.login-box {
  margin-top: 40px;
}
.scroll {
  overflow: scroll;
  height: 500px;
}
.scroll::-webkit-scrollbar {
  display: none;
}
</style>