/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require("mongoose");
var Type = require("mongoose-easy-types").Types;


/*
 * 
 */
var proximitySchema = mongoose.Schema({
    bond:[{type:mongoose.Schema.Types.ObjectId, ref:"Profile"}],
    confirmed:Type.random.boolean(),
    createdAt:{type:Date, default:Date.now},
    endedAt:Date
});


proximitySchema.statics.findByBond = function(conditions){
    return this.find({bond:conditions.bond});
}

proximitySchema.statics.findByUserId = function(conditions){
    return this.find({bond:{$elemMatch: {$eq:conditions.userId}}});
}


/*
 * 
 */




var Proximity = mongoose.model("Proximity", proximitySchema);




module.exports = Proximity;