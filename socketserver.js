/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require("http");
var server = http.createServer(function(req, res){
    console.log("hello");
});
var io = require("socket.io")(server);
server.listen(3000);
