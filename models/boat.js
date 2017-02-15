var mangoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var schema = new Schema({
    name: {type:String, required: true, unique: true},
    length: {type: Number, required: true},
    crew: [{type: Schema.Types.ObjectId, required: true, ref: 'Crew'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Boat', schema);