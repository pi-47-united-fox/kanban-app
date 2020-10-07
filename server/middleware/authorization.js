const { Task } = require('../models')

const authorization = (req, res, next) => {
    console.log(req.userData);
    const { id } = req.params
    const userData = req.userData.id
    Task.findByPk(id)
        .then(data => {
            if (data && data.userId === userData) {
                next()
            } else {
                return res.status(400).json({
                    message: 'Data not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })

}

module.exports = authorization

