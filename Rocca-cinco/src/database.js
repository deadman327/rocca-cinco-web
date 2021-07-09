const mongoose = require("mongoose")

const { Rocca_cinco_MONGODB_HOST, Rocca_cinco_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${Rocca_cinco_MONGODB_HOST}/${Rocca_cinco_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) .then(db => console.log("Database is connected"))
    .catch(err => console.log(err))