/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');
var Network = require("./network");


var proximityStreamSchema = mongoose.Schema({
    userId:{
        type:String, unique:true
    },
    stream:{
        time:{type:Date, default:Date.now},
        stream:Array
    }
});






var ProximityStream = mongoose.model("ProximityStream", proximityStreamSchema);


module.exports = ProximityStream;