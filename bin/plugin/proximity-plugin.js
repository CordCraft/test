/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

var Network = require("../../model/network");
var Proximity = require("../../model/proximity");
var ObjectId = require("mongoose").Types.ObjectId;
/*
 * 
 */
var ProximityPlugin = function(schema, option){
    
    
    /*function getLowerAggregateArg(model, conditions){
        var modelName = model.modelName;
        console.log(conditions);
        return [
            {$match:{bond:{$in:[ObjectId(conditions.userId)]}}},
            {$unwind:"$bond"},
            {$match:{bond:{$ne:ObjectId(conditions.userId)}}},
            {$lookup:{
                from:modelName.toLowerCase()+"s",
                localField:"bond",
                foreignField:"userId",
                as:modelName.toLowerCase()
            }}
        ];
    }*/
    
    function getLowerAggregateArg(model, conditions){
        var modelName = model.modelName.toLowerCase();
        project = {};
        project[modelName] = 1;
        project['_id'] = 0;
        return [
            {$match:{bond:{$in:[ObjectId(conditions.userId)]}}},
            {$unwind:"$bond"},
            {$match:{bond:{$ne:ObjectId(conditions.userId)}}},
            {$lookup:{
                from:modelName+"s",
                localField:"bond",
                foreignField:modelName === "profile"?"_id":"userId",
                as:modelName
            }},
            {$project:project},
            {$unwind:"$"+modelName}
        ];
    }
    
    
    function getUpperAggregateArg(edge, model, conditions){
        var modelName = model.modelName.toLowerCase();
        var match = null;
        match = {bond:{$in:[ObjectId(conditions.userId)]}, confirmed:true};
        
        var project = {};
        project[modelName] = 1;
        project['bond'] = 1;
        project['_id'] = 0;
        return  [
            {$match:match},
            {$unwind:"$bond"},
            {$match:{bond:{$ne:ObjectId(conditions.userId)}}},
            {$lookup:{
                from:edge==="proximity"?"proximities":edge+"s",
                localField:"bond",
                foreignField:"bond",
                as:edge
            }},
            {$unwind:"$"+edge},
            {$unwind:"$"+edge+".bond"},
            edge === "network"?{$match:{'network.shared':true}}:{$match:{'proximity.confirmed':true}},
            {$redact:{
                $cond:{
                    if:{$eq:['$'+edge+'.bond', '$bond'] },
                    then:"$$PRUNE",
                    else:"$$KEEP"
                }
            }},
            {$lookup:{
                from:modelName+"s",
                localField:edge+".bond",
                foreignField:modelName === "profile"?"_id":"userId",
                as:modelName
            }},
            {$project:project},
            {$unwind:"$"+modelName}
        ];
    }
    
    
    
    /*
     * 
     */
    
    
    schema.statics.proximity0 = function(conditions){
        return Network.aggregate(getLowerAggregateArg(this, conditions));
    };
    
    
    /*
     * 
     */
    schema.statics.proximity1 = function(conditions){
        return Proximity.aggregate(getLowerAggregateArg(this, conditions));
    };
    
    
    
    /*
     * 
     */
    schema.statics.proximity2 = function(conditions){
        return Network.aggregate(getUpperAggregateArg("proximity", this, conditions));
    };
    
    
    /*
     * 
     */
    schema.statics.proximity3 = function(conditions){
        return Proximity.aggregate(getUpperAggregateArg("network", this, conditions));
    };
};


module.exports = ProximityPlugin;


