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
                    <a class="navbar-item">
                        Home
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                            <a @click="logout" class="button is-dark">
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
    data() {
        return {

        }
    },
    methods: {
        logout() {
            localStorage.removeItem('access_token')
        }
    }
}
</script>

<style>

</style>