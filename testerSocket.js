/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Pigeon = require('pigeon');
var io = require("socket.io");





var audio = io.of("/audio");
/*audio.on("connection", function(socket){
    audio.broadcast.to("")
});*/