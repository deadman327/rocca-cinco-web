const {Schema, model} = require("mongoose")

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    rimestamps: true
})

module.exports = model("product", productSchema)