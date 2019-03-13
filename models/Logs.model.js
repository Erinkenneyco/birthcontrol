const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Logs = new Schema ({
    logs_temp: {
        type: Number 
    },
    logs_weight: {
        type: Number
    },
    logs_sleep: {
        type: Number
    },
    logs_spotting: {
        type: Number
    },
    logs_hungover: {
        type: Boolean
    },
    logs_bc: {
        type: Boolean
    },
    logs_symptoms: {
        type: String
    }
});

module.exports = mongoose.model('Logs', Logs);