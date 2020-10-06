$(document).ready(function () {
    if (localStorage.access_token) {
        afterLogin()
    } else {
        firstPage()
    }
});

function beforeLogin() {
    $(".afterLogin").hide()
    $(".beforeLogin").show()
    $(".firstPage").hide()
    $(".registerForm").hide()
}

//show home-base
function afterLogin() {

}

function register() {

}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("id_token", id_token);
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/googleSign',
        data: { token: id_token },
        success: function (response) {
            localStorage.setItem('access_token', response.access_token);
            // console.log(localStorage.getItem('access_token'));
        }
    })
}

function signOut() {
    console.log("ini token", localStorage.getItem('access_token'));
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    localStorage.removeItem('access_token');
    console.log("ini token", localStorage.getItem('access_token'));
}