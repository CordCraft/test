/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");


var notificationSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"Profile"},
    action:{
        event:String,
        data:Object,
        createdAt:{type:String, default:Date.now()}
    }
});


notificationSchema.statics.create = function(callback){
    this.save(callback);
};


notificationSchema.statics.findByUserId = function(userId, accessorId, callback){
    return classifyAccessor(userId, accessorId, function(err, accessType){
        if(err) callback(err);
        else this.find({userId:userId},{accessType:accessType}, callback);
    });
};


notificationSchema.statics.findByUserIds = function(userIds, accessorId, callback){
    return classifyAccessor(userIds, accessorId, function(err, accessType){
        if(err) callback (err);
        else this.find({userId:{$in:userIds}},{accessType:accessType}, callback);
    });
};

notificationSchema.statics.onNotificationUpdated = function(result){
    var me = result.userId;
    io.of("/friend:request").to(me).emit("friend/request/sent", result);
};


notificationSchema.statics.onFriendRequestSent = function(result){
    var me = result.from;
    io.of("/friend:request").to(me).emit("friend/request/sent", result);
    
};


notificationSchema.statics.onFriendRequestRecieved = function(result){
    var you = result.to;
    io.of("/friend:request").to(you).emit("friend/request/received", result);
};

notificationSchema.statics.onFriendRequestConfirmed = function(result){
    var me = result.from;
    var you = result.to;
    io.of("/friend:request").to(me).to(you).emit("friend/request/confirmed", result);
};


notificationSchema.statics.onFriendRequestRejected = function(result){
    var me = result.from;
    var you = result.to;
    io.of("/friend:request").to(me).to(you).emit("friend/request/rejected", result);
};


notificationSchema.statics.onMeetRequestSent = function(result){
    var me = result.from;
    io.of("/friend:request").to(me).emit("meet/request/sent", result);
    
};



notificationSchema.statics.onMeetRequestReceived = function(result){
    var you = result.to;
    io.of("/friend:request").to(you).emit("meet/request/received", result);
    
};


notificationSchema.statics.onMeetRequestRejected = function(result){
    var me = result.from;
    var you = result.to;
    io.of("/friend:request").to(me).to(you).emit("meet/request/rejected", result);
};



notificationSchema.statics.onMeetRequestConfirmed = function(result){
    var me = result.from;
    var you = result.to;
    io.of("/friend:request").to(me).to(you).emit("friend/request/confirmed", result);
    
};


notificationSchema.statics.onProximityBondBroken = function(result){
    var user1 = result.bond[0];
    var user2 = result.bond[1];
    io.of("/proximity:notification").to(user1).to(user2).emit("proximity/bond/broken", result);
};


notificationSchema.statics.onProximityBondFormed = function(result){
    var user1 = result.bond[0];
    var user2 = result.bond[1];
    io.of("/proximity:notification").to(user1).to(user2).emit("proximity/bond/formed", result);
    
};


notificationSchema.statics.onProximityBondConfirmed = function(result){
    var user1 = result.bond[0];
    var user2 = result.bond[1];
    io.of("/proximity:notification").to(user1).to(user2).emit("proximity/bond/confirmed", result);
};



notificationSchema.statics.onNewsfeedsUpdated = function(result){
    var me = result.from;
    io.of("/newsfeeds").to(me).emit("newsfeeds/updated", result);
};




notificationSchema.statics.onAutosearchInProgress = function(result){
    var me = result.userId;
    io.of("/auto:search").to(me).emit("auto/search/in:prgress", result);
};


notificationSchema.statics.onAutosearchMatchFound = function(result){
    var me = result.userId;
    io.of("/auto:search").to(me).emit("auto/search/found", result);
};

var FunctionCreatePlugin = require('../bin/plugin/fn-create-plugin').NoAuth;
notificationSchema.plugin(FunctionCreatePlugin);


var Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;