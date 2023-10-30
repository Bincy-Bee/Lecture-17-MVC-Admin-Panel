const express = require('express');
const { connection } = require('./config/connection');
const cookie = require('cookie-parser');
const { router } = require('./routes/user.routes');
const session = require('express-session');
const passport = require('passport');
const { loaclAuth } = require('./helper/local');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use(session({secret : "pravate key"}));
loaclAuth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(cookie());
app.use(router);
// app.use("/user",router);


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Swerver is listenig on Port http://localhost:${PORT}`);
    connection();
})