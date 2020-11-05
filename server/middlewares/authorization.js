const { Task } = require("../models/index")

const authorization = (req, res, next) => {
    const targetId = req.params.id
    Task.findByPk(targetId)
        .then(data => {
            if(data.UserId !== req.userData.id) {
                res.status(401).json({
                    message: "Do not have access"
                })
            } else {
                next()
            }
        })
        .catch(err => {
            console.log(err)
        })

}

module.exports = authorization