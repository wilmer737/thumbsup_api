const mongoose = require('mongoose');

const Submission = mongoose.model('Submission', {
    about: {
        type: String
    },
    comment: {
        type: String,
    }
});

module.exports = {Submission};