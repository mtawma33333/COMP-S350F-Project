// connect database
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://ylliustudy:ylliustudy@cluster0.tp9t6ke.mongodb.net/ACA_Record?retryWrites=true&w=majority";

mongoose.connect(mongoDB).then(() => console.log('DB connection successful'))

module.exports = mongoose;
