const { User }         = require("../models");
const BcriptJs         = require("../helpers/bcrypt");
const Jwt              = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class UserControler {
    static registerUserC(req, res, next) {
        User.create({
            email: req.body.email,
            password: req.body.password,
        })
            .then((result) => {
                return res.status(201).json({
                    message: "Success Created",
                });
            })
            .catch((err) => {
                return next(err);
            });
    }

    static loginUserC(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then((result) => {
                if (BcriptJs.check(req.body.password, result.password)) {
                    let access_token = Jwt.generate(result.id, result.email);
                    res.status(200).json({
                        access_token,
                        username: result.user_name,
                        organization: result.organization,
                    });
                } else {
                    return next({
                        name: "invalid email pw input",
                    });
                }
            })
            .catch((err) => {
                return next({
                    name: "invalid email pw input",
                });
            });
    }

    static async googleLoginC(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.headers.google_access_token,
                audience: process.env.CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const userid = payload["sub"];
            // If request specified a G Suite domain:
            // const domain = payload['hd'];
            const email = payload.email;

            // Apakah user tersebut pernah login dengan google atau tidak
            // Kalo pernah langsung generate token
            // kalau belum maka create user dan kembalikan access token
            User.findOne({
                where: {
                    email,
                },
            })
                .then((user) => {
                    if (!user) {
                        console.log("masuk : berarti user belum ada di DB");
                        return User.create({
                            email: email,
                            password:
                                "User Dont Have A Password - So This is randomly generated",
                        });
                    } else {
                        return user;
                    }
                })
                .then((user) => {
                    const access_token = Jwt.generate(user.id, user.email);
                    console.log("masuk : Berarti user udah ada di DB ");
                    return res.status(201).json({
                        access_token,
                        username: user.user_name,
                        organization: user.organization,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserControler;
