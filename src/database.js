const mongoose = require("mongoose")

//const { Rocca_cinco_MONGODB_HOST, Rocca_cinco_MONGODB_DATABASE} = process.env;
//const MONGODB_URI = `mongodb://${Rocca_cinco_MONGODB_HOST}/${Rocca_cinco_MONGODB_DATABASE}`;

const { Rocca_cinco_user, Rocca_cinco_pass, Rocca_cinco_database} = process.env;
const MONGODB_URI = `mongodb+srv://${Rocca_cinco_user}:${Rocca_cinco_pass}@cluster0.e6m3j.mongodb.net/${Rocca_cinco_database}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) .then(db => console.log("Database is connected"))
    .catch(err => console.log(err))