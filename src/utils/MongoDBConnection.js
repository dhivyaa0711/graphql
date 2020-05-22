'use strict';
const mongoose = require("mongoose");

const uristring =
    process.env.MONGO_URL ||
    'mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb';
// Makes connection to MongoDB
const mongoDBConnection = mongoose.createConnection(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connecting to: ' + uristring);
        return res;
    }
});
module.exports = mongoDBConnection;