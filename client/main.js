const app = new Vue({
    el: '#app',
    data: {
        page: "beforeLogin"
    },
    methods: {
        login(){
            this.page = "afterLogin" 
        },
        logout(){
            this.page = "beforeLogin"
        }
    }
})