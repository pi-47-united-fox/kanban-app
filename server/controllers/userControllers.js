const { User, Task } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class UserControllers {
  static login(req, res) {
    let inputLogin = {
      email: req.body.email,
      password: req.body.password,
      organization: req.body.organization,
    };
    User.findOne({
      where: {
        email: inputLogin.email,
      },
    }).then((user) => {
      if (!user) {
        res.status(401).json({
          name: `Unauthorized`,
          msg: `email or password wrong!`,
        });
      } else if (!comparePassword(inputLogin.password, user.password)) {
        res.status(401).json({
          name: `Unauthorized 2`,
          msg: `email or password wrong!`,
        });
      } else {
        const email = user.email.split("@").slice(0, 1);
        const access_token = getToken({
          id: user.id,
          email: user.email,
          organization: user.organization,
        });
        res.status(200).json({ access_token, email });
      }
    });
  }
  static register(req, res) {
    let inputRegister = {
      email: req.body.email,
      password: req.body.password,
      organization: req.body.organization,
    };
    User.create(inputRegister)
      .then((user) => {
        return res.status(201).json(user);
      })
      .catch((err) => {
        return res.status(500).json({ msg: err.message });
      });
  }

  static googleSignIn(req, res, next) {
    console.log("hitt gsign");
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let email = "";
    client
      .verifyIdToken({
        idToken: req.headers.google_access_token,
        audience: process.env.CLIENT_ID,
      })
      .then((ticket) => {
        let payload = ticket.getPayload();
        email = payload["email"];
        return User.findOne({ where: { email } });
      })
      .then((user) => {
        if (!user) {
          var newUser = {
            email: email,
            password: "randompassword",
            organization: "hacktiv8",
          };
          return User.create(newUser);
        } else {
          return user;
        }
      })
      .then((user) => {
        const access_token = getToken({ id: user.id, email: user.email });
        return res.status(200).json({ access_token });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  }
}

module.exports = UserControllers;
