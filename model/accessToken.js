/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require('mongoose');
var secretGen = require('rand-token').uid;
var jwt = require("jsonwebtoken");

var SECRET_LENGTH = 16;


var accessTokenSchema = mongoose.Schema({
    token:String,
    accessId:String,
    secret:String
});

accessTokenSchema.method.genSecretTokenAndSave = function(callback){
    var accessToken = this.model('AccessToken');
    var secret = secretGen(SECRET_LENGTH);
    var token = jwt.sign({accessId:accessToken.accessId}, secret);
    
    accessToken.secret = secret;
    accessToken.token = token;
    accessToken.save(callback);
};

var AccessToken = mongoose.model('AccessToken', accessTokenSchema);



module.exports = AccessToken;

