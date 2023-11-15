const Course = require('./../models/course');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');


// Baseic CRUD
exports.createCourse = factory.createOne(Course);
  
exports.getCourse = factory.getOne(Course);
exports.getAllCourse = factory.getAll(Course);


// Do NOT update passwords with this!
exports.updateCourse = factory.updateOne(Course);

exports.deleteCourse = factory.deleteOne(Course);