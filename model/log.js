/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Proximity = require("./proximity");


var logSchema = mongoose.Schema({
    userId:String,
    length:Number,
    src:String,
    coverImage:String,
    description:String,
    title:String,
    accessType:String
});


logSchema.statics.create = function(callback){
    this.save(callback);
};


logSchema.statics.update = function(logId, accessorId, callback){
    
};


logSchema.statics.delete = function(logId, accessorId, callback){
    
};


logSchema.statics.findByUserId = function(userId, accessorId, callback){
    return classifyAccessor(userId, accessorId, function(err, accessType){
        if(err) callback(err);
        else this.find({userId:userId},{accessType:accessType}, callback);
    });
};


logSchema.statics.findByUserIds = function(userIds, accessorId, callback){
    return classifyAccessor(userIds, accessorId, function(err, accessType){
        if(err) callback (err);
        else this.find({userId:{$in:userIds}},{accessType:accessType}, callback);
    });
};


logSchema.statics.findByProximityZero = function(userId, accessorId, callback){
    return Proximity.getProximityZero(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


logSchema.statics.findByProximityFirst = function(userId, accessorId, callback){
    return Proximity.getProximityFirst(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


logSchema.statics.findByProximitySecond = function(userId, accessorId, callback){
    return Proximity.getProximitySecond(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


logSchema.statics.findByProximityThird = function(userId, accessorId, callback){
    return Proximity.getProximityThird(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


logSchema.statics.findByProximity = function(userId, callback){
    return Proximity.getProximity(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, callback);
        }
    });
};



var Log = mongoose.model("Log", logSchema);

module.exports = Log;