import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"

new Vue({
  render: h => h(App),
}).$mount('#app');


function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  console.log(google_access_token);
  axios({
    method: 'POST',
    url: 'http://localhost:3000/googleSign',
    data: { token: id_token },
    success: function (response) {
      localStorage.setItem('access_token', response.access_token);
      console.log(localStorage.getItem('access_token'));
    }
  })
    .done(data => {
      localStorage.setItem('access_token', data.access_token)
      afterLogin()
    })
    .fail(err => {
      console.log(err)
    })
}

// function onSignIn(googleUser) {
//   var google_access_token = googleUser.getAuthResponse().id_token;
//   console.log(google_access_token)
//   $.axios({
//     method: 'POST',
//     url: 'http://localhost:3000/googleSign',
//     headers: {
//       google_access_token
//     }
//   })
//     .done(result => {
//       localStorage.setItem('access_token', result.access_token)
//     })
//     .fail(err => {
//       console.log(err)
//     })
// }

function signOut() {
  console.log("ini token", localStorage.getItem('access_token'));
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  localStorage.removeItem('access_token');
  console.log("ini token", localStorage.getItem('access_token'));
}