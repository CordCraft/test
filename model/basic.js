/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");


var basicSchema = mongoose.Schema({
    dob:Date,
    relationshipStatus:String,
    gender:String
});


basicSchema.statics.create = function(callback){
    this.save(callback);
};


basicSchema.statics.update = function(basicId, accessorId, callback){
    
};


basicSchema.statics.delete = function(basicId, accessorId, callback){
    
};


basicSchema.statics.findByUserId = function(userId, accessorId, callback){
    return classifyAccessor(userId, accessorId, function(err, accessType){
        if(err) callback(err);
        else this.find({userId:userId},{accessType:accessType}, callback);
    });
};


basicSchema.statics.findByUserIds = function(userIds, accessorId, callback){
    return classifyAccessor(userIds, accessorId, function(err, accessType){
        if(err) callback (err);
        else this.find({userId:{$in:userIds}},{accessType:accessType}, callback);
    });
};





var Basic = mongoose.model("Basic", basicSchema);

module.exports = Basic;