/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Network = require('../model/network');
var User = require('../model/user');
var faker = require('faker');
var app = require('express')();


function genNet(user, users){
    var x = genRand(0, users.length);
    var user2 = users[x];
    if(user._id !== user2._id){
        var confirmed = faker.random.boolean();
        var network = new Network({
            bond:[user._id,user2._id ],
            confirmed:confirmed,
            shared: (confirmed?faker.random.boolean():false),
            meet:faker.random.boolean()
        });
        network.save(function(err, network){
            if(err){
                if((err.name == "MongoError") && err.code == 11000){
                    return genNet(user, users);
                }
                else console.log(err);
            }
            return console.log(network);
        });
    }
    return null;
}

function genNetwork(req, res){
    User.find({}, function(err, users){
        if(err) throw err;
        users.forEach(function(user){
            var size = genRand(2,8);
            for(var i = 0; i < size; i++){
                genNet(user, users);
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








module.exports = app;