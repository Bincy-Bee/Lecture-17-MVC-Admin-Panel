const e = require("express");
const { user } = require("../model/user.model");
const { category } = require("../model/category.model");
const { subcat } = require("../model/subcat.model");
const { product } = require("../model/product.model");

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
            return res.cookie("id", data.id).send(data);
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
        res.render("profile", {user : req.user})
    }
    else{
        res.redirect("/login")
    }
}

const logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err)
        }
        res.send("logged Out")
    });
}

const reset = async (req,res)=>{
    let {oldpassword, newpassword} = req.body;

    if (req.user.password == oldpassword){
        let data = await user.findByIdAndUpdate(req.user.id, {password : newpassword});
        let updatedata = await user.findById(req.user.id);
        res.send(updatedata)
    }
    else{
        res.redirect("Wrong Password")
    }
}

//Populate Routes

const cat = async(req,res)=>{
    try {
        let data = await category.create(req.body);
        res.send(data)
        
    } catch (error) {
        return res.send(error.message)
    }
}
const subcatcr = async(req,res)=>{
    try {
        let data = await subcat.create(req.body)
        res.send(data)
        
    } catch (error) {
        return res.send(error.message)
    }
}
const getsubcat = async(req,res)=>{
    try {
        let data = await subcat.find().populate("categoryID");
        res.send(data)
    } catch (error) {
        return res.send(error.message)
    }

}
const createpro = async(req,res)=>{
    try {
        console.log(req.cookies);
        req.body.userID = req.cookies.id
        let cata = await product.create(req.body)
        res.send(cata)        
    } catch (error) {
        return res.send(error.message)
    }
}
const getpro = async(req,res)=>{
    try {
        let data = await product.find().populate("userID")
        res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}


module.exports = {home, signup, login, index, getUser, loginPage, profile, logout, reset, subcatcr, cat, getsubcat, createpro,getpro}