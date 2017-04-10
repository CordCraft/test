/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var express = require('express');
var app = express();

var apis = [
    "/audio",
    "/basic",
    "/call", 
    "/chat",
    "/developer",
    "/device",
    "/education",
    "/employment",
    "/error",
    "/faceRecognition",
    "/flowAnalysis",
    "/geoSuccess",
    "/image",
    "/interest",
    "/linearSuccess",
    "/log",
    "/network",
    "/notification",
    "/order",
    "/profile",
    "/proximity",
    "/proximityStream",
    "/quote",
    "/search",
    "/skill",
    "/user",
    "/video"
];

apis.forEach(function(api){
    console.log(api+"\n");
    var apiApp = require("./api")(api);
    app.use(api, apiApp);
});


app.all('/', function(req, res){
    res.json({
        status:"success",
        apis: apis
    });
});


app.get('/list', function(req, res){
    res.status(200).json({
        action:"list",
        status:"success",
        data:apis
    });
});


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
    res.json({
        action:"unknown",
        status:"failed",
        reason: err.message,
        error: err
    });
  });
}



module.exports = app;








