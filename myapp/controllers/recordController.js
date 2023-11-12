const Record = require('./../models/aca_record');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.createRecord = factory.createOne(Record);
  
exports.getRecord = factory.getOne(Record);
exports.getAllRecord = factory.getAll(Record);


// Do NOT update passwords with this!
exports.updateRecord = factory.updateOne(Record);

exports.deleteRecord = factory.deleteOne(Record);