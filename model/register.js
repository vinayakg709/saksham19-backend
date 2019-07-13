const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    studentno:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Register', registerSchema);