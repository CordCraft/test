var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database');
var cluster = require("cluster");





/*
 * USE THIS SETTINGS FOR DEVELOPMENT AND TESTING
 */
var database = require('./bin/database');
//USE FOR LOCAL TESTING
//database.connect(dbConfig.local);
//USE FOR LOCAL DEVELOPMENT AND TESTING
//database.connect(dbConfig.localTest);
//USE FOR CLOUD DEVELOPMENT AND TESTING
database.connect(dbConfig.cloud);




/*
 * @type Socket.io On connection, make socket listen to pigeon 
 * actions for events. And on disconnection, remove socket as a
 * listener.
 */





var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./bin/app');
//var auth = require('./bin/auth');
//var populate = require('./populate');

var numCPUs = require("os").cpus.length;
if(cluster.isMaster){
    for(var i = 0; i < 1; i++){
        cluster.fork();
    };
}
else{
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
    //app.use('/auth', auth);
    //app.use('/populate', populate);



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

    verifyCredentials = function(data){
        return true;
    };

    var http = require('http');
    var server = http.createServer(app);
    var io = require('socket.io')(server);
    //Add socket as a listener to the accessToken pigeon on connection.
    server.listen(process.env.PORT || 8080);
    io.on("connection", function(socket){
        socket.on("initialise", function(data){
            if(verifyCredentials){
                socket.join(data.userId);
                socket.emit("initialisation/success", JSON.stringify({
                    roomId: data.userId,
                    userId: data.userId,
                    action: "initialise",
                    status: 200
                }));
            }
            else{
                socket.emit("initialisation/error", {
                    action: "initialise",
                    status: 401,
                    reason: "invalid credentials"
                });
            }
        });

    });


    database.startSocketCommunication(io);
}
