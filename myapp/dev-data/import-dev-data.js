const fs = require('fs')
const mongoose = require('mongoose')

const mongoDB = "mongodb+srv://ylliustudy:ylliustudy@cluster0.tp9t6ke.mongodb.net/ACA_Record?retryWrites=true&w=majority";

mongoose
    .connect(mongoDB)
    .then(() => console.log('DB connection successful'))

const Course = require('./../models/course')
const User = require('./../models/user')
const Record = require('./../models/aca_record') 

//  READ JSON FILE
const course = JSON.parse(fs.readFileSync(`${__dirname}/course.json`, 'utf-8'))
const teacher = JSON.parse(fs.readFileSync(`${__dirname}/teacher-v2.json`, 'utf-8'))
const student = JSON.parse(fs.readFileSync(`${__dirname}/student-v3.json`, 'utf-8'))
const admin = JSON.parse(fs.readFileSync(`${__dirname}/admin.json`, 'utf-8'))
const record = JSON.parse(fs.readFileSync(`${__dirname}/record.json`, 'utf-8'))
// const record = JSON.parse(fs.readFileSync(`${__dirname}/record.json`, 'utf-8'))

// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Course.create(course)
        await User.create(student)
        await User.create(teacher)
        await User.create(admin)
        await Record.create(record)
        console.log('Data successfully loaded!')
    } catch (err) {
        console.log(err)
    }
    process.exit();
}

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
    try {
        await Course.deleteMany()
        await User.deleteMany()
        console.log('Data successfully deleted!')
    } catch (err) {
        console.log(err)
    }   
    process.exit();

}

if(process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}