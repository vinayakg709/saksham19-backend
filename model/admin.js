const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    admin:{
        type:String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        default: 'secret'
    }
});

module.exports =mongoose.model('Admin', adminSchema);