/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Network = require("./network");


var proximitySchema = mongoose.Schema({
    userId:{
        type:String, unique:true
    },
    stream:[{
        time:{type:Date, default:Date.now},
        userIds:Array
    }]
});



/*
 * GENERAL/SUPER FOCUSED PROXIMITY VIEW. FOCUSED SEEING EYE
 * @param {type} userId
 * @param {type} callback
 * @returns {unresolved}
 * 
 */

var Device = require('./device');
proximitySchema.methods.create = function(callback){
    return this.save(callback);
};






proximitySchema.methods.addProximitersById = function(userId, proximtersId, callback){
    var proximiters = {
        time: new Date(),
        userIds:proximtersId
    };
    this.updateOrCreate(userId, {proximiters:{$push:proximiters}}, callback);
};


proximitySchema.methods.addProximitersByDevice = function(userId, devices, callback){
    return Device.convertToIds(devices, function(err, userIds){
        if(err) return callback(err);
        this.addProximitersById(userIds, callback);
    });
};

proximitySchema.methods.deleteProximitersByTime = function(userId, time, callback){
    
};


proximitySchema.statics.delete = function(userId, callback){
    return this.removeOne(userId, callback);
}


proximitySchema.statics.getByProximityZero = function(userId, callback){
    return Network.getConfirmedNetworksById(userId, callback);
};


proximitySchema.statics.getByProximityFirst = function(userId, callback){
    return this.findOne(userId, {"proximiters.time": -1}, function(err, proximity){
        if(err) callback(err);
        else{
            var proximiters1 = proximity.proximiters[0];
            callback(null, proximiters1);
        }
    });
}; 


proximitySchema.statics.getByProximitySecond = function(userId, callback){
    return this.getProximityZero(userId, function(err, networks){
        if(err) callback(err);
        else{
            var networkArr = this.getUnionOfArray(networks.bonds, userId);
            this.find({userId: {$in: networkArr}}, {"proximiters.time": -1}, 
            function(err, proximters2){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getByProximityThird = function(userId, callback){
    return this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            var proximiters = proximiters1.userIds;
            return Network.getSharedNetworksByIds(proximiters, 
            function(err, proximiters3){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getByProximity = function(userId, callback){
    this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            this.getProximitySecond(userId, function(err, proximiters2){
                if(err) callback(err);
                else{
                    this.getProximityThird(userId, function(err, proximiters3){
                        var proximiters = unionOf(proximiters1, proximiters2, proximiters3);
                        callback(null, proximiters);
                    });
                }
            });
        }
    });
};





/*
 * 
 * SPECIFIC PROXIMITY VIEW. LOW LEVEL ALL SEEING EYE
 * 
proximitySchema.statics.getAllProximityZero = function(userIds, callback){
    return Network.getConfirmedNetworksByIds(userIds, callback);
};


proximitySchema.statics.getAllProximityFirst = function(userIds, callback){
    return this.findOne(userId, {"proximiters.time": -1}, function(err, proximity){
        if(err) callback(err);
        else{
            var proximiters1 = proximity.proximiters[0];
            callback(null, proximiters1);
        }
    });
};


proximitySchema.statics.getAllProximitySecond = function(userId, callback){
    return this.getProximityZero(userId, function(err, networks){
        if(err) callback(err);
        else{
            var networkArr = this.getUnionOfArray(networks.bonds, userId);
            this.find({userId: {$in: networkArr}}, {"proximiters.time": -1}, 
            function(err, proximters2){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getAllProximityThird = function(userId, callback){
    return this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            var proximiters = proximiters1.userIds;
            return Network.getSharedNetworksByIds(proximiters, 
            function(err, proximiters3){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getAllProximity = function(userId, callback){
    this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            this.getProximitySecond(userId, function(err, proximiters2){
                if(err) callback(err);
                else{
                    this.getProximityThird(userId, function(err, proximiters3){
                        var proximiters = unionOf(proximiters1, proximiters2, proximiters3);
                        callback(null, proximiters);
                    });
                }
            });
        }
    });
};
*/





/*
 * ULTIMATE PROXIMITY DATA. ALL SEEING EYE
 * 
 * 
proximitySchema.statics.getProximityZero = function(callback){
    return Network.getConfirmedNetworks(callback);
};


proximitySchema.statics.getProximityFirst = function(callback){
    return this.find({"proximiters.time": -1}, function(err, proximity){
        if(err) callback(err);
        else{
            var proximiters1 = proximity.proximiters[0];
            callback(null, proximiters1);
        }
    });
};


proximitySchema.statics.getProximitySecond = function(callback){
    return this.getProximityZero(function(err, networks){
        if(err) callback(err);
        else{
            var networkArr = this.getUnionOfArray(networks.bonds, userId);
            this.find({userId: {$in: networkArr}}, {"proximiters.time": -1}, 
            function(err, proximters2){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getProximityThird = function(callback){
    return this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            var proximiters = proximiters1.userIds;
            return Network.getSharedNetworksByIds(proximiters, 
            function(err, proximiters3){
                if(err) callback(err);
                else{
                    //Do something with the returned proximity list
                }
            });
        }
    });
};


proximitySchema.statics.getProximity = function(callback){
    this.getProximityFirst(userId, function(err, proximiters1){
        if(err) callback(err);
        else{
            this.getProximitySecond(userId, function(err, proximiters2){
                if(err) callback(err);
                else{
                    this.getProximityThird(userId, function(err, proximiters3){
                        var proximiters = unionOf(proximiters1, proximiters2, proximiters3);
                        callback(null, proximiters);
                    });
                }
            });
        }
    });
};
*/





var Proximity = mongoose.model("Proximity", proximitySchema);


module.exports = Proximity;