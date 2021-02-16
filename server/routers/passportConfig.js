var { Model } = require("../../DB/models/userModel");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      Model.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    Model.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        role: user.role
      };
      cb(err, userInformation);
    });
  });
};
