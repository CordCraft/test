/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Proximity = require('../model/proximity');
var User = require('../model/user');
var Profile = require('../model/profile');
var app = require('express')();


function genProx(user, users){
    var x = genRand(0, users.length);
    var user2 = users[x];
    if(user._id !== user2._id){
        var proximity = new Proximity({
            bond:[user._id,user2._id ],
            confirmed:true
        });
        proximity.save(function(err, proximity){
            if(err){
                if((err.name === "MongoError") && err.code === 11000){
                    return genNet(user, users);
                }
                else console.log(err);
            }
            console.log(proximity);
        });
    }
    return null;
}

function genProximity(req, res){
    Profile.find({}, function(err, users){
        if(err) throw err;
        users.forEach(function(user){
            var size = genRand(2,8);
            for(var i = 0; i < size; i++){
                genProx(user, users);
            }
        });
    });
    res.status(200).send("done");
}


function genRand(x,y){
    var rand = Math.random();
    var mod = y - x;
    rand = mod*rand;
    return Math.floor(rand)+x;
}





app.get('/', genProximity);



module.exports = app;
