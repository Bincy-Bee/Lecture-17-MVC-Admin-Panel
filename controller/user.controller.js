const { user } = require("../model/user.model");

const home = (req,res)=>{
    console.log(req.cookies);
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
        return res.cookie("id", data.id).send("logged In");
        
    } catch (error) {
        return res.send(error.message)
    }
}

const index = (req, res)=>{
    res.cookie("name", "hey bhavin").render("index", {name : "Bhavin"})
}


const getUser = async (req,res)=>{
    let data =await user.find();
    res.send(data);
}

const loginPage = (req,res)=>{
    res.render("login")
}

module.exports = {home, signup, login, index, getUser, loginPage}