const jwt = require('jsonwebtoken')

function getToken(payload) {
    return token = jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 60 })
}

function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    getToken,
    verifyToken
}