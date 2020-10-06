const { Task } = require('../models')

module.exports = (req, res, next) => {
    const userDataId = req.userData.id
    Task.findByPk(req.params.id).then((result) => {
        if (!result) {
            res.status(404).json({
                message : 'Task Not Found'
            })
        } else if (userDataId !== result.UserId) {
            res.status(403).json({
                message : 'You dont have access'
            })
        } else {
            // console.log ('sukses authzation')
            next()
        }
    }).catch((err) => {
        return res.status(500).json({message : err.message})
    })
}