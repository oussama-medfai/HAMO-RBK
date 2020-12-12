var mongoose = require("mongoose");
const custumerSchema = new mongoose.Schema({
  id: String,
  name: String,
  genre: String,
  date: String,
  phone: Number,
  email: String,
  points: Number
});
var CusModel = mongoose.model("custumer", custumerSchema);
module.exports.CusModel = CusModel;
