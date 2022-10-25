const passport = require("passport");
const { jwtSecret } = require("../config");
const { getUserById } = require("../users/controllers/users.controllers");

const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: jwtSecret,
  };

  passport.use(
    new JwtStrategy(options, async (decoded, done) => {
      try {
        const response = await getUserById(decoded.id);
        if (!response) {
          return done(null, false);
        }
        console.log("Decoded JWT", decoded);
        return done(null, decoded);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
