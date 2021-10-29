const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const Entry = new Schema({
    username : {
        type: String,
        required: true
    },
    file : {
        type: String,
        required: true
    },
    created : {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('Entry', Entry)