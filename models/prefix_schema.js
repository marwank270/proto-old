const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const prefixSchema = mongoose.Schema({
    _id: reqString,
    customPrefix: reqString
});

module.exports = mongoose.model('custom_prefixes', prefixSchema);