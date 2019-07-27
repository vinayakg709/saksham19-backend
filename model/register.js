const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    studentno:{
        type: String,
        required: true
    },
    contactno:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    hosteler:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    sports: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Register', registerSchema);