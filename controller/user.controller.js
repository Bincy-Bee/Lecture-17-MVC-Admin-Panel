const e = require("express");
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

    // try {
    //     let data = await user.findOne({email: req.body.email});
    //     if(!data){
    //         return res.send("User not exist in database");
    //     }
    //     if(data.password != req.body.password){
    //         return res.send("Password is wrong")
    //     }
    //     return res.cookie("id", data.id).send("logged In");
        
    // } catch (error) {
    //     return res.send(error.message)
    // }
    res.send("Logged In Sucessfully")
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

const profile = (req,res)=>{
    console.log(req.user)
    if (req.user){
        res.send(req.user)
    }
    else{
        res.redirect("/login")
    }
}

const logout = (req,res)=>{
    req.logout(user);
    res.send("logged Out")
}

module.exports = {home, signup, login, index, getUser, loginPage, profile, logout}