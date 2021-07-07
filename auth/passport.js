const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function (passport) {
    passport.use('local', new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password',
    }, async function (userName, password, done) {
        try {
            const user = await User.findOne({userName});
            if (!user) {
                return done(null, false, {message: 'That user not found'});
            }
            if(password !==  user.password) {
                return done(null, false, {message: 'Password incorrect!'});
            }
            return done(null, user);
        } catch (e) {
            return done(e);
        }
    }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
