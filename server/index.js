var express = require("express");














var bodyParser = require("body-parser");
var auth = require("./routers/auth.js");
var user = require("./routers/user.js");
var product = require("./routers/product.js");
var categorie = require("./routers/categorie.js");
var brand = require("./routers/brand.js");
var custumer = require("./routers/custumer.js");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb+srv://root:root@cluster0.raqlc.mongodb.net/MVP", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/auth", auth);

app.use("/api/user", user);

app.use("/api/product", product);

app.use("/api/categorie", categorie);

app.use("/api/brand", brand);

app.use("/api/custumer", custumer);


app.listen(8000, function () {
  console.log("listening on port 8000");
});
