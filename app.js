const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

/**
 * conexión a la base de datos mongo con host local.
 *
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
const mongodb = 'mongodb://localhost/tallernodejs';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

/**
 * configuracion de vistas del motor de plantillas
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * todas las rutas funcionales para el juego de dados
 */
app.use('/', require('./routes/index'));
app.use('/createGame', require('./routes/createGame'));
app.use('/startGame', require('./routes/startGame'));
app.use('/game', require('./routes/game'));
app.use('/winner', require('./routes/winner'));

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
