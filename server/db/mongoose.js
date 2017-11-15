var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//connecting mongoose to mongodb
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = mongoose;