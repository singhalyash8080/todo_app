const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    created_timestamp: Date,
    due_timestamp: Date,
    completed: String,
    geometry:{
        type:{
            type:String,
            default:"Point"
        },
        coordinates:{
            type:[Number],
            index:"2dshpere"
        }
    }
});

module.exports = mongoose.model('Item',productSchema);