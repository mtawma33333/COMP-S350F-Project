const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const viewsRouter = require('./routes/views');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/course');
const recordRouter = require('./routes/record');

const app = express();
app.enable('trust proxy');
// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// "Everything is middleware" (even routersi)


// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

app.options('*', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Development logging
app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Test middleware
app.use((req, res, next) => {
  req.requsetTime = new Date().toISOString()
  // console.log(req.headers)
  next()
})
// router
app.use('/', viewsRouter);
app.use('/api/user', usersRouter);
app.use('/api/course', courseRouter);
app.use('/api/record', recordRouter);

// catch 404 and forward to error handler
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

// error handler
app.use(globalErrorHandler);

module.exports = app;
