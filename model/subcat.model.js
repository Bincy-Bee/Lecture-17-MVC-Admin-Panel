const mongoose = require('mongoose');

const subcatSchema = new mongoose.Schema({
    subcategory : String,
    categoryID : {type : mongoose.Schema.Types.ObjectId, ref : "category"}
})

const subcat = mongoose.model("subcat", subcatSchema);

module.exports = {subcat}