/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');



var server = http.createServer(function(req, res){
    res.end("<h1>SERVER STARTED</h1>");
});
server.listen(5050, function(){
    console.log("sever started");
});

x();
y(); 
z();

function x(){
    var xPipe = io.of('http://localhost:5000/xNameSpace');
    xPipe.on("message", console.log);
}

function y(){
    var yPipe = io.of('http://localhost:5000/yNameSpace');
    yPipe.on("message", console.log);
}


function z(){
    var zPipe = io.of('http://localhost:5000/zNameSpace');
    zPipe.on("message", console.log);
}

