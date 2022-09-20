const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    body: {
        type: String,
        required: true
    },
    commenter: {
        type: Object,
        required: true
    }

    }, {
        timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
  