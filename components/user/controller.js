const store = require('./store');

const AddUser = (name) => {

    if(!name){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name
    };

    return store.add(user);
}

module.exports = {
    AddUser,
}