const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Log = new Schema ({
    log_temp: {
        type: Number,
        required: true 
    },
    log_weight: {
        type: Number,
        required: true
    },
    log_sleep: {
        type: Number,
        required: true
    },
    log_spotting: {
        type: Number,
        required: true
    },
    log_hungover: {
        type: Boolean,
        required: true
    },
    log_bc: {
        type: Boolean,
        required: true
    },
    log_symptoms: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Log', Log);