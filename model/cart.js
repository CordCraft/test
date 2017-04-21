/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mongoose = require("mongoose");


var cartSchema = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:"Profile"},
    product: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    status:String 
});


var Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;