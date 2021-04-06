const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')

// passport.use(new LocalStrategy({
//     usernameField: 'email'
// }, async(email, password, done) => {
//     const user = await User.findOne({ email: email })
//     if (!user) {
//         return done(null, false)
//     } else {
//         const match = await user.matchPassword(password);
//         if (match) {
//             return done(null, user);
//         } else {
//             return done(null, false)
//         }
//     }
// }));

const customFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const verifyCallback = (email, password, done) => {
    User.findOne({ email: email })
        .then(user => {
            if (!user) { return done(null, false) }

            const match = user.matchPassword(password)
            if (match) { 
                console.log('Verify callback', user)
                return done(null, user) 
            }
            else { done(null, false) }
        })
        .catch(err => done(err))
};

const strategy = new LocalStrategy(customFields, verifyCallback)

passport.use(strategy)

passport.serializeUser((user, done) => {
    console.log('Serializing', user.id)
    done(null, user.id)
});

passport.deserializeUser((userId, done) => {
    console.log('Deserializing', userId)
    User.findById(userId)
        .then(user => {
            console.log('Deserialized', user)
            done(null, user)
        })
        .catch(err => done(err))
});