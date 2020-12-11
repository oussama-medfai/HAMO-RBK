var express = require("express");
var user = require("../../DB/controler/userControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  user.findone("amin", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
