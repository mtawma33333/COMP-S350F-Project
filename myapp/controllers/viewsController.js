const User = require('./../models/user')
const Course = require('./../models/course')
const Record = require('./../models/aca_record')
const catchAsync = require('./../utils/catchAsync');
const APIFeatures = require('./../utils/APIFeatures')

exports.getRecord = catchAsync(async (req, res, next) => {
    // 1) Get tour data from collection
  const features = new APIFeatures(Record.find(), req.query)
    .filter()
    .sort()
    .paginate();

  const record = await features.query;
  const course = await Course.find()
  const user = await User.find({ role: 'student' })

    // 2) Build template
    // 3) Render that template using tour data from 1)
    res.status(200).render('record', {
      title: 'All Rcord',
      record,
      course,
      user,
      query: req.query // Pass the query object to the template
    });
  });

exports.getCourse = catchAsync(async (req, res, next) => {
    // 1) Get tour data from collection
  const features = new APIFeatures(Course.find(), req.query)
    .filter()
    .sort()
    .paginate();
    
  const course = await features.query;
  
    // 2) Build template
    // 3) Render that template using tour data from 1)
    res.status(200).render('course', {
      title: 'All Course',
      course,
      query: req.query // Pass the query object to the template
    });
  });

exports.getUser = catchAsync(async (req, res, next) => {
    // 1) Get tour data from collection
    const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .paginate();

    const user = await features.query;

  
    // 2) Build template
    // 3) Render that template using tour data from 1)
    res.status(200).render('user', {
      title: 'All user',
      user,
      query: req.query // Pass the query object to the template
    });
  });

exports.getAccount = catchAsync(async (req, res, next) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
})

exports.getLoginForm = catchAsync(async (req, res, next) => {
    res.status(200).render('login', {
        title: 'Login'
    })
})

exports.getMyRecord = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collection
  const record = await Record.find({ user: req.user.id });

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('myRecord', {
    title: 'My Record',
    record
  });
});

exports.getEditUser = catchAsync(async (req, res, next) => {
    const user = await User.find({ _id: req.params.id })
    res.status(200).render('updateUser', {
      title: 'Edit User',
      user: user[0]
    });
})

exports.getEditCourse = catchAsync(async (req, res, next) => {
  const course = await Course.find({ _id: req.params.id })
  res.status(200).render('updateCourse', {
    title: 'Edit Course',
    course: course[0]
  });
})

exports.getEditRecord = catchAsync(async (req, res, next) => {
  const record = await Record.find({ _id: req.params.id })
  res.status(200).render('updateRecord', {
    title: 'Edit Record',
    record: record[0]
  });
})

exports.getSignUp = catchAsync(async (req, res, next) => {
  res.status(200).render('createUser', {
    title: 'User sign up'
  });
})

exports.getCreateCourse = catchAsync(async (req, res, next) => {
  res.status(200).render('createCourse', {
    title: 'Create Course'
  });
})

exports.getCreateRecord = catchAsync(async (req, res, next) => {
  const user = await User.find({ role: 'student' });
  const course = await Course.find();

  res.status(200).render('createRecord', {
    title: 'Create Record',
    user,
    course
  });
})