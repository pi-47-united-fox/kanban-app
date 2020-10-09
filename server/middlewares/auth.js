const { User } = require('../models')
const jwt = require('jsonwebtoken')

const Authentication = (req, res, next) => {
    console.log(req.headers.access_token);
    const decoded = jwt.verify(req.headers.access_token, process.env.SECRET)
    User.findOne({
            where: {
                email: decoded.email
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            } else {
                req.userData = decoded
                next()
            }
        })
        .catch(err => {
            return res.status(500).json({ message: err.message })
        })
}

module.exports = Authentication