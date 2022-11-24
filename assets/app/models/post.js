const mongoose = require('mongoose');
const {Schema} = mongoose;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    content: {type: String, required: true, unique:true},
    user: {type: String, required:true},
    likes: {type: Number, required:true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Post', schema);