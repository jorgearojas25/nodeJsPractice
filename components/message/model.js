const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    id: Number,
    user: String,
    date: Date,
    message: {
        type: String,
        required: true,
    }
});

const model = mongoose.model('Messages', mySchema);
module.exports = model;


