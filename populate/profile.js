/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Profile = require('../model/profile');
var app = require('express')();


function genProfile(req, res){
    return Profile.fake(100, function(profiles){
       return Profile.insertMany(profiles).then(function(proifles){
           res.json(profiles);
       });
    });
}


app.get('/', function(req, res){
    genProfile(req, res);
});


module.exports = app;