const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');


passport.use(new LocalStrategy({
    usernameField: 'username',
    passpordField: 'password'

}, async (username, password, done) => {

    // Match username Admin
    const user = await Admin.findOne({username})
    if(!user) {
        console.log('Usuario no encontrado');
        return done(null, false);
    }else{
        // Math Password Admin
        const match = await user.matchPassword(password)
        if(match){
            return done(null, user);
        }
        else{
            console.log('Contraseña incorrecta');
            return done(null, false);
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    Admin.findbyId(id, (err, user) => {
        done(err, user);
    })
});