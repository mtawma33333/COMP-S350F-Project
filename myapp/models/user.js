//"Keep the fat models, thin controllers"
//"philosophyy in mind there"

const mongoose = require('mongoose');
const moment = require("moment");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  uid: {
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
    toJSON: { virtuals: false },
    toObject: { virtuals: false }
});

userSchema.virtual("birth_formatted").get(function () {
  return moment(this.birth).format("MMMM Do, YYYY");
});
// Middleware
userSchema.pre('save', async function(next) {
  if(this.isModified('password')) return next();
// encrypt the password when we receive the data and the moment of save
  this.password = await bcrypt.hash(this.password, 12)

  this.passwordConfirm = undefined;
  next()
})

const UserModel =  mongoose.model('user', userSchema, 'user');

module.exports = UserModel;