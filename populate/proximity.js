/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Proximity = require('../model/proximity');
var User = require('../model/user');
var faker = require('faker');
var app = require('express')();


function genProximity(req, res){
    
    
    User.find({},{_id:1}, function(err, users){
        if(err) throw err;
        users.forEach(function(user){
            var proximity = new Proximity({
                userId:user._id,
                proximiters: genUserArr(users)
            });
            proximity.save(function(err, proximity){
                if(err) console.log(err);
                console.log(JSON.stringify(proximity));
            });
        });
    });
    
    res.status(200).send("done");
    
};


function genRand(x,y){
    var rand = Math.random();
    var mod = y - x;
    rand = mod*rand;
    return Math.floor(rand)+x;
}



function genArr(size){
    var arr = [];
    for(var i = 0; i < size; i++){
        for(var k = 0; k < arr.length || arr.length === 0; k++){
            temp = genRand(0, 100);
            if(arr[k] === temp || temp === null) ;
            else{
                arr[i] = temp;
                break;
            }
        }
    }
    return arr;
};

function genUserArr(users){
    var size = genRand(0, 6);
    var arr = genArr(size);
    var userArr = [];
    for(var i = 0; i < arr.length; i++){
        userArr[i] = users[arr[i]];
    }
    return userArr;
}


function genStream(users){
    var size = genRand(0,20);
    var stream = [];
    for(var i = 0; i < size; i++){
        stream[i] = {
            time: Date.now(),
            userIds: genUserArr(users)
        };
    }
    return stream;
}




app.get('/', genProximity);

app.get('/find', function(req, res){
    Proximity.find({}, function(err, proximity){
        if(err) res.status(400).json(err);
        res.json(proximity)
    })
})


module.exports = app;