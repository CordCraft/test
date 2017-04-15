/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var populateApp = require('express')();


var audio = require('./populate/audio');
var device = require('./populate/device');
var network = require('./populate/network');
var profile = require('./populate/profile');
var proximity = require('./populate/proximity');


populateApp.use('/audio', audio);
populateApp.use('/device', device);
populateApp.use('/network', network);
populateApp.use('/proximity', proximity);
populateApp.use('/profile', profile);






function GET(path, callback){
    http.get({
        hostname:"localhost",
        port:3000,
        path:"/populate/"+path
    }, callback);
}


var Profile = require("./model/profile")

var http = require('http');
var faker = require('faker');
var Network = require("./model/network")
populateApp.get('/', genNetwork);
    

    


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
                user.network.push(network._id);
                Profile.findByIdAndUpdate(user._id, user, function(err, user){
                    return console.log(network);
                });
            });
        }
        return null;
    }

    function genNetwork(req, res){
        Profile.find({}, function(err, users){
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


module.exports = populateApp;