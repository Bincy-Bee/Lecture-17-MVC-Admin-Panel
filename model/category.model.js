const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category : String,
})

const category = mongoose.model("category", categorySchema)

module.exports = {category}