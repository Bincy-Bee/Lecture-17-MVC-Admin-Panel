const express = require('express');
const { connection } = require('./config/connection');
const { router } = require('./routes/user.routes');
require("dotenv").config();
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"))
app.use(router);


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Swerver is listenig on Port http://localhost:${PORT}`);
    connection();
})