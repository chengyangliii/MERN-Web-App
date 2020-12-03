const User = require("./models/User_2");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
        // if (!user) {
        //   return done(null, false, { message: 'Incorrect username.' });
        // }
        // if (!user.validPassword(password)) {
        //   return done(null, false, { message: 'Incorrect password.' });
        // }
        // return done(null, user);
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}