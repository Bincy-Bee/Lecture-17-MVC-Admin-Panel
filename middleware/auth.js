const { user } = require("../model/user.model");

const findCokkies = async(req,res,next)=>{
    let {id} = req.cookies;
    if(id){
        let data = await user.findById(id);
        if (data.username == "node"){
            next()
        }
        else{
            res.send("Only admin can access this page")
        }
    }
    else{
        res.redirect("/login");
    }
}

module.exports = {findCokkies}