const fs = require('fs')
const mongoose = require('mongoose')

const mongoDB = "mongodb+srv://ylliustudy:ylliustudy@cluster0.tp9t6ke.mongodb.net/ACA_Record?retryWrites=true&w=majority";

mongoose
    .connect(mongoDB)
    .then(() => console.log('DB connection successful'))

const Record = require('./../models/aca_record') 

//  READ JSON FILE
const record = JSON.parse(fs.readFileSync(`${__dirname}/record-v2.json`, 'utf-8'))
// const record = JSON.parse(fs.readFileSync(`${__dirname}/record.json`, 'utf-8'))

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Record.create(record)
        console.log('Record Data successfully loaded!')
    } catch (err) {
        console.log(err)
    }
    process.exit();
}

importData()