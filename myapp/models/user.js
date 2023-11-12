const mongoose = require('mongoose');
const moment = require("moment");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  id: {
    type: String,
    required: [true, 'Please provide your ID'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email']
  },
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'other'
  },
  birth: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

userSchema.virtual("birth_formatted").get(function () {
  return moment(this.birth).format("MMMM Do, YYYY");
});

const UserModel =  mongoose.model('user', userSchema, 'user');

module.exports = UserModel;