/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');



var searchSchema = mongoose.Schema({
    userId:{type:String, unique:true},
    queries:[{
        query:{type:Object, es_indexed:true},
        auto:{type:Boolean, default:false},
        alert:{type:Boolean, default:false},
        found:{type:Boolean, default:true},
        zero:{type:Boolean, default:false},
        first:{type:Boolean, default:true},
        second:{type:Boolean, default:true},
        third:{type:Boolean, default:true},
        time:{type:Date, default:Date.now()}
    }]
});


var conditions = null;


searchSchema.plugin(mongoosastic);

var Search = mongoose.model("Search", searchSchema);


module.exports = Search;


