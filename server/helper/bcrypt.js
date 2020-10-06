const bcryptjs = require('bcryptjs');

const hashPassword = (password) => {

    let salt = bcryptjs.genSaltSync(10);
    return hash = bcryptjs.hashSync(password, salt);
}

const comparePassword = (password, hash) => {
    return result = bcryptjs.compareSync(password, hash)
}

module.exports = {
    hashPassword, comparePassword
};
