const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    body: {
        type: String,
        required: true
    },
    commenterId: {
        type: String,
        required: true
    }

    }, {
        timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
  