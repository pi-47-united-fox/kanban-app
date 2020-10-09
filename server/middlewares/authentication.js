const { User } = require('../models')
const Jwt      = require('../helpers/jwt')

module.exports = (req, res, next) => {
    // console.log ('sudah masuk authen')
    const { access_token } = req.headers
    const encoded = Jwt.check(access_token)
    User.findOne({
        where: { email: encoded.email }
    }).then((result) => {
        if (result) {
            console.log('success authen')
            req.userData = encoded
            // console.log (encoded)
            next()
        }
        else {
            next({
                name: 'not found'
            })
        }
    }).catch((err) => {
        next(err)
    })
}