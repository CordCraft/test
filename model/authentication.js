/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var User = require("./user");
var Type = require('mongoose-easy-types').Types;
var secretGen = require('rand-token').uid;
var jwt = require("jsonwebtoken");
var io = require("../server");

var SECRET_LENGTH = 16;




var authSchema = mongoose.Schema({
    token: {
        token:{type:String, unique: true},
        secret:String
    },
    local: {
        username:{type:String /*Type.internet.userName()*/, unique:true},
        password:Type.internet.password()
    },
    facebook: String
});



authSchema.statics.genAccessToken = function(){
    var accessToken = {};
    var secret = secretGen(SECRET_LENGTH);
    var token = jwt.sign({authentication:this}, secret);
    
    accessToken.secret = secret;
    accessToken.token = token;
    return accessToken;
};



authSchema.statics.findByIdAndUpdate = function(id, auth){
    //check if the user already exist.
    var $this = this;
    return this.model("Authentication").findById(auth).then(function(exist){
        if(exist && auth.local.username !== null){
            auth.token = $this.genAccessToken();
            return $this.update({_id:id}, auth).then(function(){
                return auth;
            });
        }
        else if(auth.local.username === null || auth.local.password === null){
            throw new Error("provide username and password");
        }
        else{
            throw new Error("username doesn't exist");
        };
    });
};





authSchema.statics.onProfileCreationStarted = function(data){
    
};

authSchema.statics.onProfileCreationCompleted = function(profile, next, done){
    new User({profile:profile._id, userId:profile._id})
        .create();
    return next();
};

authSchema.statics.onDeviceCreationCompleted = function(device){
    User.find({userId:device.userId}).then(function(user){
        user.device = device._id;
        User.findByIdAndUpdate(user._id, user);
    });
    return next();
};

authSchema.statics.onUserCreationCompleted = function(user){
    this.userId = user.userId; //get the userId from the created user collection.
    this.token = this.genAccessToken(this.userId); //generate access token with userId
    return done(null, this);
};


authSchema.statics.onAuthenticationCreationCompleted = function(auth){
    
    return auth;
};

var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').Auth;
authSchema.plugin(FunctionCreatePlugin);
var Authentication = mongoose.model('Authentication', authSchema);


module.exports = Authentication;

