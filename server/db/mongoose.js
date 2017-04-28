const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/TargetCWSite'

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

module.exports = {
    mongoose
}