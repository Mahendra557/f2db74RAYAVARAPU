const mongoose = require("mongoose")
const novelSchema = mongoose.Schema({
authorName: String,
novelType: String,
pages: Number
})
module.exports = mongoose.model("Novel",novelSchema)