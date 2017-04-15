/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Network = require('../model/network');
var Profile = require('../model/profile');
var faker = require('faker');
var app = require('express')();


function genNet(profile, profiles){
    var x = genRand(0, profiles.length);
    var profile2 = profiles[x];
    if(profile._id !== profile2._id){
        var confirmed = faker.random.boolean();
        var network = new Network({
            bond:[profile._id,profile2._id ],
            confirmed:confirmed,
            shared: (confirmed?faker.random.boolean():false),
            meet:faker.random.boolean()
        });
        network.save(function(err, network){
            if(err){
                if((err.name === "MongoError") && err.code === 11000){
                    return genNet(profile, profiles);
                }
                else console.log(err);
            }
            console.log(network);
        });
    }
    return null;
}

function genNetwork(req, res){
    Profile.find({}, function(err, profiles){
        if(err) throw err;
        profiles.forEach(function(profile){
            var size = genRand(2,8);
            for(var i = 0; i < size; i++){
                genNet(profile, profiles);
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





app.get('/', genNetwork);



module.exports = app;

