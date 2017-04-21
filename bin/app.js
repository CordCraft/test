/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var express = require('express');
var app = express.Router({mergeParams:true});

var apis = [
    "/app",
    "/authentication",
    "/error",
    "/interest",
    "/log",
    "/notification",
    "/order",
    "/profile",
    "/search"
];

for(var i = 0; i < apis.length; i++){
    var api = apis[i];
    console.log(api+"\n");
    
    var apiApp = require("./api")(api);
    app.use("/:userId"+api, setUserId, apiApp);
}

app.use("/:userId", function(req, res){
   res.send(req.params.userId); 
});


function setUserId(req, res, next){
    req.conditions = req.params;
    req.fields = req.query;
    req.object = req.body;
    return next();
}


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








