"use strict";

const bcrypt = require("bcrypt");

const hashPassword = (password) => {
	const saltRound = +process.env.SALT_ROUND;
	const salt = bcrypt.genSaltSync(saltRound);
	return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
	return bcrypt.compareSync(password, hash);
};

module.exports = {
	hashPassword,
	comparePassword,
};
