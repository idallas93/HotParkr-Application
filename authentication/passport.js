const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      const user = await db.User.findOne({ email, password });
      try {
        if (!user) {
          return cb(null, false, {
            message: "Incorrect email or password",
          });
        }
        return cb(null, user, { message: "You logged in successfully!" });
      } catch (err) {
        cb(error);
      }
    }
  )
);
