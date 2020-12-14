var { Modelproduct } = require("../models/productModel");

var findproduct = function (callbacks) {
  Modelproduct.find({}).populate("brand").populate("categorie").exec(callbacks);
};
var creatproduct = function (obj, callbacks) {
  const product = new Modelproduct({
    id: obj.id,
    name: obj.name,
    categorie: obj.categorie,
    brand: obj.brand,
    price: obj.price,
    quantity: obj.quantity,
    image: obj.image,
    description: obj.description
  });
  product.save(callbacks);
};
var update = function (obj, callback) {
  Modelproduct.findOneAndUpdate(
    { _id: obj._id },
    obj,
    { upsert: true },
    callback
  );
};
var deleteproduct = function (id, callback) {
  Modelproduct.findByIdAndRemove({ _id: id }).exec(callback);
};
module.exports.findproduct = findproduct;
module.exports.creatproduct = creatproduct;
module.exports.update = update;
module.exports.deleteproduct = deleteproduct;
