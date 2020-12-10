var mongoose = require('mongoose');

var schema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  role: String,
  attempt:Boolean
});

var Model = mongoose.model('user', schema);



modules.exports.Model = Model;



