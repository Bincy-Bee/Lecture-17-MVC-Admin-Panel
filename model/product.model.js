const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    title : String,
    price: Number,
    userID : {type : mongoose.Schema.Types.ObjectId, ref : "user"}
})

const product = mongoose.model("product", productSchema);

module.exports = {product}