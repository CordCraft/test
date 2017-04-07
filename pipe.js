/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');



var server = http.createServer(function(req, res){
    res.end("<h1>SERVER STARTED</h1>")
});
var io = require('socket.io')(server);
server.listen(5000, function(){
    console.log("sever started");
});
w();
x();
y(); 
z();
var id1 = null;
var id2 = null;
function w(){
    io.on("connection", function(socket){
        console.log("connected");
        socket.join("groupB");
        io.in("groupB").clients(function(err, clients){
            console.log(clients); 
        });
        io.to("groupB").emit("message", "tester");
    });
    
}


function x(){
    var xPipe = io.of('/xNameSpace/');
    xPipe.on('connection', function(socket){
        console.log("connection")
        socket.emit('message', socket.id);
    });
}

function y(){
    var yPipe = io.of('/yNameSpace');
    yPipe.on('connection', function(socket){
        socket.emit("server_connected", socket.id);
        socket.join("groupA");
        console.log(socket.id);
        socket.on("message", function(data){
            console.log(data)
            socket.in("groupA").emit("message1", "hey");
        });
    });
}


function z(){
    var zPipe = io.of('/zNameSpace');
    zPipe.on('connection', function(socket){
        socket.emit('message', socket.id);
    });
}