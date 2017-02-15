var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type:String, required: true, unoque: true},
    age: {type:Number, required: true},
    boats: [{type: Schema.Types.ObjectId, ref: Boat}]
}) 

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Crew', schema);