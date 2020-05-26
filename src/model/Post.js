const mongoose = require('mongoose');
const post = mongoose.model('post', {
    _id: String,
    url: String,
    key: String,
    likes: {
        count: Number,
        employee: [{
            id: String,
            firstName: String,
            lastName: String
        }]
    },
    comments: [{
        id: String,
        commentStatement: String,
        commentBy: {
            id: String,
            firstName: String,
            lastName: String
        }
    }],
    caption: String,
    createdDate: String,
    createdBy: {
        id: String,
        firstName: String,
        lastName: String
    }
});

module.exports = post;