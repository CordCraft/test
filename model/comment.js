/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Type = require("mongoose-easy-types");


var commentSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Type.ObjectId, ref:"Profile"},
    article:String,
    rating:Number
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;