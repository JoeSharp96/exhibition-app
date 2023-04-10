var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var createAccountRouter = require('./routes/createAccount')
var loginRouter = require("./routes/login")
var exhibitionBoothsRouter = require("./routes/exhibitionBooths")

var app = express();

const PORT = 3001 || process.env.PORT;

// Mongoose
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = "mongodb+srv://joesharp1996:2Sh7F5Jf1WyG0D08@bootcamp-cluster.iojrpjx.mongodb.net/?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test'
}

mongoose.connect(uri, options)
  .then( () => {
    console.log('Connected')
  })
  .catch( (err) => {
    console.log(`Error connecting to the database. ${err}`)
  })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/create-account', createAccountRouter);
app.use('/login', loginRouter);
app.use('/exhibition-booths', exhibitionBoothsRouter);

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

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});

module.exports = app;
