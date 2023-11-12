const mongoose = require('mongoose');
var moment = require("moment");

const academicRecordSchema = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId,
    auto: true 
  },
  course_id: { 
    type: String, 
    required: [true, 'AcademicRecord must have a course_id'], 
    ref: 'course' 
  },
  grade: { 
    type: String, 
    required: [true, 'AcademicRecord must have a grade'] 
  },
  gradeValue: {
    type: Number, 
    required: [true, 'AcademicRecord must have a gradeValue'] 
  },
  semester: { 
    type: String, 
    required: [true, 'AcademicRecord must have a semester'], 
    enum: {
      values: ['Fall', 'Spring', 'Summer'],
      message: 'semester is either: Fall, Spring, Summer'
    } 
  },
  year: { 
    type: Number, 
    required: [true, 'AcademicRecord must have a year'], 
    min: 1900, 
    max: 2100 }
});

const studentSchema = new mongoose.Schema({
  sid: { 
    type: String, 
    required: [true, 'Student must have a student ID'],
    unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'Student must have a password'], 
    minlength: [8, 'A student password must have more or equal than 8 characters']
  },
  name: {
    type: String, 
    required: [true, 'Student must have a name'],
    trim: true,
    maxlength: [50, 'A student name must have less or equal than 50 characters'] 
  },
  grade: { 
    type: Number, 
    required: [true, 'Student must have a grade'], 
    min: 1, 
    max: 12 
  },
  email: { 
    type: String, 
    required: [true, 'Student must have a email'], 
    unique: true, 
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
  },
  phone: { 
    type: String, 
    required: [true, 'Student must have a phone number'], 
    match: /^\d{8}$^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ 
  },
  address: { 
    type: String, 
    required: [true, 'Student must have a address'] 
  },
  birth: { 
    type: Date, 
    required: true 
  },
  gender: { 
    type: String, 
    required: true, 
    enum: {
      values: ['Male', 'Female'],
      message: 'Gender is either Male or Female'
    }
  },
  academic_records: [academicRecordSchema],
  state: { 
    type: String, 
    enum: {
      values: ['studying', 'dropped out', 'graduated'],
      message: 'state is either studying, dropped out, graduated'
    }, 
    default: 'studying' 
  },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
// document middleware: run before .save() and .create()
studentSchema.virtual("birth_formatted").get(function () {
  return moment(this.birth).format("MMMM Do, YYYY");
});

const StudentModel = mongoose.model('student', studentSchema, 'student');



module.exports = StudentModel;
