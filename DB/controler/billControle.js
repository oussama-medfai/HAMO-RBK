var mongoose = require("mongoose");

var { Modelbill } = require("../models/billModel.js");

var findAll = function (callbacks) {
  Modelbill.find().populate("custumer").populate("product").exec(callbacks);
};
var createone = function ({ custumer, order, total }, callbacks) {
  const bill = new Modelbill({
    custumer: custumer,
    order: order,
    total: total
  });
  bill.save(callbacks);
};
// var updatebill = function (bill, callbacks) {
//   Modelbill.findByIdAndUpdate(
//     { _id: bill._id },
//     bill,
//     { upsert: true },
//     callbacks
//   );
// };

module.exports.findAll = findAll;
module.exports.createone = createone;
// module.exports.updatebill = updatebill;
