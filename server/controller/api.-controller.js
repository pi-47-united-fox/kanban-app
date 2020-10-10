const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('878279928291-3dua9vledg1lkihleq172sghqqo3cdn4.apps.googleusercontent.com');


class ApiController {
    static googelSigin(req, res, next) {
        let token = req.body.id_token
        // console.log(token);  
        let randomedPass = Math.round(Math.random() * 100000) + 1000000
        // console.log(randomedPass);
        client.verifyIdToken({ idToken: token })
            .then(payload => {
                console.log(payload.payload);
                return User.findOrCreate({
                    defaults: {
                        fullname: payload.payload.fullname,
                        username: payload.payload.given_name,
                        email: payload.payload.email,
                        password: randomedPass + ""
                    },
                    where: {
                        email: payload.payload.email
                    }
                })
            })
            .then(user => {
                let userData = { id: user[0].id, fullname: user[0].fullname, email: user[0].email }
                // console.log(userData);
                let token = signToken(userData)
                res.status(200).json({ "access_token": token })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ApiController