/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require('mongoose');


var callSchema = mongoose.Schema({
    bond:{type:String, unique:true},
    talks:[{
        userId:String,
        length:Number,
        status:Boolean,
        time:{
            type:Date, default:Date.now()
        }
    }]
});


var Call = mongoose.model("Call", callSchema);


module.exports = Call;