/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Type = require('mongoose-easy-types').Types;

var proximitySchema = mongoose.Schema({
    userId:{
        type:String, 
        ref:"User",
        unique:true
    },
    time:{type:Date, default:Date.now},
    proximiters:[{
        type:String
    }]
});




var Proximity = mongoose.model("Proximity", proximitySchema);


module.exports = Proximity;