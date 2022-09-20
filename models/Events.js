const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    owner: {
        type: Object,
        required: true
    },
    attendees: {
        type: Object,
        required: true
    },
    eventTime: {
        type: Date,
        required: true
    }
    }, {
        timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);