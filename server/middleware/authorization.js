const { User } = require('../models')

const authorization = (req, res, next) => {
    const { id } = req.params
    const userId = req.userData.id
    console.log(userId, id);
    User.findByPk(userId)
        .then(data => {
            console.log(data);
            if (data && data.id === userId) {
                next()
            } else {
                console.log('ini polisi');
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

