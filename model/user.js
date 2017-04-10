/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var AccessToken = require('./accessToken');
var Type = require('mongoose-easy-types').Types;




var userSchema = mongoose.Schema({
    local: {
        username:Type.internet.userName(),
        password:Type.internet.password()
    },
    facebook: String
});


userSchema.methods.genAccessTokenAndSave = function(callback){
    var user = this;
    var accessToken = new AccessToken({userId:user._id});
    return accessToken.genSecretTokenAndSave(function(err, accessToken){
        callback(err, user, accessToken);
    });
};

userSchema.methods.create = function(callback){
    var user = this;
    return user.save(function(err, user){
        if(err) callback(err);
        user.genAccessTokenAndSave(callback);
    });
};


var User = mongoose.model('User', userSchema);
var Audio = require("./audio");
var userIds = [];
//generate();
generate = function(){
    User.fake(100, function(users){
    users.forEach(function(user){
        new User(user).save(function(err, user){
            userIds.push(user._id);
            console.log(user);
             Audio.fake(10, function(audios){
                 audios.forEach(function(audio){
                     audio.userId = user._id;
                     new Audio(audio).save(console.log)
                 });
             });    
        });
    });
 });
}
module.exports = User;

