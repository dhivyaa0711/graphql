'use strict';
const mongoose = require("mongoose");

const url =
    process.env.MONGO_URL ||
    'mongodb://127.0.0.1:27017/photoposting';
// Makes connection to MongoDB
const mongoDBConnection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, database) {
    if (err) {
        console.log('ERROR connecting to: ' + url + '. ' + err);
    } else {
        console.log('Succeeded connecting to: ' + url);
        return database;
    }
});
module.exports = mongoDBConnection;