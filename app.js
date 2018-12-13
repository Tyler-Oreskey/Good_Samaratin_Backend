var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var emergencies_stepsRouter = require('./routes/emergencies_steps');
var emergenciesRouter = require('./routes/emergencies');
var quizzesRouter = require('./routes/quizzes');
var stepsRouter = require('./routes/steps');
var users_quizzesRouter = require('./routes/users_quizzes');
var usersRouter = require('./routes/users');
var quotesRouter = require('./routes/quotes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next()
})

//application routes
app.use('/', indexRouter);
app.use('/emergencies_steps', emergencies_stepsRouter);
app.use('/emergencies', emergenciesRouter);
app.use('/quizzes', quizzesRouter);
app.use('/steps', stepsRouter);
app.use('/users_quizzes', users_quizzesRouter);
app.use('/users', usersRouter);
app.use('/quotes', quotesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
