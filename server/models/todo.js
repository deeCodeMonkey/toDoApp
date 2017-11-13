const mongoose = require('mongoose');

//create model and set defaults
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        //unix timestamp
        type: Number,
        default: null
    }
});

module.exports = { Todo };