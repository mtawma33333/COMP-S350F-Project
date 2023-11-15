const mongoose = require('mongoose');

const academicRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: [true, 'Academic record must belong to a student!']
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'course',
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
academicRecordSchema.pre('save', function(next) {
  // Only run if really modified
  if(!this.isModified()) return next();
  this.modifiedAt = Date.now() - 1000
  next()
})

academicRecordSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: '_id uid name'
  });
  this.populate({
    path: 'course',
    select: '_id course_id name'
  });

  next();
});

academicRecordSchema.statics.calcAvgMarks = async function() {
  const result = await this.aggregate([
    {
      $group: {
        _id: {
          course: '$course',
          year: '$year'
        },
        avgMark: { $avg: '$mark' }
      }
    },
    {
      $lookup: {
        from: 'courses',
        localField: '_id.course',
        foreignField: '_id',
        as: 'course'
      }
    },
    {
      $unwind: '$course'
    },
    {
      $project: {
        _id: 0,
        course: '$course.name',
        year: '$_id.year',
        averageMark: 1
      }
    }
  ]);

  return result;
};

const RecordModel = mongoose.model('record', academicRecordSchema, 'record');

module.exports = RecordModel;