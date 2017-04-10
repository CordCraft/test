/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require("mongoose");
var Type = require("mongoose-easy-types").Types;


var networkSchema = mongoose.Schema({
    bond:[{
        type:String, 
        ref:"User",
        unique:true
    }],
    confirmed:Type.random.boolean(),
    shared:Type.random.boolean(),
    meet:Type.random.boolean(),
    time:Type.date.future()
});

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

var Proximity = require("./proximity");



var getProximityZeroIds = function(conditions){
    conditions.userId = Array.isArray(conditions.userId)?
        conditions.userId:[conditions.userId];
    conditions.bond = {$in:conditions.userId};
    var conditions2 = conditions;
    conditions2.userId = null;
    return Network.find(conditions2);
};




var getProximityFirstIds = function(conditions){
    conditions.userId = Array.isArray(conditions.userId)?
        conditions.userId:[conditions.userId];
    conditions.userId = {$in: conditions.userId};
    return Proximity.find(conditions);
};



var getProximitySecondIds = function(conditions){
    return getProximityZeroIds(conditions).then(function(p0sId){
        conditions.userId = p0sId;
        return getProximityFirstIds(conditions);
    });
};


var getProximityThirdIds = function(conditions){
    return getProximityFirstIds(conditions)
            .then(function(p1Ids){
        conditions.userId = p1Ids;
        conditions.shared = true;
        return getProximityZeroIds(conditions);
    })
};


networkSchema.statics.findP = function(conditions, fields, options, callback){
    var $this = this;
    var p0sId = null;
    var p1sId = null;
    var p2sId = null;
    var p3sId = null;
    
    getProximityZeroIds(conditions)
            .then(function(ids){
        p0sId = ids;
    getProximityFirstIds(conditions)
                .then(function(ids){
            p2sId = ids;
        });
    });
    getProximityFirstIds(conditions)
            .then(function(ids){
        p1sId = ids;
    getProximityZeroIds(conditions)
                .then(function(ids){
            p3sId = ids;
        });
    });
    
};


networkSchema.statics.find0 = function(conditions, fields, options, callback){
    var $this = this;
    return getProximityZeroIds(conditions)
        .then(function(p0sId){
            console.log(p0sId);
        conditions.userId = {$in: p0sId};
        return $this.find(conditions, fields, options, callback);
    }).catch(function(err){
        callback(err);
    });
};

networkSchema.statics.find1 = function(conditions, fields, options, callback){
    var $this = this;
    return getProximityFirstIds(conditions)
        .then(function(p1sId){
            console.log(p1sId);
        p1sId = Array.isArray(p1sId)? p1sId : [p1sId];
        conditions.userId = {$in:p1sId};
        return $this.find(conditions, fields, options, callback);
    }).catch(function(err){
        callback(err);
    });
};

networkSchema.statics.find2 = function(conditions, fields, options, callback){
    var $this = this;
    return getProximitySecondIds(conditions)
        .then(function(p2sId){
            console.log(p2sId);
        conditions.userId = {$in:p2sId};
        return $this.find(conditions, fields, options, callback);
    }).catch(function(err){
        callback(err);
    });
};

networkSchema.statics.find3 = function(conditions, fields, options, callback){
    var $this = this;
    return getProximityThirdIds(conditions)
        .then(function(p3sId){
            console.log(p3sId);
        conditions.userId = {$in:p3sId};
        return $this.find(conditions, fields, options, callback);
    }).catch(function(err){
        callback(err);
    });;
};
    

var Network = mongoose.model("Network", networkSchema);


module.exports = Network;
















