const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        required: true
    },
    recipient: {
        type: Object,
        required: true
    },
    seen:{
        type:Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);
