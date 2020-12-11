var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var auth = require("./routers/auth.js");
var user = require("./routers/user.js");
var custumer = require("./routers/custumer.js");

var app = express();
mongoose.connect("mongodb://localhost/MVP", { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error", err));

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/auth", auth);

app.use("/api/user", user);

app.use("/api/custumer", custumer);

app.listen(8000, function () {
  console.log("listening on port 8000");
});
