const { User, Task } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')

class UserControllers {
    static login(req, res) {
        let inputLogin = {
            email: req.body.email,
            password: req.body.password,
            organization: req.body.organization
        }
        User.findOne({
            where: {
                email: inputLogin.email
            }
        })
            .then(user => {
                if (!user) {
                    res.status(401).json({
                        name: `Unauthorized`,
                        msg: `email or password wrong!`
                    })
                } else if (!comparePassword(inputLogin.password, user.password)) {
                    res.status(401).json({
                        name: `Unauthorized 2`,
                        msg: `email or password wrong!`
                    })
                }
                else {
                    const access_token = getToken({ id: user.id, email: user.email, organization: user.organization })
                    res.status(200).json({ access_token })
                }
            })
    }
    static register(req, res) {
        let inputRegister = {
            email: req.body.email,
            password: req.body.password,
            organization: req.body.organization
        }
        User.create(inputRegister)
            .then(user => {
                return res.status(201).json(user)
            })
            .catch(err => {
                return res.status(500).json({ msg: err.message })
            })
    }

    static googleSignIn(req, res, next) {
        const token = req.body.token_id;
        let user = null;
        client
            .verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID,
            })
            .then((ticket) => {
                const payload = ticket.getPayload();
                user = {
                    email: payload.email,
                    password: "defaultpassword",
                    organization: "Hacktiv8"
                };
                return User.findOne({ where: { email: user.email } });
            })
            .then((data) => {
                return !data ? User.create(user) : data;
            })
            .then((data) => {
                const access_token = getToken({ email: data.email, id: data.id });
                res.status(200).json({ email: data.email, id: data.id, access_token });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = UserControllers