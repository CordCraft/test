/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Proximity = require("./profile");


var videoSchema = mongoose.Schema({
    userId:String,
    length:Number,
    src:String,
    coverImage:String,
    description:String,
    title:String,
    accessType:String
});


videoSchema.statics.create = function(callback){
    this.save(callback);
};


videoSchema.statics.update = function(videoId, accessorId, callback){
    
};


videoSchema.statics.delete = function(videoId, accessorId, callback){
    
};


videoSchema.statics.findByUserId = function(userId, accessorId, callback){
    return classifyAccessor(userId, accessorId, function(err, accessType){
        if(err) callback(err);
        else this.find({userId:userId},{accessType:accessType}, callback);
    });
};


videoSchema.statics.findByUserIds = function(userIds, accessorId, callback){
    return classifyAccessor(userIds, accessorId, function(err, accessType){
        if(err) callback (err);
        else this.find({userId:{$in:userIds}},{accessType:accessType}, callback);
    });
};


videoSchema.statics.findByProximityZero = function(userId, accessorId, callback){
    return Proximity.getProximityZero(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


videoSchema.statics.findByProximityFirst = function(userId, accessorId, callback){
    return Proximity.getProximityFirst(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


videoSchema.statics.findByProximitySecond = function(userId, accessorId, callback){
    return Proximity.getProximitySecond(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


videoSchema.statics.findByProximityThird = function(userId, accessorId, callback){
    return Proximity.getProximityThird(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, accessorId, callback);
        }
    });
};


videoSchema.statics.findByProximity = function(userId, callback){
    return Proximity.getProximity(userId, function(err, proximiters){
        if(err) callback(err);
        else{
            var proximitersUserId = proximiters.userIds;
            this.findByUserIds(proximitersUserId, callback);
        }
    });
};



var Video = mongoose.model("Video", videoSchema);

module.exports = Video;