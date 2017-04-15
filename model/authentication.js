/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var AccessToken = require('./accessToken');
var Type = require('mongoose-easy-types').Types;




var authSchema = mongoose.Schema({
    local: {
        authname:Type.internet.userName(),
        password:Type.internet.password()
    },
    facebook: String
});


authSchema.methods.genAccessTokenAndSave = function(callback){
    var auth = this;
    var accessToken = new AccessToken({authId:auth._id});
    return accessToken.genSecretTokenAndSave(function(err, accessToken){
        callback(err, auth, accessToken);
    });
};

authSchema.methods.create = function(callback){
    var auth = this;
    return auth.save(function(err, auth){
        if(err) callback(err);
        auth.genAccessTokenAndSave(callback);
    });
};


var Authentication = mongoose.model('Authentication', authSchema);
var Audio = require("./audio");
var authIds = [];

module.exports = Authentication;

