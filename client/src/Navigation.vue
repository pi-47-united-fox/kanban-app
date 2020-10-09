<template>
  <div class="navigation-container">
    <a class="home-navbar ml-5" @click.prevent="home" v-show="isPage === 'home'">Home</a>
    <h1 id="nav-content-1" class="ml-4">
    <span style="color:#cc3300">K</span>
    <span style="color:purple">a</span>
    <span style="color:chocolate">n</span>
    <span style="color:pink">b</span>
    <span style="color:#ffcc99">a</span>
    <span style="color:yellow">n</span>
    </h1>
    <div class="user-auth mr-4">
        <a href="#" class="auth-content" @click.prevent="loginForm" v-show="isPage !== 'home'">Login</a>
        <a href="#" class="auth-content" @click.prevent="registerForm" v-show="isPage !== 'home'">Register</a>
        <a href="#" class="auth-content" @click.prevent="logout" v-show="isPage === 'home'">Logout</a>

    </div>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    props:['isPage'],
    methods:{
        signOutGoogle() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
        },
        loginForm(){
            this.$emit('changePage', 'login')
        },
         registerForm(){
            this.$emit('changePage', 'register')

        },
         home(){
            this.$emit('changePage', 'home')
        },
         logout(){
             localStorage.clear()
            this.signOutGoogle()
            this.$emit('changePage', 'login')
        },
    },
    data(){
            return{
            }
        }
}
</script>

<style>
    .navigation-container{
        background: black;
        color: white;
        display: flex;
        justify-content: space-between;
        height: 100px;
        padding-top: 23px;
    }

    .home-navbar{
        font-size: 22px;
        margin: 10px;

    }

    .user-auth{
        display: flex;
    }

    .auth-content{
        margin: 10px;
        font-size: 22px;
        text-decoration: none;
        color: white;
    }

    .auth-content:hover{
        margin: 10px;
        font-size: 22px;
        text-decoration: none;
        color: chocolate;
    }
</style>