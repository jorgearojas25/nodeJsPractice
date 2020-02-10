const Model = require('./model');

const AddUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
}

module.exports = {
    add: AddUser,
}