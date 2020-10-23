const jwt = require("jsonwebtoken")

function signToken(payload) {
    return jwt.sign(payload, 'Perfect')

}

function decodeToken(access_token) {
    return jwt.verify(access_token, 'Perfect')

}


module.exports = {
    signToken,
    decodeToken
}