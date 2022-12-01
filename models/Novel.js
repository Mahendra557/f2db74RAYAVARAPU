const mongoose = require("mongoose")
const novelSchema = mongoose.Schema({
    authorName: {
        type: String,
        min: 1,max: 150

    },

    novelType: {

        type: String,

        min: 1,max: 150

    },

    pages: {

        type: Number,

        min: 1,max: 1000

    }
})
module.exports = mongoose.model("Novel", novelSchema)