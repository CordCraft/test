/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Audio = require('../model/audio');
var Profile = require('../model/profile');
var faker = require('faker');

var app = require('express')();



function generateAudio(userId){
    Audio.fake(10, function(audios){
       audios.forEach(function(audio){
           audio.userId = userId;
           new Audio(audio).save(console.log);
       }); 
    });
}

app.get('/', function(req, res){
    Profile.find({}, function(err, users){
        if (err) throw err;
        if(users.length !== 0){
            for(var k = 0; k < users.length; k++){
                for(var i = 0; i < 10; i++){
                    console.log(generateAudio(users[k]._id));
                }
            };
        }
            
    });
    res.status(200).send("done");
});


module.exports = app;