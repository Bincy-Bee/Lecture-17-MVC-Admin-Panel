const {Router}= require('express');
const { home, signup, login, index, getUser, loginPage, profile, logout, reset, } = require('../controller/user.controller');
const { findCokkies, isAuth } = require('../middleware/auth');
const passport = require('passport');
const router = Router();


router.get("/",home);

router.post("/signup", signup);

router.post("/login",passport.authenticate("local",{successRedirect : "/index", failureRedirect:"/login"}), login);

router.get("/index", index);

router.get("/user",findCokkies, getUser);

router.get("/login", loginPage);

router.get("/profile",isAuth, profile)

router.get("/logout",logout)

router.post("/reset", reset)


module.exports={router};