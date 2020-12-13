var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

const Model = mongoose.model("user", UserSchema);

module.exports.Model = Model;
