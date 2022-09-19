const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        required: true
    },
    events: {
        type: Array,
        required: false
    }
    }, {
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);
  