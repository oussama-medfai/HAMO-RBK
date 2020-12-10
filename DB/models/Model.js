var mongoose = require('mongoose');

var schema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  title: String,
  score: Number,
  type:String
});

var Model = mongoose.model('Story', schema);



modules.exports.Model = Model;


