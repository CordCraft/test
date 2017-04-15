/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Proximity = require("./proximity")


var deviceSchema = mongoose.Schema({
    userId:{ref:"Profile", type:mongoose.Schema.Types.ObjectId},
    macAddress:{
        type:String, unique:true
    },
    type:String,
    maker:String
});



deviceSchema.statics.convertToIds = function(userId, devices, callback){
    var macAddresses = devices.macAddresses;
    this.find({macAddress:{$in: macAddresses}}, function(err, devices){
        if(err) return callback(err);
        return callback(null, devices.userId);
    });
};


deviceSchema.statics.addProximity = function(userId, devices, callback){
    //get macAddresses
    var macAddresses = [];
    for(var i = 0; i < devices.length; i++) 
        macAddresses.push(devices[i].macAddress);
    
    //convert to userIds.
    var userIds = this.find({"device.macAddress":{$in:macAddresses}}, 
    {userId:1, _id:0});
    
    //creat Proximity object.
    if(userIds.length !== 0 || userIds !== null)
    return userIds.then(function(ids){
        for(var i = 0; i < ids.length; i++){
            var pId = ids[i]; //proximiter user Id
            return Proximity
                .find({bond:{$all:[userId, pId]}, endedAt:{$ne:null}})
                .then(function(proximity){
                    if(proximity.length === 0 || proximity === null)
                        return new Proximity({bond:[userId, pId], confirmed:false})
                        .save();
                    else {
                        proximity.confirmed = true;
                        return Proximity
                            .findByIdAndUpdate(proximity._id, proximity);
                    }
                });
        }
    });
};


var Device = mongoose.model('Device', deviceSchema);

module.exports = Device;