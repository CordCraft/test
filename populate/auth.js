/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Auth = require('../model/authentication');
var Profile = require('../model/profile');
var app = require('express')();


function genAuth(req, res){
    Profile.find({}).then(function(profiles){
        profiles.forEach(function(profile){
            Auth.fake(1, function(auth){
                new Auth(auth).save();
            });
        });
    });
}

app.get('/', function(req, res){
    genAuth.then(res.status(200).json);
});


module.exports = app;

