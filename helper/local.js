const { user} = require("../model/user.model")

const localStrategy = require("passport-local").Strategy

const loaclAuth=(passport)=>{

    passport.use(new localStrategy(async(username, password, done)=>{
        try {
            let User = await user.findOne({username : username});

            if(!User){
                return done(null,false)
            }
            if(User.password !== password){
                return done(null,false)
            }
            return done(null, User)
        } 
        catch (error) {
            return done(error,false)
        }
    })
    );

    passport.serializeUser((user,done)=>{
        return done(null, user.id)
    });

    passport.deserializeUser(async(id,done)=>{
        try {
            let User = await user.findById(id);
            return done(null, User)
        } catch (error) {
            return done(error,false)
        }
    })
}

module.exports={loaclAuth}