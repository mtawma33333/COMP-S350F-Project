const mongoose = require('mongoose');
const academicRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: [true, 'Academic record must belong to a student!']
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: [true, 'Academic record must belong to a course!']
  },
  mark: {
    type: Number,
    default: null
  },
  status: {
    type: String,
    enum: ['completed', 'in progress', 'dropped'],
    required: [true, 'Academic record must have a status!']
  },
  year: {
    type: Number,
    required: [true, 'Academic record must have a year!']
  },
  comments: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
});

const RecordModel = mongoose.model('record', academicRecordSchema, 'record');

module.exports = RecordModel;