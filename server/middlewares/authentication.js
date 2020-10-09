const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

const authentication = (req,res,next) => {
    const decoded = verifyToken(req.headers.access_token)
    User.findOne({
        where: {
            email: decoded.email
        }
    })
    .then(user => {
        if(!user) {
            res.status(404).json({message: 'Not Found'})
        } else {
            req.userData = user
            next()
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}

module.exports = authentication