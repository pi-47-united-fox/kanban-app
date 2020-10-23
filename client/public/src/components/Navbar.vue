<template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="../img/logo.png" width="133" height="40">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a @click="displayHome" v-show="displayPage === 'home'" class="navbar-item">
                        Home
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a @click="displayRegister" v-show="displayPage !== 'home'" class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a @click="displayLogin" v-show="displayPage !== 'home'" class="button is-light">
                                Log in
                            </a>
                            <a @click="logout" v-show="displayPage === 'home'" class="button is-dark">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['displayPage'],
    data() {
        return {

        }
    },
    methods: {
        logout() {
            this.$emit('changePage', 'login')
            localStorage.removeItem('access_token')
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        },

        displayLogin() {
            this.$emit('changePage2', 'login')
        },

        displayRegister() {
            this.$emit('changePage', 'register')
        },

        displayHome() {
            this.$emit('changePage', 'home')
            this.$emit('refetchTasks')
        }


    }
}
</script>

<style>

</style>