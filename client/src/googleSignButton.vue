<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
 
<script>
import axios from 'axios'
export default {
  data () {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object} 
       */
      googleSignInParams: {
        client_id: '1043694429170-s0354tlhdglrqtn7832n5ukqu4du7dm8.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
    //   const profile = googleUser.getBasicProfile() // etc etc
    console.log('masukgooglelogin')
    var id_token = googleUser.getAuthResponse().id_token;
      axios({
        method:'POST',
        url:'http://localhost:3000/googlelogin',
        headers:{
          google_access_token:id_token
        }
      })
      .then(result=>{
        console.log(result)
        localStorage.setItem('access_token',result.data.access_token)
        this.$emit('googlesuccess','googlesuccess')
        console.log('sukses login')
      })
      .catch(err=>{
        console.log(err)
      })
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script> 
 
<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style> 