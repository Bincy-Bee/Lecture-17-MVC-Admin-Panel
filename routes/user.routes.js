const {Router}= require('express');
const { home, signup, login, index, getUser, loginPage, profile, logout, } = require('../controller/user.controller');
const { findCokkies } = require('../middleware/auth');
const passport = require('passport');
const router = Router();


router.get("/",home);

router.post("/signup", signup);

router.post("/login",passport.authenticate("local"), login);

router.get("/index", index);

router.get("/user",findCokkies, getUser);

router.get("/login", loginPage);

router.get("/profile", profile)

router.get("/logout",logout)


module.exports={router};