/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var populateApp = require('express')();


var audio = require('./populate/audio');
var device = require('./populate/device');
var network = require('./populate/network');
var proximity = require('./populate/proximity');
var user = require('./populate/user');



populateApp.use('/audio', audio);
populateApp.use('/device', device);
populateApp.use('/proximity',proximity);
populateApp.use('/network', network);
populateApp.use('/user',user);






function GET(path, callback){
    http.get({
        hostname:"localhost",
        port:3000,
        path:"/populate/"+path
    }, callback);
}



var http = require('http');
populateApp.get('/', function(req, res){
    var paths = [
        "user",
        "device", 
        "network", 
        "proximity", 
        "audio"
    ];
    paths.forEach(function(path){
        GET(path, function(res){
            console.log("RESSSSSSSPOOOOOONNNNNESSSSSEEEE:"+res);
        });
    });
    res.json(200).status("done");
});


module.exports = populateApp;