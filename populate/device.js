/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Device = require('../model/device');
var User = require('../model/profile');
var faker = require('faker');
var app = require('express')();


function genDevice(req, res){
    User.find({}, function(err, users){
        if(err) throw err;
        users.forEach(function(user){
            var device = new Device({
                userId:user._id,
                macAddress:faker.internet.mac()
            });
            device.save(function(err, device){
               if(err)throw err;
               console.log(device);
            });
        });
    });
    res.status(200).send("done");
}




app.get('/', genDevice);




module.exports = app;