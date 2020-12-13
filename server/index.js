var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
var auth = require("./routers/auth.js");
var user = require("./routers/user.js");

const mongoose = require("mongoose");
var passport = require("passport");
var passporLocal = require("passport-local");

const cookieParser = require("cookie-parser");

const session = require("express-session");

var app = express();

// DB Config
const db = "mongodb://localhost/test2";
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//--------------------
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());

// Express body parser
app.use(express.urlencoded({ extended: true }));
// Express session
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  })
);
app.use(
  cors({
    origin: "http://localhost:8000", // <-- location of the react app were connecting to
    credentials: true
  })
);

app.use(cookieParser("secretcode"));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./routers/passportConfig")(passport);
// Routes
app.use("/api/auth", auth);

app.use("/api/user", user);
app.listen(8000, function () {
  console.log("listening on port 8000");
});
