const {Router}= require('express');
const { home, signup, login, index, index1, index2 } = require('../controller/user.controller');
const router = Router();


router.get("/",home);

router.post("/signup", signup);

router.post("/login",login);

router.get("/index", index);

router.get("/index1", index1);

router.get("/index2", index2);

module.exports={router};