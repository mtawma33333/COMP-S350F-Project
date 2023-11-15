const Record = require('./../models/aca_record');
const factory = require('./handlerFactory');



exports.createRecord = factory.createOne(Record);

exports.getRecord = factory.getOne(Record);
exports.getAllRecord = factory.getAll(Record);

exports.updateRecord = factory.updateOne(Record);

exports.deleteRecord = factory.deleteOne(Record);