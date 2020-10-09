import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import GSignInButton from 'vue-google-signin-button'


Vue.use(GSignInButton)
Vue.use(VueToast);

new Vue({
    render :h => h(App)
}).$mount('#app')