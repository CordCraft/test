var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database');


var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

/*
 * USE THIS SETTINGS FOR DEVELOPMENT AND TESTING
 */
var database = require('./database');
//USE FOR LOCAL TESTING
//database.connect(dbConfig.local);
//USE FOR LOCAL DEVELOPMENT AND TESTING
database.connect(dbConfig.local);
//USE FOR CLOUD DEVELOPMENT AND TESTING
////database.connect(dbConfig.cloudTest);



/*
 * @type Socket.io On connection, make socket listen to pigeon 
 * actions for events. And on disconnection, remove socket as a
 * listener.
 */





var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./api');
var auth = require('./auth');
var populate = require('./populate');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// vendor middlewares
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



// application middlewares
app.use('/', routes);
app.use('/users', users);
app.use('/api', api);
app.use('/auth', auth);
app.use('/populate', populate);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});








/*
 * 
 * 
 * 
 */
/*
var database = require('./database');
database.connect(dbConfig.cloud);



var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./api');
var auth = require('./auth');
var populate = require('./populate');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



//Routing and Mounting apps
app.use('/', routes);
app.use('/users', auth.get('validateAllCredentials'), users);
app.use('/api', auth.get('validateAppCredentials'), api);
app.use('/auth', auth);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/



//Add socket as a listener to the accessToken pigeon on connection.
server.listen(process.env.PORT || 8080);

module.exports = io;
