/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');


var chatSchema = mongoose.Schema({
    bond:{type:Array, unique:true},
    messages:[{
        userId:String,
        message:String,
        status:Boolean,
        time:{
            type:Date, default:Date.now()
        }
    }]
});


var Chat = mongoose.model("Chat", chatSchema);


module.exports = Chat;