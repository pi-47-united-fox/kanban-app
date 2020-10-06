const { User, Task } = require('../models/index');
const { verify } = require('../helper/jwt')

const authentication = (req, res, next) => {
    const decode = verify(req.headers.access_token)
    User.findOne({ where: { email: decode.email } })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    message: 'not found user'
                })
            } else {
                req.userData = decode
                next()
            }
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}

const authorization = (req, res, next) => {
    Task.findByPk(req.params.id)
        .then(data => {
            if (!data) {
                return res.status(400).json({
                    message: "you're not authorized"
                })
            } else if (data.UserId !== req.userData.id) {
                return res.status(400).json({
                    message: "you're not authorized"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}

module.exports = {
    authentication, authorization
};
