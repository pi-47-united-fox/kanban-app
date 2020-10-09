const { Task } = require('../models')

const authorization = (req,res,next) => {
    Task.findByPk(req.params.id)
    .then(task => {
        if(!task) {
            res.status(404).json({message: 'Not Found'})
        } else if (req.userData.id !== task.userId) {
            res.status(401).json({message: 'You are not Authorized'})
        } else {
            next()
        }
    })
}

module.exports = authorization