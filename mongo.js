const mongoose = require('mongoose');
const { dblink } = require('./config.json');

module.exports = async() => {
    await mongoose.connect(dblink, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    return mongoose
}