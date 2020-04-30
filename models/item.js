const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    created_timestamp: Date,
    due_timestamp: Date,
    completed: String
});

module.exports = mongoose.model('Item',productSchema);