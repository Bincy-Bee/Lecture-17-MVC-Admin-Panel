const { user } = require("../model/user.model");

const home = (req,res)=>{
    res.send("Welcome to controller");
}

const signup = async(req,res)=>{

    try {

        let data = await user.findOne({email: req.body.email})
        if (data){
            return res.send("User already exist")
        }
        else{
            data = await user.create(req.body);
            return res.send(data);
        }
        
    } catch (error) {
        return res.send(error.message);
    }
}

const login = async(req,res)=>{

    try {
        let data = await user.findOne({email: req.body.email});
        if(!data){
            return res.send("User not exist in database");
        }
        if(data.password != req.body.password){
            return res.send("Password is wrong")
        }
        return res.send("logged In")
        
    } catch (error) {
        return res.send(error.message)
    }
}

const index = (req, res)=>{
    res.render("index", {name : "Bhavin"})
}

const index1 = (req,res)=>{
    res.render("index1");
}
const index2 = (req,res)=>{
    res.render("index2");
}

module.exports = {home, signup, login, index, index1, index2}