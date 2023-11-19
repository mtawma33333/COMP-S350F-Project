//"Keep the fat models, thin controllers"
//"philosophyy in mind there"

// 
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
    default: null
  },
  phone: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
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
  passwordChangedAt: Date,  // ResetToken should expires after amount of time as security measure
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
  return moment(this.birth).format("YYYY-MM-DD");
});
// Middleware

// Only ever save sensitive data in an encrypted form
userSchema.pre('save', async function(next) {
  // Only run if password really modified
  if(!this.isModified('password')) return next();
// encrypt the password when we receive the data and the moment of save
  this.password = await bcrypt.hash(this.password, 12)
// delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next()
})

userSchema.pre(/^find/, function(next) {
  this.find({ active: true })
  next()
})

// password validation
userSchema.methods.correctPassword = async function(
  candidatePassword, // the password user input 
  userPassword // the password save in db
) {
  // compare the password and send result
  return await bcrypt.compare(candidatePassword,userPassword);
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};


userSchema.pre('save', function(next) {
  // Only run if really modified
  if(!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000
  next()
})

const UserModel =  mongoose.model('user', userSchema, 'user');

module.exports = UserModel;