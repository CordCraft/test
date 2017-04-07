/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');



var pigeonSchema = mongoose.Schema({
    userId:{
        type:String, unique:true
    },
    hole: String
});

var Pigeon = mongoose.model("Pigeon", pigeonSchema);



module.exports = Pigeon;
