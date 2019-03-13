const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Logs = new Schema ({
    logs_temp: {
        type: Number,
        required: true 
    },
    logs_weight: {
        type: Number,
        required: true
    },
    logs_sleep: {
        type: Number,
        required: true
    },
    logs_spotting: {
        type: Number,
        required: true
    },
    logs_hungover: {
        type: Boolean,
        required: true
    },
    logs_bc: {
        type: Boolean,
        required: true
    },
    logs_symptoms: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Logs', Logs);