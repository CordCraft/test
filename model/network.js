/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require("mongoose");
var Type = require("mongoose-easy-types").Types;


var networkSchema = mongoose.Schema({
    bond:[{type:mongoose.Schema.Types.ObjectId, ref:"Profile"}],
    confirmed:Type.random.boolean(),
    shared:Type.random.boolean(),
    meet:Type.random.boolean(),
    time:Type.date.future()
});


networkSchema.statics.findByBond = function(conditions){
    return this.find({bond:conditions.bond});
}

networkSchema.statics.findByUserId = function(conditions){
    return this.find({bond:{$elemMatch: {$eq:conditions.userId}}});
}



networkSchema.statics.getConfirmedNetworksByUserId = function(userId, callback){
    return this.find({bond:{$or:userId}},{confirmed:true}, function(networks){
        
    });
};

networkSchema.statics.getSharedNetworksByUserId = function(userId, callback){
    return this.find({bond:{$or:userId}}, {shared:true}, function(networks){
        
    });
};

networkSchema.statics.getSharedNetworksByUserIds = function(userIds, callback){
    return this.find({bond:{$or:userIds}}, {shared:true}, function(networks){
        
    });
};


networkSchema.statics.getSentFriendRequestByUser = function(userId, callback){
    return this.find({bond:{$or:userId}}, {confirmed:false}, function(networks){
        
    });
};

var Network = mongoose.model("Network", networkSchema);


module.exports = Network;
















