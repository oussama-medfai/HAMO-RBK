var express = require("express");
var {
  creatproduct,
  findproduct,
  update,
  deleteproduct
} = require("../../DB/controler/productControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  findproduct((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/").post(function (req, res) {
  console.log(req.body);
  creatproduct(req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/").put(function (req, res) {
  console.log(req.body);
  update(req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  deleteproduct(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});
module.exports = router;
