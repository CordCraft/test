/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');
var Type = require("mongoose-easy-types").Types;

var callSchema = mongoose.Schema({
    bond:[{type:mongoose.Schema.Types.ObjectId, ref:"Profile"}],
    interactions:[{
        userId:{ref:"Profile", type:mongoose.Schema.Types.ObjectId},
        length:Type.random.number(),
        status:Type.random.boolean(),
        time:{
            type:Date, default:Date.now
        }
    }]
});


var Call = mongoose.model("Call", callSchema);


module.exports = Call;