/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');
var Type = require("mongoose-easy-types").Types;


var chatSchema = mongoose.Schema({
    bond:[{ref:"Profile", type:mongoose.Schema.Types.ObjectId}],
    messages:[{
        userId:String,
        message:Type.lorem.sentence(),
        status:Type.random.boolean(),
        time:{
            type:Date, default:Date.now()
        }
    }]
});


var Chat = mongoose.model("Chat", chatSchema);


module.exports = Chat;