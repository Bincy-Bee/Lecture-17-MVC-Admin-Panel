const {Router}= require('express');
const { home, signup, login, index, getUser, loginPage } = require('../controller/user.controller');
const { findCokkies } = require('../middleware/auth');
const router = Router();


router.get("/",home);

router.post("/signup", signup);

router.post("/login", login);

router.get("/index", index);

router.get("/index1", index1);

router.get("/index2", index2);

router.get("/user",findCokkies , getUser);

router.get("/login", loginPage)

module.exports={router};