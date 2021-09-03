const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const keySchema = mongoose.Schema({
    _id: reqString,
    userTag: reqString,
    guildID: reqString,
    personnalKey: reqString
})

module.exports = mongoose.model('keys', keySchema);