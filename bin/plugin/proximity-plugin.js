/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

var Network = require("../../model/network");
var Proximity = require("../../model/proximity");



var getProximityZeroIds = function(conditions){
    conditions.userId = Array.isArray(conditions.userId)?
        conditions.userId:[conditions.userId];
    conditions.bond = {$in:conditions.userId};
    var conditions2 = {};
    conditions2.bond = conditions.bond;
    return Network.find({});
};




var getProximityFirstIds = function(conditions){
    //conditions.userId = Array.isArray(conditions.userId)?
        //conditions.userId:conditions.userId !== null?[conditions.userId]:{};
    //conditions.userId = {$in: conditions.userId};
    return Proximity.find(conditions).then(function(p1s){
        return p1s[0];
    });
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






var ProximityPlugin = function(schema, options){
    
    schema.statics.find0 = function(conditions, fields, options, callback){
        var $this = this;
        return getProximityZeroIds(conditions)
            .then(function(p0sId){
            conditions.userId = {$in: p0sId.bond};
            console.log(conditions);
            return $this.find(conditions, fields, options, callback);
        }).catch(function(err){
            console.log(err);
        });
    };
    
    schema.statics.find1 = function(conditions,pageCond, callback){
        var $this = this;
        var result = [];
        /*return getProximityFirstIds(conditions)
            .then(function(p1s){
            conditions.userId = {$in:p1s.proximiters};
            return $this.paginate(conditions, pageCond)
                .then(function(model){
                result.push(model);
                return model;
            }).then(function(xx){
                console.log(result);
                callback(result)
            });
        });*/
        return getProximityFirstIds(conditions)
                .then(function(p1s){
            var condition = {userId:{$in:p1s.proximiters}};
            return $this.find(condition)
                    .then(function(models){
                return models;
            });
        }).then(function(models){
            return callback(null, models);
        });
    };
    
    schema.statics.find2 = function(conditions, fields, options, callback){
        var $this = this;
        return getProximitySecondIds(conditions)
            .then(function(p2sId){
                console.log(p2sId);
            conditions.userId = {$in:p2sId};
            return $this.find(conditions, fields, options, callback);
        });
    };
    
    schema.statics.find3 = function(conditions, fields, options, callback){
        var $this = this;
        return getProximityThirdIds(conditions)
            .then(function(p3sId){
                console.log(p3sId);
            conditions.userId = {$in:p3sId};
            return $this.find(conditions, fields, options, callback);
        });
    };
    
};


module.exports = ProximityPlugin;


