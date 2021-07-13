const {Schema, model} = require("mongoose")

const menuSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Double
    },
    type: {
        type: String
    },
    URLimage: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = model("menu",menuSchema)