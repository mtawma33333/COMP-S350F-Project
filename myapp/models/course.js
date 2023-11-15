const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  credits: { type: Number, required: true, min: 1, max: 12 }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
// Virtual populate

const CourseModel = mongoose.model('course', courseSchema, 'course');

module.exports = CourseModel;